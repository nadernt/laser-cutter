var ds=function(){};
ds.init=function(){document.onclick=function(a){var a=a?a:window.event?event:null,a=a.target?a.target:a.srcElement?a.srcElement:null,b=!0;if("undefined"==typeof a.href)for(;a;)if(a=a.parentNode,null==a){b=!1;break}else if("A"==a.tagName)break;else if("FORM"==a.tagName){a.target="_blank";b=!1;break}if(b){var b=a.href.toString(),c=a.target,b=b.toLowerCase();"undefined"==typeof c&&("javascript"!=b.substring(0,10)&&!b.match(/.ebaydesc./)&&"#"!=b.substring(0,1))&&(a.target="_blank");"undefined"!==typeof c&&
("_blank"!=c.toLowerCase()&&"_top"!=c.toLowerCase()&&"javascript"!=b.substring(0,10)&&!b.match(/.ebaydesc./)&&"#"!=b.substring(0,1))&&(a.target="_blank");"javascript"!=b.substring(0,10)&&(!b.match(/.ebaydesc./)&&"#"!=b.substring(0,1))&&(a="http://rover."+_dmn+"/roverclk/0/0/9?trknvp=sid%3Dp2047675.l2879","undefined"!==ebayItemID&&(a=a+"%26itemid%3D"+ebayItemID),"undefined"!==_sellerId&&(a=a+"%26slrid%3D"+_sellerId),a=a+"%26loc%3D"+b+"%26r%3D"+Date.now(),(new Image).src=a)}};ds.resizeIt()};
ds.setData=function(a){parent.location.replace(window.document.referrer+"#ht_"+a[0]+"wt_"+a[1])};
ds.getSize=function(){var a,b,c=[0,0],d=document.getElementById("ds_div"),f=document.getElementById("ds_thm_div");a=ds.detectBrowser();var e=a[0].toLowerCase(),g=parseInt(a[1]);if(document.all)a=document.body.scrollHeight,b=document.body.scrollWidth,"msie"==e&&9<=g&&(a=d.scrollHeight,f&&(a=f.scrollHeight));else{if("safari"==e||"chrome"==e){if(a=d.parentNode.scrollHeight,isNaN(a)||"undefined"==typeof a||1E4==a||0==a)if(a=d.scrollHeight,isNaN(a)||"undefined"==typeof a||0==a)a=document.body.offsetHeight}else if(a=
document.body.offsetHeight,isNaN(a)||"undefined"==typeof a||1E4==a||0==a)if(a=d.scrollHeight,isNaN(a)||"undefined"==typeof a||1E4==a||0==a)a=d.parentNode.scrollHeight;f&&(a=f.scrollHeight);("safari"==e||"chrome"==e)&&5<=g?b=document.body.scrollWidth:(b=document.body.offsetWidth,0!==window.scrollMaxX&&(b+=window.scrollMaxX))}if(isNaN(a)||"undefined"==typeof a)a=0;if(isNaN(b)||"undefined"==typeof b)b=0;"firefox"==e&&32E3<a&&(a=32E3);c[0]+=a;c[1]+=b;return c};
ds.attchMsgEvent=function(){"function"==typeof window.postMessage&&(window.addEventListener?window.addEventListener("message",function(a){ds.resizeItParentHandler(a)},!1):window.attachEvent("onmessage",function(a){ds.resizeItParentHandler(a)},!1))};ds.resizeItParentHandler=function(a){try{"resizeIframe"==JSON.parse(a.data).op&&ds.resizeMsgSent&&ds.resizeIt()}catch(b){}};
ds.resizeIt=function(){var a=ds.getSize();a&&("function"==typeof window.postMessage&&window.JSON?(a=JSON.stringify({h:a[0],w:a[1],t:_odtTitle,s:_odtSubTitle,e:_isTranslError,lt:ds.loadTime()}),ds.resizeMsgSent=!0,parent.postMessage(a,"*")):ds.setData(a))};
ds.detectBrowser=function(){var a=navigator.appName,b=navigator.userAgent,c,d=b.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);if(d&&null!=(c=b.match(/version\/([\.\d]+)/i)))d[2]=c[1];return d=d?[d[1],d[2]]:[a,navigator.appVersion,"-?"]};ds.addLoadEvent=function(a){var b=window.onload;window.onload="function"!=typeof window.onload?a:function(){b&&b();a()}};ds.addLoadEvent(function(){ds.init()});ds.resizeMsgSent=!1;ds.attchMsgEvent();
ds.loadTime=function(){var a=0;"undefined"!=typeof descGaugeInfo&&null!=descGaugeInfo.descST&&(a=(new Date).getTime()-descGaugeInfo.descST);return a};