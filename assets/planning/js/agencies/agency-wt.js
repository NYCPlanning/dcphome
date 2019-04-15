var prod_dcsId_val = "dcs222dqvesjopw9ncxm6ggwq_4s2e";
var pageCounter;
var pageInt = 0;

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48669003-1', 'auto');
  ga('send', 'pageview');



function mySiteTracker() {
    pageCounter = readCookie('pageCounter');
    var pageLast = readCookie('pageLast');
   
    if (pageCounter) {
        pageInt = parseInt(pageCounter);
		//alert(pageInt);
        if (pageInt == 3) return true;
        if (window.location.href == pageLast) return false;
    }
    createCookie('pageCounter',(pageInt + 1));
    createCookie('pageLast',window.location.href);
    return false;
}



function createCookie(name,value) {
	var d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = name+"="+value+";"+ expires +"; path=/";
	
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}




function closePopup() {
	var popupWindow = document.getElementById("SurveyPopup");
	popupWindow.style.visibility = "hidden";
	popupWindow.style.display = "none";
	
}


function OpenSurvey() {
	document.write('<style type="text/css">');
	document.write('#SurveyPopup { background-color:#CCC; filter: alpha(opacity=97); -moz-opacity: 0.97; opacity: 0.97; }');
	document.write('</style><div id="SurveyPopup" style="position: absolute; top: 115px; left: 10px; height: 180; width: 350px; z-index: 999">');
	document.write('<iframe style="z-index: 999; border:#ccc solid 1px" src="http://www1.nyc.gov/assets/planning/html/misc/survey_popup.html" height="180" width="349" frameborder="0"></iframe>');
	document.write('<p align="center"><a href="javascript:gotoSurvey();">Take the Survey</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:closePopup();">No Thanks</a></p>');
	
	document.write('</div>');
	createCookie('pageCounter',(pageInt + 1));
}


function DoSurvey() {
	
	if(mySiteTracker()&&(pageInt == 3)) {
	OpenSurvey();	
		
	}
}



function gotoSurvey() {
	
	window.open('/site/planning/about/survey.page','_blank');
	
}

DoSurvey();