<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Include database connection
require_once '../db/connection.php';

// Allow only POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "success" => false,
        "message" => "Invalid request method. Only POST is allowed."
    ]);
    exit;
}

// Read JSON input
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

// If JSON fails, fallback to form data
if (json_last_error() !== JSON_ERROR_NONE) {
    $data = $_POST;
}

// Extract fields
$email = $data["email"] ?? null;
$password = $data["password"] ?? null;

// Validate input
if (!$email || !$password) {
    echo json_encode([
        "success" => false,
        "message" => "Email and password are required."
    ]);
    exit;
}

try {
    // Check if email exists
    $sql = "SELECT password FROM Users WHERE email = ?";  // <-- check your table name!!
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$email]);

    if ($stmt->rowCount() === 0) {
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
        echo json_encode([
            "success" => true,
            "message" => "Login successful."
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "errorType" => "wrong_password",
            "message" => "Incorrect password."
        ]);
    }

} catch (PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => "Database error during login.",
        "details" => $e->getMessage()
    ]);
}
?>
