<?php>

session_start();

$con = mysqli('localhost', 'root', 'linux123');
mysqli_select_db($con, 'login')

$name = $_POST['username'];
$pass = $_POST['password'];

$s = " select * from users where Username = '$name' ";
$result = mysqli_query($con, $s);

$num = mysqli_num_rows($result);

if($num == 1){
  echo "Username already taken"
}else{
  $reg = " insert into users values ('$name', '$pass')"
  mysqli_query($con, $reg);
  echo "Registration Successful";
}

<?>
