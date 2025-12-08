<?php
header('Content-Type: application/json');
require '../db/connection.php';

try {
    $stmt = $pdo->query("SELECT * FROM Internship WHERE isVerified = TRUE ORDER BY posted_date DESC");
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $internships = [];

    foreach ($rows as $row) {
        $internships[] = [
            "id" => $row["id"],
            "title" => $row["title"],
            "paragraph" => $row["description"], 
            "image" => $row["logo"], 
            "author" => [
                "name" => $row["company"],
                "image" => $row["logo"],
                "designation" => $row["field"] ?? "Internship"
            ],
            "tags" => [$row["category"] ?? "General"],
            "publishDate" => $row["posted_date"]
        ];
    }

    echo json_encode($internships);

} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
