<?php
  if (isset($_POST['name']) && (isset($_POST['email']) && (isset($_POST['password'])) {
    $sql = "insert into users values (:name, :email, :password )"
    echo "<pre>\n" . $sql . "\n</pre>\n";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(array(
      ':name' => $_POST['name'],
      ':email' => $_POST['email'],
      ':password' => $_POST['password'],
    ));
  }

  if (isset($_POST['delete']) && isset($_POST['uid'])){
    $sql = "delete from users where uid = :uid";
    echo "<pre>\n . $sql . \n</pre>\n";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(array(':uid' => $_POST['uid']));
  }
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>USER1</title>
  </head>
  <body>
    <!-- C -->
    <h1>Adding new user</h1>
    <form method="post">
      <p>Name: <input type="text" name="name"> </p>
      <p>Email: <input type="text" name="email"> </p>
      <p>Password: <input type="password" name="password"> </p>
      <p> <input type="button" value="ADD"> </p>
      </form>
      <!-- R -->
      <?php
        $stmt = $pdo->query("select name, email, password from users");
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
          echo "<tr><td>";
          echo "$row['name']";
          echo "</td><td>";
          echo "$row['email']";
          echo "</td><td>";
          echo "$row['password']";
          echo "</td><td>";
          // D
          echo " <form method='post'> ";
          echo " <input name='uid' value=' .$row['uid']. '> ";
          echo " <input type='submit' value='Delete' name='delete'> ";
          echo " </form> ";
          echo "</td></tr>";
        }
      ?>
      <!-- D -->
      <!-- <h1>Deleting a user</h1>
      <form method="post">
        <p>ID of user to be deleted: <input type="text" name="uid"> </p>
        <p> <input type="button" value="DELETE"> </p>
      </form> -->
  </body>
</html>
