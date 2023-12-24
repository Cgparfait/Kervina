var cookie = function(name,value,expires){
	var self = this, expires = expires || 365; // 365 days should be enough by default
	if( typeof name != 'undefined' ){
		if( typeof value != 'undefined' ){ // set the value of the cookie
			var date = new Date();
			date.setTime( date.getTime() + ( expires*24*60*60*1000 ) );
			expires = "; expires="+date.toGMTString();
			document.cookie=name+'='+value+expires+";";
			return value;
		} else {
			// cookies are separated with ; and a whitespace "; ", so it should work
			// needs further testing...so for now just stick with this ";"
			var cookies = document.cookie.split('; ');
			for( var i = 0; i < cookies.length; i++ ){
				var cookie = cookies[i].split('=');
				if( cookie[0] == name ){
					return cookie[1] != 'undefined' ? cookie[1] : false;
				}
			}
		}
	}
}
var ck_layout = cookie( 'theme-layout' ),
	ck_skin   = cookie( 'theme-skin' ),
	ck_bg     = cookie( 'theme-bg' );


if( ck_layout ){
	var ck_layout = ck_layout == "boxed" ? "boxed" : "wide";

	// switch( ck_layout ){
	// 	case "boxed":
	// 		ck_layout = "boxed";
	// 		break;
	// 	case "mixed":
	// 		ck_layout = "mixed";
	// 		break;
	// 	default:
	// 		ck_layout = "wide";
	// }

	layout      = document.getElementById('theme-layout');
	layout.href = "assets/css/" + ck_layout + ".css";
	cookie( 'theme-layout', ck_layout );
}
if( ck_skin ){
	switch( ck_skin ){
		case "green":
			ck_skin = "green";
			break;
		case "orange":
			ck_skin = "orange";
			break;
		case "red":
			ck_skin = "red";
			break;
		case "blue":
			ck_skin = "blue";
			break;
		default:
			ck_skin = "black";
	}
	skin      = document.getElementById('theme-skin');
	skin.href = "assets/css/skin/" + ck_skin + ".css";
	cookie( 'theme-skin', ck_skin );
}
if( ck_bg ){
	bg           = document.getElementsByTagName('body')[0];
	bg.className += ' ';
	bg.className += ck_bg;
}