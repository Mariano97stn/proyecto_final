
$(document).ready(function() {
  $("ul.menu_lista li:first").addClass("active");
  $(".section_all ul").hide();
  $(".section_all ul:first").show();
  $("ul.menu_lista li").click(function(){
    $("ul.menu_lista li").removeClass("active");
    $(this).addClass("active");
    $(".section_all ul").hide(0);
    var menuSeleccionado = $(this).attr("href");
    $(menuSeleccionado).show(1000);
    return false;
  })
})