/*!
 * Vegas Configuration Code
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for the slideshow in the header section.

$(".underlay").vegas({
      timer: false,
      delay: 17000,
      preload: true,
      overlay: 'https://s3-ap-northeast-1.amazonaws.com/www-capoeirastudio-com/07.png',
      slides: [
        { src: "https://s3.ap-northeast-2.amazonaws.com/eyegear/malcolm-x-birthday-2000x1350px.jpeg", valign: "70%", transition: "zoomOut" },
        { src: "https://s3.ap-northeast-2.amazonaws.com/eyegear/malcolm-x-bowtie-2000x1200px.jpeg", valign: "50%", transition: "swirlRight" },
        { src: "https://s3.ap-northeast-2.amazonaws.com/eyegear/malcolm-x-faded-2000x1000px.jpeg", valign: "30%", transition: "zoomOut" },
        { src: "https://s3.ap-northeast-2.amazonaws.com/eyegear/malcolm-x-ponders-2000x1000px.jpeg", align: "10%", transition: "blur" },
      ],
      animation: 'kenburnsUpLeft',
      transitionDuration: 9000,
});


})(jQuery); // End of use strict

