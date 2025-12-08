<?php
header('Content-Type: application/json');
require '../db/connection.php';

try {
    $stmt = $pdo->query("SELECT * FROM Internship WHERE isVerified = TRUE ORDER BY posted_date DESC");
    $internships = $stmt->fetchAll();
    echo json_encode($internships);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
