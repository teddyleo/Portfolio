var tables;

$.ajax({
    type: "GET",
    url: "https://chloewuweb.com/test/getTables.php",
    dataTyoe: JSON,
    success: function(msg) {
        console.log(msg);
        tables = msg;
    }
});

// if (window.XMLHttpRequest) {
//     // code for IE7+, Firefox, Chrome, Opera, Safari
//     xmlhttp = new XMLHttpRequest();
// } else { // code for IE6, IE5
//     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
// }
// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         tables = this.responseText;
//         console.log(tables);
//     }
// }
// xmlhttp.open("GET", "../php/getTables.php", true);
// xmlhttp.send();