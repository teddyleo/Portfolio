<?php
session_start();

ini_set("display_errors", 1); 
ini_set("log_errors", 0); 

// Disable all attacks on session variables through GET and POST requests
if (isset($_REQUEST['_SESSION'])) {
  die("Invalid");
}

$rg = ini_get('register_globals');
if ($rg || $rg=="") {
  foreach ($_SESSION as $key=>$value) {
    if (isset($GLOBALS[$key])) {
      unset($GLOBALS[$key]);
    }
  }
}
?>