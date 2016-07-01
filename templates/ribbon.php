<section id="steps" class="ribbon">
	<div class="container">
		<script>
			// STEP 1: create / initialize the scrollmagic controller
			var controller = new ScrollMagic.Controller();
		</script>
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
			// STEP 2: create animation object (with a duration of half a second)
			var tween = TweenMax.to('#brand-animation', 0.5, {
				letterSpacing: 10px,
				scale: 1.5,
				rotation: 360
			});
			// STEP 3: create scene object (and select scene options)
			var scene = new ScrollMagic.Scene({
				triggerElement: "#trigger-steps"
			})
			// STEP 4: add our animation object to the scene object
			.setTween(tween) 
			// STEP 5: add our scene object to the scrollmagic controller
			.addTo(controller);
		</script>
  	</div>
</section>
