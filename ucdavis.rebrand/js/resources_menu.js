$(document).ready(function() {

	// $("#resources_popout").hide();
	var resourcesInFocus = false;
	
	// set up the resources tab event handlers
	$('#resources a').bind({
		focus: function() {
			resourcesInFocus = true;
			resourcesDownOnFocus("#resources");
		},
		blur: function() {
			resourcesInFocus = false;
			$.doTimeout( 250, function() {
				resourcesUpOnBlur("#resources");
			});
		}
	});
	
	var resourcesConfig = {
		sensitivity: 7,		// default is 7
		interval: 100,		// default is 100
		timeout: 750,
		over: resourcesDown,
		out: resourcesUp
	};

	$("#resources").hoverIntent( resourcesConfig );

	function resourcesDown() {
		resourcesDownHandler(this);
	}

	function resourcesUp() {
		resourcesUpHandler(this);
	}

	function resourcesDownOnFocus(elem) {
		resourcesDownHandler(elem);
	}

	function resourcesUpOnBlur(elem) {
		resourcesUpHandler(elem);
	}

	function resourcesDownHandler(elem) {
		$(elem).find("h2").removeClass();
		$(elem).find("h2").addClass("open");
		$(elem).stop().delay(0).find("#resources_popout").slideDown("fast", "linear");
	}

	function resourcesUpHandler(elem) {
		if (!resourcesInFocus) {
			$(elem).stop().delay(0).find("#resources_popout").slideUp("fast", "linear", function() {
				$(elem).parent("div").find("h2").removeClass();
				$(elem).parent("div").find("h2").addClass("closed");
			});
		}
	}
	
});
