var menuOpen = $(".navbar > .burger ");
var menuClose = $(".close");
var hiddenMenu = $(".hamburger-menu");

menuOpen.click(
  function(){
    hiddenMenu.addClass("active");
  }
);

menuClose.click(
  function(){
    hiddenMenu.removeClass("active");
  }
);
