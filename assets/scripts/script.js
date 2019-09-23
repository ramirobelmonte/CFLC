$("#aceptar").click(function(){
	 $("#start").fadeOut("slow"),
	 $(".mainB").css({"display":"flex"});
 }
);

$("#cancelar").click(function(){
	$("#start").css({"background-color":"#ff6b6b"}),
	$(".second").hide("100"),
	$(".first>p").text("GameOver");
	}
);
$(function (){
	$('#btnOpcion1').click(function(){CambiarDiapostiva($(this).val());});
	$('#btnOpcion2').click(function(){CambiarDiapostiva($(this).val());});
});
