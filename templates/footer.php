<footer id="sitemap" class="footer">
        <div class="container-fluid">
		<div class="second-layer padded">
			<div class="row">
		                <div class="col-md-3">
		                        <h2>Site <strong>Map</strong></h2>
		                        <p><a href="<?php echo get_site_url(); ?>">Home</a></p>
		                        <p><a href="<?php echo get_site_url(); ?>/blog">Blog</a></p>
		                        <p><a href="<?php echo get_site_url(); ?>/blog">Chinese</a></p>
		                        <p><a href="<?php echo get_site_url(); ?>/blog">Japanese</a></p>
		                        <p><a href="<?php echo get_site_url(); ?>/blog">Korean</a></p>
		                        <p><a href="<?php echo get_site_url(); ?>/privacy-policy">Privacy Policy</a></p>
		                </div>
		                <div class="col-md-3">
		                        <h2>Latest <strong>EYEGEAR</strong></h2>
					<?php
						$args = array( 'numberposts' => '5', 'post_status' => 'publish' );
						$recent_posts = wp_get_recent_posts( $args );
						foreach( $recent_posts as $recent ){
							echo '<p><a href="' . get_permalink($recent["ID"]) . '">' .   $recent["post_title"].'</a> </p> ';
						}
					?>
		                </div>
		                <div class="col-md-3">
		                        <h2>eyegear <strong>STORE</strong></h2>
		                        <p><a href="/wp-admin">Log In</a></p>
		                        <p><a href="/logout">Log Out</a></p>
		                </div>
		                <div class="col-md-3">
		                        <h2>eyegear <strong>NEWS</strong></h2>
		                        <p><a href="http://eepurl.com/b3Y1Hz">Subscribe</a></p>
		                        <p><a href="http://capoeirastudio.us13.list-manage.com/unsubscribe?u=3db435ce999565383d510d2cd&id=64f83024b3">Unsubscribe</a></p>
		                </div>
	                </div>
			<div class="row">
	                        <div class="col-md-4 col-md-offset-4 text-center">
	                                <h5 id="copyright" class="notice"><strong>Copyright</strong> (c) 2016 <strong>Eyegear Productions</strong>.<br>All Rights Reserved.</h5>
	                                <h5 id="design" class="notice">design by <strong><a href="http://www.quilombolaengineering.com">quilombola engineering</a></strong>.</h5>
	                                <hr id="primary">
	                        </div>
	                </div>
        	</div>
        </div>
</footer>
