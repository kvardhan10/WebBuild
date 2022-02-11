<?php

session_start();

$con = mysqli_connect('localhost', 'root', 'linux123');
mysqli_select_db($con, 'rail_connect');

$name = $_POST['username'];
$pass = $_POST['password'];

$s = " select * from users where username = '$name' && password = '$pass' ";

$result = mysqli_query($con, $s);

$num = mysqli_num_rows($result);

if($num == 1){
  $_SESSION['username'] = $name;
  $_SESSION['uid'] = $uid;

  header('location:dashboard.php');
}else{
  $link = "user_sign_up.php";
  echo "<h2 align=\"center\">User not found. Please <a href='".$link."'>Sign Up</a></h2>";
}

?>
