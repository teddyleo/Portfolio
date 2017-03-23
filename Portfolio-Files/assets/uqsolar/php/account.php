<?php
	require_once('PasswordHash.php');
	$GLOBALS['mysqli'] = new mysqli('localhost', 'root', 'password', 'uqsolar');
	if($GLOBALS['mysqli']->connect_errno > 0){
		die('Unable to connect to database [' . $GLOBALS['mysqli']->connect_error . ']');
	}
	
	switch ($_POST["action"]) {	
		case "login":
			$user = $_POST["user"];
			$pass = $_POST["pass"];
			$hasher = new PasswordHash(8, false);
			$sql = "SELECT `hash_encoding` FROM `user_authentication` WHERE `user` = '" . $user . "'";
					
			if(!$result = $GLOBALS['mysqli']->query($sql)){
				echo ('There was an error running the query [' . $GLOBALS['mysqli']->error . ']');
			}
			else {
				$storedHash = $result->fetch_array();
				if ($storedHash) {
					$check = $hasher->CheckPassword($pass, $storedHash[0]);
					if ($check) {
						echo ('Pass');
					} else {
						echo ('Fail');
					}
				}
				else {
					echo ('Fail');
				}
			} 
			break;
			
		case "create":
			$user = $_POST["user"];
			$pass = $_POST["pass"];
			$email = $_POST["email"];
			$permission = $_POST["perm"];
			$hasher = new PasswordHash(8, false);
			$hash = $hasher->HashPassword($pass);
	
			if (strlen($hash) >= 20) {
					$sql = "INSERT INTO `user_authentication`(`user`, `hash_encoding`, `permissions`, `email`) VALUES ('" . $user . "','" . $hash . "','" . $permission . "','" . $email . "')";
					if(!$result = $GLOBALS['mysqli']->query($sql)){
						echo ('There was an error running the query [' . $GLOBALS['mysqli']->error . ']');
					}
					else {
						echo ('Pass');
					}
			} 
			else {
				echo ('Fail');
			}
			break;
	}
?>