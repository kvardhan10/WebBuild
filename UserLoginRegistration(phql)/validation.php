<?php

session_start();

$con = mysqli_connect('localhost', 'root', 'linux123');
mysqli_select_db($con, 'login');

$name = $_POST['username'];
$pass = $_POST['password'];

$s = " select * from users where Username = '$name' && Password = '$pass' ";

$result = mysqli_query($con, $s);

$num = mysqli_num_rows($result);

if($num == 1){
  $_SESSION['username'] = $name;
  header('location:home.php');
}else{
  echo "User not registered";
  header('location:login.php');
}

?>
