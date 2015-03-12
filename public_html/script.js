/**
 * script.js 
 * @ Stephen O'Connor, Febuary 2015
 * 
 * Dependencies: 
 * http://tristanedwards.me/sweetalert 
 * 
 */

// immediately invoked anonymous function
( function () {

// jQuery AJAX call
$.ajax({
	url: 'rtj2.json',
	dataType: 'json',
	type: 'get',
	cache: false,
	success: function(data) {
		console.log(data);
		// display links on page
		var output = "";
		$.each(data, function(key, val) {
			for (var i = 0; i < val.length; i++) {
				var user = val[i];
				output +=
					"<li><a id='" +
					user.rtj2 +					
					"</a></li>";
			}
			$('ul#rtj2').append(output);
		});
	}
});

}() ); // end immediately invoked anonymous function


