<?php
// Fetch verified internships (single or all) and return JSON

header('Content-Type: application/json');
require '../db/connection.php';

$id = $_GET['id'] ?? null;

try {
    if ($id) {
        // Fetch ONE internship
        $stmt = $pdo->prepare("
            SELECT * 
            FROM Internship 
            WHERE internshipID = :id AND is_verified = TRUE
        ");
        $stmt->execute([':id' => $id]);
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    } else {
        // Fetch ALL verified internships
        $stmt = $pdo->prepare("
            SELECT * 
            FROM Internship 
            WHERE is_verified = TRUE
            ORDER BY posted_date DESC
        ");
        $stmt->execute();
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    if (!$rows) {
        echo json_encode([]);
        exit;
    }

    $internships = [];

    foreach ($rows as $row) {
        $internships[] = [
            "id" => $row["internshipID"],
            "title" => $row["title"],
            "paragraph" => $row["short_description"],
            "image" => $row["image_url"],

            "author" => [
                "name" => $row["company"],
                "image" => $row["image_url"],
                "designation" => $row["category"] ?? "Internship"
            ],

            "tags" => $row["category"] ? [$row["category"]] : [],
            "publishDate" => $row["posted_date"],
            "slug" => $row["slug"],
            "location" => $row["location"],
            "deadline" => $row["deadline"],
            "body" => $row["full_description"],
            "requirements" => $row["requirements"] 
                ? json_decode($row["requirements"], true) 
                : [],
            "features" => $row["features"] 
                ? json_decode($row["features"], true) 
                : [],
            "applyLink" => $row["application_link"],
            "duration" => $row["duration"],
            "semester" => $row["semester"],
        ];
    }

    echo json_encode($internships);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "error" => "Server error",
        "message" => $e->getMessage()
    ]);
}
