$(document).ready(function() {
	
		for ( var i = 1; i <= 100; i++ ) {
		
		console.log(i);
		if ( i % 15 == 0 ) {
			$("body").append("fizz buzz");
			$("body").append("<br/>");
		}
		else if ( i % 3 == 0 ) {
			$("body").append("fizz");
			$("body").append("<br/>");
		}
		else if ( i % 5 == 0 ) {
			$("body").append("buzz");
			$("body").append("<br/>");
		} 

		else {
			console.log(i);
			$("body").append(i);
			$("body").append("<br/>");
		}
	}
});