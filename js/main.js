var mainImage = document.getElementsByTagName ('img');

mainImage[0].addEventListener( "mouseover", function(){//listen for mouse over on image
	mainImage[0].src = "img/beach.jpg";//change image 
});

mainImage[0].addEventListener( "mouseout", function(){//listen for mouse out on image
	mainImage[0].src = "img/birds.jpg";//change image back
});