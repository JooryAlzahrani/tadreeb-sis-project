<?php
header('Content-Type: application/json');
require '../db/connection.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['error' => 'No data provided']);
    exit;
}

$sql = "INSERT INTO Internship 
    (title, company, category, location, short_description, full_description, requirements, features, image_url, application_link, duration, semester, deadline, slug)
    VALUES 
    (:title, :company, :category, :location, :short_description, :full_description, :requirements, :features, :image_url, :application_link, :duration, :semester, :deadline, :slug)";

$stmt = $pdo->prepare($sql);

try {
    $stmt->execute([
        ':title' => $data['title'],
        ':company' => $data['company'],
        ':category' => $data['category'] ?? null,
        ':location' => $data['location'] ?? null,
        ':short_description' => $data['short_description'] ?? null,
        ':full_description' => $data['full_description'] ?? null,
        ':requirements' => isset($data['requirements']) ? json_encode($data['requirements']) : null,
        ':features' => isset($data['features']) ? json_encode($data['features']) : null,
        ':image_url' => $data['image_url'] ?? null,
        ':application_link' => $data['application_link'] ?? null,
        ':duration' => $data['duration'] ?? null,
        ':semester' => $data['semester'] ?? null,
        ':deadline' => $data['deadline'] ?? null,
        ':slug' => $data['slug'] ?? null,
    ]);
    echo json_encode(['success' => true, 'internshipID' => $pdo->lastInsertId()]);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
