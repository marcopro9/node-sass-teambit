var menuOpen = $(".navbar > .burger ");
var menuClose = $(".close");
var hiddenMenu = $(".hamburger-menu");

menuOpen.click(
  function(){
    hiddenMenu.removeClass("hidden");
  }
);

menuClose.click(
  function(){
    hiddenMenu.addClass("hidden");
  }
);
