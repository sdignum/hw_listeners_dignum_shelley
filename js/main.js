var theHeading = document.getElementsByTagName("h1");

theHeading[0].addEventListener( "click", function() {
	var newPara = document.createElement( "p" );
	newPara.innerHTML = "This is click number";

	var theContainer = document.getElementsByTagName("body")[0];
	theContainer.appendChild( newPara );
});