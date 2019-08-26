<ul class="menu-nav">
    <div class="brand-logo"></div>
    <?php 
    if (is_array($menu)) { foreach ($menu as $m) {
        printf("<li class='nav-item'><a href='%s' class='nav-link' target='_%s'>%s</a></li>", $m['link'], $m['target'], $m['label']);
    }}
    ?>
</ul>




