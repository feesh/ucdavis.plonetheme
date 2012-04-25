$(document).ready(function() {
    // all jQuery code goes here
    
    var nav_height = $(".bar_1 .nav_content").height();
    $("#nav ul ul,#search_plus,#search_controls,#search_options").hide();
    var top_ul_height = $(".bar_1 .nav_content").height();
    
    // $(".bar_1 .nav_content ul.primary_nav").addClass("make_absolute");
    $(".bar_1 .nav_content #nav_inner_wrap").css("height", top_ul_height);
    
    top_ul_height = $(top_ul_height).toEm();
    nav_height = $(nav_height).toEm();

    // move lower content down to clear the navigation bar
    // $("#breadcrumbs").css("padding-top", top_ul_height);

    // global variable to keep track of search feature focus
    var queryInFocus;

    // set up the search control event handlers
    $('#query,#search_controls input.inputsubmit,#search_options a,#search_plus a').bind({
        focus: function() {
            queryInFocus = true;
            menuDownOnSearchFocus(".bar_1 .nav_content");
        },
        blur: function() {
            queryInFocus = false;
            $.doTimeout( 250, function() {
                menuUpOnSearchBlur(".bar_1 .nav_content");
            });
        }
    });
    // end setup of search control event handlers
    
    var config = {
        sensitivity: 7,     // default is 7
        interval: 100,      // default is 100
        timeout: 500,
        over: menuDown,
        out: menuUp
    };

    $(".bar_1 .nav_content").hoverIntent( config );

    function menuDown() {
        menuDownHandler(this);
    }

    function menuUp() {
        menuUpHandler(this);
    }

    function menuDownOnSearchFocus(elem) {
        menuDownHandler(elem);
    }

    function menuUpOnSearchBlur(elem) {
        menuUpHandler(elem);
    }

    function menuDownHandler(elem) {
        $(elem).find("#search_plus,#search_options,#search_controls").show();
        $(elem).find("form").removeClass();
        $(elem).find("form").addClass("bordered");
        $(elem).find("ul ul").show(10, function() {
            $(".bar_1 .nav_content").animate({
                height: nav_height
            },
            {
                queue: false,
                duration: 200
            });
        });
    }

    function menuUpHandler(elem) {
        if (!queryInFocus) {
            $(elem).animate({
                height: top_ul_height
            },
            {
                queue: false,
                duration: 200,
                complete: function() {
                    $(elem).find("ul ul").hide();
                    $(elem).find("form").removeClass();
                    $(elem).find("form").addClass("unbordered");
                    $(elem).find("#search_plus,#search_options,#search_controls").hide();
                }
            });
        }
    }

});
