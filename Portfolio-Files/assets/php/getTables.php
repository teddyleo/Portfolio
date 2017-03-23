<?php

    header('Access-Control-Allow-Origin: *');  

    $conn = new mysqli("chloewuwebcom.ipagemysql.com", "leong1995", "dbCW2017", "northwinds");

    if($conn->connect_error)
	{
		echo "ERROR: (".$conn->connect_errno.") ".$conn->connect_error;
		exit();
	}

    $outp = "";
	
    // Get Customers Table
    $result = $conn->query("SELECT `ID`, `Company`, `Last Name`, `First Name`, `Job Title`, `Business Phone`, `Address`, `City`, `State/Province` FROM customers");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"ID":"' . $rs["ID"] . '",';
        $entry .= '"Company":"' . $rs["Company"] . '",';
        $entry .= '"FirstName":"' . $rs["First Name"] . '",';
        $entry .= '"LastName":"' . $rs["Last Name"] . '",';
        $entry .= '"JobTitle":"' . $rs["Job Title"] . '",';
        $entry .= '"BusinessPhone":"' . $rs["Business Phone"] . '",';
        $entry .= '"Address":"' . $rs["Address"] . '",';
        $entry .= '"City":"' . $rs["City"] . '",';
        $entry .= '"StateProvince":"' . $rs["State/Province"] . '"}';
    }
    $outp .= '{"customers": ['.$entry.'],';

    // Get Employee Privileges Table
    $result = $conn->query("SELECT `Employee ID`, `Privilege ID` FROM `employee privileges`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"EmployeeID":"'  . $rs["Employee ID"] . '",';
        $entry .= '"PrivilegeID":"'  . $rs["Privilege ID"] . '"}';
    }
    $outp .= '"employeePrivileges": ['.$entry.'],';

    // Get Employees Table
    $result = $conn->query("SELECT `ID`, `Company`, `Last Name`, `First Name`, `E-mail Address`, `Job Title` FROM `employees`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"ID":"' . $rs["ID"] . '",';
        $entry .= '"Company":"' . $rs["Company"] . '",';
        $entry .= '"FirstName":"' . $rs["First Name"] . '",';
        $entry .= '"LastName":"' . $rs["Last Name"] . '",';
        $entry .= '"EmailAddress":"' . $rs["E-mail Address"] . '",';
        $entry .= '"JobTitle":"' . $rs["Job Title"] . '"}';
    }
    $outp .= '"employees": ['.$entry.'],';

    // Get Inventory Transaction Types Table
    $result = $conn->query("SELECT `ID`, `Type Name` FROM `inventory transaction types`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"ID":"' . $rs["ID"] . '",';
        $entry .= '"TypeName":"' . $rs["Type Name"] . '"}';
    }
    $outp .= '"inventoryTransactionTypes": ['.$entry.'],';

    // Get Inventory Transactions Table
    $result = $conn->query("SELECT `Transaction ID`, `Transaction Type`, `Transaction Created Date`, `Transaction Modified Date`, `Product ID`, `Quantity` FROM `inventory transactions`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"TransactionID":"' . $rs["Transaction ID"] . '",';
        $entry .= '"TransactionType":"' . $rs["Transaction Type"] . '",';
        $entry .= '"TransactionCreatedDate":"' . $rs["Transaction Created Date"] . '",';
        $entry .= '"TransactionModifiedDate":"' . $rs["Transaction Modified Date"] . '",';
        $entry .= '"ProductID":"' . $rs["Product ID"] . '",';
        $entry .= '"Quantity":"' . $rs["Quantity"] . '"}';
    }
    $outp .= '"inventoryTransactions": ['.$entry.'],';

    // Get Invoices Table
    $result = $conn->query("SELECT `Invoice ID`, `Order ID`, `Invoice Date` FROM `invoices`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"InvoiceID":"' . $rs["Invoice ID"] . '",';
        $entry .= '"OrderID":"' . $rs["Order ID"] . '",';
        $entry .= '"InvoiceDate":"' . $rs["Invoice Date"] . '"}';
    }
    $outp .= '"invoices": ['.$entry.'],';

    // Get Order Details Table
    $result = $conn->query("SELECT `ID`, `Order ID`, `Product ID`, `Quantity`, `Unit Price`, `Status ID`, `Inventory ID` FROM `order details`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"ID":"' . $rs["ID"] . '",';
        $entry .= '"OrderID":"' . $rs["Order ID"] . '",';
        $entry .= '"ProductID":"' . $rs["Product ID"] . '",';
        $entry .= '"Quantity":"' . $rs["Quantity"] . '",';
        $entry .= '"UnitPrice":"' . $rs["Unit Price"] . '",';
        $entry .= '"StatusID":"' . $rs["Status ID"] . '",';
        $entry .= '"InventoryID":"' . $rs["Inventory ID"] . '"}';
    }
    $outp .= '"orderDetails": ['.$entry.'],';

    // Get Order Details Status Table
    $result = $conn->query("SELECT `Status ID`, `Status Name` FROM `order details status`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"StatusID":"' . $rs["Status ID"] . '",';
        $entry .= '"StatusName":"' . $rs["Status Name"] . '"}';
    }
    $outp .= '"orderDetailsStatus": ['.$entry.'],';

    // Get Orders Table
    $result = $conn->query("SELECT `Order ID`, `Employee ID`, `Customer ID`, `Order Date`, `Shipped Date`, `Shipper ID`, `Ship Name`, `Ship Address` FROM `orders`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"OrderID":"' . $rs["Order ID"] . '",';
        $entry .= '"EmployeeID":"' . $rs["Employee ID"] . '",';
        $entry .= '"CustomerID":"' . $rs["Customer ID"] . '",';
        $entry .= '"OrderDate":"' . $rs["Order Date"] . '",';
        $entry .= '"ShippedDate":"' . $rs["Shipped Date"] . '",';
        $entry .= '"ShipperID":"' . $rs["Shipper ID"] . '",';
        $entry .= '"ShipName":"' . $rs["Ship Name"] . '",';
        $entry .= '"ShipAddress":"' . $rs["Ship Address"] . '"}';
    }
    $outp .= '"orders": ['.$entry.'],';

    // Get Orders Status Table
    $result = $conn->query("SELECT `Status ID`, `Status Name` FROM `orders status`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"StatusID":"' . $rs["Status ID"] . '",';
        $entry .= '"StatusName":"' . $rs["Status Name"] . '"}';
    }
    $outp .= '"ordersStatus": ['.$entry.'],';

    // Get Orders Tax Status Table
    $result = $conn->query("SELECT `ID`, `Tax Status Name` FROM `orders tax status`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"ID":"' . $rs["ID"] . '",';
        $entry .= '"TaxStatusName":"' . $rs["Tax Status Name"] . '"}';
    }
    $outp .= '"ordersTaxStatus": ['.$entry.'],';

    // Get Privileges Table
    $result = $conn->query("SELECT `Privilege ID`, `Privilege Name` FROM `privileges`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"PrivilegeID":"' . $rs["Privilege ID"] . '",';
        $entry .= '"PrivilegeName":"' . $rs["Privilege Name"] . '"}';
    }
    $outp .= '"privileges": ['.$entry.'],';

    // Get Products Table
    $result = $conn->query("SELECT `ID`, `Supplier IDs`, `Product Code`, `Product Name`, `Category` FROM `products`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"ID":"' . $rs["ID"] . '",';
        $entry .= '"SupplierIDs":"' . $rs["Supplier IDs"] . '",';
        $entry .= '"ProductCode":"' . $rs["Product Code"] . '",';
        $entry .= '"ProductName":"' . $rs["Product Name"] . '",';
        $entry .= '"Category":"' . $rs["Category"] . '"}';
    }
    $outp .= '"products": ['.$entry.'],';

    // Get Purchase Order Details Table
    $result = $conn->query("SELECT `ID`, `Purchase Order ID`, `Product ID`, `Quantity`, `Unit Cost`, `Date Received`, `Inventory ID` FROM `purchase order details`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"ID":"' . $rs["ID"] . '",';
        $entry .= '"PurchaseOrderID":"' . $rs["Purchase Order ID"] . '",';
        $entry .= '"ProductID":"' . $rs["Product ID"] . '",';
        $entry .= '"Quantity":"' . $rs["Quantity"] . '",';
        $entry .= '"UnitCost":"' . $rs["Unit Cost"] . '",';
        $entry .= '"DateReceived":"' . $rs["Date Received"] . '",';
        $entry .= '"InventoryID":"' . $rs["Inventory ID"] . '"}';
    }
    $outp .= '"purchaseOrderDetails": ['.$entry.'],';

    // Get Purchase Order Status Table
    $result = $conn->query("SELECT `Status ID`, `Status` FROM `purchase order status`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"StatusID":"' . $rs["Status ID"] . '",';
        $entry .= '"Status":"' . $rs["Status"] . '"}';
    }
    $outp .= '"purchaseOrderStatus": ['.$entry.'],';

    // Get Purchase Orders Table
    $result = $conn->query("SELECT `Supplier ID`, `Purchase Order ID`, `Created By`, `Submitted Date`, `Creation Date`, `Status ID`, `Submitted By` FROM `purchase orders`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"SupplierID":"' . $rs["Supplier ID"] . '",';
        $entry .= '"PurchaseOrderID":"' . $rs["Purchase Order ID"] . '",';
        $entry .= '"CreatedBy":"' . $rs["Created By"] . '",';
        $entry .= '"SubmittedDate":"' . $rs["Submitted Date"] . '",';
        $entry .= '"CreationDate":"' . $rs["Creation Date"] . '",';
        $entry .= '"StatusID":"' . $rs["Status ID"] . '",';
        $entry .= '"SubmittedBy":"' . $rs["Submitted By"] . '"}';
    }
    $outp .= '"purchaseOrders": ['.$entry.'],';

    // Get Sales Reports Table
    $result = $conn->query("SELECT `Group By`, `Display`, `Title`, `Filter Row Source` FROM `sales reports`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"GroupBy":"' . $rs["Group By"] . '",';
        $entry .= '"Display":"' . $rs["Display"] . '",';
        $entry .= '"Title":"' . $rs["Title"] . '",';
        $entry .= '"FilterRowSource":"' . $rs["Filter Row Source"] . '"}';
    }
    $outp .= '"salesReports": ['.$entry.'],';

    // Get Shippers Table
    $result = $conn->query("SELECT `ID`, `Company`, `Address`, `City`, `ZIP/Postal Code`, `Country/Region` FROM `shippers`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"ID":"' . $rs["ID"] . '",';
        $entry .= '"Company":"' . $rs["Company"] . '",';
        $entry .= '"Address":"' . $rs["Address"] . '",';
        $entry .= '"City":"' . $rs["City"] . '",';
        $entry .= '"ZIPPostalCode":"' . $rs["ZIP/Postal Code"] . '",';
        $entry .= '"CountryRegion":"' . $rs["Country/Region"] . '"}';
    }
    $outp .= '"shippers": ['.$entry.'],';

    // Get Suppliers Table
    $result = $conn->query("SELECT `ID`, `Company`, `Last Name`, `First Name`, `Job Title` FROM `suppliers`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"ID":"' . $rs["ID"] . '",';
        $entry .= '"Company":"' . $rs["Company"] . '",';
        $entry .= '"Last Name":"' . $rs["Last Name"] . '",';
        $entry .= '"FirstName":"' . $rs["First Name"] . '",';
        $entry .= '"JobTitle":"' . $rs["Job Title"] . '"}';
    }
    $outp .= '"suppliers": ['.$entry.'],';

    // Get Customers Extended Table
    $result = $conn->query("SELECT `File As`, `Contact Name`, `ID`, `Company`, `Last Name`, `First Name` FROM `customers extended`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"FileAs":"'  . $rs["File As"] . '",';
        $entry .= '"ContactName":"'  . $rs["Contact Name"] . '",';
        $entry .= '"ID":"'  . $rs["ID"] . '",';
        $entry .= '"Company":"'   . $rs["Company"]        . '",';
        $entry .= '"FirstName":"'   . $rs["First Name"]        . '",';
        $entry .= '"LastName":"'. $rs["Last Name"]     . '"}';
    }
    $outp .= '"customersExtended": ['.$entry.'],';

    // Get Order Summary Table
    $result = $conn->query("SELECT `Order ID`, `Employee ID`, `Customer ID`, `Order Date`, `Shipped Date`, `Shipping Fee`, `Ship Name`, `Ship Address`, `Paid Date` FROM `order summary`");
    $entry = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($entry != "") {$entry .= ",";}
        $entry .= '{"OrderID":"' . $rs["Order ID"] . '",';
        $entry .= '"EmployeeID":"' . $rs["Employee ID"] . '",';
        $entry .= '"CustomerID":"' . $rs["Customer ID"] . '",';
        $entry .= '"OrderDate":"' . $rs["Order Date"] . '",';
        $entry .= '"ShippedDate":"' . $rs["Shipped Date"] . '",';
        $entry .= '"ShippingFee":"' . $rs["Shipping Fee"] . '",';
        $entry .= '"ShipName":"' . $rs["Ship Name"] . '",';
        $entry .= '"ShipAddress":"' . $rs["Ship Address"] . '",';
        $entry .= '"PaidDate":"' . $rs["Paid Date"] . '"}';
    }
    $outp .= '"orderSummary": ['.$entry.']}';

    $conn->close();
    
    echo($outp);

    exit;

?>
