<?php
     # $url = $_SERVER['SERVER_NAME'];
     $current_page = basename($_SERVER['PHP_SELF']); 
?>
<?php if ($current_page == 'index.php') {?>
        <section id="demo" class="d-flex align-items-center justify-content-end ">
            <div class="container slideDown">
                <h1>Demo</h1>
                <p class="mt-3">plus 65</p>
            </div>
        </section>
    <?php    
     } elseif($current_page == 'about.php') { ?>
        <section id="about-demo" class="d-flex align-items-center justify-content-end ">
            <div class="container slideDown">
                <h1>About</h1>
                <p class="mt-3">plus 65</p>
            </div>
        </section>
    <?php 
     } elseif($current_page == 'contact.php') {?>
    <section id="contact-demo" class="d-flex align-items-center justify-content-end ">
        <div class="container slideDown">
            <h1>Contact</h1>
            <p class="mt-3">plus 65</p>
        </div>
    </section>
    <?php 
     }
     ?>

