<?php
session_start();
if($_SESSION['role'] != 'Teacher'){
    die("Access denied");
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "EduTrackDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

if(isset($_POST['name']) && isset($_POST['grade']) && isset($_POST['attendance'])){
    $name = $_POST['name'];
    $grade = $_POST['grade'];
    $attendance = $_POST['attendance'];

    $sql = "INSERT INTO students (name, grade, attendance) VALUES ('$name', '$grade', '$attendance')";
    if($conn->query($sql) === TRUE){
        echo "success";
    } else {
        echo "error";
    }
}

$conn->close();
?>
