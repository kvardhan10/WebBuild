<?php

session_start();
if(!isset($_SESSION['username'])){
  header('location:login.php');
}

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Home Page</title>
  </head>
  <body>
    <h3>WELCOME <?php  echo $_SESSION['username']; ?> </h3>

    <a href="logout.php"></a>
  </body>
</html>
