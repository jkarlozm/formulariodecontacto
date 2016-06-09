<?php
	$destinatario = "jkarloz2903@gmail.com";
	$asunto = "Mensaje enviado desde web";
	$contenido = '<!DOCTYPE html>
		<html lang="en" style="height: 100%;">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
				<title>'.$asunto.'</title>
				<style>
					*{
						-webkit-box-sizing: border-box;
						-moz-box-sizing: border-box;
						box-sizing: border-box;
					}
				</style>
			</head>
			<body style="background-color: rgba(35,67,14,0.8); margin: 0px; padding: 0px; width: 100%; height: 100%; position: relative;">
				<div style="width: 90%; height: 100%; min-height: 100%; background-color: #fff; padding: 10px 0; position: absolute; left: 5%; top: 0; bottom: 0;">
					<header>
						<h1 style="text-align: center; text-transform: uppercase;">karlozweb</h1>
					</header>
					<fieldset style="width: 80%; margin:auto; margin-bottom: 15px;">
						<legend><h4 style="text-transform: capitalize;">Datos del contacto</h4></legend>
						<blockquote>
							<dl>
								<dt><strong>Nombre:</strong></dt>
								<dd>'.$_POST["name"].'</dd> <br>
								<dt><strong>Correo:</strong></dt>
								<dd><a href="mailto:'.$_POST["email"].'" style="text-decoration: none;">'.$_POST["email"].'</a></dd> <br>
								<dt><strong>Página Web:</strong></dt>
								<dd><a href="'.$_POST["site"].'" style="text-decoration: none;">'.$_POST["site"].'</a></dd>
							</dl>
						</blockquote>
					</fieldset>
					<fieldset style="width: 80%; margin:auto;">
						<legend><h2>Mensaje</h2></legend>
						<blockquote style="text-align: justify;">
							'.$_POST['msj'].'
						</blockquote>
					</fieldset>
					<footer style="background-color: rgb(43,61,28); width: 80%; padding: 15px; position: absolute; bottom: 0; left: 10%">
						<p style="text-align: center; color: #fff; ">Este mensajej fue generado desde: <a href="karlozweb.esy.es" style="text-decoration: none; color: #fff; font-size: 20px; font-weight: bolder;">karlozweb</a></p>
					</footer>		
				</div>
			</body>
		</html>';

	$encabezado = 'MIME-Version: 1.0'."\r\n";
	$encabezado .= 'Content-type: text/html; charset = UTF-8'."\r\n";
	$encabezado .= 'FROM: '.$_POST["email"]."\r\n";

	if (mail($destinatario, $asunto, $contenido, $encabezado)) 
		echo "1";	
	else
		echo "2";
