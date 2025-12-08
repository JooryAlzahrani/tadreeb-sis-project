<?php
header('Content-Type: application/json');
require '../db/connection.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['internshipID'])) {
    echo json_encode(['error' => 'Internship ID is required']);
    exit;
}

$sql = "UPDATE Internship SET
    title = :title,
    company = :company,
    category = :category,
    location = :location,
    short_description = :short_description,
    full_description = :full_description,
    requirements = :requirements,
    features = :features,
    image_url = :image_url,
    application_link = :application_link,
    duration = :duration,
    semester = :semester,
    deadline = :deadline,
    slug = :slug
    WHERE internshipID = :internshipID";

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
        ':internshipID' => $data['internshipID'],
    ]);
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
