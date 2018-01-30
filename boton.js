document.body.onload = function() {
  var url = "'http://www.anses.gob.ar/autogestion'"
  
  if (window.location.href !== url) {
    document.body.innerHTML += '<button id="cerrar" type="button" name="button" onclick="window.location='+url+'" style="position:fixed;bottom:30px;left:30px; background-color:red;color:white;padding:16px;z-index:10000;border:0px;cursor:pointer;font-size:64px;border-radius:8px;box-shadow:3px 3px 6px black">Cerrar</button>';
  }
}
