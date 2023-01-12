
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
  
  /*$(".Inicio").click(function(){
    $(".section_ini").show(500);
    $(".section_formac").hide(0);
    $(".section_formad").hide(0);
    $(".section_exp").hide(0);
    $(".section_cont").hide(0);
  });
  $(".FormacionAcademica").click(function(){
    $(".section_ini").hide(1);
    $(".section_formac").show(500);
    $(".section_formad").hide(1);
    $(".section_exp").hide(1);
    $(".section_cont").hide(1);
  });
  $(".FormacionAdicional").click(function(){
    $(".section_ini").hide(1);
    $(".section_formac").hide(1);
    $(".section_formad").show(500);
    $(".section_exp").hide(1);
    $(".section_cont").hide(1);
  });
  $(".ExperienciaLaboral").click(function(){
    $(".section_ini").hide(1);
    $(".section_formac").hide(1);
    $(".section_formad").hide(1);
    $(".section_exp").show(500);
    $(".section_cont").hide(1);
  });
  $(".Contacto").click(function(){
    $(".section_ini").hide(1);
    $(".section_formac").hide(1);
    $(".section_formad").hide(1);
    $(".section_exp").hide(1);
    $(".section_cont").show(500);
  });*/
});

