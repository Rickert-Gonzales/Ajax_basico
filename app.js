let btnCarga = document.getElementById("cargar");

//carga de datos
function cargarContenido() {
  //creamos xmlHttpRequest
  let xhr = new XMLHttpRequest();

  //abrir conexion
  xhr.open("GET", "texto.txt", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let contenido = document.getElementById("contenido");
      contenido.innerHTML = xhr.responseText;
    }
  };
  //eviar
  xhr.send();
}

//capturamos el evento
btnCarga.addEventListener("click", cargarContenido);
