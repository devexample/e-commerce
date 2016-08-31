(function() {
  // Globals in Scope
  var headerElement = $("header");
  var mainElement = $("main");
  var headerTopMenu = $("header .top.section");
  var hiddenHeaderMenuElements = $("header .menu .display.none");
  var hideWhenScrollElements = $(".hide.when.scroll")

  // Evnets functions
  window.onscroll = function() {
    hideHeaderTopMenu( window.pageYOffset );
    setHeaderSticky( window.pageYOffset );
  };

  window.onresize = function() {
    setHeaderSticky( window.pageYOffset );
  };

  // Functions
  function hideHeaderTopMenu( yAxis ) {
    if( yAxis > 300 ){
      // headerTopMenu.slideUp(200);
      hiddenHeaderMenuElements.removeClass("none").addClass("block");
      hideWhenScrollElements.removeClass("display block").addClass("display none");
    } else {
      // headerTopMenu.slideDown(200);
      hiddenHeaderMenuElements.removeClass("block").addClass("none");
      hideWhenScrollElements.removeClass("display none").addClass("display block");
    }
  }

  function setHeaderSticky( yAxis ) {
    var headerTopMenuHeight = headerTopMenu.height();
    if( yAxis > headerTopMenuHeight ){
      headerElement.addClass("position fixed").css({top: headerTopMenuHeight *-1});
      mainElement.addClass("fixed");
    } else {
      headerElement.removeClass("position fixed");
      mainElement.removeClass("fixed");
    }
  }
})();
