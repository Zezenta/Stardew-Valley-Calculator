var precio_inicial;
var dinero_cosecha;
var ganancia;

var n = document.getElementById("nombreplanta");
var a = document.getElementById("primero");
var b = document.getElementById("segundo");
var c = document.getElementById("tercero");
var d = document.getElementById("cuarto");

var nombreplanta;
var precio_semilla;
var precio_planta;
var cantidad_cultivos;
var cosechas_mensuales;

function calcular()
{
	var n = document.getElementById("nombreplanta");
	var a = document.getElementById("primero");
	var b = document.getElementById("segundo");
	var c = document.getElementById("tercero");
	var d = document.getElementById("cuarto");

	nombreplanta = n.value;
	precio_semilla = parseInt(a.value);
	precio_planta = parseInt(b.value);
	cantidad_cultivos = parseInt(c.value);
	cosechas_mensuales = parseInt(d.value);
	
	precio_inicial = precio_semilla * cantidad_cultivos;
	dinero_cosecha = (precio_planta * cantidad_cultivos) * cosechas_mensuales;
	ganancia = dinero_cosecha - precio_inicial;

	Primertexto.innerText = nombreplanta + "\n";
	Primertexto.style = "font-size: 20px"
	Segundotexto.innerText = "El precio para sembrar " + cantidad_cultivos + " plantas es de " + precio_inicial + "G\n";
	Tercertexto.innerText = "El dinero que te dará sembrar " + cantidad_cultivos + " plantas va a ser " 
	+ dinero_cosecha + "G al mes\n";
	Cuartotexto.innerText = "La ganancia total que te dará sembrar " + cantidad_cultivos + " plantas va a ser de " + ganancia + "G\n";
	Quintotexto.innerText = "";
	eliminarElemento("botonconsaltodelinea");
	eliminarElemento("nombreplanta");
	eliminarElemento("primero");
	eliminarElemento("segundo");
	eliminarElemento("tercero");
	eliminarElemento("cuarto");
}

function eliminarElemento(id){
	imagen = document.getElementById(id);	
	if(!imagen)
	{
		alert("El elemento selecionado no existe");
	}
	else 
	{
		padre = imagen.parentNode;
		padre.removeChild(imagen);
	}
}