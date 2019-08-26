<?php
     # $url = $_SERVER['SERVER_NAME'];
     $current_page = basename($_SERVER['PHP_SELF']); 
?>
<?php if ($current_page == 'index.php') {
    echo 'Home';  
     } elseif($current_page == 'about.php') { 
         echo 'About';
     } elseif($current_page == 'contact.php') {
        echo 'Contact'; 
     }
?>



   
      
  
