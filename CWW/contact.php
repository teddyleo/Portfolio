<?php include("php/sessionStart.php");?>
<!DOCTYPE HTML>
<html>

    <head>
        <title>Chloe Wu</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <link rel="stylesheet" href="css/font-awesome-4.6.3/css/font-awesome.min.css">
        <script src="js/jquery.min.js"></script>
        <script src="js/contact.js" defer></script>
		<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
    </head>
    <body>

        <div class="navbar">
            <nav>
                <a href="./">Home</a>
                <a href="media.html">Media</a>
                <img src="images/logo.PNG">
                <a href="about.html">About</a>
                <a id="current">Contact</a>
            </nav>
        </div>
        
        <div class="contact">
            <h1>Contact</h1>
            <p id="form-text">
                What's up?
            </p>
            <form class="contact-form" id="comment-form" method="post">
                <input type="text" placeholder="Name *" maxlength="50" id="name" name="name" required>
                
                <input type="email" placeholder="Email *" maxlength="255" id="email" name="email" required>
                
                <input type="text" placeholder="Website (optional)" maxlength="255" id="website" name="website">
                
                <div><textarea class="left" rows="10" id="comment" name="comment" placeholder="Comment *" maxlength="300" required></textarea></div>
                
                <button class="button" type="submit">Submit <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
            </form>
        </div>
        
        <footer class="footer">
            <p class="left">@ 2016</p>
            <div class="right share">
                <a href="http://facebook.com/iamchloewu" target="_blank">
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
                <a href="http://instagram.com/iamchloewu" target="_blank">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
            </div>
            <div class="clear"></div>
        </footer>
        
    </body>

</html>
