$(document).ready(function() {
	
	$('#findSearch').tooltip();
});
	 


function ZoningSearch(){

		// Verify form
    if(document.GQForm.bo.selectedIndex == 0){
		alert("Please Select a Borough");
		return false;
	} else {
	// If Census App
	if(document.GQForm.qt[1].checked == true){
		window.location.href = ("http://maps.nyc.gov/census/?searchType=AddressSearch&addressNumber=" + escape(document.GQForm.hn.value) + "&street=" + escape(document.GQForm.sn.value) + "&borough=" + escape(document.GQForm.bo[document.GQForm.bo.selectedIndex].value));
	}

	// If Goat
	else if(document.GQForm.qt[2].checked == true){
		var boronumber;
		switch(document.GQForm.bo.selectedIndex)
		{case 1:
		boronumber=2;
		break;
		case 2:
		boronumber=3;
		break;
		case 3:
		boronumber=1;
		break;
		case 4:
		boronumber=4;
		break;
		case 5:
		boronumber=5;
		break;
		}
		

	window.location.href = ("http://a030-goat.nyc.gov/goat/Default.aspx?boro=" + boronumber+"&addressNumber="+ escape(document.GQForm.hn.value) +"&street="+escape(document.GQForm.sn.value));}

	
// If ZoLa
	else if(document.GQForm.qt[0].checked == true){
		var street = escape(document.GQForm.hn.value) + " " + escape(document.GQForm.sn.value) + " " +escape(document.GQForm.bo[document.GQForm.bo.selectedIndex].text);
		addressSearch(street);
	}

// If NYC Facilities Explorer
	else if(document.GQForm.qt[3].checked == true){
		 var street = escape(document.GQForm.hn.value) + " " + escape(document.GQForm.sn.value) + " " +escape(document.GQForm.bo[document.GQForm.bo.selectedIndex].text);
		 
		addressSearch(street);
     
	}
	
// If NYC Facilities Explorer
	else if(document.GQForm.qt[4].checked == true){
		 var street = escape(document.GQForm.hn.value) + " " + escape(document.GQForm.sn.value) + " " +escape(document.GQForm.bo[document.GQForm.bo.selectedIndex].text);
		 
		addressSearch(street);
     
	}
	
	return false
	}
}


// for address search button
        function addressSearch(street) {
        
            var script = document.createElement('script');
            script.src = "https://maps.nyc.gov/geoclient/v1/search.json?input=" + street +
                "&app_key=2C7B3D7B2DEFDEF9E&app_id=zoning-index-map&callback=address"

            document.head.appendChild(script);
        };

        // address search
        function address(data) {
        	//console.log(data);
        	//console.log(data.results[0].status)
          var faciURL;
		  var CPURL;

            if (data.status === 'REJECTED'){
            	alert("NO LOCATION FOUND");
				return false
            } else if (data.results[0].status === 'POSSIBLE_MATCH'){
				alert("NO LOCATION FOUND");
				return false
			
			} else if (data.results[0].request.match(/^address.*$/)) {
            	var lon = data.results[0].response.longitude;
           		var lat = data.results[0].response.latitude;
				
				faciURL=lat +"/" + lon;
				
				
				var CPboro = data.results[0].response.firstBoroughName.toLowerCase();;
				var CPCD = parseInt(data.results[0].response.communityDistrictNumber, 10);
				
				CPURL=CPboro +"/" + CPCD;
				//alert("a:"+CPURL);
				
            } else  { 
                var lon = data.results[0].response.longitudeInternalLabel;
                var lat = data.results[0].response.latitudeInternalLabel;
                faciURL=lat +"/" + lon;
				//alert("b:"+faciURL);
				
				var CPboro = data.results[0].response.firstBoroughName.toLowerCase();;
				var CPCD = parseInt(data.results[0].response.communityDistrictNumber, 10);
				
				CPURL=CPboro +"/" + CPCD;
				
            };
			
			if(document.GQForm.qt[3].checked == true) {
				window.location.href = "https://capitalplanning.nyc.gov/facilities/explorer#13.62/" + faciURL; }
				else if(document.GQForm.qt[4].checked == true) {
					window.location.href = "https://communityprofiles.planning.nyc.gov/" + CPURL; }
					else if(document.GQForm.qt[0].checked == true) {
					window.location.href = "https://zola.planning.nyc.gov/#15/" + faciURL; }
				
        }; //end function address

		
function gotoZoning(){
	var pageTopic=document.getElementById('topicZoning').value;
	
	if (pageTopic=="#"){
		alert ("Please Select a Topic");
	} else {
		window.location.href=pageTopic;
	}

}


function gotoPage(){
	var pageTopic=document.getElementById('topic').value;
	
	if (pageTopic=="#"){
		alert ("Please Select a Topic");
	} else {
		window.location.href=pageTopic;
	}

}

function gotoContact(){
	var pageTopic=document.getElementById('contactTopic').value;
	
	if (pageTopic=="#"){
		alert ("Please Select Your Interest");
	} else {
		window.location.href=pageTopic;
	}

}