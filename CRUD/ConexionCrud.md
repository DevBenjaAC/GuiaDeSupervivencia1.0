# CRUD en JavaScript Modelo MVC
### Modelo Vista Controlador

Un CRUD (acrónimo en inglés de Create, Read, Update, Delete) se refiere a las operaciones básicas de una aplicación que se encarga de gestionar los datos en una base de datos. En este caso, te explicaré cómo crear un CRUD básico en JavaScript utilizando el patrón MVC (Modelo-Vista-Controlador) y el uso de Fetch API para conectarnos a un servidor.

Lo primero que debemos hacer es crear una estructura básica de nuestra aplicación. Para esto, necesitamos tres archivos: un archivo HTML que contendrá nuestra vista, un archivo JavaScript que contendrá nuestro controlador y un archivo JavaScript que contendrá nuestro modelo.

Estructura HTML

html
<!DOCTYPE html>
<html>
<head>
	<title>CRUD en JavaScript</title>
</head>
<body>
	<form>
		<label>Nombre:</label>
		<input type="text" id="nombre">
		<label>Apellido:</label>
		<input type="text" id="apellido">
		<button type="button" onclick="crear()">Crear</button>
	</form>
	<table id="tabla">
		<tr>
			<th>Nombre</th>
			<th>Apellido</th>
			<th>Acciones</th>
		</tr>
	</table>
	<script src="controlador.js"></script>
</body>
</html>

En este archivo, tenemos un formulario con dos campos de texto para ingresar el nombre y el apellido de una persona, y un botón para crear una nueva entrada en nuestra base de datos. También tenemos una tabla para mostrar los datos y un script que hace referencia al archivo que contendrá nuestro controlador.

Controlador JavaScript

javascript
<script>
function crear() {
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var data = { nombre: nombre, apellido: apellido };
	fetch("/crear", {
		method: "POST",
		body: JSON.stringify(data),
		headers: { "Content-Type": "application/json" }
	})
	.then(function(response) {
		if (response.ok) {
			actualizarTabla();
			document.getElementById("nombre").value = "";
			document.getElementById("apellido").value = "";
		}
	})
	.catch(function(error) {
		console.log(error);
	});
}
</script>

<script>
function actualizarTabla() {
	fetch("/leer")
	.then(function(response) {
		if (response.ok) {
			return response.json();
		}
	})
	.then(function(data) {
		var tabla = document.getElementById("tabla");
		tabla.innerHTML = "<tr><th>Nombre</th><th>Apellido</th><th>Acciones</th></tr>";
		data.forEach(function(item) {
			var row = tabla.insertRow();
			var nombreCell = row.insertCell(0);
			var apellidoCell = row.insertCell(1);
			var accionesCell = row.insertCell(2);
			nombreCell.innerHTML = item.nombre;
			apellidoCell.innerHTML = item.apellido;
			accionesCell.innerHTML = "<button type='button' onclick='editar(" + item.id + ")'>Editar</button> <button type='button' onclick='eliminar(" + item.id + ")'>Eliminar</button>";
		});
	})
	.catch(function(error) {
		console.log(error);
	});
}

function editar(id) {
	fetch("/leer/" + id)
	.then(function(response) {
		if (response.ok) {
			return response.json();
		}
	})
	.then(function(data) {
		document.getElementById("nombre").value = data.nombre;
		document.getElementById("apellido").value = data.apellido;

</script>