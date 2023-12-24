/*add class active on switcher*/

$(document).ready(function(){

    /*get current layout*/
    var layoutUrl = $("link#theme-layout").attr("href").split("/")[2];
    var layout = layoutUrl.split(".")[0];

    /*get current skin*/
    var skinUrl = $("link#theme-skin").attr("href").split("/")[3];
    var skin = skinUrl.split(".")[0];

    if (skin == "black"){
        var skin = "default";
    }

    /*get current pattern*/
    var pattern = $("body").attr("class");

    $(".layout-switcher a, .switcher-box a, .pattern-box a").removeClass("active");
    $(".layout-switcher").find("#"+layout).addClass("active");
    $(".switcher-box").find("#"+skin).addClass("active");

    /*boxed layout condition*/
    if (layout == "boxed"){
        $(".pattern-box").find("#"+pattern).addClass("active");
        /*change pattern on click*/
        $(".pattern-box a").click(function(){
            $(".pattern-box a").removeClass("active");
            $(this).addClass("active");
        });
    }
});


/*add class active on current page*/

$(document).ready(function(){
    var url = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
    $('header .navbar a').removeClass("active");
    if (url == "" || url == "index.html") {
        $('header .navbar a[href="./"]').addClass('active');
    } else {
        $('header .navbar a[href="'+url+'"]').parents("li.dropdown").children("a").addClass('active');
        $('header .navbar a[href="'+url+'"]').addClass('active');
    }
});
