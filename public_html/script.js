/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 * rtj2.json
 */

// immediately invoked anonymous function
(function() {

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "rtj2.json", true);

	xhr.setRequestHeader("Content-Type",
		"application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			var status = xhr.status;

			if ((status >= 200 && status < 300) ||
				status === 304) {
				
				var album = JSON.parse(xhr.responseText);
				JSON.stringify(album);								
				var output ="";
				for (var i = 0, len = album.runthejewels2.tracks.length; i < len; i++) {
					console.log(album.runthejewels2.tracks[i].link);
					output += 
					'<li><a href"' + album.runthejewels2.tracks[i].link + '">' +
					album.runthejewels2.tracks[i].track + '</a></li>';
					
				}

				document.getElementById("rtj2tracks").innerHTML = output;
			}
		}
	};

	xhr.send(null);

}());

// for (i = 0, len = noNames.length; i < len; i++) {
//  var name = noNames[i];
//  alert(name);
//  }