<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "EduTrackDB";

$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM students";
$result = $conn->query($sql);

$students = [];
while($row = $result->fetch_assoc()){
    $row['status'] = ($row['grade'] >= 75) ? "Pass" : "Fail";
    $students[] = $row;
}

echo json_encode($students);
$conn->close();
?>
