var theButton = document.getElementById ( 'myForm' );

theButton.addEventListener( "submit", function(event) {
	event.preventDefault();
	var firstName = document.getElementById( "fname" ).value;
	var lastName = document.getElementById( "lname" ).value;
	var email = document.getElementById( "email" ).value;
	var message = document.getElementById( "msg" ).value;

	console.log( 'The firstName is: ' + firstName);
	console.log( 'The lastName is: ' + lastName);
	console.log( 'The email is: ' + email);
	console.log( 'The message is: ' + message);
});
