document.body.onload = function() {
  chrome.storage.sync.get("data", function(items) {
    if (!chrome.runtime.error) {
      if (items.data) {
				var url = "'http://" +items.data+"'"
				console.log(window.location.href + " -- " + url)
				if (window.location.href !== url) {
					document.body.innerHTML += '<button id="cerrar" type="button" name="button" onclick="window.location='+url+'" style="position:fixed;bottom:30px;left:30px; background-color:red;color:white;padding:16px;z-index:10000;border:0px;cursor:pointer;font-size:64px;border-radius:8px;box-shadow:3px 3px 6px black">Cerrar</button>';
				}
      }
    }
  });
}
