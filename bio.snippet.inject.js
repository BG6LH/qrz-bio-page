var bioHTML = "bio.snippet.html";
var bioCSS = "bio.snippet.css";

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(r){var t,e,o,a,h,n,c,d="",C=0;for(r=Base64._utf8_encode(r);C<r.length;)a=(t=r.charCodeAt(C++))>>2,h=(3&t)<<4|(e=r.charCodeAt(C++))>>4,n=(15&e)<<2|(o=r.charCodeAt(C++))>>6,c=63&o,isNaN(e)?n=c=64:isNaN(o)&&(c=64),d=d+this._keyStr.charAt(a)+this._keyStr.charAt(h)+this._keyStr.charAt(n)+this._keyStr.charAt(c);return d},decode:function(r){var t,e,o,a,h,n,c="",d=0;for(r=r.replace(/[^A-Za-z0-9+/=]/g,"");d<r.length;)t=this._keyStr.indexOf(r.charAt(d++))<<2|(a=this._keyStr.indexOf(r.charAt(d++)))>>4,e=(15&a)<<4|(h=this._keyStr.indexOf(r.charAt(d++)))>>2,o=(3&h)<<6|(n=this._keyStr.indexOf(r.charAt(d++))),c+=String.fromCharCode(t),64!=h&&(c+=String.fromCharCode(e)),64!=n&&(c+=String.fromCharCode(o));return c=Base64._utf8_decode(c)},_utf8_encode:function(r){r=r.replace(/\r\n/g,"\n");for(var t="",e=0;e<r.length;e++){var o=r.charCodeAt(e);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(r){for(var t="",e=0,o=c1=c2=0;e<r.length;)(o=r.charCodeAt(e))<128?(t+=String.fromCharCode(o),e++):o>191&&o<224?(c2=r.charCodeAt(e+1),t+=String.fromCharCode((31&o)<<6|63&c2),e+=2):(c2=r.charCodeAt(e+1),c3=r.charCodeAt(e+2),t+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),e+=3);return t}};


function fakeScroll() {

if ( navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ) {
  var biodata = document.getElementById('biodata');
  var hash = biodata.contentWindow.location.hash.replace(/#/, '');
if ( hash ) {
  biodata.contentWindow.location.hash= '';
  if ( jQuery('#biodata').contents().find('a[name=\'' + hash + '\']').length == 1 ) {
   anchorTop = jQuery('#biodata').contents().find('a[name=\'' + hash + '\']').offset().top;
  } else {
   anchorTop = jQuery('#biodata').contents().find('a[id=\'' + hash + '\']').offset().top;
  }
  var frameTop = jQuery('#biodata').offset().top;

  window.location.hash = hash;
    jQuery('html, body').animate({
        scrollTop: anchorTop + frameTop
    }, 200);
  }
}
}

jQuery(document).ready( function() {
    // 读取 HTML 和 CSS 文件
    var htmlBase64 = '';
    var cssBase64 = '';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', bioHTML, false);
    xhr.send();
    if (xhr.status === 200) {
        htmlBase64 = Base64.encode(xhr.responseText);
    }

    xhr = new XMLHttpRequest();
    xhr.open('GET', bioCSS, false);
    xhr.send();
    if (xhr.status === 200) {
        cssBase64 = Base64.encode(xhr.responseText);
    }

var idocument =  document.getElementById('biodata').contentWindow.document;
var content = '<!DOCTYPE html	PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">' +
  '<html style="overflow-y: hidden">' +
  '<head></head>' +
  '<body></body>' +
  '</html>';

idocument.open();
// idocument.innerHtml = content;
idocument.write(content);
// idocument.write('<!DOCTYPE html	PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">');
// idocument.write("<html style='overflow-y: hidden'>");
// idocument.write("<head></head>");
// idocument.write("<body></body>");
// idocument.write("</html>");
idocument.close();




var lazyLoader = {
    "timer": null,
    "checkVisible": function (elm, evalType) {
        evalType = evalType || "visible";

        var vpH = jQuery(window).height(); // Viewport Height
        var st = jQuery(window).scrollTop(); // Scroll Top
        var y = jQuery(elm).offset().top;
        var elementHeight = jQuery(elm).height();

        var imageTop = jQuery(elm).offset().top;
        imageTop = imageTop + jQuery('#biodata').offset().top;
        var imageBottom = imageTop + jQuery(elm).height();

        if ( imageBottom > st && imageTop < (st + vpH) ) {
          return true;
        }
        if ( imageBottom > st && imageBottom < (st + vpH) ) {
          return true;
        }
        return false;
    },
    "loadImages": function () {

        var x = jQuery('#biodata')[0];
        if ( x.contentDocument ) {
          x=x.contentDocument;
        } else if (x.contentWindow) {
          // for IE 5.5, 6 and 7:
          x = x.contentWindow.document;
        }

        var imgs = jQuery(x).find("img[data-loading=lazy], input[data-loading=lazy]").get();
        var loadable = [];

        var i;
        var img;
        for (i = 0; i < imgs.length; i += 1) {
            img = imgs[i];
            if (img.getAttribute("data-loading") === "lazy") {
   //            if ( lazyLoader.checkVisible(img, "visible") && jQuery(img).is(":visible") ) {
                if ( lazyLoader.checkVisible(img, "visible") ) {
                    loadable.push(img);
                }
            }
        }

        for (i = 0; i < loadable.length; i +=1) {
            img = loadable[i];
            img.removeAttribute("data-loading");
            img.setAttribute("src", img.getAttribute("data-src"));
            img.removeAttribute("data-src");
        }

    },
    'triggerLoad' : function() {
        clearTimeout( lazyLoader.timer );
        lazyLoader.timer = setTimeout( function() {
            lazyLoader.loadImages();
        },10);
    }
};

jQuery(document).on("ready", function() {
    lazyLoader.triggerLoad();
});
jQuery(window).on("resize scroll touchmove", function() {
    lazyLoader.triggerLoad();
});

            

document.getElementById('biodata').contentWindow.location.hash = '';
if (document.getElementById('biodata').contentWindow.addEventListener) {
document.getElementById('biodata').contentWindow.addEventListener('hashchange', function() { fakeScroll() });
}
  jQuery('.action-render-').contents().find('body').css('padding', '0px');
  jQuery('.action-render-').contents().find('body').css('margin', '0px');
  jQuery('.action-render-').contents().find('body').append( jQuery('<div id="csbody"><div id="t_bio" style="padding: 1em 1.4em;font-family: Lucida Grande,Lucida Sans,Arial,sans-serif; font-size: 1.1em;" class="biodiv dl8gbs"><div id="biodata" style="padding: 5px;" ></div></div></div>') );
  jQuery('.action-render-').contents().find('#biodata').html( Base64.decode(htmlBase64) );


  jQuery('.action-render-').contents().find('#biodata a').each(function() {
    var attr = jQuery(this).attr('href');
    if (typeof attr !== typeof undefined && attr !== false) {
      if (attr.indexOf("#") != 0 ) {
//	      if ( ! this.hasAttribute('target') ) {
	      if ( jQuery(this).attr('target') == undefined ) {
          jQuery(this).attr('target', '_top');
      	}
        jQuery(this).attr('href', jQuery(this).attr('href') );
      } else {
//        jQuery(this).attr('target', '_parent');
      }
    }
  });

function youtube_parser(url){
  var regExp = /.*(?:youtu.be\/|v\/|u\/w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[1].length==11)? match[1] : false;
  }

  var iframes = jQuery('.action-render-').contents().find('iframe');
  jQuery.each( iframes, function(k,v) {

    var yt_url = jQuery(v).attr('src');
    if ( !yt_url ) { return true; }
    var yt_img_url = "//img.youtube.com/vi/" + youtube_parser(yt_url) + "/mqdefault.jpg";
    var yt_width = jQuery(v).attr('width');
    var yt_height = jQuery(v).attr('height');
    if ( yt_url.indexOf('youtu') !== -1 ) {
      jQuery(v).after("<a id='ytvid-"+youtube_parser(yt_url)+"' target='_top' href='" + yt_url + "'>" + 
        "<span class='ytvid' style='position: relative; width: " + yt_width + "px; height: " + yt_height + "px'>" + 
	"<img style='position: absolute; top:0;left:0;right:0;bottom:0;width: 100%; height: 100%' src='" + yt_img_url + "'>" + 
	"<div class='yt_play'>" + 
	"</div>" +
	"</a>");
      jQuery(v).remove();
    }

  if ( jQuery(v).attr('data-refresh') >= 1 ) {
	  if ( jQuery(v).attr('data-refresh') <= 30 ) { jQuery(v).attr('data-refresh', 30) }
      setInterval( function() { 
        jQuery(v).attr('src', jQuery(v).attr('src'));
	    }
      , jQuery(v).attr('data-refresh')*1000);
    }
  });

  // Inject CSS
  jQuery('.action-render-').contents().find('head').append( jQuery('<style>') );
  var style =  jQuery('.action-render-').contents().find('head style')[0];
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = Base64.decode(cssBase64);;
  } else {
    style.appendChild(document.createTextNode( Base64.decode(cssBase64)));
  }

  // Resize the frame to remove scrollbars
  resize();
  jQuery( window ).resize(function() { resize(); });
  setInterval( function() { resize(); }, 500);
  
  document.getElementById('biodata').contentWindow.location.hash = window.location.hash;

});


function resize() {
  var height =300;
  var biodata = document.getElementById('biodata');

  var h = jQuery('#biodata').contents().find('html')[0].scrollHeight;
  var b = jQuery('#biodata').contents().find('body')[0].scrollHeight;


  if ( b >= h ) { height = b  } else { height = h ; }

    if( biodata.clientHeight != height ) {
      biodata.style.height = height + "px";
  }
}