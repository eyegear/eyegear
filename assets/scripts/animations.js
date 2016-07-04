/* ========================================================================
 * DOM-based Scroll Animations
 * Based on http://scrollmagic.io/examples/basic/simple_tweening.html
 * ======================================================================== */


(function() {

	// STEP 1 is needed for the first animation, but not
	// succeeding animations (even if you create two 
	// separate functions.

	// STEP 1: create / initialize the scrollmagic controller
	// STEP 2: create animation object (with a duration of half a second)
	// STEP 3: create scene object (and select scene options)
	// STEP 4: add our animation object to the scene object
	// STEP 5: add our scene object to the scrollmagic controller
	// OPTIONAL: add debug indicators fixed on right side

	// Implement Banner Animation when the DOM is ready
	var controller = new ScrollMagic.Controller();
	var bannertween = TweenMax.to('#animate-brand', 0.5, {
		scale: 0.8
	});
	var bannerscene = new ScrollMagic.Scene({
		triggerElement: "#trigger-scale",
		duration: 300 // Setting to 300 makes scrolling like scrubbing the animation over 300 pixels
	});
	bannerscene.setTween(bannertween);
	bannerscene.addTo(controller);
	bannerscene.addIndicators({name: "1 (duration: 300)"});

	// Implement Header Overlay Animation when the DOM is ready
	var overlaytween = TweenMax.to('#animate-overlay', 0.5, {
		scale: 0.8
	});
	var overlayscene = new ScrollMagic.Scene({
		triggerElement: "#trigger-overlay",
		duration: 300 // Setting to 300 makes scrolling like scrubbing the animation over 300 pixels
	});
	overlayscene.setTween(overlaytween);
	overlayscene.addTo(controller);
	overlayscene.addIndicators({name: "2 (duration: 300)"});

	// Implement Ribbon Animations when the DOM is ready
	var ribbontween = TweenMax.to('#animate-ribbon', 0.5, {
		letterSpacing: '5px'
	});
	var ribbonscene = new ScrollMagic.Scene({
		triggerElement: "#ribbon-trigger",
		duration: 40 // Let the animation occur over 40 pixels
	});
	ribbonscene.setTween(ribbontween);
	ribbonscene.addTo(controller);
	ribbonscene.addIndicators({name: "3"});
})();
