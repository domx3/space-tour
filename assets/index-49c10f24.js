(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const to="152",Ku=0,Lo=1,Zu=2,mc=1,$u=2,Rn=3,Yn=0,Pe=1,mn=2,Wn=0,Xi=1,Do=2,Uo=3,Io=4,Ju=5,ki=100,Qu=101,th=102,Fo=103,No=104,eh=200,nh=201,ih=202,rh=203,_c=204,gc=205,sh=206,ah=207,oh=208,lh=209,ch=210,uh=0,hh=1,fh=2,Ca=3,dh=4,ph=5,mh=6,_h=7,vc=0,gh=1,vh=2,Un=0,xh=1,Mh=2,Sh=3,Eh=4,yh=5,xc=300,$i=301,Ji=302,Pa=303,La=304,Us=306,Da=1e3,on=1001,Ua=1002,Te=1003,Oo=1004,Ws=1005,je=1006,Th=1007,Pr=1008,xi=1009,bh=1010,Ah=1011,Mc=1012,wh=1013,ui=1014,hi=1015,Lr=1016,Rh=1017,Ch=1018,qi=1020,Ph=1021,ln=1023,Lh=1024,Dh=1025,di=1026,Qi=1027,Uh=1028,Ih=1029,Fh=1030,Nh=1031,Oh=1033,Xs=33776,qs=33777,Ys=33778,js=33779,Bo=35840,zo=35841,Go=35842,ko=35843,Bh=36196,Ho=37492,Vo=37496,Wo=37808,Xo=37809,qo=37810,Yo=37811,jo=37812,Ko=37813,Zo=37814,$o=37815,Jo=37816,Qo=37817,tl=37818,el=37819,nl=37820,il=37821,Ks=36492,zh=36283,rl=36284,sl=36285,al=36286,Sc=3e3,pi=3001,Gh=3200,kh=3201,Hh=0,Vh=1,mi="",yt="srgb",Mn="srgb-linear",Ec="display-p3",Zs=7680,Wh=519,ol=35044,ll="300 es",Ia=1035;class lr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cl=1234567;const Er=Math.PI/180,Dr=180/Math.PI;function cr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[r&255]+_e[r>>8&255]+_e[r>>16&255]+_e[r>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function be(r,t,e){return Math.max(t,Math.min(e,r))}function eo(r,t){return(r%t+t)%t}function Xh(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function qh(r,t,e){return r!==t?(e-r)/(t-r):0}function yr(r,t,e){return(1-e)*r+e*t}function Yh(r,t,e,n){return yr(r,t,1-Math.exp(-e*n))}function jh(r,t=1){return t-Math.abs(eo(r,t*2)-t)}function Kh(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Zh(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function $h(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Jh(r,t){return r+Math.random()*(t-r)}function Qh(r){return r*(.5-Math.random())}function tf(r){r!==void 0&&(cl=r);let t=cl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ef(r){return r*Er}function nf(r){return r*Dr}function Fa(r){return(r&r-1)===0&&r!==0}function rf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function yc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function sf(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),d=o((t-n)/2),p=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gr(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Re(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const af={DEG2RAD:Er,RAD2DEG:Dr,generateUUID:cr,clamp:be,euclideanModulo:eo,mapLinear:Xh,inverseLerp:qh,lerp:yr,damp:Yh,pingpong:jh,smoothstep:Kh,smootherstep:Zh,randInt:$h,randFloat:Jh,randFloatSpread:Qh,seededRandom:tf,degToRad:ef,radToDeg:nf,isPowerOfTwo:Fa,ceilPowerOfTwo:rf,floorPowerOfTwo:yc,setQuaternionFromProperEuler:sf,normalize:Re,denormalize:gr};class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],M=i[1],x=i[4],y=i[7],S=i[2],b=i[5],R=i[8];return s[0]=o*_+a*M+l*S,s[3]=o*m+a*x+l*b,s[6]=o*f+a*y+l*R,s[1]=c*_+u*M+h*S,s[4]=c*m+u*x+h*b,s[7]=c*f+u*y+h*R,s[2]=d*_+p*M+g*S,s[5]=d*m+p*x+g*b,s[8]=d*f+p*y+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=e*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($s.makeScale(t,e)),this}rotate(t){return this.premultiply($s.makeRotation(-t)),this}translate(t,e){return this.premultiply($s.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $s=new Lt;function Tc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ur(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const ul={};function Tr(r){r in ul||(ul[r]=!0,console.warn(r))}function Yi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Js(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const of=new Lt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),lf=new Lt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function cf(r){return r.convertSRGBToLinear().applyMatrix3(lf)}function uf(r){return r.applyMatrix3(of).convertLinearToSRGB()}const hf={[Mn]:r=>r,[yt]:r=>r.convertSRGBToLinear(),[Ec]:cf},ff={[Mn]:r=>r,[yt]:r=>r.convertLinearToSRGB(),[Ec]:uf},en={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Mn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=hf[t],i=ff[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}};let Ti;class bc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ti===void 0&&(Ti=Ur("canvas")),Ti.width=t.width,Ti.height=t.height;const n=Ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ur("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Yi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yi(e[n]/255)*255):e[n]=Yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Ac{constructor(t=null){this.isSource=!0,this.uuid=cr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Qs(i[o].image)):s.push(Qs(i[o]))}else s=Qs(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Qs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let df=0;class Le extends lr{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=on,i=on,s=je,o=Pr,a=ln,l=xi,c=Le.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=cr(),this.name="",this.source=new Ac(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===pi?yt:mi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Da:t.x=t.x-Math.floor(t.x);break;case on:t.x=t.x<0?0:1;break;case Ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Da:t.y=t.y-Math.floor(t.y);break;case on:t.y=t.y<0?0:1;break;case Ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===yt?pi:Sc}set encoding(t){Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===pi?yt:mi}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=xc;Le.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,i=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(p+1)/2,S=(f+1)/2,b=(u+d)/4,R=(h+_)/4,L=(g+m)/4;return x>y&&x>S?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=b/n,s=R/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=L/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=R/s,i=L/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mi extends lr{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===pi?yt:mi),this.texture=new Le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:je,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ac(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wc extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pf extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*_,M=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const S=Math.sqrt(x),b=Math.atan2(S,f*M);m=Math.sin(m*b)/S,a=Math.sin(a*b)/S}const y=a*M;if(l=l*m+d*y,c=c*m+p*y,u=u*m+g*y,h=h*m+_*y,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*p-c*d,t[e+1]=l*g+u*d+c*h-a*p,t[e+2]=c*g+u*p+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,u=l*n+a*e-s*i,h=l*i+s*n-o*e,d=-s*e-o*n-a*i;return this.x=c*l+d*-s+u*-a-h*-o,this.y=u*l+d*-o+h*-s-c*-a,this.z=h*l+d*-a+c*-o-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new F,hl=new Hr;class Vr{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),bi.copy(t.boundingBox),bi.applyMatrix4(t.matrixWorld),this.union(bi);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)yn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(yn)}else i.boundingBox===null&&i.computeBoundingBox(),bi.copy(i.boundingBox),bi.applyMatrix4(t.matrixWorld),this.union(bi)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),jr.subVectors(this.max,fr),Ai.subVectors(t.a,fr),wi.subVectors(t.b,fr),Ri.subVectors(t.c,fr),On.subVectors(wi,Ai),Bn.subVectors(Ri,wi),ti.subVectors(Ai,Ri);let e=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ti.z,ti.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ti.z,0,-ti.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ti.y,ti.x,0];return!ea(e,Ai,wi,Ri,jr)||(e=[1,0,0,0,1,0,0,0,1],!ea(e,Ai,wi,Ri,jr))?!1:(Kr.crossVectors(On,Bn),e=[Kr.x,Kr.y,Kr.z],ea(e,Ai,wi,Ri,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new F,new F,new F,new F,new F,new F,new F,new F],yn=new F,bi=new Vr,Ai=new F,wi=new F,Ri=new F,On=new F,Bn=new F,ti=new F,fr=new F,jr=new F,Kr=new F,ei=new F;function ea(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ei.fromArray(r,s);const a=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),l=t.dot(ei),c=e.dot(ei),u=n.dot(ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const mf=new Vr,dr=new F,na=new F;class Is{constructor(t=new F,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);const e=dr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(dr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(na)),this.expandByPoint(dr.copy(t.center).sub(na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new F,ia=new F,Zr=new F,zn=new F,ra=new F,$r=new F,sa=new F;class no{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ia.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(ia);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Zr),a=zn.dot(this.direction),l=-zn.dot(Zr),c=zn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ia).addScaledVector(Zr,d),p}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,i,s){ra.subVectors(e,t),$r.subVectors(n,t),sa.crossVectors(ra,$r);let o=this.direction.dot(sa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);const l=a*this.direction.dot($r.crossVectors(zn,$r));if(l<0)return null;const c=a*this.direction.dot(ra.cross(zn));if(c<0||l+c>o)return null;const u=-a*zn.dot(sa);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,o,a,l,c,u,h,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ci.setFromMatrixColumn(t,0).length(),s=1/Ci.setFromMatrixColumn(t,1).length(),o=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_f,t,gf)}lookAt(t,e,n){const i=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Gn.crossVectors(n,Oe),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Gn.crossVectors(n,Oe)),Gn.normalize(),Jr.crossVectors(Oe,Gn),i[0]=Gn.x,i[4]=Jr.x,i[8]=Oe.x,i[1]=Gn.y,i[5]=Jr.y,i[9]=Oe.y,i[2]=Gn.z,i[6]=Jr.z,i[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],x=n[7],y=n[11],S=n[15],b=i[0],R=i[4],L=i[8],v=i[12],w=i[1],z=i[5],k=i[9],D=i[13],N=i[2],O=i[6],K=i[10],B=i[14],V=i[3],$=i[7],Z=i[11],ht=i[15];return s[0]=o*b+a*w+l*N+c*V,s[4]=o*R+a*z+l*O+c*$,s[8]=o*L+a*k+l*K+c*Z,s[12]=o*v+a*D+l*B+c*ht,s[1]=u*b+h*w+d*N+p*V,s[5]=u*R+h*z+d*O+p*$,s[9]=u*L+h*k+d*K+p*Z,s[13]=u*v+h*D+d*B+p*ht,s[2]=g*b+_*w+m*N+f*V,s[6]=g*R+_*z+m*O+f*$,s[10]=g*L+_*k+m*K+f*Z,s[14]=g*v+_*D+m*B+f*ht,s[3]=M*b+x*w+y*N+S*V,s[7]=M*R+x*z+y*O+S*$,s[11]=M*L+x*k+y*K+S*Z,s[15]=M*v+x*D+y*B+S*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*p-n*l*p)+_*(+e*l*p-e*c*d+s*o*d-i*o*p+i*c*u-s*l*u)+m*(+e*c*h-e*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+f*(-i*a*u-e*l*h+e*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],M=h*m*c-_*d*c+_*l*p-a*m*p-h*l*f+a*d*f,x=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,y=u*_*c-g*h*c+g*a*p-o*_*p-u*a*f+o*h*f,S=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,b=e*M+n*x+i*y+s*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=M*R,t[1]=(_*d*s-h*m*s-_*i*p+n*m*p+h*i*f-n*d*f)*R,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*f+n*l*f)*R,t[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*p-n*l*p)*R,t[4]=x*R,t[5]=(u*m*s-g*d*s+g*i*p-e*m*p-u*i*f+e*d*f)*R,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*f-e*l*f)*R,t[7]=(o*d*s-u*l*s+u*i*c-e*d*c-o*i*p+e*l*p)*R,t[8]=y*R,t[9]=(g*h*s-u*_*s-g*n*p+e*_*p+u*n*f-e*h*f)*R,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*f+e*a*f)*R,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*p-e*a*p)*R,t[12]=S*R,t[13]=(u*_*i-g*h*i+g*n*d-e*_*d-u*n*m+e*h*m)*R,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*R,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,_=o*u,m=o*h,f=a*h,M=l*c,x=l*u,y=l*h,S=n.x,b=n.y,R=n.z;return i[0]=(1-(_+f))*S,i[1]=(p+y)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(p-y)*b,i[5]=(1-(d+f))*b,i[6]=(m+M)*b,i[7]=0,i[8]=(g+x)*R,i[9]=(m-M)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ci.set(i[0],i[1],i[2]).length();const o=Ci.set(i[4],i[5],i[6]).length(),a=Ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],nn.copy(this);const c=1/s,u=1/o,h=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,e.setFromRotationMatrix(nn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o){const a=this.elements,l=2*s/(e-t),c=2*s/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),d=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,o){const a=this.elements,l=1/(e-t),c=1/(n-i),u=1/(o-s),h=(e+t)*l,d=(n+i)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ci=new F,nn=new ue,_f=new F(0,0,0),gf=new F(1,1,1),Gn=new F,Jr=new F,Oe=new F,fl=new ue,dl=new Hr;class Fs{constructor(t=0,e=0,n=0,i=Fs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dl.setFromEuler(this),this.setFromQuaternion(dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fs.DEFAULT_ORDER="XYZ";class io{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vf=0;const pl=new F,Pi=new Hr,bn=new ue,Qr=new F,pr=new F,xf=new F,Mf=new Hr,ml=new F(1,0,0),_l=new F(0,1,0),gl=new F(0,0,1),Sf={type:"added"},vl={type:"removed"};class Ae extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new F,e=new Fs,n=new Hr,i=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new Lt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(ml,t)}rotateY(t){return this.rotateOnAxis(_l,t)}rotateZ(t){return this.rotateOnAxis(gl,t)}translateOnAxis(t,e){return pl.copy(t).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ml,t)}translateY(t){return this.translateOnAxis(_l,t)}translateZ(t){return this.translateOnAxis(gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(pr,Qr,this.up):bn.lookAt(Qr,pr,this.up),this.quaternion.setFromRotationMatrix(bn),i&&(bn.extractRotation(i.matrixWorld),Pi.setFromRotationMatrix(bn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Sf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(vl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Mf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ae.DEFAULT_UP=new F(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new F,An=new F,aa=new F,wn=new F,Li=new F,Di=new F,xl=new F,oa=new F,la=new F,ca=new F;let ts=!1;class an{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),rn.subVectors(t,e),i.cross(rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){rn.subVectors(i,e),An.subVectors(n,e),aa.subVectors(t,e);const o=rn.dot(rn),a=rn.dot(An),l=rn.dot(aa),c=An.dot(An),u=An.dot(aa),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,wn),wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(t,e,n,i,s,o,a,l){return ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ts=!0),this.getInterpolation(t,e,n,i,s,o,a,l)}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,wn),l.setScalar(0),l.addScaledVector(s,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l}static isFrontFacing(t,e,n,i){return rn.subVectors(n,e),An.subVectors(t,e),rn.cross(An).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),rn.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ts=!0),an.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return an.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Li.subVectors(i,n),Di.subVectors(s,n),oa.subVectors(t,n);const l=Li.dot(oa),c=Di.dot(oa);if(l<=0&&c<=0)return e.copy(n);la.subVectors(t,i);const u=Li.dot(la),h=Di.dot(la);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Li,o);ca.subVectors(t,s);const p=Li.dot(ca),g=Di.dot(ca);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Di,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return xl.subVectors(s,i),a=(h-u)/(h-u+(p-g)),e.copy(i).addScaledVector(xl,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(Li,o).addScaledVector(Di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Ef=0;class Wr extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=Xi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=_c,this.blendDst=gc,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},es={h:0,s:0,l:0};function ua(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,en.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=en.workingColorSpace){return this.r=t,this.g=e,this.b=n,en.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=en.workingColorSpace){if(t=eo(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ua(o,s,t+1/3),this.g=ua(o,s,t),this.b=ua(o,s,t-1/3)}return en.toWorkingColorSpace(this,i),this}setStyle(t,e=yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=yt){const n=Rc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yt){return en.fromWorkingColorSpace(ge.copy(this),t),Math.round(be(ge.r*255,0,255))*65536+Math.round(be(ge.g*255,0,255))*256+Math.round(be(ge.b*255,0,255))}getHexString(t=yt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=en.workingColorSpace){en.fromWorkingColorSpace(ge.copy(this),e);const n=ge.r,i=ge.g,s=ge.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=en.workingColorSpace){return en.fromWorkingColorSpace(ge.copy(this),e),t.r=ge.r,t.g=ge.g,t.b=ge.b,t}getStyle(t=yt){en.fromWorkingColorSpace(ge.copy(this),t);const e=ge.r,n=ge.g,i=ge.b;return t!==yt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(sn),sn.h+=t,sn.s+=e,sn.l+=n,this.setHSL(sn.h,sn.s,sn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(sn),t.getHSL(es);const n=yr(sn.h,es.h,e),i=yr(sn.s,es.s,e),s=yr(sn.l,es.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ge=new Xt;Xt.NAMES=Rc;class Ts extends Wr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const te=new F,ns=new Gt;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ol,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ns.fromBufferAttribute(this,e),ns.applyMatrix3(t),this.setXY(e,ns.x,ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.applyMatrix3(t),this.setXYZ(e,te.x,te.y,te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.applyMatrix4(t),this.setXYZ(e,te.x,te.y,te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.applyNormalMatrix(t),this.setXYZ(e,te.x,te.y,te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.transformDirection(t),this.setXYZ(e,te.x,te.y,te.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ol&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Cc extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Pc extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ke extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yf=0;const Xe=new ue,ha=new Ae,Ui=new F,Be=new Vr,mr=new Vr,ce=new F;class hn extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tc(t)?Pc:Cc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Lt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return ha.lookAt(t),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ke(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Be.setFromBufferAttribute(s),this.morphTargetsRelative?(ce.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(ce),ce.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(ce)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(ce.addVectors(Be.min,mr.min),Be.expandByPoint(ce),ce.addVectors(Be.max,mr.max),Be.expandByPoint(ce)):(Be.expandByPoint(mr.min),Be.expandByPoint(mr.max))}Be.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)ce.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ce));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ce.fromBufferAttribute(a,c),l&&(Ui.fromBufferAttribute(t,c),ce.add(Ui)),i=Math.max(i,n.distanceToSquared(ce))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<a;w++)c[w]=new F,u[w]=new F;const h=new F,d=new F,p=new F,g=new Gt,_=new Gt,m=new Gt,f=new F,M=new F;function x(w,z,k){h.fromArray(i,w*3),d.fromArray(i,z*3),p.fromArray(i,k*3),g.fromArray(o,w*2),_.fromArray(o,z*2),m.fromArray(o,k*2),d.sub(h),p.sub(h),_.sub(g),m.sub(g);const D=1/(_.x*m.y-m.x*_.y);isFinite(D)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(D),M.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(D),c[w].add(f),c[z].add(f),c[k].add(f),u[w].add(M),u[z].add(M),u[k].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,z=y.length;w<z;++w){const k=y[w],D=k.start,N=k.count;for(let O=D,K=D+N;O<K;O+=3)x(n[O+0],n[O+1],n[O+2])}const S=new F,b=new F,R=new F,L=new F;function v(w){R.fromArray(s,w*3),L.copy(R);const z=c[w];S.copy(z),S.sub(R.multiplyScalar(R.dot(z))).normalize(),b.crossVectors(L,z);const D=b.dot(u[w])<0?-1:1;l[w*4]=S.x,l[w*4+1]=S.y,l[w*4+2]=S.z,l[w*4+3]=D}for(let w=0,z=y.length;w<z;++w){const k=y[w],D=k.start,N=k.count;for(let O=D,K=D+N;O<K;O+=3)v(n[O+0]),v(n[O+1]),v(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ce.fromBufferAttribute(t,e),ce.normalize(),t.setXYZ(e,ce.x,ce.y,ce.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new cn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new hn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ml=new ue,dn=new no,is=new Is,Sl=new F,Ii=new F,Fi=new F,Ni=new F,fa=new F,rs=new F,ss=new Gt,as=new Gt,os=new Gt,El=new F,yl=new F,Tl=new F,ls=new F,cs=new F;class gn extends Ae{constructor(t=new hn,e=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(fa.fromBufferAttribute(h,t),o?rs.addScaledVector(fa,u):rs.addScaledVector(fa.sub(e),u))}e.add(rs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(s),dn.copy(t.ray).recast(t.near),!(is.containsPoint(dn.origin)===!1&&(dn.intersectSphere(is,Sl)===null||dn.origin.distanceToSquared(Sl)>(t.far-t.near)**2))&&(Ml.copy(s).invert(),dn.copy(t.ray).applyMatrix4(Ml),!(n.boundingBox!==null&&dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e)))}_computeIntersections(t,e){let n;const i=this.geometry,s=this.material,o=i.index,a=i.attributes.position,l=i.attributes.uv,c=i.attributes.uv1,u=i.attributes.normal,h=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,g=h.length;p<g;p++){const _=h[p],m=s[_.materialIndex],f=Math.max(_.start,d.start),M=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let x=f,y=M;x<y;x+=3){const S=o.getX(x),b=o.getX(x+1),R=o.getX(x+2);n=us(this,m,t,dn,l,c,u,S,b,R),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=_.materialIndex,e.push(n))}}else{const p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){const f=o.getX(_),M=o.getX(_+1),x=o.getX(_+2);n=us(this,s,t,dn,l,c,u,f,M,x),n&&(n.faceIndex=Math.floor(_/3),e.push(n))}}else if(a!==void 0)if(Array.isArray(s))for(let p=0,g=h.length;p<g;p++){const _=h[p],m=s[_.materialIndex],f=Math.max(_.start,d.start),M=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let x=f,y=M;x<y;x+=3){const S=x,b=x+1,R=x+2;n=us(this,m,t,dn,l,c,u,S,b,R),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=_.materialIndex,e.push(n))}}else{const p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){const f=_,M=_+1,x=_+2;n=us(this,s,t,dn,l,c,u,f,M,x),n&&(n.faceIndex=Math.floor(_/3),e.push(n))}}}}function Tf(r,t,e,n,i,s,o,a){let l;if(t.side===Pe?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Yn,a),l===null)return null;cs.copy(a),cs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(cs);return c<e.near||c>e.far?null:{distance:c,point:cs.clone(),object:r}}function us(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Ii),r.getVertexPosition(l,Fi),r.getVertexPosition(c,Ni);const u=Tf(r,t,e,n,Ii,Fi,Ni,ls);if(u){i&&(ss.fromBufferAttribute(i,a),as.fromBufferAttribute(i,l),os.fromBufferAttribute(i,c),u.uv=an.getInterpolation(ls,Ii,Fi,Ni,ss,as,os,new Gt)),s&&(ss.fromBufferAttribute(s,a),as.fromBufferAttribute(s,l),os.fromBufferAttribute(s,c),u.uv1=an.getInterpolation(ls,Ii,Fi,Ni,ss,as,os,new Gt),u.uv2=u.uv1),o&&(El.fromBufferAttribute(o,a),yl.fromBufferAttribute(o,l),Tl.fromBufferAttribute(o,c),u.normal=an.getInterpolation(ls,Ii,Fi,Ni,El,yl,Tl,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};an.getNormal(Ii,Fi,Ni,h.normal),u.face=h}return u}class Xr extends hn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(h,2));function g(_,m,f,M,x,y,S,b,R,L,v){const w=y/R,z=S/L,k=y/2,D=S/2,N=b/2,O=R+1,K=L+1;let B=0,V=0;const $=new F;for(let Z=0;Z<K;Z++){const ht=Z*z-D;for(let et=0;et<O;et++){const G=et*w-k;$[_]=G*M,$[m]=ht*x,$[f]=N,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[f]=b>0?1:-1,u.push($.x,$.y,$.z),h.push(et/R),h.push(1-Z/L),B+=1}}for(let Z=0;Z<L;Z++)for(let ht=0;ht<R;ht++){const et=d+ht+O*Z,G=d+ht+O*(Z+1),j=d+(ht+1)+O*(Z+1),nt=d+(ht+1)+O*Z;l.push(et,G,nt),l.push(G,j,nt),V+=6}a.addGroup(p,V,v),p+=V,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function tr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ye(r){const t={};for(let e=0;e<r.length;e++){const n=tr(r[e]);for(const i in n)t[i]=n[i]}return t}function bf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Lc(r){return r.getRenderTarget()===null?r.outputColorSpace:Mn}const Af={clone:tr,merge:ye};var wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Wr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tr(t.uniforms),this.uniformsGroups=bf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Dc extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ke extends Dc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Er*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Oi=-90,Bi=1;class Cf extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ke(Oi,Bi,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Ke(Oi,Bi,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Ke(Oi,Bi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ke(Oi,Bi,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Ke(Oi,Bi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ke(Oi,Bi,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,d=t.xr.enabled;t.toneMapping=Un,t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Uc extends Le{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:$i,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pf extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===pi?yt:mi),this.texture=new Uc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xr(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Wn});s.uniforms.tEquirect.value=e;const o=new gn(i,s),a=e.minFilter;return e.minFilter===Pr&&(e.minFilter=je),new Cf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const da=new F,Lf=new F,Df=new Lt;class si{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=da.subVectors(n,e).cross(Lf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(da),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Df.getNormalMatrix(t),i=this.coplanarPoint(da).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Is,hs=new F;class Ic{constructor(t=new si,e=new si,n=new si,i=new si,s=new si,o=new si){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],_=n[11],m=n[12],f=n[13],M=n[14],x=n[15];return e[0].setComponents(a-i,h-l,_-d,x-m).normalize(),e[1].setComponents(a+i,h+l,_+d,x+m).normalize(),e[2].setComponents(a+s,h+c,_+p,x+f).normalize(),e[3].setComponents(a-s,h-c,_-p,x-f).normalize(),e[4].setComponents(a-o,h-u,_-g,x-M).normalize(),e[5].setComponents(a+o,h+u,_+g,x+M).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(hs.x=i.normal.x>0?t.max.x:t.min.x,hs.y=i.normal.y>0?t.max.y:t.min.y,hs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fc(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Uf(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,p=u.updateRange;r.bindBuffer(h,c),p.count===-1?r.bufferSubData(h,0,d):(e?r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class ro extends hn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const M=f*d-o;for(let x=0;x<c;x++){const y=x*h-s;g.push(y,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const x=M+c*f,y=M+c*(f+1),S=M+1+c*(f+1),b=M+1+c*f;p.push(x,y,b),p.push(y,S,b)}this.setIndex(p),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.width,t.height,t.widthSegments,t.heightSegments)}}var If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gf="vec3 transformed = vec3( position );",kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,td=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ed=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",od=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ud=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ed=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Cd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ud=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Id=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Od=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_p=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Tp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,bp=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ap=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wp=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Np=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Op=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vp=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$p=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,om=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,At={alphamap_fragment:If,alphamap_pars_fragment:Ff,alphatest_fragment:Nf,alphatest_pars_fragment:Of,aomap_fragment:Bf,aomap_pars_fragment:zf,begin_vertex:Gf,beginnormal_vertex:kf,bsdfs:Hf,iridescence_fragment:Vf,bumpmap_pars_fragment:Wf,clipping_planes_fragment:Xf,clipping_planes_pars_fragment:qf,clipping_planes_pars_vertex:Yf,clipping_planes_vertex:jf,color_fragment:Kf,color_pars_fragment:Zf,color_pars_vertex:$f,color_vertex:Jf,common:Qf,cube_uv_reflection_fragment:td,defaultnormal_vertex:ed,displacementmap_pars_vertex:nd,displacementmap_vertex:id,emissivemap_fragment:rd,emissivemap_pars_fragment:sd,encodings_fragment:ad,encodings_pars_fragment:od,envmap_fragment:ld,envmap_common_pars_fragment:cd,envmap_pars_fragment:ud,envmap_pars_vertex:hd,envmap_physical_pars_fragment:yd,envmap_vertex:fd,fog_vertex:dd,fog_pars_vertex:pd,fog_fragment:md,fog_pars_fragment:_d,gradientmap_pars_fragment:gd,lightmap_fragment:vd,lightmap_pars_fragment:xd,lights_lambert_fragment:Md,lights_lambert_pars_fragment:Sd,lights_pars_begin:Ed,lights_toon_fragment:Td,lights_toon_pars_fragment:bd,lights_phong_fragment:Ad,lights_phong_pars_fragment:wd,lights_physical_fragment:Rd,lights_physical_pars_fragment:Cd,lights_fragment_begin:Pd,lights_fragment_maps:Ld,lights_fragment_end:Dd,logdepthbuf_fragment:Ud,logdepthbuf_pars_fragment:Id,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:Nd,map_fragment:Od,map_pars_fragment:Bd,map_particle_fragment:zd,map_particle_pars_fragment:Gd,metalnessmap_fragment:kd,metalnessmap_pars_fragment:Hd,morphcolor_vertex:Vd,morphnormal_vertex:Wd,morphtarget_pars_vertex:Xd,morphtarget_vertex:qd,normal_fragment_begin:Yd,normal_fragment_maps:jd,normal_pars_fragment:Kd,normal_pars_vertex:Zd,normal_vertex:$d,normalmap_pars_fragment:Jd,clearcoat_normal_fragment_begin:Qd,clearcoat_normal_fragment_maps:tp,clearcoat_pars_fragment:ep,iridescence_pars_fragment:np,output_fragment:ip,packing:rp,premultiplied_alpha_fragment:sp,project_vertex:ap,dithering_fragment:op,dithering_pars_fragment:lp,roughnessmap_fragment:cp,roughnessmap_pars_fragment:up,shadowmap_pars_fragment:hp,shadowmap_pars_vertex:fp,shadowmap_vertex:dp,shadowmask_pars_fragment:pp,skinbase_vertex:mp,skinning_pars_vertex:_p,skinning_vertex:gp,skinnormal_vertex:vp,specularmap_fragment:xp,specularmap_pars_fragment:Mp,tonemapping_fragment:Sp,tonemapping_pars_fragment:Ep,transmission_fragment:yp,transmission_pars_fragment:Tp,uv_pars_fragment:bp,uv_pars_vertex:Ap,uv_vertex:wp,worldpos_vertex:Rp,background_vert:Cp,background_frag:Pp,backgroundCube_vert:Lp,backgroundCube_frag:Dp,cube_vert:Up,cube_frag:Ip,depth_vert:Fp,depth_frag:Np,distanceRGBA_vert:Op,distanceRGBA_frag:Bp,equirect_vert:zp,equirect_frag:Gp,linedashed_vert:kp,linedashed_frag:Hp,meshbasic_vert:Vp,meshbasic_frag:Wp,meshlambert_vert:Xp,meshlambert_frag:qp,meshmatcap_vert:Yp,meshmatcap_frag:jp,meshnormal_vert:Kp,meshnormal_frag:Zp,meshphong_vert:$p,meshphong_frag:Jp,meshphysical_vert:Qp,meshphysical_frag:tm,meshtoon_vert:em,meshtoon_frag:nm,points_vert:im,points_frag:rm,shadow_vert:sm,shadow_frag:am,sprite_vert:om,sprite_frag:lm},it={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaTest:{value:0}}},pn={basic:{uniforms:ye([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:ye([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Xt(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:ye([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:ye([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:ye([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Xt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:ye([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:ye([it.points,it.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:ye([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:ye([it.common,it.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:ye([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:ye([it.sprite,it.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:ye([it.common,it.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:ye([it.lights,it.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};pn.physical={uniforms:ye([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const fs={r:0,b:0,g:0};function cm(r,t,e,n,i,s,o){const a=new Xt(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(m,f){let M=!1,x=f.isScene===!0?f.background:null;switch(x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),M=!0),r.xr.getEnvironmentBlendMode()){case"opaque":M=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),M=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),M=!0;break}(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Us)?(u===void 0&&(u=new gn(new Xr(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:tr(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=x.colorSpace!==yt,(h!==x||d!==x.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new gn(new ro(2,2),new Si({name:"BackgroundMaterial",uniforms:tr(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=x.colorSpace!==yt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(fs,Lc(r)),n.buffers.color.setClear(fs.r,fs.g,fs.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function um(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(N,O,K,B,V){let $=!1;if(o){const Z=_(B,K,O);c!==Z&&(c=Z,p(c.object)),$=f(N,B,K,V),$&&M(N,B,K,V)}else{const Z=O.wireframe===!0;(c.geometry!==B.id||c.program!==K.id||c.wireframe!==Z)&&(c.geometry=B.id,c.program=K.id,c.wireframe=Z,$=!0)}V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,L(N,O,K,B),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(N){return n.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,O,K){const B=K.wireframe===!0;let V=a[N.id];V===void 0&&(V={},a[N.id]=V);let $=V[O.id];$===void 0&&($={},V[O.id]=$);let Z=$[B];return Z===void 0&&(Z=m(d()),$[B]=Z),Z}function m(N){const O=[],K=[],B=[];for(let V=0;V<i;V++)O[V]=0,K[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:K,attributeDivisors:B,object:N,attributes:{},index:null}}function f(N,O,K,B){const V=c.attributes,$=O.attributes;let Z=0;const ht=K.getAttributes();for(const et in ht)if(ht[et].location>=0){const j=V[et];let nt=$[et];if(nt===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(nt=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(nt=N.instanceColor)),j===void 0||j.attribute!==nt||nt&&j.data!==nt.data)return!0;Z++}return c.attributesNum!==Z||c.index!==B}function M(N,O,K,B){const V={},$=O.attributes;let Z=0;const ht=K.getAttributes();for(const et in ht)if(ht[et].location>=0){let j=$[et];j===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(j=N.instanceColor));const nt={};nt.attribute=j,j&&j.data&&(nt.data=j.data),V[et]=nt,Z++}c.attributes=V,c.attributesNum=Z,c.index=B}function x(){const N=c.newAttributes;for(let O=0,K=N.length;O<K;O++)N[O]=0}function y(N){S(N,0)}function S(N,O){const K=c.newAttributes,B=c.enabledAttributes,V=c.attributeDivisors;K[N]=1,B[N]===0&&(r.enableVertexAttribArray(N),B[N]=1),V[N]!==O&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,O),V[N]=O)}function b(){const N=c.newAttributes,O=c.enabledAttributes;for(let K=0,B=O.length;K<B;K++)O[K]!==N[K]&&(r.disableVertexAttribArray(K),O[K]=0)}function R(N,O,K,B,V,$){n.isWebGL2===!0&&(K===r.INT||K===r.UNSIGNED_INT)?r.vertexAttribIPointer(N,O,K,V,$):r.vertexAttribPointer(N,O,K,B,V,$)}function L(N,O,K,B){if(n.isWebGL2===!1&&(N.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const V=B.attributes,$=K.getAttributes(),Z=O.defaultAttributeValues;for(const ht in $){const et=$[ht];if(et.location>=0){let G=V[ht];if(G===void 0&&(ht==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),ht==="instanceColor"&&N.instanceColor&&(G=N.instanceColor)),G!==void 0){const j=G.normalized,nt=G.itemSize,at=e.get(G);if(at===void 0)continue;const P=at.buffer,Tt=at.type,St=at.bytesPerElement;if(G.isInterleavedBufferAttribute){const rt=G.data,xt=rt.stride,Ft=G.offset;if(rt.isInstancedInterleavedBuffer){for(let pt=0;pt<et.locationSize;pt++)S(et.location+pt,rt.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let pt=0;pt<et.locationSize;pt++)y(et.location+pt);r.bindBuffer(r.ARRAY_BUFFER,P);for(let pt=0;pt<et.locationSize;pt++)R(et.location+pt,nt/et.locationSize,Tt,j,xt*St,(Ft+nt/et.locationSize*pt)*St)}else{if(G.isInstancedBufferAttribute){for(let rt=0;rt<et.locationSize;rt++)S(et.location+rt,G.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let rt=0;rt<et.locationSize;rt++)y(et.location+rt);r.bindBuffer(r.ARRAY_BUFFER,P);for(let rt=0;rt<et.locationSize;rt++)R(et.location+rt,nt/et.locationSize,Tt,j,nt*St,nt/et.locationSize*rt*St)}}else if(Z!==void 0){const j=Z[ht];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(et.location,j);break;case 3:r.vertexAttrib3fv(et.location,j);break;case 4:r.vertexAttrib4fv(et.location,j);break;default:r.vertexAttrib1fv(et.location,j)}}}}b()}function v(){k();for(const N in a){const O=a[N];for(const K in O){const B=O[K];for(const V in B)g(B[V].object),delete B[V];delete O[K]}delete a[N]}}function w(N){if(a[N.id]===void 0)return;const O=a[N.id];for(const K in O){const B=O[K];for(const V in B)g(B[V].object),delete B[V];delete O[K]}delete a[N.id]}function z(N){for(const O in a){const K=a[O];if(K[N.id]===void 0)continue;const B=K[N.id];for(const V in B)g(B[V].object),delete B[V];delete K[N.id]}}function k(){D(),u=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:D,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:y,disableUnusedAttributes:b}}function hm(r,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,h),e.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function fm(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=o||t.has("OES_texture_float"),S=x&&y,b=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:b}}function dm(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new si,a=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,x=M*4;let y=f.clippingState||null;l.value=y,y=u(g,d,x,p);for(let S=0;S!==x;++S)y[S]=e[S];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function pm(r){let t=new WeakMap;function e(o,a){return a===Pa?o.mapping=$i:a===La&&(o.mapping=Ji),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Pa||a===La)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Pf(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class mm extends Dc{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Hi=4,bl=[.125,.215,.35,.446,.526,.582],li=20,pa=new mm,Al=new Xt;let ma=null;const ai=(1+Math.sqrt(5))/2,zi=1/ai,wl=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,ai,zi),new F(0,ai,-zi),new F(zi,0,ai),new F(-zi,0,ai),new F(ai,zi,0),new F(-ai,zi,0)];class Rl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ma=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma),t.scissorTest=!1,ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Lr,format:ln,colorSpace:Mn,depthBuffer:!1},i=Cl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_m(s)),this._blurMaterial=gm(s,t,e)}return i}_compileMaterial(t){const e=new gn(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,i){const a=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Al),u.toneMapping=Un,u.autoClear=!1;const p=new Ts({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new gn(new Xr,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Al),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;ds(i,M*x,f>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===$i||t.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ds(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=wl[(i-1)%wl.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new gn(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*li-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):li;m>li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const f=[];let M=0;for(let R=0;R<li;++R){const L=R/_,v=Math.exp(-L*L/2);f.push(v),R===0?M+=v:R<m&&(M+=2*v)}for(let R=0;R<f.length;R++)f[R]=f[R]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const y=this._sizeLods[i],S=3*y*(i>x-Hi?i-x+Hi:0),b=4*(this._cubeSize-y);ds(e,S,b,3*y,2*y),l.setRenderTarget(e),l.render(h,pa)}}function _m(r){const t=[],e=[],n=[];let i=r;const s=r-Hi+1+bl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Hi?l=bl[o-r+Hi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,L=b>2?0:-1,v=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];M.set(v,_*g*b),x.set(d,m*g*b);const w=[b,b,b,b,b,b];y.set(w,f*g*b)}const S=new hn;S.setAttribute("position",new cn(M,_)),S.setAttribute("uv",new cn(x,m)),S.setAttribute("faceIndex",new cn(y,f)),t.push(S),i>Hi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cl(r,t,e){const n=new Mi(r,t,e);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ds(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function gm(r,t,e){const n=new Float32Array(li),i=new F(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Pl(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ll(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function so(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vm(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Pa||l===La,u=l===$i||l===Ji;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Rl(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new Rl(r));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function xm(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Mm(r,t,e,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let x=0,y=M.length;x<y;x+=3){const S=M[x+0],b=M[x+1],R=M[x+2];d.push(S,b,b,R,R,S)}}else{const M=g.array;_=g.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const S=x+0,b=x+1,R=x+2;d.push(S,b,b,R,R,S)}}const m=new(Tc(d)?Pc:Cc)(d,1);m.version=_;const f=s.get(h);f&&t.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Sm(r,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,p){r.drawElements(s,p,a,d*l),e.update(p,s,1)}function h(d,p,g){if(g===0)return;let _,m;if(i)_=r,m="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,a,d*l,g),e.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Em(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ym(r,t){return r[0]-t[0]}function Tm(r,t){return Math.abs(t[1])-Math.abs(r[1])}function bm(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new pe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let O=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let v=0;x===!0&&(v=1),y===!0&&(v=2),S===!0&&(v=3);let w=u.attributes.position.count*v,z=1;w>t.maxTextureSize&&(z=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const k=new Float32Array(w*z*4*_),D=new wc(k,w,z,_);D.type=hi,D.needsUpdate=!0;const N=v*4;for(let K=0;K<_;K++){const B=b[K],V=R[K],$=L[K],Z=w*z*4*K;for(let ht=0;ht<B.count;ht++){const et=ht*N;x===!0&&(o.fromBufferAttribute(B,ht),k[Z+et+0]=o.x,k[Z+et+1]=o.y,k[Z+et+2]=o.z,k[Z+et+3]=0),y===!0&&(o.fromBufferAttribute(V,ht),k[Z+et+4]=o.x,k[Z+et+5]=o.y,k[Z+et+6]=o.z,k[Z+et+7]=0),S===!0&&(o.fromBufferAttribute($,ht),k[Z+et+8]=o.x,k[Z+et+9]=o.y,k[Z+et+10]=o.z,k[Z+et+11]=$.itemSize===4?o.w:1)}}m={count:_,texture:D,size:new Gt(w,z)},s.set(u,m),u.addEventListener("dispose",O)}let f=0;for(let x=0;x<d.length;x++)f+=d[x];const M=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[u.id]=_}for(let y=0;y<g;y++){const S=_[y];S[0]=y,S[1]=d[y]}_.sort(Tm);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(ym);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const S=a[y],b=S[0],R=S[1];b!==Number.MAX_SAFE_INTEGER&&R?(m&&u.getAttribute("morphTarget"+y)!==m[b]&&u.setAttribute("morphTarget"+y,m[b]),f&&u.getAttribute("morphNormal"+y)!==f[b]&&u.setAttribute("morphNormal"+y,f[b]),i[y]=R,M+=R):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),f&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const x=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Am(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);return i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Nc=new Le,Oc=new wc,Bc=new pf,zc=new Uc,Dl=[],Ul=[],Il=new Float32Array(16),Fl=new Float32Array(9),Nl=new Float32Array(4);function ur(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Dl[i];if(s===void 0&&(s=new Float32Array(i),Dl[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function re(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function se(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ns(r,t){let e=Ul[t];e===void 0&&(e=new Int32Array(t),Ul[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function wm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Rm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;r.uniform2fv(this.addr,t),se(e,t)}}function Cm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(re(e,t))return;r.uniform3fv(this.addr,t),se(e,t)}}function Pm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;r.uniform4fv(this.addr,t),se(e,t)}}function Lm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),se(e,t)}else{if(re(e,n))return;Nl.set(n),r.uniformMatrix2fv(this.addr,!1,Nl),se(e,n)}}function Dm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),se(e,t)}else{if(re(e,n))return;Fl.set(n),r.uniformMatrix3fv(this.addr,!1,Fl),se(e,n)}}function Um(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),se(e,t)}else{if(re(e,n))return;Il.set(n),r.uniformMatrix4fv(this.addr,!1,Il),se(e,n)}}function Im(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Fm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;r.uniform2iv(this.addr,t),se(e,t)}}function Nm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;r.uniform3iv(this.addr,t),se(e,t)}}function Om(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;r.uniform4iv(this.addr,t),se(e,t)}}function Bm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function zm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;r.uniform2uiv(this.addr,t),se(e,t)}}function Gm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;r.uniform3uiv(this.addr,t),se(e,t)}}function km(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;r.uniform4uiv(this.addr,t),se(e,t)}}function Hm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Nc,i)}function Vm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Bc,i)}function Wm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||zc,i)}function Xm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Oc,i)}function qm(r){switch(r){case 5126:return wm;case 35664:return Rm;case 35665:return Cm;case 35666:return Pm;case 35674:return Lm;case 35675:return Dm;case 35676:return Um;case 5124:case 35670:return Im;case 35667:case 35671:return Fm;case 35668:case 35672:return Nm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return zm;case 36295:return Gm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}function Ym(r,t){r.uniform1fv(this.addr,t)}function jm(r,t){const e=ur(t,this.size,2);r.uniform2fv(this.addr,e)}function Km(r,t){const e=ur(t,this.size,3);r.uniform3fv(this.addr,e)}function Zm(r,t){const e=ur(t,this.size,4);r.uniform4fv(this.addr,e)}function $m(r,t){const e=ur(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Jm(r,t){const e=ur(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Qm(r,t){const e=ur(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function t_(r,t){r.uniform1iv(this.addr,t)}function e_(r,t){r.uniform2iv(this.addr,t)}function n_(r,t){r.uniform3iv(this.addr,t)}function i_(r,t){r.uniform4iv(this.addr,t)}function r_(r,t){r.uniform1uiv(this.addr,t)}function s_(r,t){r.uniform2uiv(this.addr,t)}function a_(r,t){r.uniform3uiv(this.addr,t)}function o_(r,t){r.uniform4uiv(this.addr,t)}function l_(r,t,e){const n=this.cache,i=t.length,s=Ns(e,i);re(n,s)||(r.uniform1iv(this.addr,s),se(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Nc,s[o])}function c_(r,t,e){const n=this.cache,i=t.length,s=Ns(e,i);re(n,s)||(r.uniform1iv(this.addr,s),se(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Bc,s[o])}function u_(r,t,e){const n=this.cache,i=t.length,s=Ns(e,i);re(n,s)||(r.uniform1iv(this.addr,s),se(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||zc,s[o])}function h_(r,t,e){const n=this.cache,i=t.length,s=Ns(e,i);re(n,s)||(r.uniform1iv(this.addr,s),se(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Oc,s[o])}function f_(r){switch(r){case 5126:return Ym;case 35664:return jm;case 35665:return Km;case 35666:return Zm;case 35674:return $m;case 35675:return Jm;case 35676:return Qm;case 5124:case 35670:return t_;case 35667:case 35671:return e_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return r_;case 36294:return s_;case 36295:return a_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return h_}}class d_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=qm(e.type)}}class p_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=f_(e.type)}}class m_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function Ol(r,t){r.seq.push(t),r.map[t.id]=t}function __(r,t,e){const n=r.name,i=n.length;for(_a.lastIndex=0;;){const s=_a.exec(n),o=_a.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ol(e,c===void 0?new d_(a,r,t):new p_(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new m_(a),Ol(e,h)),e=h}}}class vs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);__(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Bl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let g_=0;function v_(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function x_(r){switch(r){case Mn:return["Linear","( value )"];case yt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function zl(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+v_(r.getShaderSource(t),o)}else return i}function M_(r,t){const e=x_(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function S_(r,t){let e;switch(t){case xh:e="Linear";break;case Mh:e="Reinhard";break;case Sh:e="OptimizedCineon";break;case Eh:e="ACESFilmic";break;case yh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function E_(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vr).join(`
`)}function y_(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function T_(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function vr(r){return r!==""}function Gl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const b_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Na(r){return r.replace(b_,A_)}function A_(r,t){const e=At[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Na(e)}const w_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(r){return r.replace(w_,R_)}function R_(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vl(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function C_(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===mc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===$u?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function P_(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case $i:case Ji:t="ENVMAP_TYPE_CUBE";break;case Us:t="ENVMAP_TYPE_CUBE_UV";break}return t}function L_(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ji:t="ENVMAP_MODE_REFRACTION";break}return t}function D_(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case vc:t="ENVMAP_BLENDING_MULTIPLY";break;case gh:t="ENVMAP_BLENDING_MIX";break;case vh:t="ENVMAP_BLENDING_ADD";break}return t}function U_(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function I_(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=C_(e),c=P_(e),u=L_(e),h=D_(e),d=U_(e),p=e.isWebGL2?"":E_(e),g=y_(s),_=i.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[g].filter(vr).join(`
`),m.length>0&&(m+=`
`),f=[p,g].filter(vr).join(`
`),f.length>0&&(f+=`
`)):(m=[Vl(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),f=[p,Vl(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?At.tonemapping_pars_fragment:"",e.toneMapping!==Un?S_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",At.encodings_pars_fragment,M_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),o=Na(o),o=Gl(o,e),o=kl(o,e),a=Na(a),a=Gl(a,e),a=kl(a,e),o=Hl(o),a=Hl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=M+m+o,y=M+f+a,S=Bl(i,i.VERTEX_SHADER,x),b=Bl(i,i.FRAGMENT_SHADER,y);if(i.attachShader(_,S),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const v=i.getProgramInfoLog(_).trim(),w=i.getShaderInfoLog(S).trim(),z=i.getShaderInfoLog(b).trim();let k=!0,D=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,b);else{const N=zl(i,S,"vertex"),O=zl(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+N+`
`+O)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(w===""||z==="")&&(D=!1);D&&(this.diagnostics={runnable:k,programLog:v,vertexShader:{log:w,prefix:m},fragmentShader:{log:z,prefix:f}})}i.deleteShader(S),i.deleteShader(b);let R;this.getUniforms=function(){return R===void 0&&(R=new vs(i,_)),R};let L;return this.getAttributes=function(){return L===void 0&&(L=T_(i,_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=e.shaderName,this.id=g_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}let F_=0;class N_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new O_(t),e.set(t,n)),n}}class O_{constructor(t){this.id=F_++,this.code=t,this.usedTimes=0}}function B_(r,t,e,n,i,s,o){const a=new io,l=new N_,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function m(v,w,z,k,D){const N=k.fog,O=D.geometry,K=v.isMeshStandardMaterial?k.environment:null,B=(v.isMeshStandardMaterial?e:t).get(v.envMap||K),V=B&&B.mapping===Us?B.image.height:null,$=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ht=Z!==void 0?Z.length:0;let et=0;O.morphAttributes.position!==void 0&&(et=1),O.morphAttributes.normal!==void 0&&(et=2),O.morphAttributes.color!==void 0&&(et=3);let G,j,nt,at;if($){const kt=pn[$];G=kt.vertexShader,j=kt.fragmentShader}else G=v.vertexShader,j=v.fragmentShader,l.update(v),nt=l.getVertexShaderID(v),at=l.getFragmentShaderID(v);const P=r.getRenderTarget(),Tt=D.isInstancedMesh===!0,St=!!v.map,rt=!!v.matcap,xt=!!B,Ft=!!v.aoMap,pt=!!v.lightMap,Ct=!!v.bumpMap,ae=!!v.normalMap,fe=!!v.displacementMap,oe=!!v.emissiveMap,ne=!!v.metalnessMap,Nt=!!v.roughnessMap,jt=v.clearcoat>0,we=v.iridescence>0,A=v.sheen>0,E=v.transmission>0,H=jt&&!!v.clearcoatMap,Q=jt&&!!v.clearcoatNormalMap,tt=jt&&!!v.clearcoatRoughnessMap,st=we&&!!v.iridescenceMap,Mt=we&&!!v.iridescenceThicknessMap,ct=A&&!!v.sheenColorMap,q=A&&!!v.sheenRoughnessMap,ft=!!v.specularMap,mt=!!v.specularColorMap,gt=!!v.specularIntensityMap,lt=E&&!!v.transmissionMap,dt=E&&!!v.thicknessMap,Ut=!!v.gradientMap,Ot=!!v.alphaMap,Zt=v.alphaTest>0,C=!!v.extensions,W=!!O.attributes.uv1,J=!!O.attributes.uv2,ot=!!O.attributes.uv3;return{isWebGL2:u,shaderID:$,shaderName:v.type,vertexShader:G,fragmentShader:j,defines:v.defines,customVertexShaderID:nt,customFragmentShaderID:at,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:Tt,instancingColor:Tt&&D.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:P===null?r.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Mn,map:St,matcap:rt,envMap:xt,envMapMode:xt&&B.mapping,envMapCubeUVHeight:V,aoMap:Ft,lightMap:pt,bumpMap:Ct,normalMap:ae,displacementMap:d&&fe,emissiveMap:oe,normalMapObjectSpace:ae&&v.normalMapType===Vh,normalMapTangentSpace:ae&&v.normalMapType===Hh,metalnessMap:ne,roughnessMap:Nt,clearcoat:jt,clearcoatMap:H,clearcoatNormalMap:Q,clearcoatRoughnessMap:tt,iridescence:we,iridescenceMap:st,iridescenceThicknessMap:Mt,sheen:A,sheenColorMap:ct,sheenRoughnessMap:q,specularMap:ft,specularColorMap:mt,specularIntensityMap:gt,transmission:E,transmissionMap:lt,thicknessMap:dt,gradientMap:Ut,opaque:v.transparent===!1&&v.blending===Xi,alphaMap:Ot,alphaTest:Zt,combine:v.combine,mapUv:St&&_(v.map.channel),aoMapUv:Ft&&_(v.aoMap.channel),lightMapUv:pt&&_(v.lightMap.channel),bumpMapUv:Ct&&_(v.bumpMap.channel),normalMapUv:ae&&_(v.normalMap.channel),displacementMapUv:fe&&_(v.displacementMap.channel),emissiveMapUv:oe&&_(v.emissiveMap.channel),metalnessMapUv:ne&&_(v.metalnessMap.channel),roughnessMapUv:Nt&&_(v.roughnessMap.channel),clearcoatMapUv:H&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Q&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:q&&_(v.sheenRoughnessMap.channel),specularMapUv:ft&&_(v.specularMap.channel),specularColorMapUv:mt&&_(v.specularColorMap.channel),specularIntensityMapUv:gt&&_(v.specularIntensityMap.channel),transmissionMapUv:lt&&_(v.transmissionMap.channel),thicknessMapUv:dt&&_(v.thicknessMap.channel),alphaMapUv:Ot&&_(v.alphaMap.channel),vertexTangents:ae&&!!O.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:W,vertexUv2s:J,vertexUv3s:ot,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(St||Ot),fog:!!N,useFog:v.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:Un,useLegacyLights:r.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mn,flipSided:v.side===Pe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:C&&v.extensions.derivatives===!0,extensionFragDepth:C&&v.extensions.fragDepth===!0,extensionDrawBuffers:C&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:C&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const z in v.defines)w.push(z),w.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(M(w,v),x(w,v),w.push(r.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function M(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function x(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),v.push(a.mask)}function y(v){const w=g[v.type];let z;if(w){const k=pn[w];z=Af.clone(k.uniforms)}else z=v.uniforms;return z}function S(v,w){let z;for(let k=0,D=c.length;k<D;k++){const N=c[k];if(N.cacheKey===w){z=N,++z.usedTimes;break}}return z===void 0&&(z=new I_(r,w,v,s),c.push(z)),z}function b(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function R(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:S,releaseProgram:b,releaseShaderCache:R,programs:c,dispose:L}}function z_(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function G_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Wl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Xl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,d,p,g,_,m){let f=r[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),t++,f}function a(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||G_),n.length>1&&n.sort(d||Wl),i.length>1&&i.sort(d||Wl)}function u(){for(let h=t,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function k_(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Xl,r.set(n,[o])):i>=s.length?(o=new Xl,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function H_(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Xt};break;case"SpotLight":e={position:new F,direction:new F,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new F,halfWidth:new F,halfHeight:new F};break}return r[t.id]=e,e}}}function V_(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let W_=0;function X_(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function q_(r,t){const e=new H_,n=V_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new F);const s=new F,o=new ue,a=new ue;function l(u,h){let d=0,p=0,g=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let _=0,m=0,f=0,M=0,x=0,y=0,S=0,b=0,R=0,L=0;u.sort(X_);const v=h===!0?Math.PI:1;for(let z=0,k=u.length;z<k;z++){const D=u[z],N=D.color,O=D.intensity,K=D.distance,B=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=N.r*O*v,p+=N.g*O*v,g+=N.b*O*v;else if(D.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(D.sh.coefficients[V],O);else if(D.isDirectionalLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*v),D.castShadow){const $=D.shadow,Z=n.get(D);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=B,i.directionalShadowMatrix[_]=D.shadow.matrix,y++}i.directional[_]=V,_++}else if(D.isSpotLight){const V=e.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(N).multiplyScalar(O*v),V.distance=K,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,i.spot[f]=V;const $=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,$.updateMatrices(D),D.castShadow&&L++),i.spotLightMatrix[f]=$.matrix,D.castShadow){const Z=n.get(D);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,i.spotShadow[f]=Z,i.spotShadowMap[f]=B,b++}f++}else if(D.isRectAreaLight){const V=e.get(D);V.color.copy(N).multiplyScalar(O),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),i.rectArea[M]=V,M++}else if(D.isPointLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*v),V.distance=D.distance,V.decay=D.decay,D.castShadow){const $=D.shadow,Z=n.get(D);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=B,i.pointShadowMatrix[m]=D.shadow.matrix,S++}i.point[m]=V,m++}else if(D.isHemisphereLight){const V=e.get(D);V.skyColor.copy(D.color).multiplyScalar(O*v),V.groundColor.copy(D.groundColor).multiplyScalar(O*v),i.hemi[x]=V,x++}}M>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const w=i.hash;(w.directionalLength!==_||w.pointLength!==m||w.spotLength!==f||w.rectAreaLength!==M||w.hemiLength!==x||w.numDirectionalShadows!==y||w.numPointShadows!==S||w.numSpotShadows!==b||w.numSpotMaps!==R)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=M,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=b+R-L,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=L,w.directionalLength=_,w.pointLength=m,w.spotLength=f,w.rectAreaLength=M,w.hemiLength=x,w.numDirectionalShadows=y,w.numPointShadows=S,w.numSpotShadows=b,w.numSpotMaps=R,i.version=W_++)}function c(u,h){let d=0,p=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const y=u[M];if(y.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),d++}else if(y.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function ql(r,t){const e=new q_(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Y_(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new ql(r,t),e.set(s,[l])):o>=a.length?(l=new ql(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class j_ extends Wr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class K_ extends Wr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function J_(r,t,e){let n=new Ic;const i=new Gt,s=new Gt,o=new pe,a=new j_({depthPacking:kh}),l=new K_,c={},u=e.maxTextureSize,h={[Yn]:Pe,[Pe]:Yn,[mn]:mn},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:Z_,fragmentShader:$_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new hn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mc;let f=this.type;this.render=function(S,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const L=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Wn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=f!==Rn&&this.type===Rn,D=f===Rn&&this.type!==Rn;for(let N=0,O=S.length;N<O;N++){const K=S[N],B=K.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const V=B.getFrameExtents();if(i.multiply(V),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/V.x),i.x=s.x*V.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/V.y),i.y=s.y*V.y,B.mapSize.y=s.y)),B.map===null||k===!0||D===!0){const Z=this.type!==Rn?{minFilter:Te,magFilter:Te}:{};B.map!==null&&B.map.dispose(),B.map=new Mi(i.x,i.y,Z),B.map.texture.name=K.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const $=B.getViewportCount();for(let Z=0;Z<$;Z++){const ht=B.getViewport(Z);o.set(s.x*ht.x,s.y*ht.y,s.x*ht.z,s.y*ht.w),z.viewport(o),B.updateMatrices(K,Z),n=B.getFrustum(),y(b,R,B.camera,K,this.type)}B.isPointLightShadow!==!0&&this.type===Rn&&M(B,R),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(L,v,w)};function M(S,b){const R=t.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Mi(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(b,null,R,d,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(b,null,R,p,_,null)}function x(S,b,R,L){let v=null;const w=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)v=w;else if(v=R.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=v.uuid,k=b.uuid;let D=c[z];D===void 0&&(D={},c[z]=D);let N=D[k];N===void 0&&(N=v.clone(),D[k]=N),v=N}if(v.visible=b.visible,v.wireframe=b.wireframe,L===Rn?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=r.properties.get(v);z.light=R}return v}function y(S,b,R,L,v){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===Rn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const k=t.update(S),D=S.material;if(Array.isArray(D)){const N=k.groups;for(let O=0,K=N.length;O<K;O++){const B=N[O],V=D[B.materialIndex];if(V&&V.visible){const $=x(S,V,L,v);r.renderBufferDirect(R,null,k,$,S,B)}}}else if(D.visible){const N=x(S,D,L,v);r.renderBufferDirect(R,null,k,N,S,null)}}const z=S.children;for(let k=0,D=z.length;k<D;k++)y(z[k],b,R,L,v)}}function Q_(r,t,e){const n=e.isWebGL2;function i(){let C=!1;const W=new pe;let J=null;const ot=new pe(0,0,0,0);return{setMask:function(ut){J!==ut&&!C&&(r.colorMask(ut,ut,ut,ut),J=ut)},setLocked:function(ut){C=ut},setClear:function(ut,kt,Ht,me,Nn){Nn===!0&&(ut*=me,kt*=me,Ht*=me),W.set(ut,kt,Ht,me),ot.equals(W)===!1&&(r.clearColor(ut,kt,Ht,me),ot.copy(W))},reset:function(){C=!1,J=null,ot.set(-1,0,0,0)}}}function s(){let C=!1,W=null,J=null,ot=null;return{setTest:function(ut){ut?P(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(ut){W!==ut&&!C&&(r.depthMask(ut),W=ut)},setFunc:function(ut){if(J!==ut){switch(ut){case uh:r.depthFunc(r.NEVER);break;case hh:r.depthFunc(r.ALWAYS);break;case fh:r.depthFunc(r.LESS);break;case Ca:r.depthFunc(r.LEQUAL);break;case dh:r.depthFunc(r.EQUAL);break;case ph:r.depthFunc(r.GEQUAL);break;case mh:r.depthFunc(r.GREATER);break;case _h:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ut}},setLocked:function(ut){C=ut},setClear:function(ut){ot!==ut&&(r.clearDepth(ut),ot=ut)},reset:function(){C=!1,W=null,J=null,ot=null}}}function o(){let C=!1,W=null,J=null,ot=null,ut=null,kt=null,Ht=null,me=null,Nn=null;return{setTest:function($t){C||($t?P(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function($t){W!==$t&&!C&&(r.stencilMask($t),W=$t)},setFunc:function($t,We,fn){(J!==$t||ot!==We||ut!==fn)&&(r.stencilFunc($t,We,fn),J=$t,ot=We,ut=fn)},setOp:function($t,We,fn){(kt!==$t||Ht!==We||me!==fn)&&(r.stencilOp($t,We,fn),kt=$t,Ht=We,me=fn)},setLocked:function($t){C=$t},setClear:function($t){Nn!==$t&&(r.clearStencil($t),Nn=$t)},reset:function(){C=!1,W=null,J=null,ot=null,ut=null,kt=null,Ht=null,me=null,Nn=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,M=null,x=null,y=null,S=null,b=null,R=null,L=null,v=!1,w=null,z=null,k=null,D=null,N=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,B=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=B>=1):V.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=B>=2);let $=null,Z={};const ht=r.getParameter(r.SCISSOR_BOX),et=r.getParameter(r.VIEWPORT),G=new pe().fromArray(ht),j=new pe().fromArray(et);function nt(C,W,J,ot){const ut=new Uint8Array(4),kt=r.createTexture();r.bindTexture(C,kt),r.texParameteri(C,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(C,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ht=0;Ht<J;Ht++)n&&(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)?r.texImage3D(W,0,r.RGBA,1,1,ot,0,r.RGBA,r.UNSIGNED_BYTE,ut):r.texImage2D(W+Ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ut);return kt}const at={};at[r.TEXTURE_2D]=nt(r.TEXTURE_2D,r.TEXTURE_2D,1),at[r.TEXTURE_CUBE_MAP]=nt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(at[r.TEXTURE_2D_ARRAY]=nt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),at[r.TEXTURE_3D]=nt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),P(r.DEPTH_TEST),l.setFunc(Ca),fe(!1),oe(Lo),P(r.CULL_FACE),Ct(Wn);function P(C){d[C]!==!0&&(r.enable(C),d[C]=!0)}function Tt(C){d[C]!==!1&&(r.disable(C),d[C]=!1)}function St(C,W){return p[C]!==W?(r.bindFramebuffer(C,W),p[C]=W,n&&(C===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=W),C===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=W)),!0):!1}function rt(C,W){let J=_,ot=!1;if(C)if(J=g.get(W),J===void 0&&(J=[],g.set(W,J)),C.isWebGLMultipleRenderTargets){const ut=C.texture;if(J.length!==ut.length||J[0]!==r.COLOR_ATTACHMENT0){for(let kt=0,Ht=ut.length;kt<Ht;kt++)J[kt]=r.COLOR_ATTACHMENT0+kt;J.length=ut.length,ot=!0}}else J[0]!==r.COLOR_ATTACHMENT0&&(J[0]=r.COLOR_ATTACHMENT0,ot=!0);else J[0]!==r.BACK&&(J[0]=r.BACK,ot=!0);ot&&(e.isWebGL2?r.drawBuffers(J):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function xt(C){return m!==C?(r.useProgram(C),m=C,!0):!1}const Ft={[ki]:r.FUNC_ADD,[Qu]:r.FUNC_SUBTRACT,[th]:r.FUNC_REVERSE_SUBTRACT};if(n)Ft[Fo]=r.MIN,Ft[No]=r.MAX;else{const C=t.get("EXT_blend_minmax");C!==null&&(Ft[Fo]=C.MIN_EXT,Ft[No]=C.MAX_EXT)}const pt={[eh]:r.ZERO,[nh]:r.ONE,[ih]:r.SRC_COLOR,[_c]:r.SRC_ALPHA,[ch]:r.SRC_ALPHA_SATURATE,[oh]:r.DST_COLOR,[sh]:r.DST_ALPHA,[rh]:r.ONE_MINUS_SRC_COLOR,[gc]:r.ONE_MINUS_SRC_ALPHA,[lh]:r.ONE_MINUS_DST_COLOR,[ah]:r.ONE_MINUS_DST_ALPHA};function Ct(C,W,J,ot,ut,kt,Ht,me){if(C===Wn){f===!0&&(Tt(r.BLEND),f=!1);return}if(f===!1&&(P(r.BLEND),f=!0),C!==Ju){if(C!==M||me!==v){if((x!==ki||b!==ki)&&(r.blendEquation(r.FUNC_ADD),x=ki,b=ki),me)switch(C){case Xi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Do:r.blendFunc(r.ONE,r.ONE);break;case Uo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Io:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Xi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Do:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Uo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Io:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}y=null,S=null,R=null,L=null,M=C,v=me}return}ut=ut||W,kt=kt||J,Ht=Ht||ot,(W!==x||ut!==b)&&(r.blendEquationSeparate(Ft[W],Ft[ut]),x=W,b=ut),(J!==y||ot!==S||kt!==R||Ht!==L)&&(r.blendFuncSeparate(pt[J],pt[ot],pt[kt],pt[Ht]),y=J,S=ot,R=kt,L=Ht),M=C,v=!1}function ae(C,W){C.side===mn?Tt(r.CULL_FACE):P(r.CULL_FACE);let J=C.side===Pe;W&&(J=!J),fe(J),C.blending===Xi&&C.transparent===!1?Ct(Wn):Ct(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const ot=C.stencilWrite;c.setTest(ot),ot&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Nt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?P(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function fe(C){w!==C&&(C?r.frontFace(r.CW):r.frontFace(r.CCW),w=C)}function oe(C){C!==Ku?(P(r.CULL_FACE),C!==z&&(C===Lo?r.cullFace(r.BACK):C===Zu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),z=C}function ne(C){C!==k&&(K&&r.lineWidth(C),k=C)}function Nt(C,W,J){C?(P(r.POLYGON_OFFSET_FILL),(D!==W||N!==J)&&(r.polygonOffset(W,J),D=W,N=J)):Tt(r.POLYGON_OFFSET_FILL)}function jt(C){C?P(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function we(C){C===void 0&&(C=r.TEXTURE0+O-1),$!==C&&(r.activeTexture(C),$=C)}function A(C,W,J){J===void 0&&($===null?J=r.TEXTURE0+O-1:J=$);let ot=Z[J];ot===void 0&&(ot={type:void 0,texture:void 0},Z[J]=ot),(ot.type!==C||ot.texture!==W)&&($!==J&&(r.activeTexture(J),$=J),r.bindTexture(C,W||at[C]),ot.type=C,ot.texture=W)}function E(){const C=Z[$];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function H(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function st(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Mt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ct(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function q(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ft(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function mt(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function gt(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function lt(C){G.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),G.copy(C))}function dt(C){j.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),j.copy(C))}function Ut(C,W){let J=h.get(W);J===void 0&&(J=new WeakMap,h.set(W,J));let ot=J.get(C);ot===void 0&&(ot=r.getUniformBlockIndex(W,C.name),J.set(C,ot))}function Ot(C,W){const ot=h.get(W).get(C);u.get(W)!==ot&&(r.uniformBlockBinding(W,ot,C.__bindingPointIndex),u.set(W,ot))}function Zt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},$=null,Z={},p={},g=new WeakMap,_=[],m=null,f=!1,M=null,x=null,y=null,S=null,b=null,R=null,L=null,v=!1,w=null,z=null,k=null,D=null,N=null,G.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:P,disable:Tt,bindFramebuffer:St,drawBuffers:rt,useProgram:xt,setBlending:Ct,setMaterial:ae,setFlipSided:fe,setCullFace:oe,setLineWidth:ne,setPolygonOffset:Nt,setScissorTest:jt,activeTexture:we,bindTexture:A,unbindTexture:E,compressedTexImage2D:H,compressedTexImage3D:Q,texImage2D:mt,texImage3D:gt,updateUBOMapping:Ut,uniformBlockBinding:Ot,texStorage2D:q,texStorage3D:ft,texSubImage2D:tt,texSubImage3D:st,compressedTexSubImage2D:Mt,compressedTexSubImage3D:ct,scissor:lt,viewport:dt,reset:Zt}}function tg(r,t,e,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,E){return f?new OffscreenCanvas(A,E):Ur("canvas")}function x(A,E,H,Q){let tt=1;if((A.width>Q||A.height>Q)&&(tt=Q/Math.max(A.width,A.height)),tt<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const st=E?yc:Math.floor,Mt=st(tt*A.width),ct=st(tt*A.height);_===void 0&&(_=M(Mt,ct));const q=H?M(Mt,ct):_;return q.width=Mt,q.height=ct,q.getContext("2d").drawImage(A,0,0,Mt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Mt+"x"+ct+")."),q}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return Fa(A.width)&&Fa(A.height)}function S(A){return a?!1:A.wrapS!==on||A.wrapT!==on||A.minFilter!==Te&&A.minFilter!==je}function b(A,E){return A.generateMipmaps&&E&&A.minFilter!==Te&&A.minFilter!==je}function R(A){r.generateMipmap(A)}function L(A,E,H,Q,tt=!1){if(a===!1)return E;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let st=E;return E===r.RED&&(H===r.FLOAT&&(st=r.R32F),H===r.HALF_FLOAT&&(st=r.R16F),H===r.UNSIGNED_BYTE&&(st=r.R8)),E===r.RG&&(H===r.FLOAT&&(st=r.RG32F),H===r.HALF_FLOAT&&(st=r.RG16F),H===r.UNSIGNED_BYTE&&(st=r.RG8)),E===r.RGBA&&(H===r.FLOAT&&(st=r.RGBA32F),H===r.HALF_FLOAT&&(st=r.RGBA16F),H===r.UNSIGNED_BYTE&&(st=Q===yt&&tt===!1?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(st=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(st=r.RGB5_A1)),(st===r.R16F||st===r.R32F||st===r.RG16F||st===r.RG32F||st===r.RGBA16F||st===r.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function v(A,E,H){return b(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==Te&&A.minFilter!==je?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function w(A){return A===Te||A===Oo||A===Ws?r.NEAREST:r.LINEAR}function z(A){const E=A.target;E.removeEventListener("dispose",z),D(E),E.isVideoTexture&&g.delete(E)}function k(A){const E=A.target;E.removeEventListener("dispose",k),O(E)}function D(A){const E=n.get(A);if(E.__webglInit===void 0)return;const H=A.source,Q=m.get(H);if(Q){const tt=Q[E.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&N(A),Object.keys(Q).length===0&&m.delete(H)}n.remove(A)}function N(A){const E=n.get(A);r.deleteTexture(E.__webglTexture);const H=A.source,Q=m.get(H);delete Q[E.__cacheKey],o.memory.textures--}function O(A){const E=A.texture,H=n.get(A),Q=n.get(E);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++)r.deleteFramebuffer(H.__webglFramebuffer[tt]),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[tt]);else{if(r.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let tt=0;tt<H.__webglColorRenderbuffer.length;tt++)H.__webglColorRenderbuffer[tt]&&r.deleteRenderbuffer(H.__webglColorRenderbuffer[tt]);H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let tt=0,st=E.length;tt<st;tt++){const Mt=n.get(E[tt]);Mt.__webglTexture&&(r.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(E[tt])}n.remove(E),n.remove(A)}let K=0;function B(){K=0}function V(){const A=K;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),K+=1,A}function $(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function Z(A,E){const H=n.get(A);if(A.isVideoTexture&&jt(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(H,A,E);return}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+E)}function ht(A,E){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Tt(H,A,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+E)}function et(A,E){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Tt(H,A,E);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+E)}function G(A,E){const H=n.get(A);if(A.version>0&&H.__version!==A.version){St(H,A,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+E)}const j={[Da]:r.REPEAT,[on]:r.CLAMP_TO_EDGE,[Ua]:r.MIRRORED_REPEAT},nt={[Te]:r.NEAREST,[Oo]:r.NEAREST_MIPMAP_NEAREST,[Ws]:r.NEAREST_MIPMAP_LINEAR,[je]:r.LINEAR,[Th]:r.LINEAR_MIPMAP_NEAREST,[Pr]:r.LINEAR_MIPMAP_LINEAR};function at(A,E,H){if(H?(r.texParameteri(A,r.TEXTURE_WRAP_S,j[E.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,j[E.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,j[E.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,nt[E.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,nt[E.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==on||E.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,w(E.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==Te&&E.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Te||E.minFilter!==Ws&&E.minFilter!==Pr||E.type===hi&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===Lr&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function P(A,E){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",z));const Q=E.source;let tt=m.get(Q);tt===void 0&&(tt={},m.set(Q,tt));const st=$(E);if(st!==A.__cacheKey){tt[st]===void 0&&(tt[st]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),tt[st].usedTimes++;const Mt=tt[A.__cacheKey];Mt!==void 0&&(tt[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&N(E)),A.__cacheKey=st,A.__webglTexture=tt[st].texture}return H}function Tt(A,E,H){let Q=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=r.TEXTURE_3D);const tt=P(A,E),st=E.source;e.bindTexture(Q,A.__webglTexture,r.TEXTURE0+H);const Mt=n.get(st);if(st.version!==Mt.__version||tt===!0){e.activeTexture(r.TEXTURE0+H),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const ct=S(E)&&y(E.image)===!1;let q=x(E.image,ct,!1,u);q=we(E,q);const ft=y(q)||a,mt=s.convert(E.format,E.colorSpace);let gt=s.convert(E.type),lt=L(E.internalFormat,mt,gt,E.colorSpace);at(Q,E,ft);let dt;const Ut=E.mipmaps,Ot=a&&E.isVideoTexture!==!0,Zt=Mt.__version===void 0||tt===!0,C=v(E,q,ft);if(E.isDepthTexture)lt=r.DEPTH_COMPONENT,a?E.type===hi?lt=r.DEPTH_COMPONENT32F:E.type===ui?lt=r.DEPTH_COMPONENT24:E.type===qi?lt=r.DEPTH24_STENCIL8:lt=r.DEPTH_COMPONENT16:E.type===hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===di&&lt===r.DEPTH_COMPONENT&&E.type!==Mc&&E.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ui,gt=s.convert(E.type)),E.format===Qi&&lt===r.DEPTH_COMPONENT&&(lt=r.DEPTH_STENCIL,E.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=qi,gt=s.convert(E.type))),Zt&&(Ot?e.texStorage2D(r.TEXTURE_2D,1,lt,q.width,q.height):e.texImage2D(r.TEXTURE_2D,0,lt,q.width,q.height,0,mt,gt,null));else if(E.isDataTexture)if(Ut.length>0&&ft){Ot&&Zt&&e.texStorage2D(r.TEXTURE_2D,C,lt,Ut[0].width,Ut[0].height);for(let W=0,J=Ut.length;W<J;W++)dt=Ut[W],Ot?e.texSubImage2D(r.TEXTURE_2D,W,0,0,dt.width,dt.height,mt,gt,dt.data):e.texImage2D(r.TEXTURE_2D,W,lt,dt.width,dt.height,0,mt,gt,dt.data);E.generateMipmaps=!1}else Ot?(Zt&&e.texStorage2D(r.TEXTURE_2D,C,lt,q.width,q.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,q.width,q.height,mt,gt,q.data)):e.texImage2D(r.TEXTURE_2D,0,lt,q.width,q.height,0,mt,gt,q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ot&&Zt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,C,lt,Ut[0].width,Ut[0].height,q.depth);for(let W=0,J=Ut.length;W<J;W++)dt=Ut[W],E.format!==ln?mt!==null?Ot?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,dt.width,dt.height,q.depth,mt,dt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,lt,dt.width,dt.height,q.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?e.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,dt.width,dt.height,q.depth,mt,gt,dt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,W,lt,dt.width,dt.height,q.depth,0,mt,gt,dt.data)}else{Ot&&Zt&&e.texStorage2D(r.TEXTURE_2D,C,lt,Ut[0].width,Ut[0].height);for(let W=0,J=Ut.length;W<J;W++)dt=Ut[W],E.format!==ln?mt!==null?Ot?e.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,dt.width,dt.height,mt,dt.data):e.compressedTexImage2D(r.TEXTURE_2D,W,lt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?e.texSubImage2D(r.TEXTURE_2D,W,0,0,dt.width,dt.height,mt,gt,dt.data):e.texImage2D(r.TEXTURE_2D,W,lt,dt.width,dt.height,0,mt,gt,dt.data)}else if(E.isDataArrayTexture)Ot?(Zt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,C,lt,q.width,q.height,q.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,mt,gt,q.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,lt,q.width,q.height,q.depth,0,mt,gt,q.data);else if(E.isData3DTexture)Ot?(Zt&&e.texStorage3D(r.TEXTURE_3D,C,lt,q.width,q.height,q.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,mt,gt,q.data)):e.texImage3D(r.TEXTURE_3D,0,lt,q.width,q.height,q.depth,0,mt,gt,q.data);else if(E.isFramebufferTexture){if(Zt)if(Ot)e.texStorage2D(r.TEXTURE_2D,C,lt,q.width,q.height);else{let W=q.width,J=q.height;for(let ot=0;ot<C;ot++)e.texImage2D(r.TEXTURE_2D,ot,lt,W,J,0,mt,gt,null),W>>=1,J>>=1}}else if(Ut.length>0&&ft){Ot&&Zt&&e.texStorage2D(r.TEXTURE_2D,C,lt,Ut[0].width,Ut[0].height);for(let W=0,J=Ut.length;W<J;W++)dt=Ut[W],Ot?e.texSubImage2D(r.TEXTURE_2D,W,0,0,mt,gt,dt):e.texImage2D(r.TEXTURE_2D,W,lt,mt,gt,dt);E.generateMipmaps=!1}else Ot?(Zt&&e.texStorage2D(r.TEXTURE_2D,C,lt,q.width,q.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,mt,gt,q)):e.texImage2D(r.TEXTURE_2D,0,lt,mt,gt,q);b(E,ft)&&R(Q),Mt.__version=st.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function St(A,E,H){if(E.image.length!==6)return;const Q=P(A,E),tt=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+H);const st=n.get(tt);if(tt.version!==st.__version||Q===!0){e.activeTexture(r.TEXTURE0+H),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const Mt=E.isCompressedTexture||E.image[0].isCompressedTexture,ct=E.image[0]&&E.image[0].isDataTexture,q=[];for(let W=0;W<6;W++)!Mt&&!ct?q[W]=x(E.image[W],!1,!0,c):q[W]=ct?E.image[W].image:E.image[W],q[W]=we(E,q[W]);const ft=q[0],mt=y(ft)||a,gt=s.convert(E.format,E.colorSpace),lt=s.convert(E.type),dt=L(E.internalFormat,gt,lt,E.colorSpace),Ut=a&&E.isVideoTexture!==!0,Ot=st.__version===void 0||Q===!0;let Zt=v(E,ft,mt);at(r.TEXTURE_CUBE_MAP,E,mt);let C;if(Mt){Ut&&Ot&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Zt,dt,ft.width,ft.height);for(let W=0;W<6;W++){C=q[W].mipmaps;for(let J=0;J<C.length;J++){const ot=C[J];E.format!==ln?gt!==null?Ut?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,J,0,0,ot.width,ot.height,gt,ot.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,J,dt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,J,0,0,ot.width,ot.height,gt,lt,ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,J,dt,ot.width,ot.height,0,gt,lt,ot.data)}}}else{C=E.mipmaps,Ut&&Ot&&(C.length>0&&Zt++,e.texStorage2D(r.TEXTURE_CUBE_MAP,Zt,dt,q[0].width,q[0].height));for(let W=0;W<6;W++)if(ct){Ut?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,q[W].width,q[W].height,gt,lt,q[W].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,dt,q[W].width,q[W].height,0,gt,lt,q[W].data);for(let J=0;J<C.length;J++){const ut=C[J].image[W].image;Ut?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,J+1,0,0,ut.width,ut.height,gt,lt,ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,J+1,dt,ut.width,ut.height,0,gt,lt,ut.data)}}else{Ut?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,gt,lt,q[W]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,dt,gt,lt,q[W]);for(let J=0;J<C.length;J++){const ot=C[J];Ut?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,J+1,0,0,gt,lt,ot.image[W]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,J+1,dt,gt,lt,ot.image[W])}}}b(E,mt)&&R(r.TEXTURE_CUBE_MAP),st.__version=tt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function rt(A,E,H,Q,tt){const st=s.convert(H.format,H.colorSpace),Mt=s.convert(H.type),ct=L(H.internalFormat,st,Mt,H.colorSpace);n.get(E).__hasExternalTextures||(tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,0,ct,E.width,E.height,E.depth,0,st,Mt,null):e.texImage2D(tt,0,ct,E.width,E.height,0,st,Mt,null)),e.bindFramebuffer(r.FRAMEBUFFER,A),Nt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,tt,n.get(H).__webglTexture,0,ne(E)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,tt,n.get(H).__webglTexture,0),e.bindFramebuffer(r.FRAMEBUFFER,null)}function xt(A,E,H){if(r.bindRenderbuffer(r.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let Q=r.DEPTH_COMPONENT16;if(H||Nt(E)){const tt=E.depthTexture;tt&&tt.isDepthTexture&&(tt.type===hi?Q=r.DEPTH_COMPONENT32F:tt.type===ui&&(Q=r.DEPTH_COMPONENT24));const st=ne(E);Nt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,st,Q,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,st,Q,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,Q,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const Q=ne(E);H&&Nt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,E.width,E.height):Nt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{const Q=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let tt=0;tt<Q.length;tt++){const st=Q[tt],Mt=s.convert(st.format,st.colorSpace),ct=s.convert(st.type),q=L(st.internalFormat,Mt,ct,st.colorSpace),ft=ne(E);H&&Nt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,q,E.width,E.height):Nt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,q,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,q,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ft(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);const Q=n.get(E.depthTexture).__webglTexture,tt=ne(E);if(E.depthTexture.format===di)Nt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Qi)Nt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function pt(A){const E=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ft(E.__webglFramebuffer,A)}else if(H){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]=r.createRenderbuffer(),xt(E.__webglDepthbuffer[Q],A,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),xt(E.__webglDepthbuffer,A,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(A,E,H){const Q=n.get(A);E!==void 0&&rt(Q.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),H!==void 0&&pt(A)}function ae(A){const E=A.texture,H=n.get(A),Q=n.get(E);A.addEventListener("dispose",k),A.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=E.version,o.memory.textures++);const tt=A.isWebGLCubeRenderTarget===!0,st=A.isWebGLMultipleRenderTargets===!0,Mt=y(A)||a;if(tt){H.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)H.__webglFramebuffer[ct]=r.createFramebuffer()}else{if(H.__webglFramebuffer=r.createFramebuffer(),st)if(i.drawBuffers){const ct=A.texture;for(let q=0,ft=ct.length;q<ft;q++){const mt=n.get(ct[q]);mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Nt(A)===!1){const ct=st?E:[E];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let q=0;q<ct.length;q++){const ft=ct[q];H.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[q]);const mt=s.convert(ft.format,ft.colorSpace),gt=s.convert(ft.type),lt=L(ft.internalFormat,mt,gt,ft.colorSpace,A.isXRRenderTarget===!0),dt=ne(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,lt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,H.__webglColorRenderbuffer[q])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),xt(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(tt){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),at(r.TEXTURE_CUBE_MAP,E,Mt);for(let ct=0;ct<6;ct++)rt(H.__webglFramebuffer[ct],A,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct);b(E,Mt)&&R(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){const ct=A.texture;for(let q=0,ft=ct.length;q<ft;q++){const mt=ct[q],gt=n.get(mt);e.bindTexture(r.TEXTURE_2D,gt.__webglTexture),at(r.TEXTURE_2D,mt,Mt),rt(H.__webglFramebuffer,A,mt,r.COLOR_ATTACHMENT0+q,r.TEXTURE_2D),b(mt,Mt)&&R(r.TEXTURE_2D)}e.unbindTexture()}else{let ct=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ct=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,Q.__webglTexture),at(ct,E,Mt),rt(H.__webglFramebuffer,A,E,r.COLOR_ATTACHMENT0,ct),b(E,Mt)&&R(ct),e.unbindTexture()}A.depthBuffer&&pt(A)}function fe(A){const E=y(A)||a,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0,tt=H.length;Q<tt;Q++){const st=H[Q];if(b(st,E)){const Mt=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ct=n.get(st).__webglTexture;e.bindTexture(Mt,ct),R(Mt),e.unbindTexture()}}}function oe(A){if(a&&A.samples>0&&Nt(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,Q=A.height;let tt=r.COLOR_BUFFER_BIT;const st=[],Mt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=n.get(A),q=A.isWebGLMultipleRenderTargets===!0;if(q)for(let ft=0;ft<E.length;ft++)e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ft=0;ft<E.length;ft++){st.push(r.COLOR_ATTACHMENT0+ft),A.depthBuffer&&st.push(Mt);const mt=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(mt===!1&&(A.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),q&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ct.__webglColorRenderbuffer[ft]),mt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Mt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Mt])),q){const gt=n.get(E[ft]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,gt,0)}r.blitFramebuffer(0,0,H,Q,0,0,H,Q,tt,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),q)for(let ft=0;ft<E.length;ft++){e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,ct.__webglColorRenderbuffer[ft]);const mt=n.get(E[ft]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,mt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function ne(A){return Math.min(h,A.samples)}function Nt(A){const E=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function jt(A){const E=o.render.frame;g.get(A)!==E&&(g.set(A,E),A.update())}function we(A,E){const H=A.colorSpace,Q=A.format,tt=A.type;return A.isCompressedTexture===!0||A.format===Ia||H!==Mn&&H!==mi&&(H===yt?a===!1?t.has("EXT_sRGB")===!0&&Q===ln?(A.format=Ia,A.minFilter=je,A.generateMipmaps=!1):E=bc.sRGBToLinear(E):(Q!==ln||tt!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=ht,this.setTexture3D=et,this.setTextureCube=G,this.rebindTextures=Ct,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Nt}function eg(r,t,e){const n=e.isWebGL2;function i(s,o=mi){let a;if(s===xi)return r.UNSIGNED_BYTE;if(s===Rh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ch)return r.UNSIGNED_SHORT_5_5_5_1;if(s===bh)return r.BYTE;if(s===Ah)return r.SHORT;if(s===Mc)return r.UNSIGNED_SHORT;if(s===wh)return r.INT;if(s===ui)return r.UNSIGNED_INT;if(s===hi)return r.FLOAT;if(s===Lr)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ph)return r.ALPHA;if(s===ln)return r.RGBA;if(s===Lh)return r.LUMINANCE;if(s===Dh)return r.LUMINANCE_ALPHA;if(s===di)return r.DEPTH_COMPONENT;if(s===Qi)return r.DEPTH_STENCIL;if(s===Ia)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Uh)return r.RED;if(s===Ih)return r.RED_INTEGER;if(s===Fh)return r.RG;if(s===Nh)return r.RG_INTEGER;if(s===Oh)return r.RGBA_INTEGER;if(s===Xs||s===qs||s===Ys||s===js)if(o===yt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Xs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Xs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ys)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===js)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bo||s===zo||s===Go||s===ko)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Bo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Go)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ko)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ho||s===Vo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ho)return o===yt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Vo)return o===yt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wo||s===Xo||s===qo||s===Yo||s===jo||s===Ko||s===Zo||s===$o||s===Jo||s===Qo||s===tl||s===el||s===nl||s===il)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Wo)return o===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xo)return o===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qo)return o===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yo)return o===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jo)return o===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ko)return o===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zo)return o===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$o)return o===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jo)return o===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qo)return o===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tl)return o===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===el)return o===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nl)return o===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===il)return o===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ks)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Ks)return o===yt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===zh||s===rl||s===sl||s===al)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ks)return a.COMPRESSED_RED_RGTC1_EXT;if(s===rl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===al)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qi?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class ng extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xr extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ig={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class rg extends Le{constructor(t,e,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:di,u!==di&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===di&&(n=ui),n===void 0&&u===Qi&&(n=qi),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Te,this.minFilter=l!==void 0?l:Te,this.flipY=!1,this.generateMipmaps=!1}}class sg extends lr{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=e.getContextAttributes();let m=null,f=null;const M=[],x=[],y=new Set,S=new Map,b=new Ke;b.layers.enable(1),b.viewport=new pe;const R=new Ke;R.layers.enable(2),R.viewport=new pe;const L=[b,R],v=new ng;v.layers.enable(1),v.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=M[G];return j===void 0&&(j=new ga,M[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=M[G];return j===void 0&&(j=new ga,M[G]=j),j.getGripSpace()},this.getHand=function(G){let j=M[G];return j===void 0&&(j=new ga,M[G]=j),j.getHandSpace()};function k(G){const j=x.indexOf(G.inputSource);if(j===-1)return;const nt=M[j];nt!==void 0&&(nt.update(G.inputSource,G.frame,c||o),nt.dispatchEvent({type:G.type,data:G.inputSource}))}function D(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",N);for(let G=0;G<M.length;G++){const j=x[G];j!==null&&(x[G]=null,M[G].disconnect(j))}w=null,z=null,t.setRenderTarget(m),p=null,d=null,h=null,i=null,f=null,et.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",D),i.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:p}),f=new Mi(p.framebufferWidth,p.framebufferHeight,{format:ln,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,nt=null,at=null;_.depth&&(at=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=_.stencil?Qi:di,nt=_.stencil?qi:ui);const P={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(P),i.updateRenderState({layers:[d]}),f=new Mi(d.textureWidth,d.textureHeight,{format:ln,type:xi,depthTexture:new rg(d.textureWidth,d.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Tt=t.properties.get(f);Tt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(G){for(let j=0;j<G.removed.length;j++){const nt=G.removed[j],at=x.indexOf(nt);at>=0&&(x[at]=null,M[at].disconnect(nt))}for(let j=0;j<G.added.length;j++){const nt=G.added[j];let at=x.indexOf(nt);if(at===-1){for(let Tt=0;Tt<M.length;Tt++)if(Tt>=x.length){x.push(nt),at=Tt;break}else if(x[Tt]===null){x[Tt]=nt,at=Tt;break}if(at===-1)break}const P=M[at];P&&P.connect(nt)}}const O=new F,K=new F;function B(G,j,nt){O.setFromMatrixPosition(j.matrixWorld),K.setFromMatrixPosition(nt.matrixWorld);const at=O.distanceTo(K),P=j.projectionMatrix.elements,Tt=nt.projectionMatrix.elements,St=P[14]/(P[10]-1),rt=P[14]/(P[10]+1),xt=(P[9]+1)/P[5],Ft=(P[9]-1)/P[5],pt=(P[8]-1)/P[0],Ct=(Tt[8]+1)/Tt[0],ae=St*pt,fe=St*Ct,oe=at/(-pt+Ct),ne=oe*-pt;j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ne),G.translateZ(oe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Nt=St+oe,jt=rt+oe,we=ae-ne,A=fe+(at-ne),E=xt*rt/jt*Nt,H=Ft*rt/jt*Nt;G.projectionMatrix.makePerspective(we,A,E,H,Nt,jt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function V(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;v.near=R.near=b.near=G.near,v.far=R.far=b.far=G.far,(w!==v.near||z!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,z=v.far);const j=G.parent,nt=v.cameras;V(v,j);for(let at=0;at<nt.length;at++)V(nt[at],j);nt.length===2?B(v,b,R):v.projectionMatrix.copy(b.projectionMatrix),$(G,v,j)};function $(G,j,nt){nt===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(nt.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);const at=G.children;for(let P=0,Tt=at.length;P<Tt;P++)at[P].updateMatrixWorld(!0);G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Dr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.getPlanes=function(){return y};let Z=null;function ht(G,j){if(u=j.getViewerPose(c||o),g=j,u!==null){const nt=u.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let at=!1;nt.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let P=0;P<nt.length;P++){const Tt=nt[P];let St=null;if(p!==null)St=p.getViewport(Tt);else{const xt=h.getViewSubImage(d,Tt);St=xt.viewport,P===0&&(t.setRenderTargetTextures(f,xt.colorTexture,d.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(f))}let rt=L[P];rt===void 0&&(rt=new Ke,rt.layers.enable(P),rt.viewport=new pe,L[P]=rt),rt.matrix.fromArray(Tt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Tt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(St.x,St.y,St.width,St.height),P===0&&(v.matrix.copy(rt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(rt)}}for(let nt=0;nt<M.length;nt++){const at=x[nt],P=M[nt];at!==null&&P!==void 0&&P.update(at,j,c||o)}if(Z&&Z(G,j),j.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let nt=null;for(const at of y)j.detectedPlanes.has(at)||(nt===null&&(nt=[]),nt.push(at));if(nt!==null)for(const at of nt)y.delete(at),S.delete(at),n.dispatchEvent({type:"planeremoved",data:at});for(const at of j.detectedPlanes)if(!y.has(at))y.add(at),S.set(at,j.lastChangedTime),n.dispatchEvent({type:"planeadded",data:at});else{const P=S.get(at);at.lastChangedTime>P&&(S.set(at,at.lastChangedTime),n.dispatchEvent({type:"planechanged",data:at}))}}g=null}const et=new Fc;et.setAnimationLoop(ht),this.setAnimationLoop=function(G){Z=G},this.dispose=function(){}}}function ag(r,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Lc(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,M,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Pe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Pe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=r.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pe&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function og(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=i[M.id];y===void 0&&(g(M),y=u(M),i[M.id]=y,M.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(M,S);const b=t.render.frame;s[M.id]!==b&&(d(M),s[M.id]=b)}function u(M){const x=h();M.__bindingPointIndex=x;const y=r.createBuffer(),S=M.__size,b=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,S,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=i[M.id],y=M.uniforms,S=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let b=0,R=y.length;b<R;b++){const L=y[b];if(p(L,b,S)===!0){const v=L.__offset,w=Array.isArray(L.value)?L.value:[L.value];let z=0;for(let k=0;k<w.length;k++){const D=w[k],N=_(D);typeof D=="number"?(L.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,v+z,L.__data)):D.isMatrix3?(L.__data[0]=D.elements[0],L.__data[1]=D.elements[1],L.__data[2]=D.elements[2],L.__data[3]=D.elements[0],L.__data[4]=D.elements[3],L.__data[5]=D.elements[4],L.__data[6]=D.elements[5],L.__data[7]=D.elements[0],L.__data[8]=D.elements[6],L.__data[9]=D.elements[7],L.__data[10]=D.elements[8],L.__data[11]=D.elements[0]):(D.toArray(L.__data,z),z+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,v,L.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(M,x,y){const S=M.value;if(y[x]===void 0){if(typeof S=="number")y[x]=S;else{const b=Array.isArray(S)?S:[S],R=[];for(let L=0;L<b.length;L++)R.push(b[L].clone());y[x]=R}return!0}else if(typeof S=="number"){if(y[x]!==S)return y[x]=S,!0}else{const b=Array.isArray(y[x])?y[x]:[y[x]],R=Array.isArray(S)?S:[S];for(let L=0;L<b.length;L++){const v=b[L];if(v.equals(R[L])===!1)return v.copy(R[L]),!0}}return!1}function g(M){const x=M.uniforms;let y=0;const S=16;let b=0;for(let R=0,L=x.length;R<L;R++){const v=x[R],w={boundary:0,storage:0},z=Array.isArray(v.value)?v.value:[v.value];for(let k=0,D=z.length;k<D;k++){const N=z[k],O=_(N);w.boundary+=O.boundary,w.storage+=O.storage}if(v.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=y,R>0){b=y%S;const k=S-b;b!==0&&k-w.boundary<0&&(y+=S-b,v.__offset=y)}y+=w.storage}return b=y%S,b>0&&(y+=S-b),M.__size=y,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function f(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:f}}function lg(){const r=Ur("canvas");return r.style.display="block",r}class Gc{constructor(t={}){const{canvas:e=lg(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let p=null,g=null;const _=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=yt,this.useLegacyLights=!0,this.toneMapping=Un,this.toneMappingExposure=1;const f=this;let M=!1,x=0,y=0,S=null,b=-1,R=null;const L=new pe,v=new pe;let w=null,z=e.width,k=e.height,D=1,N=null,O=null;const K=new pe(0,0,z,k),B=new pe(0,0,z,k);let V=!1;const $=new Ic;let Z=!1,ht=!1,et=null;const G=new ue,j=new F,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function at(){return S===null?D:1}let P=n;function Tt(T,I){for(let X=0;X<T.length;X++){const U=T[X],Y=e.getContext(U,I);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${to}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),P===null){const I=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&I.shift(),P=Tt(I,T),P===null)throw Tt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let St,rt,xt,Ft,pt,Ct,ae,fe,oe,ne,Nt,jt,we,A,E,H,Q,tt,st,Mt,ct,q,ft,mt;function gt(){St=new xm(P),rt=new fm(P,St,t),St.init(rt),q=new eg(P,St,rt),xt=new Q_(P,St,rt),Ft=new Em(P),pt=new z_,Ct=new tg(P,St,xt,pt,rt,q,Ft),ae=new pm(f),fe=new vm(f),oe=new Uf(P,rt),ft=new um(P,St,oe,rt),ne=new Mm(P,oe,Ft,ft),Nt=new Am(P,ne,oe,Ft),st=new bm(P,rt,Ct),H=new dm(pt),jt=new B_(f,ae,fe,St,rt,ft,H),we=new ag(f,pt),A=new k_,E=new Y_(St,rt),tt=new cm(f,ae,fe,xt,Nt,d,l),Q=new J_(f,Nt,rt),mt=new og(P,Ft,rt,xt),Mt=new hm(P,St,Ft,rt),ct=new Sm(P,St,Ft,rt),Ft.programs=jt.programs,f.capabilities=rt,f.extensions=St,f.properties=pt,f.renderLists=A,f.shadowMap=Q,f.state=xt,f.info=Ft}gt();const lt=new sg(f,P);this.xr=lt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=St.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=St.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(T){T!==void 0&&(D=T,this.setSize(z,k,!1))},this.getSize=function(T){return T.set(z,k)},this.setSize=function(T,I,X=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,k=I,e.width=Math.floor(T*D),e.height=Math.floor(I*D),X===!0&&(e.style.width=T+"px",e.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(z*D,k*D).floor()},this.setDrawingBufferSize=function(T,I,X){z=T,k=I,D=X,e.width=Math.floor(T*X),e.height=Math.floor(I*X),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,I,X,U){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,I,X,U),xt.viewport(L.copy(K).multiplyScalar(D).floor())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,I,X,U){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,I,X,U),xt.scissor(v.copy(B).multiplyScalar(D).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(T){xt.setScissorTest(V=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){O=T},this.getClearColor=function(T){return T.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(T=!0,I=!0,X=!0){let U=0;T&&(U|=P.COLOR_BUFFER_BIT),I&&(U|=P.DEPTH_BUFFER_BIT),X&&(U|=P.STENCIL_BUFFER_BIT),P.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),A.dispose(),E.dispose(),pt.dispose(),ae.dispose(),fe.dispose(),Nt.dispose(),ft.dispose(),mt.dispose(),jt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",ut),lt.removeEventListener("sessionend",kt),et&&(et.dispose(),et=null),Ht.stop()};function dt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=Ft.autoReset,I=Q.enabled,X=Q.autoUpdate,U=Q.needsUpdate,Y=Q.type;gt(),Ft.autoReset=T,Q.enabled=I,Q.autoUpdate=X,Q.needsUpdate=U,Q.type=Y}function Ot(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Zt(T){const I=T.target;I.removeEventListener("dispose",Zt),C(I)}function C(T){W(T),pt.remove(T)}function W(T){const I=pt.get(T).programs;I!==void 0&&(I.forEach(function(X){jt.releaseProgram(X)}),T.isShaderMaterial&&jt.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,X,U,Y,_t){I===null&&(I=nt);const vt=Y.isMesh&&Y.matrixWorld.determinant()<0,Et=Xu(T,I,X,U,Y);xt.setMaterial(U,vt);let bt=X.index,wt=1;U.wireframe===!0&&(bt=ne.getWireframeAttribute(X),wt=2);const Rt=X.drawRange,Pt=X.attributes.position;let Bt=Rt.start*wt,Se=(Rt.start+Rt.count)*wt;_t!==null&&(Bt=Math.max(Bt,_t.start*wt),Se=Math.min(Se,(_t.start+_t.count)*wt)),bt!==null?(Bt=Math.max(Bt,0),Se=Math.min(Se,bt.count)):Pt!=null&&(Bt=Math.max(Bt,0),Se=Math.min(Se,Pt.count));const tn=Se-Bt;if(tn<0||tn===1/0)return;ft.setup(Y,U,Et,X,bt);let $n,Qt=Mt;if(bt!==null&&($n=oe.get(bt),Qt=ct,Qt.setIndex($n)),Y.isMesh)U.wireframe===!0?(xt.setLineWidth(U.wireframeLinewidth*at()),Qt.setMode(P.LINES)):Qt.setMode(P.TRIANGLES);else if(Y.isLine){let It=U.linewidth;It===void 0&&(It=1),xt.setLineWidth(It*at()),Y.isLineSegments?Qt.setMode(P.LINES):Y.isLineLoop?Qt.setMode(P.LINE_LOOP):Qt.setMode(P.LINE_STRIP)}else Y.isPoints?Qt.setMode(P.POINTS):Y.isSprite&&Qt.setMode(P.TRIANGLES);if(Y.isInstancedMesh)Qt.renderInstances(Bt,tn,Y.count);else if(X.isInstancedBufferGeometry){const It=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Gs=Math.min(X.instanceCount,It);Qt.renderInstances(Bt,tn,Gs)}else Qt.render(Bt,tn)},this.compile=function(T,I){function X(U,Y,_t){U.transparent===!0&&U.side===mn&&U.forceSinglePass===!1?(U.side=Pe,U.needsUpdate=!0,Yr(U,Y,_t),U.side=Yn,U.needsUpdate=!0,Yr(U,Y,_t),U.side=mn):Yr(U,Y,_t)}g=E.get(T),g.init(),m.push(g),T.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),g.setupLights(f.useLegacyLights),T.traverse(function(U){const Y=U.material;if(Y)if(Array.isArray(Y))for(let _t=0;_t<Y.length;_t++){const vt=Y[_t];X(vt,T,U)}else X(Y,T,U)}),m.pop(),g=null};let J=null;function ot(T){J&&J(T)}function ut(){Ht.stop()}function kt(){Ht.start()}const Ht=new Fc;Ht.setAnimationLoop(ot),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(T){J=T,lt.setAnimationLoop(T),T===null?Ht.stop():Ht.start()},lt.addEventListener("sessionstart",ut),lt.addEventListener("sessionend",kt),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(I),I=lt.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,I,S),g=E.get(T,m.length),g.init(),m.push(g),G.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$.setFromProjectionMatrix(G),ht=this.localClippingEnabled,Z=H.init(this.clippingPlanes,ht),p=A.get(T,_.length),p.init(),_.push(p),me(T,I,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(N,O),Z===!0&&H.beginShadows();const X=g.state.shadowsArray;if(Q.render(X,T,I),Z===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(p,T),g.setupLights(f.useLegacyLights),I.isArrayCamera){const U=I.cameras;for(let Y=0,_t=U.length;Y<_t;Y++){const vt=U[Y];Nn(p,T,vt,vt.viewport)}}else Nn(p,T,I);S!==null&&(Ct.updateMultisampleRenderTarget(S),Ct.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(f,T,I),ft.resetDefaultState(),b=-1,R=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function me(T,I,X,U){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){U&&j.setFromMatrixPosition(T.matrixWorld).applyMatrix4(G);const vt=Nt.update(T),Et=T.material;Et.visible&&p.push(T,vt,Et,X,j.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){T.isSkinnedMesh&&T.skeleton.frame!==Ft.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ft.render.frame);const vt=Nt.update(T),Et=T.material;if(U&&(vt.boundingSphere===null&&vt.computeBoundingSphere(),j.copy(vt.boundingSphere.center).applyMatrix4(T.matrixWorld).applyMatrix4(G)),Array.isArray(Et)){const bt=vt.groups;for(let wt=0,Rt=bt.length;wt<Rt;wt++){const Pt=bt[wt],Bt=Et[Pt.materialIndex];Bt&&Bt.visible&&p.push(T,vt,Bt,X,j.z,Pt)}}else Et.visible&&p.push(T,vt,Et,X,j.z,null)}}const _t=T.children;for(let vt=0,Et=_t.length;vt<Et;vt++)me(_t[vt],I,X,U)}function Nn(T,I,X,U){const Y=T.opaque,_t=T.transmissive,vt=T.transparent;g.setupLightsView(X),Z===!0&&H.setGlobalState(f.clippingPlanes,X),_t.length>0&&$t(Y,_t,I,X),U&&xt.viewport(L.copy(U)),Y.length>0&&We(Y,I,X),_t.length>0&&We(_t,I,X),vt.length>0&&We(vt,I,X),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function $t(T,I,X,U){if(et===null){const Et=rt.isWebGL2;et=new Mi(1024,1024,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?Lr:xi,minFilter:Pr,samples:Et&&a===!0?4:0})}const Y=f.getRenderTarget();f.setRenderTarget(et),f.clear();const _t=f.toneMapping;f.toneMapping=Un,We(T,X,U),Ct.updateMultisampleRenderTarget(et),Ct.updateRenderTargetMipmap(et);let vt=!1;for(let Et=0,bt=I.length;Et<bt;Et++){const wt=I[Et],Rt=wt.object,Pt=wt.geometry,Bt=wt.material,Se=wt.group;if(Bt.side===mn&&Rt.layers.test(U.layers)){const tn=Bt.side;Bt.side=Pe,Bt.needsUpdate=!0,fn(Rt,X,U,Pt,Bt,Se),Bt.side=tn,Bt.needsUpdate=!0,vt=!0}}vt===!0&&(Ct.updateMultisampleRenderTarget(et),Ct.updateRenderTargetMipmap(et)),f.setRenderTarget(Y),f.toneMapping=_t}function We(T,I,X){const U=I.isScene===!0?I.overrideMaterial:null;for(let Y=0,_t=T.length;Y<_t;Y++){const vt=T[Y],Et=vt.object,bt=vt.geometry,wt=U===null?vt.material:U,Rt=vt.group;Et.layers.test(X.layers)&&fn(Et,I,X,bt,wt,Rt)}}function fn(T,I,X,U,Y,_t){T.onBeforeRender(f,I,X,U,Y,_t),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(f,I,X,U,T,_t),Y.transparent===!0&&Y.side===mn&&Y.forceSinglePass===!1?(Y.side=Pe,Y.needsUpdate=!0,f.renderBufferDirect(X,I,U,Y,T,_t),Y.side=Yn,Y.needsUpdate=!0,f.renderBufferDirect(X,I,U,Y,T,_t),Y.side=mn):f.renderBufferDirect(X,I,U,Y,T,_t),T.onAfterRender(f,I,X,U,Y,_t)}function Yr(T,I,X){I.isScene!==!0&&(I=nt);const U=pt.get(T),Y=g.state.lights,_t=g.state.shadowsArray,vt=Y.state.version,Et=jt.getParameters(T,Y.state,_t,I,X),bt=jt.getProgramCacheKey(Et);let wt=U.programs;U.environment=T.isMeshStandardMaterial?I.environment:null,U.fog=I.fog,U.envMap=(T.isMeshStandardMaterial?fe:ae).get(T.envMap||U.environment),wt===void 0&&(T.addEventListener("dispose",Zt),wt=new Map,U.programs=wt);let Rt=wt.get(bt);if(Rt!==void 0){if(U.currentProgram===Rt&&U.lightsStateVersion===vt)return Ro(T,Et),Rt}else Et.uniforms=jt.getUniforms(T),T.onBuild(X,Et,f),T.onBeforeCompile(Et,f),Rt=jt.acquireProgram(Et,bt),wt.set(bt,Rt),U.uniforms=Et.uniforms;const Pt=U.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pt.clippingPlanes=H.uniform),Ro(T,Et),U.needsLights=Yu(T),U.lightsStateVersion=vt,U.needsLights&&(Pt.ambientLightColor.value=Y.state.ambient,Pt.lightProbe.value=Y.state.probe,Pt.directionalLights.value=Y.state.directional,Pt.directionalLightShadows.value=Y.state.directionalShadow,Pt.spotLights.value=Y.state.spot,Pt.spotLightShadows.value=Y.state.spotShadow,Pt.rectAreaLights.value=Y.state.rectArea,Pt.ltc_1.value=Y.state.rectAreaLTC1,Pt.ltc_2.value=Y.state.rectAreaLTC2,Pt.pointLights.value=Y.state.point,Pt.pointLightShadows.value=Y.state.pointShadow,Pt.hemisphereLights.value=Y.state.hemi,Pt.directionalShadowMap.value=Y.state.directionalShadowMap,Pt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Pt.spotShadowMap.value=Y.state.spotShadowMap,Pt.spotLightMatrix.value=Y.state.spotLightMatrix,Pt.spotLightMap.value=Y.state.spotLightMap,Pt.pointShadowMap.value=Y.state.pointShadowMap,Pt.pointShadowMatrix.value=Y.state.pointShadowMatrix);const Bt=Rt.getUniforms(),Se=vs.seqWithValue(Bt.seq,Pt);return U.currentProgram=Rt,U.uniformsList=Se,Rt}function Ro(T,I){const X=pt.get(T);X.outputColorSpace=I.outputColorSpace,X.instancing=I.instancing,X.skinning=I.skinning,X.morphTargets=I.morphTargets,X.morphNormals=I.morphNormals,X.morphColors=I.morphColors,X.morphTargetsCount=I.morphTargetsCount,X.numClippingPlanes=I.numClippingPlanes,X.numIntersection=I.numClipIntersection,X.vertexAlphas=I.vertexAlphas,X.vertexTangents=I.vertexTangents,X.toneMapping=I.toneMapping}function Xu(T,I,X,U,Y){I.isScene!==!0&&(I=nt),Ct.resetTextureUnits();const _t=I.fog,vt=U.isMeshStandardMaterial?I.environment:null,Et=S===null?f.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Mn,bt=(U.isMeshStandardMaterial?fe:ae).get(U.envMap||vt),wt=U.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Rt=!!U.normalMap&&!!X.attributes.tangent,Pt=!!X.morphAttributes.position,Bt=!!X.morphAttributes.normal,Se=!!X.morphAttributes.color,tn=U.toneMapped?f.toneMapping:Un,$n=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Qt=$n!==void 0?$n.length:0,It=pt.get(U),Gs=g.state.lights;if(Z===!0&&(ht===!0||T!==R)){const Ne=T===R&&U.id===b;H.setState(U,T,Ne)}let le=!1;U.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Gs.state.version||It.outputColorSpace!==Et||Y.isInstancedMesh&&It.instancing===!1||!Y.isInstancedMesh&&It.instancing===!0||Y.isSkinnedMesh&&It.skinning===!1||!Y.isSkinnedMesh&&It.skinning===!0||It.envMap!==bt||U.fog===!0&&It.fog!==_t||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==H.numPlanes||It.numIntersection!==H.numIntersection)||It.vertexAlphas!==wt||It.vertexTangents!==Rt||It.morphTargets!==Pt||It.morphNormals!==Bt||It.morphColors!==Se||It.toneMapping!==tn||rt.isWebGL2===!0&&It.morphTargetsCount!==Qt)&&(le=!0):(le=!0,It.__version=U.version);let Jn=It.currentProgram;le===!0&&(Jn=Yr(U,I,Y));let Co=!1,hr=!1,ks=!1;const Ee=Jn.getUniforms(),Qn=It.uniforms;if(xt.useProgram(Jn.program)&&(Co=!0,hr=!0,ks=!0),U.id!==b&&(b=U.id,hr=!0),Co||R!==T){if(Ee.setValue(P,"projectionMatrix",T.projectionMatrix),rt.logarithmicDepthBuffer&&Ee.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),R!==T&&(R=T,hr=!0,ks=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Ne=Ee.map.cameraPosition;Ne!==void 0&&Ne.setValue(P,j.setFromMatrixPosition(T.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ee.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Y.isSkinnedMesh)&&Ee.setValue(P,"viewMatrix",T.matrixWorldInverse)}if(Y.isSkinnedMesh){Ee.setOptional(P,Y,"bindMatrix"),Ee.setOptional(P,Y,"bindMatrixInverse");const Ne=Y.skeleton;Ne&&(rt.floatVertexTextures?(Ne.boneTexture===null&&Ne.computeBoneTexture(),Ee.setValue(P,"boneTexture",Ne.boneTexture,Ct),Ee.setValue(P,"boneTextureSize",Ne.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Hs=X.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0&&rt.isWebGL2===!0)&&st.update(Y,X,Jn),(hr||It.receiveShadow!==Y.receiveShadow)&&(It.receiveShadow=Y.receiveShadow,Ee.setValue(P,"receiveShadow",Y.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Qn.envMap.value=bt,Qn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),hr&&(Ee.setValue(P,"toneMappingExposure",f.toneMappingExposure),It.needsLights&&qu(Qn,ks),_t&&U.fog===!0&&we.refreshFogUniforms(Qn,_t),we.refreshMaterialUniforms(Qn,U,D,k,et),vs.upload(P,It.uniformsList,Qn,Ct)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(vs.upload(P,It.uniformsList,Qn,Ct),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ee.setValue(P,"center",Y.center),Ee.setValue(P,"modelViewMatrix",Y.modelViewMatrix),Ee.setValue(P,"normalMatrix",Y.normalMatrix),Ee.setValue(P,"modelMatrix",Y.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Ne=U.uniformsGroups;for(let Vs=0,ju=Ne.length;Vs<ju;Vs++)if(rt.isWebGL2){const Po=Ne[Vs];mt.update(Po,Jn),mt.bind(Po,Jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jn}function qu(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function Yu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,I,X){pt.get(T.texture).__webglTexture=I,pt.get(T.depthTexture).__webglTexture=X;const U=pt.get(T);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=X===void 0,U.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,I){const X=pt.get(T);X.__webglFramebuffer=I,X.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,X=0){S=T,x=I,y=X;let U=!0,Y=null,_t=!1,vt=!1;if(T){const bt=pt.get(T);bt.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(P.FRAMEBUFFER,null),U=!1):bt.__webglFramebuffer===void 0?Ct.setupRenderTarget(T):bt.__hasExternalTextures&&Ct.rebindTextures(T,pt.get(T.texture).__webglTexture,pt.get(T.depthTexture).__webglTexture);const wt=T.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(vt=!0);const Rt=pt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Y=Rt[I],_t=!0):rt.isWebGL2&&T.samples>0&&Ct.useMultisampledRTT(T)===!1?Y=pt.get(T).__webglMultisampledFramebuffer:Y=Rt,L.copy(T.viewport),v.copy(T.scissor),w=T.scissorTest}else L.copy(K).multiplyScalar(D).floor(),v.copy(B).multiplyScalar(D).floor(),w=V;if(xt.bindFramebuffer(P.FRAMEBUFFER,Y)&&rt.drawBuffers&&U&&xt.drawBuffers(T,Y),xt.viewport(L),xt.scissor(v),xt.setScissorTest(w),_t){const bt=pt.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,bt.__webglTexture,X)}else if(vt){const bt=pt.get(T.texture),wt=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,bt.__webglTexture,X||0,wt)}b=-1},this.readRenderTargetPixels=function(T,I,X,U,Y,_t,vt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&vt!==void 0&&(Et=Et[vt]),Et){xt.bindFramebuffer(P.FRAMEBUFFER,Et);try{const bt=T.texture,wt=bt.format,Rt=bt.type;if(wt!==ln&&q.convert(wt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pt=Rt===Lr&&(St.has("EXT_color_buffer_half_float")||rt.isWebGL2&&St.has("EXT_color_buffer_float"));if(Rt!==xi&&q.convert(Rt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Rt===hi&&(rt.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!Pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-U&&X>=0&&X<=T.height-Y&&P.readPixels(I,X,U,Y,q.convert(wt),q.convert(Rt),_t)}finally{const bt=S!==null?pt.get(S).__webglFramebuffer:null;xt.bindFramebuffer(P.FRAMEBUFFER,bt)}}},this.copyFramebufferToTexture=function(T,I,X=0){const U=Math.pow(2,-X),Y=Math.floor(I.image.width*U),_t=Math.floor(I.image.height*U);Ct.setTexture2D(I,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,T.x,T.y,Y,_t),xt.unbindTexture()},this.copyTextureToTexture=function(T,I,X,U=0){const Y=I.image.width,_t=I.image.height,vt=q.convert(X.format),Et=q.convert(X.type);Ct.setTexture2D(X,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,X.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,X.unpackAlignment),I.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,T.x,T.y,Y,_t,vt,Et,I.image.data):I.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,T.x,T.y,I.mipmaps[0].width,I.mipmaps[0].height,vt,I.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,U,T.x,T.y,vt,Et,I.image),U===0&&X.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(T,I,X,U,Y=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=T.max.x-T.min.x+1,vt=T.max.y-T.min.y+1,Et=T.max.z-T.min.z+1,bt=q.convert(U.format),wt=q.convert(U.type);let Rt;if(U.isData3DTexture)Ct.setTexture3D(U,0),Rt=P.TEXTURE_3D;else if(U.isDataArrayTexture)Ct.setTexture2DArray(U,0),Rt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Pt=P.getParameter(P.UNPACK_ROW_LENGTH),Bt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Se=P.getParameter(P.UNPACK_SKIP_PIXELS),tn=P.getParameter(P.UNPACK_SKIP_ROWS),$n=P.getParameter(P.UNPACK_SKIP_IMAGES),Qt=X.isCompressedTexture?X.mipmaps[0]:X.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Qt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Qt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,T.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,T.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?P.texSubImage3D(Rt,Y,I.x,I.y,I.z,_t,vt,Et,bt,wt,Qt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Rt,Y,I.x,I.y,I.z,_t,vt,Et,bt,Qt.data)):P.texSubImage3D(Rt,Y,I.x,I.y,I.z,_t,vt,Et,bt,wt,Qt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Pt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Bt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Se),P.pixelStorei(P.UNPACK_SKIP_ROWS,tn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,$n),Y===0&&U.generateMipmaps&&P.generateMipmap(Rt),xt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ct.setTextureCube(T,0):T.isData3DTexture?Ct.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ct.setTexture2DArray(T,0):Ct.setTexture2D(T,0),xt.unbindTexture()},this.resetState=function(){x=0,y=0,S=null,xt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===yt?pi:Sc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===pi?yt:Mn}}class cg extends Gc{}cg.prototype.isWebGL1Renderer=!0;class ug extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class kc extends Wr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Yl=new ue,Oa=new no,ps=new Is,ms=new F;class hg extends Ae{constructor(t=new hn,e=new kc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(i),ps.radius+=s,t.ray.intersectsSphere(ps)===!1)return;Yl.copy(i).invert(),Oa.copy(t.ray).applyMatrix4(Yl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);ms.fromBufferAttribute(h,m),jl(ms,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,_=p;g<_;g++)ms.fromBufferAttribute(h,g),jl(ms,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jl(r,t,e,n,i,s,o){const a=Oa.distanceSqToPoint(r);if(a<e){const l=new F;Oa.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class ao extends hn{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=t;const d=(e-t)/i,p=new F,g=new Gt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=s+m/n*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const M=f+m,x=M,y=M+n+1,S=M+n+2,b=M+1;a.push(x,y,b),a.push(y,S,b)}}this.setIndex(a),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class oo extends hn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new F,d=new F,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const M=[],x=f/n;let y=0;f===0&&o===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let S=0;S<=e;S++){const b=S/e;h.x=-t*Math.cos(i+b*s)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(i+b*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(b+y,1-x),M.push(c++)}u.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){const x=u[f][M+1],y=u[f][M],S=u[f+1][M],b=u[f+1][M+1];(f!==0||o>0)&&p.push(x,y,b),(f!==n-1||l<Math.PI)&&p.push(y,S,b)}this.setIndex(p),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const Kl={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Hc{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const fg=new Hc;class Vc{constructor(t){this.manager=t!==void 0?t:fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class dg extends Vc{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Kl.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Ur("img");function l(){u(),Kl.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class pg extends Vc{constructor(t){super(t)}load(t,e,n,i){const s=new Le,o=new dg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class mg extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class _g extends mg{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class gg{constructor(t,e,n=0,i=1/0){this.ray=new no(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new io,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ba(t,this,n,e),n.sort(Zl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Ba(t[i],this,n,e);return n.sort(Zl),n}}function Zl(r,t){return r.distance-t.distance}function Ba(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Ba(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:to}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=to);function Pn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Wc(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var He={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},er={duration:.5,overwrite:!1,delay:0},lo,xe,ee,Ze=1e8,Wt=1/Ze,za=Math.PI*2,vg=za/4,xg=0,Xc=Math.sqrt,Mg=Math.cos,Sg=Math.sin,he=function(t){return typeof t=="string"},Kt=function(t){return typeof t=="function"},In=function(t){return typeof t=="number"},co=function(t){return typeof t>"u"},Sn=function(t){return typeof t=="object"},De=function(t){return t!==!1},uo=function(){return typeof window<"u"},_s=function(t){return Kt(t)||he(t)},qc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Me=Array.isArray,Ga=/(?:-?\.?\d|\.)+/gi,Yc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,va=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,jc=/[+-]=-?[.\d]+/,Kc=/[^,'"\[\]\s]+/gi,Eg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qt,Ye,ka,ho,Ve={},bs={},Zc,$c=function(t){return(bs=Ei(t,Ve))&&Fe},fo=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},As=function(t,e){return!e&&console.warn(t)},Jc=function(t,e){return t&&(Ve[t]=e)&&bs&&(bs[t]=e)||Ve},Ir=function(){return 0},yg={suppressEvents:!0,isStart:!0,kill:!1},xs={suppressEvents:!0,kill:!1},Tg={suppressEvents:!0},po={},Xn=[],Ha={},Qc,ze={},xa={},$l=30,Ms=[],mo="",_o=function(t){var e=t[0],n,i;if(Sn(e)||Kt(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ms.length;i--&&!Ms[i].targetTest(e););n=Ms[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new yu(t[i],n)))||t.splice(i,1);return t},_i=function(t){return t._gsap||_o($e(t))[0]._gsap},tu=function(t,e,n){return(n=t[e])&&Kt(n)?t[e]():co(n)&&t.getAttribute&&t.getAttribute(e)||n},Ue=function(t,e){return(t=t.split(",")).forEach(e)||t},Jt=function(t){return Math.round(t*1e5)/1e5||0},de=function(t){return Math.round(t*1e7)/1e7||0},ji=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},bg=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ws=function(){var t=Xn.length,e=Xn.slice(0),n,i;for(Ha={},Xn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},eu=function(t,e,n,i){Xn.length&&!xe&&ws(),t.render(e,n,i||xe&&e<0&&(t._initted||t._startAt)),Xn.length&&!xe&&ws()},nu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Kc).length<2?e:he(t)?t.trim():t},iu=function(t){return t},Qe=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ag=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ei=function(t,e){for(var n in e)t[n]=e[n];return t},Jl=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Sn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Rs=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},br=function(t){var e=t.parent||qt,n=t.keyframes?Ag(Me(t.keyframes)):Qe;if(De(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},wg=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ru=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Os=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},jn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},gi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Rg=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Va=function(t,e,n,i){return t._startAt&&(xe?t._startAt.revert(xs):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Cg=function r(t){return!t||t._ts&&r(t.parent)},Ql=function(t){return t._repeat?nr(t._tTime,t=t.duration()+t._rDelay)*t:0},nr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Cs=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Bs=function(t){return t._end=de(t._start+(t._tDur/Math.abs(t._ts||t._rts||Wt)||0))},zs=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=de(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Bs(t),n._dirty||gi(n,t)),t},su=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=Cs(t.rawTime(),e),(!e._dur||qr(0,e.totalDuration(),n)-e._tTime>Wt)&&e.render(n,!0)),gi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Wt}},_n=function(t,e,n,i){return e.parent&&jn(e),e._start=de((In(n)?n:n||t!==qt?qe(t,n,e):t._time)+e._delay),e._end=de(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ru(t,e,"_first","_last",t._sort?"_start":0),Wa(e)||(t._recent=e),i||su(t,e),t._ts<0&&zs(t,t._tTime),t},au=function(t,e){return(Ve.ScrollTrigger||fo("scrollTrigger",e))&&Ve.ScrollTrigger.create(e,t)},ou=function(t,e,n,i,s){if(vo(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!xe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Qc!==Ge.frame)return Xn.push(t),t._lazy=[s,i],1},Pg=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Wa=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Lg=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&Pg(t)&&!(!t._initted&&Wa(t))||(t._ts<0||t._dp._ts<0)&&!Wa(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=qr(0,t._tDur,e),u=nr(l,a),t._yoyo&&u&1&&(o=1-o),u!==nr(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||xe||i||t._zTime===Wt||!e&&t._zTime){if(!t._initted&&ou(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Wt:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Va(t,e,n,!0),t._onUpdate&&!n&&Je(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Je(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&jn(t,1),!n&&!xe&&(Je(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Dg=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ir=function(t,e,n,i){var s=t._repeat,o=de(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:de(o*(s+1)+t._rDelay*s):o,a>0&&!i&&zs(t,t._tTime=t._tDur*a),t.parent&&Bs(t),n||gi(t.parent,t),t},tc=function(t){return t instanceof Ce?gi(t):ir(t,t._dur)},Ug={_start:0,endTime:Ir,totalDuration:Ir},qe=function r(t,e,n){var i=t.labels,s=t._recent||Ug,o=t.duration()>=Ze?s.endTime(!1):t._dur,a,l,c;return he(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Me(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ar=function(t,e,n){var i=In(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=De(l.vars.inherit)&&l.parent;o.immediateRender=De(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ie(e[0],o,e[s+1])},Zn=function(t,e){return t||t===0?e(t):e},qr=function(t,e,n){return n<t?t:n>e?e:n},ve=function(t,e){return!he(t)||!(e=Eg.exec(t))?"":e[1]},Ig=function(t,e,n){return Zn(n,function(i){return qr(t,e,i)})},Xa=[].slice,lu=function(t,e){return t&&Sn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Sn(t[0]))&&!t.nodeType&&t!==Ye},Fg=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return he(i)&&!e||lu(i,1)?(s=n).push.apply(s,$e(i)):n.push(i)})||n},$e=function(t,e,n){return ee&&!e&&ee.selector?ee.selector(t):he(t)&&!n&&(ka||!rr())?Xa.call((e||ho).querySelectorAll(t),0):Me(t)?Fg(t,n):lu(t)?Xa.call(t,0):t?[t]:[]},qa=function(t){return t=$e(t)[0]||As("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return $e(e,n.querySelectorAll?n:n===t?As("Invalid scope")||ho.createElement("div"):t)}},cu=function(t){return t.sort(function(){return .5-Math.random()})},uu=function(t){if(Kt(t))return t;var e=Sn(t)?t:{each:t},n=vi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return he(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,p,g){var _=(g||e).length,m=o[_],f,M,x,y,S,b,R,L,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,Ze])[1],!v){for(R=-Ze;R<(R=g[v++].getBoundingClientRect().left)&&v<_;);v--}for(m=o[_]=[],f=l?Math.min(v,_)*u-.5:i%v,M=v===Ze?0:l?_*h/v-.5:i/v|0,R=0,L=Ze,b=0;b<_;b++)x=b%v-f,y=M-(b/v|0),m[b]=S=c?Math.abs(c==="y"?y:x):Xc(x*x+y*y),S>R&&(R=S),S<L&&(L=S);i==="random"&&cu(m),m.max=R-L,m.min=L,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=ve(e.amount||e.each)||0,n=n&&_<0?Mu(n):n}return _=(m[d]-m.min)/m.max||0,de(m.b+(n?n(_):_)*m.v)+m.u}},Ya=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=de(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(In(n)?0:ve(n))}},hu=function(t,e){var n=Me(t),i,s;return!n&&Sn(t)&&(i=n=t.radius||Ze,t.values?(t=$e(t.values),(s=!In(t[0]))&&(i*=i)):t=Ya(t.increment)),Zn(e,n?Kt(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ze,u=0,h=t.length,d,p;h--;)s?(d=t[h].x-a,p=t[h].y-l,d=d*d+p*p):d=Math.abs(t[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?t[u]:o,s||u===o||In(o)?u:u+ve(o)}:Ya(t))},fu=function(t,e,n,i){return Zn(Me(t)?!e:n===!0?!!(n=0):!i,function(){return Me(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Ng=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},Og=function(t,e){return function(n){return t(parseFloat(n))+(e||ve(n))}},Bg=function(t,e,n){return pu(t,e,0,1,n)},du=function(t,e,n){return Zn(n,function(i){return t[~~e(i)]})},zg=function r(t,e,n){var i=e-t;return Me(t)?du(t,r(0,t.length),e):Zn(n,function(s){return(i+(s-t)%i)%i+t})},Gg=function r(t,e,n){var i=e-t,s=i*2;return Me(t)?du(t,r(0,t.length-1),e):Zn(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Fr=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Kc:Ga),n+=t.substr(e,i-e)+fu(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},pu=function(t,e,n,i,s){var o=e-t,a=i-n;return Zn(s,function(l){return n+((l-t)/o*a||0)})},kg=function r(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var o=he(t),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Me(t)&&!Me(e)){for(u=[],h=t.length,d=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=e}else i||(t=Ei(Me(t)?[]:{},t));if(!u){for(l in e)go.call(a,t,l,"get",e[l]);s=function(g){return So(g,a)||(o?t.p:t)}}}return Zn(n,s)},ec=function(t,e,n){var i=t.labels,s=Ze,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Je=function(t,e,n){var i=t.vars,s=i[e],o=ee,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Xn.length&&ws(),a&&(ee=a),u=l?s.apply(c,l):s.call(c),ee=o,u},Mr=function(t){return jn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!xe),t.progress()<1&&Je(t,"onInterrupt"),t},Wi,mu=[],_u=function(t){if(!uo()){mu.push(t);return}t=!t.name&&t.default||t;var e=t.name,n=Kt(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ir,render:So,add:go,kill:i0,modifier:n0,rawVars:0},o={targetTest:0,get:0,getSetter:Mo,aliases:{},register:0};if(rr(),t!==i){if(ze[e])return;Qe(i,Qe(Rs(t,s),o)),Ei(i.prototype,Ei(s,Rs(t,o))),ze[i.prop=e]=i,t.targetTest&&(Ms.push(i),po[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Jc(e,i),t.register&&t.register(Fe,i,Ie)},Vt=255,Sr={aqua:[0,Vt,Vt],lime:[0,Vt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Vt],navy:[0,0,128],white:[Vt,Vt,Vt],olive:[128,128,0],yellow:[Vt,Vt,0],orange:[Vt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Vt,0,0],pink:[Vt,192,203],cyan:[0,Vt,Vt],transparent:[Vt,Vt,Vt,0]},Ma=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Vt+.5|0},gu=function(t,e,n){var i=t?In(t)?[t>>16,t>>8&Vt,t&Vt]:0:Sr.black,s,o,a,l,c,u,h,d,p,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Sr[t])i=Sr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Vt,i&Vt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Vt,t&Vt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Ga),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ma(l+1/3,s,o),i[1]=Ma(l,s,o),i[2]=Ma(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Yc),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ga)||Sr.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Vt,o=i[1]/Vt,a=i[2]/Vt,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(p=h-d,c=u>.5?p/(2-h-d):p/(h+d),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},vu=function(t){var e=[],n=[],i=-1;return t.split(qn).forEach(function(s){var o=s.match(Vi)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},nc=function(t,e,n){var i="",s=(t+i).match(qn),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(d){return(d=gu(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=vu(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(qn,"1").split(Vi),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(qn),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},qn=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Sr)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Hg=/hsl[a]?\(/,xu=function(t){var e=t.join(" "),n;if(qn.lastIndex=0,qn.test(e))return n=Hg.test(e),t[1]=nc(t[1],n),t[0]=nc(t[0],n,vu(t[1])),!0},Nr,Ge=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,p,g=function _(m){var f=r()-i,M=m===!0,x,y,S,b;if(f>t&&(n+=f-e),i+=f,S=i-n,x=S-o,(x>0||M)&&(b=++h.frame,d=S-h.time*1e3,h.time=S=S/1e3,o+=x+(x>=s?4:s-x),y=1),M||(l=c(_)),y)for(p=0;p<a.length;p++)a[p](S,d,b,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Zc&&(!ka&&uo()&&(Ye=ka=window,ho=Ye.document||{},Ve.gsap=Fe,(Ye.gsapVersions||(Ye.gsapVersions=[])).push(Fe.version),$c(bs||Ye.GreenSockGlobals||!Ye.gsap&&Ye||{}),u=Ye.requestAnimationFrame,mu.forEach(_u)),l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Nr=1,g(2))},sleep:function(){(u?Ye.cancelAnimationFrame:clearTimeout)(l),Nr=0,c=Ir},lagSmoothing:function(m,f){t=m||1/0,e=Math.min(f||33,t)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,f,M){var x=f?function(y,S,b,R){m(y,S,b,R),h.remove(x)}:m;return h.remove(m),a[M?"unshift":"push"](x),rr(),x},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},h}(),rr=function(){return!Nr&&Ge.wake()},Dt={},Vg=/^[\d.\-M][\d.\-,\s]/,Wg=/["']/g,Xg=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Wg,"").trim():+c,i=l.substr(a+1).trim();return e},qg=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Yg=function(t){var e=(t+"").split("("),n=Dt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Xg(e[1])]:qg(t).split(",").map(nu)):Dt._CE&&Vg.test(t)?Dt._CE("",t):n},Mu=function(t){return function(e){return 1-t(1-e)}},Su=function r(t,e){for(var n=t._first,i;n;)n instanceof Ce?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},vi=function(t,e){return t&&(Kt(t)?t:Dt[t]||Yg(t))||e},yi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Ue(t,function(a){Dt[a]=Ve[a]=s,Dt[o=a.toLowerCase()]=n;for(var l in s)Dt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Dt[a+"."+l]=s[l]}),s},Eu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Sa=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/za*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Sg((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Eu(a);return s=za/s,l.config=function(c,u){return r(t,c,u)},l},Ea=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Eu(n);return i.config=function(s){return r(t,s)},i};Ue("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;yi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Dt.Linear.easeNone=Dt.none=Dt.Linear.easeIn;yi("Elastic",Sa("in"),Sa("out"),Sa());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};yi("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);yi("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});yi("Circ",function(r){return-(Xc(1-r*r)-1)});yi("Sine",function(r){return r===1?1:-Mg(r*vg)+1});yi("Back",Ea("in"),Ea("out"),Ea());Dt.SteppedEase=Dt.steps=Ve.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Wt;return function(a){return((i*qr(0,o,a)|0)+s)*n}}};er.ease=Dt["quad.out"];Ue("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return mo+=r+","+r+"Params,"});var yu=function(t,e){this.id=xg++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:tu,this.set=e?e.getSetter:Mo},sr=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ir(this,+e.duration,1,1),this.data=e.data,ee&&(this._ctx=ee,ee.data.push(this)),Nr||Ge.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ir(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(rr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(zs(this,n),!s._dp||s.parent||su(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&_n(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Wt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),eu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ql(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ql(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?nr(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Wt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Cs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Wt?0:this._rts,this.totalTime(qr(-Math.abs(this._delay),this._tDur,i),!0),Bs(this),Rg(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(rr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Wt&&(this._tTime-=Wt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&_n(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(De(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Cs(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Tg);var i=xe;return xe=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),xe=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,tc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,tc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(qe(this,n),De(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,De(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Wt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Wt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Wt)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Kt(n)?n:iu,a=function(){var c=i.then;i.then=null,Kt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Mr(this)},r}();Qe(sr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Wt,_prom:0,_ps:!1,_rts:1});var Ce=function(r){Wc(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=De(n.sortChildren),qt&&_n(n.parent||qt,Pn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&au(Pn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Ar(0,arguments,this),this},e.from=function(i,s,o){return Ar(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Ar(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,br(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ie(i,s,qe(this,o),1),this},e.call=function(i,s,o){return _n(this,ie.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ie(i,o,qe(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,br(o).immediateRender=De(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,br(a).immediateRender=De(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:de(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,p,g,_,m,f,M,x,y,S,b,R;if(this!==qt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,y=this._start,x=this._ts,f=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=de(u%m),u===l?(_=this._repeat,d=c):(_=~~(u/m),_&&_===u/m&&(d=c,_--),d>c&&(d=c)),S=nr(this._tTime,m),!a&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),b&&_&1&&(d=c-d,R=1),_!==S&&!this._lock){var L=b&&S&1,v=L===(b&&_&1);if(_<S&&(L=!L),a=L?0:c,this._lock=1,this.render(a||(R?0:de(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Je(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;Su(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Dg(this,de(a),de(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!_&&(Je(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||d>=p._start)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!f){M=0,g&&(u+=this._zTime=-Wt);break}}p=g}else{p=this._last;for(var w=i<0?i:d;p;){if(g=p._prev,(p._act||w<=p._end)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(w-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(w-p._start)*p._ts,s,o||xe&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!f){M=0,g&&(u+=this._zTime=w?-Wt:Wt);break}}p=g}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-Wt)._zTime=d>=a?1:-1,this._ts))return this._start=y,Bs(this),this.render(i,s,o);this._onUpdate&&!s&&Je(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&jn(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Je(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(In(s)||(s=qe(this,s,i)),!(i instanceof sr)){if(Me(i))return i.forEach(function(a){return o.add(a,s)}),this;if(he(i))return this.addLabel(i,s);if(Kt(i))i=ie.delayedCall(0,i);else return this}return this!==i?_n(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ze);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ie?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return he(i)?this.removeLabel(i):Kt(i)?this.killTweensOf(i):(Os(this,i),i===this._recent&&(this._recent=this._last),gi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=de(Ge.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=qe(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=ie.delayedCall(0,s||Ir,o);return a.data="isPause",this._hasPause=1,_n(this,a,qe(this,i))},e.removePause=function(i){var s=this._first;for(i=qe(this,i);s;)s._start===i&&s.data==="isPause"&&jn(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)kn!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=$e(i),l=this._first,c=In(s),u;l;)l instanceof ie?bg(l._targets,a)&&(c?(!kn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=qe(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,p,g=ie.to(o,Qe({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Wt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ir(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Qe({startAt:{time:qe(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),ec(this,qe(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),ec(this,qe(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Wt)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return gi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),gi(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Ze,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,_n(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ir(o,o===qt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(qt._ts&&(eu(qt,Cs(i,qt)),Qc=Ge.frame),Ge.frame>=$l){$l+=He.autoSleep||120;var s=qt._first;if((!s||!s._ts)&&He.autoSleep&&Ge._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ge.sleep()}}},t}(sr);Qe(Ce.prototype,{_lock:0,_hasPause:0,_forcing:0});var jg=function(t,e,n,i,s,o,a){var l=new Ie(this._pt,t,e,0,1,Cu,null,s),c=0,u=0,h,d,p,g,_,m,f,M;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=Fr(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),d=n.match(va)||[];h=va.exec(i);)g=h[0],_=i.substring(c,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ji(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=va.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(jc.test(i)||f)&&(l.e=0),this._pt=l,l},go=function(t,e,n,i,s,o,a,l,c,u){Kt(i)&&(i=i(s||0,t,o));var h=t[e],d=n!=="get"?n:Kt(h)?c?t[e.indexOf("set")||!Kt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,p=Kt(h)?c?Qg:wu:xo,g;if(he(i)&&(~i.indexOf("random(")&&(i=Fr(i)),i.charAt(1)==="="&&(g=ji(d,i)+(ve(d)||0),(g||g===0)&&(i=g))),!u||d!==i||ja)return!isNaN(d*i)&&i!==""?(g=new Ie(this._pt,t,e,+d||0,i-(d||0),typeof h=="boolean"?e0:Ru,0,p),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&fo(e,i),jg.call(this,t,e,d,i,p,l||He.stringFilter,c))},Kg=function(t,e,n,i,s){if(Kt(t)&&(t=wr(t,s,e,n,i)),!Sn(t)||t.style&&t.nodeType||Me(t)||qc(t))return he(t)?wr(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=wr(t[a],s,e,n,i);return o},Tu=function(t,e,n,i,s,o){var a,l,c,u;if(ze[t]&&(a=new ze[t]).init(s,a.rawVars?e[t]:Kg(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Ie(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Wi))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},kn,ja,vo=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,d=i.runBackwards,p=i.yoyoEase,g=i.keyframes,_=i.autoRevert,m=t._dur,f=t._startAt,M=t._targets,x=t.parent,y=x&&x.data==="nested"?x.vars.targets:M,S=t._overwrite==="auto"&&!lo,b=t.timeline,R,L,v,w,z,k,D,N,O,K,B,V,$;if(b&&(!g||!s)&&(s="none"),t._ease=vi(s,er.ease),t._yEase=p?Mu(vi(p===!0?s:p,er.ease)):0,p&&t._yoyo&&!t._repeat&&(p=t._yEase,t._yEase=t._ease,t._ease=p),t._from=!b&&!!i.runBackwards,!b||g&&!i.stagger){if(N=M[0]?_i(M[0]).harness:0,V=N&&i[N.prop],R=Rs(i,po),f&&(f._zTime<0&&f.progress(1),e<0&&d&&a&&!_?f.render(-1,!0):f.revert(d&&m?xs:yg),f._lazy=0),o){if(jn(t._startAt=ie.set(M,Qe({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!f&&De(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(xe||!a&&!_)&&t._startAt.revert(xs),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(d&&m&&!f){if(e&&(a=!1),v=Qe({overwrite:!1,data:"isFromStart",lazy:a&&!f&&De(l),immediateRender:a,stagger:0,parent:x},R),V&&(v[N.prop]=V),jn(t._startAt=ie.set(M,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(xe?t._startAt.revert(xs):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Wt,Wt);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&De(l)||l&&!m,L=0;L<M.length;L++){if(z=M[L],D=z._gsap||_o(M)[L]._gsap,t._ptLookup[L]=K={},Ha[D.id]&&Xn.length&&ws(),B=y===M?L:y.indexOf(z),N&&(O=new N).init(z,V||R,t,B,y)!==!1&&(t._pt=w=new Ie(t._pt,z,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(Z){K[Z]=w}),O.priority&&(k=1)),!N||V)for(v in R)ze[v]&&(O=Tu(v,R,t,B,z,y))?O.priority&&(k=1):K[v]=w=go.call(t,z,v,"get",R[v],B,y,0,i.stringFilter);t._op&&t._op[L]&&t.kill(z,t._op[L]),S&&t._pt&&(kn=t,qt.killTweensOf(z,K,t.globalTime(e)),$=!t.parent,kn=0),t._pt&&l&&(Ha[D.id]=1)}k&&Pu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!$,g&&e<=0&&b.render(Ze,!0,!0)},Zg=function(t,e,n,i,s,o,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,h,d;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(c=h[d][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return ja=1,t.vars[e]="+=0",vo(t,a),ja=0,1;l.push(c)}for(d=l.length;d--;)u=l[d],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=Jt(n)+ve(u.e)),u.b&&(u.b=c.s+ve(u.b))},$g=function(t,e){var n=t[0]?_i(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Ei({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Jg=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Me(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},wr=function(t,e,n,i,s){return Kt(t)?t.call(e,n,i,s):he(t)&&~t.indexOf("random(")?Fr(t):t},bu=mo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Au={};Ue(bu+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Au[r]=1});var ie=function(r){Wc(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:br(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,M=i.parent||qt,x=(Me(n)||qc(n)?In(n[0]):"length"in i)?[n]:$e(n),y,S,b,R,L,v,w,z;if(a._targets=x.length?_o(x):As("GSAP target "+n+" not found. https://greensock.com",!He.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||d||_s(c)||_s(u)){if(i=a.vars,y=a.timeline=new Ce({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:x}),y.kill(),y.parent=y._dp=Pn(a),y._start=0,d||_s(c)||_s(u)){if(R=x.length,w=d&&uu(d),Sn(d))for(L in d)~bu.indexOf(L)&&(z||(z={}),z[L]=d[L]);for(S=0;S<R;S++)b=Rs(i,Au),b.stagger=0,f&&(b.yoyoEase=f),z&&Ei(b,z),v=x[S],b.duration=+wr(c,Pn(a),S,v,x),b.delay=(+wr(u,Pn(a),S,v,x)||0)-a._delay,!d&&R===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),y.to(v,b,w?w(S,v,x):0),y._ease=Dt.none;y.duration()?c=u=0:a.timeline=0}else if(g){br(Qe(y.vars.defaults,{ease:"none"})),y._ease=vi(g.ease||i.ease||"none");var k=0,D,N,O;if(Me(g))g.forEach(function(K){return y.to(x,K,">")}),y.duration();else{b={};for(L in g)L==="ease"||L==="easeEach"||Jg(L,g[L],b,g.easeEach);for(L in b)for(D=b[L].sort(function(K,B){return K.t-B.t}),k=0,S=0;S<D.length;S++)N=D[S],O={ease:N.e,duration:(N.t-(S?D[S-1].t:0))/100*c},O[L]=N.v,y.to(x,O,k),k+=O.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return p===!0&&!lo&&(kn=Pn(a),qt.killTweensOf(x),kn=0),_n(M,Pn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===de(M._time)&&De(h)&&Cg(Pn(a))&&M.data!=="nested")&&(a._tTime=-Wt,a.render(Math.max(0,-u)||0)),m&&au(Pn(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Wt&&!u?l:i<Wt?0:i,d,p,g,_,m,f,M,x,y;if(!c)Lg(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(d=de(h%_),h===l?(g=this._repeat,d=c):(g=~~(h/_),g&&g===h/_&&(d=c,g--),d>c&&(d=c)),f=this._yoyo&&g&1,f&&(y=this._yEase,d=c-d),m=nr(this._tTime,_),d===a&&!o&&this._initted)return this._tTime=h,this;g!==m&&(x&&this._yEase&&Su(x,f),this.vars.repeatRefresh&&!f&&!this._lock&&(this._lock=o=1,this.render(de(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(ou(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(y||this._ease)(d/c),this._from&&(this.ratio=M=1-M),d&&!a&&!s&&!g&&(Je(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(M,p.d),p=p._next;x&&x.render(i<0?i:!d&&f?-Wt:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Va(this,i,s,o),Je(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Je(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Va(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&jn(this,1),!s&&!(u&&!a)&&(h||a||f)&&(Je(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a){Nr||Ge.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||vo(this,l),c=this._ease(l/this._dur),Zg(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(zs(this,0),this.parent||ru(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Mr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,kn&&kn.vars.overwrite!==!0)._first||Mr(this),this.parent&&o!==this.timeline.totalDuration()&&ir(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?$e(i):a,c=this._ptLookup,u=this._pt,h,d,p,g,_,m,f;if((!s||s==="all")&&wg(a,l))return s==="all"&&(this._pt=0),Mr(this);for(h=this._op=this._op||[],s!=="all"&&(he(s)&&(_={},Ue(s,function(M){return _[M]=1}),s=_),s=$g(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){d=c[f],s==="all"?(h[f]=s,g=d,p={}):(p=h[f]=h[f]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Os(this,m,"_pt"),delete d[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&Mr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ar(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Ar(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return qt.killTweensOf(i,s,o)},t}(sr);Qe(ie.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ue("staggerTo,staggerFrom,staggerFromTo",function(r){ie[r]=function(){var t=new Ce,e=Xa.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var xo=function(t,e,n){return t[e]=n},wu=function(t,e,n){return t[e](n)},Qg=function(t,e,n,i){return t[e](i.fp,n)},t0=function(t,e,n){return t.setAttribute(e,n)},Mo=function(t,e){return Kt(t[e])?wu:co(t[e])&&t.setAttribute?t0:xo},Ru=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},e0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Cu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},So=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},n0=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},i0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Os(this,e,"_pt"):e.dep||(n=1),e=i;return!n},r0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Pu=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Ie=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Ru,this.d=l||this,this.set=c||xo,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=r0,this.m=n,this.mt=s,this.tween=i},r}();Ue(mo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return po[r]=1});Ve.TweenMax=Ve.TweenLite=ie;Ve.TimelineLite=Ve.TimelineMax=Ce;qt=new Ce({sortChildren:!1,defaults:er,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});He.stringFilter=xu;var ar=[],Ss={},s0=[],ic=0,ya=function(t){return(Ss[t]||s0).map(function(e){return e()})},Ka=function(){var t=Date.now(),e=[];t-ic>2&&(ya("matchMediaInit"),ar.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ye.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),ya("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),ic=t,ya("matchMedia"))},Lu=function(){function r(e,n){this.selector=n&&qa(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Kt(n)&&(s=i,i=n,n=Kt);var o=this,a=function(){var c=ee,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=qa(s)),ee=o,h=i.apply(o,arguments),Kt(h)&&o._r.push(h),ee=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Kt?a(o):n?o[n]=a:a},t.ignore=function(n){var i=ee;ee=null,n(this),ee=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ie&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof sr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=ar.indexOf(this);~a&&ar.splice(a,1)}},t.revert=function(n){this.kill(n||{})},r}(),a0=function(){function r(e){this.contexts=[],this.scope=e}var t=r.prototype;return t.add=function(n,i,s){Sn(n)||(n={matches:n});var o=new Lu(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ye.matchMedia(n[c]),l&&(ar.indexOf(o)<0&&ar.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ka):l.addEventListener("change",Ka)));return u&&i(o),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ps={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return _u(i)})},timeline:function(t){return new Ce(t)},getTweensOf:function(t,e){return qt.getTweensOf(t,e)},getProperty:function(t,e,n,i){he(t)&&(t=$e(t)[0]);var s=_i(t||{}).get,o=n?iu:nu;return n==="native"&&(n=""),t&&(e?o((ze[e]&&ze[e].get||s)(t,e,n,i)):function(a,l,c){return o((ze[a]&&ze[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=$e(t),t.length>1){var i=t.map(function(u){return Fe.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var o=ze[e],a=_i(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Wi._pt=0,h.init(t,n?u+n:u,Wi,0,[t]),h.render(1,h),Wi._pt&&So(1,Wi)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Fe.to(t,Ei((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return qt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=vi(t.ease,er.ease)),Jl(er,t||{})},config:function(t){return Jl(He,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ze[a]&&!Ve[a]&&As(e+" effect requires "+a+" plugin.")}),xa[e]=function(a,l,c){return n($e(a),Qe(l||{},s),c)},o&&(Ce.prototype[e]=function(a,l,c){return this.add(xa[e](a,Sn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Dt[t]=vi(e)},parseEase:function(t,e){return arguments.length?vi(t,e):Dt},getById:function(t){return qt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ce(t),i,s;for(n.smoothChildTiming=De(t.smoothChildTiming),qt.remove(n),n._dp=0,n._time=n._tTime=qt._time,i=qt._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ie&&i.vars.onComplete===i._targets[0]))&&_n(n,i,i._start-i._delay),i=s;return _n(qt,n,0),n},context:function(t,e){return t?new Lu(t,e):ee},matchMedia:function(t){return new a0(t)},matchMediaRefresh:function(){return ar.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ka()},addEventListener:function(t,e){var n=Ss[t]||(Ss[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ss[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:zg,wrapYoyo:Gg,distribute:uu,random:fu,snap:hu,normalize:Bg,getUnit:ve,clamp:Ig,splitColor:gu,toArray:$e,selector:qa,mapRange:pu,pipe:Ng,unitize:Og,interpolate:kg,shuffle:cu},install:$c,effects:xa,ticker:Ge,updateRoot:Ce.updateRoot,plugins:ze,globalTimeline:qt,core:{PropTween:Ie,globals:Jc,Tween:ie,Timeline:Ce,Animation:sr,getCache:_i,_removeLinkedListItem:Os,reverting:function(){return xe},context:function(t){return t&&ee&&(ee.data.push(t),t._ctx=ee),ee},suppressOverwrites:function(t){return lo=t}}};Ue("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ps[r]=ie[r]});Ge.add(Ce.updateRoot);Wi=Ps.to({},{duration:0});var o0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},l0=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=o0(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Ta=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(he(s)&&(l={},Ue(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}l0(a,s)}}}},Fe=Ps.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)xe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ta("roundProps",Ya),Ta("modifiers"),Ta("snap",hu))||Ps;ie.version=Ce.version=Fe.version="3.11.5";Zc=1;uo()&&rr();Dt.Power0;Dt.Power1;Dt.Power2;Dt.Power3;Dt.Power4;Dt.Linear;Dt.Quad;Dt.Cubic;Dt.Quart;Dt.Quint;Dt.Strong;Dt.Elastic;Dt.Back;Dt.SteppedEase;Dt.Bounce;Dt.Sine;Dt.Expo;Dt.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rc,Hn,Ki,Eo,fi,sc,yo,c0=function(){return typeof window<"u"},Fn={},oi=180/Math.PI,Zi=Math.PI/180,Gi=Math.atan2,ac=1e8,To=/([A-Z])/g,u0=/(left|right|width|margin|padding|x)/i,h0=/[\s,\(]\S/,vn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Za=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},f0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},d0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},p0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Du=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Uu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},m0=function(t,e,n){return t.style[e]=n},_0=function(t,e,n){return t.style.setProperty(e,n)},g0=function(t,e,n){return t._gsap[e]=n},v0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},x0=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},M0=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Yt="transform",un=Yt+"Origin",S0=function r(t,e){var n=this,i=this.target,s=i.style;if(t in Fn){if(this.tfm=this.tfm||{},t!=="transform")t=vn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Ln(i,o)}):this.tfm[t]=i._gsap.x?i._gsap[t]:Ln(i,t);else return vn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Yt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(un,e,"")),t=Yt}(s||e)&&this.props.push(t,e,s[t])},Iu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},E0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(To,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=yo(),(!s||!s.isStart)&&!n[Yt]&&(Iu(n),i.uncache=1)}},Fu=function(t,e){var n={target:t,props:[],revert:E0,save:S0};return t._gsap||Fe.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Nu,$a=function(t,e){var n=Hn.createElementNS?Hn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Hn.createElement(t);return n.style?n:Hn.createElement(t)},xn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(To,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,or(e)||e,1)||""},oc="O,Moz,ms,Ms,Webkit".split(","),or=function(t,e,n){var i=e||fi,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(oc[o]+t in s););return o<0?null:(o===3?"ms":o>=0?oc[o]:"")+t},Ja=function(){c0()&&window.document&&(rc=window,Hn=rc.document,Ki=Hn.documentElement,fi=$a("div")||{style:{}},$a("div"),Yt=or(Yt),un=Yt+"Origin",fi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Nu=!!or("perspective"),yo=Fe.core.reverting,Eo=1)},ba=function r(t){var e=$a("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Ki.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ki.removeChild(e),this.style.cssText=s,o},lc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Ou=function(t){var e;try{e=t.getBBox()}catch{e=ba.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===ba||(e=ba.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+lc(t,["x","cx","x1"])||0,y:+lc(t,["y","cy","y1"])||0,width:0,height:0}:e},Bu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ou(t))},Or=function(t,e){if(e){var n=t.style;e in Fn&&e!==un&&(e=Yt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(To,"-$1").toLowerCase())):n.removeAttribute(e)}},Vn=function(t,e,n,i,s,o){var a=new Ie(t._pt,e,n,0,1,o?Uu:Du);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},cc={deg:1,rad:1,turn:1},y0={grid:1,flex:1},Kn=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=fi.style,l=u0.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",p=i==="%",g,_,m,f;return i===o||!s||cc[i]||cc[o]?s:(o!=="px"&&!d&&(s=r(t,e,n,"px")),f=t.getCTM&&Bu(t),(p||o==="%")&&(Fn[e]||~e.indexOf("adius"))?(g=f?t.getBBox()[l?"width":"height"]:t[u],Jt(p?s/g*h:s/100*g)):(a[l?"width":"height"]=h+(d?o:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Hn||!_.appendChild)&&(_=Hn.body),m=_._gsap,m&&p&&m.width&&l&&m.time===Ge.time&&!m.uncache?Jt(s/m.width*h):((p||o==="%")&&!y0[xn(_,"display")]&&(a.position=xn(t,"position")),_===t&&(a.position="static"),_.appendChild(fi),g=fi[u],_.removeChild(fi),a.position="absolute",l&&p&&(m=_i(_),m.time=Ge.time,m.width=_[u]),Jt(d?g*s/h:g&&s?h/g*s:0))))},Ln=function(t,e,n,i){var s;return Eo||Ja(),e in vn&&e!=="transform"&&(e=vn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Fn[e]&&e!=="transform"?(s=zr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ds(xn(t,un))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ls[e]&&Ls[e](t,e,n)||xn(t,e)||tu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Kn(t,e,s,n)+n:s},T0=function(t,e,n,i){if(!n||n==="none"){var s=or(e,t,1),o=s&&xn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=xn(t,"borderTopColor"))}var a=new Ie(this._pt,t.style,e,0,1,Cu),l=0,c=0,u,h,d,p,g,_,m,f,M,x,y,S;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=xn(t,e)||i,t.style[e]=n),u=[n,i],xu(u),n=u[0],i=u[1],d=n.match(Vi)||[],S=i.match(Vi)||[],S.length){for(;h=Vi.exec(i);)m=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=ji(p,m)+y),f=parseFloat(m),x=m.substr((f+"").length),l=Vi.lastIndex-x.length,x||(x=x||He.units[e]||y,l===i.length&&(i+=x,a.e+=x)),y!==x&&(p=Kn(t,e,_,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:p,c:f-p,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Uu:Du;return jc.test(i)&&(a.e=0),this._pt=a,a},uc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},b0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=uc[n]||n,e[1]=uc[i]||i,e.join(" ")},A0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Fn[a]&&(l=1,a=a==="transformOrigin"?un:Yt),Or(n,a);l&&(Or(n,Yt),o&&(o.svg&&n.removeAttribute("transform"),zr(n,1),o.uncache=1,Iu(i)))}},Ls={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Ie(t._pt,e,n,0,0,A0);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Br=[1,0,0,1,0,0],zu={},Gu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},hc=function(t){var e=xn(t,Yt);return Gu(e)?Br:e.substr(7).match(Yc).map(Jt)},bo=function(t,e){var n=t._gsap||_i(t),i=t.style,s=hc(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Br:s):(s===Br&&!t.offsetParent&&t!==Ki&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,Ki.appendChild(t)),s=hc(t),l?i.display=l:Or(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ki.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Qa=function(t,e,n,i,s,o){var a=t._gsap,l=s||bo(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],f=l[4],M=l[5],x=e.split(" "),y=parseFloat(x[0])||0,S=parseFloat(x[1])||0,b,R,L,v;n?l!==Br&&(R=p*m-g*_)&&(L=y*(m/R)+S*(-_/R)+(_*M-m*f)/R,v=y*(-g/R)+S*(p/R)-(p*M-g*f)/R,y=L,S=v):(b=Ou(t),y=b.x+(~x[0].indexOf("%")?y/100*b.width:y),S=b.y+(~(x[1]||x[0]).indexOf("%")?S/100*b.height:S)),i||i!==!1&&a.smooth?(f=y-c,M=S-u,a.xOffset=h+(f*p+M*_)-f,a.yOffset=d+(f*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[un]="0px 0px",o&&(Vn(o,a,"xOrigin",c,y),Vn(o,a,"yOrigin",u,S),Vn(o,a,"xOffset",h,a.xOffset),Vn(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+S)},zr=function(t,e){var n=t._gsap||new yu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=xn(t,un)||"0",u,h,d,p,g,_,m,f,M,x,y,S,b,R,L,v,w,z,k,D,N,O,K,B,V,$,Z,ht,et,G,j,nt;return u=h=d=_=m=f=M=x=y=0,p=g=1,n.svg=!!(t.getCTM&&Bu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Yt]!=="none"?l[Yt]:"")),i.scale=i.rotate=i.translate="none"),R=bo(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),Qa(t,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,R)),S=n.xOrigin||0,b=n.yOrigin||0,R!==Br&&(z=R[0],k=R[1],D=R[2],N=R[3],u=O=R[4],h=K=R[5],R.length===6?(p=Math.sqrt(z*z+k*k),g=Math.sqrt(N*N+D*D),_=z||k?Gi(k,z)*oi:0,M=D||N?Gi(D,N)*oi+_:0,M&&(g*=Math.abs(Math.cos(M*Zi))),n.svg&&(u-=S-(S*z+b*D),h-=b-(S*k+b*N))):(nt=R[6],G=R[7],Z=R[8],ht=R[9],et=R[10],j=R[11],u=R[12],h=R[13],d=R[14],L=Gi(nt,et),m=L*oi,L&&(v=Math.cos(-L),w=Math.sin(-L),B=O*v+Z*w,V=K*v+ht*w,$=nt*v+et*w,Z=O*-w+Z*v,ht=K*-w+ht*v,et=nt*-w+et*v,j=G*-w+j*v,O=B,K=V,nt=$),L=Gi(-D,et),f=L*oi,L&&(v=Math.cos(-L),w=Math.sin(-L),B=z*v-Z*w,V=k*v-ht*w,$=D*v-et*w,j=N*w+j*v,z=B,k=V,D=$),L=Gi(k,z),_=L*oi,L&&(v=Math.cos(L),w=Math.sin(L),B=z*v+k*w,V=O*v+K*w,k=k*v-z*w,K=K*v-O*w,z=B,O=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,f=180-f),p=Jt(Math.sqrt(z*z+k*k+D*D)),g=Jt(Math.sqrt(K*K+nt*nt)),L=Gi(O,K),M=Math.abs(L)>2e-4?L*oi:0,y=j?1/(j<0?-j:j):0),n.svg&&(B=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Gu(xn(t,Yt)),B&&t.setAttribute("transform",B))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(p*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Jt(p),n.scaleY=Jt(g),n.rotation=Jt(_)+a,n.rotationX=Jt(m)+a,n.rotationY=Jt(f)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[un]=Ds(c)),n.xOffset=n.yOffset=0,n.force3D=He.force3D,n.renderTransform=n.svg?R0:Nu?ku:w0,n.uncache=0,n},Ds=function(t){return(t=t.split(" "))[0]+" "+t[1]},Aa=function(t,e,n){var i=ve(e);return Jt(parseFloat(e)+parseFloat(Kn(t,"x",n+"px",i)))+i},w0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,ku(t,e)},ii="0deg",_r="0px",ri=") ",ku=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,f=n.force3D,M=n.target,x=n.zOrigin,y="",S=f==="auto"&&t&&t!==1||f===!0;if(x&&(h!==ii||u!==ii)){var b=parseFloat(u)*Zi,R=Math.sin(b),L=Math.cos(b),v;b=parseFloat(h)*Zi,v=Math.cos(b),o=Aa(M,o,R*v*-x),a=Aa(M,a,-Math.sin(b)*-x),l=Aa(M,l,L*v*-x+x)}m!==_r&&(y+="perspective("+m+ri),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(S||o!==_r||a!==_r||l!==_r)&&(y+=l!==_r||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ri),c!==ii&&(y+="rotate("+c+ri),u!==ii&&(y+="rotateY("+u+ri),h!==ii&&(y+="rotateX("+h+ri),(d!==ii||p!==ii)&&(y+="skew("+d+", "+p+ri),(g!==1||_!==1)&&(y+="scale("+g+", "+_+ri),M.style[Yt]=y||"translate(0, 0)"},R0=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,f=n.yOffset,M=n.forceCSS,x=parseFloat(o),y=parseFloat(a),S,b,R,L,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Zi,c*=Zi,S=Math.cos(l)*h,b=Math.sin(l)*h,R=Math.sin(l-c)*-d,L=Math.cos(l-c)*d,c&&(u*=Zi,v=Math.tan(c-u),v=Math.sqrt(1+v*v),R*=v,L*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),S*=v,b*=v)),S=Jt(S),b=Jt(b),R=Jt(R),L=Jt(L)):(S=h,L=d,b=R=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Kn(p,"x",o,"px"),y=Kn(p,"y",a,"px")),(g||_||m||f)&&(x=Jt(x+g-(g*S+_*R)+m),y=Jt(y+_-(g*b+_*L)+f)),(i||s)&&(v=p.getBBox(),x=Jt(x+i/100*v.width),y=Jt(y+s/100*v.height)),v="matrix("+S+","+b+","+R+","+L+","+x+","+y+")",p.setAttribute("transform",v),M&&(p.style[Yt]=v)},C0=function(t,e,n,i,s){var o=360,a=he(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?oi:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*ac)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*ac)%o-~~(c/o)*o)),t._pt=d=new Ie(t._pt,e,n,i,c,f0),d.e=u,d.u="deg",t._props.push(n),d},fc=function(t,e){for(var n in e)t[n]=e[n];return t},P0=function(t,e,n){var i=fc({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Yt]=e,a=zr(n,1),Or(n,Yt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Yt],o[Yt]=e,a=zr(n,1),o[Yt]=c);for(l in Fn)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=ve(c),g=ve(u),h=p!==g?Kn(n,l,c,g):parseFloat(c),d=parseFloat(u),t._pt=new Ie(t._pt,a,l,h,d-h,Za),t._pt.u=g||0,t._props.push(l));fc(a,i)};Ue("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Ls[t>1?"border"+r:r]=function(a,l,c,u,h){var d,p;if(arguments.length<4)return d=o.map(function(g){return Ln(a,g,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(u+"").split(" "),p={},o.forEach(function(g,_){return p[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,p,h)}});var Hu={name:"css",register:Ja,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,d,p,g,_,m,f,M,x,y,S,b,R,L;Eo||Ja(),this.styles=this.styles||Fu(t),L=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(ze[_]&&Tu(_,e,n,i,t,s)))){if(p=typeof u,g=Ls[_],p==="function"&&(u=u.call(n,i,t,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Fr(u)),g)g(this,t,_,u,n)&&(R=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",qn.lastIndex=0,qn.test(c)||(m=ve(c),f=ve(u)),f?m!==f&&(c=Kn(t,_,c,f)+f):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),L.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],he(c)&&~c.indexOf("random(")&&(c=Fr(c)),ve(c+"")||(c+=He.units[_]||ve(Ln(t,_))||""),(c+"").charAt(1)==="="&&(c=Ln(t,_))):c=Ln(t,_),d=parseFloat(c),M=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in vn&&(_==="autoAlpha"&&(d===1&&Ln(t,"visibility")==="hidden"&&h&&(d=0),L.push("visibility",0,a.visibility),Vn(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=vn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Fn,x){if(this.styles.save(_),y||(S=t._gsap,S.renderTransform&&!e.parseTransform||zr(t,e.parseTransform),b=e.smoothOrigin!==!1&&S.smooth,y=this._pt=new Ie(this._pt,a,Yt,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new Ie(this._pt,S,"scaleY",S.scaleY,(M?ji(S.scaleY,M+h):h)-S.scaleY||0,Za),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(un,0,a[un]),u=b0(u),S.svg?Qa(t,u,0,b,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==S.zOrigin&&Vn(this,S,"zOrigin",S.zOrigin,f),Vn(this,a,_,Ds(c),Ds(u)));continue}else if(_==="svgOrigin"){Qa(t,u,1,b,0,this);continue}else if(_ in zu){C0(this,S,_,d,M?ji(d,M+u):u);continue}else if(_==="smoothOrigin"){Vn(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){P0(this,u,t);continue}}else _ in a||(_=or(_)||_);if(x||(h||h===0)&&(d||d===0)&&!h0.test(u)&&_ in a)m=(c+"").substr((d+"").length),h||(h=0),f=ve(u)||(_ in He.units?He.units[_]:m),m!==f&&(d=Kn(t,_,c,f)),this._pt=new Ie(this._pt,x?S:a,_,d,(M?ji(d,M+h):h)-d,!x&&(f==="px"||_==="zIndex")&&e.autoRound!==!1?p0:Za),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=d0);else if(_ in a)T0.call(this,t,_,c,M?M+u:u);else if(_ in t)this.add(t,_,c||t[_],M?M+u:u,i,s);else if(_!=="parseTransform"){fo(_,u);continue}x||(_ in a?L.push(_,0,a[_]):L.push(_,1,c||t[_])),o.push(_)}}R&&Pu(this)},render:function(t,e){if(e.tween._time||!yo())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ln,aliases:vn,getSetter:function(t,e,n){var i=vn[e];return i&&i.indexOf(",")<0&&(e=i),e in Fn&&e!==un&&(t._gsap.x||Ln(t,"x"))?n&&sc===n?e==="scale"?v0:g0:(sc=n||{})&&(e==="scale"?x0:M0):t.style&&!co(t.style[e])?m0:~e.indexOf("-")?_0:Mo(t,e)},core:{_removeProperty:Or,_getMatrix:bo}};Fe.utils.checkPrefix=or;Fe.core.getStyleSaver=Fu;(function(r,t,e,n){var i=Ue(r+","+t+","+e,function(s){Fn[s]=1});Ue(t,function(s){He.units[s]="deg",zu[s]=1}),vn[i[13]]=r+","+t,Ue(n,function(s){var o=s.split(":");vn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ue("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){He.units[r]="px"});Fe.registerPlugin(Hu);var Cn=Fe.registerPlugin(Hu)||Fe;Cn.core.Tween;function L0(r){const t=new Hc;t.onStart=function(u,h,d){r.loading=!0},t.onLoad=function(){document.getElementById("loader").remove();const h=document.getElementById("anyKey");h.style.visibility="visible",r.loading=!1},t.onProgress=function(u,h,d){},t.onError=function(u){console.log("There was an error loading "+u)};const e=new pg(t);r.earthDayTex=e.load("planets/2k_Earth.jpg"),r.earthDayTex.colorSpace=yt,r.earthNightTex=e.load("planets/2k_earth_nightmap.jpg"),r.earthNightTex.colorSpace=yt;const n=new oo(1,128,128);for(let u=0;u<r.planetNames.length;u++){const h=e.load("planets/2k_"+r.planetNames[u]+".jpg");h.colorSpace=yt;const d=new Ts({map:r.planetNames[u]=="Earth"?r.earthDayTex:h}),p=new gn(n,d);if(p.position.set(-4*r.objectsDistance+u*r.objectsDistance,0,0),r.scene.add(p),r.planets.push(p),r.planetNames[u]=="Saturn"){const g=new ao(1,2,64);let _=g.attributes.position,m=new F;for(let x=0;x<_.count;x++)m.fromBufferAttribute(_,x),g.attributes.uv.setXY(x,m.length()<1.5?0:1,1);const f=new Ts({map:e.load("planets/2k_saturn_ring_alpha.png"),transparent:!0,side:mn}),M=new gn(g,f);M.rotation.x=1.8,p.add(M)}}const i=600,s=new Float32Array(i*3);for(let u=0;u<i;u++)s[u*3+0]=(Math.random()-.5)*r.objectsDistance*(r.planets.length+1),s[u*3+1]=(Math.random()-.5)*15,s[u*3+2]=(Math.random()-1)*20;const o=.05,a=new hn;a.setAttribute("position",new cn(s,3));const l=new kc({map:e.load("background/star.png"),sizeAttenuation:!0,size:o}),c=new hg(a,l);r.scene.add(c)}function D0(r,t){const e=r.domElement;t.width=e.clientWidth,t.height=e.clientHeight;const n=e.width!==t.width||e.height!==t.height;return n&&r.setSize(t.width,t.height,!1),n}function U0(){const r=document.body;r.requestFullscreen?r.requestFullscreen():r.webkitRequestFullscreen?r.webkitRequestFullscreen():r.msRequestFullscreen&&r.msRequestFullscreen()}function I0(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}class F0{constructor(t,e){this.textBox=t,this.buttonManger=e,this.planets=[],this.objectsDistance=20,this.toSectionSteps=10,this.scrollCount=0,this.toSectionSteps=10,this.nextSection=!1,this.section=0,this.startScreen=!0,this.nightMode=!1,this.noScroll=!1,this.loading=!1,this.pressed=!1,this.pressedPlanet=void 0,this.planetNames=["Sun","Mercury","Venus","Moon","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"],this.earthDayTex=void 0,this.earthNightTex=void 0,this.initScene()}initScene(){this.scene=new ug,this.cameraGroup=new xr,this.scene.add(this.cameraGroup),this.light=new _g("#ffffff"),this.light.position.set(0,0,15),this.scene.add(this.light),this.raycaster=new gg,this.camera=new Ke(45,2,.1,100),this.camera.position.z=5,this.cameraGroup.add(this.camera),L0(this)}renderScene(t,e,n){if(this.planets.length>0&&!this.pressed&&this.planets.forEach(i=>{i.rotation.y+=af.degToRad(5)*t}),this.textBox.element.style.opacity=this.textBox.opacity.value,!this.pressed&&document.hasFocus()){const s=e*.1,o=n*.1;this.cameraGroup.position.x+=(s-this.cameraGroup.position.x)*.5*t,this.cameraGroup.position.y+=(o-this.cameraGroup.position.y)*.5*t}}goToSection(t){this.buttonManger.setVisibility(t),this.section=t,this.nextSection=!0,this.scrollCount=0,this.noScroll=!0,this.textBox.setTextBox(t,this.planetNames),this.planets[t+4].rotation.x=0,Cn.to(this.camera.position,{x:this.section*this.objectsDistance,duration:1.2,ease:"circ.out",onComplete:()=>{this.nextSection=!1,this.noScroll=!1,this.textBox.opacity.value=this.startScreen?0:1}})}moveLeftSection(){this.section>-4&&Cn.to(this.textBox.opacity,{value:0,duration:.5,ease:"power2.out",onComplete:()=>{this.goToSection(this.section-1)}})}moveRightSection(){this.section<5&&Cn.to(this.textBox.opacity,{value:0,duration:.5,ease:"power2.out",onComplete:()=>{this.goToSection(this.section+1)}})}returnToEarth(){Cn.to(this.textBox.opacity,{value:0,duration:.5,ease:"power2.out",onComplete:()=>{this.goToSection(0)}})}rotatePlanet(t,e,n,i){this.pressed&&(this.pressedPlanet.rotation.x+=e*n,this.pressedPlanet.rotation.y+=t*i)}clickPlanet(t){this.raycaster.setFromCamera(t,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0);e.length>0&&e[0].object.type==="Mesh"&&(this.pressed=!0,this.pressedPlanet=e[0].object)}setNightMode(){this.nightMode=!this.nightMode,this.nightMode?this.planets[4].material.map=this.earthNightTex:this.planets[4].material.map=this.earthDayTex}scrollEvent(t){if(this.noScroll||this.startScreen)return;let e=t>0?1:-1;if(this.nextSection||(this.section>-4&&this.section<5?this.scrollCount+=e:this.section==-4&&(e<0||this.scrollCount<this.toSectionSteps-2)?this.scrollCount+=e:this.section==5&&(e>0||this.scrollCount>-this.toSectionSteps+2)&&(this.scrollCount+=e)),this.scrollCount<=3&&this.scrollCount>=-3){const n=this.scrollCount==0?1:this.scrollCount%2==0?.6:this.scrollCount%3==0?0:.85;Cn.to(this.textBox.opacity,{value:n,duration:.5,ease:"power2.out"})}if(this.scrollCount>=this.toSectionSteps||this.scrollCount<=-this.toSectionSteps){const n=this.scrollCount>0?this.section-1:this.section+1;this.goToSection(n)}else Cn.to(this.camera.position,{x:this.section*this.objectsDistance-this.objectsDistance*this.scrollCount/8/this.toSectionSteps,duration:1,ease:"slow(0.1, 0.1, false)"})}removeStartScreen(){this.startScreen&&!this.loading&&(document.querySelector(".startScreen").remove(),this.startScreen=!1,this.goToSection(0),Cn.from(this.planets[4].scale,{z:.5,x:.5,y:.5,duration:1.75,ease:"power2.out"}))}setPortraitMode(){this.planets.forEach((t,e)=>{t.position.set(-4*this.objectsDistance+e*this.objectsDistance,.75,0),t.scale.set(.75,.75,.75)})}setLandscapeMode(){this.planets.forEach((t,e)=>{t.position.set(-4*this.objectsDistance+e*this.objectsDistance-1.5,0,0),t.scale.set(1.2,1.2,1.2)})}resetRotation(){Cn.to(this.planets[this.section+4].rotation,{x:0,duration:2,ease:"power1.out"})}}const wa={Sun:{facts:["The Sun is a massive ball of hot, glowing gas, primarily composed of hydrogen (about 74%) and helium (about 24%).","It is the main source of energy for our solar system, generating light, heat, and other forms of radiation through the process of nuclear fusion.","The Sun's surface has dark, cooler regions called sunspots, which are caused by strong magnetic activity."]},Mercury:{facts:["Mercury is the closest planet to the Sun and experiences extreme temperature variations, ranging from scorching hot during the day to freezing cold at night.","It has a very thin atmosphere, composed mainly of gases like helium and trace amounts of hydrogen, oxygen, and other elements.","Mercury has a large iron core, making it the most metal-rich planet in the solar system."]},Venus:{facts:[`Venus is often referred to as Earth's "sister planet" due to its similar size, mass, and composition. However, it has a thick, toxic atmosphere that creates a runaway greenhouse effect, making it the hottest planet in our solar system.`,"It rotates on its axis very slowly, taking longer to complete one rotation than it does to orbit the Sun, resulting in its backward (retrograde) rotation compared to other planets.","Venus has a dense layer of clouds made up of sulfuric acid, which gives it a bright, reflective appearance in the sky."]},Moon:{facts:["The Moon is Earth's only natural satellite and is the fifth-largest moon in the solar system.","It has distinct phases due to its orbit around Earth, which cause different portions of the Moon to be illuminated by the Sun, resulting in the familiar cycle of the lunar phases.","The Moon's gravitational pull on Earth is responsible for the tides, which occur as a result of the Moon's gravitational attraction affecting the Earth's oceans."]},Earth:{facts:['Earth is often referred to as the "Blue Planet" because of its abundant water, which covers approximately 71% of its surface.',"It has a magnetic field generated by its iron core, which helps protect the planet from harmful solar radiation.","Earth orbits around the Sun in a slightly elliptical path. This journey takes approximately 365.25 days."]},Mars:{facts:['Mars is often called the "Red Planet" due to its reddish appearance, caused by iron oxide (rust) on its surface.',"It has the tallest volcano and the deepest, longest canyon in the solar system. Olympus Mons, the largest volcano, is about three times the height of Mount Everest, and Valles Marineris, the canyon, is several times longer and deeper than the Grand Canyon on Earth.","Mars has polar ice caps composed of water ice and carbon dioxide ice, and scientists have found evidence of ancient riverbeds and the possibility of liquid water in the past."]},Jupiter:{facts:["Jupiter is the largest planet in our solar system, with a mass more than twice that of all the other planets combined.","It has a strong magnetic field that generates intense radiation belts, making it a hazardous environment for spacecraft.","Jupiter is known for its iconic Great Red Spot, a massive storm that has been raging for over 300 years and is larger than Earth."]},Saturn:{facts:["Saturn is famous for its beautiful and prominent ring system, made up of countless particles of ice and rock ranging in size from dust grains to larger moonlets.","It has the second-largest moon in the solar system, Titan, which has a thick atmosphere and contains lakes and rivers of liquid methane and ethane.","Saturn is the least dense planet, and if placed in a giant bathtub, it would float due to its low density."]},Uranus:{facts:["Uranus is an ice giant, composed mostly of hydrogen and helium, with an atmosphere that contains traces of methane, giving it a bluish-green color.","Unlike other planets, Uranus rotates on its side, with its poles almost aligned with the plane of its orbit, likely due to a massive collision early in its history.","It has a unique set of faint, narrow rings, which were discovered when Uranus passed in front of a star, causing the starlight to momentarily flicker."]},Neptune:{facts:["Neptune is the farthest known planet from the Sun and is the fourth-largest planet by diameter.","It has the strongest winds in the solar system, with speeds reaching up to 1,200 miles per hour (2,000 kilometers per hour).","Neptune has a dynamic atmosphere, featuring prominent dark spots similar to Jupiter's storms, the most famous of which is the Great Dark Spot discovered by the Voyager 2 spacecraft in 1989."]}};class N0{constructor(){this.element=document.querySelector(".element"),this.planetName=document.getElementById("planetName"),this.fact1=document.getElementById("fact1"),this.fact2=document.getElementById("fact2"),this.fact3=document.getElementById("fact3"),this.opacity={value:0}}setTextBox(t,e){this.planetName.innerText=e[t+4],this.fact1.innerText=wa[e[t+4]].facts[0],this.fact2.innerText=wa[e[t+4]].facts[1],this.fact3.innerText=wa[e[t+4]].facts[2]}}class O0{constructor(){this.isReturnButton=!1,this.earthImg=document.getElementById("earthImg"),this.leftArrow=document.getElementById("left-arrow"),this.rightArrow=document.getElementById("right-arrow")}getEarthState(){return this.isReturnButton}setVisibility(t){this.leftArrow.style.visibility=t==-4?"hidden":"visible",this.rightArrow.style.visibility=t==5?"hidden":"visible",t==0?(this.earthImg.src="icons/night-mode-icon.svg",this.earthImg.title="Night mode",this.isReturnButton=!1):(this.earthImg.src="icons/planet-earth-icon.svg",this.earthImg.title="Return to earth",this.isReturnButton=!0)}}const B0=document.querySelector("#main-canvas");B0.style.backgroundImage='url("background/2k_stars.jpg")';let Ao=0,Es=0,dc=0,Ra=!1;const ci={width:window.innerWidth,height:window.innerHeight};let gs=!(ci.width<=ci.height);const z0=new N0,Vu=new O0;let zt=new F0(z0,Vu);const G0=document.querySelector("#main-canvas"),ys=new Gc({canvas:G0,antialias:!0,alpha:!0});ys.setPixelRatio(window.devicePixelRatio);const k0=document.getElementById("earthButton");k0.addEventListener("click",function(r){Vu.getEarthState()?zt.returnToEarth():zt.setNightMode()},!1);const H0=document.getElementById("left-arrow");H0.addEventListener("click",function(r){zt.moveLeftSection()},!1);const V0=document.getElementById("right-arrow");V0.addEventListener("click",function(r){zt.moveRightSection()},!1);document.addEventListener("keydown",function(r){zt.startScreen?zt.removeStartScreen():(r.key==="ArrowLeft"&&zt.moveLeftSection(),r.key==="ArrowRight"&&zt.moveRightSection())});document.getElementById("textBox").onclick=()=>{zt.resetRotation()};const W0=document.getElementById("infoBtn"),Dn=document.querySelector(".info"),X0=document.querySelector(".esc");W0.addEventListener("click",function(){Dn.classList.contains("fly-in")?(Dn.classList.remove("fly-in"),Dn.classList.add("fly-out")):Dn.classList.add("fly-in")});X0.addEventListener("click",function(){Dn.classList.remove("fly-in"),Dn.classList.add("fly-out")});Dn.addEventListener("transitionend",function(r){r.propertyName==="transform"&&Dn.classList.contains("fly-out")&&Dn.classList.remove("fly-out")});function q0(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{r.apply(this,n)},t)}}function Y0(r){zt.scrollEvent(r.deltaY)}document.addEventListener("wheel",q0(Y0,10));document.addEventListener("mousedown",j0,!1);document.addEventListener("mouseup",wo,!1);document.addEventListener("mouseleave",wo,!1);document.addEventListener("mousemove",$0,!1);document.addEventListener("touchstart",K0,!1);document.addEventListener("touchend",Z0,!1);document.addEventListener("touchmove",J0,!1);document.addEventListener("touchcancel",wo,!1);function j0(r){zt.removeStartScreen();const t=new Gt(r.clientX/window.innerWidth*2-1,-(r.clientY/window.innerHeight)*2+1);zt.clickPlanet(t)}function K0(r){zt.removeStartScreen();const t=r.touches[0];Ao=r.touches[0].clientX;const e=new Gt(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight)*2+1);zt.clickPlanet(e)}function wo(r){zt.pressed=!1}function Z0(r){!zt.pressed&&Math.abs(Es)>200&&(Es>0?zt.moveLeftSection():zt.moveRightSection()),Ao=0,Es=0,zt.pressed=!1}let Gr=0,kr=0,Rr=0,Cr=0;function $0(r){const t=r.clientX/window.innerWidth*2-1,e=-(r.clientY/window.innerHeight)*2+1;Rr=t-Gr,Cr=e-kr,zt.rotatePlanet(Rr,Cr,2,4),Gr=t,kr=e}function J0(r){const t=r.touches[0],e=t.clientX/window.innerWidth*2-1,n=-(t.clientY/window.innerHeight)*2+1;Rr=e-Gr,Cr=n-kr,Es=t.clientX-Ao,Math.abs(Rr)<.05&&Math.abs(Cr)<.05&&zt.rotatePlanet(Rr,Cr,1.5,3),Gr=e,kr=n}const Q0=document.getElementById("fullScreenBtn"),pc=document.getElementById("fsImg");Q0.addEventListener("click",()=>{Ra?(I0(),Ra=!1,pc.src="icons/full-screen.svg"):(U0(),Ra=!0,pc.src="icons/min-screen.svg")});function Wu(r){r*=.001;const t=r-dc;if(dc=r,D0(ys,ci)){const e=ys.domElement;zt.camera.aspect=e.clientWidth/e.clientHeight,zt.camera.updateProjectionMatrix(),!gs&&ci.width<=ci.height?(zt.setPortraitMode(),gs=!0):gs&&ci.width>ci.height&&(zt.setLandscapeMode(),gs=!1)}zt.renderScene(t,Gr,kr),ys.render(zt.scene,zt.camera),requestAnimationFrame(Wu)}requestAnimationFrame(Wu);
