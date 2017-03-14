<?php

    header('Access-Control-Allow-Origin: *');  

    $conn = new mysqli("chloewuwebcom.ipagemysql.com", "leong1995", "dbCW2017", "northwinds");

    if($conn->connect_error)
	{
		echo "ERROR: (".$conn->connect_errno.") ".$conn->connect_error;
		exit();
	}
	
    $result = $conn->query("SELECT ID, Company, `Last Name`, `First Name` FROM customers");

    $outp = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($outp != "") {$outp .= ",";}
        $outp .= '{"ID":"'  . $rs["ID"] . '",';
        $outp .= '"Company":"'   . $rs["Company"]        . '",';
        $outp .= '"First Name":"'   . $rs["First Name"]        . '",';
        $outp .= '"Last Name":"'. $rs["Last Name"]     . '"}';
    }
    $outp ='{"records":['.$outp.']}';
    $conn->close();
    
    echo($outp);

    exit;

?>
