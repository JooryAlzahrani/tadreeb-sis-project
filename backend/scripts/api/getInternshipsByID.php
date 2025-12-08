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
$internship = $stmt->fetch();

if ($internship) {
    echo json_encode($internship);
} else {
    echo json_encode(['error' => 'Internship not found']);
}
?>
