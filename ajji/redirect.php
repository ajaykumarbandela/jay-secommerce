<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve username and password from the form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Example credentials (replace with your authentication logic)
    $valid_username = 'ajaykumar';
    $valid_password = 'ajaykumar1';

    // Check if the entered credentials match the valid credentials
    if ($username === $valid_username && $password === $valid_password) {
        // Redirect to another HTML page if credentials match
        header("Location: hello.html");
        exit;
    } else {
        // Redirect back to the login page if credentials do not match
        header("Location: login.php");
        exit;
    }
} else {
    // If the form is not submitted, redirect back to the login page
    header("Location: login.php");
    exit;
}
?>
