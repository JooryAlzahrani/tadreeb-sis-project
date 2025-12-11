
<?php
// This script fetches all verified internships from the database and returns them in JSON format

// Set the content type to JSON
header('Content-Type: application/json');

// Include the database connection
require '../db/connection.php';

// gets internship ID from the URL query string. if no ID is provided, it defaults to null.
$id = $_GET['id'] ?? null;

// if no ID is provided, return an error message and exit.
if (!$id) {
    echo json_encode(['error' => 'Internship ID is required']);
    exit;
}

//Prepares SQL statement to fetch verified internship with the given ID and builds a structured JSON response with the returned data
try {
    $stmt = $pdo->prepare("SELECT * FROM Internship WHERE internshipID = :id AND is_verified = TRUE");
    $stmt->execute([':id' => $id]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($row) {
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
            "deadline" => $row["deadline"],
        ];

        echo json_encode($internship);
    } else {
        echo json_encode(['error' => 'Internship not found']); // error message if no internship is found
    }

} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]); // error message if it's a database error
}
?>
