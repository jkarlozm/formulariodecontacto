<?php
	header("Content-type: image/png");

	//Creamos las dimenciones de la imagen
	$imagen = imagecreate( 110, 32 );
	
	//Color de fondo negro
	$colorFondo = imagecolorallocate( $imagen, 102, 102, 153 );

	//Color del texto blanco
	$colorTexto = imagecolorallocate( $imagen, 255, 255, 255 );

	session_start();
	
	$valor = '';

	//Separacion de las letras
	for ( $x = 15; $x <= 95 ; $x += 20 ) { 
		$valor .= ( $num = rand( 1, 9 ) );
		imagechar($imagen, rand( 3, 5 ), $x, rand( 2, 14 ), $num,  $colorTexto);
	}

	imagepng($imagen);
	imagedestroy($imagen);

	$_SESSION['imgNumber'] = $valor;

?>