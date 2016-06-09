$(document).ready( function(){
	//Validación de campos
	$("#nameUser").keyup(validarNombre);
	$("#emailUser").keyup(validarCorreo);
	$("#siteWeb").keyup(validarPagina);
	$("#textMessage").keyup(validarMensaje);

	//Funciones de validación
	function validarNombre() {
		//Validar campos formulario contacto
		if ( $("#nameUser").val() == null || $("#nameUser").val().length == 0 || /^\s+$/.test( $("#nameUser").val() ) ) {
			$("#iconInput").remove();
			$("#nameUser").parent().removeClass("has-success").addClass("has-warning has-feedback");
			$("#nameUser").parent().append("<span id='iconInput' class='glyphicon glyphicon-remove-circle form-control-feedback'></span>");		
			return false;
		}
		else{
			$("#iconInput").remove();
			$("#nameUser").parent().removeClass("has-warning").addClass("has-success has-feedback");
			$("#nameUser").parent().append("<span id='iconInput' class='glyphicon glyphicon-ok-circle form-control-feedback'></span>");
			return true;
		}
	};

	function validarCorreo() {
		//Validar campos formulario contacto
		if ( !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( $("#emailUser").val() ) || $("#emailUser").val() == null || $("#emailUser").val().length == 0 || /^\s+$/.test( $("#emailUser").val() ) ) {
			$("#iconInput1").remove();
			$("#emailUser").parent().removeClass("has-success").addClass("has-warning has-feedback");
			$("#emailUser").parent().append("<span id='iconInput1' class='glyphicon glyphicon-remove-circle form-control-feedback'></span>");		
			return false;
		}
		else{
			$("#iconInput1").remove();
			$("#emailUser").parent().removeClass("has-warning").addClass("has-success has-feedback");
			$("#emailUser").parent().append("<span id='iconInput1' class='glyphicon glyphicon-ok-circle form-control-feedback'></span>");
			return true;
		}
	};

	function validarPagina() {
		//Validar campos formulario contacto
		if ( $("#siteWeb").val() == null || $("#siteWeb").val().length == 0 || /^\s+$/.test( $("#siteWeb").val() ) ) {
			$("#iconInput2").remove();
			$("#siteWeb").parent().removeClass("has-success").addClass("has-warning has-feedback");
			$("#siteWeb").parent().append("<span id='iconInput2' class='glyphicon glyphicon-remove-circle form-control-feedback'></span>");		
			return false;
		}
		else{
			$("#iconInput2").remove();
			$("#siteWeb").parent().removeClass("has-warning").addClass("has-success has-feedback");
			$("#siteWeb").parent().append("<span id='iconInput2' class='glyphicon glyphicon-ok-circle form-control-feedback'></span>");
			return true;
		}
	};

	function validarMensaje() {
		//Validar campos formulario contacto
		if ( $("#textMessage").val() == null || $("#textMessage").val().length == 0 || /^\s+$/.test( $("#textMessage").val() ) ) {
			$("#iconInput3").remove();
			$("#textMessage").parent().removeClass("has-success").addClass("has-warning has-feedback");
			$("#textMessage").parent().append("<span id='iconInput3' class='glyphicon glyphicon-remove-circle form-control-feedback'></span>");		
			return false;
		}
		else{
			$("#iconInput3").remove();
			$("#textMessage").parent().removeClass("has-warning").addClass("has-success has-feedback");
			$("#textMessage").parent().append("<span id='iconInput3' class='glyphicon glyphicon-ok-circle form-control-feedback'></span>");
			return true;
		}
	};

	//Botón para enviar mensaje
	$("#enviarMensaje").click(function () {
		if( validarNombre() && validarCorreo() && validarPagina() && validarMensaje() ) {
			$.ajax({
				type: "POST",
				url: "librerias/enviarMensaje.php",
				data: {name: $("#nameUser").val(), email: $("#emailUser").val(), site: $("#siteWeb").val(), msj: $("#textMessage").val()},
				success: function(response){
					console.log(response);
					switch(response){
						case "1":
							$("#mensajeAlerta").append('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><p>"Mensaje Enviado"</p></div>');
							$("#formContacto")[0].reset();
							break;
						case "2":
							$("#mensajeAlerta").append('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><p>"El Mensaje no se a podido Enviado"</p></div>');							
							break;
					}
				}
			})
		}
		else{
			$("#mensajeAlerta").alert('close');
			validarNombre();
			validarCorreo();
			validarPagina();
			validarMensaje();
			$("#mensajeAlerta").append('<div class="alert alert-dismissible alert-info" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <p>"Hay campos vacios"</p></div>');
			
		}
	})

});