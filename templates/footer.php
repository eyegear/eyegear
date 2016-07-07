<footer class="footer">
        <!-- slider animation -->
        <ul class="footer-fader">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
	<div id="footer-tint" class="background"></div>
        <div class="container">
		<div class="row">
	                <div class="col-md-3">
	                        <h2>SITE MAP</h2>
	                        <p><a href="<?php echo get_site_url(); ?>">Home</a></p>
	                        <p><a href="<?php echo get_site_url(); ?>/blog">Blog</a></p>
	                        <p><a href="<?php echo get_site_url(); ?>/faq">FAQ</a></p>
	                </div>
	                <div class="col-md-3">
	                        <h2>LATEST EYEGEAR</h2>
				<?php
					$args = array( 'numberposts' => '5', 'post_status' => 'publish' );
					$recent_posts = wp_get_recent_posts( $args );
					foreach( $recent_posts as $recent ){
						echo '<p><a href="' . get_permalink($recent["ID"]) . '">' .   $recent["post_title"].'</a> </p> ';
					}
				?>
	                </div>
	                <div class="col-md-3">
	                        <h2>META</h2>
	                        <p><a href="/wp-admin">Site Admin</a></p>
	                        <p><a href="/logout">Log Out</a></p>
	                        <h2>NEWSLETTER</h2>
	                        <p><a href="http://eepurl.com/b3Y1Hz">Subscribe</a></p>
	                        <p><a href="http://capoeirastudio.us13.list-manage.com/unsubscribe?u=3db435ce999565383d510d2cd&id=64f83024b3">Unsubscribe</a></p>
	                </div>
	                <div class="col-md-3">
	                        <h2>LANGUAGES</h2>
				<p>French</p>
				<p>German</p>
				<p>Italian</p>
				<p>Spanish</p>
	                </div>
                </div>
        </div>
</footer>
