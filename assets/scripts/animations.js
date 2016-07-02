/* ========================================================================
 * DOM-based Scroll Animations
 * Based on http://scrollmagic.io/examples/basic/simple_tweening.html
 * ======================================================================== */

// Implement Ribbon Animations when the DOM is ready

$(function() {

	// STEP 1: create / initialize the scrollmagic controller
	var controller = new ScrollMagic.Controller();

	// STEP 2: create animation object (with a duration of half a second)
	var tween = TweenMax.to('#brand-animation', 0.5, {
		letterSpacing: '10px',
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
})();
