$(document).ready(function() {
	
	var social_media_showing = false;
	
	$("#info_box_drop").slideUp("fast", "linear");
	
	$("#social_media_info_drop #click_tab_drop a").click(function () {
		if (social_media_showing) {
			$("#info_box_drop").slideUp("fast", "linear");
			$("#click_tab_drop a").removeClass();
			$("#click_tab_drop a").addClass("closed");
			social_media_showing = false;
		} else {
			$("#info_box_drop").slideDown("fast", "linear");
			$("#click_tab_drop a").removeClass();
			$("#click_tab_drop a").addClass("open");
			social_media_showing = true;
		}
		
	});
    
});
