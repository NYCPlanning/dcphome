 /********************************************************************************
 
* This script is for NYC Department of City Planning's collapse tabs
To keep the collapse tabs retain the status while page back
Need to add the following hidden inputs on the page
 <input type="hidden" value="0" id="statusChecker">
 <input type="hidden" value="1" id="collapse1_tab">
 <input type="hidden" value="0" id="collapse2_tab">
   ...
   ...
 <input type="hidden" value="0" id="collapseN_tab">
 N is the number of collapsed tabs
 Make sure the id is accordion - <div class="accordion"  id="accordion">
 If all tabs can be expanded, then data-collapse-type="manual" <div class="accordion accordion-zd" id="accordion" data-collapse-type="manual"> 
 If only one tab can be expaned at a time, then data-collapse-type="auto" <div class="accordion accordion-zd" id="accordion" data-collapse-type="auto"> 

passing parameters:
 current-future-populations.html?tab=1
 or current-future-populations.html?tab=1&tab2=3
 
July,2015
********************************************************************/

var passingUrl;
var passingUrl2="";



$(document).ready(function()
{

  var tabNum = $('.accordion-inner').size();
  
  if(this.location.href.indexOf("tab=")!=-1){
	passingUrl = getQueryString("tab");
	 if(this.location.href.indexOf("tab2=")!=-1){
		 passingUrl2 = getQueryString("tab2");
	 }
	 for (i = 1; i < tabNum + 1; i++)
    {
      var collapseTab = $("#collapse" + i + "_tab").val(0);
	}
	
	$("#collapse" + passingUrl + "_tab").val(1);
	if (passingUrl2!=""){
		$("#collapse" + passingUrl2 + "_tab").val(1);
	}
	
	scrollToElement($('#accordion'));
  }
  
  

  if ($("#accordion").attr("data-collapse-type") == "auto")
  {
    var last = $("#statusChecker").val();

    if (last != "0")
    {
      $("#accordion .collapse").removeClass('in');
      //show the last visible group
      $("#" + last).addClass('in');
      // $("#" + last).collapse("show"); //this code was there but causing issues.

    }

    //when a group is shown, save it as the active accordion group
    $("#accordion").bind('shown', function()
    {
      var active = $("#accordion .in").attr('id');
      $("#statusChecker").val(active);
    });

    $("#accordion").bind('hidden', function()
    {
      $("#statusChecker").val("0");
    });

  }
  else if ($("#accordion").attr("data-collapse-type") == "manual")
  {

    for (i = 1; i < tabNum + 1; i++)
    {
      var collapseTab = $("#collapse" + i + "_tab").val();

      if (collapseTab == 1)
      {
        $("#collapse" + i).addClass('in');

      }
      else
      {
        $("#collapse" + i).removeClass('in');

      }

    }

    $(".accordion-toggle").on("click", function(event)
    {
      var tabId = $(this).attr("href");
      if (($(tabId).hasClass('in')))
      {
        $(tabId + "_tab").val(0);

      }
      else
      {
        $(tabId + "_tab").val(1);
      }

    });

  }

});


//--------getQueryString - detect a specific letter from url-------------------------------//
function getQueryString(key, default_)
{
  if (default_==null) default_="";
  key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
  var qs = regex.exec(window.location.href);
  if(qs == null)
    return default_;
  else
    return qs[1];
} 

//Jump to a ID tag
function scrollToElement(ele) {
    $(window).scrollTop(ele.offset().top).scrollLeft(ele.offset().left);
}
//