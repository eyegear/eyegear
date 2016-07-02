<section id="steps" class="ribbon">
	<div class="container">
		<div id="trigger-steps" class="enumeration"></div>
		<div id="brand-animation">
    			<a class="brand" href="<?= esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a>
		</div>
    		<nav class="nav-primary">
      			<?php
      				if (has_nav_menu('primary_navigation')) :
        			wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']);
      			endif;
      			?>
    		</nav>
  	</div>
</section>
