$("#aceptar").click(function(){ $("#start").hide("slow");});
$("#cancelar").click(function(){
	$("#start").css({"background-color":"#ff6b6b"}),
	$(".second").hide("100"),
	$(".first>p").text("GameOver");
	}
);
$(function (){
	$('#btnOpcion1').click(function(){CambiarDiapostiva($(this).val()), $("#bodyImg").css({"height":"auto"});});
	$('#btnOpcion2').click(function(){CambiarDiapostiva($(this).val()), $("#bodyImg").css({"height":"auto"});});
});
