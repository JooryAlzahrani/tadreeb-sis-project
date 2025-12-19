<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Include database connection (PDO)
require_once '../db/connection.php';

// Allow only POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "success" => false,
        "message" => "Invalid request method. Only POST is allowed."
    ]);
    exit;
}

// Read JSON data sent from frontend
$data = json_decode(file_get_contents("php://input"), true);

// If JSON decoding fails, fallback to $_POST
if (json_last_error() !== JSON_ERROR_NONE) {
    $data = $_POST;
}

// Collect input data
$email = $data["email"] ?? null;
$password = $data["password"] ?? null;

// Basic validation
if (empty($email) || empty($password)) {
    echo json_encode([
        "success" => false,
        "message" => "Email and password are required."
    ]);
    exit;
}

try {
    // Check if email exists
    $sql = "SELECT password FROM Users WHERE email = ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$email]);

    if ($stmt->rowCount() === 0) {
        // Case 3: Email not found
        echo json_encode([
            "success" => false,
            "errorType" => "email_not_found",
            "message" => "Email does not exist."
        ]);
        exit;
    }

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Verify password
    if (password_verify($password, $user["password"])) {
        // Case 1: Login successful
        echo json_encode([
            "success" => true,
            "message" => "Login successful."
        ]);
    } else {
        // Case 2: Wrong password
        echo json_encode([
            "success" => false,
            "errorType" => "wrong_password",
            "message" => "Incorrect password."
        ]);
    }

} catch (PDOException $e) {
    // Database error
    echo json_encode([
        "success" => false,
        "message" => "Database error during login.",
        "details" => $e->getMessage()
    ]);
}
?>