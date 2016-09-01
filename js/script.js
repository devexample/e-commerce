(function() {
  // Globals in Scope
  var jqHeaderTopMenu = $("header .top.menu");
  var jqHeader = $("header");
  var jqMain = $("main");
  var jqToHideWhenScroll = $(".hide.when.scroll");
  var jqToShowWhenScroll = $(".visible-when-scroll");

  // Evnets functions
  window.onscroll = function() {
    hideHeaderTopMenu( window.pageYOffset );
    setHeaderSticky( window.pageYOffset );
  };

  // Functions
  function hideHeaderTopMenu( yAxis ) {
    var headerTopMenuHeight = jqHeaderTopMenu.height();
    if( yAxis > headerTopMenuHeight ){
      jqToShowWhenScroll.removeClass("visible-when-scroll");
      jqToHideWhenScroll.addClass("display none");
    } else {
      jqToShowWhenScroll.addClass("visible-when-scroll");
      // jqToHideWhenScroll.show();
      jqToHideWhenScroll.removeClass("display none");
    }
  }

  function setHeaderSticky( yAxis ) {
    var headerTopMenuHeight = jqHeaderTopMenu.height();
    if( yAxis > headerTopMenuHeight ){
      jqHeader.addClass("position fixed").css({top: headerTopMenuHeight * -1});
      jqMain.css({marginTop: jqHeader.height()});
    } else {
      jqHeader.removeClass("position fixed");
      jqMain.css({marginTop: 0});
    }
  }
})();
