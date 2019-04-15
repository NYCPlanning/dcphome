var NYC = NYC || {};
NYC.Agencies = {};

/**
 * Agency Index
 *
 */
 if(typeof hero_type =="undefined"){
	hero_type="";
}

	NYC.Agencies.Index = (function() {
	
		var self = this;
	
		self.init = function init() {
	
			//inline comment
			var self = this;
		    			
		    if(hero_type.toLowerCase()=="nostatus" || hero_type.toLowerCase()=="piconly" || hero_type.toLowerCase()!="nohero"){
				self.startModules();
				startModulesRequired=true;
		    }
		    self.bindEvents();
		    	
		},
		
		self.startModules = function() {
				//Add VideoPlayer
				var videoPlayer= new NYC.VideoPlayer();
			
			    //hero slideshow module
			    var heroSlideshow = new NYC.HeroSlideshow({
			        el : ".module-homepage-hero",
			        colorTransition : false
			    });
			    
			    if(hero_type.toLowerCase()!="nostatus" && hero_type.toLowerCase()!="piconly" && hero_type.toLowerCase()!="nohero"){
				    // Status Update Module
				    var statusUpdate = new NYC.StatusUpdate({
						el : ".module-homepage-hero",
						"status" : true
				    });
			    }
			
	  	}, 	
	
		self.resizeElements = function() {
console.log("Resize columns");
			if (Modernizr.mq('(min-width: 767px)')) {
	              		$('.agencies-index-ul').css("display", "block");
	              		$('.agencies-second .agencies-index-panel').css("display", "block");
	              		$('.agencies-third .agencies-index-panel').css("display", "block");
	              		var span12=$($(".agencies-first")[0]).hasClass("span12");
	              		var homeBody = 0;
	              		if(span12){
		              		span12=$($(".agencies-first")[1]).hasClass("span12");
		              		homeBody = 1;
		              	}
	              		if(!span12){
		              		var theHeight=$($('.agencies-no-scrolling')[homeBody]).height();
		              		//$('.agencies-first .scroll-pane').css("height",theHeight+"px");
		              		$('.agencies-second .scroll-pane').css("height",theHeight+"px");
		              		$('.agencies-third .scroll-pane').css("height",theHeight+"px");
	             		}
			} else{
	            $('.extra-padding').removeClass("active");
				var firstChild_second = ($('.agencies-second .agencies-index-panel').children().length > 0) ? $('.agencies-second .agencies-index-panel').children()[0].className : "empty";
				//console.log("firstChild_second class: " + firstChild_second);
	            if (firstChild_second.toLowerCase() == 'agencies-index-ul') {
		            //if second column's first child class is agencies-index-ul, toggle. otherwise, it's probably a text field and should remain open
					$('.agencies-second .agencies-index-panel').css("height", "auto").toggle();
				}
				
				var firstChild_third =  ($('.agencies-third .agencies-index-panel').children().length > 0) ? $('.agencies-third .agencies-index-panel').children()[0].className : "empty";
				//console.log("firstChild_third class: " + firstChild_third);
				if (firstChild_third.toLowerCase() == 'agencies-index-ul') {
					//if third column's first child class is agencies-index-ul, toggle. otherwise, it's probably a text field and should remain open
	              	$('.agencies-third .agencies-index-panel').css("height", "auto").toggle();
				}
			}
		},
	
		self.bindEvents = function() {
	
			var self = this;
	
			$(".toggle-list").on("click", function(e) {
				e.preventDefault();
	
				if(Modernizr.mq('(max-width: 767px)')) {
					$(this).toggleClass("active").parent().find(".agencies-index-panel").toggle();
				}
			});
	
			// Resize on page load
			self.resizeElements();
	
			$(window).smartresize(function() {
				self.resizeElements();
			});
	
	
		}
	
	    return self;
	    
	}());
	
$(document).ready(function(){
	NYC.Agencies.Index.init();
});