function openTab(event, panel) {
    var i, tabs_panel, tabs_title;

    /* Hides content from the previous tab */
    tabs_panel = document.getElementsByClassName("tabs\-panel");
    for (i = 0; i < tabs_panel.length; i++) {
        if(tabs_panel[i]==tabs_panel[0]){}
else{
        tabs_panel[i].style.display = "none";
    }
    }

    /*tabs_title = document.getElementsByClassName("tabs\-title");
    for (i = 0; i < tabs_title.length; i++) {
        tabs_title[i].className = tabs_title[i].className.replace("yes", "");
    }*/

    /* Presents the content for the chosen tab */
    document.getElementById(panel).style.display = "block";
    event.currentTarget.className += " is\-active";

$('html, body').animate({ scrollTop: 0 }, 'fast');




if( $(this).width() < 640 ) {
          
  if(panel != "panel1v"){

          $('#tabbed-menu').hide('slow'); 

         




 var toggles = document.querySelectorAll(".c-hamburger");

        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            (toggle.classList.contains("is-active") === true) ? toggle.classList.remove("is-active") : toggle.classList.add("is-active");
 
        }



};





  


        


  

    
}


    










if(panel == "panel1v"){


$('#submenu1').show('slow'); 


}
else
{



$('#submenu1').hide('slow'); 

}



    /* De-highlight all tabs */
    tabs_title = document.getElementsByClassName("tabs\-title");
    for (i = 0; i < tabs_title.length; i++) {
        tabs_title[i].getElementsByTagName('a')[0].removeAttribute("aria\-selected");
    }

    /* Highlight the tab that was just selected */
    var newAttribute = document.createAttribute("aria\-selected"); 
    newAttribute.value = "true";
    event.currentTarget.getElementsByTagName('a')[0].setAttributeNode(newAttribute);
}











function openInnerTab(event, panel) {
    var i, tabs_panel, tabs_title;

    /* Hides content from the previous tab */
    tabs_panel = document.getElementsByClassName("tabs\-panel\-i");
    for (i = 0; i < tabs_panel.length; i++) {
        tabs_panel[i].style.display = "none";
    }

$('html, body').animate({ scrollTop: 0 }, 'fast');

    /*tabs_title = document.getElementsByClassName("tabs\-title");
    for (i = 0; i < tabs_title.length; i++) {
        tabs_title[i].className = tabs_title[i].className.replace("yes", "");
    }*/

    /* Presents the content for the chosen tab */
    document.getElementById(panel).style.display = "block";
    event.currentTarget.className += " is\-active";










if( $(this).width() < 640 ) {
          
  if(panel != "panel0v"){

          $('#tabbed-menu').hide('slow'); 

         




 var toggles = document.querySelectorAll(".c-hamburger");

        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            (toggle.classList.contains("is-active") === true) ? toggle.classList.remove("is-active") : toggle.classList.add("is-active");
 
        }



};


}


if( $(this).width() < 640 & panel != "panel0v") {
          


    



    }








    /* De-highlight all tabs */
    tabs_title = document.getElementsByClassName("tabs\-title\-i");
    for (i = 0; i < tabs_title.length; i++) {
        tabs_title[i].getElementsByTagName('a')[0].removeAttribute("aria\-selected");
    }

    /* Highlight the tab that was just selected */
    var newAttribute = document.createAttribute("aria\-selected"); 
    newAttribute.value = "true";
    event.currentTarget.getElementsByTagName('a')[0].setAttributeNode(newAttribute);
}



(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();




if($('#tabbed-menu').css('display') == 'none'){ 
   $('#tabbed-menu').show('slow'); 
} else { 
   $('#tabbed-menu').hide('slow'); 
}




      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();








$(window).resize(function() {
    if( $(this).width() > 640 ) {
         $('#tabbed-menu').show('slow'); 
var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
     (toggle.classList.contains("is-active") === true) ? toggle.classList.remove("is-active") : toggle.classList.remove("is-active");
  };



    }
});



$(window).resize(function() {
    if( $(this).width() < 640 ) {
          $('#tabbed-menu').hide('slow'); 

    }
});












function openview() {
    



 $('#middle').hide('slow'); 






}




function closeview() {
    



 $('#middle').show('fast'); 






}