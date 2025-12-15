<?php
header("Access-Control-Allow-Origin: *"); // Allows any domain (your Next.js app) to access this API
header("Access-Control-Allow-Headers: Content-Type"); // Allows JSON data to be sent
// Include the database connection setup
// Ensure this path is correct: Up one level (..) then into the 'db' folder
require_once '../db/connection.php';

// Set header for JSON response
header('Content-Type: application/json');

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    // Attempt to decode JSON data (standard practice for modern API calls from frontend frameworks)
    $data = json_decode(file_get_contents("php://input"), true);

    // If JSON decoding failed, try retrieving from $_POST (for standard form submissions)
    if (json_last_error() !== JSON_ERROR_NONE) {
        $data = $_POST;
    }

    // --- 1. Collect and Validate Data ---
    $full_name = $data['name'] ?? null;
    $email = $data['email'] ?? null;
    $university = $data['university'] ?? null;
    $major = $data['major'] ?? null;
    $password = $data['password'] ?? null;

    if (empty($full_name) || empty($email) || empty($password) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Please provide a valid name, email, and password.']);
        exit;
    }
    
    // --- 2. Securely Hash the Password ---
    $password_hash = password_hash($password, PASSWORD_DEFAULT);
    
    // --- 3. Set Role and Begin Transaction ---
    $role = 'Student'; // Default role for new registrations

    try {
        // Start a transaction to ensure both inserts (Users and Students) succeed or fail together
        $pdo->beginTransaction();

        // 4. Insert into the Users table
        // NOTE: Column names must exactly match your schema: userID, name, email, password, university, major, role
        $sql_user = "INSERT INTO Users (name, email, password, university, major, role) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt_user = $pdo->prepare($sql_user);
        $stmt_user->execute([$full_name, $email, $password_hash, $university, $major, $role]);

        // Get the ID of the newly created user (needed for the Students table)
        $userID = $pdo->lastInsertId();

        // 5. Insert into the Students table
        // NOTE: The primary key is 'studentID', and it is set by the unique userID from the Users table.
        // If your Students table has other required columns, you MUST add them here.
        $sql_student = "INSERT INTO Students (studentID) VALUES (?)";
        $stmt_student = $pdo->prepare($sql_student);
        $stmt_student->execute([$userID]);

        // If both inserts succeed, commit the transaction
        $pdo->commit();
        
        // Registration successful response
        echo json_encode(['success' => true, 'message' => 'Registration successful!']);

    } catch (PDOException $e) {
        // Rollback the transaction if any error occurred
        if ($pdo->inTransaction()) {
            $pdo->rollBack();
        }

        // Handle unique constraint violation (Email already registered)
        if ($e->getCode() === '23000') { // SQLSTATE code for integrity constraint violation
            echo json_encode(['success' => false, 'message' => 'Error: This university email is already registered.']);
        } else {
            // General database error, showing technical details for debugging
            echo json_encode([
                'success' => false, 
                'message' => 'Database error during registration.', 
                'details' => $e->getMessage(),
                'code' => $e->getCode() // This is helpful for technical debugging
            ]);
        }
    }

} else {
    // Correct response for non-POST requests
    echo json_encode(['success' => false, 'message' => 'Invalid request method. Only POST is allowed.']);
}
?>