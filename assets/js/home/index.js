(function ($mainRoot, w, d) {
  /* top level vars */
  var hasWebpSupport = false;

  function createdGeometricHeroVideo() {
    var pe = $("#geometricFixedJumbotron");
    var config = {
      parentElement: pe,
      playInMobile: true,
      playInTablet: true,
      playInDesktop: true,
      webmVideo: pe.attr("data-webm"),
      mp4Video: pe.attr("data-mp4"),
      callback: function() {},
      fallbackImage: ""
    };
    buildHtmlVideo(config);
  }

  function pageControl() {
    createdGeometricHeroVideo();
  }

  $(d).ready(function() {
    pageControl();
  });
})($("#homePage"), window, document);
