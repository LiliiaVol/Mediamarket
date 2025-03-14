<?php

	header('Access-Control-Allow-Origin: http://localhost:3000');
	$user = $_POST['name'];
	echo ("Hello from server: $user")

// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $name = $_POST["name"] ?? "unknown";
//     $surname = $_POST["surname"] ?? "unknown";
//     $phone = $_POST["phone"] ?? "unknown";
//     $email = $_POST["email"] ?? "unknown";
//
//     $data = "$name\t$surname\t$phone\t$email\n"; // Записуємо табуляцією
//
//     file_put_contents("data.txt", $data, FILE_APPEND | LOCK_EX); // Додаємо новий рядок
//
//     echo "Дані збережено!";
// } else {
//     echo "Метод не підтримується.";
// }
?>
