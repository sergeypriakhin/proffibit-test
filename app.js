(function(){
	var xmlhttp = new XMLHttpRequest(),
		url = "data.json";

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var getJson = JSON.parse(xmlhttp.responseText);
	        sliderTemplate(getJson);
	    }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	function sliderTemplate(data) {
	    var output = "";
	    for (var i in data.sliders) {
	    	if (i == 0) {
	    		output += "<div class='item active'>";    		
	    	} else {
	    		output += "<div class='item'>";
	    	}
	        output += '<img src=images/' 
	        	   + data.sliders[i].img.path 
	        	   + ' alt="' 
	        	   + data.sliders[i].img.alt 
	        	   + '" class="img-slider">';
	        output += '<div class="carousel-caption">' + data.sliders[i].text + '</div>';
	        output += "</div>";
   		 }

    	output+="</div>";
    	document.getElementById("carousel-inner").innerHTML = output;
	}
}());