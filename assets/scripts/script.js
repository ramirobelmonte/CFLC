  $("#aceptar").click(function(){ $("#start").hide("slow");});
  $("#cancelar").click(function(){
     $("#start").css({"background-color":"#ff6b6b"}),
     $(".second").hide("100"),
     $(".first>p").text("GameOver");
   }
  );
