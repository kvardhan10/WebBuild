<?php
session_start();
if (array_key_exists("uid", $_COOKIE)) {
    $_SESSION['uid'] = $_COOKIE['uid'];
}
if (array_key_exists("uid", $_SESSION)) {
    // echo "Logged in!";
} else {
    header("Location:../login.php");
}
$db = mysqli_connect("localhost", "root", "linux123", "rail_connect");
if (mysqli_connect_error()) {
    die("Database Connection Error.");
}
$query = "SELECT username FROM users WHERE uid='" . mysqli_real_escape_string($db, $_SESSION['uid']) . "' LIMIT 1";
$result = mysqli_query($db, $query);
$row = mysqli_fetch_assoc($result);
// $un = $row['username'];
// $u = explode("@", $row['username']);
?>

<head>
	<title>Welcome <?php echo $u[0]; ?></title>
	<link rel="shortcut icon" type="image/png" href="../images/logo.jpg"/>
	<link rel="stylesheet" href="../assets/master.css" />
	 <link rel="stylesheet" href="../css/skel.css" />
   <style>
     a{text-decoration: none;border-radius: 50px;color: black;
     padding: 3px 25px;background-color: #1a75ff;transition: all 0.5s ease 0s;
     font-family: sans-serif;}
     nav li{list-style: none; display: inline-block; padding: 0px 20px;}
     header{display: flex; justify-content: flex-end; align-items: center;}
     section{ height:90vh;background-image: url('../assets/train.jpg');
     background-repeat: no-repeat;background-size: cover;}
   </style>
</head>
		<!-- Header -->
			<header id="header" class="skel-layers-fixed">
				<nav id="nav" class="">
					<ul>
						<!-- <li><strong><a href="../statusretriever.php">LIVE STATUS</a></strong></li> -->
            <li><strong><a href="../dashboard.php" class="selected">Dashboard</a></strong></li>
						<li><strong><a href="#" class="selected">TICKET RESERVATION</a></strong></li>
            <li><strong><a href="../traind.php" class="selected">Train Details</a></strong></li>
            <li><strong><a href="../fare.php" class="selected">Fare Enquiry</a></strong></li>
						<!-- <li><strong><div class="dropdown"><a class="dropbtn">ENQUIRY</a>
							<div class="dropdown-content">
							<a href="../traind/traind.php">Train Details</a>
							<a href="../fare/fare.php">Fare Enquiry</a> -->
							<!-- <a href="../Cancelled_trains/Cancelled_trains.php">Cancelled_trains</a> -->
							<!-- <a href="../Train_route/Route_retriever.php">Train Route Information</a></div> -->
						<!-- </div></strong></li> -->
						<!-- <li><strong><a href="../About.php">ABOUT</a></strong></li> -->
						<!-- <li><strong><a href="../Team.php">TEAM</a></strong></li> -->
						<!-- <li><strong><a href="../contact.php">CONTACT</a></strong></li> -->
					</ul>
				</nav>
			</header>
			<section id="banner" style="display:flex; justify-content:center; align-content:center;">
				<div class="inner">
					<h2>Please select one option</h2>
					<strong><span class="role"></span></strong>
					<ul class="actions" style="list-style:none;">
						<li><a href="book.php" class="button big special">Book Tickets</a></li> <br>
						<li><a href="cancel.php" class="button big special">Cancel Tickets</a></li>
					</ul>
				</div>
			</section>
<script type="text/javascript" src="js/typed.min.js"></script>
			<script type="text/javascript" src="js/script.js"></script>
