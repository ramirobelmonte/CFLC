function CambiarDiapostiva(id){
	var dataDiapo =$('#' + id +' .diapositiva');
	var texto = dataDiapo.children('.texto').val();
	var opcion1Texto = dataDiapo.children('.opcion1Texto').val();
	var opcion1Id = dataDiapo.children('.opcion1Id').val();
	var opcion2Texto = dataDiapo.children('.opcion2Texto').val();
	var opcion2Id = dataDiapo.children('.opcion2Id').val();
	var srcName = dataDiapo.children('.srcName').val();
	var EsFinal = dataDiapo.children('.EsFinal').val();
	if(esFinal == true){
		//ALGO TENEMOS QUE HACER ACA
	}
	else{
		$('#mainText').html(texto);
		$('#btnOpcion1').html(opcion1Texto);
		$('#btnOpcion1').val(opcion1Id);
		$('#btnOpcion2').html(opcion2Texto);
		$('#btnOpcion2').val(opcion2Id);
		//La imagen esta en css ver que tocar para cambiarla
		$('#tagSrc').attr('src',"/assets/img/"srcName);
	};
}