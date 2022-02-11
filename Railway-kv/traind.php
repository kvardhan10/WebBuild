<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <title>BOOK TICKETS</title>
  <link rel="shortcut icon" type="image/png" href="../images/logo.jpg"/>
   <link rel="stylesheet" href="../css/skel.css" />
      <link rel="stylesheet" href="assets/master.css" />
      <link rel="stylesheet" href="../css/style-xlarge.css" />

      <style>
        a{text-decoration: none;border-radius: 50px;color: black;
        padding: 3px 25px;background-color: #1a75ff;transition: all 0.5s ease 0s;
        font-family: sans-serif;}
        nav li{list-style: none; display: inline-block; padding: 0px 20px;}
        header{display: flex; justify-content: flex-end; align-items: center;}
        section{ height:90vh;background-image: url('../assets/train.jpg');
        background-repeat: no-repeat;background-size: cover;}
        section{ height:90vh;background-image: url('assets/train.jpg');
        background-repeat: no-repeat;background-size: cover;}
      </style>
    </head>
<body id="top">
  <header id="header">
        <nav id="nav" class="">
          <ul>
            <!-- <li><strong><?php if ($_SESSION['Admin'] == '1') {?>
              <a href="../Admin/admin.php">DASHBOARD</a>
              <?php } elseif ($_SESSION['Admin'] == '0') {?>
              <a href="../dashboard/dashboard.php">DASHBOARD</a>
            <?php } else {?><a href="../index.php">HOME</a>
            <?php }?></strong></li> -->
            <li><strong><a href="index.php">Home</a></strong></li>
            <!-- <li><strong><a href="../statusretriever.php">LIVE STATUS</a></strong></li> -->
            <!-- <li><strong><a href="../Ticket/ticket.php">TICKET RESERVATION</a></strong></li> -->
            <li><strong><a href="traind.php">Train Details</a></strong></li>
            <li><strong><a href="fare.php">Fare Enquiry</a></strong></li>

            <!-- <li><strong><div class="dropdown"><a class="dropbtn">ENQUIRY</a> -->
              <!-- <div class="dropdown-content"> -->
              <!-- <a href="../fare/fare.php">Fare Enquiry</a> -->
              <!-- <a href="#" class="selected">Train Details</a> -->
              <!-- <a href="../Cancelled_trains/Cancelled_trains.php">Cancelled_trains</a> -->
              <!-- <a href="../Train_route/Route_retriever.php">Train Route Information</a></div> -->
            <!-- </div></strong></li> -->
            <!-- <li><strong><a href="../About.php">ABOUT</a></strong></li> -->
            <!-- <li><strong><a href="../Team.php">TEAM</a></strong></li> -->
            <!-- <li><strong><a href="../contact.php">CONTACT</a></strong></li> -->
          </ul>
        </nav>
  </header>
  <section>
  <div style="padding-top:100px">
    <b><h1>ENTER DETAILS</h1></b>
<form action="?"  method="post">
  Source:<br>
  <input type="text" name="s" required><br><br>
  Destination:<br>
  <input type= "text" name="d" required> <br><br>
  <input type="submit" value="Submit" name ="submit">
</form></div>
<!-- </section> -->
</body>
</html>
<?php
if (array_key_exists("submit", $_POST)) {
    $db = mysqli_connect("localhost", "root", "linux123", "rail_connect") or die("Unable to Connect to the Database.");
    $src = mysqli_real_escape_string($db, $_POST['s']);
    $dst = mysqli_real_escape_string($db, $_POST['d']);
    echo '<table>';
    echo "<tr>";
    echo "<th>Source</th>";
    echo "<th>Destination</th>";
    echo "<th>Train Name</th>";
    echo "<th>Train Number</th>";
    echo "<th>Train Duration(hrs)</th>";
    echo "<th>Distance Covered(Kms)</th>";
    echo "<th>Train Type</th></tr>";
    $q = mysqli_query($db, "SELECT * FROM trains WHERE from_station_name LIKE '%" . $src . "%' AND to_station_name LIKE '%" . $dst . "%';");
    if ($q == true) {
        $n = mysqli_num_rows($q);
        for ($i = 0; $i < $n; $i++) {
            $row = mysqli_fetch_array($q);
            echo "<tr><td>{$row['from_station_name']}</td><td>{$row['to_station_name']}</td><td>{$row['train_name']}</td><td>{$row['train_number']}</td><td>{$row['duration']}</td><td>{$row['distance']}</td><td>{$row['train_type']}</td></tr></section>";
        }
    }

}

?>
