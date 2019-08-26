<?php
// GET THE MENU ITEMS
require __DIR__ . DIRECTORY_SEPARATOR . "lib" . DIRECTORY_SEPARATOR . "config.php";
require PATH_LIB . "menu.php";
$menuLib = new Menu();
$menu = $menuLib->get();
?>