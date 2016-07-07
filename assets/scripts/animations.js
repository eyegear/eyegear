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
	// EXAMPLE: sloganscene.addIndicators({name: "0 (duration: 300)"});




	// Implement Banner Animation when the DOM is ready 
	// Setting duration to 300 makes scrolling like scrubbing the animation over 300 pixels
	var controller = new ScrollMagic.Controller();
	var slogantween = TweenMax.to('#animate-slogan', 0.5, { scale: 1.8, autoAlpha: 0, });
	var backgroundtween = TweenMax.from('#adjustable-background', 0.5, { autoAlpha: 1, });
	var sloganscene = new ScrollMagic.Scene({ triggerElement: "#trigger-fadeout", duration: 300 });
	sloganscene.setTween(slogantween);
	sloganscene.setTween(backgroundtween);
	sloganscene.addTo(controller);




	var brandtween = TweenMax.to('#animate-brand', 0.5, {
		scaleY: 1.2,
	});
	var brandscene = new ScrollMagic.Scene({
		triggerElement: "#trigger-scale",
		duration: 300 // Setting to 300 makes scrolling like scrubbing the animation over 300 pixels
	});
	brandscene.setTween(brandtween);
	brandscene.addTo(controller);




	// Implement Header Overlay Animation when the DOM is ready
	var overlaytween = TweenMax.from('#animate-overlay', 0.5, {
		rotationY: 20,
		rotationX: 20,
		scale: 1.20,
		autoAlpha: 0,
	});
	var overlayscene = new ScrollMagic.Scene({
		triggerElement: "#trigger-overlay",
		duration: 300 // Setting to 300 makes scrolling like scrubbing the animation over 300 pixels
	});
	overlayscene.setTween(overlaytween);
	overlayscene.addTo(controller);





	// Implement Ribbon Animations when the DOM is ready
	var ribbontween = TweenMax.to('#animate-ribbon', 0.5, {
		letterSpacing: '1.5px',
		rotationX: -360,
		scale: 0.95,
	});
	var ribbonscene = new ScrollMagic.Scene({
		triggerElement: "#ribbon-trigger",
		duration: 0 // Let the animation simply be triggered
	});
	ribbonscene.setTween(ribbontween);
	ribbonscene.reverse(false);
	ribbonscene.addTo(controller);





	// Implement About Animations when the DOM is ready
	var abouttween = TweenMax.to('#animate-about-text', 1.0, {
		opacity: 1,
		color: '#fff',
	});
	var aboutscene = new ScrollMagic.Scene({
		triggerElement: "#trigger-opacity",
		duration: 0
	});
	aboutscene.setTween(abouttween);
	aboutscene.addTo(controller);
})();
