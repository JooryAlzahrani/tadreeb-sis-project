<?php
header('Content-Type: application/json');
require '../db/connection.php';

$id = $_GET['id'] ?? null;

if (!$id) {
    echo json_encode(['error' => 'Internship ID is required']);
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM Internship WHERE internshipID = :id");
$stmt->execute([':id' => $id]);
$row = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$row) {
    echo json_encode(['error' => 'Internship not found']);
    exit;
}

$internship = [
    "id" => $row["internshipID"],
    "title" => $row["title"],
    "paragraph" => $row["short_description"],
    "image" => $row["image_url"],
    "author" => [
        "name" => $row["company"],
        "image" => $row["image_url"],
        "designation" => $row["category"] ?? "Internship"
    ],
    "tags" => [$row["category"] ?? "General"],
    "publishDate" => $row["posted_date"],
    "slug" => $row["slug"],
    "location" => $row["location"],
    "deadline" => $row["deadline"]
];

echo json_encode($internship);
?>
