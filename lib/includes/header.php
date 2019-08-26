
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?php include('lib/includes/title.php')?></title>
  <link rel="shortcut icon" type="image/png" href="public/dist/favicon.png"/>
  <link rel="stylesheet" href="public/dist/main.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
</head>
<body>
<header>
  <div class="header">
    <div class="container d-none d-md-block">
        <div class="row">
            <div class="col d-flex align-items-center">
              <div class="brand-logo"></div>
            </div>
            <div class="col d-flex justify-content-end">
                <nav>
                    <?php include('lib/includes/nav.php');?>
                </nav>
            </div>
          </div>
    </div>
    <div class="d-sm-block d-md-none">
        <div class="menu-btn">
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
          </div>
      
          <nav class="menu">
            <div class="menu-branding d-none">
              <div class="portrait"></div>
            </div>
            <?php include('lib/includes/burger.php');?>
          </nav>
    </div>

  </div>

  
</header>
<?php
    include('lib/includes/banner.php')
?>
<!-- start of content -->
<div class="content">