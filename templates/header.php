<header id="header-banner" class="banner">
	<div id="malcolm-x-underlay" class="underlay"></div>
	<div id="adjustable-background" class="background">
		<div id="trigger-fadeout" class="fadeout-animation"></div>
		<div id="animate-slogan">
			<p class="slogan"><?php bloginfo('description'); ?></p>
			<i class="instructional-icon"></i>
		</div>
	</div>
	<div id="header-containter" class="container">
		<div id="trigger-scale" class="scaling-animation"></div>
    		<div id="animate-brand">
			<a class="brand" href="<?= esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a>
		</div>
		<div id="trigger-overlay" class="rotating-animation"></div>
    		<div id="animate-overlay">
			<img class="overlay" src="https://s3.ap-northeast-2.amazonaws.com/eyegear/eyegear-285x150px.png">
		</div>
  	</div>
</header>
