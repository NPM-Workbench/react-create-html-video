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

  function handleSkullVideo() {
    var target = $("#skullVideoParent");

    /* do not do this if not there */
    if (!target || !("IntersectionObserver" in window)) {
      return;
    } else {
      var observer = new IntersectionObserver(
        function (entries, observerInstance) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
              observerInstance.unobserve(entry.target); // trigger once
              var config = {
                parentElement: target,
                playInMobile: true,
                playInTablet: true,
                playInDesktop: true,
                webmVideo: target.attr("data-webm"),
                mp4Video: target.attr("data-mp4"),
                callback: function() {},
                fallbackImage: ""
              }
              buildHtmlVideo(config);
            }
          });
        },
        {
          threshold: 0.1
        }
      );
      /* start observation */
      observer.observe(target[0]);
    }
  }

  function pageControl() {
    createdGeometricHeroVideo();
    handleSkullVideo();
  }

  $(d).ready(function() {
    pageControl();
  });
})($("#homePage"), window, document);
