$(document).ready(function () {

    var styleswitcherstr = ' \
    <h3>Style Switcher <a href="#"><span class="icon-cog"></span></a></h3> \
    <div class="content"> \
    <h5>Choose Layout Style</h5> \
    <div class="layout-switcher fixed"> \
    <a id="wide" class="layout">Wide</a> \
    <a id="boxed" class="layout">Boxed</a> \
    </div> \
    <div class="content-option"> \
    <a id="header-small" class="btn-toggle">Small Header</a> \
    <a id="no-ads" class="btn-toggle active">Show Ads</a> \
    </div> \
    <h5>Choose Skin Color</h5> \
    <div class="switcher-box fixed"> \
    <a id="default" class="styleswitch color"></a> \
    <a id="orange" class="styleswitch color"></a> \
    <a id="red" class="styleswitch color"></a> \
    <a id="green" class="styleswitch color"></a> \
    <a id="blue" class="styleswitch color"></a> \
    </div><!-- End switcher-box --> \
    <h5>Patterns for Boxed</h5>  \
    <div class="pattern-box fixed"> \
    <a id="bg" class="pattern"></a> \
    <a id="bg2" class="pattern"></a> \
    <a id="bg3" class="pattern"></a> \
    <a id="bg4" class="pattern"></a> \
    <a id="bg5" class="pattern"></a> \
    <a id="bg6" class="pattern"></a> \
    <a id="bg7" class="pattern"></a> \
    <a id="bg8" class="pattern"></a> \
    <a id="bg9" class="pattern"></a> \
    <a id="bg10" class="pattern"></a> \
    </div> \
     <h5>Images for Boxed</h5>  \
    <div class="images-box fixed"> \
    <a id="img-1" class="images-bg"><img src="assets/img/bg_1_small.jpg"></a> \
    <a id="img-2" class="images-bg"><img src="assets/img/bg_2_small.jpg"></a> \
    </div> \
    ';

    $(".switcher").prepend(styleswitcherstr);

});


/* Template Layout  */

$(document).ready(function () {

    var cookieName = 'theme-layout';

    function changeLayout(layout) {
        $.cookie(cookieName, layout);
        document.location.reload();
    }

    $("#wide").click(function () {
        changeLayout('wide');
    });

    $("#boxed").click(function () {
        changeLayout('boxed');
    });
});



/* Template Background */

$(document).ready(function () {


    $(".pattern").click(function () {
        var id = $(this).attr('id');

		// remove previous bg classes applied to body
		$('body').removeClass(function(i, c)
		{
			return c.match(/\S*bg\S*/g) ? c.match(/\S*bg\S*/g).join(' ') : false;
		});
		
		$("body").addClass(id);
        $.cookie('theme-bg', id);
    });

    /*background images*/
    $(".images-bg").click(function () {
        var bgId = $(this).attr('id');

        $(".images-box.fixed a").removeClass("active");
        $(this).addClass("active");

       // remove previous bg classes applied to body
        $('body').removeClass(function(i, c)
        {
            return c.match(/\S*img\S*/g) ? c.match(/\S*img\S*/g).join(' ') : false;
        });
        $("body").addClass(bgId);
    });

});

/* Header Search */

$(document).ready(function () {
    $(".btn-search").click(function () {
        $(this).toggleClass("active");
        $(".form-search-box").toggleClass("active");
        $(".search-box").val('');
        $(".search-box").focus();
        $(".main-menu").toggleClass("search-active");
    });

});

/* Template Skins */

$(document).ready(function () {

    var cookieName = 'theme-skin';

    function changeSkin(skin) {
        $.cookie(cookieName, skin);
        document.location.reload();
    }

    $("#default").click(function () {
        changeSkin('black');
    });
    $("#orange").click(function () {
        changeSkin('orange');
    });
    $("#green").click(function () {
        changeSkin('green');
    });
    $("#red").click(function () {
        changeSkin('red');
    });
    $("#blue").click(function () {
        changeSkin('blue');
    });

});



/* Switcher */

$(document).ready(function () {

    $('.switcher h3 a').click(function (e) {
        e.preventDefault();
        var div = $('.switcher');
        if (div.css('left') === '-200px') {
            $('.switcher').addClass("active");
        } else {
            $('.switcher').removeClass("active");
        }
    });

});

/* Toggle Button */

$(document).ready(function () {

    /*toggle button on/off*/
    $('.btn-toggle').click(function(){
        $(this).toggleClass("active");
    });

    /*toggle small header on/off*/
    $('#header-small').click(function(){
        $("body").toggleClass("header-small");
    });

    /*toggle ads on/off*/
    $('#no-ads').click(function(){
        $("body").toggleClass("no-ads");
    });

});


//SIDE PANEL 
//--------------------------------------------------------
style_switcher = $('.style-switcher'),
panelWidth = style_switcher.outerWidth(true);

$('.style-switcher .trigger').on("click", function(){
    var $this = $(this);
    if ($(".style-switcher.closed").length>0) {
        style_switcher.animate({"left" : "0px"});
        $(".style-switcher.closed").removeClass("closed");
        $(".style-switcher").addClass("opened");
        $(".style-switcher .trigger i").removeClass("icon-cog-1").addClass("fa fa-times");
    } else {
        $(".style-switcher.opened").removeClass("opened");
        $(".style-switcher").addClass("closed");
        $(".style-switcher .trigger i").removeClass("fa fa-times").addClass("icon-cog-1");
        style_switcher.animate({"left" : '-' + panelWidth});
    }
    return false;
});