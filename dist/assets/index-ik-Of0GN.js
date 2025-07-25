(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jo="169",zD={ROTATE:0,DOLLY:1,PAN:2},VD={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sI=0,TA=1,oI=2,pm=1,aI=2,di=3,Zn=0,Kt=1,fn=2,jn=0,Hr=1,RA=2,DA=3,QA=4,cI=5,rr=100,lI=101,uI=102,hI=103,AI=104,dI=200,fI=201,pI=202,gI=203,Fu=204,Ou=205,mI=206,EI=207,II=208,_I=209,CI=210,vI=211,yI=212,xI=213,SI=214,Gu=0,Hu=1,ku=2,Yr=3,zu=4,Vu=5,Yu=6,Wu=7,gm=0,BI=1,MI=2,Gi=0,wI=1,bI=2,TI=3,RI=4,DI=5,QI=6,LI=7,LA="attached",NI="detached",mm=300,Wr=301,qr=302,Fo=303,qu=304,Jo=306,Xr=1e3,Xn=1001,Oo=1002,un=1003,Em=1004,Ss=1005,wt=1006,To=1007,Kn=1008,on=1009,Im=1010,_m=1011,Ns=1012,Fh=1013,Hi=1014,jt=1015,sn=1016,Oh=1017,Gh=1018,cr=1020,Cm=35902,vm=1021,ym=1022,vn=1023,xm=1024,Sm=1025,kr=1026,lr=1027,Zo=1028,Hh=1029,Bm=1030,kh=1031,zh=1033,Ro=33776,Do=33777,Qo=33778,Lo=33779,Xu=35840,Ku=35841,ju=35842,Ju=35843,Zu=36196,$u=37492,eh=37496,th=37808,nh=37809,ih=37810,rh=37811,sh=37812,oh=37813,ah=37814,ch=37815,lh=37816,uh=37817,hh=37818,Ah=37819,dh=37820,fh=37821,No=36492,ph=36494,gh=36495,Mm=36283,mh=36284,Eh=36285,Ih=36286,Ps=2300,Us=2301,pa=2302,NA=2400,PA=2401,UA=2402,PI=2500,UI=0,wm=1,_h=2,ks=3200,FI=3201,bm=0,OI=1,Un="",It="srgb",Qt="srgb-linear",Vh="display-p3",$o="display-p3-linear",Go="linear",Tt="srgb",Ho="rec709",ko="p3",yr=7680,FA=519,GI=512,HI=513,kI=514,Tm=515,zI=516,VI=517,YI=518,WI=519,Ch=35044,OA="300 es",gi=2e3,zo=2001;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let GA=1234567;const Ts=Math.PI/180,Kr=180/Math.PI;function Gn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Xt(i,e,t){return Math.max(e,Math.min(t,i))}function Yh(i,e){return(i%e+e)%e}function qI(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function XI(i,e,t){return i!==e?(t-i)/(e-i):0}function Rs(i,e,t){return(1-t)*i+t*e}function KI(i,e,t,n){return Rs(i,e,1-Math.exp(-t*n))}function jI(i,e=1){return e-Math.abs(Yh(i,e*2)-e)}function JI(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ZI(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $I(i,e){return i+Math.floor(Math.random()*(e-i+1))}function e_(i,e){return i+Math.random()*(e-i)}function t_(i){return i*(.5-Math.random())}function n_(i){i!==void 0&&(GA=i);let e=GA+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function i_(i){return i*Ts}function r_(i){return i*Kr}function s_(i){return(i&i-1)===0&&i!==0}function o_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function a_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function c_(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),A=o((e-n)/2),d=s((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*A,a*c);break;case"YZY":i.set(l*A,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*A,a*u,a*c);break;case"XZX":i.set(a*u,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const l_={DEG2RAD:Ts,RAD2DEG:Kr,generateUUID:Gn,clamp:Xt,euclideanModulo:Yh,mapLinear:qI,inverseLerp:XI,lerp:Rs,damp:KI,pingpong:jI,smoothstep:JI,smootherstep:ZI,randInt:$I,randFloat:e_,randFloatSpread:t_,seededRandom:n_,degToRad:i_,radToDeg:r_,isPowerOfTwo:s_,ceilPowerOfTwo:o_,floorPowerOfTwo:a_,setQuaternionFromProperEuler:c_,normalize:Bt,denormalize:Fn};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,n,r,s,o,a,l,c){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],A=n[2],d=n[5],m=n[8],E=r[0],g=r[3],p=r[6],C=r[1],y=r[4],M=r[7],P=r[2],Q=r[5],R=r[8];return s[0]=o*E+a*C+l*P,s[3]=o*g+a*y+l*Q,s[6]=o*p+a*M+l*R,s[1]=c*E+u*C+h*P,s[4]=c*g+u*y+h*Q,s[7]=c*p+u*M+h*R,s[2]=A*E+d*C+m*P,s[5]=A*g+d*y+m*Q,s[8]=A*p+d*M+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,A=a*l-u*s,d=c*s-o*l,m=t*h+n*A+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/m;return e[0]=h*E,e[1]=(r*c-u*n)*E,e[2]=(a*n-r*o)*E,e[3]=A*E,e[4]=(u*t-r*l)*E,e[5]=(r*s-a*t)*E,e[6]=d*E,e[7]=(n*l-c*t)*E,e[8]=(o*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new lt;function Rm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function u_(){const i=Fs("canvas");return i.style.display="block",i}const HA={};function Po(i){i in HA||(HA[i]=!0,console.warn(i))}function h_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function A_(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function d_(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const kA=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zA=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),us={[Qt]:{transfer:Go,primaries:Ho,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[It]:{transfer:Tt,primaries:Ho,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$o]:{transfer:Go,primaries:ko,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(zA),fromReference:i=>i.applyMatrix3(kA)},[Vh]:{transfer:Tt,primaries:ko,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(zA),fromReference:i=>i.applyMatrix3(kA).convertLinearToSRGB()}},f_=new Set([Qt,$o]),_t={enabled:!0,_workingColorSpace:Qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!f_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=us[e].toReference,r=us[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return us[i].primaries},getTransfer:function(i){return i===Un?Go:us[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(us[e].luminanceCoefficients)}};function zr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ma(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let xr;class p_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xr===void 0&&(xr=Fs("canvas")),xr.width=e.width,xr.height=e.height;const n=xr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zr(t[n]/255)*255):t[n]=zr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let g_=0;class Dm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ea(r[o].image)):s.push(Ea(r[o]))}else s=Ea(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?p_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let m_=0;class kt extends _i{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=Xn,r=Xn,s=wt,o=Kn,a=vn,l=on,c=kt.DEFAULT_ANISOTROPY,u=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=Gn(),this.name="",this.source=new Dm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=mm;kt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],A=l[1],d=l[5],m=l[9],E=l[2],g=l[6],p=l[10];if(Math.abs(u-A)<.01&&Math.abs(h-E)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+A)<.1&&Math.abs(h+E)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(d+1)/2,P=(p+1)/2,Q=(u+A)/4,R=(h+E)/4,T=(m+g)/4;return y>M&&y>P?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=Q/n,s=R/n):M>P?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=Q/r,s=T/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=R/s,r=T/s),this.set(n,r,s,t),this}let C=Math.sqrt((g-m)*(g-m)+(h-E)*(h-E)+(A-u)*(A-u));return Math.abs(C)<.001&&(C=1),this.x=(g-m)/C,this.y=(h-E)/C,this.z=(A-u)/C,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class E_ extends _i{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new kt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends E_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qm extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I_ extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let zi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const A=s[o+0],d=s[o+1],m=s[o+2],E=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=A,e[t+1]=d,e[t+2]=m,e[t+3]=E;return}if(h!==E||l!==A||c!==d||u!==m){let g=1-a;const p=l*A+c*d+u*m+h*E,C=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const P=Math.sqrt(y),Q=Math.atan2(P,p*C);g=Math.sin(g*Q)/P,a=Math.sin(a*Q)/P}const M=a*C;if(l=l*g+A*M,c=c*g+d*M,u=u*g+m*M,h=h*g+E*M,g===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],A=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*d-c*A,e[t+1]=l*m+u*A+c*h-a*d,e[t+2]=c*m+u*d+a*A-l*h,e[t+3]=u*m-a*h-l*A-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),A=l(n/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=A*u*h+c*d*m,this._y=c*d*h-A*u*m,this._z=c*u*m+A*d*h,this._w=c*u*h-A*d*m;break;case"YXZ":this._x=A*u*h+c*d*m,this._y=c*d*h-A*u*m,this._z=c*u*m-A*d*h,this._w=c*u*h+A*d*m;break;case"ZXY":this._x=A*u*h-c*d*m,this._y=c*d*h+A*u*m,this._z=c*u*m+A*d*h,this._w=c*u*h-A*d*m;break;case"ZYX":this._x=A*u*h-c*d*m,this._y=c*d*h+A*u*m,this._z=c*u*m-A*d*h,this._w=c*u*h+A*d*m;break;case"YZX":this._x=A*u*h+c*d*m,this._y=c*d*h+A*u*m,this._z=c*u*m-A*d*h,this._w=c*u*h-A*d*m;break;case"XZY":this._x=A*u*h-c*d*m,this._y=c*d*h-A*u*m,this._z=c*u*m+A*d*h,this._w=c*u*h+A*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],A=n+a+h;if(A>0){const d=.5/Math.sqrt(A+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,A=Math.sin(t*u)/c;return this._w=o*h+this._w*A,this._x=n*h+this._x*A,this._y=r*h+this._y*A,this._z=s*h+this._z*A,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(VA.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(VA.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ia=new X,VA=new zi;class Ci{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(s,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(e.matrixWorld),this.union(js)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),Js.subVectors(this.max,hs),Sr.subVectors(e.a,hs),Br.subVectors(e.b,hs),Mr.subVectors(e.c,hs),wi.subVectors(Br,Sr),bi.subVectors(Mr,Br),Ki.subVectors(Sr,Mr);let t=[0,-wi.z,wi.y,0,-bi.z,bi.y,0,-Ki.z,Ki.y,wi.z,0,-wi.x,bi.z,0,-bi.x,Ki.z,0,-Ki.x,-wi.y,wi.x,0,-bi.y,bi.x,0,-Ki.y,Ki.x,0];return!_a(t,Sr,Br,Mr,Js)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,Sr,Br,Mr,Js))?!1:(Zs.crossVectors(wi,bi),t=[Zs.x,Zs.y,Zs.z],_a(t,Sr,Br,Mr,Js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new X,new X,new X,new X,new X,new X,new X,new X],Rn=new X,js=new Ci,Sr=new X,Br=new X,Mr=new X,wi=new X,bi=new X,Ki=new X,hs=new X,Js=new X,Zs=new X,ji=new X;function _a(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ji.fromArray(i,s);const a=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),u=n.dot(ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const __=new Ci,As=new X,Ca=new X;class ei{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):__.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(As,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(Ca)),this.expandByPoint(As.copy(e.center).sub(Ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new X,va=new X,$s=new X,Ti=new X,ya=new X,eo=new X,xa=new X;let zs=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){va.copy(e).add(t).multiplyScalar(.5),$s.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(va);const s=e.distanceTo(t)*.5,o=-this.direction.dot($s),a=Ti.dot(this.direction),l=-Ti.dot($s),c=Ti.lengthSq(),u=Math.abs(1-o*o);let h,A,d,m;if(u>0)if(h=o*l-a,A=o*a-l,m=s*u,h>=0)if(A>=-m)if(A<=m){const E=1/u;h*=E,A*=E,d=h*(h+o*A+2*a)+A*(o*h+A+2*l)+c}else A=s,h=Math.max(0,-(o*A+a)),d=-h*h+A*(A+2*l)+c;else A=-s,h=Math.max(0,-(o*A+a)),d=-h*h+A*(A+2*l)+c;else A<=-m?(h=Math.max(0,-(-o*s+a)),A=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+A*(A+2*l)+c):A<=m?(h=0,A=Math.min(Math.max(-s,-l),s),d=A*(A+2*l)+c):(h=Math.max(0,-(o*s+a)),A=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+A*(A+2*l)+c);else A=o>0?-s:s,h=Math.max(0,-(o*A+a)),d=-h*h+A*(A+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(va).addScaledVector($s,A),d}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const n=ci.dot(this.direction),r=ci.dot(ci)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,A=this.origin;return c>=0?(n=(e.min.x-A.x)*c,r=(e.max.x-A.x)*c):(n=(e.max.x-A.x)*c,r=(e.min.x-A.x)*c),u>=0?(s=(e.min.y-A.y)*u,o=(e.max.y-A.y)*u):(s=(e.max.y-A.y)*u,o=(e.min.y-A.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-A.z)*h,l=(e.max.z-A.z)*h):(a=(e.max.z-A.z)*h,l=(e.min.z-A.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,r,s){ya.subVectors(t,e),eo.subVectors(n,e),xa.crossVectors(ya,eo);let o=this.direction.dot(xa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,e);const l=a*this.direction.dot(eo.crossVectors(Ti,eo));if(l<0)return null;const c=a*this.direction.dot(ya.cross(Ti));if(c<0||l+c>o)return null;const u=-a*Ti.dot(xa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class rt{constructor(e,t,n,r,s,o,a,l,c,u,h,A,d,m,E,g){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,A,d,m,E,g)}set(e,t,n,r,s,o,a,l,c,u,h,A,d,m,E,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=A,p[3]=d,p[7]=m,p[11]=E,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/wr.setFromMatrixColumn(e,0).length(),s=1/wr.setFromMatrixColumn(e,1).length(),o=1/wr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const A=o*u,d=o*h,m=a*u,E=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=A-E*c,t[9]=-a*l,t[2]=E-A*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const A=l*u,d=l*h,m=c*u,E=c*h;t[0]=A+E*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=E+A*a,t[10]=o*l}else if(e.order==="ZXY"){const A=l*u,d=l*h,m=c*u,E=c*h;t[0]=A-E*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=E-A*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const A=o*u,d=o*h,m=a*u,E=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=A*c+E,t[1]=l*h,t[5]=E*c+A,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const A=o*l,d=o*c,m=a*l,E=a*c;t[0]=l*u,t[4]=E-A*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=A-E*h}else if(e.order==="XZY"){const A=o*l,d=o*c,m=a*l,E=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=A*h+E,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=E*h+A}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C_,e,v_)}lookAt(e,t,n){const r=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Ri.crossVectors(n,In),Ri.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Ri.crossVectors(n,In)),Ri.normalize(),to.crossVectors(In,Ri),r[0]=Ri.x,r[4]=to.x,r[8]=In.x,r[1]=Ri.y,r[5]=to.y,r[9]=In.y,r[2]=Ri.z,r[6]=to.z,r[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],A=n[9],d=n[13],m=n[2],E=n[6],g=n[10],p=n[14],C=n[3],y=n[7],M=n[11],P=n[15],Q=r[0],R=r[4],T=r[8],U=r[12],_=r[1],v=r[5],F=r[9],G=r[13],z=r[2],Z=r[6],Y=r[10],oe=r[14],te=r[3],Ce=r[7],Ie=r[11],Le=r[15];return s[0]=o*Q+a*_+l*z+c*te,s[4]=o*R+a*v+l*Z+c*Ce,s[8]=o*T+a*F+l*Y+c*Ie,s[12]=o*U+a*G+l*oe+c*Le,s[1]=u*Q+h*_+A*z+d*te,s[5]=u*R+h*v+A*Z+d*Ce,s[9]=u*T+h*F+A*Y+d*Ie,s[13]=u*U+h*G+A*oe+d*Le,s[2]=m*Q+E*_+g*z+p*te,s[6]=m*R+E*v+g*Z+p*Ce,s[10]=m*T+E*F+g*Y+p*Ie,s[14]=m*U+E*G+g*oe+p*Le,s[3]=C*Q+y*_+M*z+P*te,s[7]=C*R+y*v+M*Z+P*Ce,s[11]=C*T+y*F+M*Y+P*Ie,s[15]=C*U+y*G+M*oe+P*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],A=e[10],d=e[14],m=e[3],E=e[7],g=e[11],p=e[15];return m*(+s*l*h-r*c*h-s*a*A+n*c*A+r*a*d-n*l*d)+E*(+t*l*d-t*c*A+s*o*A-r*o*d+r*c*u-s*l*u)+g*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-t*l*h+t*a*A+r*o*h-n*o*A+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],A=e[10],d=e[11],m=e[12],E=e[13],g=e[14],p=e[15],C=h*g*c-E*A*c+E*l*d-a*g*d-h*l*p+a*A*p,y=m*A*c-u*g*c-m*l*d+o*g*d+u*l*p-o*A*p,M=u*E*c-m*h*c+m*a*d-o*E*d-u*a*p+o*h*p,P=m*h*l-u*E*l-m*a*A+o*E*A+u*a*g-o*h*g,Q=t*C+n*y+r*M+s*P;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/Q;return e[0]=C*R,e[1]=(E*A*s-h*g*s-E*r*d+n*g*d+h*r*p-n*A*p)*R,e[2]=(a*g*s-E*l*s+E*r*c-n*g*c-a*r*p+n*l*p)*R,e[3]=(h*l*s-a*A*s-h*r*c+n*A*c+a*r*d-n*l*d)*R,e[4]=y*R,e[5]=(u*g*s-m*A*s+m*r*d-t*g*d-u*r*p+t*A*p)*R,e[6]=(m*l*s-o*g*s-m*r*c+t*g*c+o*r*p-t*l*p)*R,e[7]=(o*A*s-u*l*s+u*r*c-t*A*c-o*r*d+t*l*d)*R,e[8]=M*R,e[9]=(m*h*s-u*E*s-m*n*d+t*E*d+u*n*p-t*h*p)*R,e[10]=(o*E*s-m*a*s+m*n*c-t*E*c-o*n*p+t*a*p)*R,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*R,e[12]=P*R,e[13]=(u*E*r-m*h*r+m*n*A-t*E*A-u*n*g+t*h*g)*R,e[14]=(m*a*r-o*E*r-m*n*l+t*E*l+o*n*g-t*a*g)*R,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*A+t*a*A)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,A=s*c,d=s*u,m=s*h,E=o*u,g=o*h,p=a*h,C=l*c,y=l*u,M=l*h,P=n.x,Q=n.y,R=n.z;return r[0]=(1-(E+p))*P,r[1]=(d+M)*P,r[2]=(m-y)*P,r[3]=0,r[4]=(d-M)*Q,r[5]=(1-(A+p))*Q,r[6]=(g+C)*Q,r[7]=0,r[8]=(m+y)*R,r[9]=(g-C)*R,r[10]=(1-(A+E))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=wr.set(r[0],r[1],r[2]).length();const o=wr.set(r[4],r[5],r[6]).length(),a=wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const c=1/s,u=1/o,h=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,t.setFromRotationMatrix(Dn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=gi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),A=(n+r)/(n-r);let d,m;if(a===gi)d=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===zo)d=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=A,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=gi){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),A=(t+e)*c,d=(n+r)*u;let m,E;if(a===gi)m=(o+s)*h,E=-2*h;else if(a===zo)m=s*h,E=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-A,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=E,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wr=new X,Dn=new rt,C_=new X(0,0,0),v_=new X(1,1,1),Ri=new X,to=new X,In=new X,YA=new rt,WA=new zi;class $n{constructor(e=0,t=0,n=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],A=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(A,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(A,-1,1)),Math.abs(A)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(A,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(A,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return YA.makeRotationFromQuaternion(e),this.setFromRotationMatrix(YA,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return WA.setFromEuler(this),this.setFromQuaternion(WA,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y_=0;const qA=new X,br=new zi,li=new rt,no=new X,ds=new X,x_=new X,S_=new zi,XA=new X(1,0,0),KA=new X(0,1,0),jA=new X(0,0,1),JA={type:"added"},B_={type:"removed"},Tr={type:"childadded",child:null},Sa={type:"childremoved",child:null};class Nt extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new X,t=new $n,n=new zi,r=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new lt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(XA,e)}rotateY(e){return this.rotateOnAxis(KA,e)}rotateZ(e){return this.rotateOnAxis(jA,e)}translateOnAxis(e,t){return qA.copy(e).applyQuaternion(this.quaternion),this.position.add(qA.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(XA,e)}translateY(e){return this.translateOnAxis(KA,e)}translateZ(e){return this.translateOnAxis(jA,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?no.copy(e):no.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(ds,no,this.up):li.lookAt(no,ds,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),br.setFromRotationMatrix(li),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(JA),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B_),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(JA),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,x_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,S_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),A=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),A.length>0&&(n.skeletons=A),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new X(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new X,ui=new X,Ba=new X,hi=new X,Rr=new X,Dr=new X,ZA=new X,Ma=new X,wa=new X,ba=new X,Ta=new yt,Ra=new yt,Da=new yt;class On{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Qn.subVectors(e,t),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Qn.subVectors(r,t),ui.subVectors(n,t),Ba.subVectors(e,t);const o=Qn.dot(Qn),a=Qn.dot(ui),l=Qn.dot(Ba),c=ui.dot(ui),u=ui.dot(Ba),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const A=1/h,d=(c*l-a*u)*A,m=(o*u-a*l)*A;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Ta.setScalar(0),Ra.setScalar(0),Da.setScalar(0),Ta.fromBufferAttribute(e,t),Ra.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ta,s.x),o.addScaledVector(Ra,s.y),o.addScaledVector(Da,s.z),o}static isFrontFacing(e,t,n,r){return Qn.subVectors(n,t),ui.subVectors(e,t),Qn.cross(ui).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Qn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return On.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Rr.subVectors(r,n),Dr.subVectors(s,n),Ma.subVectors(e,n);const l=Rr.dot(Ma),c=Dr.dot(Ma);if(l<=0&&c<=0)return t.copy(n);wa.subVectors(e,r);const u=Rr.dot(wa),h=Dr.dot(wa);if(u>=0&&h<=u)return t.copy(r);const A=l*h-u*c;if(A<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Rr,o);ba.subVectors(e,s);const d=Rr.dot(ba),m=Dr.dot(ba);if(m>=0&&d<=m)return t.copy(s);const E=d*c-l*m;if(E<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Dr,a);const g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return ZA.subVectors(s,r),a=(h-u)/(h-u+(d-m)),t.copy(r).addScaledVector(ZA,a);const p=1/(g+E+A);return o=E*p,a=A*p,t.copy(n).addScaledVector(Rr,o).addScaledVector(Dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},io={h:0,s:0,l:0};function Qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=_t.workingColorSpace){if(e=Yh(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Qa(o,s,e+1/3),this.g=Qa(o,s,e),this.b=Qa(o,s,e-1/3)}return _t.toWorkingColorSpace(this,r),this}setStyle(e,t=It){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Lm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return _t.fromWorkingColorSpace(en.copy(this),e),Math.round(Xt(en.r*255,0,255))*65536+Math.round(Xt(en.g*255,0,255))*256+Math.round(Xt(en.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(en.copy(this),t);const n=en.r,r=en.g,s=en.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=It){_t.fromWorkingColorSpace(en.copy(this),e);const t=en.r,n=en.g,r=en.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(io);const n=Rs(Di.h,io.h,t),r=Rs(Di.s,io.s,t),s=Rs(Di.l,io.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Ze;Ze.NAMES=Lm;let M_=0;class Mn extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=Hr,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fu,this.blendDst=Ou,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=FA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fu&&(n.blendSrc=this.blendSrc),this.blendDst!==Ou&&(n.blendDst=this.blendDst),this.blendEquation!==rr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==FA&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ui extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=gm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pi=w_();function w_(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function b_(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Xt(i,-65504,65504),pi.floatView[0]=i;const e=pi.uint32View[0],t=e>>23&511;return pi.baseTable[t]+((e&8388607)>>pi.shiftTable[t])}function T_(i){const e=i>>10;return pi.uint32View[0]=pi.mantissaTable[pi.offsetTable[e]+(i&1023)]+pi.exponentTable[e],pi.floatView[0]}const Fr={toHalfFloat:b_,fromHalfFloat:T_},Ht=new X,ro=new et;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ch,this.updateRanges=[],this.gpuType=jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ro.fromBufferAttribute(this,t),ro.applyMatrix3(e),this.setXY(t,ro.x,ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ch&&(e.usage=this.usage),e}}class Nm extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pm extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Jt extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let R_=0;const xn=new rt,La=new Nt,Qr=new X,_n=new Ci,fs=new Ci,qt=new X;class Zt extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rm(e)?Pm:Nm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return La.lookAt(e),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(_n.min,fs.min),_n.expandByPoint(qt),qt.addVectors(_n.max,fs.max),_n.expandByPoint(qt)):(_n.expandByPoint(fs.min),_n.expandByPoint(fs.max))}_n.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(qt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qt.fromBufferAttribute(a,c),l&&(Qr.fromBufferAttribute(e,c),qt.add(Qr)),r=Math.max(r,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new X,l[T]=new X;const c=new X,u=new X,h=new X,A=new et,d=new et,m=new et,E=new X,g=new X;function p(T,U,_){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,U),h.fromBufferAttribute(n,_),A.fromBufferAttribute(s,T),d.fromBufferAttribute(s,U),m.fromBufferAttribute(s,_),u.sub(c),h.sub(c),d.sub(A),m.sub(A);const v=1/(d.x*m.y-m.x*d.y);isFinite(v)&&(E.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(v),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(v),a[T].add(E),a[U].add(E),a[_].add(E),l[T].add(g),l[U].add(g),l[_].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,U=C.length;T<U;++T){const _=C[T],v=_.start,F=_.count;for(let G=v,z=v+F;G<z;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new X,M=new X,P=new X,Q=new X;function R(T){P.fromBufferAttribute(r,T),Q.copy(P);const U=a[T];y.copy(U),y.sub(P.multiplyScalar(P.dot(U))).normalize(),M.crossVectors(Q,U);const v=M.dot(l[T])<0?-1:1;o.setXYZW(T,y.x,y.y,y.z,v)}for(let T=0,U=C.length;T<U;++T){const _=C[T],v=_.start,F=_.count;for(let G=v,z=v+F;G<z;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let A=0,d=n.count;A<d;A++)n.setXYZ(A,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,h=new X;if(e)for(let A=0,d=e.count;A<d;A+=3){const m=e.getX(A+0),E=e.getX(A+1),g=e.getX(A+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let A=0,d=t.count;A<d;A+=3)r.fromBufferAttribute(t,A+0),s.fromBufferAttribute(t,A+1),o.fromBufferAttribute(t,A+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(A+0,u.x,u.y,u.z),n.setXYZ(A+1,u.x,u.y,u.z),n.setXYZ(A+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,A=new c.constructor(l.length*u);let d=0,m=0;for(let E=0,g=l.length;E<g;E++){a.isInterleavedBufferAttribute?d=l[E]*a.data.stride+a.offset:d=l[E]*u;for(let p=0;p<u;p++)A[m++]=c[d++]}return new zt(A,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const A=c[u],d=e(A,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,A=c.length;h<A;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let A=0,d=h.length;A<d;A++)u.push(h[A].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $A=new rt,Ji=new zs,so=new ei,ed=new X,oo=new X,ao=new X,co=new X,Na=new X,lo=new X,td=new X,uo=new X;class Ft extends Nt{constructor(e=new Zt,t=new Ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Na.fromBufferAttribute(h,e),o?lo.addScaledVector(Na,u):lo.addScaledVector(Na.sub(t),u))}t.add(lo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),Ji.copy(e.ray).recast(e.near),!(so.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(so,ed)===null||Ji.origin.distanceToSquared(ed)>(e.far-e.near)**2))&&($A.copy(s).invert(),Ji.copy(e.ray).applyMatrix4($A),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,A=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,E=A.length;m<E;m++){const g=A[m],p=o[g.materialIndex],C=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let M=C,P=y;M<P;M+=3){const Q=a.getX(M),R=a.getX(M+1),T=a.getX(M+2);r=ho(this,p,e,n,c,u,h,Q,R,T),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),E=Math.min(a.count,d.start+d.count);for(let g=m,p=E;g<p;g+=3){const C=a.getX(g),y=a.getX(g+1),M=a.getX(g+2);r=ho(this,o,e,n,c,u,h,C,y,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,E=A.length;m<E;m++){const g=A[m],p=o[g.materialIndex],C=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let M=C,P=y;M<P;M+=3){const Q=M,R=M+1,T=M+2;r=ho(this,p,e,n,c,u,h,Q,R,T),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),E=Math.min(l.count,d.start+d.count);for(let g=m,p=E;g<p;g+=3){const C=g,y=g+1,M=g+2;r=ho(this,o,e,n,c,u,h,C,y,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function D_(i,e,t,n,r,s,o,a){let l;if(e.side===Kt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Zn,a),l===null)return null;uo.copy(a),uo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(uo);return c<t.near||c>t.far?null:{distance:c,point:uo.clone(),object:i}}function ho(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,oo),i.getVertexPosition(l,ao),i.getVertexPosition(c,co);const u=D_(i,e,t,n,oo,ao,co,td);if(u){const h=new X;On.getBarycoord(td,oo,ao,co,h),r&&(u.uv=On.getInterpolatedAttribute(r,a,l,c,h,new et)),s&&(u.uv1=On.getInterpolatedAttribute(s,a,l,c,h,new et)),o&&(u.normal=On.getInterpolatedAttribute(o,a,l,c,h,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const A={a,b:l,c,normal:new X,materialIndex:0};On.getNormal(oo,ao,co,A.normal),u.face=A,u.barycoord=h}return u}class ur extends Zt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let A=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(h,2));function m(E,g,p,C,y,M,P,Q,R,T,U){const _=M/R,v=P/T,F=M/2,G=P/2,z=Q/2,Z=R+1,Y=T+1;let oe=0,te=0;const Ce=new X;for(let Ie=0;Ie<Y;Ie++){const Le=Ie*v-G;for(let ke=0;ke<Z;ke++){const be=ke*_-F;Ce[E]=be*C,Ce[g]=Le*y,Ce[p]=z,c.push(Ce.x,Ce.y,Ce.z),Ce[E]=0,Ce[g]=0,Ce[p]=Q>0?1:-1,u.push(Ce.x,Ce.y,Ce.z),h.push(ke/R),h.push(1-Ie/T),oe+=1}}for(let Ie=0;Ie<T;Ie++)for(let Le=0;Le<R;Le++){const ke=A+Le+Z*Ie,be=A+Le+Z*(Ie+1),re=A+(Le+1)+Z*(Ie+1),ue=A+(Le+1)+Z*Ie;l.push(ke,be,ue),l.push(be,re,ue),te+=6}a.addGroup(d,te,U),d+=te,A+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function cn(i){const e={};for(let t=0;t<i.length;t++){const n=jr(i[t]);for(const r in n)e[r]=n[r]}return e}function Q_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Um(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const L_={clone:jr,merge:cn};var N_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N_,this.fragmentShader=P_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=Q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qh extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new X,nd=new et,id=new et;class nn extends qh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,nd,id),t.subVectors(id,nd)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Lr=-90,Nr=1;class U_ extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(Lr,Nr,e,t);r.layers=this.layers,this.add(r);const s=new nn(Lr,Nr,e,t);s.layers=this.layers,this.add(s);const o=new nn(Lr,Nr,e,t);o.layers=this.layers,this.add(o);const a=new nn(Lr,Nr,e,t);a.layers=this.layers,this.add(a);const l=new nn(Lr,Nr,e,t);l.layers=this.layers,this.add(l);const c=new nn(Lr,Nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),A=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,A,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ea extends kt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Wr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class F_ extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ea(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ur(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:jn});s.uniforms.tEquirect.value=t;const o=new Ft(r,s),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=wt),new U_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Pa=new X,O_=new X,G_=new lt;class nr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Pa.subVectors(n,t).cross(O_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||G_.getNormalMatrix(e),r=this.coplanarPoint(Pa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new ei,Ao=new X;class Xh{constructor(e=new nr,t=new nr,n=new nr,r=new nr,s=new nr,o=new nr){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],A=r[7],d=r[8],m=r[9],E=r[10],g=r[11],p=r[12],C=r[13],y=r[14],M=r[15];if(n[0].setComponents(l-s,A-c,g-d,M-p).normalize(),n[1].setComponents(l+s,A+c,g+d,M+p).normalize(),n[2].setComponents(l+o,A+u,g+m,M+C).normalize(),n[3].setComponents(l-o,A-u,g-m,M-C).normalize(),n[4].setComponents(l-a,A-h,g-E,M-y).normalize(),t===gi)n[5].setComponents(l+a,A+h,g+E,M+y).normalize();else if(t===zo)n[5].setComponents(a,h,E,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ao.x=r.normal.x>0?e.max.x:e.min.x,Ao.y=r.normal.y>0?e.max.y:e.min.y,Ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fm(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function H_(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,A=i.createBuffer();i.bindBuffer(l,A),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:A,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let A=0;for(let d=1;d<h.length;d++){const m=h[A],E=h[d];E.start<=m.start+m.count+1?m.count=Math.max(m.count,E.start+E.count-m.start):(++A,h[A]=E)}h.length=A+1;for(let d=0,m=h.length;d<m;d++){const E=h[d];i.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Jr extends Zt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,A=t/l,d=[],m=[],E=[],g=[];for(let p=0;p<u;p++){const C=p*A-o;for(let y=0;y<c;y++){const M=y*h-s;m.push(M,-C,0),E.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<a;C++){const y=C+c*p,M=C+c*(p+1),P=C+1+c*(p+1),Q=C+1+c*p;d.push(y,M,Q),d.push(M,P,Q)}this.setIndex(d),this.setAttribute("position",new Jt(m,3)),this.setAttribute("normal",new Jt(E,3)),this.setAttribute("uv",new Jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.widthSegments,e.heightSegments)}}var k_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,V_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,K_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,J_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t0=`#ifdef USE_IRIDESCENCE
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
#endif`,n0=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,h0=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,A0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,d0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
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
}`,T0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,L0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,N0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,G0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,H0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J0=`#if defined( USE_POINTS_UV )
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
#endif`,Z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,oC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,hC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,mC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_C=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,SC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,MC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TC=`#ifdef USE_SKINNING
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
#endif`,RC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NC=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PC=`#ifdef USE_TRANSMISSION
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,FC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,OC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,GC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,XC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,jC=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,JC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$C=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tv=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,nv=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,rv=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ov=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,cv=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,uv=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Av=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,fv=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,gv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Ev=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Iv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,_v=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:k_,alphahash_pars_fragment:z_,alphamap_fragment:V_,alphamap_pars_fragment:Y_,alphatest_fragment:W_,alphatest_pars_fragment:q_,aomap_fragment:X_,aomap_pars_fragment:K_,batching_pars_vertex:j_,batching_vertex:J_,begin_vertex:Z_,beginnormal_vertex:$_,bsdfs:e0,iridescence_fragment:t0,bumpmap_pars_fragment:n0,clipping_planes_fragment:i0,clipping_planes_pars_fragment:r0,clipping_planes_pars_vertex:s0,clipping_planes_vertex:o0,color_fragment:a0,color_pars_fragment:c0,color_pars_vertex:l0,color_vertex:u0,common:h0,cube_uv_reflection_fragment:A0,defaultnormal_vertex:d0,displacementmap_pars_vertex:f0,displacementmap_vertex:p0,emissivemap_fragment:g0,emissivemap_pars_fragment:m0,colorspace_fragment:E0,colorspace_pars_fragment:I0,envmap_fragment:_0,envmap_common_pars_fragment:C0,envmap_pars_fragment:v0,envmap_pars_vertex:y0,envmap_physical_pars_fragment:L0,envmap_vertex:x0,fog_vertex:S0,fog_pars_vertex:B0,fog_fragment:M0,fog_pars_fragment:w0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:T0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:D0,lights_pars_begin:Q0,lights_toon_fragment:N0,lights_toon_pars_fragment:P0,lights_phong_fragment:U0,lights_phong_pars_fragment:F0,lights_physical_fragment:O0,lights_physical_pars_fragment:G0,lights_fragment_begin:H0,lights_fragment_maps:k0,lights_fragment_end:z0,logdepthbuf_fragment:V0,logdepthbuf_pars_fragment:Y0,logdepthbuf_pars_vertex:W0,logdepthbuf_vertex:q0,map_fragment:X0,map_pars_fragment:K0,map_particle_fragment:j0,map_particle_pars_fragment:J0,metalnessmap_fragment:Z0,metalnessmap_pars_fragment:$0,morphinstance_vertex:eC,morphcolor_vertex:tC,morphnormal_vertex:nC,morphtarget_pars_vertex:iC,morphtarget_vertex:rC,normal_fragment_begin:sC,normal_fragment_maps:oC,normal_pars_fragment:aC,normal_pars_vertex:cC,normal_vertex:lC,normalmap_pars_fragment:uC,clearcoat_normal_fragment_begin:hC,clearcoat_normal_fragment_maps:AC,clearcoat_pars_fragment:dC,iridescence_pars_fragment:fC,opaque_fragment:pC,packing:gC,premultiplied_alpha_fragment:mC,project_vertex:EC,dithering_fragment:IC,dithering_pars_fragment:_C,roughnessmap_fragment:CC,roughnessmap_pars_fragment:vC,shadowmap_pars_fragment:yC,shadowmap_pars_vertex:xC,shadowmap_vertex:SC,shadowmask_pars_fragment:BC,skinbase_vertex:MC,skinning_pars_vertex:wC,skinning_vertex:bC,skinnormal_vertex:TC,specularmap_fragment:RC,specularmap_pars_fragment:DC,tonemapping_fragment:QC,tonemapping_pars_fragment:LC,transmission_fragment:NC,transmission_pars_fragment:PC,uv_pars_fragment:UC,uv_pars_vertex:FC,uv_vertex:OC,worldpos_vertex:GC,background_vert:HC,background_frag:kC,backgroundCube_vert:zC,backgroundCube_frag:VC,cube_vert:YC,cube_frag:WC,depth_vert:qC,depth_frag:XC,distanceRGBA_vert:KC,distanceRGBA_frag:jC,equirect_vert:JC,equirect_frag:ZC,linedashed_vert:$C,linedashed_frag:ev,meshbasic_vert:tv,meshbasic_frag:nv,meshlambert_vert:iv,meshlambert_frag:rv,meshmatcap_vert:sv,meshmatcap_frag:ov,meshnormal_vert:av,meshnormal_frag:cv,meshphong_vert:lv,meshphong_frag:uv,meshphysical_vert:hv,meshphysical_frag:Av,meshtoon_vert:dv,meshtoon_frag:fv,points_vert:pv,points_frag:gv,shadow_vert:mv,shadow_frag:Ev,sprite_vert:Iv,sprite_frag:_v},Qe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},qn={basic:{uniforms:cn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:cn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:cn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:cn([Qe.common,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.roughnessmap,Qe.metalnessmap,Qe.fog,Qe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:cn([Qe.common,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.gradientmap,Qe.fog,Qe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:cn([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:cn([Qe.points,Qe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:cn([Qe.common,Qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:cn([Qe.common,Qe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:cn([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:cn([Qe.sprite,Qe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:cn([Qe.common,Qe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:cn([Qe.lights,Qe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};qn.physical={uniforms:cn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const fo={r:0,b:0,g:0},$i=new $n,Cv=new rt;function vv(i,e,t,n,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,h=null,A=0,d=null;function m(C){let y=C.isScene===!0?C.background:null;return y&&y.isTexture&&(y=(C.backgroundBlurriness>0?t:e).get(y)),y}function E(C){let y=!1;const M=m(C);M===null?p(a,l):M&&M.isColor&&(p(M,1),y=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(C,y){const M=m(y);M&&(M.isCubeTexture||M.mapping===Jo)?(u===void 0&&(u=new Ft(new ur(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:jr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,Q,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$i.copy(y.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cv.makeRotationFromEuler($i)),u.material.toneMapped=_t.getTransfer(M.colorSpace)!==Tt,(h!==M||A!==M.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,A=M.version,d=i.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ft(new Jr(2,2),new kn({name:"BackgroundMaterial",uniforms:jr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=_t.getTransfer(M.colorSpace)!==Tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||A!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,A=M.version,d=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function p(C,y){C.getRGB(fo,Um(i)),n.buffers.color.setClear(fo.r,fo.g,fo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(C,y=1){a.set(C),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,p(a,l)},render:E,addToRenderList:g}}function yv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=A(null);let s=r,o=!1;function a(_,v,F,G,z){let Z=!1;const Y=h(G,F,v);s!==Y&&(s=Y,c(s.object)),Z=d(_,G,F,z),Z&&m(_,G,F,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(_,v,F,G),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,v,F){const G=F.wireframe===!0;let z=n[_.id];z===void 0&&(z={},n[_.id]=z);let Z=z[v.id];Z===void 0&&(Z={},z[v.id]=Z);let Y=Z[G];return Y===void 0&&(Y=A(l()),Z[G]=Y),Y}function A(_){const v=[],F=[],G=[];for(let z=0;z<t;z++)v[z]=0,F[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:F,attributeDivisors:G,object:_,attributes:{},index:null}}function d(_,v,F,G){const z=s.attributes,Z=v.attributes;let Y=0;const oe=F.getAttributes();for(const te in oe)if(oe[te].location>=0){const Ie=z[te];let Le=Z[te];if(Le===void 0&&(te==="instanceMatrix"&&_.instanceMatrix&&(Le=_.instanceMatrix),te==="instanceColor"&&_.instanceColor&&(Le=_.instanceColor)),Ie===void 0||Ie.attribute!==Le||Le&&Ie.data!==Le.data)return!0;Y++}return s.attributesNum!==Y||s.index!==G}function m(_,v,F,G){const z={},Z=v.attributes;let Y=0;const oe=F.getAttributes();for(const te in oe)if(oe[te].location>=0){let Ie=Z[te];Ie===void 0&&(te==="instanceMatrix"&&_.instanceMatrix&&(Ie=_.instanceMatrix),te==="instanceColor"&&_.instanceColor&&(Ie=_.instanceColor));const Le={};Le.attribute=Ie,Ie&&Ie.data&&(Le.data=Ie.data),z[te]=Le,Y++}s.attributes=z,s.attributesNum=Y,s.index=G}function E(){const _=s.newAttributes;for(let v=0,F=_.length;v<F;v++)_[v]=0}function g(_){p(_,0)}function p(_,v){const F=s.newAttributes,G=s.enabledAttributes,z=s.attributeDivisors;F[_]=1,G[_]===0&&(i.enableVertexAttribArray(_),G[_]=1),z[_]!==v&&(i.vertexAttribDivisor(_,v),z[_]=v)}function C(){const _=s.newAttributes,v=s.enabledAttributes;for(let F=0,G=v.length;F<G;F++)v[F]!==_[F]&&(i.disableVertexAttribArray(F),v[F]=0)}function y(_,v,F,G,z,Z,Y){Y===!0?i.vertexAttribIPointer(_,v,F,z,Z):i.vertexAttribPointer(_,v,F,G,z,Z)}function M(_,v,F,G){E();const z=G.attributes,Z=F.getAttributes(),Y=v.defaultAttributeValues;for(const oe in Z){const te=Z[oe];if(te.location>=0){let Ce=z[oe];if(Ce===void 0&&(oe==="instanceMatrix"&&_.instanceMatrix&&(Ce=_.instanceMatrix),oe==="instanceColor"&&_.instanceColor&&(Ce=_.instanceColor)),Ce!==void 0){const Ie=Ce.normalized,Le=Ce.itemSize,ke=e.get(Ce);if(ke===void 0)continue;const be=ke.buffer,re=ke.type,ue=ke.bytesPerElement,ge=re===i.INT||re===i.UNSIGNED_INT||Ce.gpuType===Fh;if(Ce.isInterleavedBufferAttribute){const Se=Ce.data,We=Se.stride,qe=Ce.offset;if(Se.isInstancedInterleavedBuffer){for(let st=0;st<te.locationSize;st++)p(te.location+st,Se.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let st=0;st<te.locationSize;st++)g(te.location+st);i.bindBuffer(i.ARRAY_BUFFER,be);for(let st=0;st<te.locationSize;st++)y(te.location+st,Le/te.locationSize,re,Ie,We*ue,(qe+Le/te.locationSize*st)*ue,ge)}else{if(Ce.isInstancedBufferAttribute){for(let Se=0;Se<te.locationSize;Se++)p(te.location+Se,Ce.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Se=0;Se<te.locationSize;Se++)g(te.location+Se);i.bindBuffer(i.ARRAY_BUFFER,be);for(let Se=0;Se<te.locationSize;Se++)y(te.location+Se,Le/te.locationSize,re,Ie,Le*ue,Le/te.locationSize*Se*ue,ge)}}else if(Y!==void 0){const Ie=Y[oe];if(Ie!==void 0)switch(Ie.length){case 2:i.vertexAttrib2fv(te.location,Ie);break;case 3:i.vertexAttrib3fv(te.location,Ie);break;case 4:i.vertexAttrib4fv(te.location,Ie);break;default:i.vertexAttrib1fv(te.location,Ie)}}}}C()}function P(){T();for(const _ in n){const v=n[_];for(const F in v){const G=v[F];for(const z in G)u(G[z].object),delete G[z];delete v[F]}delete n[_]}}function Q(_){if(n[_.id]===void 0)return;const v=n[_.id];for(const F in v){const G=v[F];for(const z in G)u(G[z].object),delete G[z];delete v[F]}delete n[_.id]}function R(_){for(const v in n){const F=n[v];if(F[_.id]===void 0)continue;const G=F[_.id];for(const z in G)u(G[z].object),delete G[z];delete F[_.id]}}function T(){U(),o=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:U,dispose:P,releaseStatesOfGeometry:Q,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:g,disableUnusedAttributes:C}}function xv(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,n,1)}function l(c,u,h,A){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],A[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,A,0,h);let m=0;for(let E=0;E<h;E++)m+=u[E];for(let E=0;E<A.length;E++)t.update(m,n,A[E])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Sv(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const T=R===sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==on&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==jt&&!T)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,A=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(A===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,Q=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:A,maxTextures:d,maxVertexTextures:m,maxTextureSize:E,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:C,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:P,maxSamples:Q}}function Bv(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new nr,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,A){const d=h.length!==0||A||n!==0||r;return r=A,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,A){t=u(h,A,0)},this.setState=function(h,A,d){const m=h.clippingPlanes,E=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const C=s?0:n,y=C*4;let M=p.clippingState||null;l.value=M,M=u(m,A,y,d);for(let P=0;P!==y;++P)M[P]=t[P];p.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,A,d,m){const E=h!==null?h.length:0;let g=null;if(E!==0){if(g=l.value,m!==!0||g===null){const p=d+E*4,C=A.matrixWorldInverse;a.getNormalMatrix(C),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,M=d;y!==E;++y,M+=4)o.copy(h[y]).applyMatrix4(C,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}function Mv(i){let e=new WeakMap;function t(o,a){return a===Fo?o.mapping=Wr:a===qu&&(o.mapping=qr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fo||a===qu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new F_(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ta extends qh{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Or=4,rd=[.125,.215,.35,.446,.526,.582],sr=20,Ua=new ta,sd=new Ze;let Fa=null,Oa=0,Ga=0,Ha=!1;const ir=(1+Math.sqrt(5))/2,Pr=1/ir,od=[new X(-ir,Pr,0),new X(ir,Pr,0),new X(-Pr,0,ir),new X(Pr,0,ir),new X(0,ir,-Pr),new X(0,ir,Pr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Vo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Fa=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fa,Oa,Ga),this._renderer.xr.enabled=Ha,e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fa=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:sn,format:vn,colorSpace:Qt,depthBuffer:!1},r=ad(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wv(s)),this._blurMaterial=bv(s,e,t)}return r}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,n,r){const a=new nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,A=u.toneMapping;u.getClearColor(sd),u.toneMapping=Gi,u.autoClear=!1;const d=new Ui({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),m=new Ft(new ur,d);let E=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,E=!0):(d.color.copy(sd),E=!0);for(let p=0;p<6;p++){const C=p%3;C===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):C===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;po(r,C*y,p>2?y:0,y,y),u.setRenderTarget(r),E&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=A,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Wr||e.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ft(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;po(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=od[(r-s-1)%od.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ft(this._lodPlanes[r],c),A=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*sr-1),E=s/m,g=isFinite(s)?1+Math.floor(u*E):sr;g>sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${sr}`);const p=[];let C=0;for(let R=0;R<sr;++R){const T=R/E,U=Math.exp(-T*T/2);p.push(U),R===0?C+=U:R<g&&(C+=2*U)}for(let R=0;R<p.length;R++)p[R]=p[R]/C;A.envMap.value=e.texture,A.samples.value=g,A.weights.value=p,A.latitudinal.value=o==="latitudinal",a&&(A.poleAxis.value=a);const{_lodMax:y}=this;A.dTheta.value=m,A.mipInt.value=y-n;const M=this._sizeLods[r],P=3*M*(r>y-Or?r-y+Or:0),Q=4*(this._cubeSize-M);po(t,P,Q,3*M,2*M),l.setRenderTarget(t),l.render(h,Ua)}}function wv(i){const e=[],t=[],n=[];let r=i;const s=i-Or+1+rd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Or?l=rd[o-i+Or-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,A=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,E=3,g=2,p=1,C=new Float32Array(E*m*d),y=new Float32Array(g*m*d),M=new Float32Array(p*m*d);for(let Q=0;Q<d;Q++){const R=Q%3*2/3-1,T=Q>2?0:-1,U=[R,T,0,R+2/3,T,0,R+2/3,T+1,0,R,T,0,R+2/3,T+1,0,R,T+1,0];C.set(U,E*m*Q),y.set(A,g*m*Q);const _=[Q,Q,Q,Q,Q,Q];M.set(_,p*m*Q)}const P=new Zt;P.setAttribute("position",new zt(C,E)),P.setAttribute("uv",new zt(y,g)),P.setAttribute("faceIndex",new zt(M,p)),e.push(P),r>Or&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ad(i,e,t){const n=new Hn(i,e,t);return n.texture.mapping=Jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function po(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function bv(i,e,t){const n=new Float32Array(sr),r=new X(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function cd(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function ld(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Kh(){return`

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
	`}function Tv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fo||l===qu,u=l===Wr||l===qr;if(c||u){let h=e.get(a);const A=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==A)return t===null&&(t=new Vo(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Vo(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Rv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Po("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Dv(i,e,t,n){const r={},s=new WeakMap;function o(h){const A=h.target;A.index!==null&&e.remove(A.index);for(const m in A.attributes)e.remove(A.attributes[m]);for(const m in A.morphAttributes){const E=A.morphAttributes[m];for(let g=0,p=E.length;g<p;g++)e.remove(E[g])}A.removeEventListener("dispose",o),delete r[A.id];const d=s.get(A);d&&(e.remove(d),s.delete(A)),n.releaseStatesOfGeometry(A),A.isInstancedBufferGeometry===!0&&delete A._maxInstanceCount,t.memory.geometries--}function a(h,A){return r[A.id]===!0||(A.addEventListener("dispose",o),r[A.id]=!0,t.memory.geometries++),A}function l(h){const A=h.attributes;for(const m in A)e.update(A[m],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const m in d){const E=d[m];for(let g=0,p=E.length;g<p;g++)e.update(E[g],i.ARRAY_BUFFER)}}function c(h){const A=[],d=h.index,m=h.attributes.position;let E=0;if(d!==null){const C=d.array;E=d.version;for(let y=0,M=C.length;y<M;y+=3){const P=C[y+0],Q=C[y+1],R=C[y+2];A.push(P,Q,Q,R,R,P)}}else if(m!==void 0){const C=m.array;E=m.version;for(let y=0,M=C.length/3-1;y<M;y+=3){const P=y+0,Q=y+1,R=y+2;A.push(P,Q,Q,R,R,P)}}else return;const g=new(Rm(A)?Pm:Nm)(A,1);g.version=E;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const A=s.get(h);if(A){const d=h.index;d!==null&&A.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Qv(i,e,t){let n;function r(A){n=A}let s,o;function a(A){s=A.type,o=A.bytesPerElement}function l(A,d){i.drawElements(n,d,s,A*o),t.update(d,n,1)}function c(A,d,m){m!==0&&(i.drawElementsInstanced(n,d,s,A*o,m),t.update(d,n,m))}function u(A,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,A,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function h(A,d,m,E){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<A.length;p++)c(A[p]/o,d[p],E[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,A,0,E,0,m);let p=0;for(let C=0;C<m;C++)p+=d[C];for(let C=0;C<E.length;C++)t.update(p,n,E[C])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Lv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Nv(i,e,t){const n=new WeakMap,r=new yt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let A=n.get(a);if(A===void 0||A.count!==h){let U=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",U)};A!==void 0&&A.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),m===!0&&(y=2),E===!0&&(y=3);let M=a.attributes.position.count*y,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const Q=new Float32Array(M*P*4*h),R=new Qm(Q,M,P,h);R.type=jt,R.needsUpdate=!0;const T=y*4;for(let _=0;_<h;_++){const v=g[_],F=p[_],G=C[_],z=M*P*4*_;for(let Z=0;Z<v.count;Z++){const Y=Z*T;d===!0&&(r.fromBufferAttribute(v,Z),Q[z+Y+0]=r.x,Q[z+Y+1]=r.y,Q[z+Y+2]=r.z,Q[z+Y+3]=0),m===!0&&(r.fromBufferAttribute(F,Z),Q[z+Y+4]=r.x,Q[z+Y+5]=r.y,Q[z+Y+6]=r.z,Q[z+Y+7]=0),E===!0&&(r.fromBufferAttribute(G,Z),Q[z+Y+8]=r.x,Q[z+Y+9]=r.y,Q[z+Y+10]=r.z,Q[z+Y+11]=G.itemSize===4?r.w:1)}}A={count:h,texture:R,size:new et(M,P)},n.set(a,A),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let E=0;E<c.length;E++)d+=c[E];const m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",A.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",A.size)}return{update:s}}function Pv(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const A=l.skeleton;r.get(A)!==c&&(A.update(),r.set(A,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class jh extends kt{constructor(e,t,n,r,s,o,a,l,c,u=kr){if(u!==kr&&u!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===kr&&(n=Hi),n===void 0&&u===lr&&(n=cr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Om=new kt,ud=new jh(1,1),Gm=new Qm,Hm=new I_,km=new ea,hd=[],Ad=[],dd=new Float32Array(16),fd=new Float32Array(9),pd=new Float32Array(4);function is(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=hd[r];if(s===void 0&&(s=new Float32Array(r),hd[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function na(i,e){let t=Ad[e];t===void 0&&(t=new Int32Array(e),Ad[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Uv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function Ov(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function Gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function Hv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Vt(t,n))return;pd.set(n),i.uniformMatrix2fv(this.addr,!1,pd),Yt(t,n)}}function kv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Vt(t,n))return;fd.set(n),i.uniformMatrix3fv(this.addr,!1,fd),Yt(t,n)}}function zv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Vt(t,n))return;dd.set(n),i.uniformMatrix4fv(this.addr,!1,dd),Yt(t,n)}}function Vv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function Wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function Xv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function Jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function Zv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ud.compareFunction=Tm,s=ud):s=Om,t.setTexture2D(e||s,r)}function $v(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Hm,r)}function ey(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||km,r)}function ty(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Gm,r)}function ny(i){switch(i){case 5126:return Uv;case 35664:return Fv;case 35665:return Ov;case 35666:return Gv;case 35674:return Hv;case 35675:return kv;case 35676:return zv;case 5124:case 35670:return Vv;case 35667:case 35671:return Yv;case 35668:case 35672:return Wv;case 35669:case 35673:return qv;case 5125:return Xv;case 36294:return Kv;case 36295:return jv;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ty}}function iy(i,e){i.uniform1fv(this.addr,e)}function ry(i,e){const t=is(e,this.size,2);i.uniform2fv(this.addr,t)}function sy(i,e){const t=is(e,this.size,3);i.uniform3fv(this.addr,t)}function oy(i,e){const t=is(e,this.size,4);i.uniform4fv(this.addr,t)}function ay(i,e){const t=is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cy(i,e){const t=is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ly(i,e){const t=is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function uy(i,e){i.uniform1iv(this.addr,e)}function hy(i,e){i.uniform2iv(this.addr,e)}function Ay(i,e){i.uniform3iv(this.addr,e)}function dy(i,e){i.uniform4iv(this.addr,e)}function fy(i,e){i.uniform1uiv(this.addr,e)}function py(i,e){i.uniform2uiv(this.addr,e)}function gy(i,e){i.uniform3uiv(this.addr,e)}function my(i,e){i.uniform4uiv(this.addr,e)}function Ey(i,e,t){const n=this.cache,r=e.length,s=na(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Om,s[o])}function Iy(i,e,t){const n=this.cache,r=e.length,s=na(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Hm,s[o])}function _y(i,e,t){const n=this.cache,r=e.length,s=na(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||km,s[o])}function Cy(i,e,t){const n=this.cache,r=e.length,s=na(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Gm,s[o])}function vy(i){switch(i){case 5126:return iy;case 35664:return ry;case 35665:return sy;case 35666:return oy;case 35674:return ay;case 35675:return cy;case 35676:return ly;case 5124:case 35670:return uy;case 35667:case 35671:return hy;case 35668:case 35672:return Ay;case 35669:case 35673:return dy;case 5125:return fy;case 36294:return py;case 36295:return gy;case 36296:return my;case 35678:case 36198:case 36298:case 36306:case 35682:return Ey;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return _y;case 36289:case 36303:case 36311:case 36292:return Cy}}class yy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ny(t.type)}}class xy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vy(t.type)}}class Sy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function gd(i,e){i.seq.push(e),i.map[e.id]=e}function By(i,e,t){const n=i.name,r=n.length;for(ka.lastIndex=0;;){const s=ka.exec(n),o=ka.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){gd(t,c===void 0?new yy(a,i,e):new xy(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Sy(a),gd(t,h)),t=h}}}class Uo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);By(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function md(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const My=37297;let wy=0;function by(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ty(i){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(i);let n;switch(e===t?n="":e===ko&&t===Ho?n="LinearDisplayP3ToLinearSRGB":e===Ho&&t===ko&&(n="LinearSRGBToLinearDisplayP3"),i){case Qt:case $o:return[n,"LinearTransferOETF"];case It:case Vh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ed(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+by(i.getShaderSource(e),o)}else return r}function Ry(i,e){const t=Ty(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Dy(i,e){let t;switch(e){case wI:t="Linear";break;case bI:t="Reinhard";break;case TI:t="Cineon";break;case RI:t="ACESFilmic";break;case QI:t="AgX";break;case LI:t="Neutral";break;case DI:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const go=new X;function Qy(){_t.getLuminanceCoefficients(go);const i=go.x.toFixed(4),e=go.y.toFixed(4),t=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ly(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function Ny(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Py(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Bs(i){return i!==""}function Id(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _d(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(i){return i.replace(Uy,Oy)}const Fy=new Map;function Oy(i,e){let t=ct[e];if(t===void 0){const n=Fy.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vh(t)}const Gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cd(i){return i.replace(Gy,Hy)}function Hy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ky(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===aI?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function zy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wr:case qr:e="ENVMAP_TYPE_CUBE";break;case Jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function Yy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gm:e="ENVMAP_BLENDING_MULTIPLY";break;case BI:e="ENVMAP_BLENDING_MIX";break;case MI:e="ENVMAP_BLENDING_ADD";break}return e}function Wy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qy(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ky(t),c=zy(t),u=Vy(t),h=Yy(t),A=Wy(t),d=Ly(t),m=Ny(s),E=r.createProgram();let g,p,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Bs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Bs).join(`
`),p.length>0&&(p+=`
`)):(g=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),p=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",A?"#define CUBEUV_TEXEL_WIDTH "+A.texelWidth:"",A?"#define CUBEUV_TEXEL_HEIGHT "+A.texelHeight:"",A?"#define CUBEUV_MAX_MIP "+A.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?ct.tonemapping_pars_fragment:"",t.toneMapping!==Gi?Dy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Ry("linearToOutputTexel",t.outputColorSpace),Qy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bs).join(`
`)),o=vh(o),o=Id(o,t),o=_d(o,t),a=vh(a),a=Id(a,t),a=_d(a,t),o=Cd(o),a=Cd(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===OA?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===OA?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=C+g+o,M=C+p+a,P=md(r,r.VERTEX_SHADER,y),Q=md(r,r.FRAGMENT_SHADER,M);r.attachShader(E,P),r.attachShader(E,Q),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function R(v){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(E).trim(),G=r.getShaderInfoLog(P).trim(),z=r.getShaderInfoLog(Q).trim();let Z=!0,Y=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,P,Q);else{const oe=Ed(r,P,"vertex"),te=Ed(r,Q,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+F+`
`+oe+`
`+te)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(G===""||z==="")&&(Y=!1);Y&&(v.diagnostics={runnable:Z,programLog:F,vertexShader:{log:G,prefix:g},fragmentShader:{log:z,prefix:p}})}r.deleteShader(P),r.deleteShader(Q),T=new Uo(r,E),U=Py(r,E)}let T;this.getUniforms=function(){return T===void 0&&R(this),T};let U;this.getAttributes=function(){return U===void 0&&R(this),U};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(E,My)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wy++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=Q,this}let Xy=0;class Ky{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jy(e),t.set(e,n)),n}}class jy{constructor(e){this.id=Xy++,this.code=e,this.usedTimes=0}}function Jy(i,e,t,n,r,s,o){const a=new Wh,l=new Ky,c=new Set,u=[],h=r.logarithmicDepthBuffer,A=r.reverseDepthBuffer,d=r.vertexTextures;let m=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,v,F,G,z){const Z=G.fog,Y=z.geometry,oe=_.isMeshStandardMaterial?G.environment:null,te=(_.isMeshStandardMaterial?t:e).get(_.envMap||oe),Ce=te&&te.mapping===Jo?te.image.height:null,Ie=E[_.type];_.precision!==null&&(m=r.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const Le=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ke=Le!==void 0?Le.length:0;let be=0;Y.morphAttributes.position!==void 0&&(be=1),Y.morphAttributes.normal!==void 0&&(be=2),Y.morphAttributes.color!==void 0&&(be=3);let re,ue,ge,Se;if(Ie){const Wt=qn[Ie];re=Wt.vertexShader,ue=Wt.fragmentShader}else re=_.vertexShader,ue=_.fragmentShader,l.update(_),ge=l.getVertexShaderID(_),Se=l.getFragmentShaderID(_);const We=i.getRenderTarget(),qe=z.isInstancedMesh===!0,st=z.isBatchedMesh===!0,ht=!!_.map,Je=!!_.matcap,H=!!te,Ot=!!_.aoMap,Ge=!!_.lightMap,$e=!!_.bumpMap,Be=!!_.normalMap,At=!!_.displacementMap,He=!!_.emissiveMap,L=!!_.metalnessMap,S=!!_.roughnessMap,J=_.anisotropy>0,se=_.clearcoat>0,Ae=_.dispersion>0,ae=_.iridescence>0,ze=_.sheen>0,Me=_.transmission>0,Re=J&&!!_.anisotropyMap,je=se&&!!_.clearcoatMap,fe=se&&!!_.clearcoatNormalMap,De=se&&!!_.clearcoatRoughnessMap,Xe=ae&&!!_.iridescenceMap,Fe=ae&&!!_.iridescenceThicknessMap,ye=ze&&!!_.sheenColorMap,at=ze&&!!_.sheenRoughnessMap,Ke=!!_.specularMap,tt=!!_.specularColorMap,V=!!_.specularIntensityMap,xe=Me&&!!_.transmissionMap,W=Me&&!!_.thicknessMap,le=!!_.gradientMap,Ne=!!_.alphaMap,we=_.alphaTest>0,dt=!!_.alphaHash,bt=!!_.extensions;let xt=Gi;_.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(xt=i.toneMapping);const ft={shaderID:Ie,shaderType:_.type,shaderName:_.name,vertexShader:re,fragmentShader:ue,defines:_.defines,customVertexShaderID:ge,customFragmentShaderID:Se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:st,batchingColor:st&&z._colorsTexture!==null,instancing:qe,instancingColor:qe&&z.instanceColor!==null,instancingMorph:qe&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:We===null?i.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:Qt,alphaToCoverage:!!_.alphaToCoverage,map:ht,matcap:Je,envMap:H,envMapMode:H&&te.mapping,envMapCubeUVHeight:Ce,aoMap:Ot,lightMap:Ge,bumpMap:$e,normalMap:Be,displacementMap:d&&At,emissiveMap:He,normalMapObjectSpace:Be&&_.normalMapType===OI,normalMapTangentSpace:Be&&_.normalMapType===bm,metalnessMap:L,roughnessMap:S,anisotropy:J,anisotropyMap:Re,clearcoat:se,clearcoatMap:je,clearcoatNormalMap:fe,clearcoatRoughnessMap:De,dispersion:Ae,iridescence:ae,iridescenceMap:Xe,iridescenceThicknessMap:Fe,sheen:ze,sheenColorMap:ye,sheenRoughnessMap:at,specularMap:Ke,specularColorMap:tt,specularIntensityMap:V,transmission:Me,transmissionMap:xe,thicknessMap:W,gradientMap:le,opaque:_.transparent===!1&&_.blending===Hr&&_.alphaToCoverage===!1,alphaMap:Ne,alphaTest:we,alphaHash:dt,combine:_.combine,mapUv:ht&&g(_.map.channel),aoMapUv:Ot&&g(_.aoMap.channel),lightMapUv:Ge&&g(_.lightMap.channel),bumpMapUv:$e&&g(_.bumpMap.channel),normalMapUv:Be&&g(_.normalMap.channel),displacementMapUv:At&&g(_.displacementMap.channel),emissiveMapUv:He&&g(_.emissiveMap.channel),metalnessMapUv:L&&g(_.metalnessMap.channel),roughnessMapUv:S&&g(_.roughnessMap.channel),anisotropyMapUv:Re&&g(_.anisotropyMap.channel),clearcoatMapUv:je&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:at&&g(_.sheenRoughnessMap.channel),specularMapUv:Ke&&g(_.specularMap.channel),specularColorMapUv:tt&&g(_.specularColorMap.channel),specularIntensityMapUv:V&&g(_.specularIntensityMap.channel),transmissionMapUv:xe&&g(_.transmissionMap.channel),thicknessMapUv:W&&g(_.thicknessMap.channel),alphaMapUv:Ne&&g(_.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Be||J),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(ht||Ne),fog:!!Z,useFog:_.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:A,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:be,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:ht&&_.map.isVideoTexture===!0&&_t.getTransfer(_.map.colorSpace)===Tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fn,flipSided:_.side===Kt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:bt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&_.extensions.multiDraw===!0||st)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function C(_){const v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(const F in _.defines)v.push(F),v.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(y(v,_),M(v,_),v.push(i.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function y(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function M(_,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),_.push(a.mask)}function P(_){const v=E[_.type];let F;if(v){const G=qn[v];F=L_.clone(G.uniforms)}else F=_.uniforms;return F}function Q(_,v){let F;for(let G=0,z=u.length;G<z;G++){const Z=u[G];if(Z.cacheKey===v){F=Z,++F.usedTimes;break}}return F===void 0&&(F=new qy(i,v,_,s),u.push(F)),F}function R(_){if(--_.usedTimes===0){const v=u.indexOf(_);u[v]=u[u.length-1],u.pop(),_.destroy()}}function T(_){l.remove(_)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:C,getUniforms:P,acquireProgram:Q,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:U}}function Zy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function $y(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xd(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,A,d,m,E,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:A,material:d,groupOrder:m,renderOrder:h.renderOrder,z:E,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=A,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=E,p.group=g),e++,p}function a(h,A,d,m,E,g){const p=o(h,A,d,m,E,g);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,A,d,m,E,g){const p=o(h,A,d,m,E,g);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,A){t.length>1&&t.sort(h||$y),n.length>1&&n.sort(A||yd),r.length>1&&r.sort(A||yd)}function u(){for(let h=e,A=i.length;h<A;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function ex(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new xd,i.set(n,[o])):r>=s.length?(o=new xd,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function tx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Ze};break;case"SpotLight":t={position:new X,direction:new X,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function nx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ix=0;function rx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sx(i){const e=new tx,t=nx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const r=new X,s=new rt,o=new rt;function a(c){let u=0,h=0,A=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,m=0,E=0,g=0,p=0,C=0,y=0,M=0,P=0,Q=0,R=0;c.sort(rx);for(let U=0,_=c.length;U<_;U++){const v=c[U],F=v.color,G=v.intensity,z=v.distance,Z=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)u+=F.r*G,h+=F.g*G,A+=F.b*G;else if(v.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(v.sh.coefficients[Y],G);R++}else if(v.isDirectionalLight){const Y=e.get(v);if(Y.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){const oe=v.shadow,te=t.get(v);te.shadowIntensity=oe.intensity,te.shadowBias=oe.bias,te.shadowNormalBias=oe.normalBias,te.shadowRadius=oe.radius,te.shadowMapSize=oe.mapSize,n.directionalShadow[d]=te,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=v.shadow.matrix,C++}n.directional[d]=Y,d++}else if(v.isSpotLight){const Y=e.get(v);Y.position.setFromMatrixPosition(v.matrixWorld),Y.color.copy(F).multiplyScalar(G),Y.distance=z,Y.coneCos=Math.cos(v.angle),Y.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),Y.decay=v.decay,n.spot[E]=Y;const oe=v.shadow;if(v.map&&(n.spotLightMap[P]=v.map,P++,oe.updateMatrices(v),v.castShadow&&Q++),n.spotLightMatrix[E]=oe.matrix,v.castShadow){const te=t.get(v);te.shadowIntensity=oe.intensity,te.shadowBias=oe.bias,te.shadowNormalBias=oe.normalBias,te.shadowRadius=oe.radius,te.shadowMapSize=oe.mapSize,n.spotShadow[E]=te,n.spotShadowMap[E]=Z,M++}E++}else if(v.isRectAreaLight){const Y=e.get(v);Y.color.copy(F).multiplyScalar(G),Y.halfWidth.set(v.width*.5,0,0),Y.halfHeight.set(0,v.height*.5,0),n.rectArea[g]=Y,g++}else if(v.isPointLight){const Y=e.get(v);if(Y.color.copy(v.color).multiplyScalar(v.intensity),Y.distance=v.distance,Y.decay=v.decay,v.castShadow){const oe=v.shadow,te=t.get(v);te.shadowIntensity=oe.intensity,te.shadowBias=oe.bias,te.shadowNormalBias=oe.normalBias,te.shadowRadius=oe.radius,te.shadowMapSize=oe.mapSize,te.shadowCameraNear=oe.camera.near,te.shadowCameraFar=oe.camera.far,n.pointShadow[m]=te,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=v.shadow.matrix,y++}n.point[m]=Y,m++}else if(v.isHemisphereLight){const Y=e.get(v);Y.skyColor.copy(v.color).multiplyScalar(G),Y.groundColor.copy(v.groundColor).multiplyScalar(G),n.hemi[p]=Y,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Qe.LTC_FLOAT_1,n.rectAreaLTC2=Qe.LTC_FLOAT_2):(n.rectAreaLTC1=Qe.LTC_HALF_1,n.rectAreaLTC2=Qe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=A;const T=n.hash;(T.directionalLength!==d||T.pointLength!==m||T.spotLength!==E||T.rectAreaLength!==g||T.hemiLength!==p||T.numDirectionalShadows!==C||T.numPointShadows!==y||T.numSpotShadows!==M||T.numSpotMaps!==P||T.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=E,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+P-Q,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=Q,n.numLightProbes=R,T.directionalLength=d,T.pointLength=m,T.spotLength=E,T.rectAreaLength=g,T.hemiLength=p,T.numDirectionalShadows=C,T.numPointShadows=y,T.numSpotShadows=M,T.numSpotMaps=P,T.numLightProbes=R,n.version=ix++)}function l(c,u){let h=0,A=0,d=0,m=0,E=0;const g=u.matrixWorldInverse;for(let p=0,C=c.length;p<C;p++){const y=c[p];if(y.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(y.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const M=n.point[A];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),A++}else if(y.isHemisphereLight){const M=n.hemi[E];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),E++}}}return{setup:a,setupView:l,state:n}}function Sd(i){const e=new sx(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ox(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Sd(i),e.set(r,[a])):s>=o.length?(a=new Sd(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class ax extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ks,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cx extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
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
}`;function hx(i,e,t){let n=new Xh;const r=new et,s=new et,o=new yt,a=new ax({depthPacking:FI}),l=new cx,c={},u=t.maxTextureSize,h={[Zn]:Kt,[Kt]:Zn,[fn]:fn},A=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:lx,fragmentShader:ux}),d=A.clone();d.defines.HORIZONTAL_PASS=1;const m=new Zt;m.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ft(m,A),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pm;let p=this.type;this.render=function(Q,R,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||Q.length===0)return;const U=i.getRenderTarget(),_=i.getActiveCubeFace(),v=i.getActiveMipmapLevel(),F=i.state;F.setBlending(jn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const G=p!==di&&this.type===di,z=p===di&&this.type!==di;for(let Z=0,Y=Q.length;Z<Y;Z++){const oe=Q[Z],te=oe.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;r.copy(te.mapSize);const Ce=te.getFrameExtents();if(r.multiply(Ce),s.copy(te.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Ce.x),r.x=s.x*Ce.x,te.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Ce.y),r.y=s.y*Ce.y,te.mapSize.y=s.y)),te.map===null||G===!0||z===!0){const Le=this.type!==di?{minFilter:un,magFilter:un}:{};te.map!==null&&te.map.dispose(),te.map=new Hn(r.x,r.y,Le),te.map.texture.name=oe.name+".shadowMap",te.camera.updateProjectionMatrix()}i.setRenderTarget(te.map),i.clear();const Ie=te.getViewportCount();for(let Le=0;Le<Ie;Le++){const ke=te.getViewport(Le);o.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),F.viewport(o),te.updateMatrices(oe,Le),n=te.getFrustum(),M(R,T,te.camera,oe,this.type)}te.isPointLightShadow!==!0&&this.type===di&&C(te,T),te.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(U,_,v)};function C(Q,R){const T=e.update(E);A.defines.VSM_SAMPLES!==Q.blurSamples&&(A.defines.VSM_SAMPLES=Q.blurSamples,d.defines.VSM_SAMPLES=Q.blurSamples,A.needsUpdate=!0,d.needsUpdate=!0),Q.mapPass===null&&(Q.mapPass=new Hn(r.x,r.y)),A.uniforms.shadow_pass.value=Q.map.texture,A.uniforms.resolution.value=Q.mapSize,A.uniforms.radius.value=Q.radius,i.setRenderTarget(Q.mapPass),i.clear(),i.renderBufferDirect(R,null,T,A,E,null),d.uniforms.shadow_pass.value=Q.mapPass.texture,d.uniforms.resolution.value=Q.mapSize,d.uniforms.radius.value=Q.radius,i.setRenderTarget(Q.map),i.clear(),i.renderBufferDirect(R,null,T,d,E,null)}function y(Q,R,T,U){let _=null;const v=T.isPointLight===!0?Q.customDistanceMaterial:Q.customDepthMaterial;if(v!==void 0)_=v;else if(_=T.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const F=_.uuid,G=R.uuid;let z=c[F];z===void 0&&(z={},c[F]=z);let Z=z[G];Z===void 0&&(Z=_.clone(),z[G]=Z,R.addEventListener("dispose",P)),_=Z}if(_.visible=R.visible,_.wireframe=R.wireframe,U===di?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:h[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,T.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=i.properties.get(_);F.light=T}return _}function M(Q,R,T,U,_){if(Q.visible===!1)return;if(Q.layers.test(R.layers)&&(Q.isMesh||Q.isLine||Q.isPoints)&&(Q.castShadow||Q.receiveShadow&&_===di)&&(!Q.frustumCulled||n.intersectsObject(Q))){Q.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,Q.matrixWorld);const G=e.update(Q),z=Q.material;if(Array.isArray(z)){const Z=G.groups;for(let Y=0,oe=Z.length;Y<oe;Y++){const te=Z[Y],Ce=z[te.materialIndex];if(Ce&&Ce.visible){const Ie=y(Q,Ce,U,_);Q.onBeforeShadow(i,Q,R,T,G,Ie,te),i.renderBufferDirect(T,null,G,Ie,Q,te),Q.onAfterShadow(i,Q,R,T,G,Ie,te)}}}else if(z.visible){const Z=y(Q,z,U,_);Q.onBeforeShadow(i,Q,R,T,G,Z,null),i.renderBufferDirect(T,null,G,Z,Q,null),Q.onAfterShadow(i,Q,R,T,G,Z,null)}}const F=Q.children;for(let G=0,z=F.length;G<z;G++)M(F[G],R,T,U,_)}function P(Q){Q.target.removeEventListener("dispose",P);for(const T in c){const U=c[T],_=Q.target.uuid;_ in U&&(U[_].dispose(),delete U[_])}}}const Ax={[Gu]:Hu,[ku]:Yu,[zu]:Wu,[Yr]:Vu,[Hu]:Gu,[Yu]:ku,[Wu]:zu,[Vu]:Yr};function dx(i){function e(){let V=!1;const xe=new yt;let W=null;const le=new yt(0,0,0,0);return{setMask:function(Ne){W!==Ne&&!V&&(i.colorMask(Ne,Ne,Ne,Ne),W=Ne)},setLocked:function(Ne){V=Ne},setClear:function(Ne,we,dt,bt,xt){xt===!0&&(Ne*=bt,we*=bt,dt*=bt),xe.set(Ne,we,dt,bt),le.equals(xe)===!1&&(i.clearColor(Ne,we,dt,bt),le.copy(xe))},reset:function(){V=!1,W=null,le.set(-1,0,0,0)}}}function t(){let V=!1,xe=!1,W=null,le=null,Ne=null;return{setReversed:function(we){xe=we},setTest:function(we){we?ge(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(we){W!==we&&!V&&(i.depthMask(we),W=we)},setFunc:function(we){if(xe&&(we=Ax[we]),le!==we){switch(we){case Gu:i.depthFunc(i.NEVER);break;case Hu:i.depthFunc(i.ALWAYS);break;case ku:i.depthFunc(i.LESS);break;case Yr:i.depthFunc(i.LEQUAL);break;case zu:i.depthFunc(i.EQUAL);break;case Vu:i.depthFunc(i.GEQUAL);break;case Yu:i.depthFunc(i.GREATER);break;case Wu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=we}},setLocked:function(we){V=we},setClear:function(we){Ne!==we&&(i.clearDepth(we),Ne=we)},reset:function(){V=!1,W=null,le=null,Ne=null}}}function n(){let V=!1,xe=null,W=null,le=null,Ne=null,we=null,dt=null,bt=null,xt=null;return{setTest:function(ft){V||(ft?ge(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(ft){xe!==ft&&!V&&(i.stencilMask(ft),xe=ft)},setFunc:function(ft,Wt,pn){(W!==ft||le!==Wt||Ne!==pn)&&(i.stencilFunc(ft,Wt,pn),W=ft,le=Wt,Ne=pn)},setOp:function(ft,Wt,pn){(we!==ft||dt!==Wt||bt!==pn)&&(i.stencilOp(ft,Wt,pn),we=ft,dt=Wt,bt=pn)},setLocked:function(ft){V=ft},setClear:function(ft){xt!==ft&&(i.clearStencil(ft),xt=ft)},reset:function(){V=!1,xe=null,W=null,le=null,Ne=null,we=null,dt=null,bt=null,xt=null}}}const r=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,A=[],d=null,m=!1,E=null,g=null,p=null,C=null,y=null,M=null,P=null,Q=new Ze(0,0,0),R=0,T=!1,U=null,_=null,v=null,F=null,G=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,Y=0;const oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(oe)[1]),Z=Y>=1):oe.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),Z=Y>=2);let te=null,Ce={};const Ie=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),ke=new yt().fromArray(Ie),be=new yt().fromArray(Le);function re(V,xe,W,le){const Ne=new Uint8Array(4),we=i.createTexture();i.bindTexture(V,we),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<W;dt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(xe+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return we}const ue={};ue[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ge(i.DEPTH_TEST),s.setFunc(Yr),Ge(!1),$e(TA),ge(i.CULL_FACE),H(jn);function ge(V){c[V]!==!0&&(i.enable(V),c[V]=!0)}function Se(V){c[V]!==!1&&(i.disable(V),c[V]=!1)}function We(V,xe){return u[V]!==xe?(i.bindFramebuffer(V,xe),u[V]=xe,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xe),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function qe(V,xe){let W=A,le=!1;if(V){W=h.get(xe),W===void 0&&(W=[],h.set(xe,W));const Ne=V.textures;if(W.length!==Ne.length||W[0]!==i.COLOR_ATTACHMENT0){for(let we=0,dt=Ne.length;we<dt;we++)W[we]=i.COLOR_ATTACHMENT0+we;W.length=Ne.length,le=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,le=!0);le&&i.drawBuffers(W)}function st(V){return d!==V?(i.useProgram(V),d=V,!0):!1}const ht={[rr]:i.FUNC_ADD,[lI]:i.FUNC_SUBTRACT,[uI]:i.FUNC_REVERSE_SUBTRACT};ht[hI]=i.MIN,ht[AI]=i.MAX;const Je={[dI]:i.ZERO,[fI]:i.ONE,[pI]:i.SRC_COLOR,[Fu]:i.SRC_ALPHA,[CI]:i.SRC_ALPHA_SATURATE,[II]:i.DST_COLOR,[mI]:i.DST_ALPHA,[gI]:i.ONE_MINUS_SRC_COLOR,[Ou]:i.ONE_MINUS_SRC_ALPHA,[_I]:i.ONE_MINUS_DST_COLOR,[EI]:i.ONE_MINUS_DST_ALPHA,[vI]:i.CONSTANT_COLOR,[yI]:i.ONE_MINUS_CONSTANT_COLOR,[xI]:i.CONSTANT_ALPHA,[SI]:i.ONE_MINUS_CONSTANT_ALPHA};function H(V,xe,W,le,Ne,we,dt,bt,xt,ft){if(V===jn){m===!0&&(Se(i.BLEND),m=!1);return}if(m===!1&&(ge(i.BLEND),m=!0),V!==cI){if(V!==E||ft!==T){if((g!==rr||y!==rr)&&(i.blendEquation(i.FUNC_ADD),g=rr,y=rr),ft)switch(V){case Hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case RA:i.blendFunc(i.ONE,i.ONE);break;case DA:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case QA:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case RA:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case DA:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case QA:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}p=null,C=null,M=null,P=null,Q.set(0,0,0),R=0,E=V,T=ft}return}Ne=Ne||xe,we=we||W,dt=dt||le,(xe!==g||Ne!==y)&&(i.blendEquationSeparate(ht[xe],ht[Ne]),g=xe,y=Ne),(W!==p||le!==C||we!==M||dt!==P)&&(i.blendFuncSeparate(Je[W],Je[le],Je[we],Je[dt]),p=W,C=le,M=we,P=dt),(bt.equals(Q)===!1||xt!==R)&&(i.blendColor(bt.r,bt.g,bt.b,xt),Q.copy(bt),R=xt),E=V,T=!1}function Ot(V,xe){V.side===fn?Se(i.CULL_FACE):ge(i.CULL_FACE);let W=V.side===Kt;xe&&(W=!W),Ge(W),V.blending===Hr&&V.transparent===!1?H(jn):H(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),s.setFunc(V.depthFunc),s.setTest(V.depthTest),s.setMask(V.depthWrite),r.setMask(V.colorWrite);const le=V.stencilWrite;o.setTest(le),le&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),At(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(V){U!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),U=V)}function $e(V){V!==sI?(ge(i.CULL_FACE),V!==_&&(V===TA?i.cullFace(i.BACK):V===oI?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),_=V}function Be(V){V!==v&&(Z&&i.lineWidth(V),v=V)}function At(V,xe,W){V?(ge(i.POLYGON_OFFSET_FILL),(F!==xe||G!==W)&&(i.polygonOffset(xe,W),F=xe,G=W)):Se(i.POLYGON_OFFSET_FILL)}function He(V){V?ge(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function L(V){V===void 0&&(V=i.TEXTURE0+z-1),te!==V&&(i.activeTexture(V),te=V)}function S(V,xe,W){W===void 0&&(te===null?W=i.TEXTURE0+z-1:W=te);let le=Ce[W];le===void 0&&(le={type:void 0,texture:void 0},Ce[W]=le),(le.type!==V||le.texture!==xe)&&(te!==W&&(i.activeTexture(W),te=W),i.bindTexture(V,xe||ue[V]),le.type=V,le.texture=xe)}function J(){const V=Ce[te];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(V){ke.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ke.copy(V))}function ye(V){be.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),be.copy(V))}function at(V,xe){let W=l.get(xe);W===void 0&&(W=new WeakMap,l.set(xe,W));let le=W.get(V);le===void 0&&(le=i.getUniformBlockIndex(xe,V.name),W.set(V,le))}function Ke(V,xe){const le=l.get(xe).get(V);a.get(xe)!==le&&(i.uniformBlockBinding(xe,le,V.__bindingPointIndex),a.set(xe,le))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},te=null,Ce={},u={},h=new WeakMap,A=[],d=null,m=!1,E=null,g=null,p=null,C=null,y=null,M=null,P=null,Q=new Ze(0,0,0),R=0,T=!1,U=null,_=null,v=null,F=null,G=null,ke.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ge,disable:Se,bindFramebuffer:We,drawBuffers:qe,useProgram:st,setBlending:H,setMaterial:Ot,setFlipSided:Ge,setCullFace:$e,setLineWidth:Be,setPolygonOffset:At,setScissorTest:He,activeTexture:L,bindTexture:S,unbindTexture:J,compressedTexImage2D:se,compressedTexImage3D:Ae,texImage2D:De,texImage3D:Xe,updateUBOMapping:at,uniformBlockBinding:Ke,texStorage2D:je,texStorage3D:fe,texSubImage2D:ae,texSubImage3D:ze,compressedTexSubImage2D:Me,compressedTexSubImage3D:Re,scissor:Fe,viewport:ye,reset:tt}}function Bd(i,e,t,n){const r=fx(n);switch(t){case vm:return i*e;case xm:return i*e;case Sm:return i*e*2;case Zo:return i*e/r.components*r.byteLength;case Hh:return i*e/r.components*r.byteLength;case Bm:return i*e*2/r.components*r.byteLength;case kh:return i*e*2/r.components*r.byteLength;case ym:return i*e*3/r.components*r.byteLength;case vn:return i*e*4/r.components*r.byteLength;case zh:return i*e*4/r.components*r.byteLength;case Ro:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qo:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ku:case Ju:return Math.max(i,16)*Math.max(e,8)/4;case Xu:case ju:return Math.max(i,8)*Math.max(e,8)/2;case Zu:case $u:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case eh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ih:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case rh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case sh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case oh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ah:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ch:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case lh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case uh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case No:case ph:case gh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Mm:case mh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Eh:case Ih:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fx(i){switch(i){case on:case Im:return{byteLength:1,components:1};case Ns:case _m:case sn:return{byteLength:2,components:1};case Oh:case Gh:return{byteLength:2,components:4};case Hi:case Fh:case jt:return{byteLength:4,components:1};case Cm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function px(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let h;const A=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,S){return d?new OffscreenCanvas(L,S):Fs("canvas")}function E(L,S,J){let se=1;const Ae=He(L);if((Ae.width>J||Ae.height>J)&&(se=J/Math.max(Ae.width,Ae.height)),se<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ae=Math.floor(se*Ae.width),ze=Math.floor(se*Ae.height);h===void 0&&(h=m(ae,ze));const Me=S?m(ae,ze):h;return Me.width=ae,Me.height=ze,Me.getContext("2d").drawImage(L,0,0,ae,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ae.width+"x"+Ae.height+") to ("+ae+"x"+ze+")."),Me}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ae.width+"x"+Ae.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==un&&L.minFilter!==wt}function p(L){i.generateMipmap(L)}function C(L,S,J,se,Ae=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ae=S;if(S===i.RED&&(J===i.FLOAT&&(ae=i.R32F),J===i.HALF_FLOAT&&(ae=i.R16F),J===i.UNSIGNED_BYTE&&(ae=i.R8)),S===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ae=i.R8UI),J===i.UNSIGNED_SHORT&&(ae=i.R16UI),J===i.UNSIGNED_INT&&(ae=i.R32UI),J===i.BYTE&&(ae=i.R8I),J===i.SHORT&&(ae=i.R16I),J===i.INT&&(ae=i.R32I)),S===i.RG&&(J===i.FLOAT&&(ae=i.RG32F),J===i.HALF_FLOAT&&(ae=i.RG16F),J===i.UNSIGNED_BYTE&&(ae=i.RG8)),S===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ae=i.RG8UI),J===i.UNSIGNED_SHORT&&(ae=i.RG16UI),J===i.UNSIGNED_INT&&(ae=i.RG32UI),J===i.BYTE&&(ae=i.RG8I),J===i.SHORT&&(ae=i.RG16I),J===i.INT&&(ae=i.RG32I)),S===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),J===i.UNSIGNED_INT&&(ae=i.RGB32UI),J===i.BYTE&&(ae=i.RGB8I),J===i.SHORT&&(ae=i.RGB16I),J===i.INT&&(ae=i.RGB32I)),S===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),J===i.UNSIGNED_INT&&(ae=i.RGBA32UI),J===i.BYTE&&(ae=i.RGBA8I),J===i.SHORT&&(ae=i.RGBA16I),J===i.INT&&(ae=i.RGBA32I)),S===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),S===i.RGBA){const ze=Ae?Go:_t.getTransfer(se);J===i.FLOAT&&(ae=i.RGBA32F),J===i.HALF_FLOAT&&(ae=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ae=ze===Tt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function y(L,S){let J;return L?S===null||S===Hi||S===cr?J=i.DEPTH24_STENCIL8:S===jt?J=i.DEPTH32F_STENCIL8:S===Ns&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Hi||S===cr?J=i.DEPTH_COMPONENT24:S===jt?J=i.DEPTH_COMPONENT32F:S===Ns&&(J=i.DEPTH_COMPONENT16),J}function M(L,S){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==un&&L.minFilter!==wt?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function P(L){const S=L.target;S.removeEventListener("dispose",P),R(S),S.isVideoTexture&&u.delete(S)}function Q(L){const S=L.target;S.removeEventListener("dispose",Q),U(S)}function R(L){const S=n.get(L);if(S.__webglInit===void 0)return;const J=L.source,se=A.get(J);if(se){const Ae=se[S.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&T(L),Object.keys(se).length===0&&A.delete(J)}n.remove(L)}function T(L){const S=n.get(L);i.deleteTexture(S.__webglTexture);const J=L.source,se=A.get(J);delete se[S.__cacheKey],o.memory.textures--}function U(L){const S=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(S.__webglFramebuffer[se]))for(let Ae=0;Ae<S.__webglFramebuffer[se].length;Ae++)i.deleteFramebuffer(S.__webglFramebuffer[se][Ae]);else i.deleteFramebuffer(S.__webglFramebuffer[se]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[se])}else{if(Array.isArray(S.__webglFramebuffer))for(let se=0;se<S.__webglFramebuffer.length;se++)i.deleteFramebuffer(S.__webglFramebuffer[se]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let se=0;se<S.__webglColorRenderbuffer.length;se++)S.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[se]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const J=L.textures;for(let se=0,Ae=J.length;se<Ae;se++){const ae=n.get(J[se]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(J[se])}n.remove(L)}let _=0;function v(){_=0}function F(){const L=_;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),_+=1,L}function G(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function z(L,S){const J=n.get(L);if(L.isVideoTexture&&Be(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const se=L.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(J,L,S);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+S)}function Z(L,S){const J=n.get(L);if(L.version>0&&J.__version!==L.version){be(J,L,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+S)}function Y(L,S){const J=n.get(L);if(L.version>0&&J.__version!==L.version){be(J,L,S);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+S)}function oe(L,S){const J=n.get(L);if(L.version>0&&J.__version!==L.version){re(J,L,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+S)}const te={[Xr]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Oo]:i.MIRRORED_REPEAT},Ce={[un]:i.NEAREST,[Em]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[To]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Ie={[GI]:i.NEVER,[WI]:i.ALWAYS,[HI]:i.LESS,[Tm]:i.LEQUAL,[kI]:i.EQUAL,[YI]:i.GEQUAL,[zI]:i.GREATER,[VI]:i.NOTEQUAL};function Le(L,S){if(S.type===jt&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===wt||S.magFilter===To||S.magFilter===Ss||S.magFilter===Kn||S.minFilter===wt||S.minFilter===To||S.minFilter===Ss||S.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,te[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,te[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,te[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Ce[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Ce[S.minFilter]),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Ie[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===un||S.minFilter!==Ss&&S.minFilter!==Kn||S.type===jt&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ke(L,S){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",P));const se=S.source;let Ae=A.get(se);Ae===void 0&&(Ae={},A.set(se,Ae));const ae=G(S);if(ae!==L.__cacheKey){Ae[ae]===void 0&&(Ae[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),Ae[ae].usedTimes++;const ze=Ae[L.__cacheKey];ze!==void 0&&(Ae[L.__cacheKey].usedTimes--,ze.usedTimes===0&&T(S)),L.__cacheKey=ae,L.__webglTexture=Ae[ae].texture}return J}function be(L,S,J){let se=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=i.TEXTURE_3D);const Ae=ke(L,S),ae=S.source;t.bindTexture(se,L.__webglTexture,i.TEXTURE0+J);const ze=n.get(ae);if(ae.version!==ze.__version||Ae===!0){t.activeTexture(i.TEXTURE0+J);const Me=_t.getPrimaries(_t.workingColorSpace),Re=S.colorSpace===Un?null:_t.getPrimaries(S.colorSpace),je=S.colorSpace===Un||Me===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let fe=E(S.image,!1,r.maxTextureSize);fe=At(S,fe);const De=s.convert(S.format,S.colorSpace),Xe=s.convert(S.type);let Fe=C(S.internalFormat,De,Xe,S.colorSpace,S.isVideoTexture);Le(se,S);let ye;const at=S.mipmaps,Ke=S.isVideoTexture!==!0,tt=ze.__version===void 0||Ae===!0,V=ae.dataReady,xe=M(S,fe);if(S.isDepthTexture)Fe=y(S.format===lr,S.type),tt&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Fe,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Fe,fe.width,fe.height,0,De,Xe,null));else if(S.isDataTexture)if(at.length>0){Ke&&tt&&t.texStorage2D(i.TEXTURE_2D,xe,Fe,at[0].width,at[0].height);for(let W=0,le=at.length;W<le;W++)ye=at[W],Ke?V&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ye.width,ye.height,De,Xe,ye.data):t.texImage2D(i.TEXTURE_2D,W,Fe,ye.width,ye.height,0,De,Xe,ye.data);S.generateMipmaps=!1}else Ke?(tt&&t.texStorage2D(i.TEXTURE_2D,xe,Fe,fe.width,fe.height),V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,De,Xe,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,fe.width,fe.height,0,De,Xe,fe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ke&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Fe,at[0].width,at[0].height,fe.depth);for(let W=0,le=at.length;W<le;W++)if(ye=at[W],S.format!==vn)if(De!==null)if(Ke){if(V)if(S.layerUpdates.size>0){const Ne=Bd(ye.width,ye.height,S.format,S.type);for(const we of S.layerUpdates){const dt=ye.data.subarray(we*Ne/ye.data.BYTES_PER_ELEMENT,(we+1)*Ne/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,we,ye.width,ye.height,1,De,dt,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,fe.depth,De,ye.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Fe,ye.width,ye.height,fe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,fe.depth,De,Xe,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Fe,ye.width,ye.height,fe.depth,0,De,Xe,ye.data)}else{Ke&&tt&&t.texStorage2D(i.TEXTURE_2D,xe,Fe,at[0].width,at[0].height);for(let W=0,le=at.length;W<le;W++)ye=at[W],S.format!==vn?De!==null?Ke?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,ye.width,ye.height,De,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Fe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?V&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ye.width,ye.height,De,Xe,ye.data):t.texImage2D(i.TEXTURE_2D,W,Fe,ye.width,ye.height,0,De,Xe,ye.data)}else if(S.isDataArrayTexture)if(Ke){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Fe,fe.width,fe.height,fe.depth),V)if(S.layerUpdates.size>0){const W=Bd(fe.width,fe.height,S.format,S.type);for(const le of S.layerUpdates){const Ne=fe.data.subarray(le*W/fe.data.BYTES_PER_ELEMENT,(le+1)*W/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,fe.width,fe.height,1,De,Xe,Ne)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,De,Xe,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,fe.width,fe.height,fe.depth,0,De,Xe,fe.data);else if(S.isData3DTexture)Ke?(tt&&t.texStorage3D(i.TEXTURE_3D,xe,Fe,fe.width,fe.height,fe.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,De,Xe,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,fe.width,fe.height,fe.depth,0,De,Xe,fe.data);else if(S.isFramebufferTexture){if(tt)if(Ke)t.texStorage2D(i.TEXTURE_2D,xe,Fe,fe.width,fe.height);else{let W=fe.width,le=fe.height;for(let Ne=0;Ne<xe;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Fe,W,le,0,De,Xe,null),W>>=1,le>>=1}}else if(at.length>0){if(Ke&&tt){const W=He(at[0]);t.texStorage2D(i.TEXTURE_2D,xe,Fe,W.width,W.height)}for(let W=0,le=at.length;W<le;W++)ye=at[W],Ke?V&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,De,Xe,ye):t.texImage2D(i.TEXTURE_2D,W,Fe,De,Xe,ye);S.generateMipmaps=!1}else if(Ke){if(tt){const W=He(fe);t.texStorage2D(i.TEXTURE_2D,xe,Fe,W.width,W.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,Xe,fe)}else t.texImage2D(i.TEXTURE_2D,0,Fe,De,Xe,fe);g(S)&&p(se),ze.__version=ae.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function re(L,S,J){if(S.image.length!==6)return;const se=ke(L,S),Ae=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+J);const ae=n.get(Ae);if(Ae.version!==ae.__version||se===!0){t.activeTexture(i.TEXTURE0+J);const ze=_t.getPrimaries(_t.workingColorSpace),Me=S.colorSpace===Un?null:_t.getPrimaries(S.colorSpace),Re=S.colorSpace===Un||ze===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const je=S.isCompressedTexture||S.image[0].isCompressedTexture,fe=S.image[0]&&S.image[0].isDataTexture,De=[];for(let le=0;le<6;le++)!je&&!fe?De[le]=E(S.image[le],!0,r.maxCubemapSize):De[le]=fe?S.image[le].image:S.image[le],De[le]=At(S,De[le]);const Xe=De[0],Fe=s.convert(S.format,S.colorSpace),ye=s.convert(S.type),at=C(S.internalFormat,Fe,ye,S.colorSpace),Ke=S.isVideoTexture!==!0,tt=ae.__version===void 0||se===!0,V=Ae.dataReady;let xe=M(S,Xe);Le(i.TEXTURE_CUBE_MAP,S);let W;if(je){Ke&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,at,Xe.width,Xe.height);for(let le=0;le<6;le++){W=De[le].mipmaps;for(let Ne=0;Ne<W.length;Ne++){const we=W[Ne];S.format!==vn?Fe!==null?Ke?V&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,0,0,we.width,we.height,Fe,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,at,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,0,0,we.width,we.height,Fe,ye,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,at,we.width,we.height,0,Fe,ye,we.data)}}}else{if(W=S.mipmaps,Ke&&tt){W.length>0&&xe++;const le=He(De[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,at,le.width,le.height)}for(let le=0;le<6;le++)if(fe){Ke?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,De[le].width,De[le].height,Fe,ye,De[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,at,De[le].width,De[le].height,0,Fe,ye,De[le].data);for(let Ne=0;Ne<W.length;Ne++){const dt=W[Ne].image[le].image;Ke?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,0,0,dt.width,dt.height,Fe,ye,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,at,dt.width,dt.height,0,Fe,ye,dt.data)}}else{Ke?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Fe,ye,De[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,at,Fe,ye,De[le]);for(let Ne=0;Ne<W.length;Ne++){const we=W[Ne];Ke?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,0,0,Fe,ye,we.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,at,Fe,ye,we.image[le])}}}g(S)&&p(i.TEXTURE_CUBE_MAP),ae.__version=Ae.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ue(L,S,J,se,Ae,ae){const ze=s.convert(J.format,J.colorSpace),Me=s.convert(J.type),Re=C(J.internalFormat,ze,Me,J.colorSpace);if(!n.get(S).__hasExternalTextures){const fe=Math.max(1,S.width>>ae),De=Math.max(1,S.height>>ae);Ae===i.TEXTURE_3D||Ae===i.TEXTURE_2D_ARRAY?t.texImage3D(Ae,ae,Re,fe,De,S.depth,0,ze,Me,null):t.texImage2D(Ae,ae,Re,fe,De,0,ze,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),$e(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,Ae,n.get(J).__webglTexture,0,Ge(S)):(Ae===i.TEXTURE_2D||Ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,Ae,n.get(J).__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(L,S,J){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer){const se=S.depthTexture,Ae=se&&se.isDepthTexture?se.type:null,ae=y(S.stencilBuffer,Ae),ze=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=Ge(S);$e(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,ae,S.width,S.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ae,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ae,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ze,i.RENDERBUFFER,L)}else{const se=S.textures;for(let Ae=0;Ae<se.length;Ae++){const ae=se[Ae],ze=s.convert(ae.format,ae.colorSpace),Me=s.convert(ae.type),Re=C(ae.internalFormat,ze,Me,ae.colorSpace),je=Ge(S);J&&$e(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,Re,S.width,S.height):$e(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,Re,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Re,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const se=n.get(S.depthTexture).__webglTexture,Ae=Ge(S);if(S.depthTexture.format===kr)$e(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(S.depthTexture.format===lr)$e(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function We(L){const S=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){const se=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),se){const Ae=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,se.removeEventListener("dispose",Ae)};se.addEventListener("dispose",Ae),S.__depthDisposeCallback=Ae}S.__boundDepthTexture=se}if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Se(S.__webglFramebuffer,L)}else if(J){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]===void 0)S.__webglDepthbuffer[se]=i.createRenderbuffer(),ge(S.__webglDepthbuffer[se],L,!1);else{const Ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ge(S.__webglDepthbuffer,L,!1);else{const se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,Ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(L,S,J){const se=n.get(L);S!==void 0&&ue(se.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&We(L)}function st(L){const S=L.texture,J=n.get(L),se=n.get(S);L.addEventListener("dispose",Q);const Ae=L.textures,ae=L.isWebGLCubeRenderTarget===!0,ze=Ae.length>1;if(ze||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=S.version,o.memory.textures++),ae){J.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0){J.__webglFramebuffer[Me]=[];for(let Re=0;Re<S.mipmaps.length;Re++)J.__webglFramebuffer[Me][Re]=i.createFramebuffer()}else J.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){J.__webglFramebuffer=[];for(let Me=0;Me<S.mipmaps.length;Me++)J.__webglFramebuffer[Me]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(ze)for(let Me=0,Re=Ae.length;Me<Re;Me++){const je=n.get(Ae[Me]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&$e(L)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Me=0;Me<Ae.length;Me++){const Re=Ae[Me];J.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Me]);const je=s.convert(Re.format,Re.colorSpace),fe=s.convert(Re.type),De=C(Re.internalFormat,je,fe,Re.colorSpace,L.isXRRenderTarget===!0),Xe=Ge(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,De,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,J.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Le(i.TEXTURE_CUBE_MAP,S);for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)ue(J.__webglFramebuffer[Me][Re],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Re);else ue(J.__webglFramebuffer[Me],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);g(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let Me=0,Re=Ae.length;Me<Re;Me++){const je=Ae[Me],fe=n.get(je);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),Le(i.TEXTURE_2D,je),ue(J.__webglFramebuffer,L,je,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,0),g(je)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Me=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,se.__webglTexture),Le(Me,S),S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)ue(J.__webglFramebuffer[Re],L,S,i.COLOR_ATTACHMENT0,Me,Re);else ue(J.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,Me,0);g(S)&&p(Me),t.unbindTexture()}L.depthBuffer&&We(L)}function ht(L){const S=L.textures;for(let J=0,se=S.length;J<se;J++){const Ae=S[J];if(g(Ae)){const ae=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ze=n.get(Ae).__webglTexture;t.bindTexture(ae,ze),p(ae),t.unbindTexture()}}}const Je=[],H=[];function Ot(L){if(L.samples>0){if($e(L)===!1){const S=L.textures,J=L.width,se=L.height;let Ae=i.COLOR_BUFFER_BIT;const ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ze=n.get(L),Me=S.length>1;if(Me)for(let Re=0;Re<S.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Re=0;Re<S.length;Re++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Ae|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Ae|=i.STENCIL_BUFFER_BIT)),Me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Re]);const je=n.get(S[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,J,se,0,0,J,se,Ae,i.NEAREST),l===!0&&(Je.length=0,H.length=0,Je.push(i.COLOR_ATTACHMENT0+Re),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Je.push(ae),H.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let Re=0;Re<S.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Re]);const je=n.get(S[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const S=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ge(L){return Math.min(r.maxSamples,L.samples)}function $e(L){const S=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Be(L){const S=o.render.frame;u.get(L)!==S&&(u.set(L,S),L.update())}function At(L,S){const J=L.colorSpace,se=L.format,Ae=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Qt&&J!==Un&&(_t.getTransfer(J)===Tt?(se!==vn||Ae!==on)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),S}function He(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=v,this.setTexture2D=z,this.setTexture2DArray=Z,this.setTexture3D=Y,this.setTextureCube=oe,this.rebindTextures=qe,this.setupRenderTarget=st,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=$e}function gx(i,e){function t(n,r=Un){let s;const o=_t.getTransfer(r);if(n===on)return i.UNSIGNED_BYTE;if(n===Oh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Im)return i.BYTE;if(n===_m)return i.SHORT;if(n===Ns)return i.UNSIGNED_SHORT;if(n===Fh)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===jt)return i.FLOAT;if(n===sn)return i.HALF_FLOAT;if(n===vm)return i.ALPHA;if(n===ym)return i.RGB;if(n===vn)return i.RGBA;if(n===xm)return i.LUMINANCE;if(n===Sm)return i.LUMINANCE_ALPHA;if(n===kr)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===Zo)return i.RED;if(n===Hh)return i.RED_INTEGER;if(n===Bm)return i.RG;if(n===kh)return i.RG_INTEGER;if(n===zh)return i.RGBA_INTEGER;if(n===Ro||n===Do||n===Qo||n===Lo)if(o===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ro)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ro)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xu||n===Ku||n===ju||n===Ju)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Xu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ku)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ju)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ju)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zu||n===$u||n===eh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Zu||n===$u)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===eh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===th||n===nh||n===ih||n===rh||n===sh||n===oh||n===ah||n===ch||n===lh||n===uh||n===hh||n===Ah||n===dh||n===fh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===th)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ih)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ah)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ch)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ah)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===No||n===ph||n===gh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===No)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ph)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mm||n===mh||n===Eh||n===Ih)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===No)return s.COMPRESSED_RED_RGTC1_EXT;if(n===mh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ih)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class mx extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fi extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ex={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const g=t.getJointPose(E,n),p=this._getHandJoint(c,E);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],A=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&A>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&A<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ex)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Cx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new kt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kn({vertexShader:Ix,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new Jr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vx extends _i{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,A=null,d=null,m=null;const E=new Cx,g=t.getContextAttributes();let p=null,C=null;const y=[],M=[],P=new et;let Q=null;const R=new nn;R.layers.enable(1),R.viewport=new yt;const T=new nn;T.layers.enable(2),T.viewport=new yt;const U=[R,T],_=new mx;_.layers.enable(1),_.layers.enable(2);let v=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ue=y[re];return ue===void 0&&(ue=new za,y[re]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(re){let ue=y[re];return ue===void 0&&(ue=new za,y[re]=ue),ue.getGripSpace()},this.getHand=function(re){let ue=y[re];return ue===void 0&&(ue=new za,y[re]=ue),ue.getHandSpace()};function G(re){const ue=M.indexOf(re.inputSource);if(ue===-1)return;const ge=y[ue];ge!==void 0&&(ge.update(re.inputSource,re.frame,c||o),ge.dispatchEvent({type:re.type,data:re.inputSource}))}function z(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",Z);for(let re=0;re<y.length;re++){const ue=M[re];ue!==null&&(M[re]=null,y[re].disconnect(ue))}v=null,F=null,E.reset(),e.setRenderTarget(p),d=null,A=null,h=null,r=null,C=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(Q),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return A!==null?A:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",z),r.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await t.makeXRCompatible(),Q=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ue={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),C=new Hn(d.framebufferWidth,d.framebufferHeight,{format:vn,type:on,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ue=null,ge=null,Se=null;g.depth&&(Se=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=g.stencil?lr:kr,ge=g.stencil?cr:Hi);const We={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};h=new XRWebGLBinding(r,t),A=h.createProjectionLayer(We),r.updateRenderState({layers:[A]}),e.setPixelRatio(1),e.setSize(A.textureWidth,A.textureHeight,!1),C=new Hn(A.textureWidth,A.textureHeight,{format:vn,type:on,depthTexture:new jh(A.textureWidth,A.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:A.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),be.setContext(r),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function Z(re){for(let ue=0;ue<re.removed.length;ue++){const ge=re.removed[ue],Se=M.indexOf(ge);Se>=0&&(M[Se]=null,y[Se].disconnect(ge))}for(let ue=0;ue<re.added.length;ue++){const ge=re.added[ue];let Se=M.indexOf(ge);if(Se===-1){for(let qe=0;qe<y.length;qe++)if(qe>=M.length){M.push(ge),Se=qe;break}else if(M[qe]===null){M[qe]=ge,Se=qe;break}if(Se===-1)break}const We=y[Se];We&&We.connect(ge)}}const Y=new X,oe=new X;function te(re,ue,ge){Y.setFromMatrixPosition(ue.matrixWorld),oe.setFromMatrixPosition(ge.matrixWorld);const Se=Y.distanceTo(oe),We=ue.projectionMatrix.elements,qe=ge.projectionMatrix.elements,st=We[14]/(We[10]-1),ht=We[14]/(We[10]+1),Je=(We[9]+1)/We[5],H=(We[9]-1)/We[5],Ot=(We[8]-1)/We[0],Ge=(qe[8]+1)/qe[0],$e=st*Ot,Be=st*Ge,At=Se/(-Ot+Ge),He=At*-Ot;if(ue.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(He),re.translateZ(At),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),We[10]===-1)re.projectionMatrix.copy(ue.projectionMatrix),re.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const L=st+At,S=ht+At,J=$e-He,se=Be+(Se-He),Ae=Je*ht/S*L,ae=H*ht/S*L;re.projectionMatrix.makePerspective(J,se,Ae,ae,L,S),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function Ce(re,ue){ue===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ue.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let ue=re.near,ge=re.far;E.texture!==null&&(E.depthNear>0&&(ue=E.depthNear),E.depthFar>0&&(ge=E.depthFar)),_.near=T.near=R.near=ue,_.far=T.far=R.far=ge,(v!==_.near||F!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),v=_.near,F=_.far);const Se=re.parent,We=_.cameras;Ce(_,Se);for(let qe=0;qe<We.length;qe++)Ce(We[qe],Se);We.length===2?te(_,R,T):_.projectionMatrix.copy(R.projectionMatrix),Ie(re,_,Se)};function Ie(re,ue,ge){ge===null?re.matrix.copy(ue.matrixWorld):(re.matrix.copy(ge.matrixWorld),re.matrix.invert(),re.matrix.multiply(ue.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ue.projectionMatrix),re.projectionMatrixInverse.copy(ue.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Kr*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(A===null&&d===null))return l},this.setFoveation=function(re){l=re,A!==null&&(A.fixedFoveation=re),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=re)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(_)};let Le=null;function ke(re,ue){if(u=ue.getViewerPose(c||o),m=ue,u!==null){const ge=u.views;d!==null&&(e.setRenderTargetFramebuffer(C,d.framebuffer),e.setRenderTarget(C));let Se=!1;ge.length!==_.cameras.length&&(_.cameras.length=0,Se=!0);for(let qe=0;qe<ge.length;qe++){const st=ge[qe];let ht=null;if(d!==null)ht=d.getViewport(st);else{const H=h.getViewSubImage(A,st);ht=H.viewport,qe===0&&(e.setRenderTargetTextures(C,H.colorTexture,A.ignoreDepthValues?void 0:H.depthStencilTexture),e.setRenderTarget(C))}let Je=U[qe];Je===void 0&&(Je=new nn,Je.layers.enable(qe),Je.viewport=new yt,U[qe]=Je),Je.matrix.fromArray(st.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(st.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(ht.x,ht.y,ht.width,ht.height),qe===0&&(_.matrix.copy(Je.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Se===!0&&_.cameras.push(Je)}const We=r.enabledFeatures;if(We&&We.includes("depth-sensing")){const qe=h.getDepthInformation(ge[0]);qe&&qe.isValid&&qe.texture&&E.init(e,qe,r.renderState)}}for(let ge=0;ge<y.length;ge++){const Se=M[ge],We=y[ge];Se!==null&&We!==void 0&&We.update(Se,ue,c||o)}Le&&Le(re,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),m=null}const be=new Fm;be.setAnimationLoop(ke),this.setAnimationLoop=function(re){Le=re},this.dispose=function(){}}}const er=new $n,yx=new rt;function xx(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Um(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,C,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),A(g,p),p.isMeshPhysicalMaterial&&d(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),E(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,C,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Kt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Kt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const C=e.get(p),y=C.envMap,M=C.envMapRotation;y&&(g.envMap.value=y,er.copy(M),er.x*=-1,er.y*=-1,er.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),g.envMapRotation.value.setFromMatrix4(yx.makeRotationFromEuler(er)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,C,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*C,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function A(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,C){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function E(g,p){const C=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Sx(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,y){const M=y.program;n.uniformBlockBinding(C,M)}function c(C,y){let M=r[C.id];M===void 0&&(m(C),M=u(C),r[C.id]=M,C.addEventListener("dispose",g));const P=y.program;n.updateUBOMapping(C,P);const Q=e.render.frame;s[C.id]!==Q&&(A(C),s[C.id]=Q)}function u(C){const y=h();C.__bindingPointIndex=y;const M=i.createBuffer(),P=C.__size,Q=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,Q),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function h(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function A(C){const y=r[C.id],M=C.uniforms,P=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let Q=0,R=M.length;Q<R;Q++){const T=Array.isArray(M[Q])?M[Q]:[M[Q]];for(let U=0,_=T.length;U<_;U++){const v=T[U];if(d(v,Q,U,P)===!0){const F=v.__offset,G=Array.isArray(v.value)?v.value:[v.value];let z=0;for(let Z=0;Z<G.length;Z++){const Y=G[Z],oe=E(Y);typeof Y=="number"||typeof Y=="boolean"?(v.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,F+z,v.__data)):Y.isMatrix3?(v.__data[0]=Y.elements[0],v.__data[1]=Y.elements[1],v.__data[2]=Y.elements[2],v.__data[3]=0,v.__data[4]=Y.elements[3],v.__data[5]=Y.elements[4],v.__data[6]=Y.elements[5],v.__data[7]=0,v.__data[8]=Y.elements[6],v.__data[9]=Y.elements[7],v.__data[10]=Y.elements[8],v.__data[11]=0):(Y.toArray(v.__data,z),z+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,v.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(C,y,M,P){const Q=C.value,R=y+"_"+M;if(P[R]===void 0)return typeof Q=="number"||typeof Q=="boolean"?P[R]=Q:P[R]=Q.clone(),!0;{const T=P[R];if(typeof Q=="number"||typeof Q=="boolean"){if(T!==Q)return P[R]=Q,!0}else if(T.equals(Q)===!1)return T.copy(Q),!0}return!1}function m(C){const y=C.uniforms;let M=0;const P=16;for(let R=0,T=y.length;R<T;R++){const U=Array.isArray(y[R])?y[R]:[y[R]];for(let _=0,v=U.length;_<v;_++){const F=U[_],G=Array.isArray(F.value)?F.value:[F.value];for(let z=0,Z=G.length;z<Z;z++){const Y=G[z],oe=E(Y),te=M%P,Ce=te%oe.boundary,Ie=te+Ce;M+=Ce,Ie!==0&&P-Ie<oe.storage&&(M+=P-Ie),F.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=oe.storage}}}const Q=M%P;return Q>0&&(M+=P-Q),C.__size=M,C.__cache={},this}function E(C){const y={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(y.boundary=4,y.storage=4):C.isVector2?(y.boundary=8,y.storage=8):C.isVector3||C.isColor?(y.boundary=16,y.storage=12):C.isVector4?(y.boundary=16,y.storage=16):C.isMatrix3?(y.boundary=48,y.storage=48):C.isMatrix4?(y.boundary=64,y.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),y}function g(C){const y=C.target;y.removeEventListener("dispose",g);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const C in r)i.deleteBuffer(r[C]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Bx{constructor(e={}){const{canvas:t=u_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let A;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=n.getContextAttributes().alpha}else A=o;const d=new Uint32Array(4),m=new Int32Array(4);let E=null,g=null;const p=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this.toneMapping=Gi,this.toneMappingExposure=1;const y=this;let M=!1,P=0,Q=0,R=null,T=-1,U=null;const _=new yt,v=new yt;let F=null;const G=new Ze(0);let z=0,Z=t.width,Y=t.height,oe=1,te=null,Ce=null;const Ie=new yt(0,0,Z,Y),Le=new yt(0,0,Z,Y);let ke=!1;const be=new Xh;let re=!1,ue=!1;const ge=new rt,Se=new rt,We=new X,qe=new yt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Je(){return R===null?oe:1}let H=n;function Ot(w,f){return t.getContext(w,f)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jo}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",we,!1),H===null){const f="webgl2";if(H=Ot(f,w),H===null)throw Ot(f)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ge,$e,Be,At,He,L,S,J,se,Ae,ae,ze,Me,Re,je,fe,De,Xe,Fe,ye,at,Ke,tt,V;function xe(){Ge=new Rv(H),Ge.init(),Ke=new gx(H,Ge),$e=new Sv(H,Ge,e,Ke),Be=new dx(H),$e.reverseDepthBuffer&&Be.buffers.depth.setReversed(!0),At=new Lv(H),He=new Zy,L=new px(H,Ge,Be,He,$e,Ke,At),S=new Mv(y),J=new Tv(y),se=new H_(H),tt=new yv(H,se),Ae=new Dv(H,se,At,tt),ae=new Pv(H,Ae,se,At),Fe=new Nv(H,$e,L),fe=new Bv(He),ze=new Jy(y,S,J,Ge,$e,tt,fe),Me=new xx(y,He),Re=new ex,je=new ox(Ge),Xe=new vv(y,S,J,Be,ae,A,l),De=new hx(y,ae,$e),V=new Sx(H,At,$e,Be),ye=new xv(H,Ge,At),at=new Qv(H,Ge,At),At.programs=ze.programs,y.capabilities=$e,y.extensions=Ge,y.properties=He,y.renderLists=Re,y.shadowMap=De,y.state=Be,y.info=At}xe();const W=new vx(y,H);this.xr=W,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=Ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(w){w!==void 0&&(oe=w,this.setSize(Z,Y,!1))},this.getSize=function(w){return w.set(Z,Y)},this.setSize=function(w,f,I=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,Y=f,t.width=Math.floor(w*oe),t.height=Math.floor(f*oe),I===!0&&(t.style.width=w+"px",t.style.height=f+"px"),this.setViewport(0,0,w,f)},this.getDrawingBufferSize=function(w){return w.set(Z*oe,Y*oe).floor()},this.setDrawingBufferSize=function(w,f,I){Z=w,Y=f,oe=I,t.width=Math.floor(w*I),t.height=Math.floor(f*I),this.setViewport(0,0,w,f)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(Ie)},this.setViewport=function(w,f,I,x){w.isVector4?Ie.set(w.x,w.y,w.z,w.w):Ie.set(w,f,I,x),Be.viewport(_.copy(Ie).multiplyScalar(oe).round())},this.getScissor=function(w){return w.copy(Le)},this.setScissor=function(w,f,I,x){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,f,I,x),Be.scissor(v.copy(Le).multiplyScalar(oe).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(w){Be.setScissorTest(ke=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){Ce=w},this.getClearColor=function(w){return w.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(w=!0,f=!0,I=!0){let x=0;if(w){let B=!1;if(R!==null){const k=R.texture.format;B=k===zh||k===kh||k===Hh}if(B){const k=R.texture.type,O=k===on||k===Hi||k===Ns||k===cr||k===Oh||k===Gh,K=Xe.getClearColor(),ne=Xe.getClearAlpha(),$=K.r,ee=K.g,j=K.b;O?(d[0]=$,d[1]=ee,d[2]=j,d[3]=ne,H.clearBufferuiv(H.COLOR,0,d)):(m[0]=$,m[1]=ee,m[2]=j,m[3]=ne,H.clearBufferiv(H.COLOR,0,m))}else x|=H.COLOR_BUFFER_BIT}f&&(x|=H.DEPTH_BUFFER_BIT,H.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),I&&(x|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(x)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Re.dispose(),je.dispose(),He.dispose(),S.dispose(),J.dispose(),ae.dispose(),tt.dispose(),V.dispose(),ze.dispose(),W.dispose(),W.removeEventListener("sessionstart",mr),W.removeEventListener("sessionend",bn),gn.stop()};function le(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=At.autoReset,f=De.enabled,I=De.autoUpdate,x=De.needsUpdate,B=De.type;xe(),At.autoReset=w,De.enabled=f,De.autoUpdate=I,De.needsUpdate=x,De.type=B}function we(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function dt(w){const f=w.target;f.removeEventListener("dispose",dt),bt(f)}function bt(w){xt(w),He.remove(w)}function xt(w){const f=He.get(w).programs;f!==void 0&&(f.forEach(function(I){ze.releaseProgram(I)}),w.isShaderMaterial&&ze.releaseShaderCache(w))}this.renderBufferDirect=function(w,f,I,x,B,k){f===null&&(f=st);const O=B.isMesh&&B.matrixWorld.determinant()<0,K=_r(w,f,I,x,B);Be.setMaterial(x,O);let ne=I.index,$=1;if(x.wireframe===!0){if(ne=Ae.getWireframeAttribute(I),ne===void 0)return;$=2}const ee=I.drawRange,j=I.attributes.position;let he=ee.start*$,me=(ee.start+ee.count)*$;k!==null&&(he=Math.max(he,k.start*$),me=Math.min(me,(k.start+k.count)*$)),ne!==null?(he=Math.max(he,0),me=Math.min(me,ne.count)):j!=null&&(he=Math.max(he,0),me=Math.min(me,j.count));const pe=me-he;if(pe<0||pe===1/0)return;tt.setup(B,x,K,I,ne);let Ue,de=ye;if(ne!==null&&(Ue=se.get(ne),de=at,de.setIndex(Ue)),B.isMesh)x.wireframe===!0?(Be.setLineWidth(x.wireframeLinewidth*Je()),de.setMode(H.LINES)):de.setMode(H.TRIANGLES);else if(B.isLine){let ce=x.linewidth;ce===void 0&&(ce=1),Be.setLineWidth(ce*Je()),B.isLineSegments?de.setMode(H.LINES):B.isLineLoop?de.setMode(H.LINE_LOOP):de.setMode(H.LINE_STRIP)}else B.isPoints?de.setMode(H.POINTS):B.isSprite&&de.setMode(H.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)de.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))de.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const ce=B._multiDrawStarts,Ve=B._multiDrawCounts,Ye=B._multiDrawCount,pt=ne?se.get(ne).bytesPerElement:1,Ut=He.get(x).currentProgram.getUniforms();for(let ot=0;ot<Ye;ot++)Ut.setValue(H,"_gl_DrawID",ot),de.render(ce[ot]/pt,Ve[ot])}else if(B.isInstancedMesh)de.renderInstances(he,pe,B.count);else if(I.isInstancedBufferGeometry){const ce=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,Ve=Math.min(I.instanceCount,ce);de.renderInstances(he,pe,Ve)}else de.render(he,pe)};function ft(w,f,I){w.transparent===!0&&w.side===fn&&w.forceSinglePass===!1?(w.side=Kt,w.needsUpdate=!0,si(w,f,I),w.side=Zn,w.needsUpdate=!0,si(w,f,I),w.side=fn):si(w,f,I)}this.compile=function(w,f,I=null){I===null&&(I=w),g=je.get(I),g.init(f),C.push(g),I.traverseVisible(function(B){B.isLight&&B.layers.test(f.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),w!==I&&w.traverseVisible(function(B){B.isLight&&B.layers.test(f.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();const x=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const k=B.material;if(k)if(Array.isArray(k))for(let O=0;O<k.length;O++){const K=k[O];ft(K,I,B),x.add(K)}else ft(k,I,B),x.add(k)}),C.pop(),g=null,x},this.compileAsync=function(w,f,I=null){const x=this.compile(w,f,I);return new Promise(B=>{function k(){if(x.forEach(function(O){He.get(O).currentProgram.isReady()&&x.delete(O)}),x.size===0){B(w);return}setTimeout(k,10)}Ge.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let Wt=null;function pn(w){Wt&&Wt(w)}function mr(){gn.stop()}function bn(){gn.start()}const gn=new Fm;gn.setAnimationLoop(pn),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(w){Wt=w,W.setAnimationLoop(w),w===null?gn.stop():gn.start()},W.addEventListener("sessionstart",mr),W.addEventListener("sessionend",bn),this.render=function(w,f){if(f!==void 0&&f.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(f),f=W.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,f,R),g=je.get(w,C.length),g.init(f),C.push(g),Se.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),be.setFromProjectionMatrix(Se),ue=this.localClippingEnabled,re=fe.init(this.clippingPlanes,ue),E=Re.get(w,p.length),E.init(),p.push(E),W.enabled===!0&&W.isPresenting===!0){const k=y.xr.getDepthSensingMesh();k!==null&&Yi(k,f,-1/0,y.sortObjects)}Yi(w,f,0,y.sortObjects),E.finish(),y.sortObjects===!0&&E.sort(te,Ce),ht=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,ht&&Xe.addToRenderList(E,w),this.info.render.frame++,re===!0&&fe.beginShadows();const I=g.state.shadowsArray;De.render(I,w,f),re===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const x=E.opaque,B=E.transmissive;if(g.setupLights(),f.isArrayCamera){const k=f.cameras;if(B.length>0)for(let O=0,K=k.length;O<K;O++){const ne=k[O];Wi(x,B,w,ne)}ht&&Xe.render(w);for(let O=0,K=k.length;O<K;O++){const ne=k[O];Si(E,w,ne,ne.viewport)}}else B.length>0&&Wi(x,B,w,f),ht&&Xe.render(w),Si(E,w,f);R!==null&&(L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(y,w,f),tt.resetDefaultState(),T=-1,U=null,C.pop(),C.length>0?(g=C[C.length-1],re===!0&&fe.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?E=p[p.length-1]:E=null};function Yi(w,f,I,x){if(w.visible===!1)return;if(w.layers.test(f.layers)){if(w.isGroup)I=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(f);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||be.intersectsSprite(w)){x&&qe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Se);const O=ae.update(w),K=w.material;K.visible&&E.push(w,O,K,I,qe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||be.intersectsObject(w))){const O=ae.update(w),K=w.material;if(x&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),qe.copy(w.boundingSphere.center)):(O.boundingSphere===null&&O.computeBoundingSphere(),qe.copy(O.boundingSphere.center)),qe.applyMatrix4(w.matrixWorld).applyMatrix4(Se)),Array.isArray(K)){const ne=O.groups;for(let $=0,ee=ne.length;$<ee;$++){const j=ne[$],he=K[j.materialIndex];he&&he.visible&&E.push(w,O,he,I,qe.z,j)}}else K.visible&&E.push(w,O,K,I,qe.z,null)}}const k=w.children;for(let O=0,K=k.length;O<K;O++)Yi(k[O],f,I,x)}function Si(w,f,I,x){const B=w.opaque,k=w.transmissive,O=w.transparent;g.setupLightsView(I),re===!0&&fe.setGlobalState(y.clippingPlanes,I),x&&Be.viewport(_.copy(x)),B.length>0&&Bi(B,f,I),k.length>0&&Bi(k,f,I),O.length>0&&Bi(O,f,I),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Wi(w,f,I,x){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[x.id]===void 0&&(g.state.transmissionRenderTarget[x.id]=new Hn(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?sn:on,minFilter:Kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const k=g.state.transmissionRenderTarget[x.id],O=x.viewport||_;k.setSize(O.z,O.w);const K=y.getRenderTarget();y.setRenderTarget(k),y.getClearColor(G),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),ht&&Xe.render(I);const ne=y.toneMapping;y.toneMapping=Gi;const $=x.viewport;if(x.viewport!==void 0&&(x.viewport=void 0),g.setupLightsView(x),re===!0&&fe.setGlobalState(y.clippingPlanes,x),Bi(w,I,x),L.updateMultisampleRenderTarget(k),L.updateRenderTargetMipmap(k),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let j=0,he=f.length;j<he;j++){const me=f[j],pe=me.object,Ue=me.geometry,de=me.material,ce=me.group;if(de.side===fn&&pe.layers.test(x.layers)){const Ve=de.side;de.side=Kt,de.needsUpdate=!0,Er(pe,I,x,Ue,de,ce),de.side=Ve,de.needsUpdate=!0,ee=!0}}ee===!0&&(L.updateMultisampleRenderTarget(k),L.updateRenderTargetMipmap(k))}y.setRenderTarget(K),y.setClearColor(G,z),$!==void 0&&(x.viewport=$),y.toneMapping=ne}function Bi(w,f,I){const x=f.isScene===!0?f.overrideMaterial:null;for(let B=0,k=w.length;B<k;B++){const O=w[B],K=O.object,ne=O.geometry,$=x===null?O.material:x,ee=O.group;K.layers.test(I.layers)&&Er(K,f,I,ne,$,ee)}}function Er(w,f,I,x,B,k){w.onBeforeRender(y,f,I,x,B,k),w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(y,f,I,x,w,k),B.transparent===!0&&B.side===fn&&B.forceSinglePass===!1?(B.side=Kt,B.needsUpdate=!0,y.renderBufferDirect(I,f,x,B,w,k),B.side=Zn,B.needsUpdate=!0,y.renderBufferDirect(I,f,x,B,w,k),B.side=fn):y.renderBufferDirect(I,f,x,B,w,k),w.onAfterRender(y,f,I,x,B,k)}function si(w,f,I){f.isScene!==!0&&(f=st);const x=He.get(w),B=g.state.lights,k=g.state.shadowsArray,O=B.state.version,K=ze.getParameters(w,B.state,k,f,I),ne=ze.getProgramCacheKey(K);let $=x.programs;x.environment=w.isMeshStandardMaterial?f.environment:null,x.fog=f.fog,x.envMap=(w.isMeshStandardMaterial?J:S).get(w.envMap||x.environment),x.envMapRotation=x.environment!==null&&w.envMap===null?f.environmentRotation:w.envMapRotation,$===void 0&&(w.addEventListener("dispose",dt),$=new Map,x.programs=$);let ee=$.get(ne);if(ee!==void 0){if(x.currentProgram===ee&&x.lightsStateVersion===O)return qi(w,K),ee}else K.uniforms=ze.getUniforms(w),w.onBeforeCompile(K,y),ee=ze.acquireProgram(K,ne),$.set(ne,ee),x.uniforms=K.uniforms;const j=x.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(j.clippingPlanes=fe.uniform),qi(w,K),x.needsLights=Tn(w),x.lightsStateVersion=O,x.needsLights&&(j.ambientLightColor.value=B.state.ambient,j.lightProbe.value=B.state.probe,j.directionalLights.value=B.state.directional,j.directionalLightShadows.value=B.state.directionalShadow,j.spotLights.value=B.state.spot,j.spotLightShadows.value=B.state.spotShadow,j.rectAreaLights.value=B.state.rectArea,j.ltc_1.value=B.state.rectAreaLTC1,j.ltc_2.value=B.state.rectAreaLTC2,j.pointLights.value=B.state.point,j.pointLightShadows.value=B.state.pointShadow,j.hemisphereLights.value=B.state.hemi,j.directionalShadowMap.value=B.state.directionalShadowMap,j.directionalShadowMatrix.value=B.state.directionalShadowMatrix,j.spotShadowMap.value=B.state.spotShadowMap,j.spotLightMatrix.value=B.state.spotLightMatrix,j.spotLightMap.value=B.state.spotLightMap,j.pointShadowMap.value=B.state.pointShadowMap,j.pointShadowMatrix.value=B.state.pointShadowMatrix),x.currentProgram=ee,x.uniformsList=null,ee}function Ir(w){if(w.uniformsList===null){const f=w.currentProgram.getUniforms();w.uniformsList=Uo.seqWithValue(f.seq,w.uniforms)}return w.uniformsList}function qi(w,f){const I=He.get(w);I.outputColorSpace=f.outputColorSpace,I.batching=f.batching,I.batchingColor=f.batchingColor,I.instancing=f.instancing,I.instancingColor=f.instancingColor,I.instancingMorph=f.instancingMorph,I.skinning=f.skinning,I.morphTargets=f.morphTargets,I.morphNormals=f.morphNormals,I.morphColors=f.morphColors,I.morphTargetsCount=f.morphTargetsCount,I.numClippingPlanes=f.numClippingPlanes,I.numIntersection=f.numClipIntersection,I.vertexAlphas=f.vertexAlphas,I.vertexTangents=f.vertexTangents,I.toneMapping=f.toneMapping}function _r(w,f,I,x,B){f.isScene!==!0&&(f=st),L.resetTextureUnits();const k=f.fog,O=x.isMeshStandardMaterial?f.environment:null,K=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Qt,ne=(x.isMeshStandardMaterial?J:S).get(x.envMap||O),$=x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,ee=!!I.attributes.tangent&&(!!x.normalMap||x.anisotropy>0),j=!!I.morphAttributes.position,he=!!I.morphAttributes.normal,me=!!I.morphAttributes.color;let pe=Gi;x.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(pe=y.toneMapping);const Ue=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,de=Ue!==void 0?Ue.length:0,ce=He.get(x),Ve=g.state.lights;if(re===!0&&(ue===!0||w!==U)){const nt=w===U&&x.id===T;fe.setState(x,w,nt)}let Ye=!1;x.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==Ve.state.version||ce.outputColorSpace!==K||B.isBatchedMesh&&ce.batching===!1||!B.isBatchedMesh&&ce.batching===!0||B.isBatchedMesh&&ce.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&ce.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&ce.instancing===!1||!B.isInstancedMesh&&ce.instancing===!0||B.isSkinnedMesh&&ce.skinning===!1||!B.isSkinnedMesh&&ce.skinning===!0||B.isInstancedMesh&&ce.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ce.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ce.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ce.instancingMorph===!1&&B.morphTexture!==null||ce.envMap!==ne||x.fog===!0&&ce.fog!==k||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==fe.numPlanes||ce.numIntersection!==fe.numIntersection)||ce.vertexAlphas!==$||ce.vertexTangents!==ee||ce.morphTargets!==j||ce.morphNormals!==he||ce.morphColors!==me||ce.toneMapping!==pe||ce.morphTargetsCount!==de)&&(Ye=!0):(Ye=!0,ce.__version=x.version);let pt=ce.currentProgram;Ye===!0&&(pt=si(x,f,B));let Ut=!1,ot=!1,ut=!1;const it=pt.getUniforms(),Pt=ce.uniforms;if(Be.useProgram(pt.program)&&(Ut=!0,ot=!0,ut=!0),x.id!==T&&(T=x.id,ot=!0),Ut||U!==w){$e.reverseDepthBuffer?(ge.copy(w.projectionMatrix),A_(ge),d_(ge),it.setValue(H,"projectionMatrix",ge)):it.setValue(H,"projectionMatrix",w.projectionMatrix),it.setValue(H,"viewMatrix",w.matrixWorldInverse);const nt=it.map.cameraPosition;nt!==void 0&&nt.setValue(H,We.setFromMatrixPosition(w.matrixWorld)),$e.logarithmicDepthBuffer&&it.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(x.isMeshPhongMaterial||x.isMeshToonMaterial||x.isMeshLambertMaterial||x.isMeshBasicMaterial||x.isMeshStandardMaterial||x.isShaderMaterial)&&it.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),U!==w&&(U=w,ot=!0,ut=!0)}if(B.isSkinnedMesh){it.setOptional(H,B,"bindMatrix"),it.setOptional(H,B,"bindMatrixInverse");const nt=B.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),it.setValue(H,"boneTexture",nt.boneTexture,L))}B.isBatchedMesh&&(it.setOptional(H,B,"batchingTexture"),it.setValue(H,"batchingTexture",B._matricesTexture,L),it.setOptional(H,B,"batchingIdTexture"),it.setValue(H,"batchingIdTexture",B._indirectTexture,L),it.setOptional(H,B,"batchingColorTexture"),B._colorsTexture!==null&&it.setValue(H,"batchingColorTexture",B._colorsTexture,L));const Lt=I.morphAttributes;if((Lt.position!==void 0||Lt.normal!==void 0||Lt.color!==void 0)&&Fe.update(B,I,pt),(ot||ce.receiveShadow!==B.receiveShadow)&&(ce.receiveShadow=B.receiveShadow,it.setValue(H,"receiveShadow",B.receiveShadow)),x.isMeshGouraudMaterial&&x.envMap!==null&&(Pt.envMap.value=ne,Pt.flipEnvMap.value=ne.isCubeTexture&&ne.isRenderTargetTexture===!1?-1:1),x.isMeshStandardMaterial&&x.envMap===null&&f.environment!==null&&(Pt.envMapIntensity.value=f.environmentIntensity),ot&&(it.setValue(H,"toneMappingExposure",y.toneMappingExposure),ce.needsLights&&cs(Pt,ut),k&&x.fog===!0&&Me.refreshFogUniforms(Pt,k),Me.refreshMaterialUniforms(Pt,x,oe,Y,g.state.transmissionRenderTarget[w.id]),Uo.upload(H,Ir(ce),Pt,L)),x.isShaderMaterial&&x.uniformsNeedUpdate===!0&&(Uo.upload(H,Ir(ce),Pt,L),x.uniformsNeedUpdate=!1),x.isSpriteMaterial&&it.setValue(H,"center",B.center),it.setValue(H,"modelViewMatrix",B.modelViewMatrix),it.setValue(H,"normalMatrix",B.normalMatrix),it.setValue(H,"modelMatrix",B.matrixWorld),x.isShaderMaterial||x.isRawShaderMaterial){const nt=x.uniformsGroups;for(let Ct=0,mn=nt.length;Ct<mn;Ct++){const zn=nt[Ct];V.update(zn,pt),V.bind(zn,pt)}}return pt}function cs(w,f){w.ambientLightColor.needsUpdate=f,w.lightProbe.needsUpdate=f,w.directionalLights.needsUpdate=f,w.directionalLightShadows.needsUpdate=f,w.pointLights.needsUpdate=f,w.pointLightShadows.needsUpdate=f,w.spotLights.needsUpdate=f,w.spotLightShadows.needsUpdate=f,w.rectAreaLights.needsUpdate=f,w.hemisphereLights.needsUpdate=f}function Tn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,f,I){He.get(w.texture).__webglTexture=f,He.get(w.depthTexture).__webglTexture=I;const x=He.get(w);x.__hasExternalTextures=!0,x.__autoAllocateDepthBuffer=I===void 0,x.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),x.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,f){const I=He.get(w);I.__webglFramebuffer=f,I.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(w,f=0,I=0){R=w,P=f,Q=I;let x=!0,B=null,k=!1,O=!1;if(w){const ne=He.get(w);if(ne.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(H.FRAMEBUFFER,null),x=!1;else if(ne.__webglFramebuffer===void 0)L.setupRenderTarget(w);else if(ne.__hasExternalTextures)L.rebindTextures(w,He.get(w.texture).__webglTexture,He.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const j=w.depthTexture;if(ne.__boundDepthTexture!==j){if(j!==null&&He.has(j)&&(w.width!==j.image.width||w.height!==j.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(w)}}const $=w.texture;($.isData3DTexture||$.isDataArrayTexture||$.isCompressedArrayTexture)&&(O=!0);const ee=He.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ee[f])?B=ee[f][I]:B=ee[f],k=!0):w.samples>0&&L.useMultisampledRTT(w)===!1?B=He.get(w).__webglMultisampledFramebuffer:Array.isArray(ee)?B=ee[I]:B=ee,_.copy(w.viewport),v.copy(w.scissor),F=w.scissorTest}else _.copy(Ie).multiplyScalar(oe).floor(),v.copy(Le).multiplyScalar(oe).floor(),F=ke;if(Be.bindFramebuffer(H.FRAMEBUFFER,B)&&x&&Be.drawBuffers(w,B),Be.viewport(_),Be.scissor(v),Be.setScissorTest(F),k){const ne=He.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+f,ne.__webglTexture,I)}else if(O){const ne=He.get(w.texture),$=f||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ne.__webglTexture,I||0,$)}T=-1},this.readRenderTargetPixels=function(w,f,I,x,B,k,O){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let K=He.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&O!==void 0&&(K=K[O]),K){Be.bindFramebuffer(H.FRAMEBUFFER,K);try{const ne=w.texture,$=ne.format,ee=ne.type;if(!$e.textureFormatReadable($)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}f>=0&&f<=w.width-x&&I>=0&&I<=w.height-B&&H.readPixels(f,I,x,B,Ke.convert($),Ke.convert(ee),k)}finally{const ne=R!==null?He.get(R).__webglFramebuffer:null;Be.bindFramebuffer(H.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(w,f,I,x,B,k,O){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let K=He.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&O!==void 0&&(K=K[O]),K){const ne=w.texture,$=ne.format,ee=ne.type;if(!$e.textureFormatReadable($))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(f>=0&&f<=w.width-x&&I>=0&&I<=w.height-B){Be.bindFramebuffer(H.FRAMEBUFFER,K);const j=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,j),H.bufferData(H.PIXEL_PACK_BUFFER,k.byteLength,H.STREAM_READ),H.readPixels(f,I,x,B,Ke.convert($),Ke.convert(ee),0);const he=R!==null?He.get(R).__webglFramebuffer:null;Be.bindFramebuffer(H.FRAMEBUFFER,he);const me=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await h_(H,me,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,j),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,k),H.deleteBuffer(j),H.deleteSync(me),k}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,f=null,I=0){w.isTexture!==!0&&(Po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),f=arguments[0]||null,w=arguments[1]);const x=Math.pow(2,-I),B=Math.floor(w.image.width*x),k=Math.floor(w.image.height*x),O=f!==null?f.x:0,K=f!==null?f.y:0;L.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,I,0,0,O,K,B,k),Be.unbindTexture()},this.copyTextureToTexture=function(w,f,I=null,x=null,B=0){w.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture function signature has changed."),x=arguments[0]||null,w=arguments[1],f=arguments[2],B=arguments[3]||0,I=null);let k,O,K,ne,$,ee;I!==null?(k=I.max.x-I.min.x,O=I.max.y-I.min.y,K=I.min.x,ne=I.min.y):(k=w.image.width,O=w.image.height,K=0,ne=0),x!==null?($=x.x,ee=x.y):($=0,ee=0);const j=Ke.convert(f.format),he=Ke.convert(f.type);L.setTexture2D(f,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,f.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,f.unpackAlignment);const me=H.getParameter(H.UNPACK_ROW_LENGTH),pe=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ue=H.getParameter(H.UNPACK_SKIP_PIXELS),de=H.getParameter(H.UNPACK_SKIP_ROWS),ce=H.getParameter(H.UNPACK_SKIP_IMAGES),Ve=w.isCompressedTexture?w.mipmaps[B]:w.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Ve.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ve.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,K),H.pixelStorei(H.UNPACK_SKIP_ROWS,ne),w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,B,$,ee,k,O,j,he,Ve.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,B,$,ee,Ve.width,Ve.height,j,Ve.data):H.texSubImage2D(H.TEXTURE_2D,B,$,ee,k,O,j,he,Ve),H.pixelStorei(H.UNPACK_ROW_LENGTH,me),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,pe),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ue),H.pixelStorei(H.UNPACK_SKIP_ROWS,de),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ce),B===0&&f.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(w,f,I=null,x=null,B=0){w.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),I=arguments[0]||null,x=arguments[1]||null,w=arguments[2],f=arguments[3],B=arguments[4]||0);let k,O,K,ne,$,ee,j,he,me;const pe=w.isCompressedTexture?w.mipmaps[B]:w.image;I!==null?(k=I.max.x-I.min.x,O=I.max.y-I.min.y,K=I.max.z-I.min.z,ne=I.min.x,$=I.min.y,ee=I.min.z):(k=pe.width,O=pe.height,K=pe.depth,ne=0,$=0,ee=0),x!==null?(j=x.x,he=x.y,me=x.z):(j=0,he=0,me=0);const Ue=Ke.convert(f.format),de=Ke.convert(f.type);let ce;if(f.isData3DTexture)L.setTexture3D(f,0),ce=H.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)L.setTexture2DArray(f,0),ce=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,f.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,f.unpackAlignment);const Ve=H.getParameter(H.UNPACK_ROW_LENGTH),Ye=H.getParameter(H.UNPACK_IMAGE_HEIGHT),pt=H.getParameter(H.UNPACK_SKIP_PIXELS),Ut=H.getParameter(H.UNPACK_SKIP_ROWS),ot=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,pe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,pe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ne),H.pixelStorei(H.UNPACK_SKIP_ROWS,$),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ee),w.isDataTexture||w.isData3DTexture?H.texSubImage3D(ce,B,j,he,me,k,O,K,Ue,de,pe.data):f.isCompressedArrayTexture?H.compressedTexSubImage3D(ce,B,j,he,me,k,O,K,Ue,pe.data):H.texSubImage3D(ce,B,j,he,me,k,O,K,Ue,de,pe),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ve),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ye),H.pixelStorei(H.UNPACK_SKIP_PIXELS,pt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ut),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ot),B===0&&f.generateMipmaps&&H.generateMipmap(ce),Be.unbindTexture()},this.initRenderTarget=function(w){He.get(w).__webglFramebuffer===void 0&&L.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?L.setTextureCube(w,0):w.isData3DTexture?L.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?L.setTexture2DArray(w,0):L.setTexture2D(w,0),Be.unbindTexture()},this.resetState=function(){P=0,Q=0,R=null,Be.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Vh?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===$o?"display-p3":"srgb"}}class yh extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Mx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ch,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new X;class Jh{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array),s=Bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Md=new X,wd=new yt,bd=new yt,wx=new X,Td=new rt,mo=new X,Va=new ei,Rd=new rt,Ya=new zs;class bx extends Ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=LA,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ci),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mo),this.boundingBox.expandByPoint(mo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mo),this.boundingSphere.expandByPoint(mo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(r),e.ray.intersectsSphere(Va)!==!1&&(Rd.copy(r).invert(),Ya.copy(e.ray).applyMatrix4(Rd),!(this.boundingBox!==null&&Ya.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ya)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===LA?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===NI?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;wd.fromBufferAttribute(r.attributes.skinIndex,e),bd.fromBufferAttribute(r.attributes.skinWeight,e),Md.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=bd.getComponent(s);if(o!==0){const a=wd.getComponent(s);Td.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(wx.copy(Md).applyMatrix4(Td),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class zm extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ia extends kt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=un,u=un,h,A){super(null,o,a,l,c,u,r,s,h,A),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dd=new rt,Tx=new rt;class Zh{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Tx;Dd.multiplyMatrices(a,t[s]),Dd.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Zh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ia(t,e,e,vn,jt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new zm),this.bones.push(o),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class xh extends zt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ur=new rt,Qd=new rt,Eo=[],Ld=new Ci,Rx=new rt,ps=new Ft,gs=new ei;class Dx extends Ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Rx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ur),Ld.copy(e.boundingBox).applyMatrix4(Ur),this.boundingBox.union(Ld)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ur),gs.copy(e.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(gs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(n),e.ray.intersectsSphere(gs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ur),Qd.multiplyMatrices(n,Ur),ps.matrixWorld=Qd,ps.raycast(e,Eo);for(let o=0,a=Eo.length;o<a;o++){const l=Eo[o];l.instanceId=s,l.object=this,t.push(l)}Eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ia(new Float32Array(r*this.count),r,this.count,Zo,jt));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Vm extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yo=new X,Wo=new X,Nd=new rt,ms=new zs,Io=new ei,Wa=new X,Pd=new X;class $h extends Nt{constructor(e=new Zt,t=new Vm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Yo.fromBufferAttribute(t,r-1),Wo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Yo.distanceTo(Wo);e.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;Nd.copy(r).invert(),ms.copy(e.ray).applyMatrix4(Nd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,A=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let E=d,g=m-1;E<g;E+=c){const p=u.getX(E),C=u.getX(E+1),y=_o(this,e,ms,l,p,C);y&&t.push(y)}if(this.isLineLoop){const E=u.getX(m-1),g=u.getX(d),p=_o(this,e,ms,l,E,g);p&&t.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(A.count,o.start+o.count);for(let E=d,g=m-1;E<g;E+=c){const p=_o(this,e,ms,l,E,E+1);p&&t.push(p)}if(this.isLineLoop){const E=_o(this,e,ms,l,m-1,d);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _o(i,e,t,n,r,s){const o=i.geometry.attributes.position;if(Yo.fromBufferAttribute(o,r),Wo.fromBufferAttribute(o,s),t.distanceSqToSegment(Yo,Wo,Wa,Pd)>n)return;Wa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Wa);if(!(l<e.near||l>e.far))return{distance:l,point:Pd.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Ud=new X,Fd=new X;class Qx extends $h{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Ud.fromBufferAttribute(t,r),Fd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ud.distanceTo(Fd);e.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lx extends $h{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ym extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Od=new rt,Sh=new zs,Co=new ei,vo=new X;class Nx extends Nt{constructor(e=new Zt,t=new Ym){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(r),Co.radius+=s,e.ray.intersectsSphere(Co)===!1)return;Od.copy(r).invert(),Sh.copy(e.ray).applyMatrix4(Od);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const A=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=A,E=d;m<E;m++){const g=c.getX(m);vo.fromBufferAttribute(h,g),Gd(vo,g,l,r,e,t,this)}}else{const A=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=A,E=d;m<E;m++)vo.fromBufferAttribute(h,m),Gd(vo,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gd(i,e,t,n,r,s,o){const a=Sh.distanceSqToPoint(i);if(a<t){const l=new X;Sh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class eA extends Zt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],A=[],d=[];let m=0;const E=[],g=n/2;let p=0;C(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(A,3)),this.setAttribute("uv",new Jt(d,2));function C(){const M=new X,P=new X;let Q=0;const R=(t-e)/n;for(let T=0;T<=s;T++){const U=[],_=T/s,v=_*(t-e)+e;for(let F=0;F<=r;F++){const G=F/r,z=G*l+a,Z=Math.sin(z),Y=Math.cos(z);P.x=v*Z,P.y=-_*n+g,P.z=v*Y,h.push(P.x,P.y,P.z),M.set(Z,R,Y).normalize(),A.push(M.x,M.y,M.z),d.push(G,1-_),U.push(m++)}E.push(U)}for(let T=0;T<r;T++)for(let U=0;U<s;U++){const _=E[U][T],v=E[U+1][T],F=E[U+1][T+1],G=E[U][T+1];e>0&&(u.push(_,v,G),Q+=3),t>0&&(u.push(v,F,G),Q+=3)}c.addGroup(p,Q,0),p+=Q}function y(M){const P=m,Q=new et,R=new X;let T=0;const U=M===!0?e:t,_=M===!0?1:-1;for(let F=1;F<=r;F++)h.push(0,g*_,0),A.push(0,_,0),d.push(.5,.5),m++;const v=m;for(let F=0;F<=r;F++){const z=F/r*l+a,Z=Math.cos(z),Y=Math.sin(z);R.x=U*Y,R.y=g*_,R.z=U*Z,h.push(R.x,R.y,R.z),A.push(0,_,0),Q.x=Z*.5+.5,Q.y=Y*.5*_+.5,d.push(Q.x,Q.y),m++}for(let F=0;F<r;F++){const G=P+F,z=v+F;M===!0?u.push(z,z+1,G):u.push(z+1,z,G),T+=3}c.addGroup(p,T,M===!0?1:2),p+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eA(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qo extends Zt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new X,A=new X,d=[],m=[],E=[],g=[];for(let p=0;p<=n;p++){const C=[],y=p/n;let M=0;p===0&&o===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const Q=P/t;h.x=-e*Math.cos(r+Q*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+Q*s)*Math.sin(o+y*a),m.push(h.x,h.y,h.z),A.copy(h).normalize(),E.push(A.x,A.y,A.z),g.push(Q+M,1-y),C.push(c++)}u.push(C)}for(let p=0;p<n;p++)for(let C=0;C<t;C++){const y=u[p][C+1],M=u[p][C],P=u[p+1][C],Q=u[p+1][C+1];(p!==0||o>0)&&d.push(y,M,Q),(p!==n-1||l<Math.PI)&&d.push(M,P,Q)}this.setIndex(d),this.setAttribute("position",new Jt(m,3)),this.setAttribute("normal",new Jt(E,3)),this.setAttribute("uv",new Jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ra extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bm,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ti extends ra{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function yo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Px(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ux(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Hd(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function Wm(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Vs{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Fx extends Vs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:NA,endingEnd:NA}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case PA:s=e,a=2*t-n;break;case UA:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case PA:o=e,l=2*n-t;break;case UA:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,A=this._weightPrev,d=this._weightNext,m=(n-t)/(r-t),E=m*m,g=E*m,p=-A*g+2*A*E-A*m,C=(1+A)*g+(-1.5-2*A)*E+(-.5+A)*m+1,y=(-1-d)*g+(1.5+d)*E+.5*m,M=d*g-d*E;for(let P=0;P!==a;++P)s[P]=p*o[u+P]+C*o[c+P]+y*o[l+P]+M*o[h+P];return s}}class Ox extends Vs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let A=0;A!==a;++A)s[A]=o[c+A]*h+o[l+A]*u;return s}}class Gx extends Vs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ni{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yo(t,this.TimeBufferType),this.values=yo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yo(e.times,Array),values:yo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ox(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case Us:t=this.InterpolantFactoryMethodLinear;break;case pa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return Us;case this.InterpolantFactoryMethodSmooth:return pa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Px(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===pa,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,A=h-n,d=h+n;for(let m=0;m!==n;++m){const E=t[h+m];if(E!==t[A+m]||E!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,A=o*n;for(let d=0;d!==n;++d)t[A+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Us;class rs extends ni{constructor(e,t,n){super(e,t,n)}}rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Ps;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class qm extends ni{}qm.prototype.ValueTypeName="color";class Zr extends ni{}Zr.prototype.ValueTypeName="number";class Hx extends Vs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)zi.slerpFlat(s,0,o,c-a,o,c,l);return s}}class $r extends ni{InterpolantFactoryMethodLinear(e){return new Hx(this.times,this.values,this.getValueSize(),e)}}$r.prototype.ValueTypeName="quaternion";$r.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends ni{constructor(e,t,n){super(e,t,n)}}ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Ps;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class es extends ni{}es.prototype.ValueTypeName="vector";class kx{constructor(e="",t=-1,n=[],r=PI){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Gn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Vx(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(ni.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Ux(l);l=Hd(l,1,u),c=Hd(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Zr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let A=r[h];A||(r[h]=A=[]),A.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,A,d,m,E){if(d.length!==0){const g=[],p=[];Wm(d,g,p,m),g.length!==0&&E.push(new h(A,g,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const A=c[h].keys;if(!(!A||A.length===0))if(A[0].morphTargets){const d={};let m;for(m=0;m<A.length;m++)if(A[m].morphTargets)for(let E=0;E<A[m].morphTargets.length;E++)d[A[m].morphTargets[E]]=-1;for(const E in d){const g=[],p=[];for(let C=0;C!==A[m].morphTargets.length;++C){const y=A[m];g.push(y.time),p.push(y.morphTarget===E?1:0)}r.push(new Zr(".morphTargetInfluence["+E+"]",g,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(es,d+".position",A,"pos",r),n($r,d+".quaternion",A,"rot",r),n(es,d+".scale",A,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zr;case"vector":case"vector2":case"vector3":case"vector4":return es;case"color":return qm;case"quaternion":return $r;case"bool":case"boolean":return rs;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Vx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zx(i.type);if(i.times===void 0){const t=[],n=[];Wm(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Oi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Yx{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,A=c.length;h<A;h+=2){const d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const Wx=new Yx;class ii{constructor(e){this.manager=e!==void 0?e:Wx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ii.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ai={};class qx extends Error{constructor(e,t){super(e),this.response=t}}class ts extends ii{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Oi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:n,onError:r});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ai[e],h=c.body.getReader(),A=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=A?parseInt(A):0,m=d!==0;let E=0;const g=new ReadableStream({start(p){C();function C(){h.read().then(({done:y,value:M})=>{if(y)p.close();else{E+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:m,loaded:E,total:d});for(let Q=0,R=u.length;Q<R;Q++){const T=u[Q];T.onProgress&&T.onProgress(P)}p.enqueue(M),C()}},y=>{p.error(y)})}}});return new Response(g)}else throw new qx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),A=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(A);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Oi.add(e,c);const u=Ai[e];delete Ai[e];for(let h=0,A=u.length;h<A;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ai[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ai[e];for(let h=0,A=u.length;h<A;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Xm extends ii{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Oi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Fs("img");function l(){u(),Oi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Xx extends ii{constructor(e){super(e)}load(e,t,n,r){const s=new ea;s.colorSpace=It;const o=new Xm(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class Km extends ii{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new ia,a=new ts(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Xn,o.wrapT=c.wrapT!==void 0?c.wrapT:Xn,o.magFilter=c.magFilter!==void 0?c.magFilter:wt,o.minFilter=c.minFilter!==void 0?c.minFilter:wt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Kn),c.mipmapCount===1&&(o.minFilter=wt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}}class tA extends ii{constructor(e){super(e)}load(e,t,n,r){const s=new kt,o=new Xm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class sa extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Kx extends sa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const qa=new rt,kd=new X,zd=new X;class nA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xh,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(kd),zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zd),t.updateMatrixWorld(),qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jx extends nA{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Kr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Jx extends sa{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new jx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Vd=new rt,Es=new X,Xa=new X;class Zx extends nA{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Es.setFromMatrixPosition(e.matrixWorld),n.position.copy(Es),Xa.copy(n.position),Xa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Xa),n.updateMatrixWorld(),r.makeTranslation(-Es.x,-Es.y,-Es.z),Vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd)}}class $x extends sa{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Zx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class eS extends nA{constructor(){super(new ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jm extends sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new eS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ds{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class tS extends ii{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Oi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Oi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Oi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Oi.add(e,l),s.manager.itemStart(e)}}const iA="\\[\\]\\.:\\/",nS=new RegExp("["+iA+"]","g"),rA="[^"+iA+"]",iS="[^"+iA.replace("\\.","")+"]",rS=/((?:WC+[\/:])*)/.source.replace("WC",rA),sS=/(WCOD+)?/.source.replace("WCOD",iS),oS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rA),aS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rA),cS=new RegExp("^"+rS+sS+oS+aS+"$"),lS=["material","materials","bones","map"];class uS{constructor(e,t,n){const r=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nS,"")}static parseTrackName(e){const t=cS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);lS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=uS;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ln{constructor(e){this.value=e}clone(){return new ln(this.value.clone===void 0?this.value:this.value.clone())}}const Yd=new rt;class hS{constructor(e,t,n=0,r=1/0){this.ray=new zs(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Wh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yd),this}intersectObject(e,t=!0,n=[]){return Bh(e,this,n,t),n.sort(Wd),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Bh(e[r],this,n,t);return n.sort(Wd),n}}function Wd(i,e){return i.distance-e.distance}function Bh(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Bh(s[o],e,t,!0)}}class qD{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class XD extends _i{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jo);/**
 * postprocessing v6.37.6 build Fri Jul 04 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var Ka=1/1e3,AS=1e3,dS=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(i){typeof document<"u"&&document.hidden!==void 0&&(i?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=i)}get delta(){return this._delta*Ka}get fixedDelta(){return this._fixedDelta*Ka}set fixedDelta(i){this._fixedDelta=i*AS}get elapsed(){return this._elapsed*Ka}update(i){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(i!==void 0?i:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(i){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},fS=(()=>{const i=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Zt;return t.setAttribute("position",new zt(i,3)),t.setAttribute("uv",new zt(e,2)),t})(),Vi=class Mh{static get fullscreenGeometry(){return fS}constructor(e="Pass",t=new yh,n=new qh){this.name=e,this.renderer=null,this.scene=t,this.camera=n,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Ft(Mh.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new yh),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=ks){}render(e,t,n,r,s){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,n){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Hn||t instanceof Mn||t instanceof kt||t instanceof Mh)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},pS=class extends Vi{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(i,e,t,n,r){const s=i.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},gS=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,mS="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",ES=class extends kn{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new ln(null),opacity:new ln(1)},blending:jn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:gS,vertexShader:mS})}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}getOpacity(i){return this.uniforms.opacity.value}setOpacity(i){this.uniforms.opacity.value=i}},IS=class extends Vi{constructor(i,e=!0){super("CopyPass"),this.fullscreenMaterial=new ES,this.needsSwap=!1,this.renderTarget=i,i===void 0&&(this.renderTarget=new Hn(1,1,{minFilter:wt,magFilter:wt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(i){this.autoResize=i}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(i){this.autoResize=i}render(i,e,t,n,r){this.fullscreenMaterial.inputBuffer=e.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){this.autoResize&&this.renderTarget.setSize(i,e)}initialize(i,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==on?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":i!==null&&i.outputColorSpace===It&&(this.renderTarget.texture.colorSpace=It))}},qd=new Ze,Jm=class extends Vi{constructor(i=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=i,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(i,e,t){this.color=i,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(i){this.overrideClearColor=i}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(i){this.overrideClearAlpha=i}render(i,e,t,n,r){const s=this.overrideClearColor,o=this.overrideClearAlpha,a=i.getClearAlpha(),l=s!==null,c=o>=0;l?(i.getClearColor(qd),i.setClearColor(s,c?o:a)):c&&i.setClearAlpha(o),i.setRenderTarget(this.renderToScreen?null:e),i.clear(this.color,this.depth,this.stencil),l?i.setClearColor(qd,a):c&&i.setClearAlpha(a)}},_S=class extends Vi{constructor(i,e){super("MaskPass",i,e),this.needsSwap=!1,this.clearPass=new Jm(!1,!1,!0),this.inverse=!1}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get inverted(){return this.inverse}set inverted(i){this.inverse=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(i){this.inverted=i}render(i,e,t,n,r){const s=i.getContext(),o=i.state.buffers,a=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,h=1-u;o.color.setMask(!1),o.depth.setMask(!1),o.color.setLocked(!0),o.depth.setLocked(!0),o.stencil.setTest(!0),o.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.stencil.setFunc(s.ALWAYS,u,4294967295),o.stencil.setClear(h),o.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(i,null):(c.render(i,e),c.render(i,t))),this.renderToScreen?(i.setRenderTarget(null),i.render(a,l)):(i.setRenderTarget(e),i.render(a,l),i.setRenderTarget(t),i.render(a,l)),o.color.setLocked(!1),o.depth.setLocked(!1),o.stencil.setLocked(!1),o.stencil.setFunc(s.EQUAL,1,4294967295),o.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.stencil.setLocked(!0)}},CS=class{constructor(i=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:n=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,r,n),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new IS,this.depthTexture=null,this.passes=[],this.timer=new dS,this.autoRenderToScreen=!0,this.setRenderer(i)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(i){const e=this.inputBuffer,t=this.multisampling;t>0&&i>0?(this.inputBuffer.samples=i,this.outputBuffer.samples=i,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==i&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,i),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(i){if(this.renderer=i,i!==null){const e=i.getSize(new et),t=i.getContext().getContextAttributes().alpha,n=this.inputBuffer.texture.type;n===on&&i.outputColorSpace===It&&(this.inputBuffer.texture.colorSpace=It,this.outputBuffer.texture.colorSpace=It,this.inputBuffer.dispose(),this.outputBuffer.dispose()),i.autoClear=!1,this.setSize(e.width,e.height);for(const r of this.passes)r.initialize(i,t,n)}}replaceRenderer(i,e=!0){const t=this.renderer,n=t.domElement.parentNode;return this.setRenderer(i),e&&n!==null&&(n.removeChild(t.domElement),n.appendChild(i.domElement)),t}createDepthTexture(){const i=this.depthTexture=new jh;return this.inputBuffer.depthTexture=i,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(i.format=lr,i.type=cr):i.type=Hi,i}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const i of this.passes)i.setDepthTexture(null)}}createBuffer(i,e,t,n){const r=this.renderer,s=r===null?new et:r.getDrawingBufferSize(new et),o={minFilter:wt,magFilter:wt,stencilBuffer:e,depthBuffer:i,type:t},a=new Hn(s.width,s.height,o);return n>0&&(a.ignoreDepthForMultisampleCopy=!1,a.samples=n),t===on&&r!==null&&r.outputColorSpace===It&&(a.texture.colorSpace=It),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(i){for(const e of this.passes)e.mainScene=i}setMainCamera(i){for(const e of this.passes)e.mainCamera=i}addPass(i,e){const t=this.passes,n=this.renderer,r=n.getDrawingBufferSize(new et),s=n.getContext().getContextAttributes().alpha,o=this.inputBuffer.texture.type;if(i.setRenderer(n),i.setSize(r.width,r.height),i.initialize(n,s,o),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),i.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,i):t.push(i),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),i.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const a=this.createDepthTexture();for(i of t)i.setDepthTexture(a)}else i.setDepthTexture(this.depthTexture)}removePass(i){const e=this.passes,t=e.indexOf(i);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const s=(a,l)=>a||l.needsDepthTexture;e.reduce(s,!1)||(i.getDepthTexture()===this.depthTexture&&i.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(i.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const i=this.passes;this.deleteDepthTexture(),i.length>0&&(this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!1),this.passes=[])}render(i){const e=this.renderer,t=this.copyPass;let n=this.inputBuffer,r=this.outputBuffer,s=!1,o,a,l;i===void 0&&(this.timer.update(),i=this.timer.getDelta());for(const c of this.passes)c.enabled&&(c.render(e,n,r,i,s),c.needsSwap&&(s&&(t.renderToScreen=c.renderToScreen,o=e.getContext(),a=e.state.buffers.stencil,a.setFunc(o.NOTEQUAL,1,4294967295),t.render(e,n,r,i,s),a.setFunc(o.EQUAL,1,4294967295)),l=n,n=r,r=l),c instanceof _S?s=!0:c instanceof pS&&(s=!1))}setSize(i,e,t){const n=this.renderer,r=n.getSize(new et);(i===void 0||e===void 0)&&(i=r.width,e=r.height),(r.width!==i||r.height!==e)&&n.setSize(i,e,t);const s=n.getDrawingBufferSize(new et);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height);for(const o of this.passes)o.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const i of this.passes)i.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Vi.fullscreenGeometry.dispose()}},ar={NONE:0,DEPTH:1,CONVOLUTION:2},vt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},vS=class{constructor(){this.shaderParts=new Map([[vt.FRAGMENT_HEAD,null],[vt.FRAGMENT_MAIN_UV,null],[vt.FRAGMENT_MAIN_IMAGE,null],[vt.VERTEX_HEAD,null],[vt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=ar.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Qt}},ja=!1,Xd=class{constructor(i=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(i),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case fn:t=this.materialsFlatShadedDoubleSide;break;case Kt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case fn:t=this.materialsDoubleSide;break;case Kt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(i){if(!(i instanceof kn))return i.clone();const e=i.uniforms,t=new Map;for(const r in e){const s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,t.set(r,s))}const n=i.clone();for(const r of t)e[r[0]].value=r[1],n.uniforms[r[0]].value=r[1];return n}setMaterial(i){if(this.disposeMaterials(),this.material=i,i!==null){const e=this.materials=[this.cloneMaterial(i),this.cloneMaterial(i),this.cloneMaterial(i)];for(const t of e)t.uniforms=Object.assign({},i.uniforms),t.side=Zn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=Kt,n}),this.materialsDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=fn,n}),this.materialsFlatShaded=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n}),this.materialsFlatShadedBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=Kt,n}),this.materialsFlatShadedDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=fn,n})}}render(i,e,t){const n=i.shadowMap.enabled;if(i.shadowMap.enabled=!1,ja){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),i.render(e,t);for(const s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,i.render(e,t),e.overrideMaterial=r}i.shadowMap.enabled=n}disposeMaterials(){if(this.material!==null){const i=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of i)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return ja}static set workaroundEnabled(i){ja=i}},Et={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},yS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),opacity);}",xS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",SS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),opacity);}",BS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",MS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),opacity);}",wS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),opacity);}",bS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),opacity);}",TS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),opacity);}",RS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),opacity);}",DS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),opacity);}",QS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),opacity);}",LS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),opacity);}",NS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),opacity);}",PS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),opacity);}",US="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),opacity);}",FS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),opacity);}",OS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",GS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),opacity);}",HS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",kS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),opacity);}",zS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),opacity);}",VS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),opacity);}",YS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",WS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),opacity);}",qS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),opacity);}",XS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),opacity);}",KS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",jS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),opacity);}",JS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),opacity);}",ZS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",$S="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),opacity);}",eB="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),opacity);}",tB=new Map([[Et.ADD,yS],[Et.ALPHA,xS],[Et.AVERAGE,SS],[Et.COLOR,BS],[Et.COLOR_BURN,MS],[Et.COLOR_DODGE,wS],[Et.DARKEN,bS],[Et.DIFFERENCE,TS],[Et.DIVIDE,RS],[Et.DST,null],[Et.EXCLUSION,DS],[Et.HARD_LIGHT,QS],[Et.HARD_MIX,LS],[Et.HUE,NS],[Et.INVERT,PS],[Et.INVERT_RGB,US],[Et.LIGHTEN,FS],[Et.LINEAR_BURN,OS],[Et.LINEAR_DODGE,GS],[Et.LINEAR_LIGHT,HS],[Et.LUMINOSITY,kS],[Et.MULTIPLY,zS],[Et.NEGATION,VS],[Et.NORMAL,YS],[Et.OVERLAY,WS],[Et.PIN_LIGHT,qS],[Et.REFLECT,XS],[Et.SATURATION,KS],[Et.SCREEN,jS],[Et.SOFT_LIGHT,JS],[Et.SRC,ZS],[Et.SUBTRACT,$S],[Et.VIVID_LIGHT,eB]]),nB=class extends _i{constructor(i,e=1){super(),this._blendFunction=i,this.opacity=new ln(e)}getOpacity(){return this.opacity.value}setOpacity(i){this.opacity.value=i}get blendFunction(){return this._blendFunction}set blendFunction(i){this._blendFunction=i,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(i){this.blendFunction=i}getShaderCode(){return tB.get(this.blendFunction)}},iB=class extends _i{constructor(i,e,{attributes:t=ar.NONE,blendFunction:n=Et.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:o=null,vertexShader:a=null}={}){super(),this.name=i,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=a,this.defines=r,this.uniforms=s,this.extensions=o,this.blendMode=new nB(n),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=Qt,this._outputColorSpace=Un}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(i){this._inputColorSpace=i,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(i){this._outputColorSpace=i,this.setChanged()}set mainScene(i){}set mainCamera(i){}getName(){return this.name}setRenderer(i){this.renderer=i}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(i){this.attributes=i,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(i){this.fragmentShader=i,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(i){this.vertexShader=i,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(i,e=ks){}update(i,e,t){}setSize(i,e){}initialize(i,e,t){}dispose(){for(const i of Object.keys(this)){const e=this[i];(e instanceof Hn||e instanceof Mn||e instanceof kt||e instanceof Vi)&&this[i].dispose()}}},rB=class extends Vi{constructor(i,e,t=null){super("RenderPass",i,e),this.needsSwap=!1,this.clearPass=new Jm,this.overrideMaterialManager=t===null?null:new Xd(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get renderToScreen(){return super.renderToScreen}set renderToScreen(i){super.renderToScreen=i,this.clearPass.renderToScreen=i}get overrideMaterial(){const i=this.overrideMaterialManager;return i!==null?i.material:null}set overrideMaterial(i){const e=this.overrideMaterialManager;i!==null?e!==null?e.setMaterial(i):this.overrideMaterialManager=new Xd(i):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(i){this.overrideMaterial=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getSelection(){return this.selection}setSelection(i){this.selection=i}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(i){this.ignoreBackground=i}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(i){this.skipShadowMapUpdate=i}getClearPass(){return this.clearPass}render(i,e,t,n,r){const s=this.scene,o=this.camera,a=this.selection,l=o.layers.mask,c=s.background,u=i.shadowMap.autoUpdate,h=this.renderToScreen?null:e;a!==null&&o.layers.set(a.getLayer()),this.skipShadowMapUpdate&&(i.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(i,e),i.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(i,s,o):i.render(s,o),o.layers.mask=l,s.background=c,i.shadowMap.autoUpdate=u}},Is={DEFAULT:0,ESKIL:1},sB=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,oB=class extends iB{constructor({blendFunction:i,eskil:e=!1,technique:t=e?Is.ESKIL:Is.DEFAULT,offset:n=.5,darkness:r=.5}={}){super("VignetteEffect",sB,{blendFunction:i,defines:new Map([["VIGNETTE_TECHNIQUE",t.toFixed(0)]]),uniforms:new Map([["offset",new ln(n)],["darkness",new ln(r)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(i){this.technique!==i&&(this.defines.set("VIGNETTE_TECHNIQUE",i.toFixed(0)),this.setChanged())}get eskil(){return this.technique===Is.ESKIL}set eskil(i){this.technique=i?Is.ESKIL:Is.DEFAULT}getTechnique(){return this.technique}setTechnique(i){this.technique=i}get offset(){return this.uniforms.get("offset").value}set offset(i){this.uniforms.get("offset").value=i}getOffset(){return this.offset}setOffset(i){this.offset=i}get darkness(){return this.uniforms.get("darkness").value}set darkness(i){this.uniforms.get("darkness").value=i}getDarkness(){return this.darkness}setDarkness(i){this.darkness=i}},aB=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,cB="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",lB=class extends kn{constructor(i,e,t,n,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:jo.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new ln(null),depthBuffer:new ln(null),resolution:new ln(new et),texelSize:new ln(new et),cameraNear:new ln(.3),cameraFar:new ln(1e3),aspect:new ln(1),time:new ln(0)},blending:jn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),i&&this.setShaderParts(i),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(n)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){this.uniforms.depthBuffer.value=i}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer(i,e=ks){this.depthBuffer=i,this.depthPacking=e}setShaderData(i){this.setShaderParts(i.shaderParts),this.setDefines(i.defines),this.setUniforms(i.uniforms),this.setExtensions(i.extensions)}setShaderParts(i){return this.fragmentShader=aB.replace(vt.FRAGMENT_HEAD,i.get(vt.FRAGMENT_HEAD)||"").replace(vt.FRAGMENT_MAIN_UV,i.get(vt.FRAGMENT_MAIN_UV)||"").replace(vt.FRAGMENT_MAIN_IMAGE,i.get(vt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=cB.replace(vt.VERTEX_HEAD,i.get(vt.VERTEX_HEAD)||"").replace(vt.VERTEX_MAIN_SUPPORT,i.get(vt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(i){for(const e of i.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(i){for(const e of i.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(i){this.extensions={};for(const e of i)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(i){this.encodeOutput!==i&&(i?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(i){return this.encodeOutput}setOutputEncodingEnabled(i){this.encodeOutput=i}get time(){return this.uniforms.time.value}set time(i){this.uniforms.time.value=i}setDeltaTime(i){this.uniforms.time.value+=i}adoptCameraSettings(i){this.copyCameraSettings(i)}copyCameraSettings(i){i&&(this.uniforms.cameraNear.value=i.near,this.uniforms.cameraFar.value=i.far,i instanceof nn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(i,e){const t=this.uniforms;t.resolution.value.set(i,e),t.texelSize.value.set(1/i,1/e),t.aspect.value=i/e}static get Section(){return vt}};function Kd(i,e,t){for(const n of e){const r="$1"+i+n.charAt(0).toUpperCase()+n.slice(1),s=new RegExp("([^\\.])(\\b"+n+"\\b)","g");for(const o of t.entries())o[1]!==null&&t.set(o[0],o[1].replace(s,r))}}function uB(i,e,t){let n=e.getFragmentShader(),r=e.getVertexShader();const s=n!==void 0&&/mainImage/.test(n),o=n!==void 0&&/mainUv/.test(n);if(t.attributes|=e.getAttributes(),n===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(o&&(t.attributes&ar.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!o)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const a=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts;let c=l.get(vt.FRAGMENT_HEAD)||"",u=l.get(vt.FRAGMENT_MAIN_UV)||"",h=l.get(vt.FRAGMENT_MAIN_IMAGE)||"",A=l.get(vt.VERTEX_HEAD)||"",d=l.get(vt.VERTEX_MAIN_SUPPORT)||"";const m=new Set,E=new Set;if(o&&(u+=`	${i}MainUv(UV);
`,t.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const C=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);d+=`	${i}MainSupport(`,d+=C?`vUv);
`:`);
`;for(const y of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const M of y[1].split(/\s*,\s*/))t.varyings.add(M),m.add(M),E.add(M);for(const y of r.matchAll(a))E.add(y[1])}for(const C of n.matchAll(a))E.add(C[1]);for(const C of e.defines.keys())E.add(C.replace(/\([\w\s,]*\)/g,""));for(const C of e.uniforms.keys())E.add(C);E.delete("while"),E.delete("for"),E.delete("if"),e.uniforms.forEach((C,y)=>t.uniforms.set(i+y.charAt(0).toUpperCase()+y.slice(1),C)),e.defines.forEach((C,y)=>t.defines.set(i+y.charAt(0).toUpperCase()+y.slice(1),C));const g=new Map([["fragment",n],["vertex",r]]);Kd(i,E,t.defines),Kd(i,E,g),n=g.get("fragment"),r=g.get("vertex");const p=e.blendMode;if(t.blendModes.set(p.blendFunction,p),s){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(h+=e.inputColorSpace===It?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Un?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const C=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;h+=`${i}MainImage(color0, UV, `,(t.attributes&ar.DEPTH)!==0&&C.test(n)&&(h+="depth, ",t.readDepth=!0),h+=`color1);
	`;const y=i+"BlendOpacity";t.uniforms.set(y,p.opacity),h+=`color0 = blend${p.blendFunction}(color0, color1, ${y});

	`,c+=`uniform float ${y};

`}if(c+=n+`
`,r!==null&&(A+=r+`
`),l.set(vt.FRAGMENT_HEAD,c),l.set(vt.FRAGMENT_MAIN_UV,u),l.set(vt.FRAGMENT_MAIN_IMAGE,h),l.set(vt.VERTEX_HEAD,A),l.set(vt.VERTEX_MAIN_SUPPORT,d),e.extensions!==null)for(const C of e.extensions)t.extensions.add(C)}}var hB=class extends Vi{constructor(i,...e){super("EffectPass"),this.fullscreenMaterial=new lB(null,null,null,i),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(i){for(const e of this.effects)e.mainScene=i}set mainCamera(i){this.fullscreenMaterial.copyCameraSettings(i);for(const e of this.effects)e.mainCamera=i}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(i){this.fullscreenMaterial.encodeOutput=i}get dithering(){return this.fullscreenMaterial.dithering}set dithering(i){const e=this.fullscreenMaterial;e.dithering=i,e.needsUpdate=!0}setEffects(i){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=i.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const i=new vS;let e=0;for(const o of this.effects)if(o.blendMode.blendFunction===Et.DST)i.attributes|=o.getAttributes()&ar.DEPTH;else{if((i.attributes&o.getAttributes()&ar.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${o.name})`);uB("e"+e++,o,i)}let t=i.shaderParts.get(vt.FRAGMENT_HEAD),n=i.shaderParts.get(vt.FRAGMENT_MAIN_IMAGE),r=i.shaderParts.get(vt.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const o of i.blendModes.values())t+=o.getShaderCode().replace(s,`blend${o.blendFunction}`)+`
`;(i.attributes&ar.DEPTH)!==0?(i.readDepth&&(n=`float depth = readDepth(UV);

	`+n),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,i.colorSpace===It&&(n+=`color0 = sRGBToLinear(color0);
	`),i.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,i.defines.set("UV","transformedUv")):i.defines.set("UV","vUv"),i.shaderParts.set(vt.FRAGMENT_HEAD,t),i.shaderParts.set(vt.FRAGMENT_MAIN_IMAGE,n),i.shaderParts.set(vt.FRAGMENT_MAIN_UV,r);for(const[o,a]of i.shaderParts)a!==null&&i.shaderParts.set(o,a.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(i)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(i,e=ks){this.fullscreenMaterial.depthBuffer=i,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(i,e)}render(i,e,t,n,r){for(const s of this.effects)s.update(i,e,n);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=n*this.timeScale,i.setRenderTarget(this.renderToScreen?null:t),i.render(this.scene,this.camera)}}setSize(i,e){this.fullscreenMaterial.setSize(i,e);for(const t of this.effects)t.setSize(i,e)}initialize(i,e,t){this.renderer=i;for(const n of this.effects)n.initialize(i,e,t);this.updateMaterial(),t!==void 0&&t!==on&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const i of this.effects)i.removeEventListener("change",this.listener),i.dispose()}handleEvent(i){switch(i.type){case"change":this.recompile();break}}};const AB="modulepreload",dB=function(i){return"/"+i},jd={},fB=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=l(t.map(c=>{if(c=dB(c),c in jd)return;jd[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const A=document.createElement("link");if(A.rel=u?"stylesheet":AB,u||(A.as="script"),A.crossOrigin="",A.href=c,a&&A.setAttribute("nonce",a),document.head.appendChild(A),u)return new Promise((d,m)=>{A.addEventListener("load",d),A.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};class xo{constructor(e,t,n,r=!0){let s=1/0,o=0;const a=Math.round,l=a(window.devicePixelRatio||1),c=80*l,u=48*l,h=3*l,A=2*l,d=3*l,m=15*l,E=74*l,g=30*l,p=document.createElement("canvas");p.width=c,p.height=u,p.style.cssText="width:80px;height:48px",this.dom=p;const C=p.getContext("2d");C.font=`bold ${9*l}px Helvetica,Arial,sans-serif`,C.textBaseline="top",C.fillStyle=n,C.fillRect(0,0,c,u),C.fillStyle=t,C.fillText(e,h,A),C.fillRect(d,m,E,g),C.fillStyle=n,C.globalAlpha=.9,C.fillRect(d,m,E,g),this.update=(y,M)=>{s=Math.min(s,y),o=Math.max(o,y),C.fillStyle=n,C.globalAlpha=1,C.fillRect(0,0,c,m),C.fillStyle=t;const P=Math.max(2,String(a(y)).length);C.textAlign="right",C.fillText(`${a(y)}`,h+P*5*l,A),C.textAlign="left";const Q=`(${a(s)}-${a(o)})`;C.fillText(`${e} ${r?Q:""}`,h+(P*5+2)*l,A),C.drawImage(p,d+l,m,E-l,g,d,m,E-l,g),C.fillRect(d+E-l,m,l,g),C.fillStyle=n,C.globalAlpha=.9,C.fillRect(d+E-l,m,l,a((1-y/M)*g))}}}class pB{constructor({showMinMax:e=!0,context:t}={}){this.mode=0,this.beginTime=performance.now(),this.prevTime=this.beginTime,this.frames=0,this.REVISION=16;const n=document.createElement("div");n.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",n.addEventListener("click",r=>{r.preventDefault(),this.showPanel(++this.mode%n.children.length)}),this.dom=n,this.fpsPanel=this.addPanel(new xo("FPS","#0ff","#002",e)),this.msPanel=this.addPanel(new xo("MS","#0f0","#020",e)),performance&&performance.memory&&(this.memPanel=this.addPanel(new xo("MB","#f08","#201",e))),this.queryExtension=t&&t.getExtension("EXT_disjoint_timer_query_webgl2"),this.queryExtension&&(this.gpuPanel=this.addPanel(new xo("MS GPU","#f90","#210",e)),this.context=t),this.showPanel(0)}addPanel(e){return this.dom.appendChild(e.dom),e}showPanel(e){for(var t=0;t<this.dom.children.length;t++)this.dom.children[t].style.display=t===e?"block":"none";this.mode=e}begin(){if(this.beginTime=performance.now(),this.gpuPanel){this.queryCreated=!1;let e=!1;if(this.query&&(e=this.context.getQueryParameter(this.query,this.context.QUERY_RESULT_AVAILABLE),e)){const n=this.context.getQueryParameter(this.query,this.context.QUERY_RESULT),r=Math.min(n/1e3/1e3,30);this.gpuPanel.update(r,30)}(e||!this.query)&&(this.queryCreated=!0,this.query=this.context.createQuery(),this.context.beginQuery(this.queryExtension.TIME_ELAPSED_EXT,this.query))}}end(){this.frames++;const e=performance.now();if(this.msPanel.update(e-this.beginTime,200),e>=this.prevTime+1e3&&(this.fpsPanel.update(this.frames*1e3/(e-this.prevTime),100),this.prevTime=e,this.frames=0,this.memPanel)){const t=performance.memory;this.memPanel.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return this.queryCreated&&this.context.endQuery(this.queryExtension.TIME_ELAPSED_EXT),e}update(){this.beginTime=this.end()}}function Ja(i,e,t,n){return new(t||(t=Promise))(function(r,s){function o(c){try{l(n.next(c))}catch(u){s(u)}}function a(c){try{l(n.throw(c))}catch(u){s(u)}}function l(c){var u;c.done?r(c.value):(u=c.value,u instanceof t?u:new t(function(h){h(u)})).then(o,a)}l((n=n.apply(i,[])).next())})}const gB=["geforce 320m","geforce 8600","geforce 8600m gt","geforce 8800 gs","geforce 8800 gt","geforce 9400","geforce 9400m g","geforce 9400m","geforce 9600m gt","geforce 9600m","geforce fx go5200","geforce gt 120","geforce gt 130","geforce gt 330m","geforce gtx 285","google swiftshader","intel g41","intel g45","intel gma 4500mhd","intel gma x3100","intel hd 3000","intel q45","legacy","mali-2","mali-3","mali-4","quadro fx 1500","quadro fx 4","quadro fx 5","radeon hd 2400","radeon hd 2600","radeon hd 4670","radeon hd 4850","radeon hd 4870","radeon hd 5670","radeon hd 5750","radeon hd 6290","radeon hd 6300","radeon hd 6310","radeon hd 6320","radeon hd 6490m","radeon hd 6630m","radeon hd 6750m","radeon hd 6770m","radeon hd 6970m","sgx 543","sgx543"];function Jd(i){return i=i.toLowerCase().replace(/.*angle ?\((.+)\)(?: on vulkan [0-9.]+)?$/i,"$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g,"").replace(/(?:vulkan|opengl) \d+\.\d+(?:\.\d+)?(?: \((.*)\))?/,"$1")}const Zm=typeof window>"u",Wn=(()=>{if(Zm)return;const{userAgent:i,platform:e,maxTouchPoints:t}=window.navigator,n=/(iphone|ipod|ipad)/i.test(i),r=e==="iPad"||e==="MacIntel"&&t>0&&!window.MSStream;return{isIpad:r,isMobile:/android/i.test(i)||n||r,isSafari12:/Version\/12.+Safari/.test(i),isFirefox:/Firefox/.test(i)}})();function mB(i,e,t){if(!t)return[e];const n=function(c){const u=`
    precision highp float;
    attribute vec3 aPosition;
    varying float vvv;
    void main() {
      vvv = 0.31622776601683794;
      gl_Position = vec4(aPosition, 1.0);
    }
  `,h=`
    precision highp float;
    varying float vvv;
    void main() {
      vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;
      enc = fract(enc);
      enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);
      gl_FragColor = enc;
    }
  `,A=c.createShader(35633),d=c.createShader(35632),m=c.createProgram();if(!(d&&A&&m))return;c.shaderSource(A,u),c.shaderSource(d,h),c.compileShader(A),c.compileShader(d),c.attachShader(m,A),c.attachShader(m,d),c.linkProgram(m),c.detachShader(m,A),c.detachShader(m,d),c.deleteShader(A),c.deleteShader(d),c.useProgram(m);const E=c.createBuffer();c.bindBuffer(34962,E),c.bufferData(34962,new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),35044);const g=c.getAttribLocation(m,"aPosition");c.vertexAttribPointer(g,3,5126,!1,0,0),c.enableVertexAttribArray(g),c.clearColor(1,1,1,1),c.clear(16384),c.viewport(0,0,1,1),c.drawArrays(4,0,3);const p=new Uint8Array(4);return c.readPixels(0,0,1,1,6408,5121,p),c.deleteProgram(m),c.deleteBuffer(E),p.join("")}(i),r="801621810",s="8016218135",o="80162181161",a=Wn?.isIpad?[["a7",o,12],["a8",s,15],["a8x",s,15],["a9",s,15],["a9x",s,15],["a10",s,15],["a10x",s,15],["a12",r,15],["a12x",r,15],["a12z",r,15],["a14",r,15],["a15",r,15],["m1",r,15],["m2",r,15]]:[["a7",o,12],["a8",s,12],["a9",s,15],["a10",s,15],["a11",r,15],["a12",r,15],["a13",r,15],["a14",r,15],["a15",r,15],["a16",r,15],["a17",r,15]];let l;return n==="80162181255"?l=a.filter(([,,c])=>c>=14):(l=a.filter(([,c])=>c===n),l.length||(l=a)),l.map(([c])=>`apple ${c} gpu`)}let Zd=class extends Error{constructor(e){super(e),Object.setPrototypeOf(this,new.target.prototype)}};const Za=[],$d=[];function EB(i,e){if(i===e)return 0;const t=i;i.length>e.length&&(i=e,e=t);let n=i.length,r=e.length;for(;n>0&&i.charCodeAt(~-n)===e.charCodeAt(~-r);)n--,r--;let s,o=0;for(;o<n&&i.charCodeAt(o)===e.charCodeAt(o);)o++;if(n-=o,r-=o,n===0)return r;let a,l,c=0,u=0,h=0;for(;u<n;)$d[u]=i.charCodeAt(o+u),Za[u]=++u;for(;h<r;)for(s=e.charCodeAt(o+h),a=h++,c=h,u=0;u<n;u++)l=s===$d[u]?a:a+1,a=Za[u],c=Za[u]=a>c?l>c?c+1:l:l>a?a+1:l;return c}function IB(i){return i!=null}const _B=({mobileTiers:i=[0,15,30,60],desktopTiers:e=[0,15,30,60],override:t={},glContext:n,failIfMajorPerformanceCaveat:r=!1,benchmarksURL:s="https://unpkg.com/detect-gpu@5.0.70/dist/benchmarks"}={})=>Ja(void 0,void 0,void 0,function*(){const o={};if(Zm)return{tier:0,type:"SSR"};const{isIpad:a=!!Wn?.isIpad,isMobile:l=!!Wn?.isMobile,screenSize:c=window.screen,loadBenchmarks:u=P=>Ja(void 0,void 0,void 0,function*(){const Q=yield fetch(`${s}/${P}`).then(R=>R.json());if(parseInt(Q.shift().split(".")[0],10)<4)throw new Zd("Detect GPU benchmark data is out of date. Please update to version 4x");return Q})}=t;let{renderer:h}=t;const A=(P,Q,R,T,U)=>({device:U,fps:T,gpu:R,isMobile:l,tier:P,type:Q});let d,m="";if(h)h=Jd(h),d=[h];else{const P=n||function(R,T=!1){const U={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:T,powerPreference:"high-performance",stencil:!1};R&&delete U.powerPreference;const _=window.document.createElement("canvas"),v=_.getContext("webgl",U)||_.getContext("experimental-webgl",U);return v??void 0}(Wn?.isSafari12,r);if(!P)return A(0,"WEBGL_UNSUPPORTED");const Q=Wn?.isFirefox?null:P.getExtension("WEBGL_debug_renderer_info");if(h=Q?P.getParameter(Q.UNMASKED_RENDERER_WEBGL):P.getParameter(P.RENDERER),!h)return A(1,"FALLBACK");m=h,h=Jd(h),d=function(R,T,U){return T==="apple gpu"?mB(R,T,U):[T]}(P,h,l)}const E=(yield Promise.all(d.map(function(P){var Q;return Ja(this,void 0,void 0,function*(){const R=(be=>{const re=l?["adreno","apple","mali-t","mali","nvidia","powervr","samsung"]:["intel","apple","amd","radeon","nvidia","geforce","adreno"];for(const ue of re)if(be.includes(ue))return ue})(P);if(!R)return;const T=`${l?"m":"d"}-${R}${a?"-ipad":""}.json`,U=o[T]=(Q=o[T])!==null&&Q!==void 0?Q:u(T);let _;try{_=yield U}catch(be){if(be instanceof Zd)throw be;return}const v=function(be){var re;const ue=(be=be.replace(/\([^)]+\)/,"")).match(/\d+/)||be.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g);return(re=ue?.join("").replace(/\W|amd/g,""))!==null&&re!==void 0?re:""}(P);let F=_.filter(([,be])=>be===v);F.length||(F=_.filter(([be])=>be.includes(P)));const G=F.length;if(G===0)return;const z=P.split(/[.,()\[\]/\s]/g).sort().filter((be,re,ue)=>re===0||be!==ue[re-1]).join(" ");let Z,[Y,,,,oe]=G>1?F.map(be=>[be,EB(z,be[2])]).sort(([,be],[,re])=>be-re)[0][0]:F[0],te=Number.MAX_VALUE;const{devicePixelRatio:Ce}=window,Ie=c.width*Ce*c.height*Ce;for(const be of oe){const[re,ue]=be,ge=re*ue,Se=Math.abs(Ie-ge);Se<te&&(te=Se,Z=be)}if(!Z)return;const[,,Le,ke]=Z;return[te,Le,Y,ke]})}))).filter(IB).sort(([P=Number.MAX_VALUE,Q],[R=Number.MAX_VALUE,T])=>P===R?Q-T:P-R);if(!E.length){const P=gB.find(Q=>h.includes(Q));return P?A(0,"BLOCKLISTED",P):A(1,"FALLBACK",`${h} (${m})`)}const[,g,p,C]=E[0];if(g===-1)return A(0,"BLOCKLISTED",p,g,C);const y=l?i:e;let M=0;for(let P=0;P<y.length;P++)g>=y[P]&&(M=P);return A(M,"BENCHMARK",p,g,C)});class mi{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new D);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new D);const n=this.elements,r=e.x,s=e.y,o=e.z;return t.x=n[0]*r+n[1]*s+n[2]*o,t.y=n[3]*r+n[4]*s+n[5]*o,t.z=n[6]*r+n[7]*s+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new mi);const n=this.elements,r=e.elements,s=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],h=n[5],A=n[6],d=n[7],m=n[8],E=r[0],g=r[1],p=r[2],C=r[3],y=r[4],M=r[5],P=r[6],Q=r[7],R=r[8];return s[0]=o*E+a*C+l*P,s[1]=o*g+a*y+l*Q,s[2]=o*p+a*M+l*R,s[3]=c*E+u*C+h*P,s[4]=c*g+u*y+h*Q,s[5]=c*p+u*M+h*R,s[6]=A*E+d*C+m*P,s[7]=A*g+d*y+m*Q,s[8]=A*p+d*M+m*R,t}scale(e,t){t===void 0&&(t=new mi);const n=this.elements,r=t.elements;for(let s=0;s!==3;s++)r[3*s+0]=e.x*n[3*s+0],r[3*s+1]=e.y*n[3*s+1],r[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new D);const n=3,r=4,s=[];let o,a;for(o=0;o<n*r;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+r*a]=this.elements[o+3*a];s[3]=e.x,s[7]=e.y,s[11]=e.z;let l=3;const c=l;let u;const h=4;let A;do{if(o=c-l,s[o+r*o]===0){for(a=o+1;a<c;a++)if(s[o+r*a]!==0){u=h;do A=h-u,s[A+r*o]+=s[A+r*a];while(--u);break}}if(s[o+r*o]!==0)for(a=o+1;a<c;a++){const d=s[o+r*a]/s[o+r*o];u=h;do A=h-u,s[A+r*a]=A<=o?0:s[A+r*a]-s[A+r*o]*d;while(--u)}}while(--l);if(t.z=s[2*r+3]/s[2*r+2],t.y=(s[1*r+3]-s[1*r+2]*t.z)/s[1*r+1],t.x=(s[0*r+3]-s[0*r+2]*t.z-s[0*r+1]*t.y)/s[0*r+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new mi);const t=3,n=6,r=CB;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)r[s+n*o]=this.elements[s+3*o];r[3]=1,r[9]=0,r[15]=0,r[4]=0,r[10]=1,r[16]=0,r[5]=0,r[11]=0,r[17]=1;let a=3;const l=a;let c;const u=n;let h;do{if(s=l-a,r[s+n*s]===0){for(o=s+1;o<l;o++)if(r[s+n*o]!==0){c=u;do h=u-c,r[h+n*s]+=r[h+n*o];while(--c);break}}if(r[s+n*s]!==0)for(o=s+1;o<l;o++){const A=r[s+n*o]/r[s+n*s];c=u;do h=u-c,r[h+n*o]=h<=s?0:r[h+n*o]-r[h+n*s]*A;while(--c)}}while(--a);s=2;do{o=s-1;do{const A=r[s+n*o]/r[s+n*s];c=n;do h=n-c,r[h+n*o]=r[h+n*o]-r[h+n*s]*A;while(--c)}while(o--)}while(--s);s=2;do{const A=1/r[s+n*s];c=n;do h=n-c,r[h+n*s]=r[h+n*s]*A;while(--c)}while(s--);s=2;do{o=2;do{if(h=r[t+o+n*s],isNaN(h)||h===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,h)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,r=e.z,s=e.w,o=t+t,a=n+n,l=r+r,c=t*o,u=t*a,h=t*l,A=n*a,d=n*l,m=r*l,E=s*o,g=s*a,p=s*l,C=this.elements;return C[0]=1-(A+m),C[1]=u-p,C[2]=h+g,C[3]=u+p,C[4]=1-(c+m),C[5]=d-E,C[6]=h-g,C[7]=d+E,C[8]=1-(c+A),this}transpose(e){e===void 0&&(e=new mi);const t=this.elements,n=e.elements;let r;return n[0]=t[0],n[4]=t[4],n[8]=t[8],r=t[1],n[1]=t[3],n[3]=r,r=t[2],n[2]=t[6],n[6]=r,r=t[5],n[5]=t[7],n[7]=r,e}}const CB=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class D{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new D);const n=e.x,r=e.y,s=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*s-l*r,t.y=l*n-o*s,t.z=o*r-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new D(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new D(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new mi([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,r=Math.sqrt(e*e+t*t+n*n);if(r>0){const s=1/r;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return r}unit(e){e===void 0&&(e=new D);const t=this.x,n=this.y,r=this.z;let s=Math.sqrt(t*t+n*n+r*r);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=r*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(o-n)*(o-n)+(a-r)*(a-r))}distanceSquared(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z;return(s-t)*(s-t)+(o-n)*(o-n)+(a-r)*(a-r)}scale(e,t){t===void 0&&(t=new D);const n=this.x,r=this.y,s=this.z;return t.x=e*n,t.y=e*r,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new D),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new D),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new D),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const r=vB,s=1/n;r.set(this.x*s,this.y*s,this.z*s);const o=yB;Math.abs(r.x)<.9?(o.set(1,0,0),r.cross(o,e)):(o.set(0,1,0),r.cross(o,e)),r.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const r=this.x,s=this.y,o=this.z;n.x=r+(e.x-r)*t,n.y=s+(e.y-s)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(ef),ef.almostEquals(e,t)}clone(){return new D(this.x,this.y,this.z)}}D.ZERO=new D(0,0,0);D.UNIT_X=new D(1,0,0);D.UNIT_Y=new D(0,1,0);D.UNIT_Z=new D(0,0,1);const vB=new D,yB=new D,ef=new D;class wn{constructor(e){e===void 0&&(e={}),this.lowerBound=new D,this.upperBound=new D,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,r){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(e[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,tf),c=tf),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),r&&(s.x-=r,s.y-=r,s.z-=r,o.x+=r,o.y+=r,o.z+=r),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new wn().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,r=e.lowerBound,s=e.upperBound,o=r.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,a=r.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,l=r.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,r=e.lowerBound,s=e.upperBound;return t.x<=r.x&&n.x>=s.x&&t.y<=r.y&&n.y>=s.y&&t.z<=r.z&&n.z>=s.z}getCorners(e,t,n,r,s,o,a,l){const c=this.lowerBound,u=this.upperBound;e.copy(c),t.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),r.set(c.x,u.y,u.z),s.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(e,t){const n=nf,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7];this.getCorners(r,s,o,a,l,c,u,h);for(let A=0;A!==8;A++){const d=n[A];e.pointToLocal(d,d)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=nf,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7];this.getCorners(r,s,o,a,l,c,u,h);for(let A=0;A!==8;A++){const d=n[A];e.pointToWorld(d,d)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,r=1/t.x,s=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*r,l=(this.upperBound.x-n.x)*r,c=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,h=(this.lowerBound.z-n.z)*o,A=(this.upperBound.z-n.z)*o,d=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(h,A)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(h,A));return!(m<0||d>m)}}const tf=new D,nf=[new D,new D,new D,new D,new D,new D,new D,new D];class rn{constructor(e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=1),this.x=e,this.y=t,this.z=n,this.w=r}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new D),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=xB,r=SB;e.tangents(n,r),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new rn);const n=this.x,r=this.y,s=this.z,o=this.w,a=e.x,l=e.y,c=e.z,u=e.w;return t.x=n*u+o*a+r*c-s*l,t.y=r*u+o*l+s*a-n*c,t.z=s*u+o*c+n*l-r*a,t.w=o*u-n*a-r*l-s*c,t}inverse(e){e===void 0&&(e=new rn);const t=this.x,n=this.y,r=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+n*n+r*r+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new rn),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new D);const n=e.x,r=e.y,s=e.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*s-l*r,h=c*r+l*n-o*s,A=c*s+o*r-a*n,d=-o*n-a*r-l*s;return t.x=u*c+d*-o+h*-l-A*-a,t.y=h*c+d*-a+A*-o-u*-l,t.z=A*c+d*-l+u*-a-h*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,r,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),r=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(o,c),r=-Math.PI/2,s=0),n===void 0){const h=o*o,A=a*a,d=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*A-2*d),r=Math.asin(2*u),s=Math.atan2(2*o*c-2*a*l,1-2*h-2*d)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=r,e.x=s}setFromEuler(e,t,n,r){r===void 0&&(r="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),u=Math.sin(n/2);return r==="XYZ"?(this.x=l*o*a+s*c*u,this.y=s*c*a-l*o*u,this.z=s*o*u+l*c*a,this.w=s*o*a-l*c*u):r==="YXZ"?(this.x=l*o*a+s*c*u,this.y=s*c*a-l*o*u,this.z=s*o*u-l*c*a,this.w=s*o*a+l*c*u):r==="ZXY"?(this.x=l*o*a-s*c*u,this.y=s*c*a+l*o*u,this.z=s*o*u+l*c*a,this.w=s*o*a-l*c*u):r==="ZYX"?(this.x=l*o*a-s*c*u,this.y=s*c*a+l*o*u,this.z=s*o*u-l*c*a,this.w=s*o*a+l*c*u):r==="YZX"?(this.x=l*o*a+s*c*u,this.y=s*c*a+l*o*u,this.z=s*o*u-l*c*a,this.w=s*o*a-l*c*u):r==="XZY"&&(this.x=l*o*a-s*c*u,this.y=s*c*a-l*o*u,this.z=s*o*u+l*c*a,this.w=s*o*a+l*c*u),this}clone(){return new rn(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new rn);const r=this.x,s=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,u=e.z,h=e.w,A,d,m,E,g;return d=r*l+s*c+o*u+a*h,d<0&&(d=-d,l=-l,c=-c,u=-u,h=-h),1-d>1e-6?(A=Math.acos(d),m=Math.sin(A),E=Math.sin((1-t)*A)/m,g=Math.sin(t*A)/m):(E=1-t,g=t),n.x=E*r+g*l,n.y=E*s+g*c,n.z=E*o+g*u,n.w=E*a+g*h,n}integrate(e,t,n,r){r===void 0&&(r=new rn);const s=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,u=this.z,h=this.w,A=t*.5;return r.x+=A*(s*h+o*u-a*c),r.y+=A*(o*h+a*l-s*u),r.z+=A*(a*h+s*c-o*l),r.w+=A*(-s*l-o*c-a*u),r}}const xB=new D,SB=new D,BB={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Oe{constructor(e){e===void 0&&(e={}),this.id=Oe.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Oe.idCounter=0;Oe.types=BB;class dn{constructor(e){e===void 0&&(e={}),this.position=new D,this.quaternion=new rn,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return dn.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return dn.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new D),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,r){return r===void 0&&(r=new D),n.vsub(e,r),t.conjugate(rf),rf.vmult(r,r),r}static pointToWorldFrame(e,t,n,r){return r===void 0&&(r=new D),t.vmult(n,r),r.vadd(e,r),r}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new D),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,r){return r===void 0&&(r=new D),t.w*=-1,t.vmult(n,r),t.w*=-1,r}}const rf=new rn;new D;new D;new D;new D;new D,new D,new D,new D,new D,new D,new D,new D;new D;new rn;new wn;new mi;new mi;new mi;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new rn;new D;new D;new D;new D;class wh{constructor(){this.rayFromWorld=new D,this.rayToWorld=new D,this.hitNormalWorld=new D,this.hitPointWorld=new D,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,r,s,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(r),this.shape=s,this.body=o,this.distance=a}}let $m,eE,tE,nE,iE,rE,sE;const sA={CLOSEST:1,ANY:2,ALL:4};$m=Oe.types.SPHERE;eE=Oe.types.PLANE;tE=Oe.types.BOX;nE=Oe.types.CYLINDER;iE=Oe.types.CONVEXPOLYHEDRON;rE=Oe.types.HEIGHTFIELD;sE=Oe.types.TRIMESH;class tn{get[$m](){return this._intersectSphere}get[eE](){return this._intersectPlane}get[tE](){return this._intersectBox}get[nE](){return this._intersectConvex}get[iE](){return this._intersectConvex}get[rE](){return this._intersectHeightfield}get[sE](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new D),t===void 0&&(t=new D),this.from=e.clone(),this.to=t.clone(),this.direction=new D,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=tn.ANY,this.result=new wh,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||tn.ANY,this.result=t.result||new wh,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(sf),$a.length=0,e.broadphase.aabbQuery(e,sf,$a),this.intersectBodies($a),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const r=MB,s=wB;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],r),r.vadd(e.position,r),this.intersectShape(l,s,r,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,r=e.length;!this.result.shouldStop&&n<r;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,r){const s=this.from;if(kB(s,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,r,e)}_intersectBox(e,t,n,r,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,r,s)}_intersectPlane(e,t,n,r,s){const o=this.from,a=this.to,l=this.direction,c=new D(0,0,1);t.vmult(c,c);const u=new D;o.vsub(n,u);const h=u.dot(c);a.vsub(n,u);const A=u.dot(c);if(h*A>0||o.distanceTo(a)<h)return;const d=c.dot(l);if(Math.abs(d)<this.precision)return;const m=new D,E=new D,g=new D;o.vsub(n,m);const p=-c.dot(m)/d;l.scale(p,E),o.vadd(E,g),this.reportIntersection(c,g,s,r,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,r=this.to,s=this.from;t.x=Math.min(r.x,s.x),t.y=Math.min(r.y,s.y),t.z=Math.min(r.z,s.z),n.x=Math.max(r.x,s.x),n.y=Math.max(r.y,s.y),n.z=Math.max(r.z,s.z)}_intersectHeightfield(e,t,n,r,s){e.data,e.elementSize;const o=bB;o.from.copy(this.from),o.to.copy(this.to),dn.pointToLocalFrame(n,t,o.from,o.from),dn.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=TB;let l,c,u,h;l=c=0,u=h=e.data.length-1;const A=new wn;o.getAABB(A),e.getIndexOfPosition(A.lowerBound.x,A.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(A.upperBound.x,A.upperBound.y,a,!0),u=Math.min(u,a[0]+1),h=Math.min(h,a[1]+1);for(let d=l;d<u;d++)for(let m=c;m<h;m++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(d,m,A),!!A.overlapsRay(o)){if(e.getConvexTrianglePillar(d,m,!1),dn.pointToWorldFrame(n,t,e.pillarOffset,So),this._intersectConvex(e.pillarConvex,t,So,r,s,of),this.result.shouldStop)return;e.getConvexTrianglePillar(d,m,!0),dn.pointToWorldFrame(n,t,e.pillarOffset,So),this._intersectConvex(e.pillarConvex,t,So,r,s,of)}}}_intersectSphere(e,t,n,r,s){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),h=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,A=u**2-4*c*h,d=RB,m=DB;if(!(A<0))if(A===0)o.lerp(a,A,d),d.vsub(n,m),m.normalize(),this.reportIntersection(m,d,s,r,-1);else{const E=(-u-Math.sqrt(A))/(2*c),g=(-u+Math.sqrt(A))/(2*c);if(E>=0&&E<=1&&(o.lerp(a,E,d),d.vsub(n,m),m.normalize(),this.reportIntersection(m,d,s,r,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(o.lerp(a,g,d),d.vsub(n,m),m.normalize(),this.reportIntersection(m,d,s,r,-1))}}_intersectConvex(e,t,n,r,s,o){const a=QB,l=af,c=o&&o.faceList||null,u=e.faces,h=e.vertices,A=e.faceNormals,d=this.direction,m=this.from,E=this.to,g=m.distanceTo(E),p=c?c.length:u.length,C=this.result;for(let y=0;!C.shouldStop&&y<p;y++){const M=c?c[y]:y,P=u[M],Q=A[M],R=t,T=n;l.copy(h[P[0]]),R.vmult(l,l),l.vadd(T,l),l.vsub(m,l),R.vmult(Q,a);const U=d.dot(a);if(Math.abs(U)<this.precision)continue;const _=a.dot(l)/U;if(!(_<0)){d.scale(_,An),An.vadd(m,An),Ln.copy(h[P[0]]),R.vmult(Ln,Ln),T.vadd(Ln,Ln);for(let v=1;!C.shouldStop&&v<P.length-1;v++){Vn.copy(h[P[v]]),Yn.copy(h[P[v+1]]),R.vmult(Vn,Vn),R.vmult(Yn,Yn),T.vadd(Vn,Vn),T.vadd(Yn,Yn);const F=An.distanceTo(m);!(tn.pointInTriangle(An,Ln,Vn,Yn)||tn.pointInTriangle(An,Vn,Ln,Yn))||F>g||this.reportIntersection(a,An,s,r,M)}}}}_intersectTrimesh(e,t,n,r,s,o){const a=LB,l=GB,c=HB,u=af,h=NB,A=PB,d=UB,m=OB,E=FB,g=e.indices;e.vertices;const p=this.from,C=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(t),dn.vectorToLocalFrame(n,t,y,h),dn.pointToLocalFrame(n,t,p,A),dn.pointToLocalFrame(n,t,C,d),d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,A.x*=e.scale.x,A.y*=e.scale.y,A.z*=e.scale.z,d.vsub(A,h),h.normalize();const M=A.distanceSquared(d);e.tree.rayQuery(this,c,l);for(let P=0,Q=l.length;!this.result.shouldStop&&P!==Q;P++){const R=l[P];e.getNormal(R,a),e.getVertex(g[R*3],Ln),Ln.vsub(A,u);const T=h.dot(a),U=a.dot(u)/T;if(U<0)continue;h.scale(U,An),An.vadd(A,An),e.getVertex(g[R*3+1],Vn),e.getVertex(g[R*3+2],Yn);const _=An.distanceSquared(A);!(tn.pointInTriangle(An,Vn,Ln,Yn)||tn.pointInTriangle(An,Ln,Vn,Yn))||_>M||(dn.vectorToWorldFrame(t,a,E),dn.pointToWorldFrame(n,t,An,m),this.reportIntersection(E,m,s,r,R))}l.length=0}reportIntersection(e,t,n,r,s){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case tn.ALL:this.hasHit=!0,c.set(o,a,e,t,n,r,l),c.hasHit=!0,this.callback(c);break;case tn.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,r,l));break;case tn.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,r,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,r){r.vsub(t,or),n.vsub(t,_s),e.vsub(t,ec);const s=or.dot(or),o=or.dot(_s),a=or.dot(ec),l=_s.dot(_s),c=_s.dot(ec);let u,h;return(u=l*a-o*c)>=0&&(h=s*c-o*a)>=0&&u+h<s*l-o*o}}tn.CLOSEST=sA.CLOSEST;tn.ANY=sA.ANY;tn.ALL=sA.ALL;const sf=new wn,$a=[],_s=new D,ec=new D,MB=new D,wB=new rn,An=new D,Ln=new D,Vn=new D,Yn=new D;new D;new wh;const of={faceList:[0]},So=new D,bB=new tn,TB=[],RB=new D,DB=new D,QB=new D;new D;new D;const af=new D,LB=new D,NB=new D,PB=new D,UB=new D,FB=new D,OB=new D;new wn;const GB=[],HB=new dn,or=new D,Bo=new D;function kB(i,e,t){t.vsub(i,or);const n=or.dot(e);return e.scale(n,Bo),Bo.vadd(i,Bo),t.distanceTo(Bo)}new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new tn;new D;new D;new D;new D(1,0,0),new D(0,1,0),new D(0,0,1);new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new wn;new D;new wn;new D;new D;new D;new D;new D;new D;new D;new wn;new D;new dn;new wn;Oe.types.SPHERE,Oe.types.SPHERE|Oe.types.PLANE,Oe.types.BOX|Oe.types.BOX,Oe.types.SPHERE|Oe.types.BOX,Oe.types.PLANE|Oe.types.BOX,Oe.types.CONVEXPOLYHEDRON,Oe.types.SPHERE|Oe.types.CONVEXPOLYHEDRON,Oe.types.PLANE|Oe.types.CONVEXPOLYHEDRON,Oe.types.BOX|Oe.types.CONVEXPOLYHEDRON,Oe.types.SPHERE|Oe.types.HEIGHTFIELD,Oe.types.BOX|Oe.types.HEIGHTFIELD,Oe.types.CONVEXPOLYHEDRON|Oe.types.HEIGHTFIELD,Oe.types.PARTICLE|Oe.types.SPHERE,Oe.types.PLANE|Oe.types.PARTICLE,Oe.types.BOX|Oe.types.PARTICLE,Oe.types.PARTICLE|Oe.types.CONVEXPOLYHEDRON,Oe.types.CYLINDER,Oe.types.SPHERE|Oe.types.CYLINDER,Oe.types.PLANE|Oe.types.CYLINDER,Oe.types.BOX|Oe.types.CYLINDER,Oe.types.CONVEXPOLYHEDRON|Oe.types.CYLINDER,Oe.types.HEIGHTFIELD|Oe.types.CYLINDER,Oe.types.PARTICLE|Oe.types.CYLINDER,Oe.types.SPHERE|Oe.types.TRIMESH,Oe.types.PLANE|Oe.types.TRIMESH;new D;new D;new D;new D;new D;new rn;new rn;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new wn;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D,new D,new D,new D,new D,new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new D;new rn;new D;new D;new D;new D;new D;new D;new D;new D;new D;new wn;new tn;const Cs=globalThis.performance||{};if(!Cs.now){let i=Date.now();Cs.timing&&Cs.timing.navigationStart&&(i=Cs.timing.navigationStart),Cs.now=()=>Date.now()-i}new D;function zB(i,e,t){let{color:n=65280,scale:r=1,onInit:s,onUpdate:o}=t===void 0?{}:t;const a=[],l=new Ui({color:n??65280,wireframe:!0}),c=new D,u=new D,h=new D,A=new rn,d=new qo(1),m=new ur(1,1,1),E=new Jr(10,10,10,10);E.translate(0,0,1e-4);function g(T){const U=new Zt,_=[];for(let F=0;F<T.vertices.length;F++){const G=T.vertices[F];_.push(G.x,G.y,G.z)}U.setAttribute("position",new Jt(_,3));const v=[];for(let F=0;F<T.faces.length;F++){const G=T.faces[F],z=G[0];for(let Z=1;Z<G.length-1;Z++){const Y=G[Z],oe=G[Z+1];v.push(z,Y,oe)}}return U.setIndex(v),U.computeBoundingSphere(),U.computeVertexNormals(),U}function p(T){const U=new Zt,_=[],v=c,F=u,G=h;for(let z=0;z<T.indices.length/3;z++)T.getTriangleVertices(z,v,F,G),_.push(v.x,v.y,v.z),_.push(F.x,F.y,F.z),_.push(G.x,G.y,G.z);return U.setAttribute("position",new Jt(_,3)),U.computeBoundingSphere(),U.computeVertexNormals(),U}function C(T){const U=new Zt,_=T.elementSize||1,v=T.data.flatMap((G,z)=>G.flatMap((Z,Y)=>[z*_,Y*_,Z])),F=[];for(let G=0;G<T.data.length-1;G++)for(let z=0;z<T.data[G].length-1;z++){const Z=T.data[G].length,Y=G*Z+z;F.push(Y+1,Y+Z,Y+Z+1),F.push(Y+Z,Y+1,Y)}return U.setIndex(F),U.setAttribute("position",new Jt(v,3)),U.computeBoundingSphere(),U.computeVertexNormals(),U}function y(T){let U=new Ft;const{SPHERE:_,BOX:v,PLANE:F,CYLINDER:G,CONVEXPOLYHEDRON:z,TRIMESH:Z,HEIGHTFIELD:Y}=Oe.types;switch(T.type){case _:{U=new Ft(d,l);break}case v:{U=new Ft(m,l);break}case F:{U=new Ft(E,l);break}case G:{const oe=new eA(T.radiusTop,T.radiusBottom,T.height,T.numSegments);U=new Ft(oe,l),T.geometryId=oe.id;break}case z:{const oe=g(T);U=new Ft(oe,l),T.geometryId=oe.id;break}case Z:{const oe=p(T);U=new Ft(oe,l),T.geometryId=oe.id;break}case Y:{const oe=C(T);U=new Ft(oe,l),T.geometryId=oe.id;break}}return i.add(U),U}function M(T,U){const{SPHERE:_,BOX:v,PLANE:F,CYLINDER:G,CONVEXPOLYHEDRON:z,TRIMESH:Z,HEIGHTFIELD:Y}=Oe.types;switch(U.type){case _:{const{radius:oe}=U;T.scale.set(oe*r,oe*r,oe*r);break}case v:{T.scale.copy(U.halfExtents),T.scale.multiplyScalar(2*r);break}case F:break;case G:{T.scale.set(1*r,1*r,1*r);break}case z:{T.scale.set(1*r,1*r,1*r);break}case Z:{T.scale.copy(U.scale).multiplyScalar(r);break}case Y:{T.scale.set(1*r,1*r,1*r);break}}}function P(T,U){if(!T)return!1;const{geometry:_}=T;return _ instanceof qo&&U.type===Oe.types.SPHERE||_ instanceof ur&&U.type===Oe.types.BOX||_ instanceof Jr&&U.type===Oe.types.PLANE||_.id===U.geometryId&&U.type===Oe.types.CYLINDER||_.id===U.geometryId&&U.type===Oe.types.CONVEXPOLYHEDRON||_.id===U.geometryId&&U.type===Oe.types.TRIMESH||_.id===U.geometryId&&U.type===Oe.types.HEIGHTFIELD}function Q(T,U){let _=a[T],v=!1;return P(_,U)||(_&&i.remove(_),a[T]=_=y(U),v=!0),M(_,U),v}function R(){const T=a,U=c,_=A;let v=0;for(const F of e.bodies)for(let G=0;G!==F.shapes.length;G++){const z=F.shapes[G],Z=Q(v,z),Y=T[v];Y&&(F.quaternion.vmult(F.shapeOffsets[G],U),F.position.vadd(U,U),F.quaternion.mult(F.shapeOrientations[G],_),Y.position.copy(U),Y.quaternion.copy(_),Z&&s instanceof Function&&s(F,Y,z),!Z&&o instanceof Function&&o(F,Y,z)),v++}for(let F=v;F<T.length;F++){const G=T[F];G&&i.remove(G)}T.length=v}return{update:R}}var oA=function(){var i=import.meta.url;return function(t){t=t||{};var t=typeof t<"u"?t:{},n,r;t.ready=new Promise(function(b,N){n=b,r=N}),t.create_buffer=function(b){return t._malloc(b)},t.free_buffer=function(b){return t._free(b)},t.locateFile=function(b,N){return t.simd&&(b=b.replace(/\.wasm$/i,".simd.wasm")),t.getWasmPath?t.getWasmPath(b,N,t.simd):N+b},t.createWebCodecsEncoder=function(b){return WB(t,b)};var s={},o;for(o in t)t.hasOwnProperty(o)&&(s[o]=t[o]);var a=typeof window=="object",l=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var c="";function u(b){return t.locateFile?t.locateFile(b,c):c+b}var h;(a||l)&&(l?c=self.location.href:typeof document<"u"&&document.currentScript&&(c=document.currentScript.src),i&&(c=i),c.indexOf("blob:")!==0?c=c.substr(0,c.lastIndexOf("/")+1):c="",l&&(h=function(b){try{var N=new XMLHttpRequest;return N.open("GET",b,!1),N.responseType="arraybuffer",N.send(null),new Uint8Array(N.response)}catch(ie){var q=wA(b);if(q)return q;throw ie}})),t.print||console.log.bind(console);var A=t.printErr||console.warn.bind(console);for(o in s)s.hasOwnProperty(o)&&(t[o]=s[o]);s=null,t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.quit&&t.quit;var d;t.wasmBinary&&(d=t.wasmBinary),t.noExitRuntime,typeof WebAssembly!="object"&&$e("no native wasm support detected");var m,E=!1;function g(b,N,q){for(var ie=N+q,_e="";!(N>=ie);){var ve=b[N++];if(!ve)return _e;if(!(ve&128)){_e+=String.fromCharCode(ve);continue}var Pe=b[N++]&63;if((ve&224)==192){_e+=String.fromCharCode((ve&31)<<6|Pe);continue}var Ee=b[N++]&63;if((ve&240)==224?ve=(ve&15)<<12|Pe<<6|Ee:ve=(ve&7)<<18|Pe<<12|Ee<<6|b[N++]&63,ve<65536)_e+=String.fromCharCode(ve);else{var Te=ve-65536;_e+=String.fromCharCode(55296|Te>>10,56320|Te&1023)}}return _e}function p(b,N){return b?g(z,b,N):""}function C(b,N,q,ie){if(!(ie>0))return 0;for(var _e=q,ve=q+ie-1,Pe=0;Pe<b.length;++Pe){var Ee=b.charCodeAt(Pe);if(Ee>=55296&&Ee<=57343){var Te=b.charCodeAt(++Pe);Ee=65536+((Ee&1023)<<10)|Te&1023}if(Ee<=127){if(q>=ve)break;N[q++]=Ee}else if(Ee<=2047){if(q+1>=ve)break;N[q++]=192|Ee>>6,N[q++]=128|Ee&63}else if(Ee<=65535){if(q+2>=ve)break;N[q++]=224|Ee>>12,N[q++]=128|Ee>>6&63,N[q++]=128|Ee&63}else{if(q+3>=ve)break;N[q++]=240|Ee>>18,N[q++]=128|Ee>>12&63,N[q++]=128|Ee>>6&63,N[q++]=128|Ee&63}}return N[q]=0,q-_e}function y(b,N,q){return C(b,z,N,q)}function M(b){for(var N=0,q=0;q<b.length;++q){var ie=b.charCodeAt(q);ie>=55296&&ie<=57343&&(ie=65536+((ie&1023)<<10)|b.charCodeAt(++q)&1023),ie<=127?++N:ie<=2047?N+=2:ie<=65535?N+=3:N+=4}return N}function P(b,N){for(var q="",ie=0;!(ie>=N/2);++ie){var _e=Z[b+ie*2>>1];if(_e==0)break;q+=String.fromCharCode(_e)}return q}function Q(b,N,q){if(q===void 0&&(q=2147483647),q<2)return 0;q-=2;for(var ie=N,_e=q<b.length*2?q/2:b.length,ve=0;ve<_e;++ve){var Pe=b.charCodeAt(ve);Z[N>>1]=Pe,N+=2}return Z[N>>1]=0,N-ie}function R(b){return b.length*2}function T(b,N){for(var q=0,ie="";!(q>=N/4);){var _e=oe[b+q*4>>2];if(_e==0)break;if(++q,_e>=65536){var ve=_e-65536;ie+=String.fromCharCode(55296|ve>>10,56320|ve&1023)}else ie+=String.fromCharCode(_e)}return ie}function U(b,N,q){if(q===void 0&&(q=2147483647),q<4)return 0;for(var ie=N,_e=ie+q-4,ve=0;ve<b.length;++ve){var Pe=b.charCodeAt(ve);if(Pe>=55296&&Pe<=57343){var Ee=b.charCodeAt(++ve);Pe=65536+((Pe&1023)<<10)|Ee&1023}if(oe[N>>2]=Pe,N+=4,N+4>_e)break}return oe[N>>2]=0,N-ie}function _(b){for(var N=0,q=0;q<b.length;++q){var ie=b.charCodeAt(q);ie>=55296&&ie<=57343&&++q,N+=4}return N}function v(b,N){return b%N>0&&(b+=N-b%N),b}var F,G,z,Z,Y,oe,te,Ce,Ie;function Le(b){F=b,t.HEAP8=G=new Int8Array(b),t.HEAP16=Z=new Int16Array(b),t.HEAP32=oe=new Int32Array(b),t.HEAPU8=z=new Uint8Array(b),t.HEAPU16=Y=new Uint16Array(b),t.HEAPU32=te=new Uint32Array(b),t.HEAPF32=Ce=new Float32Array(b),t.HEAPF64=Ie=new Float64Array(b)}t.INITIAL_MEMORY;var ke,be=[],re=[],ue=[];function ge(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)qe(t.preRun.shift());se(be)}function Se(){se(re)}function We(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)ht(t.postRun.shift());se(ue)}function qe(b){be.unshift(b)}function st(b){re.unshift(b)}function ht(b){ue.unshift(b)}var Je=0,H=null;function Ot(b){Je++,t.monitorRunDependencies&&t.monitorRunDependencies(Je)}function Ge(b){if(Je--,t.monitorRunDependencies&&t.monitorRunDependencies(Je),Je==0&&H){var N=H;H=null,N()}}t.preloadedImages={},t.preloadedAudios={};function $e(b){t.onAbort&&t.onAbort(b),b+="",A(b),E=!0,b="abort("+b+"). Build with -s ASSERTIONS=1 for more info.";var N=new WebAssembly.RuntimeError(b);throw r(N),N}var Be="data:application/octet-stream;base64,";function At(b){return b.startsWith(Be)}var He;He="data:application/octet-stream;base64,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BUEBcQR/IAYgAigCAGooAgAFIAYLIAJqIANBAiAFQQJxGyAEIAAoAgAoAhgRBQALBgAgABAXC0sBAn8gACgCBCIGQQh1IQcgACgCACIAIAEgAiAGQQFxBH8gByADKAIAaigCAAUgBwsgA2ogBEECIAZBAnEbIAUgACgCACgCFBEGAAuaAQAgAEEBOgA1AkAgACgCBCACRw0AIABBAToANAJAIAAoAhAiAkUEQCAAQQE2AiQgACADNgIYIAAgATYCECAAKAIwQQFHDQIgA0EBRg0BDAILIAEgAkYEQCAAKAIYIgJBAkYEQCAAIAM2AhggAyECCyAAKAIwQQFHDQIgAkEBRg0BDAILIAAgACgCJEEBajYCJAsgAEEBOgA2CwtdAQF/IAAoAhAiA0UEQCAAQQE2AiQgACACNgIYIAAgATYCEA8LAkAgASADRgRAIAAoAhhBAkcNASAAIAI2AhgPCyAAQQE6ADYgAEECNgIYIAAgACgCJEEBajYCJAsLmwQBA38gASAAIAFGIgI6AAwCQCACDQADQCABKAIIIgItAAwNAQJAAn8gAiACKAIIIgMoAgAiBEYEQAJAIAMoAgQiBEUNACAELQAMDQAMAwsCQCABIAIoAgBGBEAgAiEBDAELIAIgAigCBCIBKAIAIgA2AgQgASAABH8gACACNgIIIAIoAggFIAMLNgIIIAIoAggiACAAKAIAIAJHQQJ0aiABNgIAIAEgAjYCACACIAE2AgggASgCCCEDCyABQQE6AAwgA0EAOgAMIAMgAygCACIAKAIEIgE2AgAgAQRAIAEgAzYCCAsgACADKAIINgIIIAMoAggiASABKAIAIANHQQJ0aiAANgIAIAAgAzYCBCADQQhqDAELAkAgBEUNACAELQAMDQAMAgsCQCABIAIoAgBHBEAgAiEBDAELIAIgASgCBCIANgIAIAEgAAR/IAAgAjYCCCACKAIIBSADCzYCCCACKAIIIgAgACgCACACR0ECdGogATYCACABIAI2AgQgAiABNgIIIAEoAgghAwsgAUEBOgAMIANBADoADCADIAMoAgQiACgCACIBNgIEIAEEQCABIAM2AggLIAAgAygCCDYCCCADKAIIIgEgASgCACADR0ECdGogADYCACAAIAM2AgAgA0EIagsgADYCAAwCCyAEQQxqIQEgAkEBOgAMIAMgACADRiICOgAMIAFBAToAACADIQEgAkUNAAsLCx0AIAEEQCAAIAEoAgAQKCAAIAEoAgQQKCABEBcLC70DAQh/AkAgACgCBCIDIAAoAgggACgCDGtBA3RqQRBrIgJBf0oEQAJAIAAoAhBBA3QgAmsiBEEISA0AA0AgACADIARBDyAEQQ9IGyIGQQdrIgJqIgM2AgQgACAAKAIAIgcgAnQiCDYCACADQQBOBEAgAEEIaigCACIJLwEAIQUgACAJQQJqNgIIIAAgA0EQazYCBCAAIAVBCHQgBUEIdnJB//8DcSADdCAIcjYCAAsgASACIAdBJyAGa3YQISAEIAJrIgRBCEgNASAAKAIEIQMMAAsACyAEQQFrQRBPDQEgACAAKAIAIgUgBHQiBjYCACAAQQRqIAAoAgQgBGoiAjYCACACQQBOBEAgAEEIaigCACIHLwEAIQMgACAHQQJqNgIIIAAgAkEQazYCBCAAIANBCHQgA0EIdnJB//8DcSACdCAGcjYCAAtBASEDAkAgBUEgIARrdiICQQFxBEAgAiEADAELA0AgAkEBdiEAIARBAWsiBEEARyEDIARFDQEgAkECcSEFIAAhAiAFRQ0ACwsgAwRAIAEgBCAAECELDwtB2BJB2gtBrQ5BgAkQAAALQYoSQdoLQYIOQdsIEAAAC08AQeQhQgA3AgBB4CFB5CE2AgBBlwpBA0GcFUGoFUEDQQQQCkHBC0EEQbAVQcAVQQVBBhAKQYgKQQJByBVB0BVBB0EIEApB7CFBEhEBABoLxwcBCX8gASgCBCEFIAEoAgAhCANAIAkhByAFQQFqIQkgCEEBdCEGIAVBf0gEfyAJBSABKAIIIgovAQAhCyABIApBAmo2AgggC0EIdCALQQh2ckH//wNxIAl0IAZyIQYgBUEPawshBSAHQQFqIQkgCEF/SiELIAYhCCALDQALIAEgBTYCBCABIAY2AgBBACEJAkACQAJAAkACQAJAAn8gB0UEQEEADAELIAdBAWtBEE8NBiAGIAd0IQggBSAHaiIFQQBOBEAgASgCCCIKLwEAIQsgASAKQQJqNgIIIAtBCHQgC0EIdnJB//8DcSAFdCAIciEIIAVBEGshBQsgBkEgIAdrdgshC0F/IAd0QX9zIQwDQCAJIQcgBUEBaiEJIAhBAXQhBiAFQX9IBH8gCQUgASgCCCINLwEAIQogASANQQJqNgIIIApBCHQgCkEIdnJB//8DcSAJdCAGciEGIAVBD2sLIQUgB0EBaiEJIAhBf0ohCiAGIQggCg0ACyABIAU2AgQgASAINgIAIAcEfyAHQQFrQRBPDQYgASAFIAdqIgY2AgQgASAIIAd0Igk2AgAgBkEATgRAIAEoAggiCi8BACEFIAEgCkECajYCCCABIAZBEGs2AgQgASAFQQh0IAVBCHZyQf//A3EgBnQgCXI2AgALIAhBICAHa3YFQQALIQUgBCALIAxqNgIAIAAgBUF/IAd0QX9zakECdGpBgBJqKAIAIgBBIE8NASADQYACTw0CQQAhBiADQQFqIgMhBQNAIAZBAWohBiAFQQFLIQQgBUEBdiEFIAQNAAsgAiAGQQF0QQFrIAMQIUEAIQYgAEEBaiIAIQUDQCAGQQFqIQYgBUEBSyEDIAVBAXYhBSADDQALIAIgBkEBdEEBayAAECEgASACECkgAigCCCIGIAIoAgxrQQN0IAIoAgAiAGtBIGoiA0F/TA0DIAIgAEEAIANrQQdxIgRrIgA2AgAgAgJ/IABBAE4EQCACKAIEDAELIABBYEwNBSACIAZBBGoiADYCCCAGIAIoAgQiAUEYdCABQQh0QYCA/AdxciABQQh2QYD+A3EgAUEYdnJyNgIAIAIgAigCAEEgajYCACAAIQZBAAsiBTYCBCAGIAVBCHRBgID8B3EgBUEYdHIgBUEIdkGA/gNxIAVBGHZycjYCACADIARqQQN2DwsAC0HLEkHaC0GzEEG0CRAAAAtBmxJB2gtBtBBBtAkQAAALQdgSQdoLQfYOQfcIEAAAC0G7EkHaC0HkDkHlCBAAAAtBihJB2gtBgg5B2wgQAAAL5goBCH8gACAAKAIAIglBCHQiBjYCACAAIAAoAgQiB0EIaiIENgIEAkAgB0F4SARAIAQhCAwBCyAAKAIIIggvAQAhBSAAIAhBAmo2AgggACAHQQhrIgg2AgQgACAFQQh0IAVBCHZyQf//A3EgBHQgBnIiBjYCAAsgASABKAIAIgdBCGsiBTYCACAJQRh2IQkCQAJAIAECfyAFQQBOBEAgASgCBAwBCyAFQWBMDQIgASABKAIIIgRBBGo2AgggBCABKAIEIAlBCCAHa3ZyIgRBGHQgBEEYdnIgBEEIdkGA/gNxciAEQQh0QYCA/AdxcjYCACABKAIAQSBqIQUgACgCBCEIIAAoAgAhBkEACyAJIAV0ciILNgIEIAAgCEEIaiIHNgIEIAAgBkEIdCIKNgIAAkAgCEF3TARAIAchBAwBCyAAKAIIIgQvAQAhCSAAIARBAmo2AgggACAIQQhrIgQ2AgQgACAJQQh0IAlBCHZyQf//A3EgB3QgCnIiCjYCAAsgASAFQQhrIgg2AgAgBkEYdiEGIAVBB0wEQCAFQWlIDQIgASABKAIIIgRBBGo2AgggBCALIAZBCCAFa3ZyIgRBGHQgBEEYdnIgBEEIdkGA/gNxciAEQQh0QYCA/AdxcjYCACABKAIAQSBqIQggACgCACEKQQAhCyAAKAIEIQQLIAEgBiAIdCALciILNgIEIAAgBEEIaiIHNgIEIAAgCkEIdCIGNgIAAkAgBEF4SARAIAchBQwBCyAAKAIIIgUvAQAhCSAAIAVBAmo2AgggACAEQQhrIgU2AgQgACAJQQh0IAlBCHZyQf//A3EgB3QgBnIiBjYCAAsgASAIQQhrIgQ2AgAgCkEYdiEHIAhBB0wEQCAIQWlIDQIgASABKAIIIgRBBGo2AgggBCALIAdBCCAIa3ZyIgRBGHQgBEEYdnIgBEEIdkGA/gNxciAEQQh0QYCA/AdxcjYCACABIAEoAgBBIGoiBDYCACAAKAIEIQVBACELIAAoAgAhBgsgASAHIAR0IAtyNgIEQQAhBAwACwNAIAQhByAFQQFqIQQgBkEBdCEIIAVBf0gEfyAEBSAAKAIIIgkvAQAhCiAAIAlBAmo2AgggCkEIdCAKQQh2ckH//wNxIAR0IAhyIQggBUEPawshBSAHQQFqIQQgBkF/SiEJIAghBiAJDQALIAAgBTYCBCAAIAY2AgACQAJAAkACQCADIAcEfyAHQQFrQRBPDQEgACAFIAdqIgk2AgQgACAGIAd0Igg2AgAgCUEATgRAIAAoAggiBC8BACEFIAAgBEECajYCCCAAIAlBEGs2AgQgACAFQQh0IAVBCHZyQf//A3EgCXQgCHI2AgALIAZBICAHa3YFQQALQX8gB3RBf3NqNgIAIAJBIE8NAUEAIQYgAkEBaiIDIQUDQCAGQQFqIQYgBUEBSyECIAVBAXYhBSACDQALIAEgBkEBdEEBayADECEgACABECkgASgCCCIGIAEoAgxrQQN0IAEoAgAiAGtBIGoiA0F/TA0CIAEgAEEAIANrQQdxIgJrIgA2AgAgAQJ/IABBAE4EQCABKAIEDAELIABBYEwNBCABIAZBBGoiADYCCCAGIAEoAgQiBEEYdCAEQQh0QYCA/AdxciAEQQh2QYD+A3EgBEEYdnJyNgIAIAEgASgCAEEgajYCACAAIQZBAAsiBTYCBCAGIAVBCHRBgID8B3EgBUEYdHIgBUEIdkGA/gNxIAVBGHZycjYCACACIANqQQN2DwtBihJB2gtBgg5B2wgQAAALQcsSQdoLQZ8QQfwMEAAAC0HYEkHaC0H2DkH3CBAAAAsLQbsSQdoLQeQOQeUIEAAACxwAIAAgAUEIIAKnIAJCIIinIAOnIANCIIinEBAL3yYBM38jAEHgAGsiByQAIABB/AlqIRQgAEH4CWohFSAAQfQJaiEWIABB8AlqIRcgAEHsCWohGCAAQegJaiEZIABB5AlqIRogAEHgCWohGyAAQdwJaiEcIABB2AlqIR0gAEHUCWohHiAAQdAJaiEfIABBzAlqISAgAEHICWohISAAQcQJaiEiIABBwAlqISMgAEG8CWohJCAAQbgJaiElIABBtAlqISYgAEGwCWohJyAAQawJaiEoIABBqAlqISkgAEGkCWohKiAAQaAJaiErIABBnAlqISwgAEGYCWohLSAAQZQJaiEuIABBkAlqIS8gAEGMCWohMCAAQYgJaiExIABBhAlqITIgAEGACWohMyAAQYwbaiESIABBlBtqIREgAEGQG2ohECABIAJqIQ8CQAJAAkACQAJAAkACQANAIAEhBAJAAkADQAJAIAQgDyAEaxA0IgIgDyACGyIGQQFqIgQgD08NACAPIAZrIQVBASECAkADQCAELQAADQEgBiACQQFqIgJqIQQgAiAFRw0ACyAFIQIgDyEECyACQQJJDQAgBC0AAEEBRw0AIARBAWohDAwCCyAEIA9JDQALIA8hDCABDQBBACEMQQAhBkEAIQIMAQsgDCAPIAxraiEBIAwhBAJ/A0ACQCAEIAEgBGsQNCICIAEgAhsiBkEBaiIEIAFPDQAgDyAGayEFQQEhAgJAA0AgBC0AAA0BIAYgAkEBaiICaiEEIAIgBUcNAAsgBSECIA8hBAsgAkECSQ0AIAQtAABBAUcNACAEQQFqIQEgAkEBagwCCyABIARLDQALQQALIQYDQCABIgIgDE0NASACQQFrIgEtAABFDQALC0EAIQQgAiAGIAxqayIFRQ0CIAwtAAAhAQJAAkACQAJAAkACQAJAAkACQAJAAkACfwJAIAAoAogbBEACQCABQQF2QT9xIgFBEGtB/wFxIgJBBUsNACAQKAIADQAgESgCAA0AIBIoAgANACAAQQA2ApgbCwJAAkACQCABQSBrDgMEAAECCyAAKAKAGyAAKAKEGyAMIAUQPiAQDAQLIAAoAoAbIAAoAoQbIAwgBRA9IBEMAwsgEigCAA0QIBAoAgANECARKAIADRAgACgCmBsNECAFQQRqIgQQGCIBRQ0QIAEgBUEIdEGAgPwHcSAFQRh0ciAFQQh2QYD+A3EgBUEYdnJyNgIAIAFBBGogDCAFEBoaIAAoAoAbIAAoAoQbIAEgBCADIAJBBkkQNSECIAEQFyACRQ0MDBALIAFBH3EiNEEJRg0PIAVBEWxBEG1BIGoiARAYIg5FDQ8gARAYIgtFBEAgDiELDA8LIAVBAUgNDCAFQQFrIQhBACECQQAhAQNAIAQhCQJAIAJBAkcEQCABIQYMAQtBAiECIAEgDGotAAAiBEEDSwRAIAEhBgwBCyAEQQNHDQ4gCCIGIAFGDQAgAUEBaiICIAEgAiAMai0AACIBQQRJGyEGIAFBA0tBAXQhAgsgCSALaiAGIAxqIgEtAAA6AABBACACQQFqIAEtAAAbIQIgCUEBaiEEIAZBAWoiASAFSA0ACyAOIAstAAAiAjoAACAHIA5BAWoiCDYCCCAHIAg2AgwgB0IgNwMAIAcgCTYCICAHIAtBAWoiBTYCHCALKAEBIQEgByALQQVqIgY2AhggB0FwNgIUIAcgCDYCPCAHIAg2AjggB0IgNwMwIAcgCTYCUCAHIAU2AkwgByAGNgJIIAdBcDYCRCAHIAFBCHRBgID8B3EgAUEYdHIgAUEIdkGA/gNxIAFBGHZyciIFNgIQIAcgBTYCQAJAAkAgAkEfcUEBaw4IBgYEBAYEAAEEC0EAIQQgB0FAayAHQTBqQQAgB0HcAGoQLCIBRQ0LA0AgASAAIARBAnRqIgJBgAlqKAIARgRAIAggAigCACABECBFDQsLIARBAWoiBEEgRw0ACyAzKAIARQRAQQAhBCAzIQUMCQsgMigCAA0EQQEhBCAyIQUMCAtBACEEIAAgB0FAayAHQTBqQQAgB0HcAGoQKyIBRQ0KA0AgASAAIARBAnRqIgJBgApqKAIARgRAIAggAigCgAEgARAgRQ0ICyAEQQFqIgRBgAJHDQALQQAhBgNAIAAgBkECdGpBgApqIgUoAgBFBEAgBiEEDAcLIAAgBkEBciIEQQJ0akGACmoiBSgCAEUNBiAAIAZBAnIiBEECdGpBgApqIgUoAgBFDQYgACAGQQNyIgRBAnRqQYAKaiIFKAIARQ0GQQAhBCAGQQRqIgZBgAJHDQALDAoLAkAgACgCgBsoAgAgACgChBtB2ABsaiIBKAIIQQFGBEAgASgCUCIGQQNOBEAgASgCTCEOQQAhAgNAIAUgAiAOaiIELQAAQQh0IAQtAAFyIgtGBEAgBEECaiAMIAUQIEUNBAsgAiALaiIEQQJqIQIgBEEEaiAGSA0ACwsgAUHMAGoiAUECEBsiAkUNASACIAVBCHQgBUGA/gNxQQh2cjsAACABIAUQGyIBRQ0BIAEgDCAFEBoaDAELQd8KQdoLQZMHQY0JEAAACyASC0EANgIADAkLIA4gCyAEEBoaDAcLIDEoAgBFBEBBAiEEIDEhBQwECyAwKAIARQRAQQMhBCAwIQUMBAsgLygCAEUEQEEEIQQgLyEFDAQLIC4oAgBFBEBBBSEEIC4hBQwECyAtKAIARQRAQQYhBCAtIQUMBAsgLCgCAEUEQEEHIQQgLCEFDAQLICsoAgBFBEBBCCEEICshBQwECyAqKAIARQRAQQkhBCAqIQUMBAsgKSgCAEUEQEEKIQQgKSEFDAQLICgoAgBFBEBBCyEEICghBQwECyAnKAIARQRAQQwhBCAnIQUMBAsgJigCAEUEQEENIQQgJiEFDAQLICUoAgBFBEBBDiEEICUhBQwECyAkKAIARQRAQQ8hBCAkIQUMBAsgIygCAEUEQEEQIQQgIyEFDAQLICIoAgBFBEBBESEEICIhBQwECyAhKAIARQRAQRIhBCAhIQUMBAsgICgCAEUEQEETIQQgICEFDAQLIB8oAgBFBEBBFCEEIB8hBQwECyAeKAIARQRAQRUhBCAeIQUMBAsgHSgCAEUEQEEWIQQgHSEFDAQLIBwoAgBFBEBBFyEEIBwhBQwECyAbKAIARQRAQRghBCAbIQUMBAsgGigCAEUEQEEZIQQgGiEFDAQLIBkoAgBFBEBBGiEEIBkhBQwECyAYKAIARQRAQRshBCAYIQUMBAsgFygCAEUEQEEcIQQgFyEFDAQLIBYoAgBFBEBBHSEEIBYhBQwECyAVKAIARQRAQR4hBCAVIQUMBAtBACEEIBQoAgANBkEfIQQgFCEFDAMLQQAhBEFwIQIDQCAEIQkgAkEBaiEEIAVBAXQhASACQX9IBH8gBAUgASAGLwEAIgpBCHQgCkEIdnJB//8DcSAEdHIhASAGQQJqIQYgAkEPawshAiAJQQFqIQQgBUF/SiEKIAEhBSAKDQALQQAhBQJ/IAlFBEAgASEEQQAMAQsgCUEBa0EQTw0QIAEgCXQhBCACIAlqIgJBAE4EQCAEIAYvAQAiCkEIdCAKQQh2ckH//wNxIAJ0ciEEIAZBAmohBiACQRBrIQILIAFBICAJa3YLITUDQCAFIQogAkEBaiEFIARBAXQhASACQX9IBH8gBQUgASAGLwEAIg1BCHQgDUEIdnJB//8DcSAFdHIhASAGQQJqIQYgAkEPawshAiAKQQFqIQUgBEF/SiENIAEhBCANDQALQQAhDQJ/IApFBEAgBCEFQQAMAQsgCkEBa0EQTw0QIAQgCnQhBSACIApqIgJBAE4EQCAGLwEAIgFBCHQgAUEIdnJB//8DcSACdCAFciEFIAZBAmohBiACQRBrIQILIARBICAKa3YLITYDQCANIQEgAkEBaiENIAVBAXQhBCACQX9IBH8gDQUgBCAGLwEAIhNBCHQgE0EIdnJB//8DcSANdHIhBCAGQQJqIQYgAkEPawshAiABQQFqIQ0gBUF/SiETIAQhBSATDQALIAcgAjYCFCAHIAU2AhAgByAGNgIYAkAgACABBH8gAUEBa0EQTw0RIAcgASACaiICNgIUIAcgBSABdCINNgIQIAJBAE4EQCAGLwEAIQQgByAGQQJqNgIYIAcgAkEQazYCFCAHIARBCHQgBEEIdnJB//8DcSACdCANcjYCEAsgBUEgIAFrdgVBAAtBfyABdEF/c2pBAnRqQYATaigCACINQYACSQRAQQAhBEEBIAl0IDVqIgUhAgNAIAQiAUEBaiEEIAJBAUshBiACQQF2IQIgBg0ACyAFIARBAXQiAkEBayIEdg0OIARBIU8ND0EBIAp0IQYgAUEQSQR/QSEFIAFBIE8NESAHIA5BBWoiCDYCCCAOIAUgAkEha3YiAUEYdCABQQh0QYCA/AdxciABQQh2QYD+A3EgAUEYdnJyNgIBQcEACyACayEBQQAhBCAGIDZqIgYhAgNAIARBAWohBCACQQFLIQkgAkEBdiECIAkNAAsgBiAEQQF0QQFrIgJ2DQ4gAkEhTw0PIAUgAXQhBAJ/IAEgAmsiBUF/SgRAIAghASAEDAELIAVBYEwNESAHIAhBBGoiATYCCCAIIAZBACAFa3YgBHIiAkEYdCACQRh2ciACQQh2QYD+A3FyIAJBCHRBgID8B3FyNgIAIAVBIGohBUEACyEJQQAhBCANQQFqIgghAgNAIARBAWohBCACQQFLIQogAkEBdiECIAoNAAsgCCAEQQF0QQFrIgR2DQ4gByAFIARrIgI2AgAgBEEhTw0PIAYgBXQgCXIhBSAHIAJBf0oEfyAFBSACQWBMDQIgByABQQRqNgIIIAEgCEEAIAJrdiAFciIBQRh0IAFBGHZyIAFBCHZBgP4DcXIgAUEIdEGAgPwHcXI2AgAgByAHKAIAQSBqIgI2AgBBAAsgCCACdHI2AgQgB0EQaiAHECkMBgtBmxJB2gtBxxBBvgoQAAALDA4LIAAgBEECdGogARAYIgI2AoABIAJFDQAgAiAIIAEQGhogBSABNgIACyAAIAcoAlxBAnRqQYATaiAENgIAIAAgB0EQaiAHIAQgB0HcAGoQKxoMAgsgACAEQQJ0aiABEBgiAjYCACACRQ0AIAIgCCABEBoaIAUgATYCAAsgACAHKAJcQQJ0akGAEmogBDYCACAHQRBqIAcgBCAHQdwAahAsGgsgBygCCCIEIAcoAgxrQQN0IAcoAgAiAWtBIGoiBUF/TA0GIAcCfyABQQAgBWtBB3EiCGsiBkEATgRAIAcoAgQMAQsgBkFgTA0KIAcgBEEEaiIBNgIIIAQgBygCBCICQRh0IAJBCHRBgID8B3FyIAJBCHZBgP4DcSACQRh2cnI2AgAgByAGQSBqNgIAIAEhBEEACyIBNgIEIAQgAUEIdEGAgPwHcSABQRh0ciABQQh2QYD+A3EgAUEYdnJyNgIAIAUgCGpBA3ZBAWohBAsgC0GAgIAINgIAQQQhAkEAIQYgDiEBQQAhCCAEQQFOBEADQCABLQAAIQUCQCAGQQJHDQBBAiEGIAVBA0sNACACIAtqQQM6AAAgAkEBaiECQQAhBgsgAUEBaiEBIAIgC2ogBToAAEEAIAZBAWogBRshBiACQQFqIQIgCEEBaiIIIARHDQALCwJAAkACQAJAAkACQCA0QQVrDgQCAwABAwsgACgCgBsgACgChBsgC0EEaiACQQRrED5BACEEIABBADYCkBsMBAsgECgCAA0FIAAoAoAbIAAoAoQbIAtBBGogAkEEaxA9QQAhBCAAQQA2ApQbDAMLIBAoAgANBCAAQQA2ApgbDAELIBAoAgANAwtBACEEIBEoAgANACAAKAKYGw0AIAcgAkEFazYCUCAHIAxBAWo2AkwgDCgBASEBIAcgDEEFajYCSCAHQXA2AkQgByABQQh0QYCA/AdxIAFBGHRyIAFBCHZBgP4DcSABQRh2cnI2AkACf0EAIQggB0FAayIJKAIEIQUgCSgCACEEA0AgCCEBIAVBAWohCCAEQQF0IQYgBUF/SAR/IAgFIAkoAggiDS8BACEKIAkgDUECajYCCCAKQQh0IApBCHZyQf//A3EgCHQgBnIhBiAFQQ9rCyEFIAFBAWohCCAEQX9KIQogBiEEIAoNAAsgCSAFNgIEIAkgBDYCAAJAIAEEfyABQQFrQRBPDQEgCSABIAVqIgU2AgQgCSAEIAF0Igg2AgAgBUEATgRAIAkoAggiCi8BACEGIAkgCkECajYCCCAJIAVBEGs2AgQgCSAGQQh0IAZBCHZyQf//A3EgBXQgCHI2AgALIARBICABa3YFQQALQX8gAXRBf3NqDAELDAsLIQEgCyACQQRrIgU6AAMgCyACQfz/A2pBCHY6AAIgCyACQfz//wdqQRB2OgABIAsgBUEYdjoAACAAKAKAGyAAKAKEGyALIAIgA0ECIDRBBUYgARsQNSEECyAOEBcgCxAXIAQNBAsgDEEBaiEBDAELCyAOEBcLIAsQFwsgB0HgAGokAA8LQdgSQdoLQfYOQfcIEAAAC0HrEkHaC0HfDkHlCBAAAAtBqRJB2gtB4Q5B5QgQAAALQbsSQdoLQeQOQeUIEAAAC0GKEkHaC0GCDkHbCBAAAAvoCwEGfyAAIAFqIQUCQAJAIAAoAgQiAkEBcQ0AIAJBA3FFDQEgACgCACICIAFqIQECQCAAIAJrIgBBjCIoAgBHBEAgAkH/AU0EQCAAKAIIIgQgAkEDdiICQQN0QaAiakYaIAAoAgwiAyAERw0CQfghQfghKAIAQX4gAndxNgIADAMLIAAoAhghBgJAIAAgACgCDCIDRwRAIAAoAggiAkGIIigCAEkaIAIgAzYCDCADIAI2AggMAQsCQCAAQRRqIgIoAgAiBA0AIABBEGoiAigCACIEDQBBACEDDAELA0AgAiEHIAQiA0EUaiICKAIAIgQNACADQRBqIQIgAygCECIEDQALIAdBADYCAAsgBkUNAgJAIAAgACgCHCIEQQJ0QagkaiICKAIARgRAIAIgAzYCACADDQFB/CFB/CEoAgBBfiAEd3E2AgAMBAsgBkEQQRQgBigCECAARhtqIAM2AgAgA0UNAwsgAyAGNgIYIAAoAhAiAgRAIAMgAjYCECACIAM2AhgLIAAoAhQiAkUNAiADIAI2AhQgAiADNgIYDAILIAUoAgQiAkEDcUEDRw0BQYAiIAE2AgAgBSACQX5xNgIEIAAgAUEBcjYCBCAFIAE2AgAPCyAEIAM2AgwgAyAENgIICwJAIAUoAgQiAkECcUUEQCAFQZAiKAIARgRAQZAiIAA2AgBBhCJBhCIoAgAgAWoiATYCACAAIAFBAXI2AgQgAEGMIigCAEcNA0GAIkEANgIAQYwiQQA2AgAPCyAFQYwiKAIARgRAQYwiIAA2AgBBgCJBgCIoAgAgAWoiATYCACAAIAFBAXI2AgQgACABaiABNgIADwsgAkF4cSABaiEBAkAgAkH/AU0EQCAFKAIIIgQgAkEDdiICQQN0QaAiakYaIAQgBSgCDCIDRgRAQfghQfghKAIAQX4gAndxNgIADAILIAQgAzYCDCADIAQ2AggMAQsgBSgCGCEGAkAgBSAFKAIMIgNHBEAgBSgCCCICQYgiKAIASRogAiADNgIMIAMgAjYCCAwBCwJAIAVBFGoiBCgCACICDQAgBUEQaiIEKAIAIgINAEEAIQMMAQsDQCAEIQcgAiIDQRRqIgQoAgAiAg0AIANBEGohBCADKAIQIgINAAsgB0EANgIACyAGRQ0AAkAgBSAFKAIcIgRBAnRBqCRqIgIoAgBGBEAgAiADNgIAIAMNAUH8IUH8ISgCAEF+IAR3cTYCAAwCCyAGQRBBFCAGKAIQIAVGG2ogAzYCACADRQ0BCyADIAY2AhggBSgCECICBEAgAyACNgIQIAIgAzYCGAsgBSgCFCICRQ0AIAMgAjYCFCACIAM2AhgLIAAgAUEBcjYCBCAAIAFqIAE2AgAgAEGMIigCAEcNAUGAIiABNgIADwsgBSACQX5xNgIEIAAgAUEBcjYCBCAAIAFqIAE2AgALIAFB/wFNBEAgAUEDdiICQQN0QaAiaiEBAn9B+CEoAgAiA0EBIAJ0IgJxRQRAQfghIAIgA3I2AgAgAQwBCyABKAIICyECIAEgADYCCCACIAA2AgwgACABNgIMIAAgAjYCCA8LQR8hAiAAQgA3AhAgAUH///8HTQRAIAFBCHYiAiACQYD+P2pBEHZBCHEiBHQiAiACQYDgH2pBEHZBBHEiA3QiAiACQYCAD2pBEHZBAnEiAnRBD3YgAyAEciACcmsiAkEBdCABIAJBFWp2QQFxckEcaiECCyAAIAI2AhwgAkECdEGoJGohBwJAAkBB/CEoAgAiBEEBIAJ0IgNxRQRAQfwhIAMgBHI2AgAgByAANgIAIAAgBzYCGAwBCyABQQBBGSACQQF2ayACQR9GG3QhAiAHKAIAIQMDQCADIgQoAgRBeHEgAUYNAiACQR12IQMgAkEBdCECIAQgA0EEcWoiB0EQaigCACIDDQALIAcgADYCECAAIAQ2AhgLIAAgADYCDCAAIAA2AggPCyAEKAIIIgEgADYCDCAEIAA2AgggAEEANgIYIAAgBDYCDCAAIAE2AggLC4gCAgN/AX4jAEEQayIDJAACQAJAIAEoAiwiBEEBSA0AIAEoAiBBGEkNACAAKAIkRQ0BIANB7ciFowc2AAwgAyAEQQhqIgI6AAsgAyACQQh2OgAKIAMgAkEQdjoACSADIAJBGHY6AAggACkDECADQQhqQQggACgCHCAAKAIYEQQAIgINACAAIAApAxBCCHw3AxAgAUEcakEAEBsiAkEYayABKAIsIgSsNwMAIAJBEGsgACkDECIFNwMAIAUgASgCKCAEIAAoAhwgACgCGBEEACICDQAgACAAKQMQIAE0Aix8NwMQIAFBADYCLEEAIQILIANBEGokACACDwtB1gxB2gtBuQdBjw0QAAALUgEBfyAAKAIEIQQgACgCACIAIAECf0EAIAJFDQAaIARBCHUiASAEQQFxRQ0AGiABIAIoAgBqKAIACyACaiADQQIgBEECcRsgACgCACgCHBEDAAulOQIYfwN+IAAoAgQiF0HYAG4hFCAAKAIgIgEEfyABEB5BgANqBUGAAgshFgJAAkAgF0HYAE8EQCAUQQEgFEEBSxshBgNAIAAoAgAgAkHYAGxqIgcoAkQhBCAHKAI4IQMgBygCICEBIAAgBxAwIgcNAiADIBZqIAFBBXRBGG5qIARqQYAEaiEWIAJBAWoiAiAGRw0ACwsgFhAYIgpFBEBBfg8LIAAoAiRFBEAgACkDECEZIApBADoAAiAKQQA7AQACfyAZQpeAgIAQWQRAIApB9AA6AAcgCkGB2pGLBjYAAyAKIBlCGH0iG0IwiDwACSAKIBtCOIg8AAggG0IoiCEZIBtCIIghGiAbQhCIpyECIBtCGIinIQQgG6chAyAbQgiIpwwBCyAKQeUAOgAHIApBiMzJqwY2AAMgCiAZQiB9IhpCEIg8AAkgCiAaQhiIPAAIIBpCCIghGUH0ACEDQeQAIQJB7QAhBEHhAAshASAKIAM6AA8gCiABOgAOIAogAjoADSAKIAQ6AAwgCiAaPAALIAogGTwACkIYIApBECAAKAIcIAAoAhgRBAAiBw0BC0IAIRogCkIANwMQIApB7eyhowY2AgwgCkHt3r2zBzYCBCAKQQA2AhggCkEIaiEHIBdB2ABJIgYEfyAKQRxqBSAAKAIAIgUoAiAiAUEYTwRAIAUoAhwhAiABQRhuIgFBA3EhAwJAIAFBAWtBA0kEQEEAIQFBACEEDAELIAFB/P///wBxIQtBACEBQQAhBANAIAIgAUEDckEYbGooAhAgAiABQQJyQRhsaigCECACIAFBAXJBGGxqKAIQIAIgAUEYbGooAhAgBGpqamohBCABQQRqIQEgC0EEayILDQALCyADBEADQCACIAFBGGxqKAIQIARqIQQgAUEBaiEBIANBAWsiAw0ACwsgBK1C6Ad+IRoLIAU1AgwhGSAKQYCAjMB+NgIcIAogGiAZgCIZPAAjIAogGUIIiDwAIiAKIBlCEIg8ACEgCiAZQhiIPAAgIApBJGoLIgFCADcABSABQQE6AAQgAUGAAjYAACABQgA3ABIgAUEBOgARIAFCADcAIiABQQE6ACEgAUIANwAxIAFBwAA6ADAgAUEANgANIAFCADcAGSABQgA3ACggAUIANwA5IAFCADcAQSABQQA2AEggASAUQQFqIgNBGHQgA0EIdEGAgPwHcXIgA0EIdkGA/gNxIANBGHZycjYATCAKIAFB0ABqIgUgB2siAToACyAKIAFBCHY6AAogCiABQRB2OgAJIAogAUEYdjoACCAGRQRAIBRBASAUQQFLGyEYA0AgACgCACATQdgAbGoiCCgCHCENAkACQAJAIAgoAiAiBkEYTwRAIAZBGG4iAUEDcSEDQQAhAkEAIQQgAUEBa0EDTwRAIAFB/P///wBxIQsDQCANIAJBA3JBGGxqKAIQIA0gAkECckEYbGooAhAgDSACQQFyQRhsaigCECANIAJBGGxqKAIQIARqampqIQQgAkEEaiECIAtBBGsiCw0ACwsgAwRAA0AgDSACQRhsaigCECAEaiEEIAJBAWohAiADQQFrIgMNAAsLQQAhCyAAKAIoDQEgBkEYbiELIAZBF0sNAQwCC0EAIQRBACELIAAoAihFDQELQe7qvZsHIQJBsQohA0EAIQxBfyEHAkACQAJAIAgoAggOAwIAAQcLQeXIpbMHIQJBpAohAwwBC0Ht5pW7BiECQQAhA0EBIQwLIAVBADYAICAFQgA3ABQgBUL01qGjhoCAgAc3AAwgBUH05IXbBjYABCAFIBNBAWoiEzoAHyAFIBNBCHY6AB4gBSATQRB2OgAdIAUgE0EYdjoAHCAFIAStQugHfiIaIAg1AgyAQhiIPAAkIAUgGiAINQIMgEIQiDwAJSAFIBogCDUCDIBCCIg8ACYgCDUCDCEZIAVBwAA2AFggBUIANwBQIAVCADcASiAFQgA3ACggBUEANgAwIAVCADcAOiAFQQE6ADkgBUEANgA1IAVBAToANCAFQgA3AEEgBUEBOgBJIAUgGiAZgDwAJwJAAkACQCAIKAIIDgMAAQABCyAFQgA3AFwMAQsgBSAIKAIUQQh2OgBcIAgoAhQhASAFQQA7AF4gBSABOgBdIAUgCCgCGEEIdjoAYCAIKAIYIQEgBUEAOwBiIAUgAToAYQsgBUIANwB0IAVB7cihowY2AHAgBUHtyKWLBjYAaCAFQYCAgOAFNgAIIAVBADYAfCAFIAgtAA86AIABIAUgCC8BDjoAgQEgBSAIKAIMQQh2OgCCASAIKAIMIQEgBSAEOgCHASAFIARBCHY6AIYBIAUgBEEQdjoAhQEgBSAEQRh2OgCEASAFIAE6AIMBIAgtAAQhBiAILQAFIQEgCC0ABiEEIAVBADsAigEgBUIANwCgASAFIAI6AJ8BIAUgAkEIdjoAngEgBSACQRB2OgCdASAFIAJBGHY6AJwBIAVCADcAlAEgBUHoyLGTBzYAkAEgBUGAgICAAjYAbCAFQQA2AKgBIAUgAUEfcUEFdCIBIARBH3FyOgCJASAFIAEgBkEfcUEKdHJBCHY6AIgBIAVBjAFqIQQCQCAMRQRAIAVBrAFqIQxBACECIAMQHkEASA0BA0AgDCACIANqLQAAOgAAIAxBAWohDCADEB4gAkohASACQQFqIQIgAQ0ACwwBCyAFQQA2AKwBIAVBsAFqIQwLIAUgDCAEayIBQRh0IAFBCHRBgID8B3FyIAFBCHZBgP4DcSABQRh2cnI2AIwBIAxB7dK5swY2AAQgCCgCCCICBH8gDEEIagUgDEHkADoADyAMQZDmtcMGNgALIAxCADcAECAMQQA6AAogDEEAOwAIIAgoAgghAiAMQRhqCyEJIAJBAUYEQCAJQQE6AAsgCUEAOwAJIAlB7dCRAzYABSAJQZTsATsAAyAJQgA3AAwgCUEAOgACIAlBADsAACAJQRRqIQkLIAlBADYAECAJQvXksYOCgICAATcAHCAJQQE6ABcgCUGAgIDgADYAGCAJQoCAgODBzNyy5gA3AAggCUHz6InjBjYAKCAJQoCAgKDCrJq35gA3AAAgCULz6M2jBjcAMCAJQQE6ADsgCUEANgATIAlBADYANyAJQTxqIQFB4QAhAgJAAkACQCAIKAIIIgQOAwECAAILQfMAIQILIAlBADYARCAJIAI6AEMgCUE0OgBCIAlB7eABOwBAIAlBAToASyAJQQA2AEcgCCgCCAR/IAlBzABqBSAJQgA3AEwgCSAIKAIUQQh2OgBUIAgoAhQhAyAJQQA2AFggCUGAIDsAViAJIAM6AFUgCSAIKAIMQQh2OgBcIAgoAgwhAyAJQQA7AF4gCSADOgBdIAlB4ABqCyIRQuXmkZsHNwAEAkAgCCgCOCISQQFIBEAgEUEMaiECDAELQQEhAkEBIQ4gEkECayIHAn8gEkGCAUgiEEUEQCASIAdB/gEgB0H+AUgba0H8AGpB/wBuQQJqIQ4LIA4LaiIDQQ5qIQYgA0HyAEgiD0UEQCADIAZB/gEgBkH+AUgba0GMAWpB/wBuQQJqIQILIBFBAzoADCARQQ1qIQMCfyACIAZqIgRB/ABIBEAgBEEEagwBCyADQf8BIAIgDmogEmoiAiACQRBqIgNB/gEgA0H+AUgba0GOAWpB/wBuIgRBAWoQHCAEIBFqQQ5qIQMgAiAEQYF/bGpB7wBrCyECIANBgICAIDYAASADIAI6AAAgA0EFaiECIA9FBEAgAkH/ASAOIBJqIgYgBkEMaiIEQf4BIARB/gFIG2tBigFqQf8AbiIEQQFqEBwgAyAEakEGaiECIAYgBEGBf2xqQfMAayEGCyACIAY6AAAgAkGAf0EUIAgoAggiAxs6AAIgAkFQQcAAIAMbOgABIAIgCCgCFEGAMGxBE3Y6AAMgCCgCFCEDIAJCADcABSACQYAKOwANIAIgA0GAMGxBC3Y6AAQgAkEPaiEDIBBFBEAgA0H/ASASIAdB/gEgB0H+AUgba0H8AGpB/wBuIgRBAWoQHCASIARBgX9sakGBAWshByACIARqQRBqIQMLIAMgBzoAACADQQFqIQIgB0EBSA0AIAdBA3EhBkEAIQQgB0EBa0EDTwRAIAdBfHEhDkEAIQcDQCACIAgoAjQgB0ECcmotAAA6AAAgAiAIKAI0IAdBA3JqLQAAOgABIAIgB0EEaiIEIAgoAjRqLQAAOgACIAIgByAIKAI0ai0ABToAAyACQQRqIQIgBCEHIA5BBGsiDg0ACwsgBkUNAANAIAIgBCAIKAI0ai0AAjoAACACQQFqIQIgBEEBaiEEIAZBAWsiBg0ACwsgESACIBFrIgNBGHQgA0EIdEGAgPwHcXIgA0EIdkGA/gNxIANBGHZycjYAACAJIAIgAWsiAToAPyAJIAFBCHY6AD4gCSABQRB2OgA9IAkgAUEYdjoAPCAIKAIIIQQgAiEBCyAJQSxqIQ4CQCAEQQFHBEAgASEGDAELIAEhBgJAIAgoAgAiEEEhaw4DAAEAAQtBACECQQAhAyAIKAI4Ig9BA04EQCAIKAI0IQdBACEEA0AgBCAEIAdqIgYtAABBCHQgBi0AAXJqIgZBAmohBCADQQFqIQMgBkEEaiAPSA0ACwsCQCAIKAJEIg9BA0gEQEEAIQQMAQsgCCgCQCEHQQAhBANAIAIgAiAHaiIGLQAAQQh0IAYtAAFyaiIGQQJqIQIgBEEBaiEEIAZBBGogD0gNAAsLIAhBQGshESABQQA2AAggAUExOgAHIAFB9sYBOwAFIAFCADcAECABQQE6AA8gAUEANgALIAFCADcAGCABQeEAQegAIBBBIUYbOgAEIAEgCCgCFEEIdjoAICABIAgoAhQ6ACEgASAIKAIYQQh2OgAiIAgoAhghBiABQf8BOgBVIAFBmP4DOwBTIAFBADoAUiABQgA3AEogAUIANwBCIAFCADcAOiABQgA3ADIgAUEANgAqIAFBgJABOwAoIAFBgJABNgAkIAEgBjoAIyABQQA2AC0gAUEBOgAxIAFB1gBqIRICQCAIKAIAQSFGBEAgAUEBOgBeIAFB4eyNmwQ2AFogASAIKAI0LQADOgBfIAEgCCgCNC0ABDoAYCAIKAI0LQAFIQYgASADQeABcjoAYyABQf8BOgBiIAEgBjoAYSABQeQAaiECQQAhAyAIKAI4QQFOBEADQCACIAgoAjQgA2otAAA6AAAgAkEBaiECIANBAWoiAyAIKAI4SA0ACwsgAiAEOgAAIAJBAWohBkEAIQIgCCgCREEBSA0BA0AgBiARKAIAIAJqLQAAOgAAIAZBAWohBiACQQFqIgIgCCgCREgNAAsMAQtBACEHQQAhFSAIKAJEIhBBA04EQCARKAIAIQ9BACECA0AgAiACIA9qIgYtAABBCHQgBi0AAXJqIgZBAmohAiAVQQFqIRUgBkEEaiAQSA0ACwsgASAVOgB3IAEgFUEIdjoAdiABQaABOgB1IAFBgwY7AHMgAULwgfDnj58+NwBrIAFBADsAaSABQgA3AGEgAUHgADoAYCABQYECOwBeIAFB6OyNmwQ2AFogAUH4AGohAiAIKAJQQQFOBEADQCACIAgoAkwgB2otAAA6AAAgAkEBaiECIAdBAWoiByAIKAJQSA0ACwsgAiADOgACIAJBoQE6AAAgAiADQQh2OgABIAJBA2ohAkEAIQMgCCgCOEEBTgRAA0AgAiAIKAI0IANqLQAAOgAAIAJBAWohAiADQQFqIgMgCCgCOEgNAAsLIAIgBDoAAiACQaIBOgAAIAIgBEEIdjoAASACQQNqIQZBACECIAgoAkRBAUgNAANAIAYgESgCACACai0AADoAACAGQQFqIQYgAkEBaiICIAgoAkRIDQALCyABIAYgAWsiAzoAAyABIANBCHY6AAIgASADQRB2OgABIAEgA0EYdjoAACASIAYgEmsiAUEYdCABQQh0QYCA/AdxciABQQh2QYD+A3EgAUEYdnJyNgAACyAJIAYgDmsiAUEYdCABQQh0QYCA/AdxciABQQh2QYD+A3EgAUEYdnJyNgAsIAZCADcACCAGQfPo0ZsHNgAEIAtBAWshECAGQRBqIQJBASEEQQAhD0EAIQ5BACEDIAsEQANAAkACQCADIBBGBEAgA0EBaiEHDAELIANBAWohByANIANBGGxqIgEoAhAgASgCKEYNAQsgAiAEQQh0QYCA/AdxIARBGHRyIARBCHZBgP4DcSAEQRh2cnI2AAAgAiANIANBGGxqIgEtABM6AAQgAiABLwESOgAFIAIgASgCEEEIdjoABiACIAEoAhA6AAcgDkEBaiEOIAJBCGohAkEAIQQLIARBAWohBCAHIgMgC0cNAAsLIAYgAiAGayIBOgADIAYgAUEIdjoAAiAGIAFBEHY6AAEgBiABQRh2OgAAIAYgDkEIdEGAgPwHcSAOQRh0ciAOQQh2QYD+A3EgDkEYdnJyNgAMIAJC8+jNmwY3AAQgACgCKCEBIAJBADsADCABBH8gAkEQagUgAkGAgIAINgAYIAJCgICAiICAgIABNwAQQQEhDyACQRxqCyEHIAIgDzoAD0EAIQMgAkEAOgAOIAIgByACayIBOgADIAIgAUEIdjoAAiACIAFBEHY6AAEgAiABQRh2OgAAIAcgCzoAEyAHIAtBCHYiAjoAEiAHIAtBEHYiBjoAESAHIAtBGHYiAToAECAHQgA3AAggB0Hz6M3TBzYABCAHQRRqIQQgCwRAA0AgBCANIANBGGxqIg8pAwBCGIg8AAAgBCAPKQMAQhCIPAABIAQgDykDAEIIiDwAAiAEIA8pAwA8AAMgBEEEaiEEIANBAWoiAyALRw0ACwsgByAEIAdrIgNBGHQgA0EIdEGAgPwHcXIgA0EIdkGA/gNxIANBGHZycjYAAAJAAkAgCwRAIA0gEEEYbGopAwhC/////w9WDQELIAQgCzoADyAEIAI6AA4gBCAGOgANIAQgAToADCAEQvPojfsGNwAEIARBEGohAkEAIQcgC0UNAQNAIAIgDSAHQRhsaiIBKQMIQhiIPAAAIAIgASkDCEIQiDwAASACIAEpAwhCCIg8AAIgAiABKQMIPAADIAJBBGohAiAHQQFqIgcgC0cNAAsMAQsgBCALOgAPIAQgAjoADiAEIAY6AA0gBCABOgAMIARC497ZoQM3AAQgBEEQaiECQQAhBwNAIAIgDSAHQRhsaiIBMQAPPAAAIAIgATMBDjwAASACIAEpAwhCKIg8AAIgAiABNQIMPAADIAIgASkDCEIYiDwABCACIAEpAwhCEIg8AAUgAiABKQMIQgiIPAAGIAIgASkDCDwAByACQQhqIQIgB0EBaiIHIAtHDQALCyAEIAIgBGsiAUEYdCABQQh0QYCA/AdxciABQQh2QYD+A3EgAUEYdnJyNgAAAkAgC0UEQEEAIQMMAQsgC0EDcSEHQQAhA0EAIQQgEEEDTwRAIAtB/P///wBxIQYDQCADIA0gBEEYbGooAhRBAEdqIA0gBEEBckEYbGooAhRBAEdqIA0gBEECckEYbGooAhRBAEdqIA0gBEEDckEYbGooAhRBAEdqIQMgBEEEaiEEIAZBBGsiBg0ACwsgB0UNAANAIAMgDSAEQRhsaigCFEEAR2ohAyAEQQFqIQQgB0EBayIHDQALCyAFQeQAaiEPIAlBJGohBgJAIAMgC0YEQCACIQMMAQsgAiADOgAPIAJC8+jNmwc3AAQgAiADQQh2OgAOIAIgA0EQdjoADSACIANBGHY6AAwgAkEQaiEDAkAgC0UNACALQQFxIQECQCAQRQRAQQAhBAwBCyALQf7///8AcSEHQQAhBANAIARBAXIhECANIARBGGxqKAIUBEAgAyAQOgADIAMgBEEIdjoAAiADIARBEHY6AAEgAyAEQRh2OgAAIANBBGohAwsgBEECaiEEIA0gEEEYbGooAhQEQCADIARBCHRBgID8B3EgBEEYdHIgBEEIdkGA/gNxIARBGHZycjYAACADQQRqIQMLIAdBAmsiBw0ACwsgAUUNACANIARBGGxqKAIURQ0AIAMgBEEBaiIBQRh0IAFBCHRBgID8B3FyIAFBCHZBgP4DcSABQRh2cnI2AAAgA0EEaiEDCyACIAMgAmsiAUEYdCABQQh0QYCA/AdxciABQQh2QYD+A3EgAUEYdnJyNgAACyAJIAMgBmsiAUEYdCABQQh0QYCA/AdxciABQQh2QYD+A3EgAUEYdnJyNgAkIAwgAyAMayIBOgADIAwgAUEIdjoAAiAMIAFBEHY6AAEgDCABQRh2OgAAIAUgAyAPayIBOgBnIAUgAUEIdjoAZiAFIAFBEHY6AGUgBSABQRh2OgBkIAUgAyAFayIBOgADIAUgAUEIdjoAAiAFIAFBEHY6AAEgBSABQRh2OgAAIAMhBQwBCyATQQFqIRMLIBMgGEcNAAsLAkAgACgCIEUEQCAFIQQMAQsgBUHtyKWTBzYAJCAFQgA3ABwgBULtytGLBjcADCAFQfXI0YsGNgAEIAVCgICAoIKNmbbyADcAFCAFQgA3AChBACEBIAVBADYAVCAFQenYzaMHNgA8IAVBqce1owc2AEQgBULkwtGLhoCAgAE3AEwgBUIANwAwIAVB2ABqIQQgACgCICICEB5BAE4EQANAIAQgASACai0AADoAACAEQQFqIQQgACgCICICEB4gAUohAyABQQFqIQEgAw0ACwsgBSAEIAVBQGtrIgc6AEMgBSAEIAVBOGprIgY6ADsgBSAEIAVBCGprIgM6AAsgBSAEIAVrIgE6AAMgBSAHQQh2OgBCIAUgB0EQdjoAQSAFIAdBGHY6AEAgBSAGQQh2OgA6IAUgBkEQdjoAOSAFIAZBGHY6ADggBSADQQh2OgAKIAUgA0EQdjoACSAFIANBGHY6AAggBSABQQh2OgACIAUgAUEQdjoAASAFIAFBGHY6AAAgBSAEIAVByABqayIBQRh0IAFBCHRBgID8B3FyIAFBCHZBgP4DcSABQRh2cnI2AEgLAkAgACgCKEUEQCAEIQEMAQtBACEDAkAgACgCACIGKAIgIgFBGEkNACAGKAIcIQYgAUEYbiIBQQNxIQsCQCABQQFrQQNJBEBBACEBDAELIAFB/P///wBxIQVBACEBA0AgBiABQQNyQRhsaigCECAGIAFBAnJBGGxqKAIQIAYgAUEBckEYbGooAhAgBiABQRhsaigCECADampqaiEDIAFBBGohASAFQQRrIgUNAAsLIAtFDQADQCAGIAFBGGxqKAIQIANqIQMgAUEBaiEBIAtBAWsiCw0ACwsgBCADOgAXIARC7cqhowY3AAwgBELt7JXDh4CAgBA3AAQgBCADQQh2OgAWIAQgA0EQdjoAFSAEIANBGHY6ABQgBEEYaiEBIBdB2ABPBEAgFEEBIBRBAUsbIQNBACECA0AgAUGAgIAINgAQIAFBADYACCABQgA3ABQgAUKAgICAws7csvgANwAAIAEgAkEBaiICOgAPIAFBADYAHCABIAJBCHY6AA4gASACQRB2OgANIAEgAkEYdjoADCABQSBqIQEgAiADRw0ACwsgBCABIARrIgNBGHQgA0EIdEGAgPwHcXIgA0EIdkGA/gNxIANBGHZycjYAAAsgCiABIAprIgFBGHQgAUEIdEGAgPwHcXIgAUEIdkGA/gNxIAFBGHZycjYCACABIBZLDQEgACkDECAKIAEgACgCHCAAKAIYEQQAIQcgACAAKQMQIAGsfDcDECAKEBcLIAcPC0HCCUHaC0HGDUGYCBAAAAsDAAELuAEBAX8gAUEARyECAkACQAJAIABBA3FFDQAgAUUNAANAIAAtAABFDQIgAUEBayIBQQBHIQIgAEEBaiIAQQNxRQ0BIAENAAsLIAJFDQELAkAgAC0AAEUNACABQQRJDQADQCAAKAIAIgJBf3MgAkGBgoQIa3FBgIGChHhxDQEgAEEEaiEAIAFBBGsiAUEDSw0ACwsgAUUNAANAIAAtAABFBEAgAA8LIABBAWohACABQQFrIgENAAsLQQALygkCBH8BfiMAQYAHayIGJABBfyEHAkAgAEUNACACRQ0AIAAoAgAhCAJAIAAoAigEQCAAIAAoAiwiCUEBaiIHNgIsIAlFBEAgABAyIgcNAyAAKAIsIQcgACgCACEICyAGQu3MoaMGNwIMIAZB9OSFswY2AhwgBkLt3r2zhoCAgBA3AgQgBiAHOgAXIAYgB0EIdjoAFiAGIAdBEHY6ABUgBiAHQRh2OgAUIAggAUHYAGxqIgcoAgghCCAGQfTMoaMGNgIkIAZBgAQ7AShBACEJIAZBADoAKiAGQSBBCCAIQQFGGzoAKyAGIAFBAWoiAToALyAGIAFBCHY6AC4gBiABQRB2OgAtIAYgAUEYdjoALAJ/IAcoAghBAUYEQCAGQQE6ADBBACEIQQEMAQsgBiAEQRh2OgAwIARBCHYhCSAEIQggBEEQdgshASAGIAg6ADMgBiAJOgAyIAYgAToAMSAGQYCAgKABNgIgAn8gBygCCEUEQCAGQYCAgAg2AkAgBkL05NXzhoCAgQE3AzggBiADQRh2OgBIIAZByQBqIQdBzAAhBEHKACEFQcsADAELIAZBAzoAPiAGQQA7ATwgBkH05NXzBjYCOCAFQQFGBEAgBkECNgJIIAZBAToAQyAGQQU2AD8gBiADQRh2OgBQIAYgBDoATyAGIARBCHY6AE4gBiAEQRB2OgBNIAYgBEEYdjoATCAGQdEAaiEHQdQAIQRB0gAhBUHTAAwBCyAGQQE6AEMgBkEBNgA/IAYgA0EYdjoATCAGIAQ6AEsgBiAEQQh2OgBKIAYgBEEQdjoASSAGIARBGHY6AEggBkHNAGohB0HQACEEQc4AIQVBzwALIQEgByADQRB2OgAAIAUgBmogA0EIdjoAACABIAZqIAM6AAAgBiAEQTRrOgA3IAZBADoANiAGQQA7ATQgBiAEQRhrOgAbIAZBADoAGiAGQQA7ARggBiAEQQhqOgBHIAZBADoARiAGQQA7AUQgBiAEOgADIAZBADoAAiAGQQA7AQAgACkDECAGIAQgACgCHCAAKAIYEQQAIgcNAiAAIAApAxAgBK18Igo3AxAgBkHtyIWjBzYABCAGIANBCGoiAToAAyAGIAFBCHY6AAIgBiABQRB2OgABIAYgAUEYdjoAACAKIAZBCCAAKAIcIAAoAhgRBAAiBw0CIAAgACkDEEIIfCIKNwMQIAogAiADIAAoAhwgACgCGBEEACIHDQIgACAAKQMQIAOsfDcDEAwBCyAAKAIkIQcCQAJAAkAgBUECRwRAIAcEQCAAIAggAUHYAGxqEDAiBw0GCyAERQRAIAggAUHYAGxqKAIQIQQLIAApAxAhCiAIIAFB2ABsakEcakEYEBsiBw0BQX4hBwwFCyAHDQFBfiEHIAggAUHYAGxqIgEoAiAiBEEYSQ0EIAEoAhwgBGpBGGsiASABKQMAIAOsfDcDAAwCCyAHIAQ2ABAgByAKNwAIIAcgA6w3AAAgByAFQQFGNgAUIAAoAiRFDQELIAggAUHYAGxqQShqIAMQGyIARQRAQX4hBwwDCyAAIAIgAxAaGgwBCyAAKQMQIAIgAyAAKAIcIAAoAhgRBAAiBw0BIAAgACkDECADrHw3AxALQQAhBwsgBkGAB2okACAHCycBAX8jAEEQayIBJAAgASAANgIMQdQbQQUgASgCDBACIAFBEGokAAsnAQF/IwBBEGsiASQAIAEgADYCDEGsG0EEIAEoAgwQAiABQRBqJAALJwEBfyMAQRBrIgEkACABIAA2AgxBhBtBAyABKAIMEAIgAUEQaiQACycBAX8jAEEQayIBJAAgASAANgIMQdwaQQIgASgCDBACIAFBEGokAAsnAQF/IwBBEGsiASQAIAEgADYCDEG0GkEBIAEoAgwQAiABQRBqJAALJwEBfyMAQRBrIgEkACABIAA2AgxBjBpBACABKAIMEAIgAUEQaiQAC+kGAQF/QcgeQfcMEBVB1B5BkgtBAUEBQQAQFCMAQRBrIgAkACAAQdoKNgIMQeAeIAAoAgxBAUGAf0H/ABADIABBEGokACMAQRBrIgAkACAAQdMKNgIMQfgeIAAoAgxBAUGAf0H/ABADIABBEGokACMAQRBrIgAkACAAQdEKNgIMQeweIAAoAgxBAUEAQf8BEAMgAEEQaiQAIwBBEGsiACQAIABBsgg2AgxBhB8gACgCDEECQYCAfkH//wEQAyAAQRBqJAAjAEEQayIAJAAgAEGpCDYCDEGQHyAAKAIMQQJBAEH//wMQAyAAQRBqJAAjAEEQayIAJAAgAEHBCDYCDEGcHyAAKAIMQQRBgICAgHhB/////wcQAyAAQRBqJAAjAEEQayIAJAAgAEG4CDYCDEGoHyAAKAIMQQRBAEF/EAMgAEEQaiQAIwBBEGsiACQAIABBmgw2AgxBtB8gACgCDEEEQYCAgIB4Qf////8HEAMgAEEQaiQAIwBBEGsiACQAIABBkQw2AgxBwB8gACgCDEEEQQBBfxADIABBEGokACMAQRBrIgAkACAAQdMINgIMQcwfIAAoAgxCgICAgICAgICAf0L///////////8AEC0gAEEQaiQAIwBBEGsiACQAIABB0gg2AgxB2B8gACgCDEIAQn8QLSAAQRBqJAAjAEEQayIAJAAgAEHMCDYCDEHkHyAAKAIMQQQQDCAAQRBqJAAjAEEQayIAJAAgAEHwDDYCDEHwHyAAKAIMQQgQDCAAQRBqJABBxBZBrAwQDUGcF0HfEBANQfQXQQRBnwwQC0HQGEECQbgMEAtBrBlBBEHHDBALQYwTQbELEBMjAEEQayIAJAAgAEGaEDYCDEHkGUEAIAAoAgwQAiAAQRBqJABBgBEQO0G4EBA6QaoNEDlByQ0QOEHxDRA3QY4OEDYjAEEQayIAJAAgAEGlETYCDEH8G0EEIAAoAgwQAiAAQRBqJAAjAEEQayIAJAAgAEHDETYCDEGkHEEFIAAoAgwQAiAAQRBqJABB9A4QO0HTDhA6QbYPEDlBlA8QOEH5DxA3QdcPEDYjAEEQayIAJAAgAEG0DjYCDEHMHEEGIAAoAgwQAiAAQRBqJAAjAEEQayIAJAAgAEHqETYCDEH0HEEHIAAoAgwQAiAAQRBqJAALwQEBBH8gACgCACABQdgAbGoiASgCCEEBRgRAAkAgASgCRCIFQQNOBEAgASgCQCEGQQAhAANAIAMgACAGaiIELQAAQQh0IAQtAAFyIgdGBEAgBEECaiACIAMQIEUNAwsgACAHaiIEQQJqIQAgBEEEaiAFSA0ACwsgAUFAayIAQQIQGyIBRQ0AIAEgA0EIdCADQYD+A3FBCHZyOwAAIAAgAxAbIgBFDQAgACACIAMQGhoLDwtB3wpB2gtBoQdBpwkQAAALwQEBBH8gACgCACABQdgAbGoiASgCCEEBRgRAAkAgASgCOCIFQQNOBEAgASgCNCEGQQAhAANAIAMgACAGaiIELQAAQQh0IAQtAAFyIgdGBEAgBEECaiACIAMQIEUNAwsgACAHaiIEQQJqIQAgBEEEaiAFSA0ACwsgAUE0aiIAQQIQGyIBRQ0AIAEgA0EIdCADQYD+A3FBCHZyOwAAIAAgAxAbIgBFDQAgACACIAMQGhoLDwtB3wpB2gtBmgdBmgkQAAALBQAQDgALFwAgAa0gAq1CIIaEIAMgBCAFIAARBAALGgAgACABKAIIIAUQGQRAIAEgAiADIAQQJQsLNwAgACABKAIIIAUQGQRAIAEgAiADIAQQJQ8LIAAoAggiACABIAIgAyAEIAUgACgCACgCFBEGAAuTAgEGfyAAIAEoAgggBRAZBEAgASACIAMgBBAlDwsgAS0ANSEHIAAoAgwhBiABQQA6ADUgAS0ANCEIIAFBADoANCAAQRBqIgkgASACIAMgBCAFECQgByABLQA1IgpyIQcgCCABLQA0IgtyIQgCQCAGQQJIDQAgCSAGQQN0aiEJIABBGGohBgNAIAEtADYNAQJAIAsEQCABKAIYQQFGDQMgAC0ACEECcQ0BDAMLIApFDQAgAC0ACEEBcUUNAgsgAUEAOwE0IAYgASACIAMgBCAFECQgAS0ANSIKIAdyIQcgAS0ANCILIAhyIQggBkEIaiIGIAlJDQALCyABIAdB/wFxQQBHOgA1IAEgCEH/AXFBAEc6ADQLpwEAIAAgASgCCCAEEBkEQAJAIAEoAgQgAkcNACABKAIcQQFGDQAgASADNgIcCw8LAkAgACABKAIAIAQQGUUNAAJAIAIgASgCEEcEQCABKAIUIAJHDQELIANBAUcNASABQQE2AiAPCyABIAI2AhQgASADNgIgIAEgASgCKEEBajYCKAJAIAEoAiRBAUcNACABKAIYQQJHDQAgAUEBOgA2CyABQQQ2AiwLC4gCACAAIAEoAgggBBAZBEACQCABKAIEIAJHDQAgASgCHEEBRg0AIAEgAzYCHAsPCwJAIAAgASgCACAEEBkEQAJAIAIgASgCEEcEQCABKAIUIAJHDQELIANBAUcNAiABQQE2AiAPCyABIAM2AiACQCABKAIsQQRGDQAgAUEAOwE0IAAoAggiACABIAIgAkEBIAQgACgCACgCFBEGACABLQA1BEAgAUEDNgIsIAEtADRFDQEMAwsgAUEENgIsCyABIAI2AhQgASABKAIoQQFqNgIoIAEoAiRBAUcNASABKAIYQQJHDQEgAUEBOgA2DwsgACgCCCIAIAEgAiADIAQgACgCACgCGBEFAAsLtQQBBH8gACABKAIIIAQQGQRAAkAgASgCBCACRw0AIAEoAhxBAUYNACABIAM2AhwLDwsCQCAAIAEoAgAgBBAZBEACQCACIAEoAhBHBEAgASgCFCACRw0BCyADQQFHDQIgAUEBNgIgDwsgASADNgIgIAEoAixBBEcEQCAAQRBqIgUgACgCDEEDdGohCCABAn8CQANAAkAgBSAITw0AIAFBADsBNCAFIAEgAiACQQEgBBAkIAEtADYNAAJAIAEtADVFDQAgAS0ANARAQQEhAyABKAIYQQFGDQRBASEHQQEhBiAALQAIQQJxDQEMBAtBASEHIAYhAyAALQAIQQFxRQ0DCyAFQQhqIQUMAQsLIAYhA0EEIAdFDQEaC0EDCzYCLCADQQFxDQILIAEgAjYCFCABIAEoAihBAWo2AiggASgCJEEBRw0BIAEoAhhBAkcNASABQQE6ADYPCyAAKAIMIQYgAEEQaiIFIAEgAiADIAQQIiAGQQJIDQAgBSAGQQN0aiEGIABBGGohBQJAIAAoAggiAEECcUUEQCABKAIkQQFHDQELA0AgAS0ANg0CIAUgASACIAMgBBAiIAVBCGoiBSAGSQ0ACwwBCyAAQQFxRQRAA0AgAS0ANg0CIAEoAiRBAUYNAiAFIAEgAiADIAQQIiAFQQhqIgUgBkkNAAwCCwALA0AgAS0ANg0BIAEoAiRBAUYEQCABKAIYQQFGDQILIAUgASACIAMgBBAiIAVBCGoiBSAGSQ0ACwsLbAECfyAAIAEoAghBABAZBEAgASACIAMQJg8LIAAoAgwhBCAAQRBqIgUgASACIAMQMQJAIARBAkgNACAFIARBA3RqIQQgAEEYaiEAA0AgACABIAIgAxAxIAEtADYNASAAQQhqIgAgBEkNAAsLCzEAIAAgASgCCEEAEBkEQCABIAIgAxAmDwsgACgCCCIAIAEgAiADIAAoAgAoAhwRAwALGAAgACABKAIIQQAQGQRAIAEgAiADECYLC7UDAQV/IwBBQGoiBCQAAn9BASAAIAFBABAZDQAaQQAgAUUNABojAEFAaiIDJAAgASgCACIFQQRrKAIAIQYgBUEIaygCACEHIANBADYCFCADQbgdNgIQIAMgATYCDCADQegdNgIIQQAhBSADQRhqQQBBJxAcIAEgB2ohAQJAIAZB6B1BABAZBEAgA0EBNgI4IAYgA0EIaiABIAFBAUEAIAYoAgAoAhQRBgAgAUEAIAMoAiBBAUYbIQUMAQsgBiADQQhqIAFBAUEAIAYoAgAoAhgRBQACQAJAIAMoAiwOAgABAgsgAygCHEEAIAMoAihBAUYbQQAgAygCJEEBRhtBACADKAIwQQFGGyEFDAELIAMoAiBBAUcEQCADKAIwDQEgAygCJEEBRw0BIAMoAihBAUcNAQsgAygCGCEFCyADQUBrJABBACAFIgFFDQAaIARBCGoiA0EEckEAQTQQHCAEQQE2AjggBEF/NgIUIAQgADYCECAEIAE2AgggASADIAIoAgBBASABKAIAKAIcEQMAIAQoAiAiAEEBRgRAIAIgBCgCGDYCAAsgAEEBRgshACAEQUBrJAAgAAsKACAAIAFBABAZCwQAIAALJgEBfyMAQRBrIgEkACABIAA2AgwgASgCDCEAEDwgAUEQaiQAIAALXgEDfyMAQRBrIgEkACABIAA2AgwCfyMAQRBrIgAgASgCDDYCCCAAIAAoAggoAgQ2AgwgACgCDCIACxAeQQFqIgIQGCIDBH8gAyAAIAIQGgVBAAshACABQRBqJAAgAAsFAEGUFQsTACAAQQRqQQAgASgCBEHoFEYbC9QBAwJ/AXwBfiMAQSBrIgQkACADKQMAIQcgAigCACECIAQgASgCADYCCEHAHyAEQQhqIgUQByEBIAQgAjYCCEGoHyAFEAchAiAEIAc+AghBqB8gBEEIahAHIQMgARAGIAQgATYCCCACEAYgBCACNgIQIAMQBiAEIAM2AhggACgCBEEDQdwUIAUQFiIAQZwfIAUQCSEGIAQoAggQCCAAEAEgAxABIAIQASABEAECfyAGmUQAAAAAAADgQWMEQCAGqgwBC0GAgICAeAshASAEQSBqJAAgAQsNACAAKAIEEAEgABAXCwkAIAAoAgQQAQsaACABIAAoAgQiADYCBCABQZwTNgIAIAAQBgsiAQF/QQgQHyIBIAAoAgQiADYCBCABQZwTNgIAIAAQBiABCxUAIABBnBM2AgAgACgCBBABIAAQFwsTACAAQZwTNgIAIAAoAgQQASAACwkAIAEgABEAAAsNACABIAIgAyAAEQcAC0ABAX8jAEEQayIDJAAgAyACNgIAIAMgATYCCCADQQhqIAMgABEIACEAIAMoAgAQASADKAIIEAEgA0EQaiQAIAALphIBB39B5CEhAgJAQeQhKAIAIgFFBEBB5CEhAQwBCwNAAkAgACABKAIQIgNJBEAgASgCACIDDQEgASECDAMLIAAgA00NAiABQQRqIQIgASgCBCIDRQ0CIAIhAQsgASECIAMhAQwACwALIAIoAgAiA0UEQEEYEB8iAyAANgIQIAMgATYCCCADQgA3AgAgA0EANgIUIAIgAzYCAEHgISgCACgCACIBBH9B4CEgATYCACACKAIABSADCyEBQeQhKAIAIAEQJ0HoIUHoISgCAEEBajYCAAsgAygCFCIDKAIAIgIEQCACKAIoRQRAIAIQMhoLIAIoAiAiAQRAIAEQFwsgAigCBCIBQdgATwRAIAFB2ABuIQYDQCACKAIAIAVB2ABsaiIBIQQgASgCNCIHBEAgBxAXCyAEQgA3AjQgBEEANgI8IAEoAkAiBARAIAQQFwsgAUFAayIEQgA3AgAgBEEANgIIIAEoAhwiBARAIAQQFwsgAUIANwIcIAFBADYCJCABKAIoIgQEQCAEEBcLIAFCADcCKCABQQA2AjAgBUEBaiIFIAZHDQALCyACKAIAIgEEQCABEBcLIAIQFwsgA0EEaiIBKAIAIgIEQCACEBcLIAEoAgQiAgRAIAIQFwsgASgCCCICBEAgAhAXCyABKAIMIgIEQCACEBcLIAEoAhAiAgRAIAIQFwsgASgCFCICBEAgAhAXCyABKAIYIgIEQCACEBcLIAEoAhwiAgRAIAIQFwsgASgCICICBEAgAhAXCyABKAIkIgIEQCACEBcLIAEoAigiAgRAIAIQFwsgASgCLCICBEAgAhAXCyABKAIwIgIEQCACEBcLIAEoAjQiAgRAIAIQFwsgASgCOCICBEAgAhAXCyABKAI8IgIEQCACEBcLIAEoAkAiAgRAIAIQFwsgASgCRCICBEAgAhAXCyABKAJIIgIEQCACEBcLIAEoAkwiAgRAIAIQFwsgASgCUCICBEAgAhAXCyABKAJUIgIEQCACEBcLIAEoAlgiAgRAIAIQFwsgASgCXCICBEAgAhAXCyABKAJgIgIEQCACEBcLIAEoAmQiAgRAIAIQFwsgASgCaCICBEAgAhAXCyABKAJsIgIEQCACEBcLIAEoAnAiAgRAIAIQFwsgASgCdCICBEAgAhAXCyABKAJ4IgIEQCACEBcLIAEoAnwiAgRAIAIQFwtBACECA0AgASACQQJ0aigCgAEiBQRAIAUQFwsgAkEBaiICQYACRw0ACyABQQBBnBsQHCADEBcCQEHkISgCACIFRQ0AQeQhIQIgBSEBA0AgAiABIAEoAhAgAEkiAxshAiABIANBAnRqKAIAIgENAAsgAkHkIUYNACACKAIQIABLDQACQCACKAIEIgFFBEAgAigCCCIAKAIAIAJGDQEgAkEIaiEDA0AgAygCACIBQQhqIQMgASABKAIIIgAoAgBHDQALDAELA0AgASIAKAIAIgENAAsLIAJB4CEoAgBGBEBB4CEgADYCAAtB6CFB6CEoAgBBAWs2AgAgBSEDAn8CQCACIgUiASgCACICBEAgBSgCBCIARQ0BA0AgACIBKAIAIgANAAsLIAEoAgQiAg0AQQAhAkEBDAELIAIgASgCCDYCCEEACyEGAkAgASABKAIIIgQoAgAiAEYEQCAEIAI2AgAgASADRgRAQQAhACACIQMMAgsgBCgCBCEADAELIAQgAjYCBAsgAS0ADCEHIAEgBUcEQCABIAUoAggiBDYCCCAEIAUoAggoAgAgBUdBAnRqIAE2AgAgASAFKAIAIgQ2AgAgBCABNgIIIAEgBSgCBCIENgIEIAQEQCAEIAE2AggLIAEgBS0ADDoADCABIAMgAyAFRhshAwsCQCAHRQ0AIANFDQAgBgRAA0AgAC0ADCECAkAgACAAKAIIIgEoAgBHBEACQAJAAkACQAJ/IAJFBEAgAEEBOgAMIAFBADoADCABIAEoAgQiAigCACIENgIEIAQEQCAEIAE2AggLIAIgASgCCDYCCCABKAIIIgQgBCgCACABR0ECdGogAjYCACACIAE2AgAgASACNgIIIAAgAyADIAAoAgAiAEYbIQMgACgCBCEACyAAKAIAIgELBEAgAS0ADEUNAQsgACgCBCICBEAgAi0ADEUNAgsgAEEAOgAMAkAgAyAAKAIIIgBGBEAgAyEADAELIAAtAAwNBgsgAEEBOgAMDAgLIAAoAgQiAkUNAQsgAi0ADA0AIAAhAQwBCyABQQE6AAwgAEEAOgAMIAAgASgCBCICNgIAIAIEQCACIAA2AggLIAEgACgCCDYCCCAAKAIIIgIgAigCACAAR0ECdGogATYCACABIAA2AgQgACABNgIIIAAhAgsgASABKAIIIgAtAAw6AAwgAEEBOgAMIAJBAToADCAAIAAoAgQiASgCACICNgIEIAIEQCACIAA2AggLIAEgACgCCDYCCCAAKAIIIgIgAigCACAAR0ECdGogATYCACABIAA2AgAgACABNgIIDAQLIAJFBEAgAEEBOgAMIAFBADoADCABIAAoAgQiAjYCACACBEAgAiABNgIICyAAIAEoAgg2AgggASgCCCICIAIoAgAgAUdBAnRqIAA2AgAgACABNgIEIAEgADYCCCAAIAMgASADRhshAyABKAIAIQALAkACQCAAKAIAIgJFDQAgAi0ADA0AIAAhAQwBCwJAIAAoAgQiAQRAIAEtAAxFDQELIABBADoADCAAKAIIIgAtAAxBACAAIANHGw0CIABBAToADAwFCyACBEAgAi0ADEUEQCAAIQEMAgsgACgCBCEBCyABQQE6AAwgAEEAOgAMIAAgASgCACICNgIEIAIEQCACIAA2AggLIAEgACgCCDYCCCAAKAIIIgIgAigCACAAR0ECdGogATYCACABIAA2AgAgACABNgIIIAAhAgsgASABKAIIIgAtAAw6AAwgAEEBOgAMIAJBAToADCAAIAAoAgAiASgCBCICNgIAIAIEQCACIAA2AggLIAEgACgCCDYCCCAAKAIIIgIgAigCACAAR0ECdGogATYCACABIAA2AgQgACABNgIIDAMLIAAoAggiASABKAIAIABGQQJ0aigCACEADAALAAsgAkEBOgAMCyAFEBcLC1wBAX8jAEEQayIEJAAgBCABNgIMIAQgAjYCCCAEIABC/////w+DNwMAIAMoArgbIgFFBEAQPwALIAEgBEEMaiAEQQhqIAQgASgCACgCGBEKACEBIARBEGokACABC6YMAwl/AnwBfSMAQSBrIgIkACAAKAIAQdQLEAUiAxAEIQcgAxABIAdBqB8gAhAJIQwgAigCABAIIAcQASAAKAIAQcUIEAUiAxAEIQcgAxABIAdBqB8gAhAJIQsgAigCABAIIAcQASAAKAIAQb4JEAUiAxAEIQQgAxABAn8gDEQAAAAAAADwQWMgDEQAAAAAAAAAAGZxBEAgDKsMAQtBAAshCgJ/IAtEAAAAAAAA8EFjIAtEAAAAAAAAAABmcQRAIAurDAELQQALIQdDAADwQSENIAQQDwRAIAAoAgBBvgkQBSIDEAQhCCADEAEgCEHkHyACEAkhCyACKAIAEAggCBABIAu2IQ0LIAQQASAAKAIAQYQLEAUiAxAEIQQgAxABIAQQASAAKAIAQckLEAUiAxAEIQggAxABIAgQASAAKAIAQYoNEAUiABAEIQkgABABIAkQAUHAGxAYIgYgDTgCoBsgASgCABAGIAIgASgCADYCAEGMEyACEAchAEEIEB8iASAANgIEIAFBnBM2AgAgAiABNgIQIwBBEGsiAyQAAkAgBkGoG2oiBSACRg0AIAIgAigCECIBRgRAIAUgBSgCEEYEQCABIAMgASgCACgCDBECACACKAIQIgAgACgCACgCEBEAACACQQA2AhAgBSgCECIAIAIgACgCACgCDBECACAFKAIQIgAgACgCACgCEBEAACAFQQA2AhAgAiACNgIQIAMgBSADKAIAKAIMEQIAIAMgAygCACgCEBEAACAFIAU2AhAMAgsgASAFIAEoAgAoAgwRAgAgAigCECIAIAAoAgAoAhARAAAgAiAFKAIQNgIQIAUgBTYCEAwBCyAFKAIQIgAgBUYEQCAAIAIgACgCACgCDBECACAFKAIQIgAgACgCACgCEBEAACAFIAIoAhA2AhAgAiACNgIQDAELIAIgADYCECAFIAE2AhALIANBEGokAAJAAkAgAigCECIAIAJGBEBBBCEBDAELQQUhASAARQ0BCyAAIAAoAgAgAUECdGooAgARAAALQQAQAUEAEAFB2CFB2CEoAgAiBUEBajYCAEHkISEBAkBB5CEoAgAiAEUEQEHkISEADAELA0ACQCAAKAIQIgMgBUsEQCAAKAIAIgMNASAAIQEMAwsgAyAFTw0CIABBBGohASAAKAIEIgNFDQIgASEACyAAIQEgAyEADAALAAsgASgCACIDRQRAQRgQHyIDIAU2AhAgAyAANgIIIANCADcCACADQQA2AhQgASADNgIAQeAhKAIAKAIAIgAEf0HgISAANgIAIAEoAgAFIAMLIQBB5CEoAgAgABAnQeghQeghKAIAQQFqNgIACyADIAY2AhQgAkGACDYCHCACQRg2AhggAkIANwMAAkAgBigCuBsiAEUNAEEAIQECQCAAIAJBHGogAkEYaiACIAAoAgAoAhgRCgANAEEwEBgiAEUNACAAQQA2AiwgACAEQQNGIgE2AiggAEEANgIgIAAgBjYCHCAAQQE2AhggAEIYNwMQIAAgASAIQQNGciIBNgIkIAFFBEAgAkGACDYCHCACQQg2AhggAkIYNwMAIAYoArgbIgFFDQIgASACQRxqIAJBGGogAiABKAIAKAIYEQoABEAgABAXQQAhAQwCCyAAQig3AxALIABCgICAgIAWNwIEIABBsAEQGDYCACAAIQELIAlBA0YhCCAGIAE2AgAgASgCBEHYAG4hA0F+IQACQCABQdgAEBsiBEUNACAEQgA3AiggBEKAgICAgCA3AiAgBCAHNgIYIAQgCjYCFCAEQQA2AhAgBEKBgICAgPLXADcCCCAEQfXckQM2AgQgBEIANwJQIARCADcCSCAEQUBrQgA3AgAgBEIANwI4IARCADcCMCAEQSNBISAJQQNGGzYCACAEQYACEBgiBzYCHCAHRQ0AIARCADcCKCAEQQA2AkggBEIANwJAIARCADcCOCAEQgA3AjAgAyEACyAGQZwbakEBNgIAIAZBlBtqQoGAgIAQNwIAIAZBkBtqIAg2AgAgBkGMG2ogCDYCACAGQYQbaiABNgIAIAZBiBtqIAA2AgAgBkEEakEAQYAbEBwgAkEgaiQAIAUPCxA/AAuXAgIDfwF9QeQhIQUCQEHkISgCACIDRQRAQeQhIQMMAQsDQAJAIAAgAygCECIESQRAIAMoAgAiBA0BIAMhBQwDCyAAIARNDQIgA0EEaiEFIAMoAgQiBEUNAiAFIQMLIAMhBSAEIQMMAAsACyAFKAIAIgRFBEBBGBAfIgQgADYCECAEIAM2AgggBEIANwIAIARBADYCFCAFIAQ2AgBB4CEoAgAoAgAiAAR/QeAhIAA2AgAgBSgCAAUgBAshA0HkISgCACADECdB6CFB6CEoAgBBAWo2AgALIAQoAhQiA0EEaiEAQwDIr0cgAyoCoBuVIgZDAACAT10gBkMAAAAAYHEEQCAAIAEgAiAGqRAuDwsgACABIAJBABAuCw0AQeAhQeQhKAIAECgLC+gZAgBBgwgL0xkYZnR5cG1wNDIAAAAAbXA0Mmlzb21tcDRlX2ZsdXNoX2luZGV4AHVuc2lnbmVkIHNob3J0AHVuc2lnbmVkIGludABoZWlnaHQAZmxvYXQAdWludDY0X3QAc2hvd19iaXRzAGgyNjRlX2JzX3B1dF9iaXRzAGgyNjRlX2JzX2dldF9wb3NfYml0cwBNUDRFX3NldF92cHMATVA0RV9zZXRfc3BzAE1QNEVfc2V0X3BwcwBwYXRjaF9wcHMAZnBzACh1bnNpZ25lZCkocCAtIGJhc2UpIDw9IGluZGV4X2J5dGVzAChoLT5jYXBhY2l0eSAtIGgtPmJ5dGVzKSA+PSBieXRlcwBmaW5hbGl6ZV9tdXhlcgBjcmVhdGVfbXV4ZXIAVmlkZW9IYW5kbGVyAFNvdW5kSGFuZGxlcgBwYXRjaF9zbGljZV9oZWFkZXIAdW5zaWduZWQgY2hhcgB0ci0+aW5mby50cmFja19tZWRpYV9raW5kID09IGVfdmlkZW8AZnJhZ21lbnRhdGlvbgBib29sAG1pbmltcDRfdmVjdG9yX2FsbG9jX3RhaWwAZW1zY3JpcHRlbjo6dmFsAG11eF9uYWwAc2VxdWVudGlhbAB3aWR0aAAvVXNlcnMvbWFyY29mdWdhcm8vQ29kZS9tcDQtd2FzbS9zcmMvbWluaW1wNC9taW5pbXA0LmgAdW5zaWduZWQgbG9uZwBzdGQ6OndzdHJpbmcAc3RkOjpzdHJpbmcAc3RkOjp1MTZzdHJpbmcAc3RkOjp1MzJzdHJpbmcAbXV4LT5zZXF1ZW50aWFsX21vZGVfZmxhZwBkb3VibGUAdm9pZABjaGFuZ2Vfc3BzX2lkAGhldmMAd3JpdGVfcGVuZGluZ19kYXRhAGgtPmRhdGEAZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZmxvYXQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBjaGFyPgBzdGQ6OmJhc2ljX3N0cmluZzx1bnNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8bG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgbG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZG91YmxlPgBuID4gMCAmJiBuIDw9IDE2AHBwc19pZCA8PSAyNTUAKHVuc2lnbmVkKW4gPD0gMzIALWJzLT5zaGlmdCA8IDMyAHNwc19pZCA8PSAzMQAoaW50KXBvc19iaXRzID49IDAAISh2YWwgPj4gbikATjEwZW1zY3JpcHRlbjN2YWxFAAAAABAAAHcJAAAAAAAAUAoAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSVoxMmNyZWF0ZV9tdXhlck4xMGVtc2NyaXB0ZW4zdmFsRVMzX0UzJF8zTlNfOWFsbG9jYXRvcklTNF9FRUZpUEt2bXhFRUUATlN0M19fMjEwX19mdW5jdGlvbjZfX2Jhc2VJRmlQS3ZteEVFRQAAEAAAIgoAACgQAADACQAASAoAAIwJAACMCQAAjAkAAFoxMmNyZWF0ZV9tdXhlck4xMGVtc2NyaXB0ZW4zdmFsRVMwX0UzJF8zAAAAABAAAGgKAACoDwAAjAkAAIwJAABpaWlpAAAAAEgPAACoDwAAwA8AAJwPAAB2aWlpaQAAAEgPAACoDwAAdmlpAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFAE5TdDNfXzIyMV9fYmFzaWNfc3RyaW5nX2NvbW1vbklMYjFFRUUAAAAAABAAABMLAACEEAAA1AoAAAAAAAABAAAAPAsAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJaE5TXzExY2hhcl90cmFpdHNJaEVFTlNfOWFsbG9jYXRvckloRUVFRQAAhBAAAFwLAAAAAAAAAQAAADwLAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSXdOU18xMWNoYXJfdHJhaXRzSXdFRU5TXzlhbGxvY2F0b3JJd0VFRUUAAIQQAAC0CwAAAAAAAAEAAAA8CwAAAAAAAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0lEc05TXzExY2hhcl90cmFpdHNJRHNFRU5TXzlhbGxvY2F0b3JJRHNFRUVFAAAAhBAAAAwMAAAAAAAAAQAAADwLAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSURpTlNfMTFjaGFyX3RyYWl0c0lEaUVFTlNfOWFsbG9jYXRvcklEaUVFRUUAAACEEAAAaAwAAAAAAAABAAAAPAsAAAAAAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0ljRUUAAAAQAADEDAAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJYUVFAAAAEAAA7AwAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWhFRQAAABAAABQNAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lzRUUAAAAQAAA8DQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJdEVFAAAAEAAAZA0AAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWlFRQAAABAAAIwNAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lqRUUAAAAQAAC0DQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJbEVFAAAAEAAA3A0AAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SW1FRQAAABAAAAQOAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lmRUUAAAAQAAAsDgAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJZEVFAAAAEAAAVA4AAFN0OXR5cGVfaW5mbwAAAAAAEAAAfA4AAE4xMF9fY3h4YWJpdjExNl9fc2hpbV90eXBlX2luZm9FAAAAACgQAACUDgAAjA4AAE4xMF9fY3h4YWJpdjExN19fY2xhc3NfdHlwZV9pbmZvRQAAACgQAADEDgAAuA4AAAAAAAA4DwAAEwAAABQAAAAVAAAAFgAAABcAAABOMTBfX2N4eGFiaXYxMjNfX2Z1bmRhbWVudGFsX3R5cGVfaW5mb0UAKBAAABAPAAC4DgAAdgAAAPwOAABEDwAAYgAAAPwOAABQDwAAYwAAAPwOAABcDwAAaAAAAPwOAABoDwAAYQAAAPwOAAB0DwAAcwAAAPwOAACADwAAdAAAAPwOAACMDwAAaQAAAPwOAACYDwAAagAAAPwOAACkDwAAbAAAAPwOAACwDwAAbQAAAPwOAAC8DwAAeAAAAPwOAADIDwAAeQAAAPwOAADUDwAAZgAAAPwOAADgDwAAZAAAAPwOAADsDwAAAAAAAOgOAAATAAAAGAAAABUAAAAWAAAAGQAAABoAAAAbAAAAHAAAAAAAAABwEAAAEwAAAB0AAAAVAAAAFgAAABkAAAAeAAAAHwAAACAAAABOMTBfX2N4eGFiaXYxMjBfX3NpX2NsYXNzX3R5cGVfaW5mb0UAAAAAKBAAAEgQAADoDgAAAAAAAMwQAAATAAAAIQAAABUAAAAWAAAAGQAAACIAAAAjAAAAJAAAAE4xMF9fY3h4YWJpdjEyMV9fdm1pX2NsYXNzX3R5cGVfaW5mb0UAAAAoEAAApBAAAOgOAEHYIQsHAQAAAPASUA==",At(He)||(He=u(He));function L(b){try{if(b==He&&d)return new Uint8Array(d);var N=wA(b);if(N)return N;if(h)return h(b);throw"both async and sync fetching of the wasm failed"}catch(q){$e(q)}}function S(){return!d&&(a||l)&&typeof fetch=="function"?fetch(He,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+He+"'";return b.arrayBuffer()}).catch(function(){return L(He)}):Promise.resolve().then(function(){return L(He)})}function J(){var b={a:iI};function N(Pe,Ee){var Te=Pe.exports;t.asm=Te,m=t.asm.x,Le(m.buffer),ke=t.asm.B,st(t.asm.y),Ge()}Ot();function q(Pe){N(Pe.instance)}function ie(Pe){return S().then(function(Ee){return WebAssembly.instantiate(Ee,b)}).then(function(Ee){return Ee}).then(Pe,function(Ee){A("failed to asynchronously prepare wasm: "+Ee),$e(Ee)})}function _e(){return!d&&typeof WebAssembly.instantiateStreaming=="function"&&!At(He)&&typeof fetch=="function"?fetch(He,{credentials:"same-origin"}).then(function(Pe){var Ee=WebAssembly.instantiateStreaming(Pe,b);return Ee.then(q,function(Te){return A("wasm streaming compile failed: "+Te),A("falling back to ArrayBuffer instantiation"),ie(q)})}):ie(q)}if(t.instantiateWasm)try{var ve=t.instantiateWasm(b,N);return ve}catch(Pe){return A("Module.instantiateWasm callback failed with error: "+Pe),!1}return _e().catch(r),{}}function se(b){for(;b.length>0;){var N=b.shift();if(typeof N=="function"){N(t);continue}var q=N.func;typeof q=="number"?N.arg===void 0?ke.get(q)():ke.get(q)(N.arg):q(N.arg===void 0?null:N.arg)}}function Ae(b,N,q,ie){$e("Assertion failed: "+p(b)+", at: "+[N?p(N):"unknown filename",q,ie?p(ie):"unknown function"])}function ae(b,N,q,ie,_e){}function ze(b){switch(b){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+b)}}function Me(){for(var b=new Array(256),N=0;N<256;++N)b[N]=String.fromCharCode(N);Re=b}var Re=void 0;function je(b){for(var N="",q=b;z[q];)N+=Re[z[q++]];return N}var fe={},De={},Xe={},Fe=48,ye=57;function at(b){if(b===void 0)return"_unknown";b=b.replace(/[^a-zA-Z0-9_]/g,"$");var N=b.charCodeAt(0);return N>=Fe&&N<=ye?"_"+b:b}function Ke(b,N){return b=at(b),new Function("body","return function "+b+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(N)}function tt(b,N){var q=Ke(N,function(ie){this.name=N,this.message=ie;var _e=new Error(ie).stack;_e!==void 0&&(this.stack=this.toString()+`
`+_e.replace(/^Error(:[^\n]*)?\n/,""))});return q.prototype=Object.create(b.prototype),q.prototype.constructor=q,q.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},q}var V=void 0;function xe(b){throw new V(b)}var W=void 0;function le(b){throw new W(b)}function Ne(b,N,q){b.forEach(function(Ee){Xe[Ee]=N});function ie(Ee){var Te=q(Ee);Te.length!==b.length&&le("Mismatched type converter count");for(var gt=0;gt<b.length;++gt)we(b[gt],Te[gt])}var _e=new Array(N.length),ve=[],Pe=0;N.forEach(function(Ee,Te){De.hasOwnProperty(Ee)?_e[Te]=De[Ee]:(ve.push(Ee),fe.hasOwnProperty(Ee)||(fe[Ee]=[]),fe[Ee].push(function(){_e[Te]=De[Ee],++Pe,Pe===ve.length&&ie(_e)}))}),ve.length===0&&ie(_e)}function we(b,N,q){if(q=q||{},!("argPackAdvance"in N))throw new TypeError("registerType registeredInstance requires argPackAdvance");var ie=N.name;if(b||xe('type "'+ie+'" must have a positive integer typeid pointer'),De.hasOwnProperty(b)){if(q.ignoreDuplicateRegistrations)return;xe("Cannot register type '"+ie+"' twice")}if(De[b]=N,delete Xe[b],fe.hasOwnProperty(b)){var _e=fe[b];delete fe[b],_e.forEach(function(ve){ve()})}}function dt(b,N,q,ie,_e){var ve=ze(q);N=je(N),we(b,{name:N,fromWireType:function(Pe){return!!Pe},toWireType:function(Pe,Ee){return Ee?ie:_e},argPackAdvance:8,readValueFromPointer:function(Pe){var Ee;if(q===1)Ee=G;else if(q===2)Ee=Z;else if(q===4)Ee=oe;else throw new TypeError("Unknown boolean type size: "+N);return this.fromWireType(Ee[Pe>>ve])},destructorFunction:null})}var bt=[],xt=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function ft(b){b>4&&--xt[b].refcount==0&&(xt[b]=void 0,bt.push(b))}function Wt(){for(var b=0,N=5;N<xt.length;++N)xt[N]!==void 0&&++b;return b}function pn(){for(var b=5;b<xt.length;++b)if(xt[b]!==void 0)return xt[b];return null}function mr(){t.count_emval_handles=Wt,t.get_first_emval=pn}function bn(b){switch(b){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var N=bt.length?bt.pop():xt.length;return xt[N]={refcount:1,value:b},N}}}function gn(b){return this.fromWireType(te[b>>2])}function Yi(b,N){N=je(N),we(b,{name:N,fromWireType:function(q){var ie=xt[q].value;return ft(q),ie},toWireType:function(q,ie){return bn(ie)},argPackAdvance:8,readValueFromPointer:gn,destructorFunction:null})}function Si(b){if(b===null)return"null";var N=typeof b;return N==="object"||N==="array"||N==="function"?b.toString():""+b}function Wi(b,N){switch(N){case 2:return function(q){return this.fromWireType(Ce[q>>2])};case 3:return function(q){return this.fromWireType(Ie[q>>3])};default:throw new TypeError("Unknown float type: "+b)}}function Bi(b,N,q){var ie=ze(q);N=je(N),we(b,{name:N,fromWireType:function(_e){return _e},toWireType:function(_e,ve){if(typeof ve!="number"&&typeof ve!="boolean")throw new TypeError('Cannot convert "'+Si(ve)+'" to '+this.name);return ve},argPackAdvance:8,readValueFromPointer:Wi(N,ie),destructorFunction:null})}function Er(b,N){if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var q=Ke(b.name||"unknownFunctionName",function(){});q.prototype=b.prototype;var ie=new q,_e=b.apply(ie,N);return _e instanceof Object?_e:ie}function si(b){for(;b.length;){var N=b.pop(),q=b.pop();q(N)}}function Ir(b,N,q,ie,_e){var ve=N.length;ve<2&&xe("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Pe=N[1]!==null&&q!==null,Ee=!1,Te=1;Te<N.length;++Te)if(N[Te]!==null&&N[Te].destructorFunction===void 0){Ee=!0;break}for(var gt=N[0].name!=="void",St="",Gt="",Te=0;Te<ve-2;++Te)St+=(Te!==0?", ":"")+"arg"+Te,Gt+=(Te!==0?", ":"")+"arg"+Te+"Wired";var En="return function "+at(b)+"("+St+`) {
if (arguments.length !== `+(ve-2)+`) {
throwBindingError('function `+b+" called with ' + arguments.length + ' arguments, expected "+(ve-2)+` args!');
}
`;Ee&&(En+=`var destructors = [];
`);var Xi=Ee?"destructors":"null",Mi=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],ls=[xe,ie,_e,si,N[0],N[1]];Pe&&(En+="var thisWired = classParam.toWireType("+Xi+`, this);
`);for(var Te=0;Te<ve-2;++Te)En+="var arg"+Te+"Wired = argType"+Te+".toWireType("+Xi+", arg"+Te+"); // "+N[Te+2].name+`
`,Mi.push("argType"+Te),ls.push(N[Te+2]);if(Pe&&(Gt="thisWired"+(Gt.length>0?", ":"")+Gt),En+=(gt?"var rv = ":"")+"invoker(fn"+(Gt.length>0?", ":"")+Gt+`);
`,Ee)En+=`runDestructors(destructors);
`;else for(var Te=Pe?1:2;Te<N.length;++Te){var vr=Te===1?"thisWired":"arg"+(Te-2)+"Wired";N[Te].destructorFunction!==null&&(En+=vr+"_dtor("+vr+"); // "+N[Te].name+`
`,Mi.push(vr+"_dtor"),ls.push(N[Te].destructorFunction))}gt&&(En+=`var ret = retType.fromWireType(rv);
return ret;
`),En+=`}
`,Mi.push(En);var rI=Er(Function,Mi).apply(null,ls);return rI}function qi(b,N,q){if(b[N].overloadTable===void 0){var ie=b[N];b[N]=function(){return b[N].overloadTable.hasOwnProperty(arguments.length)||xe("Function '"+q+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+b[N].overloadTable+")!"),b[N].overloadTable[arguments.length].apply(this,arguments)},b[N].overloadTable=[],b[N].overloadTable[ie.argCount]=ie}}function _r(b,N,q){t.hasOwnProperty(b)?((q===void 0||t[b].overloadTable!==void 0&&t[b].overloadTable[q]!==void 0)&&xe("Cannot register public name '"+b+"' twice"),qi(t,b,b),t.hasOwnProperty(q)&&xe("Cannot register multiple overloads of a function with the same number of arguments ("+q+")!"),t[b].overloadTable[q]=N):(t[b]=N,q!==void 0&&(t[b].numArguments=q))}function cs(b,N){for(var q=[],ie=0;ie<b;ie++)q.push(oe[(N>>2)+ie]);return q}function Tn(b,N,q){t.hasOwnProperty(b)||le("Replacing nonexistant public symbol"),t[b].overloadTable!==void 0&&q!==void 0?t[b].overloadTable[q]=N:(t[b]=N,t[b].argCount=q)}function w(b,N,q){var ie=t["dynCall_"+b];return q&&q.length?ie.apply(null,[N].concat(q)):ie.call(null,N)}function f(b,N,q){return b.includes("j")?w(b,N,q):ke.get(N).apply(null,q)}function I(b,N){var q=[];return function(){q.length=arguments.length;for(var ie=0;ie<arguments.length;ie++)q[ie]=arguments[ie];return f(b,N,q)}}function x(b,N){b=je(b);function q(){return b.includes("j")?I(b,N):ke.get(N)}var ie=q();return typeof ie!="function"&&xe("unknown function pointer with signature "+b+": "+N),ie}var B=void 0;function k(b){var N=bA(b),q=je(N);return oi(N),q}function O(b,N){var q=[],ie={};function _e(ve){if(!ie[ve]&&!De[ve]){if(Xe[ve]){Xe[ve].forEach(_e);return}q.push(ve),ie[ve]=!0}}throw N.forEach(_e),new B(b+": "+q.map(k).join([", "]))}function K(b,N,q,ie,_e,ve){var Pe=cs(N,q);b=je(b),_e=x(ie,_e),_r(b,function(){O("Cannot call "+b+" due to unbound types",Pe)},N-1),Ne([],Pe,function(Ee){var Te=[Ee[0],null].concat(Ee.slice(1));return Tn(b,Ir(b,Te,null,_e,ve),N-1),[]})}function ne(b,N,q){switch(N){case 0:return q?function(ie){return G[ie]}:function(ie){return z[ie]};case 1:return q?function(ie){return Z[ie>>1]}:function(ie){return Y[ie>>1]};case 2:return q?function(ie){return oe[ie>>2]}:function(ie){return te[ie>>2]};default:throw new TypeError("Unknown integer type: "+b)}}function $(b,N,q,ie,_e){N=je(N),_e===-1&&(_e=4294967295);var ve=ze(q),Pe=function(gt){return gt};if(ie===0){var Ee=32-8*q;Pe=function(gt){return gt<<Ee>>>Ee}}var Te=N.includes("unsigned");we(b,{name:N,fromWireType:Pe,toWireType:function(gt,St){if(typeof St!="number"&&typeof St!="boolean")throw new TypeError('Cannot convert "'+Si(St)+'" to '+this.name);if(St<ie||St>_e)throw new TypeError('Passing a number "'+Si(St)+'" from JS side to C/C++ side to an argument of type "'+N+'", which is outside the valid range ['+ie+", "+_e+"]!");return Te?St>>>0:St|0},argPackAdvance:8,readValueFromPointer:ne(N,ve,ie!==0),destructorFunction:null})}function ee(b,N,q){var ie=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],_e=ie[N];function ve(Pe){Pe=Pe>>2;var Ee=te,Te=Ee[Pe],gt=Ee[Pe+1];return new _e(F,gt,Te)}q=je(q),we(b,{name:q,fromWireType:ve,argPackAdvance:8,readValueFromPointer:ve},{ignoreDuplicateRegistrations:!0})}function j(b,N){N=je(N);var q=N==="std::string";we(b,{name:N,fromWireType:function(ie){var _e=te[ie>>2],ve;if(q)for(var Pe=ie+4,Ee=0;Ee<=_e;++Ee){var Te=ie+4+Ee;if(Ee==_e||z[Te]==0){var gt=Te-Pe,St=p(Pe,gt);ve===void 0?ve=St:(ve+="\0",ve+=St),Pe=Te+1}}else{for(var Gt=new Array(_e),Ee=0;Ee<_e;++Ee)Gt[Ee]=String.fromCharCode(z[ie+4+Ee]);ve=Gt.join("")}return oi(ie),ve},toWireType:function(ie,_e){_e instanceof ArrayBuffer&&(_e=new Uint8Array(_e));var ve,Pe=typeof _e=="string";Pe||_e instanceof Uint8Array||_e instanceof Uint8ClampedArray||_e instanceof Int8Array||xe("Cannot pass non-string to std::string"),q&&Pe?ve=function(){return M(_e)}:ve=function(){return _e.length};var Ee=ve(),Te=da(4+Ee+1);if(te[Te>>2]=Ee,q&&Pe)y(_e,Te+4,Ee+1);else if(Pe)for(var gt=0;gt<Ee;++gt){var St=_e.charCodeAt(gt);St>255&&(oi(Te),xe("String has UTF-16 code units that do not fit in 8 bits")),z[Te+4+gt]=St}else for(var gt=0;gt<Ee;++gt)z[Te+4+gt]=_e[gt];return ie!==null&&ie.push(oi,Te),Te},argPackAdvance:8,readValueFromPointer:gn,destructorFunction:function(ie){oi(ie)}})}function he(b,N,q){q=je(q);var ie,_e,ve,Pe,Ee;N===2?(ie=P,_e=Q,Pe=R,ve=function(){return Y},Ee=1):N===4&&(ie=T,_e=U,Pe=_,ve=function(){return te},Ee=2),we(b,{name:q,fromWireType:function(Te){for(var gt=te[Te>>2],St=ve(),Gt,En=Te+4,Xi=0;Xi<=gt;++Xi){var Mi=Te+4+Xi*N;if(Xi==gt||St[Mi>>Ee]==0){var ls=Mi-En,vr=ie(En,ls);Gt===void 0?Gt=vr:(Gt+="\0",Gt+=vr),En=Mi+N}}return oi(Te),Gt},toWireType:function(Te,gt){typeof gt!="string"&&xe("Cannot pass non-string to C++ string type "+q);var St=Pe(gt),Gt=da(4+St+N);return te[Gt>>2]=St>>Ee,_e(gt,Gt+4,St+N),Te!==null&&Te.push(oi,Gt),Gt},argPackAdvance:8,readValueFromPointer:gn,destructorFunction:function(Te){oi(Te)}})}function me(b,N){N=je(N),we(b,{isVoid:!0,name:N,argPackAdvance:0,fromWireType:function(){},toWireType:function(q,ie){}})}function pe(b){return b||xe("Cannot use deleted val. handle = "+b),xt[b].value}function Ue(b,N){var q=De[b];return q===void 0&&xe(N+" has unknown type "+k(b)),q}function de(b,N,q){b=pe(b),N=Ue(N,"emval::as");var ie=[],_e=bn(ie);return oe[q>>2]=_e,N.toWireType(ie,b)}function ce(b,N){for(var q=new Array(b),ie=0;ie<b;++ie)q[ie]=Ue(oe[(N>>2)+ie],"parameter "+ie);return q}function Ve(b,N,q,ie){b=pe(b);for(var _e=ce(N,q),ve=new Array(N),Pe=0;Pe<N;++Pe){var Ee=_e[Pe];ve[Pe]=Ee.readValueFromPointer(ie),ie+=Ee.argPackAdvance}var Te=b.apply(void 0,ve);return bn(Te)}function Ye(b,N){return b=pe(b),N=pe(N),bn(b[N])}function pt(b){b>4&&(xt[b].refcount+=1)}function Ut(b){return b=pe(b),typeof b=="number"}var ot={};function ut(b){var N=ot[b];return N===void 0?je(b):N}function it(b){return bn(ut(b))}function Pt(b){var N=xt[b].value;si(N),ft(b)}function Lt(b,N){b=Ue(b,"_emval_take_value");var q=b.readValueFromPointer(N);return bn(q)}function nt(){$e()}function Ct(b,N,q){z.copyWithin(b,N,N+q)}function mn(b){try{return m.grow(b-F.byteLength+65535>>>16),Le(m.buffer),1}catch{}}function zn(b){var N=z.length;b=b>>>0;var q=2147483648;if(b>q)return!1;for(var ie=1;ie<=4;ie*=2){var _e=N*(1+.2/ie);_e=Math.min(_e,b+100663296);var ve=Math.min(q,v(Math.max(b,_e),65536)),Pe=mn(ve);if(Pe)return!0}return!1}Me(),V=t.BindingError=tt(Error,"BindingError"),W=t.InternalError=tt(Error,"InternalError"),mr(),B=t.UnboundTypeError=tt(Error,"UnboundTypeError");var yn=typeof atob=="function"?atob:function(b){var N="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",q="",ie,_e,ve,Pe,Ee,Te,gt,St=0;b=b.replace(/[^A-Za-z0-9\+\/\=]/g,"");do Pe=N.indexOf(b.charAt(St++)),Ee=N.indexOf(b.charAt(St++)),Te=N.indexOf(b.charAt(St++)),gt=N.indexOf(b.charAt(St++)),ie=Pe<<2|Ee>>4,_e=(Ee&15)<<4|Te>>2,ve=(Te&3)<<6|gt,q=q+String.fromCharCode(ie),Te!==64&&(q=q+String.fromCharCode(_e)),gt!==64&&(q=q+String.fromCharCode(ve));while(St<b.length);return q};function Cr(b){try{for(var N=yn(b),q=new Uint8Array(N.length),ie=0;ie<N.length;++ie)q[ie]=N.charCodeAt(ie);return q}catch{throw new Error("Converting base64 string to bytes failed.")}}function wA(b){if(At(b))return Cr(b.slice(Be.length))}var iI={a:Ae,q:ae,u:dt,t:Yi,m:Bi,k:K,d:$,c:ee,n:j,l:he,v:me,j:de,w:Ve,b:ft,e:Ye,g:pt,p:Ut,f:it,i:Pt,h:Lt,o:nt,r:Ct,s:zn};J(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.y).apply(null,arguments)};var da=t._malloc=function(){return(da=t._malloc=t.asm.z).apply(null,arguments)},oi=t._free=function(){return(oi=t._free=t.asm.A).apply(null,arguments)},bA=t.___getTypeName=function(){return(bA=t.___getTypeName=t.asm.C).apply(null,arguments)};t.___embind_register_native_and_builtin_types=function(){return(t.___embind_register_native_and_builtin_types=t.asm.D).apply(null,arguments)},t.dynCall_ijiii=function(){return(t.dynCall_ijiii=t.asm.E).apply(null,arguments)};var Ks;H=function b(){Ks||fa(),Ks||(H=b)};function fa(b){if(Je>0||(ge(),Je>0))return;function N(){Ks||(Ks=!0,t.calledRun=!0,!E&&(Se(),n(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),We()))}t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),N()},1)):N()}if(t.run=fa,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return fa(),t.ready}}(),VB=oA,tc=new Uint8Array([0,0,0,1]);function YB(i){console.error(i)}oA.createFile=oE;function oE(i=256){let e=0,t=0,n=new Uint8Array(i);return{contents:function(){return n.slice(0,t)},seek:function(s){e=s},write:function(s){let o=s.byteLength;return r(e+o),n.set(s,e),e+=o,t=Math.max(t,e),o}};function r(s){var o=n.length;if(o>=s)return;var a=1024*1024;s=Math.max(s,o*(o<a?2:1.125)>>>0),o!=0&&(s=Math.max(s,256));let l=n;n=new Uint8Array(s),t>0&&n.set(l.subarray(0,t),0)}}oA.isWebCodecsSupported=Xo;function Xo(){return typeof window<"u"&&typeof window.VideoEncoder=="function"}function WB(i,e={}){let{width:t,height:n,groupOfPictures:r=20,fps:s=30,fragmentation:o=!1,sequential:a=!1,hevc:l=!1,format:c="annexb",codec:u="avc1.4d0034",acceleration:h,bitrate:A,error:d=YB,encoderOptions:m={},flushFrequency:E=10}=e;if(!Xo())throw new Error("MP4 H264 encoding/decoding depends on WebCodecs API which is not supported in this environment");if(typeof t!="number"||typeof n!="number")throw new Error("Must specify { width, height } options");if(!isFinite(t)||t<0||!isFinite(n)||n<0)throw new Error("{ width, height } options must be positive integers");let g=oE(),p=i.create_muxer({width:t,height:n,fps:s,fragmentation:o,sequential:a,hevc:l},P),C={codec:u,width:t,height:n,avc:{format:c},hardwareAcceleration:h,bitrate:A,...m},y=0,M=new window.VideoEncoder({output(T,U){R(T,U)},error:d});return M.configure(C),{async end(){return await M.flush(),M.close(),i.finalize_muxer(p),g.contents()},async addFrame(T){let U=1/s*y*1e6,_=y%r==0,v=new VideoFrame(T,{timestamp:U});M.encode(v,{keyFrame:_}),v.close(),E!=null&&(y+1)%E==0&&await M.flush(),y++},async flush(){return M.flush()}};function P(T,U,_){g.seek(_);let v=i.HEAPU8.subarray(T,T+U);return g.write(v)!==v.byteLength}function Q(T){let U=i._malloc(T.byteLength);i.HEAPU8.set(T,U),i.mux_nal(p,U,T.byteLength),i._free(U)}function R(T,U){let _=null;if(U.description)try{_=KB(U.description)}catch(F){d(F);return}let v=[];if(_&&(_.sps_list.forEach(F=>{v.push(tc),v.push(F)}),_.pps_list.forEach(F=>{v.push(tc),v.push(F)})),c==="annexb"){let F=new Uint8Array(T.byteLength);T.copyTo(F),v.push(F)}else try{let F=new ArrayBuffer(T.byteLength);T.copyTo(F),XB(F).forEach(G=>{v.push(tc),v.push(G)})}catch(F){d(F);return}Q(qB(v))}}function qB(i){let e=i.reduce((r,s)=>r+s.byteLength,0),t=new Uint8Array(e),n=0;for(let r=0;r<i.length;r++){let s=i[r];t.set(s,n),n+=s.byteLength}return t}function XB(i){let e=4,t=0,n=[],r=i.byteLength,s=new Uint8Array(i);for(;t+e<r;){let o=s[t];if(o=(o<<8)+s[t+1],o=(o<<8)+s[t+2],o=(o<<8)+s[t+3],n.push(new Uint8Array(i,t+e,o)),o==0)throw new Error("Error: invalid nal_length 0");t+=e+o}return n}function KB(i){let e=new DataView(i),t=0,n=e.getUint8(t++),r=e.getUint8(t++),s=e.getUint8(t++),o=e.getUint8(t++),a=(e.getUint8(t++)&3)+1;if(a!==4)throw new Error("Expected length_size to indicate 4 bytes");let l=e.getUint8(t++)&31,c=[];for(let A=0;A<l;A++){let d=e.getUint16(t,!1);t+=2;let m=new Uint8Array(e.buffer,t,d);c.push(m),t+=d}let u=e.getUint8(t++),h=[];for(let A=0;A<u;A++){let d=e.getUint16(t,!1);t+=2;let m=new Uint8Array(e.buffer,t,d);h.push(m),t+=d}return{offset:t,version:n,profile:r,compat:s,level:o,length_size:a,pps_list:h,sps_list:c,numSPS:l}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Jn{constructor(e,t,n,r,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Jn.nextNameID=Jn.nextNameID||0,this.$name.id=`lil-gui-name-${++Jn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class jB extends Jn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function bh(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const JB={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:bh,toHexString:bh},Os={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},ZB={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=Os.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return Os.toHexString(r)}},$B={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=Os.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return Os.toHexString(r)}},eM=[JB,Os,ZB,$B];function tM(i){return eM.find(e=>e.match(i))}class nM extends Jn{constructor(e,t,n,r){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=tM(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=bh(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class nc extends Jn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class aE extends Jn{constructor(e,t,n,r,s,o){super(e,t,n,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let C=parseFloat(this.$input.value);isNaN(C)||(this._stepExplicit&&(C=this._snap(C)),this.setValue(this._clamp(C)))},n=C=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+C),this.$input.value=this.getValue())},r=C=>{C.key==="Enter"&&this.$input.blur(),C.code==="ArrowUp"&&(C.preventDefault(),n(this._step*this._arrowKeyMultiplier(C))),C.code==="ArrowDown"&&(C.preventDefault(),n(this._step*this._arrowKeyMultiplier(C)*-1))},s=C=>{this._inputFocused&&(C.preventDefault(),n(this._step*this._normalizeMouseWheel(C)))};let o=!1,a,l,c,u,h;const A=5,d=C=>{a=C.clientX,l=c=C.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",E)},m=C=>{if(o){const y=C.clientX-a,M=C.clientY-l;Math.abs(M)>A?(C.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>A&&E()}if(!o){const y=C.clientY-c;h-=y*this._step*this._arrowKeyMultiplier(C),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=C.clientY},E=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",E)},g=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,C,y,M,P)=>(p-C)/(y-C)*(P-M)+M,t=p=>{const C=this.$slider.getBoundingClientRect();let y=e(p,C.left,C.right,this._min,this._max);this._snapClampSetValue(y)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",A))},h=p=>{if(o){const C=p.touches[0].clientX-a,y=p.touches[0].clientY-l;Math.abs(C)>Math.abs(y)?c(p):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",A))}else p.preventDefault(),t(p.touches[0].clientX)},A=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",A)},d=this._callOnFinishChange.bind(this),m=400;let E;const g=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const y=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(E),E=setTimeout(d,m)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class iM extends Jn{constructor(e,t,n,r){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class rM extends Jn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const sM=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function oM(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let cf=!1;class aA{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!cf&&a&&(oM(sM),cf=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=o}add(e,t,n,r,s){if(Object(n)===n)return new iM(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new aE(this,e,t,n,r,s);case"boolean":return new jB(this,e,t);case"string":return new rM(this,e,t);case"function":return new nc(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new nM(this,e,t,n)}addFolder(e){const t=new aA({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof nc||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof nc)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const aM=i=>Math.pow(10,i),vs=Math.log10;class cM extends aE{updateDisplay(){if(super.updateDisplay(),this._hasSlider){const e=vs(this.getValue()),t=vs(this._min),n=vs(this._max);let r=(e-t)/(n-t);r=Math.max(0,Math.min(r,1)),this.$fill.style.width=r*100+"%"}return this}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=vs(this._min),t=vs(this._max),n=c=>(c<e&&(c=e),c>t&&(c=t),c),r=(c,u,h,A,d)=>(c-u)/(h-u)*(d-A)+A,s=c=>{const u=this.$slider.getBoundingClientRect();let h=r(c,u.left,u.right,e,t);this.setValue(this._snap(aM(n(this._snap(h)))))},o=c=>{this._setDraggingStyle(!0),s(c.clientX),window.addEventListener("pointermove",a),window.addEventListener("pointerup",l)},a=c=>{s(c.clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",l)};this.$slider.addEventListener("pointerdown",o)}}class lM{#t;#n;isRunning=!1;time=0;dt=0;#i=performance.now();#r=[];#e=[];#l=[];#u=[];#s;#o;#h;#a;#A;#c=[];get background(){return this.renderer.getClearColor(new Ze)}get backgroundAlpha(){return this.renderer.getClearAlpha()}set background(e){this.renderer.setClearColor(e,this.backgroundAlpha)}set backgroundAlpha(e){this.renderer.setClearColor(this.background,e)}get isRecording(){return!!this.#a}constructor({background:e="#111",backgroundAlpha:t=1,fov:n=45,frustumSize:r=3,near:s=.01,far:o=100,...a}={}){this.options={background:e,backgroundAlpha:t,fov:n,frustumSize:r,near:s,far:o,...a},this.renderer=new Bx({antialias:!this.options.postprocessing,alpha:t!==1,preserveDrawingBuffer:!0,...this.options}),this.options.sortObjects!==void 0&&(this.renderer.sortObjects=this.options.sortObjects),this.options.xr&&(this.renderer.xr.enabled=!0),this.canvas=this.renderer.domElement,this.renderer.setClearColor(e,t),this.#t=this.options.width,this.#n=this.options.height,this.maxPixelRatio=this.options.maxPixelRatio||1.5,this.maxDeltaTime=this.options.maxDeltaTime||1/30;const l=this.#t/this.#n;if(this.options.orthographic?(this.camera=new ta(-(r*l)/2,r*l/2,r/2,-r/2,s,o),this.camera.frustumSize=r):this.camera=new nn(n,l,s,o),this.camera.position.copy(this.options.cameraPosition||new X(0,0,4)),this.camera.lookAt(this.options.cameraTarget||new X),this.scene=new yh,this.gl=this.renderer.getContext(),window.addEventListener("resize",this.resize),window.addEventListener("orientationchange",this.resize),this.resize(),this.isDragging=!1,this.canvas.addEventListener("pointerdown",c=>{c.isPrimary&&(this.isDragging=!0,this.#s=c.offsetX,this.#o=c.offsetY,this.scene.traverse(u=>{typeof u.onPointerDown=="function"&&u.onPointerDown(c,{x:c.offsetX,y:c.offsetY})}),this.#e.forEach(u=>u(c,{x:c.offsetX,y:c.offsetY})))}),this.canvas.addEventListener("pointermove",c=>{if(!c.isPrimary)return;const u={x:c.offsetX,y:c.offsetY,...this.#s!==void 0&&{dragX:c.offsetX-this.#s},...this.#o!==void 0&&{dragY:c.offsetY-this.#o}};this.scene.traverse(h=>{typeof h.onPointerMove=="function"&&h.onPointerMove(c,u)}),this.#l.forEach(h=>h(c,u))}),this.canvas.addEventListener("pointerup",c=>{if(!c.isPrimary)return;this.isDragging=!1;const u={x:c.offsetX,y:c.offsetY,...this.#s!==void 0&&{dragX:c.offsetX-this.#s},...this.#o!==void 0&&{dragY:c.offsetY-this.#o}};this.scene.traverse(h=>{typeof h.onPointerUp=="function"&&h.onPointerUp(c,u)}),this.#u.forEach(h=>h(c,u)),this.#s=void 0,this.#o=void 0}),this.options.postprocessing){const c=this.gl.getParameter(this.gl.MAX_SAMPLES);this.composer=new CS(this.renderer,{multisampling:Math.min(8,c),frameBufferType:sn,...this.options}),this.composer.addPass(new rB(this.scene,this.camera))}}async init(){if(this.options.orbitControls){const{OrbitControls:e}=await fB(async()=>{const{OrbitControls:t}=await import("./OrbitControls-dZETdx93.js");return{OrbitControls:t}},[]);this.orbitControls=new e(this.camera,this.canvas),typeof this.options.orbitControls=="object"&&Object.assign(this.orbitControls,this.options.orbitControls)}this.options.world&&(this.world=this.options.world,this.options.showWorldWireframes&&(this.cannonDebugger=new zB(this.scene,this.world.bodies))),this.options.showFps&&(this.stats=new pB({showMinMax:!1,context:this.gl}),this.stats.showPanel(0),document.body.appendChild(this.stats.dom)),this.options.gui&&(this.gui=new aA,this.options.guiClosed&&this.gui.close(),Object.assign(Object.getPrototypeOf(this.gui),{addSmart(e,t,n=""){const r=e[t];switch(typeof r){case"number":return r===0?this.add(e,t,-10,10,.01):0<r&&r<1&&!["f","a","frequency","amplitude"].includes(n)?this.add(e,t,0,1,.01):r>0?new cM(this,e,t,.01,r<100?100:1e3,.01):this.add(e,t,-10,0,.01);case"object":return this.addColor(e,t);default:return this.add(e,t)}},wireUniforms(e,t,{blacklist:n=[]}={}){const r=this.addFolder(e);Object.keys(t).forEach(s=>{if(n.includes(s))return;const o=t[s];r.addSmart(o,"value",s).name(s)})}}),typeof this.options.gui=="object"&&(this.guiState=this.options.gui,Object.keys(this.options.gui).forEach(e=>{this.gui.addSmart(this.guiState,e)}))),this.loadGPUTier=_B({glContext:this.gl}).then(e=>{this.gpu={name:e.gpu,tier:e.tier,isMobile:e.isMobile,fps:e.fps}}),Xo()&&VB().then(e=>{this.#h=e})}get width(){return this.#t||window.innerWidth}get height(){return this.#n||window.innerHeight}get pixelRatio(){return Math.min(this.maxPixelRatio,window.devicePixelRatio)}resize=({width:e=this.width,height:t=this.height,pixelRatio:n=this.pixelRatio}={})=>{if(this.renderer.getPixelRatio()!==n&&this.renderer.setPixelRatio(n),this.renderer.setSize(e,t),this.camera.isPerspectiveCamera)this.camera.aspect=e/t;else{const r=e/t;this.camera.left=-(this.camera.frustumSize*r)/2,this.camera.right=this.camera.frustumSize*r/2,this.camera.top=this.camera.frustumSize/2,this.camera.bottom=-this.camera.frustumSize/2}return this.camera.updateProjectionMatrix(),this.composer&&this.composer.setSize(),this.scene.traverse(r=>{typeof r.resize=="function"&&r.resize({width:e,height:t,pixelRatio:n})}),this.draw(),this};saveScreenshot=async({width:e=this.width,height:t=this.height,fileName:n="Screenshot"}={})=>{this.resize({width:e,height:t,pixelRatio:1});const r=await new Promise(s=>this.canvas.toBlob(s,"image/png"));this.resize(),lf(`${n}.png`,r)};startRecording=({width:e=this.width,height:t=this.height,fileName:n="Recording",...r}={})=>{if(!Xo())throw new Error("You need the WebCodecs API to use mp4-wasm");if(this.isRecording)return;this.#A=n,this.resize({width:e,height:t,pixelRatio:1}),this.draw();const s=60;this.#a=this.#h.createWebCodecsEncoder({width:uf(e),height:uf(t),fps:s,bitrate:120*1e3*1e3,encoderOptions:{framerate:Math.min(30,s)},...r})};stopRecording=async()=>{if(!this.isRecording)return;for(let n of this.#c)await this.#a.addFrame(n);const e=await this.#a.end(),t=new Blob([e]);this.#a=void 0,this.#c.forEach(n=>n.close()),this.#c.length=0,this.resize(),this.draw(),lf(`${this.#A}.mp4`,t)};update=(e,t,n)=>(this.orbitControls&&this.orbitControls.update(),this.scene.traverse(r=>{typeof r.update=="function"&&!r.isTransformControls&&r.update(e,t,n)}),this.world&&(this.world.step(1/60,e),this.cannonDebugger&&this.cannonDebugger.update(),this.world.bodies.forEach(r=>{typeof r.update=="function"&&r.update(e,t)})),this.#r.forEach(r=>r(e,t,n)),this);onUpdate(e){this.#r.push(e)}onPointerDown(e){this.#e.push(e)}onPointerMove(e){this.#l.push(e)}onPointerUp(e){this.#u.push(e)}offUpdate(e){const t=this.#r.indexOf(e);t!==-1&&this.#r.splice(t,1)}offPointerDown(e){const t=this.#e.indexOf(e);t!==-1&&this.#e.splice(t,1)}offPointerMove(e){const t=this.#l.indexOf(e);t!==-1&&this.#l.splice(t,1)}offPointerUp(e){const t=this.#u.indexOf(e);t!==-1&&this.#u.splice(t,1)}draw=()=>{const e=this.renderer.xr.enabled&&this.renderer.xr.isPresenting;return this.composer&&!e?this.composer.render(this.dt):this.renderer.render(this.scene,this.camera),this};start=()=>{if(!this.isRunning)return this.isRunning=!0,this.draw(),this.renderer.setAnimationLoop(this.animate),this};stop=()=>{if(this.isRunning)return this.renderer.setAnimationLoop(null),this.isRunning=!1,this};animate=(e,t)=>{if(this.isRunning){if(this.stats&&this.stats.begin(),this.dt=Math.min(this.maxDeltaTime,(e-this.#i)/1e3),this.time+=this.dt,this.#i=e,this.update(this.dt,this.time,t),this.draw(),this.isRecording){const n=this.#c.length;createImageBitmap(this.canvas).then(r=>{this.#c[n]=r})}this.stats&&this.stats.end()}};get cursor(){return this.canvas.style.cursor}set cursor(e){e?this.canvas.style.cursor=e:this.canvas.style.cursor=null}}function lf(i,e){const t=document.createElement("a");t.download=i,t.href=URL.createObjectURL(e),t.click(),setTimeout(()=>{URL.revokeObjectURL(e),t.removeAttribute("href")},0)}function uf(i){return Math.round(i/2)*2}async function uM(i,e,{concurrency:t=Number.POSITIVE_INFINITY,stopOnError:n=!0,signal:r}={}){return new Promise((s,o)=>{if(i[Symbol.iterator]===void 0&&i[Symbol.asyncIterator]===void 0)throw new TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof i})`);if(typeof e!="function")throw new TypeError("Mapper function is required");if(!(Number.isSafeInteger(t)&&t>=1||t===Number.POSITIVE_INFINITY))throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${t}\` (${typeof t})`);const a=[],l=[],c=new Map;let u=!1,h=!1,A=!1,d=0,m=0;const E=i[Symbol.iterator]===void 0?i[Symbol.asyncIterator]():i[Symbol.iterator](),g=()=>{y(r.reason)},p=()=>{r?.removeEventListener("abort",g)},C=P=>{s(P),p()},y=P=>{u=!0,h=!0,o(P),p()};r&&(r.aborted&&y(r.reason),r.addEventListener("abort",g,{once:!0}));const M=async()=>{if(h)return;const P=await E.next(),Q=m;if(m++,P.done){if(A=!0,d===0&&!h){if(!n&&l.length>0){y(new AggregateError(l));return}if(h=!0,c.size===0){C(a);return}const R=[];for(const[T,U]of a.entries())c.get(T)!==hf&&R.push(U);C(R)}return}d++,(async()=>{try{const R=await P.value;if(h)return;const T=await e(R,Q);T===hf&&c.set(Q,T),a[Q]=T,d--,await M()}catch(R){if(n)y(R);else{l.push(R),d--;try{await M()}catch(T){y(T)}}}})()};(async()=>{for(let P=0;P<t;P++){try{await M()}catch(Q){y(Q);break}if(A||u)break}})()})}const hf=Symbol("skip"),Af=i=>Number.isFinite(i)?i:0;function hM(i){return{days:Math.trunc(i/864e5),hours:Math.trunc(i/36e5%24),minutes:Math.trunc(i/6e4%60),seconds:Math.trunc(i/1e3%60),milliseconds:Math.trunc(i%1e3),microseconds:Math.trunc(Af(i*1e3)%1e3),nanoseconds:Math.trunc(Af(i*1e6)%1e3)}}function AM(i){return{days:i/86400000n,hours:i/3600000n%24n,minutes:i/60000n%60n,seconds:i/1000n%60n,milliseconds:i%1000n,microseconds:0n,nanoseconds:0n}}function dM(i){switch(typeof i){case"number":{if(Number.isFinite(i))return hM(i);break}case"bigint":return AM(i)}throw new TypeError("Expected a finite number or bigint")}const fM=i=>i===0||i===0n,pM=(i,e)=>e===1||e===1n?i:`${i}s`,gM=1e-7,mM=24n*60n*60n*1000n;function ic(i,e){const t=typeof i=="bigint";if(!t&&!Number.isFinite(i))throw new TypeError("Expected a finite number or bigint");e={...e};const n=i<0?"-":"";i=i<0?-i:i,e.colonNotation&&(e.compact=!1,e.formatSubMilliseconds=!1,e.separateMilliseconds=!1,e.verbose=!1),e.compact&&(e.unitCount=1,e.secondsDecimalDigits=0,e.millisecondsDecimalDigits=0);let r=[];const s=(u,h)=>{const A=Math.floor(u*10**h+gM);return(Math.round(A)/10**h).toFixed(h)},o=(u,h,A,d)=>{if(!((r.length===0||!e.colonNotation)&&fM(u)&&!(e.colonNotation&&A==="m"))){if(d??=String(u),e.colonNotation){const m=d.includes(".")?d.split(".")[0].length:d.length,E=r.length>0?2:1;d="0".repeat(Math.max(0,E-m))+d}else d+=e.verbose?" "+pM(h,u):A;r.push(d)}},a=dM(i),l=BigInt(a.days);if(e.hideYearAndDays?o(BigInt(l)*24n+BigInt(a.hours),"hour","h"):(e.hideYear?o(l,"day","d"):(o(l/365n,"year","y"),o(l%365n,"day","d")),o(Number(a.hours),"hour","h")),o(Number(a.minutes),"minute","m"),!e.hideSeconds)if(e.separateMilliseconds||e.formatSubMilliseconds||!e.colonNotation&&i<1e3){const u=Number(a.seconds),h=Number(a.milliseconds),A=Number(a.microseconds),d=Number(a.nanoseconds);if(o(u,"second","s"),e.formatSubMilliseconds)o(h,"millisecond","ms"),o(A,"microsecond","µs"),o(d,"nanosecond","ns");else{const m=h+A/1e3+d/1e6,E=typeof e.millisecondsDecimalDigits=="number"?e.millisecondsDecimalDigits:0,g=m>=1?Math.round(m):Math.ceil(m),p=E?m.toFixed(E):g;o(Number.parseFloat(p),"millisecond","ms",p)}}else{const u=(t?Number(i%mM):i)/1e3%60,h=typeof e.secondsDecimalDigits=="number"?e.secondsDecimalDigits:1,A=s(u,h),d=e.keepDecimalsOnWholeSeconds?A:A.replace(/\.0+$/,"");o(Number.parseFloat(d),"second","s",d)}if(r.length===0)return n+"0"+(e.verbose?" milliseconds":"ms");const c=e.colonNotation?":":" ";return typeof e.unitCount=="number"&&(r=r.slice(0,Math.max(e.unitCount,1))),n+r.join(c)}function EM(i){return i.length!==void 0}function df(i){var e=new Promise(function(t,n){i.naturalWidth?t(i):i.complete?n(i):(i.addEventListener("load",r),i.addEventListener("error",r));function r(){i.naturalWidth?t(i):n(i),i.removeEventListener("load",r),i.removeEventListener("error",r)}});return Object.assign(e,{image:i})}function cE(i,e){if(e===void 0&&(e={}),i instanceof HTMLImageElement)return df(i);if(typeof i=="string"){var t=i,n=new Image;return Object.keys(e).forEach(function(l){return n.setAttribute(l,e[l])}),n.src=t,df(n)}if(EM(i)){var r=function(l){return cE(l,e).catch(function(c){return c})},s=[].map.call(i,r),o=Promise.all(s).then(function(l){var c=l.filter(function(u){return u.naturalWidth});return c.length===l.length?c:Promise.reject({loaded:c,errored:l.filter(function(u){return!u.naturalWidth})})});return o}var a=Promise.reject(new TypeError("input is not an image, a URL string, or an array of them."));return a}var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function IM(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var rc,ff;function lE(){if(ff)return rc;ff=1;function i(e,t){for(var n=-1,r=e==null?0:e.length,s=Array(r);++n<r;)s[n]=t(e[n],n,e);return s}return rc=i,rc}var sc,pf;function _M(){if(pf)return sc;pf=1;function i(){this.__data__=[],this.size=0}return sc=i,sc}var oc,gf;function uE(){if(gf)return oc;gf=1;function i(e,t){return e===t||e!==e&&t!==t}return oc=i,oc}var ac,mf;function oa(){if(mf)return ac;mf=1;var i=uE();function e(t,n){for(var r=t.length;r--;)if(i(t[r][0],n))return r;return-1}return ac=e,ac}var cc,Ef;function CM(){if(Ef)return cc;Ef=1;var i=oa(),e=Array.prototype,t=e.splice;function n(r){var s=this.__data__,o=i(s,r);if(o<0)return!1;var a=s.length-1;return o==a?s.pop():t.call(s,o,1),--this.size,!0}return cc=n,cc}var lc,If;function vM(){if(If)return lc;If=1;var i=oa();function e(t){var n=this.__data__,r=i(n,t);return r<0?void 0:n[r][1]}return lc=e,lc}var uc,_f;function yM(){if(_f)return uc;_f=1;var i=oa();function e(t){return i(this.__data__,t)>-1}return uc=e,uc}var hc,Cf;function xM(){if(Cf)return hc;Cf=1;var i=oa();function e(t,n){var r=this.__data__,s=i(r,t);return s<0?(++this.size,r.push([t,n])):r[s][1]=n,this}return hc=e,hc}var Ac,vf;function aa(){if(vf)return Ac;vf=1;var i=_M(),e=CM(),t=vM(),n=yM(),r=xM();function s(o){var a=-1,l=o==null?0:o.length;for(this.clear();++a<l;){var c=o[a];this.set(c[0],c[1])}}return s.prototype.clear=i,s.prototype.delete=e,s.prototype.get=t,s.prototype.has=n,s.prototype.set=r,Ac=s,Ac}var dc,yf;function SM(){if(yf)return dc;yf=1;var i=aa();function e(){this.__data__=new i,this.size=0}return dc=e,dc}var fc,xf;function BM(){if(xf)return fc;xf=1;function i(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}return fc=i,fc}var pc,Sf;function MM(){if(Sf)return pc;Sf=1;function i(e){return this.__data__.get(e)}return pc=i,pc}var gc,Bf;function wM(){if(Bf)return gc;Bf=1;function i(e){return this.__data__.has(e)}return gc=i,gc}var mc,Mf;function hE(){if(Mf)return mc;Mf=1;var i=typeof Mo=="object"&&Mo&&Mo.Object===Object&&Mo;return mc=i,mc}var Ec,wf;function ri(){if(wf)return Ec;wf=1;var i=hE(),e=typeof self=="object"&&self&&self.Object===Object&&self,t=i||e||Function("return this")();return Ec=t,Ec}var Ic,bf;function Ys(){if(bf)return Ic;bf=1;var i=ri(),e=i.Symbol;return Ic=e,Ic}var _c,Tf;function bM(){if(Tf)return _c;Tf=1;var i=Ys(),e=Object.prototype,t=e.hasOwnProperty,n=e.toString,r=i?i.toStringTag:void 0;function s(o){var a=t.call(o,r),l=o[r];try{o[r]=void 0;var c=!0}catch{}var u=n.call(o);return c&&(a?o[r]=l:delete o[r]),u}return _c=s,_c}var Cc,Rf;function TM(){if(Rf)return Cc;Rf=1;var i=Object.prototype,e=i.toString;function t(n){return e.call(n)}return Cc=t,Cc}var vc,Df;function os(){if(Df)return vc;Df=1;var i=Ys(),e=bM(),t=TM(),n="[object Null]",r="[object Undefined]",s=i?i.toStringTag:void 0;function o(a){return a==null?a===void 0?r:n:s&&s in Object(a)?e(a):t(a)}return vc=o,vc}var yc,Qf;function Ws(){if(Qf)return yc;Qf=1;function i(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}return yc=i,yc}var xc,Lf;function AE(){if(Lf)return xc;Lf=1;var i=os(),e=Ws(),t="[object AsyncFunction]",n="[object Function]",r="[object GeneratorFunction]",s="[object Proxy]";function o(a){if(!e(a))return!1;var l=i(a);return l==n||l==r||l==t||l==s}return xc=o,xc}var Sc,Nf;function RM(){if(Nf)return Sc;Nf=1;var i=ri(),e=i["__core-js_shared__"];return Sc=e,Sc}var Bc,Pf;function DM(){if(Pf)return Bc;Pf=1;var i=RM(),e=function(){var n=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function t(n){return!!e&&e in n}return Bc=t,Bc}var Mc,Uf;function dE(){if(Uf)return Mc;Uf=1;var i=Function.prototype,e=i.toString;function t(n){if(n!=null){try{return e.call(n)}catch{}try{return n+""}catch{}}return""}return Mc=t,Mc}var wc,Ff;function QM(){if(Ff)return wc;Ff=1;var i=AE(),e=DM(),t=Ws(),n=dE(),r=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,o=Function.prototype,a=Object.prototype,l=o.toString,c=a.hasOwnProperty,u=RegExp("^"+l.call(c).replace(r,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function h(A){if(!t(A)||e(A))return!1;var d=i(A)?u:s;return d.test(n(A))}return wc=h,wc}var bc,Of;function LM(){if(Of)return bc;Of=1;function i(e,t){return e?.[t]}return bc=i,bc}var Tc,Gf;function Ar(){if(Gf)return Tc;Gf=1;var i=QM(),e=LM();function t(n,r){var s=e(n,r);return i(s)?s:void 0}return Tc=t,Tc}var Rc,Hf;function cA(){if(Hf)return Rc;Hf=1;var i=Ar(),e=ri(),t=i(e,"Map");return Rc=t,Rc}var Dc,kf;function ca(){if(kf)return Dc;kf=1;var i=Ar(),e=i(Object,"create");return Dc=e,Dc}var Qc,zf;function NM(){if(zf)return Qc;zf=1;var i=ca();function e(){this.__data__=i?i(null):{},this.size=0}return Qc=e,Qc}var Lc,Vf;function PM(){if(Vf)return Lc;Vf=1;function i(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}return Lc=i,Lc}var Nc,Yf;function UM(){if(Yf)return Nc;Yf=1;var i=ca(),e="__lodash_hash_undefined__",t=Object.prototype,n=t.hasOwnProperty;function r(s){var o=this.__data__;if(i){var a=o[s];return a===e?void 0:a}return n.call(o,s)?o[s]:void 0}return Nc=r,Nc}var Pc,Wf;function FM(){if(Wf)return Pc;Wf=1;var i=ca(),e=Object.prototype,t=e.hasOwnProperty;function n(r){var s=this.__data__;return i?s[r]!==void 0:t.call(s,r)}return Pc=n,Pc}var Uc,qf;function OM(){if(qf)return Uc;qf=1;var i=ca(),e="__lodash_hash_undefined__";function t(n,r){var s=this.__data__;return this.size+=this.has(n)?0:1,s[n]=i&&r===void 0?e:r,this}return Uc=t,Uc}var Fc,Xf;function GM(){if(Xf)return Fc;Xf=1;var i=NM(),e=PM(),t=UM(),n=FM(),r=OM();function s(o){var a=-1,l=o==null?0:o.length;for(this.clear();++a<l;){var c=o[a];this.set(c[0],c[1])}}return s.prototype.clear=i,s.prototype.delete=e,s.prototype.get=t,s.prototype.has=n,s.prototype.set=r,Fc=s,Fc}var Oc,Kf;function HM(){if(Kf)return Oc;Kf=1;var i=GM(),e=aa(),t=cA();function n(){this.size=0,this.__data__={hash:new i,map:new(t||e),string:new i}}return Oc=n,Oc}var Gc,jf;function kM(){if(jf)return Gc;jf=1;function i(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}return Gc=i,Gc}var Hc,Jf;function la(){if(Jf)return Hc;Jf=1;var i=kM();function e(t,n){var r=t.__data__;return i(n)?r[typeof n=="string"?"string":"hash"]:r.map}return Hc=e,Hc}var kc,Zf;function zM(){if(Zf)return kc;Zf=1;var i=la();function e(t){var n=i(this,t).delete(t);return this.size-=n?1:0,n}return kc=e,kc}var zc,$f;function VM(){if($f)return zc;$f=1;var i=la();function e(t){return i(this,t).get(t)}return zc=e,zc}var Vc,ep;function YM(){if(ep)return Vc;ep=1;var i=la();function e(t){return i(this,t).has(t)}return Vc=e,Vc}var Yc,tp;function WM(){if(tp)return Yc;tp=1;var i=la();function e(t,n){var r=i(this,t),s=r.size;return r.set(t,n),this.size+=r.size==s?0:1,this}return Yc=e,Yc}var Wc,np;function fE(){if(np)return Wc;np=1;var i=HM(),e=zM(),t=VM(),n=YM(),r=WM();function s(o){var a=-1,l=o==null?0:o.length;for(this.clear();++a<l;){var c=o[a];this.set(c[0],c[1])}}return s.prototype.clear=i,s.prototype.delete=e,s.prototype.get=t,s.prototype.has=n,s.prototype.set=r,Wc=s,Wc}var qc,ip;function qM(){if(ip)return qc;ip=1;var i=aa(),e=cA(),t=fE(),n=200;function r(s,o){var a=this.__data__;if(a instanceof i){var l=a.__data__;if(!e||l.length<n-1)return l.push([s,o]),this.size=++a.size,this;a=this.__data__=new t(l)}return a.set(s,o),this.size=a.size,this}return qc=r,qc}var Xc,rp;function XM(){if(rp)return Xc;rp=1;var i=aa(),e=SM(),t=BM(),n=MM(),r=wM(),s=qM();function o(a){var l=this.__data__=new i(a);this.size=l.size}return o.prototype.clear=e,o.prototype.delete=t,o.prototype.get=n,o.prototype.has=r,o.prototype.set=s,Xc=o,Xc}var Kc,sp;function KM(){if(sp)return Kc;sp=1;function i(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}return Kc=i,Kc}var jc,op;function pE(){if(op)return jc;op=1;var i=Ar(),e=function(){try{var t=i(Object,"defineProperty");return t({},"",{}),t}catch{}}();return jc=e,jc}var Jc,ap;function gE(){if(ap)return Jc;ap=1;var i=pE();function e(t,n,r){n=="__proto__"&&i?i(t,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[n]=r}return Jc=e,Jc}var Zc,cp;function mE(){if(cp)return Zc;cp=1;var i=gE(),e=uE(),t=Object.prototype,n=t.hasOwnProperty;function r(s,o,a){var l=s[o];(!(n.call(s,o)&&e(l,a))||a===void 0&&!(o in s))&&i(s,o,a)}return Zc=r,Zc}var $c,lp;function qs(){if(lp)return $c;lp=1;var i=mE(),e=gE();function t(n,r,s,o){var a=!s;s||(s={});for(var l=-1,c=r.length;++l<c;){var u=r[l],h=o?o(s[u],n[u],u,s,n):void 0;h===void 0&&(h=n[u]),a?e(s,u,h):i(s,u,h)}return s}return $c=t,$c}var el,up;function jM(){if(up)return el;up=1;function i(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}return el=i,el}var tl,hp;function dr(){if(hp)return tl;hp=1;function i(e){return e!=null&&typeof e=="object"}return tl=i,tl}var nl,Ap;function JM(){if(Ap)return nl;Ap=1;var i=os(),e=dr(),t="[object Arguments]";function n(r){return e(r)&&i(r)==t}return nl=n,nl}var il,dp;function EE(){if(dp)return il;dp=1;var i=JM(),e=dr(),t=Object.prototype,n=t.hasOwnProperty,r=t.propertyIsEnumerable,s=i(function(){return arguments}())?i:function(o){return e(o)&&n.call(o,"callee")&&!r.call(o,"callee")};return il=s,il}var rl,fp;function fr(){if(fp)return rl;fp=1;var i=Array.isArray;return rl=i,rl}var Ms={exports:{}},sl,pp;function ZM(){if(pp)return sl;pp=1;function i(){return!1}return sl=i,sl}Ms.exports;var gp;function IE(){return gp||(gp=1,function(i,e){var t=ri(),n=ZM(),r=e&&!e.nodeType&&e,s=r&&!0&&i&&!i.nodeType&&i,o=s&&s.exports===r,a=o?t.Buffer:void 0,l=a?a.isBuffer:void 0,c=l||n;i.exports=c}(Ms,Ms.exports)),Ms.exports}var ol,mp;function $M(){if(mp)return ol;mp=1;var i=9007199254740991,e=/^(?:0|[1-9]\d*)$/;function t(n,r){var s=typeof n;return r=r??i,!!r&&(s=="number"||s!="symbol"&&e.test(n))&&n>-1&&n%1==0&&n<r}return ol=t,ol}var al,Ep;function _E(){if(Ep)return al;Ep=1;var i=9007199254740991;function e(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=i}return al=e,al}var cl,Ip;function ew(){if(Ip)return cl;Ip=1;var i=os(),e=_E(),t=dr(),n="[object Arguments]",r="[object Array]",s="[object Boolean]",o="[object Date]",a="[object Error]",l="[object Function]",c="[object Map]",u="[object Number]",h="[object Object]",A="[object RegExp]",d="[object Set]",m="[object String]",E="[object WeakMap]",g="[object ArrayBuffer]",p="[object DataView]",C="[object Float32Array]",y="[object Float64Array]",M="[object Int8Array]",P="[object Int16Array]",Q="[object Int32Array]",R="[object Uint8Array]",T="[object Uint8ClampedArray]",U="[object Uint16Array]",_="[object Uint32Array]",v={};v[C]=v[y]=v[M]=v[P]=v[Q]=v[R]=v[T]=v[U]=v[_]=!0,v[n]=v[r]=v[g]=v[s]=v[p]=v[o]=v[a]=v[l]=v[c]=v[u]=v[h]=v[A]=v[d]=v[m]=v[E]=!1;function F(G){return t(G)&&e(G.length)&&!!v[i(G)]}return cl=F,cl}var ll,_p;function lA(){if(_p)return ll;_p=1;function i(e){return function(t){return e(t)}}return ll=i,ll}var ws={exports:{}};ws.exports;var Cp;function uA(){return Cp||(Cp=1,function(i,e){var t=hE(),n=e&&!e.nodeType&&e,r=n&&!0&&i&&!i.nodeType&&i,s=r&&r.exports===n,o=s&&t.process,a=function(){try{var l=r&&r.require&&r.require("util").types;return l||o&&o.binding&&o.binding("util")}catch{}}();i.exports=a}(ws,ws.exports)),ws.exports}var ul,vp;function tw(){if(vp)return ul;vp=1;var i=ew(),e=lA(),t=uA(),n=t&&t.isTypedArray,r=n?e(n):i;return ul=r,ul}var hl,yp;function CE(){if(yp)return hl;yp=1;var i=jM(),e=EE(),t=fr(),n=IE(),r=$M(),s=tw(),o=Object.prototype,a=o.hasOwnProperty;function l(c,u){var h=t(c),A=!h&&e(c),d=!h&&!A&&n(c),m=!h&&!A&&!d&&s(c),E=h||A||d||m,g=E?i(c.length,String):[],p=g.length;for(var C in c)(u||a.call(c,C))&&!(E&&(C=="length"||d&&(C=="offset"||C=="parent")||m&&(C=="buffer"||C=="byteLength"||C=="byteOffset")||r(C,p)))&&g.push(C);return g}return hl=l,hl}var Al,xp;function hA(){if(xp)return Al;xp=1;var i=Object.prototype;function e(t){var n=t&&t.constructor,r=typeof n=="function"&&n.prototype||i;return t===r}return Al=e,Al}var dl,Sp;function vE(){if(Sp)return dl;Sp=1;function i(e,t){return function(n){return e(t(n))}}return dl=i,dl}var fl,Bp;function nw(){if(Bp)return fl;Bp=1;var i=vE(),e=i(Object.keys,Object);return fl=e,fl}var pl,Mp;function iw(){if(Mp)return pl;Mp=1;var i=hA(),e=nw(),t=Object.prototype,n=t.hasOwnProperty;function r(s){if(!i(s))return e(s);var o=[];for(var a in Object(s))n.call(s,a)&&a!="constructor"&&o.push(a);return o}return pl=r,pl}var gl,wp;function yE(){if(wp)return gl;wp=1;var i=AE(),e=_E();function t(n){return n!=null&&e(n.length)&&!i(n)}return gl=t,gl}var ml,bp;function AA(){if(bp)return ml;bp=1;var i=CE(),e=iw(),t=yE();function n(r){return t(r)?i(r):e(r)}return ml=n,ml}var El,Tp;function rw(){if(Tp)return El;Tp=1;var i=qs(),e=AA();function t(n,r){return n&&i(r,e(r),n)}return El=t,El}var Il,Rp;function sw(){if(Rp)return Il;Rp=1;function i(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}return Il=i,Il}var _l,Dp;function ow(){if(Dp)return _l;Dp=1;var i=Ws(),e=hA(),t=sw(),n=Object.prototype,r=n.hasOwnProperty;function s(o){if(!i(o))return t(o);var a=e(o),l=[];for(var c in o)c=="constructor"&&(a||!r.call(o,c))||l.push(c);return l}return _l=s,_l}var Cl,Qp;function dA(){if(Qp)return Cl;Qp=1;var i=CE(),e=ow(),t=yE();function n(r){return t(r)?i(r,!0):e(r)}return Cl=n,Cl}var vl,Lp;function aw(){if(Lp)return vl;Lp=1;var i=qs(),e=dA();function t(n,r){return n&&i(r,e(r),n)}return vl=t,vl}var bs={exports:{}};bs.exports;var Np;function cw(){return Np||(Np=1,function(i,e){var t=ri(),n=e&&!e.nodeType&&e,r=n&&!0&&i&&!i.nodeType&&i,s=r&&r.exports===n,o=s?t.Buffer:void 0,a=o?o.allocUnsafe:void 0;function l(c,u){if(u)return c.slice();var h=c.length,A=a?a(h):new c.constructor(h);return c.copy(A),A}i.exports=l}(bs,bs.exports)),bs.exports}var yl,Pp;function lw(){if(Pp)return yl;Pp=1;function i(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}return yl=i,yl}var xl,Up;function uw(){if(Up)return xl;Up=1;function i(e,t){for(var n=-1,r=e==null?0:e.length,s=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[s++]=a)}return o}return xl=i,xl}var Sl,Fp;function xE(){if(Fp)return Sl;Fp=1;function i(){return[]}return Sl=i,Sl}var Bl,Op;function fA(){if(Op)return Bl;Op=1;var i=uw(),e=xE(),t=Object.prototype,n=t.propertyIsEnumerable,r=Object.getOwnPropertySymbols,s=r?function(o){return o==null?[]:(o=Object(o),i(r(o),function(a){return n.call(o,a)}))}:e;return Bl=s,Bl}var Ml,Gp;function hw(){if(Gp)return Ml;Gp=1;var i=qs(),e=fA();function t(n,r){return i(n,e(n),r)}return Ml=t,Ml}var wl,Hp;function pA(){if(Hp)return wl;Hp=1;function i(e,t){for(var n=-1,r=t.length,s=e.length;++n<r;)e[s+n]=t[n];return e}return wl=i,wl}var bl,kp;function gA(){if(kp)return bl;kp=1;var i=vE(),e=i(Object.getPrototypeOf,Object);return bl=e,bl}var Tl,zp;function SE(){if(zp)return Tl;zp=1;var i=pA(),e=gA(),t=fA(),n=xE(),r=Object.getOwnPropertySymbols,s=r?function(o){for(var a=[];o;)i(a,t(o)),o=e(o);return a}:n;return Tl=s,Tl}var Rl,Vp;function Aw(){if(Vp)return Rl;Vp=1;var i=qs(),e=SE();function t(n,r){return i(n,e(n),r)}return Rl=t,Rl}var Dl,Yp;function BE(){if(Yp)return Dl;Yp=1;var i=pA(),e=fr();function t(n,r,s){var o=r(n);return e(n)?o:i(o,s(n))}return Dl=t,Dl}var Ql,Wp;function dw(){if(Wp)return Ql;Wp=1;var i=BE(),e=fA(),t=AA();function n(r){return i(r,t,e)}return Ql=n,Ql}var Ll,qp;function ME(){if(qp)return Ll;qp=1;var i=BE(),e=SE(),t=dA();function n(r){return i(r,t,e)}return Ll=n,Ll}var Nl,Xp;function fw(){if(Xp)return Nl;Xp=1;var i=Ar(),e=ri(),t=i(e,"DataView");return Nl=t,Nl}var Pl,Kp;function pw(){if(Kp)return Pl;Kp=1;var i=Ar(),e=ri(),t=i(e,"Promise");return Pl=t,Pl}var Ul,jp;function gw(){if(jp)return Ul;jp=1;var i=Ar(),e=ri(),t=i(e,"Set");return Ul=t,Ul}var Fl,Jp;function mw(){if(Jp)return Fl;Jp=1;var i=Ar(),e=ri(),t=i(e,"WeakMap");return Fl=t,Fl}var Ol,Zp;function mA(){if(Zp)return Ol;Zp=1;var i=fw(),e=cA(),t=pw(),n=gw(),r=mw(),s=os(),o=dE(),a="[object Map]",l="[object Object]",c="[object Promise]",u="[object Set]",h="[object WeakMap]",A="[object DataView]",d=o(i),m=o(e),E=o(t),g=o(n),p=o(r),C=s;return(i&&C(new i(new ArrayBuffer(1)))!=A||e&&C(new e)!=a||t&&C(t.resolve())!=c||n&&C(new n)!=u||r&&C(new r)!=h)&&(C=function(y){var M=s(y),P=M==l?y.constructor:void 0,Q=P?o(P):"";if(Q)switch(Q){case d:return A;case m:return a;case E:return c;case g:return u;case p:return h}return M}),Ol=C,Ol}var Gl,$p;function Ew(){if($p)return Gl;$p=1;var i=Object.prototype,e=i.hasOwnProperty;function t(n){var r=n.length,s=new n.constructor(r);return r&&typeof n[0]=="string"&&e.call(n,"index")&&(s.index=n.index,s.input=n.input),s}return Gl=t,Gl}var Hl,eg;function Iw(){if(eg)return Hl;eg=1;var i=ri(),e=i.Uint8Array;return Hl=e,Hl}var kl,tg;function EA(){if(tg)return kl;tg=1;var i=Iw();function e(t){var n=new t.constructor(t.byteLength);return new i(n).set(new i(t)),n}return kl=e,kl}var zl,ng;function _w(){if(ng)return zl;ng=1;var i=EA();function e(t,n){var r=n?i(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}return zl=e,zl}var Vl,ig;function Cw(){if(ig)return Vl;ig=1;var i=/\w*$/;function e(t){var n=new t.constructor(t.source,i.exec(t));return n.lastIndex=t.lastIndex,n}return Vl=e,Vl}var Yl,rg;function vw(){if(rg)return Yl;rg=1;var i=Ys(),e=i?i.prototype:void 0,t=e?e.valueOf:void 0;function n(r){return t?Object(t.call(r)):{}}return Yl=n,Yl}var Wl,sg;function yw(){if(sg)return Wl;sg=1;var i=EA();function e(t,n){var r=n?i(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}return Wl=e,Wl}var ql,og;function xw(){if(og)return ql;og=1;var i=EA(),e=_w(),t=Cw(),n=vw(),r=yw(),s="[object Boolean]",o="[object Date]",a="[object Map]",l="[object Number]",c="[object RegExp]",u="[object Set]",h="[object String]",A="[object Symbol]",d="[object ArrayBuffer]",m="[object DataView]",E="[object Float32Array]",g="[object Float64Array]",p="[object Int8Array]",C="[object Int16Array]",y="[object Int32Array]",M="[object Uint8Array]",P="[object Uint8ClampedArray]",Q="[object Uint16Array]",R="[object Uint32Array]";function T(U,_,v){var F=U.constructor;switch(_){case d:return i(U);case s:case o:return new F(+U);case m:return e(U,v);case E:case g:case p:case C:case y:case M:case P:case Q:case R:return r(U,v);case a:return new F;case l:case h:return new F(U);case c:return t(U);case u:return new F;case A:return n(U)}}return ql=T,ql}var Xl,ag;function Sw(){if(ag)return Xl;ag=1;var i=Ws(),e=Object.create,t=function(){function n(){}return function(r){if(!i(r))return{};if(e)return e(r);n.prototype=r;var s=new n;return n.prototype=void 0,s}}();return Xl=t,Xl}var Kl,cg;function Bw(){if(cg)return Kl;cg=1;var i=Sw(),e=gA(),t=hA();function n(r){return typeof r.constructor=="function"&&!t(r)?i(e(r)):{}}return Kl=n,Kl}var jl,lg;function Mw(){if(lg)return jl;lg=1;var i=mA(),e=dr(),t="[object Map]";function n(r){return e(r)&&i(r)==t}return jl=n,jl}var Jl,ug;function ww(){if(ug)return Jl;ug=1;var i=Mw(),e=lA(),t=uA(),n=t&&t.isMap,r=n?e(n):i;return Jl=r,Jl}var Zl,hg;function bw(){if(hg)return Zl;hg=1;var i=mA(),e=dr(),t="[object Set]";function n(r){return e(r)&&i(r)==t}return Zl=n,Zl}var $l,Ag;function Tw(){if(Ag)return $l;Ag=1;var i=bw(),e=lA(),t=uA(),n=t&&t.isSet,r=n?e(n):i;return $l=r,$l}var eu,dg;function Rw(){if(dg)return eu;dg=1;var i=XM(),e=KM(),t=mE(),n=rw(),r=aw(),s=cw(),o=lw(),a=hw(),l=Aw(),c=dw(),u=ME(),h=mA(),A=Ew(),d=xw(),m=Bw(),E=fr(),g=IE(),p=ww(),C=Ws(),y=Tw(),M=AA(),P=dA(),Q=1,R=2,T=4,U="[object Arguments]",_="[object Array]",v="[object Boolean]",F="[object Date]",G="[object Error]",z="[object Function]",Z="[object GeneratorFunction]",Y="[object Map]",oe="[object Number]",te="[object Object]",Ce="[object RegExp]",Ie="[object Set]",Le="[object String]",ke="[object Symbol]",be="[object WeakMap]",re="[object ArrayBuffer]",ue="[object DataView]",ge="[object Float32Array]",Se="[object Float64Array]",We="[object Int8Array]",qe="[object Int16Array]",st="[object Int32Array]",ht="[object Uint8Array]",Je="[object Uint8ClampedArray]",H="[object Uint16Array]",Ot="[object Uint32Array]",Ge={};Ge[U]=Ge[_]=Ge[re]=Ge[ue]=Ge[v]=Ge[F]=Ge[ge]=Ge[Se]=Ge[We]=Ge[qe]=Ge[st]=Ge[Y]=Ge[oe]=Ge[te]=Ge[Ce]=Ge[Ie]=Ge[Le]=Ge[ke]=Ge[ht]=Ge[Je]=Ge[H]=Ge[Ot]=!0,Ge[G]=Ge[z]=Ge[be]=!1;function $e(Be,At,He,L,S,J){var se,Ae=At&Q,ae=At&R,ze=At&T;if(He&&(se=S?He(Be,L,S,J):He(Be)),se!==void 0)return se;if(!C(Be))return Be;var Me=E(Be);if(Me){if(se=A(Be),!Ae)return o(Be,se)}else{var Re=h(Be),je=Re==z||Re==Z;if(g(Be))return s(Be,Ae);if(Re==te||Re==U||je&&!S){if(se=ae||je?{}:m(Be),!Ae)return ae?l(Be,r(se,Be)):a(Be,n(se,Be))}else{if(!Ge[Re])return S?Be:{};se=d(Be,Re,Ae)}}J||(J=new i);var fe=J.get(Be);if(fe)return fe;J.set(Be,se),y(Be)?Be.forEach(function(Fe){se.add($e(Fe,At,He,Fe,Be,J))}):p(Be)&&Be.forEach(function(Fe,ye){se.set(ye,$e(Fe,At,He,ye,Be,J))});var De=ze?ae?u:c:ae?P:M,Xe=Me?void 0:De(Be);return e(Xe||Be,function(Fe,ye){Xe&&(ye=Fe,Fe=Be[ye]),t(se,ye,$e(Fe,At,He,ye,Be,J))}),se}return eu=$e,eu}var tu,fg;function IA(){if(fg)return tu;fg=1;var i=os(),e=dr(),t="[object Symbol]";function n(r){return typeof r=="symbol"||e(r)&&i(r)==t}return tu=n,tu}var nu,pg;function Dw(){if(pg)return nu;pg=1;var i=fr(),e=IA(),t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/;function r(s,o){if(i(s))return!1;var a=typeof s;return a=="number"||a=="symbol"||a=="boolean"||s==null||e(s)?!0:n.test(s)||!t.test(s)||o!=null&&s in Object(o)}return nu=r,nu}var iu,gg;function Qw(){if(gg)return iu;gg=1;var i=fE(),e="Expected a function";function t(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new TypeError(e);var s=function(){var o=arguments,a=r?r.apply(this,o):o[0],l=s.cache;if(l.has(a))return l.get(a);var c=n.apply(this,o);return s.cache=l.set(a,c)||l,c};return s.cache=new(t.Cache||i),s}return t.Cache=i,iu=t,iu}var ru,mg;function Lw(){if(mg)return ru;mg=1;var i=Qw(),e=500;function t(n){var r=i(n,function(o){return s.size===e&&s.clear(),o}),s=r.cache;return r}return ru=t,ru}var su,Eg;function Nw(){if(Eg)return su;Eg=1;var i=Lw(),e=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,t=/\\(\\)?/g,n=i(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(e,function(o,a,l,c){s.push(l?c.replace(t,"$1"):a||o)}),s});return su=n,su}var ou,Ig;function Pw(){if(Ig)return ou;Ig=1;var i=Ys(),e=lE(),t=fr(),n=IA(),r=i?i.prototype:void 0,s=r?r.toString:void 0;function o(a){if(typeof a=="string")return a;if(t(a))return e(a,o)+"";if(n(a))return s?s.call(a):"";var l=a+"";return l=="0"&&1/a==-1/0?"-0":l}return ou=o,ou}var au,_g;function Uw(){if(_g)return au;_g=1;var i=Pw();function e(t){return t==null?"":i(t)}return au=e,au}var cu,Cg;function _A(){if(Cg)return cu;Cg=1;var i=fr(),e=Dw(),t=Nw(),n=Uw();function r(s,o){return i(s)?s:e(s,o)?[s]:t(n(s))}return cu=r,cu}var lu,vg;function Fw(){if(vg)return lu;vg=1;function i(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}return lu=i,lu}var uu,yg;function wE(){if(yg)return uu;yg=1;var i=IA();function e(t){if(typeof t=="string"||i(t))return t;var n=t+"";return n=="0"&&1/t==-1/0?"-0":n}return uu=e,uu}var hu,xg;function Ow(){if(xg)return hu;xg=1;var i=_A(),e=wE();function t(n,r){r=i(r,n);for(var s=0,o=r.length;n!=null&&s<o;)n=n[e(r[s++])];return s&&s==o?n:void 0}return hu=t,hu}var Au,Sg;function Gw(){if(Sg)return Au;Sg=1;function i(e,t,n){var r=-1,s=e.length;t<0&&(t=-t>s?0:s+t),n=n>s?s:n,n<0&&(n+=s),s=t>n?0:n-t>>>0,t>>>=0;for(var o=Array(s);++r<s;)o[r]=e[r+t];return o}return Au=i,Au}var du,Bg;function Hw(){if(Bg)return du;Bg=1;var i=Ow(),e=Gw();function t(n,r){return r.length<2?n:i(n,e(r,0,-1))}return du=t,du}var fu,Mg;function kw(){if(Mg)return fu;Mg=1;var i=_A(),e=Fw(),t=Hw(),n=wE();function r(s,o){return o=i(o,s),s=t(s,o),s==null||delete s[n(e(o))]}return fu=r,fu}var pu,wg;function zw(){if(wg)return pu;wg=1;var i=os(),e=gA(),t=dr(),n="[object Object]",r=Function.prototype,s=Object.prototype,o=r.toString,a=s.hasOwnProperty,l=o.call(Object);function c(u){if(!t(u)||i(u)!=n)return!1;var h=e(u);if(h===null)return!0;var A=a.call(h,"constructor")&&h.constructor;return typeof A=="function"&&A instanceof A&&o.call(A)==l}return pu=c,pu}var gu,bg;function Vw(){if(bg)return gu;bg=1;var i=zw();function e(t){return i(t)?void 0:t}return gu=e,gu}var mu,Tg;function Yw(){if(Tg)return mu;Tg=1;var i=Ys(),e=EE(),t=fr(),n=i?i.isConcatSpreadable:void 0;function r(s){return t(s)||e(s)||!!(n&&s&&s[n])}return mu=r,mu}var Eu,Rg;function Ww(){if(Rg)return Eu;Rg=1;var i=pA(),e=Yw();function t(n,r,s,o,a){var l=-1,c=n.length;for(s||(s=e),a||(a=[]);++l<c;){var u=n[l];r>0&&s(u)?r>1?t(u,r-1,s,o,a):i(a,u):o||(a[a.length]=u)}return a}return Eu=t,Eu}var Iu,Dg;function qw(){if(Dg)return Iu;Dg=1;var i=Ww();function e(t){var n=t==null?0:t.length;return n?i(t,1):[]}return Iu=e,Iu}var _u,Qg;function Xw(){if(Qg)return _u;Qg=1;function i(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}return _u=i,_u}var Cu,Lg;function Kw(){if(Lg)return Cu;Lg=1;var i=Xw(),e=Math.max;function t(n,r,s){return r=e(r===void 0?n.length-1:r,0),function(){for(var o=arguments,a=-1,l=e(o.length-r,0),c=Array(l);++a<l;)c[a]=o[r+a];a=-1;for(var u=Array(r+1);++a<r;)u[a]=o[a];return u[r]=s(c),i(n,this,u)}}return Cu=t,Cu}var vu,Ng;function jw(){if(Ng)return vu;Ng=1;function i(e){return function(){return e}}return vu=i,vu}var yu,Pg;function Jw(){if(Pg)return yu;Pg=1;function i(e){return e}return yu=i,yu}var xu,Ug;function Zw(){if(Ug)return xu;Ug=1;var i=jw(),e=pE(),t=Jw(),n=e?function(r,s){return e(r,"toString",{configurable:!0,enumerable:!1,value:i(s),writable:!0})}:t;return xu=n,xu}var Su,Fg;function $w(){if(Fg)return Su;Fg=1;var i=800,e=16,t=Date.now;function n(r){var s=0,o=0;return function(){var a=t(),l=e-(a-o);if(o=a,l>0){if(++s>=i)return arguments[0]}else s=0;return r.apply(void 0,arguments)}}return Su=n,Su}var Bu,Og;function eb(){if(Og)return Bu;Og=1;var i=Zw(),e=$w(),t=e(i);return Bu=t,Bu}var Mu,Gg;function tb(){if(Gg)return Mu;Gg=1;var i=qw(),e=Kw(),t=eb();function n(r){return t(e(r,void 0,i),r+"")}return Mu=n,Mu}var wu,Hg;function nb(){if(Hg)return wu;Hg=1;var i=lE(),e=Rw(),t=kw(),n=_A(),r=qs(),s=Vw(),o=tb(),a=ME(),l=1,c=2,u=4,h=o(function(A,d){var m={};if(A==null)return m;var E=!1;d=i(d,function(p){return p=n(p,A),E||(E=p.length>1),p}),r(A,a(A),m),E&&(m=e(m,l|c|u,s));for(var g=d.length;g--;)t(m,d[g]);return m});return wu=h,wu}var ib=nb();const rb=IM(ib);function sb(i,{renderer:e,...t}){if(!e)throw new Error(`Texture requires renderer to passed in the options for ${i}!`);return new Promise((n,r)=>{new tA().load(i,s=>{e.outputColorSpace===It&&t.gamma&&(s.colorSpace=It),Object.keys(t).filter(a=>!["linear"].includes(a)).forEach(a=>{s[a]=t[a]}),e.initTexture(s),n(s)},null,s=>r(new Error(`Could not load texture ${i}:
${s}`)))})}class bE extends Km{constructor(e){super(e),this.type=sn}parse(e){const o=function(T,U){switch(T){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(U||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(U||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(U||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(U||""))}},h=function(T,U,_){U=U||1024;let F=T.pos,G=-1,z=0,Z="",Y=String.fromCharCode.apply(null,new Uint16Array(T.subarray(F,F+128)));for(;0>(G=Y.indexOf(`
`))&&z<U&&F<T.byteLength;)Z+=Y,z+=Y.length,F+=128,Y+=String.fromCharCode.apply(null,new Uint16Array(T.subarray(F,F+128)));return-1<G?(T.pos+=z+G+1,Z+Y.slice(0,G)):!1},A=function(T){const U=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,v=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,F=/^\s*FORMAT=(\S+)\s*$/,G=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,z={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let Z,Y;for((T.pos>=T.byteLength||!(Z=h(T)))&&o(1,"no header found"),(Y=Z.match(U))||o(3,"bad initial token"),z.valid|=1,z.programtype=Y[1],z.string+=Z+`
`;Z=h(T),Z!==!1;){if(z.string+=Z+`
`,Z.charAt(0)==="#"){z.comments+=Z+`
`;continue}if((Y=Z.match(_))&&(z.gamma=parseFloat(Y[1])),(Y=Z.match(v))&&(z.exposure=parseFloat(Y[1])),(Y=Z.match(F))&&(z.valid|=2,z.format=Y[1]),(Y=Z.match(G))&&(z.valid|=4,z.height=parseInt(Y[1],10),z.width=parseInt(Y[2],10)),z.valid&2&&z.valid&4)break}return z.valid&2||o(3,"missing format specifier"),z.valid&4||o(3,"missing image size specifier"),z},d=function(T,U,_){const v=U;if(v<8||v>32767||T[0]!==2||T[1]!==2||T[2]&128)return new Uint8Array(T);v!==(T[2]<<8|T[3])&&o(3,"wrong scanline width");const F=new Uint8Array(4*U*_);F.length||o(4,"unable to allocate buffer space");let G=0,z=0;const Z=4*v,Y=new Uint8Array(4),oe=new Uint8Array(Z);let te=_;for(;te>0&&z<T.byteLength;){z+4>T.byteLength&&o(1),Y[0]=T[z++],Y[1]=T[z++],Y[2]=T[z++],Y[3]=T[z++],(Y[0]!=2||Y[1]!=2||(Y[2]<<8|Y[3])!=v)&&o(3,"bad rgbe scanline format");let Ce=0,Ie;for(;Ce<Z&&z<T.byteLength;){Ie=T[z++];const ke=Ie>128;if(ke&&(Ie-=128),(Ie===0||Ce+Ie>Z)&&o(3,"bad scanline data"),ke){const be=T[z++];for(let re=0;re<Ie;re++)oe[Ce++]=be}else oe.set(T.subarray(z,z+Ie),Ce),Ce+=Ie,z+=Ie}const Le=v;for(let ke=0;ke<Le;ke++){let be=0;F[G]=oe[ke+be],be+=v,F[G+1]=oe[ke+be],be+=v,F[G+2]=oe[ke+be],be+=v,F[G+3]=oe[ke+be],G+=4}te--}return F},m=function(T,U,_,v){const F=T[U+3],G=Math.pow(2,F-128)/255;_[v+0]=T[U+0]*G,_[v+1]=T[U+1]*G,_[v+2]=T[U+2]*G,_[v+3]=1},E=function(T,U,_,v){const F=T[U+3],G=Math.pow(2,F-128)/255;_[v+0]=Fr.toHalfFloat(Math.min(T[U+0]*G,65504)),_[v+1]=Fr.toHalfFloat(Math.min(T[U+1]*G,65504)),_[v+2]=Fr.toHalfFloat(Math.min(T[U+2]*G,65504)),_[v+3]=Fr.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;const p=A(g),C=p.width,y=p.height,M=d(g.subarray(g.pos),C,y);let P,Q,R;switch(this.type){case jt:R=M.length/4;const T=new Float32Array(R*4);for(let _=0;_<R;_++)m(M,_*4,T,_*4);P=T,Q=jt;break;case sn:R=M.length/4;const U=new Uint16Array(R*4);for(let _=0;_<R;_++)E(M,_*4,U,_*4);P=U,Q=sn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:C,height:y,data:P,header:p.string,gamma:p.gamma,exposure:p.exposure,type:Q}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){switch(o.type){case jt:case sn:o.colorSpace=Qt,o.minFilter=wt,o.magFilter=wt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,r)}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Bn=Uint8Array,Gr=Uint16Array,ob=Int32Array,TE=new Bn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),RE=new Bn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ab=new Bn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),DE=function(i,e){for(var t=new Gr(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new ob(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},QE=DE(TE,2),LE=QE.b,cb=QE.r;LE[28]=258,cb[258]=28;var lb=DE(RE,0),ub=lb.b,Th=new Gr(32768);for(var Dt=0;Dt<32768;++Dt){var Li=(Dt&43690)>>1|(Dt&21845)<<1;Li=(Li&52428)>>2|(Li&13107)<<2,Li=(Li&61680)>>4|(Li&3855)<<4,Th[Dt]=((Li&65280)>>8|(Li&255)<<8)>>1}var Qs=function(i,e,t){for(var n=i.length,r=0,s=new Gr(e);r<n;++r)i[r]&&++s[i[r]-1];var o=new Gr(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new Gr(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],h=o[i[r]-1]++<<u,A=h|(1<<u)-1;h<=A;++h)a[Th[h]>>l]=c}else for(a=new Gr(n),r=0;r<n;++r)i[r]&&(a[r]=Th[o[i[r]-1]++]>>15-i[r]);return a},Xs=new Bn(288);for(var Dt=0;Dt<144;++Dt)Xs[Dt]=8;for(var Dt=144;Dt<256;++Dt)Xs[Dt]=9;for(var Dt=256;Dt<280;++Dt)Xs[Dt]=7;for(var Dt=280;Dt<288;++Dt)Xs[Dt]=8;var NE=new Bn(32);for(var Dt=0;Dt<32;++Dt)NE[Dt]=5;var hb=Qs(Xs,9,1),Ab=Qs(NE,5,1),bu=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Nn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Tu=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},db=function(i){return(i+7)/8|0},fb=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new Bn(i.subarray(e,t))},pb=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Pn=function(i,e,t){var n=new Error(e||pb[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Pn),!t)throw n;return n},gb=function(i,e,t,n){var r=i.length,s=0;if(!r||e.f&&!e.l)return t||new Bn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new Bn(r*3));var c=function(ht){var Je=t.length;if(ht>Je){var H=new Bn(Math.max(Je*2,ht));H.set(t),t=H}},u=e.f||0,h=e.p||0,A=e.b||0,d=e.l,m=e.d,E=e.m,g=e.n,p=r*8;do{if(!d){u=Nn(i,h,1);var C=Nn(i,h+1,3);if(h+=3,C)if(C==1)d=hb,m=Ab,E=9,g=5;else if(C==2){var Q=Nn(i,h,31)+257,R=Nn(i,h+10,15)+4,T=Q+Nn(i,h+5,31)+1;h+=14;for(var U=new Bn(T),_=new Bn(19),v=0;v<R;++v)_[ab[v]]=Nn(i,h+v*3,7);h+=R*3;for(var F=bu(_),G=(1<<F)-1,z=Qs(_,F,1),v=0;v<T;){var Z=z[Nn(i,h,G)];h+=Z&15;var y=Z>>4;if(y<16)U[v++]=y;else{var Y=0,oe=0;for(y==16?(oe=3+Nn(i,h,3),h+=2,Y=U[v-1]):y==17?(oe=3+Nn(i,h,7),h+=3):y==18&&(oe=11+Nn(i,h,127),h+=7);oe--;)U[v++]=Y}}var te=U.subarray(0,Q),Ce=U.subarray(Q);E=bu(te),g=bu(Ce),d=Qs(te,E,1),m=Qs(Ce,g,1)}else Pn(1);else{var y=db(h)+4,M=i[y-4]|i[y-3]<<8,P=y+M;if(P>r){l&&Pn(0);break}a&&c(A+M),t.set(i.subarray(y,P),A),e.b=A+=M,e.p=h=P*8,e.f=u;continue}if(h>p){l&&Pn(0);break}}a&&c(A+131072);for(var Ie=(1<<E)-1,Le=(1<<g)-1,ke=h;;ke=h){var Y=d[Tu(i,h)&Ie],be=Y>>4;if(h+=Y&15,h>p){l&&Pn(0);break}if(Y||Pn(2),be<256)t[A++]=be;else if(be==256){ke=h,d=null;break}else{var re=be-254;if(be>264){var v=be-257,ue=TE[v];re=Nn(i,h,(1<<ue)-1)+LE[v],h+=ue}var ge=m[Tu(i,h)&Le],Se=ge>>4;ge||Pn(3),h+=ge&15;var Ce=ub[Se];if(Se>3){var ue=RE[Se];Ce+=Tu(i,h)&(1<<ue)-1,h+=ue}if(h>p){l&&Pn(0);break}a&&c(A+131072);var We=A+re;if(A<Ce){var qe=s-Ce,st=Math.min(Ce,We);for(qe+A<0&&Pn(3);A<st;++A)t[A]=n[qe+A]}for(;A<We;++A)t[A]=t[A-Ce]}}e.l=d,e.p=ke,e.b=A,e.f=u,d&&(u=1,e.m=E,e.d=m,e.n=g)}while(!u);return A!=t.length&&o?fb(t,0,A):t.subarray(0,A)},mb=new Bn(0),Eb=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Pn(6,"invalid zlib data"),(i[1]>>5&1)==1&&Pn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function wo(i,e){return gb(i.subarray(Eb(i),-4),{i:2},e,e)}var Ib=typeof TextDecoder<"u"&&new TextDecoder,_b=0;try{Ib.decode(mb,{stream:!0}),_b=1}catch{}class Cb extends Km{constructor(e){super(e),this.type=sn}parse(e){const U=Math.pow(2.7182818,2.2);function _(f,I){let x=0;for(let k=0;k<65536;++k)(k==0||f[k>>3]&1<<(k&7))&&(I[x++]=k);const B=x-1;for(;x<65536;)I[x++]=0;return B}function v(f){for(let I=0;I<16384;I++)f[I]={},f[I].len=0,f[I].lit=0,f[I].p=null}const F={l:0,c:0,lc:0};function G(f,I,x,B,k){for(;x<f;)I=I<<8|at(B,k),x+=8;x-=f,F.l=I>>x&(1<<f)-1,F.c=I,F.lc=x}const z=new Array(59);function Z(f){for(let x=0;x<=58;++x)z[x]=0;for(let x=0;x<65537;++x)z[f[x]]+=1;let I=0;for(let x=58;x>0;--x){const B=I+z[x]>>1;z[x]=I,I=B}for(let x=0;x<65537;++x){const B=f[x];B>0&&(f[x]=B|z[B]++<<6)}}function Y(f,I,x,B,k,O){const K=I;let ne=0,$=0;for(;B<=k;B++){if(K.value-I.value>x)return!1;G(6,ne,$,f,K);const ee=F.l;if(ne=F.c,$=F.lc,O[B]=ee,ee==63){if(K.value-I.value>x)throw new Error("Something wrong with hufUnpackEncTable");G(8,ne,$,f,K);let j=F.l+6;if(ne=F.c,$=F.lc,B+j>k+1)throw new Error("Something wrong with hufUnpackEncTable");for(;j--;)O[B++]=0;B--}else if(ee>=59){let j=ee-59+2;if(B+j>k+1)throw new Error("Something wrong with hufUnpackEncTable");for(;j--;)O[B++]=0;B--}}Z(O)}function oe(f){return f&63}function te(f){return f>>6}function Ce(f,I,x,B){for(;I<=x;I++){const k=te(f[I]),O=oe(f[I]);if(k>>O)throw new Error("Invalid table entry");if(O>14){const K=B[k>>O-14];if(K.len)throw new Error("Invalid table entry");if(K.lit++,K.p){const ne=K.p;K.p=new Array(K.lit);for(let $=0;$<K.lit-1;++$)K.p[$]=ne[$]}else K.p=new Array(1);K.p[K.lit-1]=I}else if(O){let K=0;for(let ne=1<<14-O;ne>0;ne--){const $=B[(k<<14-O)+K];if($.len||$.p)throw new Error("Invalid table entry");$.len=O,$.lit=I,K++}}}return!0}const Ie={c:0,lc:0};function Le(f,I,x,B){f=f<<8|at(x,B),I+=8,Ie.c=f,Ie.lc=I}const ke={c:0,lc:0};function be(f,I,x,B,k,O,K,ne,$){if(f==I){B<8&&(Le(x,B,k,O),x=Ie.c,B=Ie.lc),B-=8;let ee=x>>B;if(ee=new Uint8Array([ee])[0],ne.value+ee>$)return!1;const j=K[ne.value-1];for(;ee-- >0;)K[ne.value++]=j}else if(ne.value<$)K[ne.value++]=f;else return!1;ke.c=x,ke.lc=B}function re(f){return f&65535}function ue(f){const I=re(f);return I>32767?I-65536:I}const ge={a:0,b:0};function Se(f,I){const x=ue(f),k=ue(I),O=x+(k&1)+(k>>1),K=O,ne=O-k;ge.a=K,ge.b=ne}function We(f,I){const x=re(f),B=re(I),k=x-(B>>1)&65535,O=B+k-32768&65535;ge.a=O,ge.b=k}function qe(f,I,x,B,k,O,K){const ne=K<16384,$=x>k?k:x;let ee=1,j,he;for(;ee<=$;)ee<<=1;for(ee>>=1,j=ee,ee>>=1;ee>=1;){he=0;const me=he+O*(k-j),pe=O*ee,Ue=O*j,de=B*ee,ce=B*j;let Ve,Ye,pt,Ut;for(;he<=me;he+=Ue){let ot=he;const ut=he+B*(x-j);for(;ot<=ut;ot+=ce){const it=ot+de,Pt=ot+pe,Lt=Pt+de;ne?(Se(f[ot+I],f[Pt+I]),Ve=ge.a,pt=ge.b,Se(f[it+I],f[Lt+I]),Ye=ge.a,Ut=ge.b,Se(Ve,Ye),f[ot+I]=ge.a,f[it+I]=ge.b,Se(pt,Ut),f[Pt+I]=ge.a,f[Lt+I]=ge.b):(We(f[ot+I],f[Pt+I]),Ve=ge.a,pt=ge.b,We(f[it+I],f[Lt+I]),Ye=ge.a,Ut=ge.b,We(Ve,Ye),f[ot+I]=ge.a,f[it+I]=ge.b,We(pt,Ut),f[Pt+I]=ge.a,f[Lt+I]=ge.b)}if(x&ee){const it=ot+pe;ne?Se(f[ot+I],f[it+I]):We(f[ot+I],f[it+I]),Ve=ge.a,f[it+I]=ge.b,f[ot+I]=Ve}}if(k&ee){let ot=he;const ut=he+B*(x-j);for(;ot<=ut;ot+=ce){const it=ot+de;ne?Se(f[ot+I],f[it+I]):We(f[ot+I],f[it+I]),Ve=ge.a,f[it+I]=ge.b,f[ot+I]=Ve}}j=ee,ee>>=1}return he}function st(f,I,x,B,k,O,K,ne,$){let ee=0,j=0;const he=K,me=Math.trunc(B.value+(k+7)/8);for(;B.value<me;)for(Le(ee,j,x,B),ee=Ie.c,j=Ie.lc;j>=14;){const Ue=ee>>j-14&16383,de=I[Ue];if(de.len)j-=de.len,be(de.lit,O,ee,j,x,B,ne,$,he),ee=ke.c,j=ke.lc;else{if(!de.p)throw new Error("hufDecode issues");let ce;for(ce=0;ce<de.lit;ce++){const Ve=oe(f[de.p[ce]]);for(;j<Ve&&B.value<me;)Le(ee,j,x,B),ee=Ie.c,j=Ie.lc;if(j>=Ve&&te(f[de.p[ce]])==(ee>>j-Ve&(1<<Ve)-1)){j-=Ve,be(de.p[ce],O,ee,j,x,B,ne,$,he),ee=ke.c,j=ke.lc;break}}if(ce==de.lit)throw new Error("hufDecode issues")}}const pe=8-k&7;for(ee>>=pe,j-=pe;j>0;){const Ue=I[ee<<14-j&16383];if(Ue.len)j-=Ue.len,be(Ue.lit,O,ee,j,x,B,ne,$,he),ee=ke.c,j=ke.lc;else throw new Error("hufDecode issues")}return!0}function ht(f,I,x,B,k,O){const K={value:0},ne=x.value,$=ye(I,x),ee=ye(I,x);x.value+=4;const j=ye(I,x);if(x.value+=4,$<0||$>=65537||ee<0||ee>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const he=new Array(65537),me=new Array(16384);v(me);const pe=B-(x.value-ne);if(Y(f,x,pe,$,ee,he),j>8*(B-(x.value-ne)))throw new Error("Something wrong with hufUncompress");Ce(he,$,ee,me),st(he,me,f,x,j,ee,O,k,K)}function Je(f,I,x){for(let B=0;B<x;++B)I[B]=f[I[B]]}function H(f){for(let I=1;I<f.length;I++){const x=f[I-1]+f[I]-128;f[I]=x}}function Ot(f,I){let x=0,B=Math.floor((f.length+1)/2),k=0;const O=f.length-1;for(;!(k>O||(I[k++]=f[x++],k>O));)I[k++]=f[B++]}function Ge(f){let I=f.byteLength;const x=new Array;let B=0;const k=new DataView(f);for(;I>0;){const O=k.getInt8(B++);if(O<0){const K=-O;I-=K+1;for(let ne=0;ne<K;ne++)x.push(k.getUint8(B++))}else{const K=O;I-=2;const ne=k.getUint8(B++);for(let $=0;$<K+1;$++)x.push(ne)}}return x}function $e(f,I,x,B,k,O){let K=new DataView(O.buffer);const ne=x[f.idx[0]].width,$=x[f.idx[0]].height,ee=3,j=Math.floor(ne/8),he=Math.ceil(ne/8),me=Math.ceil($/8),pe=ne-(he-1)*8,Ue=$-(me-1)*8,de={value:0},ce=new Array(ee),Ve=new Array(ee),Ye=new Array(ee),pt=new Array(ee),Ut=new Array(ee);for(let ut=0;ut<ee;++ut)Ut[ut]=I[f.idx[ut]],ce[ut]=ut<1?0:ce[ut-1]+he*me,Ve[ut]=new Float32Array(64),Ye[ut]=new Uint16Array(64),pt[ut]=new Uint16Array(he*64);for(let ut=0;ut<me;++ut){let it=8;ut==me-1&&(it=Ue);let Pt=8;for(let nt=0;nt<he;++nt){nt==he-1&&(Pt=pe);for(let Ct=0;Ct<ee;++Ct)Ye[Ct].fill(0),Ye[Ct][0]=k[ce[Ct]++],Be(de,B,Ye[Ct]),At(Ye[Ct],Ve[Ct]),He(Ve[Ct]);L(Ve);for(let Ct=0;Ct<ee;++Ct)S(Ve[Ct],pt[Ct],nt*64)}let Lt=0;for(let nt=0;nt<ee;++nt){const Ct=x[f.idx[nt]].type;for(let mn=8*ut;mn<8*ut+it;++mn){Lt=Ut[nt][mn];for(let zn=0;zn<j;++zn){const yn=zn*64+(mn&7)*8;K.setUint16(Lt+0*Ct,pt[nt][yn+0],!0),K.setUint16(Lt+2*Ct,pt[nt][yn+1],!0),K.setUint16(Lt+4*Ct,pt[nt][yn+2],!0),K.setUint16(Lt+6*Ct,pt[nt][yn+3],!0),K.setUint16(Lt+8*Ct,pt[nt][yn+4],!0),K.setUint16(Lt+10*Ct,pt[nt][yn+5],!0),K.setUint16(Lt+12*Ct,pt[nt][yn+6],!0),K.setUint16(Lt+14*Ct,pt[nt][yn+7],!0),Lt+=16*Ct}}if(j!=he)for(let mn=8*ut;mn<8*ut+it;++mn){const zn=Ut[nt][mn]+8*j*2*Ct,yn=j*64+(mn&7)*8;for(let Cr=0;Cr<Pt;++Cr)K.setUint16(zn+Cr*2*Ct,pt[nt][yn+Cr],!0)}}}const ot=new Uint16Array(ne);K=new DataView(O.buffer);for(let ut=0;ut<ee;++ut){x[f.idx[ut]].decoded=!0;const it=x[f.idx[ut]].type;if(x[ut].type==2)for(let Pt=0;Pt<$;++Pt){const Lt=Ut[ut][Pt];for(let nt=0;nt<ne;++nt)ot[nt]=K.getUint16(Lt+nt*2*it,!0);for(let nt=0;nt<ne;++nt)K.setFloat32(Lt+nt*2*it,W(ot[nt]),!0)}}}function Be(f,I,x){let B,k=1;for(;k<64;)B=I[f.value],B==65280?k=64:B>>8==255?k+=B&255:(x[k]=B,k++),f.value++}function At(f,I){I[0]=W(f[0]),I[1]=W(f[1]),I[2]=W(f[5]),I[3]=W(f[6]),I[4]=W(f[14]),I[5]=W(f[15]),I[6]=W(f[27]),I[7]=W(f[28]),I[8]=W(f[2]),I[9]=W(f[4]),I[10]=W(f[7]),I[11]=W(f[13]),I[12]=W(f[16]),I[13]=W(f[26]),I[14]=W(f[29]),I[15]=W(f[42]),I[16]=W(f[3]),I[17]=W(f[8]),I[18]=W(f[12]),I[19]=W(f[17]),I[20]=W(f[25]),I[21]=W(f[30]),I[22]=W(f[41]),I[23]=W(f[43]),I[24]=W(f[9]),I[25]=W(f[11]),I[26]=W(f[18]),I[27]=W(f[24]),I[28]=W(f[31]),I[29]=W(f[40]),I[30]=W(f[44]),I[31]=W(f[53]),I[32]=W(f[10]),I[33]=W(f[19]),I[34]=W(f[23]),I[35]=W(f[32]),I[36]=W(f[39]),I[37]=W(f[45]),I[38]=W(f[52]),I[39]=W(f[54]),I[40]=W(f[20]),I[41]=W(f[22]),I[42]=W(f[33]),I[43]=W(f[38]),I[44]=W(f[46]),I[45]=W(f[51]),I[46]=W(f[55]),I[47]=W(f[60]),I[48]=W(f[21]),I[49]=W(f[34]),I[50]=W(f[37]),I[51]=W(f[47]),I[52]=W(f[50]),I[53]=W(f[56]),I[54]=W(f[59]),I[55]=W(f[61]),I[56]=W(f[35]),I[57]=W(f[36]),I[58]=W(f[48]),I[59]=W(f[49]),I[60]=W(f[57]),I[61]=W(f[58]),I[62]=W(f[62]),I[63]=W(f[63])}function He(f){const I=.5*Math.cos(.7853975),x=.5*Math.cos(3.14159/16),B=.5*Math.cos(3.14159/8),k=.5*Math.cos(3*3.14159/16),O=.5*Math.cos(5*3.14159/16),K=.5*Math.cos(3*3.14159/8),ne=.5*Math.cos(7*3.14159/16),$=new Array(4),ee=new Array(4),j=new Array(4),he=new Array(4);for(let me=0;me<8;++me){const pe=me*8;$[0]=B*f[pe+2],$[1]=K*f[pe+2],$[2]=B*f[pe+6],$[3]=K*f[pe+6],ee[0]=x*f[pe+1]+k*f[pe+3]+O*f[pe+5]+ne*f[pe+7],ee[1]=k*f[pe+1]-ne*f[pe+3]-x*f[pe+5]-O*f[pe+7],ee[2]=O*f[pe+1]-x*f[pe+3]+ne*f[pe+5]+k*f[pe+7],ee[3]=ne*f[pe+1]-O*f[pe+3]+k*f[pe+5]-x*f[pe+7],j[0]=I*(f[pe+0]+f[pe+4]),j[3]=I*(f[pe+0]-f[pe+4]),j[1]=$[0]+$[3],j[2]=$[1]-$[2],he[0]=j[0]+j[1],he[1]=j[3]+j[2],he[2]=j[3]-j[2],he[3]=j[0]-j[1],f[pe+0]=he[0]+ee[0],f[pe+1]=he[1]+ee[1],f[pe+2]=he[2]+ee[2],f[pe+3]=he[3]+ee[3],f[pe+4]=he[3]-ee[3],f[pe+5]=he[2]-ee[2],f[pe+6]=he[1]-ee[1],f[pe+7]=he[0]-ee[0]}for(let me=0;me<8;++me)$[0]=B*f[16+me],$[1]=K*f[16+me],$[2]=B*f[48+me],$[3]=K*f[48+me],ee[0]=x*f[8+me]+k*f[24+me]+O*f[40+me]+ne*f[56+me],ee[1]=k*f[8+me]-ne*f[24+me]-x*f[40+me]-O*f[56+me],ee[2]=O*f[8+me]-x*f[24+me]+ne*f[40+me]+k*f[56+me],ee[3]=ne*f[8+me]-O*f[24+me]+k*f[40+me]-x*f[56+me],j[0]=I*(f[me]+f[32+me]),j[3]=I*(f[me]-f[32+me]),j[1]=$[0]+$[3],j[2]=$[1]-$[2],he[0]=j[0]+j[1],he[1]=j[3]+j[2],he[2]=j[3]-j[2],he[3]=j[0]-j[1],f[0+me]=he[0]+ee[0],f[8+me]=he[1]+ee[1],f[16+me]=he[2]+ee[2],f[24+me]=he[3]+ee[3],f[32+me]=he[3]-ee[3],f[40+me]=he[2]-ee[2],f[48+me]=he[1]-ee[1],f[56+me]=he[0]-ee[0]}function L(f){for(let I=0;I<64;++I){const x=f[0][I],B=f[1][I],k=f[2][I];f[0][I]=x+1.5747*k,f[1][I]=x-.1873*B-.4682*k,f[2][I]=x+1.8556*B}}function S(f,I,x){for(let B=0;B<64;++B)I[x+B]=Fr.toHalfFloat(J(f[B]))}function J(f){return f<=1?Math.sign(f)*Math.pow(Math.abs(f),2.2):Math.sign(f)*Math.pow(U,Math.abs(f)-1)}function se(f){return new DataView(f.array.buffer,f.offset.value,f.size)}function Ae(f){const I=f.viewer.buffer.slice(f.offset.value,f.offset.value+f.size),x=new Uint8Array(Ge(I)),B=new Uint8Array(x.length);return H(x),Ot(x,B),new DataView(B.buffer)}function ae(f){const I=f.array.slice(f.offset.value,f.offset.value+f.size),x=wo(I),B=new Uint8Array(x.length);return H(x),Ot(x,B),new DataView(B.buffer)}function ze(f){const I=f.viewer,x={value:f.offset.value},B=new Uint16Array(f.columns*f.lines*(f.inputChannels.length*f.type)),k=new Uint8Array(8192);let O=0;const K=new Array(f.inputChannels.length);for(let Ue=0,de=f.inputChannels.length;Ue<de;Ue++)K[Ue]={},K[Ue].start=O,K[Ue].end=K[Ue].start,K[Ue].nx=f.columns,K[Ue].ny=f.lines,K[Ue].size=f.type,O+=K[Ue].nx*K[Ue].ny*K[Ue].size;const ne=le(I,x),$=le(I,x);if($>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ne<=$)for(let Ue=0;Ue<$-ne+1;Ue++)k[Ue+ne]=Ke(I,x);const ee=new Uint16Array(65536),j=_(k,ee),he=ye(I,x);ht(f.array,I,x,he,B,O);for(let Ue=0;Ue<f.inputChannels.length;++Ue){const de=K[Ue];for(let ce=0;ce<K[Ue].size;++ce)qe(B,de.start+ce,de.nx,de.size,de.ny,de.nx*de.size,j)}Je(ee,B,O);let me=0;const pe=new Uint8Array(B.buffer.byteLength);for(let Ue=0;Ue<f.lines;Ue++)for(let de=0;de<f.inputChannels.length;de++){const ce=K[de],Ve=ce.nx*ce.size,Ye=new Uint8Array(B.buffer,ce.end*2,Ve*2);pe.set(Ye,me),me+=Ve*2,ce.end+=Ve}return new DataView(pe.buffer)}function Me(f){const I=f.array.slice(f.offset.value,f.offset.value+f.size),x=wo(I),B=f.inputChannels.length*f.lines*f.columns*f.totalBytes,k=new ArrayBuffer(B),O=new DataView(k);let K=0,ne=0;const $=new Array(4);for(let ee=0;ee<f.lines;ee++)for(let j=0;j<f.inputChannels.length;j++){let he=0;switch(f.inputChannels[j].pixelType){case 1:$[0]=K,$[1]=$[0]+f.columns,K=$[1]+f.columns;for(let pe=0;pe<f.columns;++pe){const Ue=x[$[0]++]<<8|x[$[1]++];he+=Ue,O.setUint16(ne,he,!0),ne+=2}break;case 2:$[0]=K,$[1]=$[0]+f.columns,$[2]=$[1]+f.columns,K=$[2]+f.columns;for(let pe=0;pe<f.columns;++pe){const Ue=x[$[0]++]<<24|x[$[1]++]<<16|x[$[2]++]<<8;he+=Ue,O.setUint32(ne,he,!0),ne+=4}break}}return O}function Re(f){const I=f.viewer,x={value:f.offset.value},B=new Uint8Array(f.columns*f.lines*(f.inputChannels.length*f.type*2)),k={version:tt(I,x),unknownUncompressedSize:tt(I,x),unknownCompressedSize:tt(I,x),acCompressedSize:tt(I,x),dcCompressedSize:tt(I,x),rleCompressedSize:tt(I,x),rleUncompressedSize:tt(I,x),rleRawSize:tt(I,x),totalAcUncompressedCount:tt(I,x),totalDcUncompressedCount:tt(I,x),acCompression:tt(I,x)};if(k.version<2)throw new Error("EXRLoader.parse: "+Tn.compression+" version "+k.version+" is unsupported");const O=new Array;let K=le(I,x)-2;for(;K>0;){const de=je(I.buffer,x),ce=Ke(I,x),Ve=ce>>2&3,Ye=(ce>>4)-1,pt=new Int8Array([Ye])[0],Ut=Ke(I,x);O.push({name:de,index:pt,type:Ut,compression:Ve}),K-=de.length+3}const ne=Tn.channels,$=new Array(f.inputChannels.length);for(let de=0;de<f.inputChannels.length;++de){const ce=$[de]={},Ve=ne[de];ce.name=Ve.name,ce.compression=0,ce.decoded=!1,ce.type=Ve.pixelType,ce.pLinear=Ve.pLinear,ce.width=f.columns,ce.height=f.lines}const ee={idx:new Array(3)};for(let de=0;de<f.inputChannels.length;++de){const ce=$[de];for(let Ve=0;Ve<O.length;++Ve){const Ye=O[Ve];ce.name==Ye.name&&(ce.compression=Ye.compression,Ye.index>=0&&(ee.idx[Ye.index]=de),ce.offset=de)}}let j,he,me;if(k.acCompressedSize>0)switch(k.acCompression){case 0:j=new Uint16Array(k.totalAcUncompressedCount),ht(f.array,I,x,k.acCompressedSize,j,k.totalAcUncompressedCount);break;case 1:const de=f.array.slice(x.value,x.value+k.totalAcUncompressedCount),ce=wo(de);j=new Uint16Array(ce.buffer),x.value+=k.totalAcUncompressedCount;break}if(k.dcCompressedSize>0){const de={array:f.array,offset:x,size:k.dcCompressedSize};he=new Uint16Array(ae(de).buffer),x.value+=k.dcCompressedSize}if(k.rleRawSize>0){const de=f.array.slice(x.value,x.value+k.rleCompressedSize),ce=wo(de);me=Ge(ce.buffer),x.value+=k.rleCompressedSize}let pe=0;const Ue=new Array($.length);for(let de=0;de<Ue.length;++de)Ue[de]=new Array;for(let de=0;de<f.lines;++de)for(let ce=0;ce<$.length;++ce)Ue[ce].push(pe),pe+=$[ce].width*f.type*2;$e(ee,Ue,$,j,he,B);for(let de=0;de<$.length;++de){const ce=$[de];if(!ce.decoded)switch(ce.compression){case 2:let Ve=0,Ye=0;for(let pt=0;pt<f.lines;++pt){let Ut=Ue[de][Ve];for(let ot=0;ot<ce.width;++ot){for(let ut=0;ut<2*ce.type;++ut)B[Ut++]=me[Ye+ut*ce.width*ce.height];Ye++}Ve++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(B.buffer)}function je(f,I){const x=new Uint8Array(f);let B=0;for(;x[I.value+B]!=0;)B+=1;const k=new TextDecoder().decode(x.slice(I.value,I.value+B));return I.value=I.value+B+1,k}function fe(f,I,x){const B=new TextDecoder().decode(new Uint8Array(f).slice(I.value,I.value+x));return I.value=I.value+x,B}function De(f,I){const x=Fe(f,I),B=ye(f,I);return[x,B]}function Xe(f,I){const x=ye(f,I),B=ye(f,I);return[x,B]}function Fe(f,I){const x=f.getInt32(I.value,!0);return I.value=I.value+4,x}function ye(f,I){const x=f.getUint32(I.value,!0);return I.value=I.value+4,x}function at(f,I){const x=f[I.value];return I.value=I.value+1,x}function Ke(f,I){const x=f.getUint8(I.value);return I.value=I.value+1,x}const tt=function(f,I){let x;return"getBigInt64"in DataView.prototype?x=Number(f.getBigInt64(I.value,!0)):x=f.getUint32(I.value+4,!0)+Number(f.getUint32(I.value,!0)<<32),I.value+=8,x};function V(f,I){const x=f.getFloat32(I.value,!0);return I.value+=4,x}function xe(f,I){return Fr.toHalfFloat(V(f,I))}function W(f){const I=(f&31744)>>10,x=f&1023;return(f>>15?-1:1)*(I?I===31?x?NaN:1/0:Math.pow(2,I-15)*(1+x/1024):6103515625e-14*(x/1024))}function le(f,I){const x=f.getUint16(I.value,!0);return I.value+=2,x}function Ne(f,I){return W(le(f,I))}function we(f,I,x,B){const k=x.value,O=[];for(;x.value<k+B-1;){const K=je(I,x),ne=Fe(f,x),$=Ke(f,x);x.value+=3;const ee=Fe(f,x),j=Fe(f,x);O.push({name:K,pixelType:ne,pLinear:$,xSampling:ee,ySampling:j})}return x.value+=1,O}function dt(f,I){const x=V(f,I),B=V(f,I),k=V(f,I),O=V(f,I),K=V(f,I),ne=V(f,I),$=V(f,I),ee=V(f,I);return{redX:x,redY:B,greenX:k,greenY:O,blueX:K,blueY:ne,whiteX:$,whiteY:ee}}function bt(f,I){const x=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],B=Ke(f,I);return x[B]}function xt(f,I){const x=Fe(f,I),B=Fe(f,I),k=Fe(f,I),O=Fe(f,I);return{xMin:x,yMin:B,xMax:k,yMax:O}}function ft(f,I){const x=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],B=Ke(f,I);return x[B]}function Wt(f,I){const x=["ENVMAP_LATLONG","ENVMAP_CUBE"],B=Ke(f,I);return x[B]}function pn(f,I){const x=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],B=["ROUND_DOWN","ROUND_UP"],k=ye(f,I),O=ye(f,I),K=Ke(f,I);return{xSize:k,ySize:O,levelMode:x[K&15],roundingMode:B[K>>4]}}function mr(f,I){const x=V(f,I),B=V(f,I);return[x,B]}function bn(f,I){const x=V(f,I),B=V(f,I),k=V(f,I);return[x,B,k]}function gn(f,I,x,B,k){if(B==="string"||B==="stringvector"||B==="iccProfile")return fe(I,x,k);if(B==="chlist")return we(f,I,x,k);if(B==="chromaticities")return dt(f,x);if(B==="compression")return bt(f,x);if(B==="box2i")return xt(f,x);if(B==="envmap")return Wt(f,x);if(B==="tiledesc")return pn(f,x);if(B==="lineOrder")return ft(f,x);if(B==="float")return V(f,x);if(B==="v2f")return mr(f,x);if(B==="v3f")return bn(f,x);if(B==="int")return Fe(f,x);if(B==="rational")return De(f,x);if(B==="timecode")return Xe(f,x);if(B==="preview")return x.value+=k,"skipped";x.value+=k}function Yi(f,I){const x=Math.log2(f);return I=="ROUND_DOWN"?Math.floor(x):Math.ceil(x)}function Si(f,I,x){let B=0;switch(f.levelMode){case"ONE_LEVEL":B=1;break;case"MIPMAP_LEVELS":B=Yi(Math.max(I,x),f.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return B}function Wi(f,I,x,B){const k=new Array(f);for(let O=0;O<f;O++){const K=1<<O;let ne=I/K|0;B=="ROUND_UP"&&ne*K<I&&(ne+=1);const $=Math.max(ne,1);k[O]=($+x-1)/x|0}return k}function Bi(){const f=this,I=f.offset,x={value:0};for(let B=0;B<f.tileCount;B++){const k=Fe(f.viewer,I),O=Fe(f.viewer,I);I.value+=8,f.size=ye(f.viewer,I);const K=k*f.blockWidth,ne=O*f.blockHeight;f.columns=K+f.blockWidth>f.width?f.width-K:f.blockWidth,f.lines=ne+f.blockHeight>f.height?f.height-ne:f.blockHeight;const $=f.columns*f.totalBytes,j=f.size<f.lines*$?f.uncompress(f):se(f);I.value+=f.size;for(let he=0;he<f.lines;he++){const me=he*f.columns*f.totalBytes;for(let pe=0;pe<f.inputChannels.length;pe++){const Ue=Tn.channels[pe].name,de=f.channelByteOffsets[Ue]*f.columns,ce=f.decodeChannels[Ue];if(ce===void 0)continue;x.value=me+de;const Ve=(f.height-(1+ne+he))*f.outLineWidth;for(let Ye=0;Ye<f.columns;Ye++){const pt=Ve+(Ye+K)*f.outputChannels+ce;f.byteArray[pt]=f.getter(j,x)}}}}}function Er(){const f=this,I=f.offset,x={value:0};for(let B=0;B<f.height/f.blockHeight;B++){const k=Fe(f.viewer,I)-Tn.dataWindow.yMin;f.size=ye(f.viewer,I),f.lines=k+f.blockHeight>f.height?f.height-k:f.blockHeight;const O=f.columns*f.totalBytes,ne=f.size<f.lines*O?f.uncompress(f):se(f);I.value+=f.size;for(let $=0;$<f.blockHeight;$++){const ee=B*f.blockHeight,j=$+f.scanOrder(ee);if(j>=f.height)continue;const he=$*O,me=(f.height-1-j)*f.outLineWidth;for(let pe=0;pe<f.inputChannels.length;pe++){const Ue=Tn.channels[pe].name,de=f.channelByteOffsets[Ue]*f.columns,ce=f.decodeChannels[Ue];if(ce!==void 0){x.value=he+de;for(let Ve=0;Ve<f.columns;Ve++){const Ye=me+Ve*f.outputChannels+ce;f.byteArray[Ye]=f.getter(ne,x)}}}}}}function si(f,I,x){const B={};if(f.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");B.version=f.getUint8(4);const k=f.getUint8(5);B.spec={singleTile:!!(k&2),longName:!!(k&4),deepFormat:!!(k&8),multiPart:!!(k&16)},x.value=8;let O=!0;for(;O;){const K=je(I,x);if(K==0)O=!1;else{const ne=je(I,x),$=ye(f,x),ee=gn(f,I,x,ne,$);ee===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ne}'.`):B[K]=ee}}if((k&-7)!=0)throw console.error("THREE.EXRHeader:",B),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return B}function Ir(f,I,x,B,k){const O={size:0,viewer:I,array:x,offset:B,width:f.dataWindow.xMax-f.dataWindow.xMin+1,height:f.dataWindow.yMax-f.dataWindow.yMin+1,inputChannels:f.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Qt};switch(f.compression){case"NO_COMPRESSION":O.blockHeight=1,O.uncompress=se;break;case"RLE_COMPRESSION":O.blockHeight=1,O.uncompress=Ae;break;case"ZIPS_COMPRESSION":O.blockHeight=1,O.uncompress=ae;break;case"ZIP_COMPRESSION":O.blockHeight=16,O.uncompress=ae;break;case"PIZ_COMPRESSION":O.blockHeight=32,O.uncompress=ze;break;case"PXR24_COMPRESSION":O.blockHeight=16,O.uncompress=Me;break;case"DWAA_COMPRESSION":O.blockHeight=32,O.uncompress=Re;break;case"DWAB_COMPRESSION":O.blockHeight=256,O.uncompress=Re;break;default:throw new Error("EXRLoader.parse: "+f.compression+" is unsupported")}const K={};for(const j of f.channels)switch(j.name){case"Y":case"R":case"G":case"B":case"A":K[j.name]=!0,O.type=j.pixelType}let ne=!1;if(K.R&&K.G&&K.B)ne=!K.A,O.outputChannels=4,O.decodeChannels={R:0,G:1,B:2,A:3};else if(K.Y)O.outputChannels=1,O.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(O.type==1)switch(k){case jt:O.getter=Ne;break;case sn:O.getter=le;break}else if(O.type==2)switch(k){case jt:O.getter=V;break;case sn:O.getter=xe}else throw new Error("EXRLoader.parse: unsupported pixelType "+O.type+" for "+f.compression+".");O.columns=O.width;const $=O.width*O.height*O.outputChannels;switch(k){case jt:O.byteArray=new Float32Array($),ne&&O.byteArray.fill(1,0,$);break;case sn:O.byteArray=new Uint16Array($),ne&&O.byteArray.fill(15360,0,$);break;default:console.error("THREE.EXRLoader: unsupported type: ",k);break}let ee=0;for(const j of f.channels)O.decodeChannels[j.name]!==void 0&&(O.channelByteOffsets[j.name]=ee),ee+=j.pixelType*2;if(O.totalBytes=ee,O.outLineWidth=O.width*O.outputChannels,f.lineOrder==="INCREASING_Y"?O.scanOrder=j=>j:O.scanOrder=j=>O.height-1-j,O.outputChannels==4?(O.format=vn,O.colorSpace=Qt):(O.format=Zo,O.colorSpace=Un),f.spec.singleTile){O.blockHeight=f.tiles.ySize,O.blockWidth=f.tiles.xSize;const j=Si(f.tiles,O.width,O.height),he=Wi(j,O.width,f.tiles.xSize,f.tiles.roundingMode),me=Wi(j,O.height,f.tiles.ySize,f.tiles.roundingMode);O.tileCount=he[0]*me[0];for(let pe=0;pe<j;pe++)for(let Ue=0;Ue<me[pe];Ue++)for(let de=0;de<he[pe];de++)tt(I,B);O.decode=Bi.bind(O)}else{O.blockWidth=O.width;const j=Math.ceil(O.height/O.blockHeight);for(let he=0;he<j;he++)tt(I,B);O.decode=Er.bind(O)}return O}const qi={value:0},_r=new DataView(e),cs=new Uint8Array(e),Tn=si(_r,e,qi),w=Ir(Tn,_r,cs,qi,this.type);return w.decode(),{header:Tn,width:w.width,height:w.height,data:w.byteArray,format:w.format,colorSpace:w.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=wt,o.magFilter=wt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,r)}}class vb extends ii{constructor(e){super(e),this.hdrLoader=new bE,this.type=sn}load(e,t,n,r){const s=new ea;switch(s.type=this.type,s.type){case jt:s.colorSpace=Qt,s.minFilter=wt,s.magFilter=wt,s.generateMipmaps=!1;break;case sn:s.colorSpace=Qt,s.minFilter=wt,s.magFilter=wt,s.generateMipmaps=!1;break}const o=this;let a=0;function l(c,u,h,A){new ts(o.manager).setPath(o.path).setResponseType("arraybuffer").setWithCredentials(o.withCredentials).load(e[c],function(d){a++;const m=o.hdrLoader.parse(d);if(m){if(m.data!==void 0){const E=new ia(m.data,m.width,m.height);E.type=s.type,E.colorSpace=s.colorSpace,E.format=s.format,E.minFilter=s.minFilter,E.magFilter=s.magFilter,E.generateMipmaps=s.generateMipmaps,s.images[c]=E}a===6&&(s.needsUpdate=!0,u&&u(s))}},h,A)}for(let c=0;c<e.length;c++)l(c,t,n,r);return s}setDataType(e){return this.type=e,this.hdrLoader.setDataType(e),this}}function yb(i,{renderer:e,...t}){if(!e)throw new Error(`Env map requires renderer to passed in the options for ${i}!`);const n=!Array.isArray(i);let r;if(n){const o=i.slice(i.lastIndexOf(".")+1);switch(o){case"hdr":{r=new bE().setDataType(on).loadAsync(i);break}case"exr":{r=new Cb().setDataType(on).loadAsync(i);break}case"png":case"jpg":{r=new tA().loadAsync(i).then(a=>(e.outputColorSpace===It&&t.gamma&&(a.colorSpace=It),a));break}default:throw new Error(`Extension ${o} not supported`)}r=r.then(a=>t.pmrem?xb(a,e):Bb(a))}else{const o=i[0].slice(i.lastIndexOf(".")+1);switch(o){case"hdr":{r=new vb().setDataType(on).loadAsync(i);break}case"png":case"jpg":{r=new Xx().loadAsync(i).then(a=>(e.outputColorSpace===It&&t.gamma&&(a.colorSpace=It),a));break}default:throw new Error(`Extension ${o} not supported`)}r=r.then(a=>t.pmrem?Sb(a,e):a)}return Object.keys(t).filter(o=>!["pmrem","linear"].includes(o)).forEach(o=>{r=r.then(a=>(a[o]=t[o],a))}),r}function xb(i,e){const t=new Vo(e);t.compileEquirectangularShader();const n=t.fromEquirectangular(i);return t.dispose(),i.dispose(),i.image.data=null,n.texture}function Sb(i,e){const t=new Vo(e);t.compileCubemapShader();const n=t.fromCubemap(i);return t.dispose(),i.dispose(),i.image.data=null,n.texture}function Bb(i){return i.mapping=Fo,i}function kg(i,e){if(e===UI)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===_h||e===wm){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===_h)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Mb extends ii{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Db(t)}),this.register(function(t){return new Qb(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Nb(t)}),this.register(function(t){return new Pb(t)}),this.register(function(t){return new Ub(t)}),this.register(function(t){return new Fb(t)}),this.register(function(t){return new Rb(t)}),this.register(function(t){return new Ob(t)}),this.register(function(t){return new Lb(t)}),this.register(function(t){return new Hb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new Yb(t)}),this.register(function(t){return new Wb(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ds.extractUrlBase(e);o=Ds.resolveURL(c,this.path)}else o=Ds.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ts(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===PE){try{o[mt.KHR_BINARY_GLTF]=new qb(e)}catch(h){r&&r(h);return}s=JSON.parse(o[mt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new oT(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],A=s.extensionsRequired||[];switch(h){case mt.KHR_MATERIALS_UNLIT:o[h]=new Tb;break;case mt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Xb(s,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:o[h]=new Kb;break;case mt.KHR_MESH_QUANTIZATION:o[h]=new jb;break;default:A.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function wb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class bb{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ze(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Qt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new jm(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new $x(u),c.distance=h;break;case"spot":c=new Jx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Tb{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ui}extendParams(e,t,n){const r=[];e.color=new Ze(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,It))}return Promise.all(r)}}class Rb{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Db{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new et(a,a)}return Promise.all(s)}}class Qb{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Lb{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Nb{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,It)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Pb{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Ub{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ze().setRGB(a[0],a[1],a[2],Qt),Promise.all(s)}}class Fb{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Ob{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ze().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,It)),Promise.all(s)}}class Gb{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Hb{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class kb{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class zb{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Vb{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Yb{constructor(e){this.name=mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,A=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,A,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,A,r.mode,r.filter),d})})}else return null}}class Wb{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==Sn.TRIANGLES&&c.mode!==Sn.TRIANGLE_STRIP&&c.mode!==Sn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],A=c[0].count,d=[];for(const m of h){const E=new rt,g=new X,p=new zi,C=new X(1,1,1),y=new Dx(m.geometry,m.material,A);for(let M=0;M<A;M++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&C.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,E.compose(g,p,C));for(const M in l)if(M==="_COLOR_0"){const P=l[M];y.instanceColor=new xh(P.array,P.itemSize,P.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,l[M]);Nt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const PE="glTF",ys=12,zg={JSON:1313821514,BIN:5130562};class qb{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ys),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==PE)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ys,s=new DataView(e,ys);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===zg.JSON){const c=new Uint8Array(e,ys+o,a);this.content=n.decode(c)}else if(l===zg.BIN){const c=ys+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Xb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Rh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Rh[u]||u.toLowerCase();if(o[u]!==void 0){const A=n.accessors[e.attributes[u]],d=Vr[A.componentType];c[h]=d.name,l[h]=A.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,A){r.decodeDracoFile(u,function(d){for(const m in d.attributes){const E=d.attributes[m],g=l[m];g!==void 0&&(E.normalized=g)}h(d)},a,c,Qt,A)})})}}class Kb{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class jb{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}}class UE extends Vs{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(n-t)/u,A=h*h,d=A*h,m=e*c,E=m-c,g=-2*d+3*A,p=d-A,C=1-g,y=p-A+h;for(let M=0;M!==a;M++){const P=o[E+M+a],Q=o[E+M+l]*u,R=o[m+M+a],T=o[m+M]*u;s[M]=C*P+y*Q+g*R+p*T}return s}}const Jb=new zi;class Zb extends UE{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return Jb.fromArray(s).normalize().toArray(s),s}}const Sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vg={9728:un,9729:wt,9984:Em,9985:To,9986:Ss,9987:Kn},Yg={33071:Xn,33648:Oo,10497:Xr},Ru={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$b={CUBICSPLINE:void 0,LINEAR:Us,STEP:Ps},Du={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function eT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ra({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zn})),i.DefaultMaterial}function tr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tT(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const A=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(A)}if(r){const A=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(A)}if(s){const A=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(A)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],A=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=A),i.morphTargetsRelative=!0,i})}function nT(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iT(i){let e;const t=i.extensions&&i.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qu(t.attributes):e=i.indices+":"+Qu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Qu(i.targets[n]);return e}function Qu(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Dh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const sT=new rt;class oT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new wb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new tA(this.options.manager):this.textureLoader=new tS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ts(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return tr(s,a,r),fi(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Ds.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Ru[r.type],a=Vr[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new zt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Ru[r.type],c=Vr[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,A=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let E,g;if(d&&d!==h){const p=Math.floor(A/d),C="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let y=t.cache.get(C);y||(E=new c(a,p*d,r.count*d/u),y=new Mx(E,d/u),t.cache.add(C,y)),g=new Jh(y,l,A%d/u,m)}else a===null?E=new c(r.count*l):E=new c(a,A,r.count*l),g=new zt(E,l,m);if(r.sparse!==void 0){const p=Ru.SCALAR,C=Vr[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,P=new C(o[1],y,r.sparse.count*p),Q=new c(o[2],M,r.sparse.count*l);a!==null&&(g=new zt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,T=P.length;R<T;R++){const U=P[R];if(g.setX(U,Q[R*l]),l>=2&&g.setY(U,Q[R*l+1]),l>=3&&g.setZ(U,Q[R*l+2]),l>=4&&g.setW(U,Q[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const A=(s.samplers||{})[o.sampler]||{};return u.magFilter=Vg[A.magFilter]||wt,u.minFilter=Vg[A.minFilter]||Kn,u.wrapS=Yg[A.wrapS]||Xr,u.wrapT=Yg[A.wrapT]||Xr,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const A=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(A),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(A,d){let m=A;t.isImageBitmapLoader===!0&&(m=function(E){const g=new kt(E);g.needsUpdate=!0,A(g)}),t.load(Ds.resolveURL(h,s.path),m,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),fi(h,o),h.userData.mimeType=o.mimeType||rT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[mt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ym,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Vm,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ra}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[mt.KHR_MATERIALS_UNLIT]){const h=r[mt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ze(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const A=h.baseColorFactor;a.color.setRGB(A[0],A[1],A[2],Qt),a.opacity=A[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,It)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(A){return A.getMaterialType&&A.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(A){return A.extendMaterialParams&&A.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=fn);const u=s.alphaMode||Du.OPAQUE;if(u===Du.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Du.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ui&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new et(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Ui&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ui){const h=s.emissiveFactor;a.emissive=new Ze().setRGB(h[0],h[1],h[2],Qt)}return s.emissiveTexture!==void 0&&o!==Ui&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,It)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),fi(h,s),t.associations.set(h,{materials:e}),s.extensions&&tr(r,h,s),h})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Wg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=iT(c),h=r[u];if(h)o.push(h.promise);else{let A;c.extensions&&c.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?A=s(c):A=Wg(new Zt,c,t),r[u]={primitive:c,promise:A},o.push(A)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?eT(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){const E=u[d],g=o[d];let p;const C=c[d];if(g.mode===Sn.TRIANGLES||g.mode===Sn.TRIANGLE_STRIP||g.mode===Sn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new bx(E,C):new Ft(E,C),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Sn.TRIANGLE_STRIP?p.geometry=kg(p.geometry,wm):g.mode===Sn.TRIANGLE_FAN&&(p.geometry=kg(p.geometry,_h));else if(g.mode===Sn.LINES)p=new Qx(E,C);else if(g.mode===Sn.LINE_STRIP)p=new $h(E,C);else if(g.mode===Sn.LINE_LOOP)p=new Lx(E,C);else if(g.mode===Sn.POINTS)p=new Nx(E,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&nT(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),fi(p,s),g.extensions&&tr(r,p,g),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&tr(r,h[0],s),h[0];const A=new Fi;s.extensions&&tr(r,A,s),t.associations.set(A,{meshes:e});for(let d=0,m=h.length;d<m;d++)A.add(h[d]);return A})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(l_.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new ta(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const A=new rt;s!==null&&A.fromArray(s.array,c*16),l.push(A)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Zh(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,A=r.channels.length;h<A;h++){const d=r.channels[h],m=r.samplers[d.sampler],E=d.target,g=E.node,p=r.parameters!==void 0?r.parameters[m.input]:m.input,C=r.parameters!==void 0?r.parameters[m.output]:m.output;E.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",C)),c.push(m),u.push(E))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const A=h[0],d=h[1],m=h[2],E=h[3],g=h[4],p=[];for(let C=0,y=A.length;C<y;C++){const M=A[C],P=d[C],Q=m[C],R=E[C],T=g[C];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const U=n._createAnimationTracks(M,P,Q,R,T);if(U)for(let _=0;_<U.length;_++)p.push(U[_])}return new kx(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],A=c[2];A!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(A,sT)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new zm:c.length>1?u=new Fi:c.length===1?u=c[0]:u=new Nt,u!==c[0])for(let h=0,A=c.length;h<A;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),fi(u,s),s.extensions&&tr(n,u,s),s.matrix!==void 0){const h=new rt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Fi;n.name&&(s.name=r.createUniqueName(n.name)),fi(s,n),n.extensions&&tr(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[A,d]of r.associations)(A instanceof Mn||A instanceof kt)&&h.set(A,d);return u.traverse(A=>{const d=r.associations.get(A);d!=null&&h.set(A,d)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ni[s.path]===Ni.weights?e.traverse(function(A){A.morphTargetInfluences&&l.push(A.name?A.name:A.uuid)}):l.push(a);let c;switch(Ni[s.path]){case Ni.weights:c=Zr;break;case Ni.rotation:c=$r;break;case Ni.position:case Ni.scale:c=es;break;default:switch(n.itemSize){case 1:c=Zr;break;case 2:case 3:default:c=es;break}break}const u=r.interpolation!==void 0?$b[r.interpolation]:Us,h=this._getArrayFromAccessor(n);for(let A=0,d=l.length;A<d;A++){const m=new c(l[A]+"."+Ni[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Dh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof $r?Zb:UE;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function aT(i,e,t){const n=e.attributes,r=new Ci;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new X(l[0],l[1],l[2]),new X(c[0],c[1],c[2])),a.normalized){const u=Dh(Vr[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new X,l=new X;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const A=t.json.accessors[h.POSITION],d=A.min,m=A.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),A.normalized){const E=Dh(Vr[A.componentType]);l.multiplyScalar(E)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new ei;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Wg(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Rh[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return _t.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${_t.workingColorSpace}" not supported.`),fi(i,e),aT(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?tT(i,e.targets,t):i})}const Lu=new WeakMap;class cT extends ii{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,r){const s=new ts(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,r)},n,r)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,It,n).catch(n)}decodeDracoFile(e,t,n,r,s=Qt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Lu.has(e)){const l=Lu.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(r=l,new Promise((c,u)=>{r._callbacks[s]={resolve:c,reject:u},r.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{r&&s&&this._releaseTask(r,s)}),Lu.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Zt;e.index&&t.setIndex(new zt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const r=e.attributes[n],s=r.name,o=r.array,a=r.itemSize,l=new zt(o,a);s==="color"&&(this._assignVertexColorSpace(l,r.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==It)return;const n=new Ze;for(let r=0,s=e.count;r<s;r++)n.fromBufferAttribute(e,r),_t.toWorkingColorSpace(n,It),e.setXYZ(r,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new ts(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((r,s)=>{n.load(e,r,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const r=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=lT.toString(),o=["/* draco decoder */",r,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(s){const o=s.data;switch(o.type){case"decode":r._callbacks[o.id].resolve(o);break;case"error":r._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,s){return r._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function lT(){let i,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(u){i.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(i)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,A=new h.Decoder;try{const d=t(h,A,new Int8Array(l),c),m=d.attributes.map(E=>E.array.buffer);d.index&&m.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},m)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(A)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let A,d;const m=a.GetEncodedGeometryType(l);if(m===o.TRIANGULAR_MESH)A=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,A);else if(m===o.POINT_CLOUD)A=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,A);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||A.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const E={index:null,attributes:[]};for(const g in u){const p=self[h[g]];let C,y;if(c.useUniqueIDs)y=u[g],C=a.GetAttributeByUniqueId(A,y);else{if(y=a.GetAttributeId(A,o[u[g]]),y===-1)continue;C=a.GetAttribute(A,y)}const M=r(o,a,A,g,p,C);g==="color"&&(M.vertexColorSpace=c.vertexColorSpace),E.attributes.push(M)}return m===o.TRIANGULAR_MESH&&(E.index=n(o,a,A)),o.destroy(A),E}function n(o,a,l){const u=l.num_faces()*3,h=u*4,A=o._malloc(h);a.GetTrianglesUInt32Array(l,h,A);const d=new Uint32Array(o.HEAPF32.buffer,A,u).slice();return o._free(A),{array:d,itemSize:1}}function r(o,a,l,c,u,h){const A=h.num_components(),m=l.num_points()*A,E=m*u.BYTES_PER_ELEMENT,g=s(o,u),p=o._malloc(E);a.GetAttributeDataArrayForAllPoints(l,h,g,E,p);const C=new u(o.HEAPF32.buffer,p,m).slice();return o._free(p),{name:c,array:C,itemSize:A}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function uT(i,e={}){return new Promise((t,n)=>{const r=new Mb;if(e.draco){const s=new cT;s.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"),r.setDRACOLoader(s)}r.load(i,t,null,s=>n(new Error(`Could not load GLTF asset ${i}:
${s}`)))})}var FE=typeof global=="object"&&global&&global.Object===Object&&global,hT=typeof self=="object"&&self&&self.Object===Object&&self,vi=FE||hT||Function("return this")(),ki=vi.Symbol,OE=Object.prototype,AT=OE.hasOwnProperty,dT=OE.toString,xs=ki?ki.toStringTag:void 0;function fT(i){var e=AT.call(i,xs),t=i[xs];try{i[xs]=void 0;var n=!0}catch{}var r=dT.call(i);return n&&(e?i[xs]=t:delete i[xs]),r}var pT=Object.prototype,gT=pT.toString;function mT(i){return gT.call(i)}var ET="[object Null]",IT="[object Undefined]",qg=ki?ki.toStringTag:void 0;function as(i){return i==null?i===void 0?IT:ET:qg&&qg in Object(i)?fT(i):mT(i)}function ns(i){return i!=null&&typeof i=="object"}var _T="[object Symbol]";function CA(i){return typeof i=="symbol"||ns(i)&&as(i)==_T}function CT(i,e){for(var t=-1,n=i==null?0:i.length,r=Array(n);++t<n;)r[t]=e(i[t],t,i);return r}var Ii=Array.isArray,Xg=ki?ki.prototype:void 0,Kg=Xg?Xg.toString:void 0;function GE(i){if(typeof i=="string")return i;if(Ii(i))return CT(i,GE)+"";if(CA(i))return Kg?Kg.call(i):"";var e=i+"";return e=="0"&&1/i==-1/0?"-0":e}function vA(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")}function vT(i){return i}var yT="[object AsyncFunction]",xT="[object Function]",ST="[object GeneratorFunction]",BT="[object Proxy]";function HE(i){if(!vA(i))return!1;var e=as(i);return e==xT||e==ST||e==yT||e==BT}var Nu=vi["__core-js_shared__"],jg=function(){var i=/[^.]+$/.exec(Nu&&Nu.keys&&Nu.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();function MT(i){return!!jg&&jg in i}var wT=Function.prototype,bT=wT.toString;function pr(i){if(i!=null){try{return bT.call(i)}catch{}try{return i+""}catch{}}return""}var TT=/[\\^$.*+?()[\]{}|]/g,RT=/^\[object .+?Constructor\]$/,DT=Function.prototype,QT=Object.prototype,LT=DT.toString,NT=QT.hasOwnProperty,PT=RegExp("^"+LT.call(NT).replace(TT,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function UT(i){if(!vA(i)||MT(i))return!1;var e=HE(i)?PT:RT;return e.test(pr(i))}function FT(i,e){return i?.[e]}function gr(i,e){var t=FT(i,e);return UT(t)?t:void 0}var Qh=gr(vi,"WeakMap"),Jg=function(){try{var i=gr(Object,"defineProperty");return i({},"",{}),i}catch{}}(),OT=9007199254740991,GT=/^(?:0|[1-9]\d*)$/;function kE(i,e){var t=typeof i;return e=e??OT,!!e&&(t=="number"||t!="symbol"&&GT.test(i))&&i>-1&&i%1==0&&i<e}function HT(i,e,t){e=="__proto__"&&Jg?Jg(i,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):i[e]=t}function zE(i,e){return i===e||i!==i&&e!==e}var kT=9007199254740991;function yA(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=kT}function zT(i){return i!=null&&yA(i.length)&&!HE(i)}var VT=Object.prototype;function YT(i){var e=i&&i.constructor,t=typeof e=="function"&&e.prototype||VT;return i===t}function WT(i,e){for(var t=-1,n=Array(i);++t<i;)n[t]=e(t);return n}var qT="[object Arguments]";function Zg(i){return ns(i)&&as(i)==qT}var VE=Object.prototype,XT=VE.hasOwnProperty,KT=VE.propertyIsEnumerable,YE=Zg(function(){return arguments}())?Zg:function(i){return ns(i)&&XT.call(i,"callee")&&!KT.call(i,"callee")};function jT(){return!1}var WE=typeof exports=="object"&&exports&&!exports.nodeType&&exports,$g=WE&&typeof module=="object"&&module&&!module.nodeType&&module,JT=$g&&$g.exports===WE,em=JT?vi.Buffer:void 0,ZT=em?em.isBuffer:void 0,Lh=ZT||jT,$T="[object Arguments]",eR="[object Array]",tR="[object Boolean]",nR="[object Date]",iR="[object Error]",rR="[object Function]",sR="[object Map]",oR="[object Number]",aR="[object Object]",cR="[object RegExp]",lR="[object Set]",uR="[object String]",hR="[object WeakMap]",AR="[object ArrayBuffer]",dR="[object DataView]",fR="[object Float32Array]",pR="[object Float64Array]",gR="[object Int8Array]",mR="[object Int16Array]",ER="[object Int32Array]",IR="[object Uint8Array]",_R="[object Uint8ClampedArray]",CR="[object Uint16Array]",vR="[object Uint32Array]",Rt={};Rt[fR]=Rt[pR]=Rt[gR]=Rt[mR]=Rt[ER]=Rt[IR]=Rt[_R]=Rt[CR]=Rt[vR]=!0;Rt[$T]=Rt[eR]=Rt[AR]=Rt[tR]=Rt[dR]=Rt[nR]=Rt[iR]=Rt[rR]=Rt[sR]=Rt[oR]=Rt[aR]=Rt[cR]=Rt[lR]=Rt[uR]=Rt[hR]=!1;function yR(i){return ns(i)&&yA(i.length)&&!!Rt[as(i)]}function xR(i){return function(e){return i(e)}}var qE=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ls=qE&&typeof module=="object"&&module&&!module.nodeType&&module,SR=Ls&&Ls.exports===qE,Pu=SR&&FE.process,tm=function(){try{var i=Ls&&Ls.require&&Ls.require("util").types;return i||Pu&&Pu.binding&&Pu.binding("util")}catch{}}(),nm=tm&&tm.isTypedArray,XE=nm?xR(nm):yR,BR=Object.prototype,MR=BR.hasOwnProperty;function wR(i,e){var t=Ii(i),n=!t&&YE(i),r=!t&&!n&&Lh(i),s=!t&&!n&&!r&&XE(i),o=t||n||r||s,a=o?WT(i.length,String):[],l=a.length;for(var c in i)MR.call(i,c)&&!(o&&(c=="length"||r&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||kE(c,l)))&&a.push(c);return a}function bR(i,e){return function(t){return i(e(t))}}var TR=bR(Object.keys,Object),RR=Object.prototype,DR=RR.hasOwnProperty;function QR(i){if(!YT(i))return TR(i);var e=[];for(var t in Object(i))DR.call(i,t)&&t!="constructor"&&e.push(t);return e}function xA(i){return zT(i)?wR(i):QR(i)}var LR=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,NR=/^\w*$/;function SA(i,e){if(Ii(i))return!1;var t=typeof i;return t=="number"||t=="symbol"||t=="boolean"||i==null||CA(i)?!0:NR.test(i)||!LR.test(i)||e!=null&&i in Object(e)}var Gs=gr(Object,"create");function PR(){this.__data__=Gs?Gs(null):{},this.size=0}function UR(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e}var FR="__lodash_hash_undefined__",OR=Object.prototype,GR=OR.hasOwnProperty;function HR(i){var e=this.__data__;if(Gs){var t=e[i];return t===FR?void 0:t}return GR.call(e,i)?e[i]:void 0}var kR=Object.prototype,zR=kR.hasOwnProperty;function VR(i){var e=this.__data__;return Gs?e[i]!==void 0:zR.call(e,i)}var YR="__lodash_hash_undefined__";function WR(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=Gs&&e===void 0?YR:e,this}function hr(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}hr.prototype.clear=PR;hr.prototype.delete=UR;hr.prototype.get=HR;hr.prototype.has=VR;hr.prototype.set=WR;function qR(){this.__data__=[],this.size=0}function ua(i,e){for(var t=i.length;t--;)if(zE(i[t][0],e))return t;return-1}var XR=Array.prototype,KR=XR.splice;function jR(i){var e=this.__data__,t=ua(e,i);if(t<0)return!1;var n=e.length-1;return t==n?e.pop():KR.call(e,t,1),--this.size,!0}function JR(i){var e=this.__data__,t=ua(e,i);return t<0?void 0:e[t][1]}function ZR(i){return ua(this.__data__,i)>-1}function $R(i,e){var t=this.__data__,n=ua(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this}function yi(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}yi.prototype.clear=qR;yi.prototype.delete=jR;yi.prototype.get=JR;yi.prototype.has=ZR;yi.prototype.set=$R;var Hs=gr(vi,"Map");function e1(){this.size=0,this.__data__={hash:new hr,map:new(Hs||yi),string:new hr}}function t1(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null}function ha(i,e){var t=i.__data__;return t1(e)?t[typeof e=="string"?"string":"hash"]:t.map}function n1(i){var e=ha(this,i).delete(i);return this.size-=e?1:0,e}function i1(i){return ha(this,i).get(i)}function r1(i){return ha(this,i).has(i)}function s1(i,e){var t=ha(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this}function xi(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}xi.prototype.clear=e1;xi.prototype.delete=n1;xi.prototype.get=i1;xi.prototype.has=r1;xi.prototype.set=s1;var o1="Expected a function";function BA(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError(o1);var t=function(){var n=arguments,r=e?e.apply(this,n):n[0],s=t.cache;if(s.has(r))return s.get(r);var o=i.apply(this,n);return t.cache=s.set(r,o)||s,o};return t.cache=new(BA.Cache||xi),t}BA.Cache=xi;var a1=500;function c1(i){var e=BA(i,function(n){return t.size===a1&&t.clear(),n}),t=e.cache;return e}var l1=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,u1=/\\(\\)?/g,h1=c1(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(l1,function(t,n,r,s){e.push(r?s.replace(u1,"$1"):n||t)}),e});function A1(i){return i==null?"":GE(i)}function KE(i,e){return Ii(i)?i:SA(i,e)?[i]:h1(A1(i))}function Aa(i){if(typeof i=="string"||CA(i))return i;var e=i+"";return e=="0"&&1/i==-1/0?"-0":e}function jE(i,e){e=KE(e,i);for(var t=0,n=e.length;i!=null&&t<n;)i=i[Aa(e[t++])];return t&&t==n?i:void 0}function d1(i,e,t){var n=i==null?void 0:jE(i,e);return n===void 0?t:n}function f1(i,e){for(var t=-1,n=e.length,r=i.length;++t<n;)i[r+t]=e[t];return i}function p1(){this.__data__=new yi,this.size=0}function g1(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t}function m1(i){return this.__data__.get(i)}function E1(i){return this.__data__.has(i)}var I1=200;function _1(i,e){var t=this.__data__;if(t instanceof yi){var n=t.__data__;if(!Hs||n.length<I1-1)return n.push([i,e]),this.size=++t.size,this;t=this.__data__=new xi(n)}return t.set(i,e),this.size=t.size,this}function Ei(i){var e=this.__data__=new yi(i);this.size=e.size}Ei.prototype.clear=p1;Ei.prototype.delete=g1;Ei.prototype.get=m1;Ei.prototype.has=E1;Ei.prototype.set=_1;function C1(i,e){for(var t=-1,n=i==null?0:i.length,r=0,s=[];++t<n;){var o=i[t];e(o,t,i)&&(s[r++]=o)}return s}function v1(){return[]}var y1=Object.prototype,x1=y1.propertyIsEnumerable,im=Object.getOwnPropertySymbols,S1=im?function(i){return i==null?[]:(i=Object(i),C1(im(i),function(e){return x1.call(i,e)}))}:v1;function B1(i,e,t){var n=e(i);return Ii(i)?n:f1(n,t(i))}function rm(i){return B1(i,xA,S1)}var Nh=gr(vi,"DataView"),Ph=gr(vi,"Promise"),Uh=gr(vi,"Set"),sm="[object Map]",M1="[object Object]",om="[object Promise]",am="[object Set]",cm="[object WeakMap]",lm="[object DataView]",w1=pr(Nh),b1=pr(Hs),T1=pr(Ph),R1=pr(Uh),D1=pr(Qh),Pi=as;(Nh&&Pi(new Nh(new ArrayBuffer(1)))!=lm||Hs&&Pi(new Hs)!=sm||Ph&&Pi(Ph.resolve())!=om||Uh&&Pi(new Uh)!=am||Qh&&Pi(new Qh)!=cm)&&(Pi=function(i){var e=as(i),t=e==M1?i.constructor:void 0,n=t?pr(t):"";if(n)switch(n){case w1:return lm;case b1:return sm;case T1:return om;case R1:return am;case D1:return cm}return e});var um=vi.Uint8Array,Q1="__lodash_hash_undefined__";function L1(i){return this.__data__.set(i,Q1),this}function N1(i){return this.__data__.has(i)}function Ko(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new xi;++e<t;)this.add(i[e])}Ko.prototype.add=Ko.prototype.push=L1;Ko.prototype.has=N1;function P1(i,e){for(var t=-1,n=i==null?0:i.length;++t<n;)if(e(i[t],t,i))return!0;return!1}function U1(i,e){return i.has(e)}var F1=1,O1=2;function JE(i,e,t,n,r,s){var o=t&F1,a=i.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var c=s.get(i),u=s.get(e);if(c&&u)return c==e&&u==i;var h=-1,A=!0,d=t&O1?new Ko:void 0;for(s.set(i,e),s.set(e,i);++h<a;){var m=i[h],E=e[h];if(n)var g=o?n(E,m,h,e,i,s):n(m,E,h,i,e,s);if(g!==void 0){if(g)continue;A=!1;break}if(d){if(!P1(e,function(p,C){if(!U1(d,C)&&(m===p||r(m,p,t,n,s)))return d.push(C)})){A=!1;break}}else if(!(m===E||r(m,E,t,n,s))){A=!1;break}}return s.delete(i),s.delete(e),A}function G1(i){var e=-1,t=Array(i.size);return i.forEach(function(n,r){t[++e]=[r,n]}),t}function H1(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t}var k1=1,z1=2,V1="[object Boolean]",Y1="[object Date]",W1="[object Error]",q1="[object Map]",X1="[object Number]",K1="[object RegExp]",j1="[object Set]",J1="[object String]",Z1="[object Symbol]",$1="[object ArrayBuffer]",eD="[object DataView]",hm=ki?ki.prototype:void 0,Uu=hm?hm.valueOf:void 0;function tD(i,e,t,n,r,s,o){switch(t){case eD:if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case $1:return!(i.byteLength!=e.byteLength||!s(new um(i),new um(e)));case V1:case Y1:case X1:return zE(+i,+e);case W1:return i.name==e.name&&i.message==e.message;case K1:case J1:return i==e+"";case q1:var a=G1;case j1:var l=n&k1;if(a||(a=H1),i.size!=e.size&&!l)return!1;var c=o.get(i);if(c)return c==e;n|=z1,o.set(i,e);var u=JE(a(i),a(e),n,r,s,o);return o.delete(i),u;case Z1:if(Uu)return Uu.call(i)==Uu.call(e)}return!1}var nD=1,iD=Object.prototype,rD=iD.hasOwnProperty;function sD(i,e,t,n,r,s){var o=t&nD,a=rm(i),l=a.length,c=rm(e),u=c.length;if(l!=u&&!o)return!1;for(var h=l;h--;){var A=a[h];if(!(o?A in e:rD.call(e,A)))return!1}var d=s.get(i),m=s.get(e);if(d&&m)return d==e&&m==i;var E=!0;s.set(i,e),s.set(e,i);for(var g=o;++h<l;){A=a[h];var p=i[A],C=e[A];if(n)var y=o?n(C,p,A,e,i,s):n(p,C,A,i,e,s);if(!(y===void 0?p===C||r(p,C,t,n,s):y)){E=!1;break}g||(g=A=="constructor")}if(E&&!g){var M=i.constructor,P=e.constructor;M!=P&&"constructor"in i&&"constructor"in e&&!(typeof M=="function"&&M instanceof M&&typeof P=="function"&&P instanceof P)&&(E=!1)}return s.delete(i),s.delete(e),E}var oD=1,Am="[object Arguments]",dm="[object Array]",bo="[object Object]",aD=Object.prototype,fm=aD.hasOwnProperty;function cD(i,e,t,n,r,s){var o=Ii(i),a=Ii(e),l=o?dm:Pi(i),c=a?dm:Pi(e);l=l==Am?bo:l,c=c==Am?bo:c;var u=l==bo,h=c==bo,A=l==c;if(A&&Lh(i)){if(!Lh(e))return!1;o=!0,u=!1}if(A&&!u)return s||(s=new Ei),o||XE(i)?JE(i,e,t,n,r,s):tD(i,e,l,t,n,r,s);if(!(t&oD)){var d=u&&fm.call(i,"__wrapped__"),m=h&&fm.call(e,"__wrapped__");if(d||m){var E=d?i.value():i,g=m?e.value():e;return s||(s=new Ei),r(E,g,t,n,s)}}return A?(s||(s=new Ei),sD(i,e,t,n,r,s)):!1}function MA(i,e,t,n,r){return i===e?!0:i==null||e==null||!ns(i)&&!ns(e)?i!==i&&e!==e:cD(i,e,t,n,MA,r)}var lD=1,uD=2;function hD(i,e,t,n){var r=t.length,s=r;if(i==null)return!s;for(i=Object(i);r--;){var o=t[r];if(o[2]?o[1]!==i[o[0]]:!(o[0]in i))return!1}for(;++r<s;){o=t[r];var a=o[0],l=i[a],c=o[1];if(o[2]){if(l===void 0&&!(a in i))return!1}else{var u=new Ei,h;if(!(h===void 0?MA(c,l,lD|uD,n,u):h))return!1}}return!0}function ZE(i){return i===i&&!vA(i)}function AD(i){for(var e=xA(i),t=e.length;t--;){var n=e[t],r=i[n];e[t]=[n,r,ZE(r)]}return e}function $E(i,e){return function(t){return t==null?!1:t[i]===e&&(e!==void 0||i in Object(t))}}function dD(i){var e=AD(i);return e.length==1&&e[0][2]?$E(e[0][0],e[0][1]):function(t){return t===i||hD(t,i,e)}}function fD(i,e){return i!=null&&e in Object(i)}function pD(i,e,t){e=KE(e,i);for(var n=-1,r=e.length,s=!1;++n<r;){var o=Aa(e[n]);if(!(s=i!=null&&t(i,o)))break;i=i[o]}return s||++n!=r?s:(r=i==null?0:i.length,!!r&&yA(r)&&kE(o,r)&&(Ii(i)||YE(i)))}function gD(i,e){return i!=null&&pD(i,e,fD)}var mD=1,ED=2;function ID(i,e){return SA(i)&&ZE(e)?$E(Aa(i),e):function(t){var n=d1(t,i);return n===void 0&&n===e?gD(t,i):MA(e,n,mD|ED)}}function _D(i){return function(e){return e?.[i]}}function CD(i){return function(e){return jE(e,i)}}function vD(i){return SA(i)?_D(Aa(i)):CD(i)}function yD(i){return typeof i=="function"?i:i==null?vT:typeof i=="object"?Ii(i)?ID(i[0],i[1]):dD(i):vD(i)}function xD(i){return function(e,t,n){for(var r=-1,s=Object(e),o=n(e),a=o.length;a--;){var l=o[++r];if(t(s[l],l,s)===!1)break}return e}}var SD=xD();function BD(i,e){return i&&SD(i,e,xA)}function MD(i,e){var t={};return e=yD(e),BD(i,function(n,r,s){HT(t,r,e(n,r,s))}),t}class wD{#t=[];#n={};#i=[];#r=10;#e=[];addProgressListener(e){if(typeof e!="function")throw new TypeError("onProgress must be a function");this.#i.push(e)}queue({url:e,type:t,...n}){if(!e)throw new TypeError("Must specify a URL or opt.url for AssetManager.queue()");const r=this._getQueued(e);if(r){const s=rb(r,["url","type"]);if(JSON.stringify(n)!==JSON.stringify(s)){const o=performance.now().toFixed(3).replace(".",""),a=`${e}.${o}`;return this.#t.push({key:a,url:e,type:t||this._extractType(e),...n}),a}return r.url}return this.#t.push({url:e,type:t||this._extractType(e),...n}),e}queueStandardMaterial(e,t={}){const n={},r=["pbrMap","alphaMap","aoMap","bumpMap","displacementMap","lightMap","metalnessMap","normalMap","roughnessMap","clearcoatMap","clearcoatNormalMap","clearcoatRoughnessMap","sheenRoughnessMap","sheenColorMap","specularIntensityMap","specularColorMap","thicknessMap","transmissionMap"];return Object.keys(e).forEach(s=>{n[s]=this.queue({url:e[s],type:"texture",...t,...!r.includes(s)&&{gamma:!0}})}),n}_getQueued(e){return this.#t.find(t=>t.url===e)}_extractType(e){const t=e.slice(e.lastIndexOf("."));switch(!0){case/\.(gltf|glb)$/i.test(t):return"gltf";case/\.json$/i.test(t):return"json";case/\.svg$/i.test(t):return"svg";case/\.(jpe?g|png|gif|bmp|tga|tif)$/i.test(t):return"image";case/\.(wav|mp3)$/i.test(t):return"audio";case/\.(mp4|webm|ogg|ogv)$/i.test(t):return"video";default:throw new Error(`Could not load ${e}, unknown file extension!`)}}get=e=>{if(!e)throw new TypeError("Must specify an URL for AssetManager.get()");return this.#n[e]};getStandardMaterial=e=>MD(e,t=>this.get(t));async loadSingle({renderer:e,...t}){if(!e)throw new Error("You must provide a renderer to the loadSingle function.");try{const n=performance.now(),r=t.key||t.url;return r in this.#n||(this.#n[r]=await this._loadItem({renderer:e,...t})),window.DEBUG&&console.log(`📦 Loaded single asset %c${t.url}%c in ${ic(performance.now()-n)}`,"color:blue","color:black"),r}catch(n){console.error(`📦 Asset ${t.url} was not loaded:
${n}`)}}async load({renderer:e}){if(!e)throw new Error("You must provide a renderer to the load function.");const t=this.#t.slice();this.#t.length=0;const n=t.length;if(n===0){setTimeout(()=>this.#i.forEach(s=>s(1)),0);return}const r=performance.now();if(await uM(t,async(s,o)=>{try{const l=performance.now(),c=s.key||s.url;c in this.#n||(this.#n[c]=await this._loadItem({renderer:e,...s})),window.DEBUG&&this.log(`Loaded %c${s.url}%c in ${ic(performance.now()-l)}`,"color:blue","color:black")}catch(l){this.logError(`Asset ${s.url} was not loaded:
${l}`)}const a=(o+1)/n;this.#i.forEach(l=>l(a))},{concurrency:this.#r}),window.DEBUG){const s=this.#e.filter(o=>o.type==="error");s.length===0?this.groupLog(`📦 Assets loaded in ${ic(performance.now()-r)} ⏱`):this.groupLog(`📦 %c Could not load ${s.length} asset${s.length>1?"s":""} `,"color:white;background:red;")}}_loadItem({url:e,type:t,renderer:n,...r}){switch(t){case"gltf":return uT(e,r);case"json":return fetch(e).then(s=>s.json());case"envmap":case"envMap":case"env-map":return yb(e,{renderer:n,...r});case"svg":case"image":return cE(e,{crossorigin:"anonymous"});case"texture":return sb(e,{renderer:n,...r});case"audio":return fetch(e).then(s=>s.arrayBuffer());case"video":return fetch(e).then(s=>s.blob());default:throw new Error(`Could not load ${e}, the type ${t} is unknown!`)}}log(...e){this.#e.push({type:"log",text:e})}logError(...e){this.#e.push({type:"error",text:e})}groupLog(...e){console.groupCollapsed(...e),this.#e.forEach(t=>{console[t.type](...t.text)}),console.groupEnd(),this.#e.length=0}}const Cn=new wD;function bD(i,e){eI(i),i.uniforms=e,i.addBeforeCompileListener(t=>{i.uniforms={...i.uniforms,...t.uniforms},t.uniforms=i.uniforms}),tI(i)}function TD(i,e){eI(i),i.addBeforeCompileListener(t=>{t.vertexShader=RD(t.vertexShader,e)}),tI(i)}function eI(i){i.beforeCompileListeners||(i.beforeCompileListeners=[],i.addBeforeCompileListener=e=>{i.beforeCompileListeners.push(e)})}function tI(i){i.onBeforeCompile=e=>{i.beforeCompileListeners.forEach(t=>t(e))}}function RD(i,{defines:e="",head:t="",main:n="",transformed:r,objectNormal:s,transformedNormal:o,gl_Position:a,diffuse:l,emissive:c,gl_FragColor:u,...h}){let A=i;const d=(E,g,p)=>E.split(g).join(p);return Object.keys(h).forEach(E=>{A=d(A,E,h[E])}),A=A.replace("void main() {",`
    ${t}
    void main() {
      ${n}
    `),r&&A.includes("#include <begin_vertex>")&&(A=A.replace("#include <begin_vertex>",`#include <begin_vertex>
      ${r}
      `)),s&&A.includes("#include <beginnormal_vertex>")&&(A=A.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
      ${s}
      `)),o&&A.includes("#include <defaultnormal_vertex>")&&(A=A.replace("#include <defaultnormal_vertex>",`#include <defaultnormal_vertex>
      ${o}
      `)),a&&A.includes("#include <project_vertex>")&&(A=A.replace("#include <project_vertex>",`#include <project_vertex>
      ${a}
      `)),l&&A.includes("vec4 diffuseColor = vec4( diffuse, opacity );")&&(A=A.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`
      vec3 diffuse_;
      ${d(l,"diffuse =","diffuse_ =")}
      vec4 diffuseColor = vec4(diffuse_, opacity);
      `)),c&&A.includes("vec3 totalEmissiveRadiance = emissive;")&&(A=A.replace("vec3 totalEmissiveRadiance = emissive;",`
      vec3 emissive_;
      ${d(c,"emissive =","emissive_ =")}
      vec3 totalEmissiveRadiance = emissive_;
      `)),u&&A.includes("#include <output_fragment>")&&(A=A.replace("#include <output_fragment>",`
      #include <output_fragment>
      ${u}
      `)),`
    ${Object.keys(e).map(E=>`#define ${E} ${e[E]}`).join(`
`)}
    ${A}
  `}const DD=Cn.queue({url:"assets/suzanne.gltf",type:"gltf"}),QD=Cn.queue({url:"assets/spotty-metal/albedo.jpg",type:"texture",gamma:!0}),LD=Cn.queue({url:"assets/spotty-metal/metalness.jpg",type:"texture"}),ND=Cn.queue({url:"assets/spotty-metal/roughness.jpg",type:"texture"}),PD=Cn.queue({url:"assets/spotty-metal/normal.jpg",type:"texture"}),UD=Cn.queue({url:"assets/ouside-afternoon-blurred-hdr.jpg",type:"env-map",gamma:!0});class FD extends Fi{constructor(e,t={}){super(t),this.webgl=e,this.options=t;const r=Cn.get(DD).scene.clone(),s=Cn.get(UD),o=new ra({map:Cn.get(QD),metalnessMap:Cn.get(LD),roughnessMap:Cn.get(ND),normalMap:Cn.get(PD),normalScale:new et(2,2),envMap:s,roughness:.5,metalness:1});e.gui?.addSmart(o,"roughness"),this.material=o,bD(o,{time:{value:0},frequency:{value:.5},amplitude:{value:.7}}),e.gui?.wireUniforms("Movement",o.uniforms,{blacklist:["time"]}),TD(o,{head:`
        uniform float time;
        uniform float frequency;
        uniform float amplitude;

        // you could import glsl packages like this
        // #pragma glslify: noise3d = require(glsl-noise/simplex/3d)
      `,main:`
        float theta = sin(position.z * frequency + time) * amplitude;
        float c = cos(theta);
        float s = sin(theta);
        mat3 deformMatrix = mat3(c, 0, s, 0, 1, 0, -s, 0, c);
      `,objectNormal:`
        objectNormal *= deformMatrix;
      `,transformed:`
        transformed *= deformMatrix;
      `}),r.traverse(a=>{a.isMesh&&(a.material=o)}),r.scale.multiplyScalar(1.2),this.speed=1.5,e.gui?.folders.find(a=>a._title==="Movement").addSmart(this,"speed"),this.add(r),this.webgl.scene.background=s}onPointerDown(e,{x:t,y:n}){const r=new et().set(t/this.webgl.width*2-1,-n/this.webgl.height*2+1),s=new hS;s.setFromCamera(r,this.webgl.camera);const o=s.intersectObject(this,!0);console.log(o.length>0?`Hit ${o[0].object.name}!`:"No hit")}update(e,t){this.material.uniforms.time.value+=e*this.speed}}function OD(i){const e=new Kx(16777215,16777215,.6);e.color.setHSL(.6,1,.6),e.groundColor.setHSL(.095,1,.75),e.position.set(0,50,0),i.scene.add(e);const t=new jm(16777215,1);t.color.setHSL(.1,1,.95),t.position.set(3,5,1),t.position.multiplyScalar(50),i.scene.add(t)}const nI=`
  .button {
    background: chocolate;
    box-shadow: 0px 5px 0px 0px #c71e1e;
    cursor: pointer;
    padding: 12px 16px;
    margin: 12px;
    border-radius: 5px;
    color: white;
    font-size: 24px;
  }

  .button:active {
    transform: translateY(4px);
    box-shadow: none;
  }

  .button[disabled] {
    pointer-events: none;
    opacity: 0.7;
  }
`;function GD(i){document.head.innerHTML=`${document.head.innerHTML}<style>${nI}</style>`;const e=document.createElement("div");e.classList.add("button"),e.style.position="fixed",e.style.bottom=0,e.style.right=0,e.textContent="📸 Save screenshot",e.addEventListener("click",()=>i.saveScreenshot()),document.body.appendChild(e)}function HD(i){document.head.innerHTML=`${document.head.innerHTML}<style>${nI}</style>`;const e=document.createElement("div");e.classList.add("button"),e.style.position="fixed",e.style.bottom=0,e.style.left=0,e.textContent="🔴 Start recording mp4",e.addEventListener("click",async()=>{i.isRecording?(e.textContent="⏳ Processing video...",e.setAttribute("disabled",""),await i.stopRecording(),e.removeAttribute("disabled"),e.textContent="🔴 Start recording mp4"):(e.textContent="🟥 Stop recording mp4",i.startRecording())}),document.body.appendChild(e)}window.DEBUG=window.location.search.includes("debug");const kD=document.querySelector("#app"),hn=new lM({canvas:kD,background:"#111",backgroundAlpha:1,postprocessing:!0,showFps:window.DEBUG,orbitControls:window.DEBUG,gui:window.DEBUG});window.DEBUG&&(window.webgl=hn);hn.canvas.style.visibility="hidden";await hn.init();await Cn.load({renderer:hn.renderer});hn.scene.suzanne=new FD(hn);hn.scene.add(hn.scene.suzanne);OD(hn);hn.composer.addPass(new hB(hn.camera,new oB));window.DEBUG&&(GD(hn),HD(hn));hn.canvas.style.visibility="";hn.start();export{XD as C,zD as M,nr as P,zi as Q,zs as R,qD as S,VD as T,X as V,et as a,l_ as b};
