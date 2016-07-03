/* ========================================================================
 * DOM-based Scroll Animations
 * Based on http://scrollmagic.io/examples/basic/simple_tweening.html
 * ======================================================================== */

// Implement Header Animations when the DOM is ready

(function() {

	// STEP 1: create / initialize the scrollmagic controller
	var controller = new ScrollMagic.Controller();

	// STEP 2: create animation object (with a duration of half a second)
	var tween = TweenMax.to('#animate-brand', 0.5, {
		scale: 1.2
	});

	// STEP 3: create scene object (and select scene options)
		var scene = new ScrollMagic.Scene({
		triggerElement: "#trigger-scale",
		duration: 300 // Setting to 300 makes scrolling like scrubbing the animation over 300 pixels
	});

	// STEP 4: add our animation object to the scene object
		scene.setTween(tween);
		
	// STEP 5: add our scene object to the scrollmagic controller
		scene.addTo(controller);

	// OPTIONAL: add debug indicators fixed on right side
		scene.addIndicators();
})();

// Implement Ribbon Animations when the DOM is ready

(function() {

	// STEP 1: create / initialize the scrollmagic controller
	var controller = new ScrollMagic.Controller();

	// STEP 2: create animation object (with a duration of half a second)
	var tween = TweenMax.to('#brand-animation', 0.5, {
		letterSpacing: '10px',
	});

	// STEP 3: create scene object (and select scene options)
		var scene = new ScrollMagic.Scene({
		triggerElement: "#trigger-steps",
		duration: 0 // Setting to zero makes the trigger act like a toggle
	});

	// STEP 4: add our animation object to the scene object
		scene.setTween(tween);
		
	// STEP 5: add our scene object to the scrollmagic controller
		scene.addTo(controller);

	// OPTIONAL: add debug indicators fixed on right side
		scene.addIndicators();
})();
