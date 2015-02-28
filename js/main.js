var theHeading = document.getElementsByTagName("h1");

var click = 1;
window.onclick = function () {
    click++;
    return click;
}

theHeading[0].addEventListener( "click", function() {
	var newPara = document.createElement( "p" );

	newPara.innerHTML = "This is click number " + click;

	var theContainer = document.getElementsByTagName("body")[0];
	theContainer.appendChild( newPara );
});

