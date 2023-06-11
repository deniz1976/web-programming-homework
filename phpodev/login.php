<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="loginscreen.css">
</head>
<body>
	<div class="header">
		<h1>Welcome to Home Automation System</h1>
		<h2>Please Login</h2>
	</div>

	<form action="login.php" method="post">
		<input type="text" name="username" placeholder="Username">
		<input type="password" name="password" placeholder="Password">
		<input type="submit" name="submit" value="Log In">
	</form>
	
	<?php
		$producers = ["producer1","producer2"];
		$producerPasswords = ["1881","1923"];
		$consumers = ["consumer1","consumer2"];
		$consumerPasswords = ["1920","1938"];
		$message ="";
		$user = false;
		echo "<script>localStorage.setItem('user', false)</script>";

		if(isset($_POST["submit"])){
			$username = $_POST['username'];
			$password = $_POST['password'];
			if($message != ""){
				$message ="<br>";
				echo $message;
			}
			else{
				if($password == $producerPasswords[0] && $username == $producers[0] || $password == $producerPasswords[1] && $username == $producers[1]){
					echo "<script>localStorage.setItem('user', true)</script>";
					echo "<script>window.location.href='producerApp.html'</script>";
					
					exit();
				}
				else if($password == $consumerPasswords[0] && $username == $consumers[0] || $password == $consumerPasswords[1] && $username == $consumers[1]){
					echo "<script>localStorage.setItem('user', true)</script>";
					echo "<script>window.location.href='consumerApp.html'</script>";
					
					exit();
				}
				else if($username == "" && $password == ""){
					echo "<div class='error'>Please enter username and password.</div>";
					exit();
				}
				else{
					echo "<div class='error'>Wrong username or password.</div>";
					exit();
				}  
			}
		}
	?>
</body>
</html>
