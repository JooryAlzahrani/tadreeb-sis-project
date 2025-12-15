<?php
// Since this file is inside the 'api/' folder, we must go up one level (../) 
// to find the 'connection.php' file, just like in register.php.
require_once 'connection.php';

// Set header for plain text output
header('Content-Type: text/plain');

try {
    // The $pdo variable is established in connection.php
    $pdo->query("SELECT 1"); 
    
    echo "SUCCESS!\n";
    echo "Database connection works and is running fine.\n";

} catch (PDOException $e) {
    echo "ERROR!\n";
    echo "Database connection failed: " . $e->getMessage() . "\n";
}
?>