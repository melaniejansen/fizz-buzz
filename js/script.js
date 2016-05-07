$(document).ready(function() {

	//Click on the submit button to get value
	$('#submit').on('click', function() {
		var inputValue = $('#text-input').val();

	//Determine if the number is in range and print value
		if (inputValue % 1 === 0 && inputValue >= 1 && inputValue <= 100) {
		fizzbuzz(inputValue);
		} 
	});
	
});

function fizzbuzz(num) {
	for ( var i = 1; i <= num; i++ ) {
		console.log(i);

		if ( i % 15 == 0 ) {
			console.log("fizz buzz");
			$(".output").append("fizz buzz" + "<br/>");
		}
		else if ( i % 3 == 0 ) {
			console.log("fizz");
			$(".output").append("fizz" + "<br/>");
		}
		else if ( i % 5 == 0 ) {
			console.log("buzz");
			$(".output").append("buzz" + "<br/>");	
		} 
		else {
			console.log(i);
			$(".output").append(i + "<br/>");

		}
	}
};