if("undefined"==typeof net)var net={};net.brehaut||(net.brehaut={});
(function(){function p(a,b){a=a.toString();var c=[],d=0;for(b=Math.max(b-a.length,0);d<b;d++)c.push("0");c.push(a);return c.join("")}function q(a){return a.slice(0,1).toUpperCase()+a.slice(1)}function r(a){return a.replace(/^\s+|\s+$/g,"")}function e(a){return function(){var b=this.clone();a.apply(b,arguments);return b}}function t(a,b){function c(a){return function(){return a.apply(this[k](),arguments)}}function d(){}function u(){return new d}var n=v(l),e=[],k="to"+q(a),g;for(g in b)if(b.hasOwnProperty(g)){n[g]=
b[g];var f=n[g];if("_"!=g.slice(0,1))if(!(g in l)&&"function"==typeof f)l[g]=c(f);else if("function"!=typeof f){e.push(g);var f="get"+q(g),m="set"+q(g);l[f]=c(n[f]=function(a){return function(){return this[a]}}(g));l[m]=c(n[m]=function(a){return function(b){var c=this.clone();c[a]=b;return c}}(g))}}d.prototype=n;h[a]=u;n.clone=function(){for(var a=u(),b=0,c=e.length;b<c;b++){var d=e[b];a[d]=this[d]}return a};l[k]=function(){return u()};w.push(n);return n}function x(a){return l.fromObject(a)}var y=
{aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",
darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",
gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",
lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370D8",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",
navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#D87093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",
seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"},m="(?:\\+|-)?\\d+",k="(?:\\+|-)?\\d*\\.\\d+",f="(?:"+m+")|(?:"+k+")",m="("+m+")",k="("+k+")",f="("+f+")",k=f+"%",A=new RegExp(["^hsl(a?)\\(",
f,",",k,",",k,"(,(",f,"))?\\)$"].join("\\s*?")),B=new RegExp(["^rgb(a?)\\(",m,",",m,",",m,"(,(",f,"))?\\)$"].join("\\s*?")),C=new RegExp(["^rgb(a?)\\(",k,",",k,",",k,"(,(",f,"))?\\)$"].join("\\s*?")),l,w=[],h={};this.object||(this.object=function(a){function b(){}b.prototype=a;return new b});var v=this.object;l={fromObject:function(a){if(!a)return v(l);for(var b=0,c=w.length;b<c;b++){var d=w[b].fromObject(a);if(d)return d}return v(l)},toString:function(){return this.toCSS()}};var z=null;t("RGB",{red:0,
green:0,blue:0,alpha:0,getLuminance:function(){return.2126*this.red+.7152*this.green+.0722*this.blue},blend:function(a,b){a=a.toRGB();b=Math.min(Math.max(b,0),1);var c=this.clone();c.red=c.red*(1-b)+a.red*b;c.green=c.green*(1-b)+a.green*b;c.blue=c.blue*(1-b)+a.blue*b;c.alpha=c.alpha*(1-b)+a.alpha*b;return c},fromObject:function(a){if(a instanceof Array)return this._fromRGBArray(a);if("string"==typeof a)return this._fromCSS(r(a));if(a.hasOwnProperty("red")&&a.hasOwnProperty("green")&&a.hasOwnProperty("blue"))return this._fromRGB(a)},
_stringParsers:[function(a){function b(b,c){b=a.match(b);if(!b||1===!!b[1]+!!b[5])return null;var d=h.RGB();d.red=Math.min(1,Math.max(0,b[2]/c));d.green=Math.min(1,Math.max(0,b[3]/c));d.blue=Math.min(1,Math.max(0,b[4]/c));d.alpha=b[5]?Math.min(Math.max(parseFloat(b[6]),0),1):1;return d}a=r(a);var c=b(B,255);return c?c:b(C,100)},function(a){var b=a.toLowerCase();b in y&&(a=y[b]);if(a.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)){a=a.replace(/^#/,"");var b=a.length/3,c=Math.pow(16,b)-1,d=h.RGB();d.red=
parseInt(a.slice(0,b),16)/c;d.green=parseInt(a.slice(1*b,2*b),16)/c;d.blue=parseInt(a.slice(2*b),16)/c;d.alpha=1;return d}},function(a){if("transparent"===a.toLowerCase())return z}],_fromCSS:function(a){for(var b,c=0,d=this._stringParsers.length;c<d;c++)if(b=this._stringParsers[c](a))return b},_fromRGB:function(a){var b=h.RGB();b.red=a.red;b.green=a.green;b.blue=a.blue;b.alpha=a.hasOwnProperty("alpha")?a.alpha:1;return b},_fromRGBArray:function(a){var b=h.RGB();b.red=Math.max(0,Math.min(1,a[0]/255));
b.green=Math.max(0,Math.min(1,a[1]/255));b.blue=Math.max(0,Math.min(1,a[2]/255));b.alpha=void 0!==a[3]?Math.max(0,Math.min(1,a[3])):1;return b},toCSSHex:function(a){a=a||2;var b=Math.pow(16,a)-1;return["#",p(Math.round(this.red*b).toString(16).toUpperCase(),a),p(Math.round(this.green*b).toString(16).toUpperCase(),a),p(Math.round(this.blue*b).toString(16).toUpperCase(),a)].join("")},toCSS:function(a){return 1===this.alpha?this.toCSSHex(a):["rgba(",Math.max(0,Math.min(255,Math.round(255*this.red))),
",",Math.max(0,Math.min(255,Math.round(255*this.green))),",",Math.max(0,Math.min(255,Math.round(255*this.blue))),",",Math.max(0,Math.min(1,this.alpha)),")"].join("")},toHSV:function(){var a=h.HSV(),b,c;b=Math.min(this.red,this.green,this.blue);c=Math.max(this.red,this.green,this.blue);a.value=c;b=c-b;0==b?a.hue=a.saturation=0:(a.saturation=b/c,a.hue=this.red==c?(this.green-this.blue)/b:this.green==c?2+(this.blue-this.red)/b:4+(this.red-this.green)/b,a.hue=(60*a.hue+360)%360);a.alpha=this.alpha;return a},
toHSL:function(){return this.toHSV().toHSL()},toRGB:function(){return this.clone()}});z=l.fromObject({red:0,blue:0,green:0,alpha:0});t("HSV",{hue:0,saturation:0,value:1,alpha:1,shiftHue:e(function(a){a=(this.hue+a)%360;0>a&&(a=(360+a)%360);this.hue=a}),devalueByAmount:e(function(a){this.value=Math.min(1,Math.max(this.value-a,0))}),devalueByRatio:e(function(a){this.value=Math.min(1,Math.max(this.value*(1-a),0))}),valueByAmount:e(function(a){this.value=Math.min(1,Math.max(this.value+a,0))}),valueByRatio:e(function(a){this.value=
Math.min(1,Math.max(this.value*(1+a),0))}),desaturateByAmount:e(function(a){this.saturation=Math.min(1,Math.max(this.saturation-a,0))}),desaturateByRatio:e(function(a){this.saturation=Math.min(1,Math.max(this.saturation*(1-a),0))}),saturateByAmount:e(function(a){this.saturation=Math.min(1,Math.max(this.saturation+a,0))}),saturateByRatio:e(function(a){this.saturation=Math.min(1,Math.max(this.saturation*(1+a),0))}),schemeFromDegrees:function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=this.clone();
e.hue=(this.hue+a[c])%360;b.push(e)}return b},complementaryScheme:function(){return this.schemeFromDegrees([0,180])},splitComplementaryScheme:function(){return this.schemeFromDegrees([0,150,320])},splitComplementaryCWScheme:function(){return this.schemeFromDegrees([0,150,300])},splitComplementaryCCWScheme:function(){return this.schemeFromDegrees([0,60,210])},triadicScheme:function(){return this.schemeFromDegrees([0,120,240])},clashScheme:function(){return this.schemeFromDegrees([0,90,270])},tetradicScheme:function(){return this.schemeFromDegrees([0,
90,180,270])},fourToneCWScheme:function(){return this.schemeFromDegrees([0,60,180,240])},fourToneCCWScheme:function(){return this.schemeFromDegrees([0,120,180,300])},fiveToneAScheme:function(){return this.schemeFromDegrees([0,115,155,205,245])},fiveToneBScheme:function(){return this.schemeFromDegrees([0,40,90,130,245])},fiveToneCScheme:function(){return this.schemeFromDegrees([0,50,90,205,320])},fiveToneDScheme:function(){return this.schemeFromDegrees([0,40,155,270,310])},fiveToneEScheme:function(){return this.schemeFromDegrees([0,
115,230,270,320])},sixToneCWScheme:function(){return this.schemeFromDegrees([0,30,120,150,240,270])},sixToneCCWScheme:function(){return this.schemeFromDegrees([0,90,120,210,240,330])},neutralScheme:function(){return this.schemeFromDegrees([0,15,30,45,60,75])},analogousScheme:function(){return this.schemeFromDegrees([0,30,60,90,120,150])},fromObject:function(a){if(a.hasOwnProperty("hue")&&a.hasOwnProperty("saturation")&&a.hasOwnProperty("value")){var b=h.HSV();b.hue=a.hue;b.saturation=a.saturation;
b.value=a.value;b.alpha=a.hasOwnProperty("alpha")?a.alpha:1;return b}return null},_normalise:function(){this.hue%=360;this.saturation=Math.min(Math.max(0,this.saturation),1);this.value=Math.min(Math.max(0,this.value));this.alpha=Math.min(1,Math.max(0,this.alpha))},toRGB:function(){this._normalise();var a=h.RGB(),b,c,d,e;if(0===this.saturation)return a.red=this.value,a.green=this.value,a.blue=this.value,a.alpha=this.alpha,a;d=this.hue/60;b=Math.floor(d);c=d-b;d=this.value*(1-this.saturation);e=this.value*
(1-this.saturation*c);c=this.value*(1-this.saturation*(1-c));switch(b){case 0:a.red=this.value;a.green=c;a.blue=d;break;case 1:a.red=e;a.green=this.value;a.blue=d;break;case 2:a.red=d;a.green=this.value;a.blue=c;break;case 3:a.red=d;a.green=e;a.blue=this.value;break;case 4:a.red=c;a.green=d;a.blue=this.value;break;default:a.red=this.value,a.green=d,a.blue=e}a.alpha=this.alpha;return a},toHSL:function(){this._normalise();var a=h.HSL();a.hue=this.hue;var b=(2-this.saturation)*this.value,c=this.saturation*
this.value;b&&2-b&&(c/=1>=b?b:2-b);a.saturation=c;a.lightness=b/2;a.alpha=this.alpha;return a},toHSV:function(){return this.clone()}});t("HSL",{hue:0,saturation:0,lightness:0,alpha:1,darkenByAmount:e(function(a){this.lightness=Math.min(1,Math.max(this.lightness-a,0))}),darkenByRatio:e(function(a){this.lightness=Math.min(1,Math.max(this.lightness*(1-a),0))}),lightenByAmount:e(function(a){this.lightness=Math.min(1,Math.max(this.lightness+a,0))}),lightenByRatio:e(function(a){this.lightness=Math.min(1,
Math.max(this.lightness*(1+a),0))}),fromObject:function(a){if("string"==typeof a)return this._fromCSS(a);if(a.hasOwnProperty("hue")&&a.hasOwnProperty("saturation")&&a.hasOwnProperty("lightness"))return this._fromHSL(a)},_fromCSS:function(a){a=r(a).match(A);if(!a||1===!!a[1]+!!a[5])return null;var b=h.HSL();b.hue=(a[2]%360+360)%360;b.saturation=Math.max(0,Math.min(parseInt(a[3],10)/100,1));b.lightness=Math.max(0,Math.min(parseInt(a[4],10)/100,1));b.alpha=a[5]?Math.max(0,Math.min(1,parseFloat(a[6]))):
1;return b},_fromHSL:function(a){var b=h.HSL();b.hue=a.hue;b.saturation=a.saturation;b.lightness=a.lightness;b.alpha=a.hasOwnProperty("alpha")?a.alpha:1;return b},_normalise:function(){this.hue=(this.hue%360+360)%360;this.saturation=Math.min(Math.max(0,this.saturation),1);this.lightness=Math.min(Math.max(0,this.lightness));this.alpha=Math.min(1,Math.max(0,this.alpha))},toHSL:function(){return this.clone()},toHSV:function(){this._normalise();var a=h.HSV();a.hue=this.hue;var b=2*this.lightness,c=this.saturation*
(1>=b?b:2-b);a.value=(b+c)/2;a.saturation=2*c/(b+c)||0;a.alpha=this.alpha;return a},toRGB:function(){return this.toHSV().toRGB()}});x.isValid=function(a){var b;a=x(a);var c=0;for(b in a)a.hasOwnProperty(b)&&c++;return 0<c};net.brehaut.Color=x}).call(net.brehaut);"undefined"!==typeof module&&(module.exports=net.brehaut.Color);


var id,nodes = document.getElementsByClassName('more');
document.addEventListener("scroll", scrollHandler, {passive:true});
document.body.onload = function(){



welcomeText.classList.add('intro');
setTimeout(function(){
var Nodes=document.getElementsByClassName('text-container');
for(var i=0;i<Nodes.length;i++){Nodes[i].classList.add('intro');}
Nodes=document.getElementsByClassName('img-container')
for(var i=0;i<Nodes.length;i++){Nodes[i].classList.add('intro');}
},1000);


setTimeout(function(){
sun.style.left='-66.5px';
cloud.style.right='27%';
cloud_two.style.right='14%';
},2000);

setMore();
setVideoAutoplay();
}



function scrollHandler(e) {
  if(id) clearTimeout(id);
  id=setTimeout("header.style.top = pageYOffset+'px'",200);
}




//video autoplay when mouse on
function setVideoAutoplay(){

var videoNodes = document.getElementsByClassName('work-vidz');
  for(let i=0;i<videoNodes.length;i++){

  videoNodes[i].addEventListener('mouseover',function(id){
      videoNodes[i].play();
  });
  videoNodes[i].addEventListener('mouseout',function(id){
      videoNodes[i].pause();
  });
}
}


//click plus +++ , get content 
function setMore(){
for(var i=0;i<nodes.length;i++){
nodes[i].outerHTML += '<span id="showMore'+i+'" class="transition-opacity">...<a  onclick="javascript:more('+i+','+nodes[i].offsetHeight+')">+</a></span>';
nodes[i].style.height=0;
nodes[i].style.display='none';
}
}


function more(i,h){
document.getElementById('showMore'+i).style.display = 'none';
nodes[i].style.display = 'block';
setTimeout(function(){
  nodes[i].classList.remove('opacity0');
  nodes[i].classList.remove('blur50');
  nodes[i].style.height = h+'px';
},30)
}


//grass canvas animation
function strToHex(str){
	str=str.replace("#","0x");
	return(str);
}

var Color = net.brehaut.Color;
var grassColor = Color("#009e52");

canvas  = document.getElementById("canvas");
ctx = canvas.getContext('2d');

Blade=function(x,y,w,h,c){
  this.displacement = 0
  this.x=x;
  this.y=y;
  this.w=w;
  this.h=h;
  
  this.tightness=0.3+Math.random();
  this.c=Color(c).shiftHue(Math.random()*5).darkenByAmount(Math.random()/50).desaturateByAmount(Math.random()/5);
};

Blade.prototype.draw=function(){
  ctx.fillStyle=this.c;
  
  ctx.beginPath();
  ctx.moveTo(this.x - this.w/2, this.y); //left point
  ctx.lineTo(this.x + this.displacement*this.tightness, this.y - this.h); //top point
  ctx.lineTo(this.x + this.w/2, this.y); //right point
  ctx.closePath();
  ctx.fill();
};

Blade.prototype.update=function(){
  this.displacement=Math.sin(osc1/20)*10;
};

var osc1=0;
var grass=new Array();

for(var i=0;i<90;i++){
grass.push(new Blade(15+i*30,180,40+Math.random()*10,60+Math.random()*40,"#00644d"));
}
for(var i=0;i<90;i++){
grass.push(new Blade(i*30,180,30+Math.random()*10,60+Math.random()*30,"#009e52"));
};

draw = function(){
  ctx.fillStyle="#fdfdfd";
  ctx.fillRect ( 0 , 0 , canvas.width, canvas.height );
  
  for(i=0;i<grass.length;i++)
    grass[i].draw();
};

update=function(){
    osc1++;
    for(i=0;i<grass.length;i++)
      grass[i].update();
};
setInterval( draw, 1000/60);
setInterval( update, 1000/60);


if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}