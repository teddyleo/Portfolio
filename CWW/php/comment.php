<?php include("sessionStart.php");?>
<?php

    $name = "";
    $email = "";
    $website = "";
    $comment = "";

    /* Get form values */
    $name = test_input($_POST['name']);
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
        echo 'nameError';
        exit;
    }
    $email = test_input($_POST['email']);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'emailError'; 
        exit;
    }
    if(isset($_POST['website']) && $_POST['website'] != '') {
        
        $website = test_input($_POST['website']);
        if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
            echo 'webError'; 
            exit;
        }
        
    }
    $comment = test_input($_POST['comment']);
    
    /* Send email */
    $to = "leo@chloewuweb.com";
    $subject = "Comment from " . $name;

    $message = "";
    if(isset($_POST['website']) && $_POST['website'] != '') {
        
        $message .= "<b>My Website: </b>" . $website . "<br><br>";
        
    }
    $message .= $comment;

    $header = "From:" . $email . " \r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n";

    $retval = mail ($to,$subject,$message,$header);

    if(!$retval) {
        echo "mailError";
    }
    
    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }

?>