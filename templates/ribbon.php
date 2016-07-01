<section id="steps" class="ribbon">
	<script>
		// init scrollmagic controller
		var controller = new ScrollMagic.Controller();
	</script>
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
		<script>
				// build scene
				var scene = new ScrollMagic.Scene({
									triggerElement: "#trigger-steps"
								})
								.setTween("#brand-animation", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
								.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
								.addTo(controller);
		</script>
  	</div>
</section>
