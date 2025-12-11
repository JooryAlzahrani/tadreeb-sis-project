<?php
// This script fetches an internship by ID from the database and returns it in JSON format
header('Content-Type: application/json'); // Set the content type to JSON
require '../db/connection.php'; // Include the database connection

$id = $_GET['id'] ?? null; // gets internship ID from the URL query string. if no ID is provided, it defaults to null.

if (!$id) { // if no ID is provided, return an error message and exit.
    echo json_encode(['error' => 'Internship ID is required']);
    exit;
}

//Prepares SQL statement to fetch internship with the given ID
$stmt = $pdo->prepare("SELECT * FROM Internship WHERE internshipID = :id");
$stmt->execute([':id' => $id]);
$row = $stmt->fetch(PDO::FETCH_ASSOC);

// if no internship is found, return an error message and exit.
if (!$row) {
    echo json_encode(['error' => 'Internship not found']);
    exit;
}

// builds a structured JSON response with the returned data
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

echo json_encode($internship); // return the internship data in JSON format
?>
