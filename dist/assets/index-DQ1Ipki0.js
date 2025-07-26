(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $o="169",Vs={ROTATE:0,DOLLY:1,PAN:2},Gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$d=0,jl=1,Zd=2,dA=1,ef=2,yi=3,oi=0,$t=1,En=2,ii=0,Ys=1,$l=2,Zl=3,eh=4,tf=5,cs=100,nf=101,sf=102,rf=103,of=104,af=200,cf=201,lf=202,hf=203,Ac=204,dc=205,uf=206,Af=207,df=208,ff=209,pf=210,gf=211,mf=212,Ef=213,If=214,fc=0,pc=1,gc=2,qs=3,mc=4,Ec=5,Ic=6,_c=7,fA=0,_f=1,Cf=2,Xi=0,yf=1,vf=2,xf=3,Sf=4,Bf=5,Mf=6,wf=7,th="attached",bf="detached",pA=300,Js=301,js=302,Uo=303,Cc=304,Zo=306,$s=1e3,ti=1001,Fo=1002,fn=1003,gA=1004,wr=1005,bt=1006,wo=1007,ni=1008,hn=1009,mA=1010,EA=1011,Nr=1012,ul=1013,Ki=1014,Zt=1015,ln=1016,Al=1017,dl=1018,As=1020,IA=35902,_A=1021,CA=1022,Bn=1023,yA=1024,vA=1025,Ws=1026,ds=1027,ea=1028,fl=1029,xA=1030,pl=1031,gl=1033,bo=33776,To=33777,Ro=33778,Do=33779,yc=35840,vc=35841,xc=35842,Sc=35843,Bc=36196,Mc=37492,wc=37496,bc=37808,Tc=37809,Rc=37810,Dc=37811,Qc=37812,Lc=37813,Nc=37814,Pc=37815,Uc=37816,Fc=37817,Oc=37818,Gc=37819,Hc=37820,kc=37821,Qo=36492,zc=36494,Vc=36495,SA=36283,Yc=36284,Wc=36285,Xc=36286,Pr=2300,Ur=2301,da=2302,nh=2400,ih=2401,sh=2402,Tf=2500,Rf=0,BA=1,Kc=2,kr=3200,Df=3201,MA=0,Qf=1,zn="",Et="srgb",Nt="srgb-linear",ml="display-p3",ta="display-p3-linear",Oo="linear",Dt="srgb",Go="rec709",Ho="p3",Ss=7680,rh=519,Lf=512,Nf=513,Pf=514,wA=515,Uf=516,Ff=517,Of=518,Gf=519,qc=35044,oh="300 es",Si=2e3,ko=2001;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ah=1234567;const Tr=Math.PI/180,Zs=180/Math.PI;function Wn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function jt(i,e,t){return Math.max(e,Math.min(t,i))}function El(i,e){return(i%e+e)%e}function Hf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function kf(i,e,t){return i!==e?(t-i)/(e-i):0}function Rr(i,e,t){return(1-t)*i+t*e}function zf(i,e,t,n){return Rr(i,e,1-Math.exp(-t*n))}function Vf(i,e=1){return e-Math.abs(El(i,e*2)-e)}function Yf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Wf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Xf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Kf(i,e){return i+Math.random()*(e-i)}function qf(i){return i*(.5-Math.random())}function Jf(i){i!==void 0&&(ah=i);let e=ah+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jf(i){return i*Tr}function $f(i){return i*Zs}function Zf(i){return(i&i-1)===0&&i!==0}function ep(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function np(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),A=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*A,a*l);break;case"YZY":i.set(c*A,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*A,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const bA={DEG2RAD:Tr,RAD2DEG:Zs,generateUUID:Wn,clamp:jt,euclideanModulo:El,mapLinear:Hf,inverseLerp:kf,lerp:Rr,damp:zf,pingpong:Vf,smoothstep:Yf,smootherstep:Wf,randInt:Xf,randFloat:Kf,randFloatSpread:qf,seededRandom:Jf,degToRad:jf,radToDeg:$f,isPowerOfTwo:Zf,ceilPowerOfTwo:ep,floorPowerOfTwo:tp,setQuaternionFromProperEuler:np,normalize:Bt,denormalize:Vn};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,n,s,r,o,a,c,l){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],A=n[2],f=n[5],m=n[8],I=s[0],g=s[3],p=s[6],C=s[1],x=s[4],w=s[7],P=s[2],N=s[5],D=s[8];return r[0]=o*I+a*C+c*P,r[3]=o*g+a*x+c*N,r[6]=o*p+a*w+c*D,r[1]=l*I+h*C+u*P,r[4]=l*g+h*x+u*N,r[7]=l*p+h*w+u*D,r[2]=A*I+f*C+m*P,r[5]=A*g+f*x+m*N,r[8]=A*p+f*w+m*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,A=a*c-h*r,f=l*r-o*c,m=t*u+n*A+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const I=1/m;return e[0]=u*I,e[1]=(s*l-h*n)*I,e[2]=(a*n-s*o)*I,e[3]=A*I,e[4]=(h*t-s*c)*I,e[5]=(s*r-a*t)*I,e[6]=f*I,e[7]=(n*c-l*t)*I,e[8]=(o*t-n*r)*I,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fa.makeScale(e,t)),this}rotate(e){return this.premultiply(fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new at;function TA(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ip(){const i=Fr("canvas");return i.style.display="block",i}const ch={};function Lo(i){i in ch||(ch[i]=!0,console.warn(i))}function sp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function rp(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function op(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const lh=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hh=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),dr={[Nt]:{transfer:Oo,primaries:Go,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Et]:{transfer:Dt,primaries:Go,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ta]:{transfer:Oo,primaries:Ho,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(hh),fromReference:i=>i.applyMatrix3(lh)},[ml]:{transfer:Dt,primaries:Ho,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(hh),fromReference:i=>i.applyMatrix3(lh).convertLinearToSRGB()}},ap=new Set([Nt,ta]),It={enabled:!0,_workingColorSpace:Nt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ap.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=dr[e].toReference,s=dr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return dr[i].primaries},getTransfer:function(i){return i===zn?Oo:dr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(dr[e].luminanceCoefficients)}};function Xs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bs;class cp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bs===void 0&&(Bs=Fr("canvas")),Bs.width=e.width,Bs.height=e.height;const n=Bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xs(t[n]/255)*255):t[n]=Xs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lp=0;class RA{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ga(s[o].image)):r.push(ga(s[o]))}else r=ga(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hp=0;class zt extends wi{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=ti,s=ti,r=bt,o=ni,a=Bn,c=hn,l=zt.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Wn(),this.name="",this.source=new RA(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pA)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=pA;zt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,s=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],A=c[1],f=c[5],m=c[9],I=c[2],g=c[6],p=c[10];if(Math.abs(h-A)<.01&&Math.abs(u-I)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+A)<.1&&Math.abs(u+I)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,w=(f+1)/2,P=(p+1)/2,N=(h+A)/4,D=(u+I)/4,T=(m+g)/4;return x>w&&x>P?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=N/n,r=D/n):w>P?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=N/s,r=T/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=D/r,s=T/r),this.set(n,s,r,t),this}let C=Math.sqrt((g-m)*(g-m)+(u-I)*(u-I)+(A-h)*(A-h));return Math.abs(C)<.001&&(C=1),this.x=(g-m)/C,this.y=(u-I)/C,this.z=(A-h)/C,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class up extends wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new zt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new RA(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends up{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class DA extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ap extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let ai=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const A=r[o+0],f=r[o+1],m=r[o+2],I=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=A,e[t+1]=f,e[t+2]=m,e[t+3]=I;return}if(u!==I||c!==A||l!==f||h!==m){let g=1-a;const p=c*A+l*f+h*m+u*I,C=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const P=Math.sqrt(x),N=Math.atan2(P,p*C);g=Math.sin(g*N)/P,a=Math.sin(a*N)/P}const w=a*C;if(c=c*g+A*w,l=l*g+f*w,h=h*g+m*w,u=u*g+I*w,g===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],A=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*f-l*A,e[t+1]=c*m+h*A+l*u-a*f,e[t+2]=l*m+h*f+a*A-c*u,e[t+3]=h*m-a*u-c*A-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),A=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=A*h*u+l*f*m,this._y=l*f*u-A*h*m,this._z=l*h*m+A*f*u,this._w=l*h*u-A*f*m;break;case"YXZ":this._x=A*h*u+l*f*m,this._y=l*f*u-A*h*m,this._z=l*h*m-A*f*u,this._w=l*h*u+A*f*m;break;case"ZXY":this._x=A*h*u-l*f*m,this._y=l*f*u+A*h*m,this._z=l*h*m+A*f*u,this._w=l*h*u-A*f*m;break;case"ZYX":this._x=A*h*u-l*f*m,this._y=l*f*u+A*h*m,this._z=l*h*m-A*f*u,this._w=l*h*u+A*f*m;break;case"YZX":this._x=A*h*u+l*f*m,this._y=l*f*u+A*h*m,this._z=l*h*m-A*f*u,this._w=l*h*u-A*f*m;break;case"XZY":this._x=A*h*u-l*f*m,this._y=l*f*u-A*h*m,this._z=l*h*m+A*f*u,this._w=l*h*u+A*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],A=n+a+u;if(A>0){const f=.5/Math.sqrt(A+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,A=Math.sin(t*h)/l;return this._w=o*u+this._w*A,this._x=n*u+this._x*A,this._y=s*u+this._y*A,this._z=r*u+this._z*A,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new K,uh=new ai;class bi{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(e.matrixWorld),this.union(Kr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),qr.subVectors(this.max,fr),Ms.subVectors(e.a,fr),ws.subVectors(e.b,fr),bs.subVectors(e.c,fr),Ni.subVectors(ws,Ms),Pi.subVectors(bs,ws),es.subVectors(Ms,bs);let t=[0,-Ni.z,Ni.y,0,-Pi.z,Pi.y,0,-es.z,es.y,Ni.z,0,-Ni.x,Pi.z,0,-Pi.x,es.z,0,-es.x,-Ni.y,Ni.x,0,-Pi.y,Pi.x,0,-es.y,es.x,0];return!Ea(t,Ms,ws,bs,qr)||(t=[1,0,0,0,1,0,0,0,1],!Ea(t,Ms,ws,bs,qr))?!1:(Jr.crossVectors(Ni,Pi),t=[Jr.x,Jr.y,Jr.z],Ea(t,Ms,ws,bs,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new K,new K,new K,new K,new K,new K,new K,new K],Pn=new K,Kr=new bi,Ms=new K,ws=new K,bs=new K,Ni=new K,Pi=new K,es=new K,fr=new K,qr=new K,Jr=new K,ts=new K;function Ea(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ts.fromArray(i,r);const a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),c=e.dot(ts),l=t.dot(ts),h=n.dot(ts);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const dp=new bi,pr=new K,Ia=new K;class li{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(Ia)),this.expandByPoint(pr.copy(e.center).sub(Ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new K,_a=new K,jr=new K,Ui=new K,Ca=new K,$r=new K,ya=new K;let ar=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_a.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(_a);const r=e.distanceTo(t)*.5,o=-this.direction.dot(jr),a=Ui.dot(this.direction),c=-Ui.dot(jr),l=Ui.lengthSq(),h=Math.abs(1-o*o);let u,A,f,m;if(h>0)if(u=o*c-a,A=o*a-c,m=r*h,u>=0)if(A>=-m)if(A<=m){const I=1/h;u*=I,A*=I,f=u*(u+o*A+2*a)+A*(o*u+A+2*c)+l}else A=r,u=Math.max(0,-(o*A+a)),f=-u*u+A*(A+2*c)+l;else A=-r,u=Math.max(0,-(o*A+a)),f=-u*u+A*(A+2*c)+l;else A<=-m?(u=Math.max(0,-(-o*r+a)),A=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+A*(A+2*c)+l):A<=m?(u=0,A=Math.min(Math.max(-r,-c),r),f=A*(A+2*c)+l):(u=Math.max(0,-(o*r+a)),A=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+A*(A+2*c)+l);else A=o>0?-r:r,u=Math.max(0,-(o*A+a)),f=-u*u+A*(A+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_a).addScaledVector(jr,A),f}intersectSphere(e,t){mi.subVectors(e.center,this.origin);const n=mi.dot(this.direction),s=mi.dot(mi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,A=this.origin;return l>=0?(n=(e.min.x-A.x)*l,s=(e.max.x-A.x)*l):(n=(e.max.x-A.x)*l,s=(e.min.x-A.x)*l),h>=0?(r=(e.min.y-A.y)*h,o=(e.max.y-A.y)*h):(r=(e.max.y-A.y)*h,o=(e.min.y-A.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-A.z)*u,c=(e.max.z-A.z)*u):(a=(e.max.z-A.z)*u,c=(e.min.z-A.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,s,r){Ca.subVectors(t,e),$r.subVectors(n,e),ya.crossVectors(Ca,$r);let o=this.direction.dot(ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const c=a*this.direction.dot($r.crossVectors(Ui,$r));if(c<0)return null;const l=a*this.direction.dot(Ca.cross(Ui));if(l<0||c+l>o)return null;const h=-a*Ui.dot(ya);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class nt{constructor(e,t,n,s,r,o,a,c,l,h,u,A,f,m,I,g){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,A,f,m,I,g)}set(e,t,n,s,r,o,a,c,l,h,u,A,f,m,I,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=A,p[3]=f,p[7]=m,p[11]=I,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const A=o*h,f=o*u,m=a*h,I=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=A-I*l,t[9]=-a*c,t[2]=I-A*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){const A=c*h,f=c*u,m=l*h,I=l*u;t[0]=A+I*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=I+A*a,t[10]=o*c}else if(e.order==="ZXY"){const A=c*h,f=c*u,m=l*h,I=l*u;t[0]=A-I*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=I-A*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const A=o*h,f=o*u,m=a*h,I=a*u;t[0]=c*h,t[4]=m*l-f,t[8]=A*l+I,t[1]=c*u,t[5]=I*l+A,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const A=o*c,f=o*l,m=a*c,I=a*l;t[0]=c*h,t[4]=I-A*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+m,t[10]=A-I*u}else if(e.order==="XZY"){const A=o*c,f=o*l,m=a*c,I=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=A*u+I,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=I*u+A}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fp,e,pp)}lookAt(e,t,n){const s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Fi.crossVectors(n,vn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Fi.crossVectors(n,vn)),Fi.normalize(),Zr.crossVectors(vn,Fi),s[0]=Fi.x,s[4]=Zr.x,s[8]=vn.x,s[1]=Fi.y,s[5]=Zr.y,s[9]=vn.y,s[2]=Fi.z,s[6]=Zr.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],A=n[9],f=n[13],m=n[2],I=n[6],g=n[10],p=n[14],C=n[3],x=n[7],w=n[11],P=n[15],N=s[0],D=s[4],T=s[8],F=s[12],_=s[1],v=s[5],U=s[9],H=s[13],z=s[2],$=s[6],Y=s[10],re=s[14],te=s[3],ye=s[7],_e=s[11],Le=s[15];return r[0]=o*N+a*_+c*z+l*te,r[4]=o*D+a*v+c*$+l*ye,r[8]=o*T+a*U+c*Y+l*_e,r[12]=o*F+a*H+c*re+l*Le,r[1]=h*N+u*_+A*z+f*te,r[5]=h*D+u*v+A*$+f*ye,r[9]=h*T+u*U+A*Y+f*_e,r[13]=h*F+u*H+A*re+f*Le,r[2]=m*N+I*_+g*z+p*te,r[6]=m*D+I*v+g*$+p*ye,r[10]=m*T+I*U+g*Y+p*_e,r[14]=m*F+I*H+g*re+p*Le,r[3]=C*N+x*_+w*z+P*te,r[7]=C*D+x*v+w*$+P*ye,r[11]=C*T+x*U+w*Y+P*_e,r[15]=C*F+x*H+w*re+P*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],A=e[10],f=e[14],m=e[3],I=e[7],g=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*a*A+n*l*A+s*a*f-n*c*f)+I*(+t*c*f-t*l*A+r*o*A-s*o*f+s*l*h-r*c*h)+g*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*A+s*o*u-n*o*A+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],A=e[10],f=e[11],m=e[12],I=e[13],g=e[14],p=e[15],C=u*g*l-I*A*l+I*c*f-a*g*f-u*c*p+a*A*p,x=m*A*l-h*g*l-m*c*f+o*g*f+h*c*p-o*A*p,w=h*I*l-m*u*l+m*a*f-o*I*f-h*a*p+o*u*p,P=m*u*c-h*I*c-m*a*A+o*I*A+h*a*g-o*u*g,N=t*C+n*x+s*w+r*P;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/N;return e[0]=C*D,e[1]=(I*A*r-u*g*r-I*s*f+n*g*f+u*s*p-n*A*p)*D,e[2]=(a*g*r-I*c*r+I*s*l-n*g*l-a*s*p+n*c*p)*D,e[3]=(u*c*r-a*A*r-u*s*l+n*A*l+a*s*f-n*c*f)*D,e[4]=x*D,e[5]=(h*g*r-m*A*r+m*s*f-t*g*f-h*s*p+t*A*p)*D,e[6]=(m*c*r-o*g*r-m*s*l+t*g*l+o*s*p-t*c*p)*D,e[7]=(o*A*r-h*c*r+h*s*l-t*A*l-o*s*f+t*c*f)*D,e[8]=w*D,e[9]=(m*u*r-h*I*r-m*n*f+t*I*f+h*n*p-t*u*p)*D,e[10]=(o*I*r-m*a*r+m*n*l-t*I*l-o*n*p+t*a*p)*D,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*D,e[12]=P*D,e[13]=(h*I*s-m*u*s+m*n*A-t*I*A-h*n*g+t*u*g)*D,e[14]=(m*a*s-o*I*s-m*n*c+t*I*c+o*n*g-t*a*g)*D,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*A+t*a*A)*D,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,A=r*l,f=r*h,m=r*u,I=o*h,g=o*u,p=a*u,C=c*l,x=c*h,w=c*u,P=n.x,N=n.y,D=n.z;return s[0]=(1-(I+p))*P,s[1]=(f+w)*P,s[2]=(m-x)*P,s[3]=0,s[4]=(f-w)*N,s[5]=(1-(A+p))*N,s[6]=(g+C)*N,s[7]=0,s[8]=(m+x)*D,s[9]=(g-C)*D,s[10]=(1-(A+I))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ts.set(s[0],s[1],s[2]).length();const o=Ts.set(s[4],s[5],s[6]).length(),a=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);const l=1/r,h=1/o,u=1/a;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Si){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),A=(n+s)/(n-s);let f,m;if(a===Si)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===ko)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=A,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Si){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),A=(t+e)*l,f=(n+s)*h;let m,I;if(a===Si)m=(o+r)*u,I=-2*u;else if(a===ko)m=r*u,I=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-A,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=I,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ts=new K,Un=new nt,fp=new K(0,0,0),pp=new K(1,1,1),Fi=new K,Zr=new K,vn=new K,Ah=new nt,dh=new ai;class ci{constructor(e=0,t=0,n=0,s=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],A=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(A,l),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(A,-1,1)),Math.abs(A)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(A,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(A,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ah,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dh.setFromEuler(this),this.setFromQuaternion(dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class Il{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gp=0;const fh=new K,Rs=new ai,Ei=new nt,eo=new K,gr=new K,mp=new K,Ep=new ai,ph=new K(1,0,0),gh=new K(0,1,0),mh=new K(0,0,1),Eh={type:"added"},Ip={type:"removed"},Ds={type:"childadded",child:null},va={type:"childremoved",child:null};class Ut extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new K,t=new ci,n=new ai,s=new K(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new at}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(ph,e)}rotateY(e){return this.rotateOnAxis(gh,e)}rotateZ(e){return this.rotateOnAxis(mh,e)}translateOnAxis(e,t){return fh.copy(e).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ph,e)}translateY(e){return this.translateOnAxis(gh,e)}translateZ(e){return this.translateOnAxis(mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?eo.copy(e):eo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(gr,eo,this.up):Ei.lookAt(eo,gr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(Ei),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eh),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ip),va.child=e,this.dispatchEvent(va),va.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eh),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Ep,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),A=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),A.length>0&&(n.skeletons=A),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ut.DEFAULT_UP=new K(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new K,Ii=new K,xa=new K,_i=new K,Qs=new K,Ls=new K,Ih=new K,Sa=new K,Ba=new K,Ma=new K,wa=new vt,ba=new vt,Ta=new vt;class Yn{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fn.subVectors(e,t),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fn.subVectors(s,t),Ii.subVectors(n,t),xa.subVectors(e,t);const o=Fn.dot(Fn),a=Fn.dot(Ii),c=Fn.dot(xa),l=Ii.dot(Ii),h=Ii.dot(xa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const A=1/u,f=(l*c-a*h)*A,m=(o*h-a*c)*A;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(o,_i.y),c.addScaledVector(a,_i.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return wa.setScalar(0),ba.setScalar(0),Ta.setScalar(0),wa.fromBufferAttribute(e,t),ba.fromBufferAttribute(e,n),Ta.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wa,r.x),o.addScaledVector(ba,r.y),o.addScaledVector(Ta,r.z),o}static isFrontFacing(e,t,n,s){return Fn.subVectors(n,t),Ii.subVectors(e,t),Fn.cross(Ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),Fn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Yn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Qs.subVectors(s,n),Ls.subVectors(r,n),Sa.subVectors(e,n);const c=Qs.dot(Sa),l=Ls.dot(Sa);if(c<=0&&l<=0)return t.copy(n);Ba.subVectors(e,s);const h=Qs.dot(Ba),u=Ls.dot(Ba);if(h>=0&&u<=h)return t.copy(s);const A=c*u-h*l;if(A<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Qs,o);Ma.subVectors(e,r);const f=Qs.dot(Ma),m=Ls.dot(Ma);if(m>=0&&f<=m)return t.copy(r);const I=f*l-c*m;if(I<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Ls,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Ih.subVectors(r,s),a=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(Ih,a);const p=1/(g+I+A);return o=I*p,a=A*p,t.copy(n).addScaledVector(Qs,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const QA={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},to={h:0,s:0,l:0};function Ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=It.workingColorSpace){if(e=El(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ra(o,r,e+1/3),this.g=Ra(o,r,e),this.b=Ra(o,r,e-1/3)}return It.toWorkingColorSpace(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=QA[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return It.fromWorkingColorSpace(rn.copy(this),e),Math.round(jt(rn.r*255,0,255))*65536+Math.round(jt(rn.g*255,0,255))*256+Math.round(jt(rn.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(rn.copy(this),t);const n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Et){It.fromWorkingColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,s=rn.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(to);const n=Rr(Oi.h,to.h,t),s=Rr(Oi.s,to.s,t),r=Rr(Oi.l,to.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new je;je.NAMES=QA;let _p=0;class Rn extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Ys,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=dc,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ac&&(n.blendSrc=this.blendSrc),this.blendDst!==dc&&(n.blendDst=this.blendDst),this.blendEquation!==cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vi extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=fA,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xi=Cp();function Cp(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function yp(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=jt(i,-65504,65504),xi.floatView[0]=i;const e=xi.uint32View[0],t=e>>23&511;return xi.baseTable[t]+((e&8388607)>>xi.shiftTable[t])}function vp(i){const e=i>>10;return xi.uint32View[0]=xi.mantissaTable[xi.offsetTable[e]+(i&1023)]+xi.exponentTable[e],xi.floatView[0]}const Hs={toHalfFloat:yp,fromHalfFloat:vp},kt=new K,no=new Ve;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=Zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qc&&(e.usage=this.usage),e}}class LA extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class NA extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class en extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xp=0;const wn=new nt,Da=new Ut,Ns=new K,xn=new bi,mr=new bi,Jt=new K;class nn extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(TA(e)?NA:LA)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Da.lookAt(e),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new en(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(xn.min,mr.min),xn.expandByPoint(Jt),Jt.addVectors(xn.max,mr.max),xn.expandByPoint(Jt)):(xn.expandByPoint(mr.min),xn.expandByPoint(mr.max))}xn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Jt.fromBufferAttribute(a,l),c&&(Ns.fromBufferAttribute(e,l),Jt.add(Ns)),s=Math.max(s,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new K,c[T]=new K;const l=new K,h=new K,u=new K,A=new Ve,f=new Ve,m=new Ve,I=new K,g=new K;function p(T,F,_){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,F),u.fromBufferAttribute(n,_),A.fromBufferAttribute(r,T),f.fromBufferAttribute(r,F),m.fromBufferAttribute(r,_),h.sub(l),u.sub(l),f.sub(A),m.sub(A);const v=1/(f.x*m.y-m.x*f.y);isFinite(v)&&(I.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(v),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(v),a[T].add(I),a[F].add(I),a[_].add(I),c[T].add(g),c[F].add(g),c[_].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,F=C.length;T<F;++T){const _=C[T],v=_.start,U=_.count;for(let H=v,z=v+U;H<z;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new K,w=new K,P=new K,N=new K;function D(T){P.fromBufferAttribute(s,T),N.copy(P);const F=a[T];x.copy(F),x.sub(P.multiplyScalar(P.dot(F))).normalize(),w.crossVectors(N,F);const v=w.dot(c[T])<0?-1:1;o.setXYZW(T,x.x,x.y,x.z,v)}for(let T=0,F=C.length;T<F;++T){const _=C[T],v=_.start,U=_.count;for(let H=v,z=v+U;H<z;H+=3)D(e.getX(H+0)),D(e.getX(H+1)),D(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let A=0,f=n.count;A<f;A++)n.setXYZ(A,0,0,0);const s=new K,r=new K,o=new K,a=new K,c=new K,l=new K,h=new K,u=new K;if(e)for(let A=0,f=e.count;A<f;A+=3){const m=e.getX(A+0),I=e.getX(A+1),g=e.getX(A+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,I),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,I),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(I,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let A=0,f=t.count;A<f;A+=3)s.fromBufferAttribute(t,A+0),r.fromBufferAttribute(t,A+1),o.fromBufferAttribute(t,A+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(A+0,h.x,h.y,h.z),n.setXYZ(A+1,h.x,h.y,h.z),n.setXYZ(A+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,A=new l.constructor(c.length*h);let f=0,m=0;for(let I=0,g=c.length;I<g;I++){a.isInterleavedBufferAttribute?f=c[I]*a.data.stride+a.offset:f=c[I]*h;for(let p=0;p<h;p++)A[m++]=l[f++]}return new Yt(A,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const A=l[h],f=e(A,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,A=l.length;u<A;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let A=0,f=u.length;A<f;A++)h.push(u[A].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _h=new nt,ns=new ar,io=new li,Ch=new K,so=new K,ro=new K,oo=new K,Qa=new K,ao=new K,yh=new K,co=new K;class Gt extends Ut{constructor(e=new nn,t=new Vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ao.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Qa.fromBufferAttribute(u,e),o?ao.addScaledVector(Qa,h):ao.addScaledVector(Qa.sub(t),h))}t.add(ao)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(io.containsPoint(ns.origin)===!1&&(ns.intersectSphere(io,Ch)===null||ns.origin.distanceToSquared(Ch)>(e.far-e.near)**2))&&(_h.copy(r).invert(),ns.copy(e.ray).applyMatrix4(_h),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,A=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,I=A.length;m<I;m++){const g=A[m],p=o[g.materialIndex],C=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let w=C,P=x;w<P;w+=3){const N=a.getX(w),D=a.getX(w+1),T=a.getX(w+2);s=lo(this,p,e,n,l,h,u,N,D,T),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),I=Math.min(a.count,f.start+f.count);for(let g=m,p=I;g<p;g+=3){const C=a.getX(g),x=a.getX(g+1),w=a.getX(g+2);s=lo(this,o,e,n,l,h,u,C,x,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,I=A.length;m<I;m++){const g=A[m],p=o[g.materialIndex],C=Math.max(g.start,f.start),x=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let w=C,P=x;w<P;w+=3){const N=w,D=w+1,T=w+2;s=lo(this,p,e,n,l,h,u,N,D,T),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),I=Math.min(c.count,f.start+f.count);for(let g=m,p=I;g<p;g+=3){const C=g,x=g+1,w=g+2;s=lo(this,o,e,n,l,h,u,C,x,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Sp(i,e,t,n,s,r,o,a){let c;if(e.side===$t?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===oi,a),c===null)return null;co.copy(a),co.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(co);return l<t.near||l>t.far?null:{distance:l,point:co.clone(),object:i}}function lo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,so),i.getVertexPosition(c,ro),i.getVertexPosition(l,oo);const h=Sp(i,e,t,n,so,ro,oo,yh);if(h){const u=new K;Yn.getBarycoord(yh,so,ro,oo,u),s&&(h.uv=Yn.getInterpolatedAttribute(s,a,c,l,u,new Ve)),r&&(h.uv1=Yn.getInterpolatedAttribute(r,a,c,l,u,new Ve)),o&&(h.normal=Yn.getInterpolatedAttribute(o,a,c,l,u,new K),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const A={a,b:c,c:l,normal:new K,materialIndex:0};Yn.getNormal(so,ro,oo,A.normal),h.face=A,h.barycoord=u}return h}class fs extends nn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let A=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(u,2));function m(I,g,p,C,x,w,P,N,D,T,F){const _=w/D,v=P/T,U=w/2,H=P/2,z=N/2,$=D+1,Y=T+1;let re=0,te=0;const ye=new K;for(let _e=0;_e<Y;_e++){const Le=_e*v-H;for(let Oe=0;Oe<$;Oe++){const we=Oe*_-U;ye[I]=we*C,ye[g]=Le*x,ye[p]=z,l.push(ye.x,ye.y,ye.z),ye[I]=0,ye[g]=0,ye[p]=N>0?1:-1,h.push(ye.x,ye.y,ye.z),u.push(Oe/D),u.push(1-_e/T),re+=1}}for(let _e=0;_e<T;_e++)for(let Le=0;Le<D;Le++){const Oe=A+Le+$*_e,we=A+Le+$*(_e+1),se=A+(Le+1)+$*(_e+1),he=A+(Le+1)+$*_e;c.push(Oe,we,he),c.push(we,se,he),te+=6}a.addGroup(f,te,F),f+=te,A+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function er(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function An(i){const e={};for(let t=0;t<i.length;t++){const n=er(i[t]);for(const s in n)e[s]=n[s]}return e}function Bp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function PA(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const Mp={clone:er,merge:An};var wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wp,this.fragmentShader=bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=Bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _l extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new K,vh=new Ve,xh=new Ve;class an extends _l{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,vh,xh),t.subVectors(xh,vh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ps=-90,Us=1;class Tp extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(Ps,Us,e,t);s.layers=this.layers,this.add(s);const r=new an(Ps,Us,e,t);r.layers=this.layers,this.add(r);const o=new an(Ps,Us,e,t);o.layers=this.layers,this.add(o);const a=new an(Ps,Us,e,t);a.layers=this.layers,this.add(a);const c=new an(Ps,Us,e,t);c.layers=this.layers,this.add(c);const l=new an(Ps,Us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),A=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const I=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=I,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,A,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class na extends zt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Js,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rp extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new na(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fs(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:ii});r.uniforms.tEquirect.value=t;const o=new Gt(s,r),a=t.minFilter;return t.minFilter===ni&&(t.minFilter=bt),new Tp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const La=new K,Dp=new K,Qp=new at;class zi{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=La.subVectors(n,t).cross(Dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(La),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qp.getNormalMatrix(e),s=this.coplanarPoint(La).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new li,ho=new K;class Cl{constructor(e=new zi,t=new zi,n=new zi,s=new zi,r=new zi,o=new zi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Si){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],A=s[7],f=s[8],m=s[9],I=s[10],g=s[11],p=s[12],C=s[13],x=s[14],w=s[15];if(n[0].setComponents(c-r,A-l,g-f,w-p).normalize(),n[1].setComponents(c+r,A+l,g+f,w+p).normalize(),n[2].setComponents(c+o,A+h,g+m,w+C).normalize(),n[3].setComponents(c-o,A-h,g-m,w-C).normalize(),n[4].setComponents(c-a,A-u,g-I,w-x).normalize(),t===Si)n[5].setComponents(c+a,A+u,g+I,w+x).normalize();else if(t===ko)n[5].setComponents(a,u,I,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ho.x=s.normal.x>0?e.max.x:e.min.x,ho.y=s.normal.y>0?e.max.y:e.min.y,ho.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function UA(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Lp(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,A=i.createBuffer();i.bindBuffer(c,A),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:A,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let A=0;for(let f=1;f<u.length;f++){const m=u[A],I=u[f];I.start<=m.start+m.count+1?m.count=Math.max(m.count,I.start+I.count-m.start):(++A,u[A]=I)}u.length=A+1;for(let f=0,m=u.length;f<m;f++){const I=u[f];i.bufferSubData(l,I.start*h.BYTES_PER_ELEMENT,h,I.start,I.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class tr extends nn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,A=t/c,f=[],m=[],I=[],g=[];for(let p=0;p<h;p++){const C=p*A-o;for(let x=0;x<l;x++){const w=x*u-r;m.push(w,-C,0),I.push(0,0,1),g.push(x/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let C=0;C<a;C++){const x=C+l*p,w=C+l*(p+1),P=C+1+l*(p+1),N=C+1+l*p;f.push(x,w,N),f.push(w,P,N)}this.setIndex(f),this.setAttribute("position",new en(m,3)),this.setAttribute("normal",new en(I,3)),this.setAttribute("uv",new en(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pp=`#ifdef USE_ALPHAHASH
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
#endif`,Up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Op=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hp=`#ifdef USE_AOMAP
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
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp=`#ifdef USE_BATCHING
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
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kp=`#ifdef USE_IRIDESCENCE
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
#endif`,qp=`#ifdef USE_BUMPMAP
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
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sg=`#define PI 3.141592653589793
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
} // validated`,rg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,og=`vec3 transformedNormal = objectNormal;
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
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ug="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`
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
}`,dg=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yg=`#ifdef USE_GRADIENTMAP
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
}`,vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bg=`uniform bool receiveShadow;
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
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dg=`PhysicalMaterial material;
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
#endif`,Qg=`struct PhysicalMaterial {
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
}`,Lg=`
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
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ug=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vg=`#if defined( USE_POINTS_UV )
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
#endif`,Yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`#ifdef USE_MORPHTARGETS
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
#endif`,jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,im=`#ifdef USE_NORMALMAP
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
#endif`,sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Im=`float getShadowMask() {
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
}`,_m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,bm=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nm=`uniform sampler2D t2D;
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`#include <common>
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
}`,Hm=`#if DEPTH_PACKING == 3200
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
}`,km=`#define DISTANCE
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
}`,zm=`#define DISTANCE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,qm=`uniform vec3 diffuse;
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
}`,Jm=`#define LAMBERT
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
}`,jm=`#define LAMBERT
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
}`,$m=`#define MATCAP
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
}`,Zm=`#define MATCAP
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
}`,eE=`#define NORMAL
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
}`,tE=`#define NORMAL
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
}`,nE=`#define PHONG
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
}`,iE=`#define PHONG
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
}`,sE=`#define STANDARD
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
}`,rE=`#define STANDARD
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
}`,oE=`#define TOON
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
}`,aE=`#define TOON
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
}`,cE=`uniform float size;
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
}`,lE=`uniform vec3 diffuse;
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
}`,hE=`#include <common>
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
}`,uE=`uniform vec3 color;
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
}`,AE=`uniform float rotation;
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
}`,dE=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:Np,alphahash_pars_fragment:Pp,alphamap_fragment:Up,alphamap_pars_fragment:Fp,alphatest_fragment:Op,alphatest_pars_fragment:Gp,aomap_fragment:Hp,aomap_pars_fragment:kp,batching_pars_vertex:zp,batching_vertex:Vp,begin_vertex:Yp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:Kp,bumpmap_pars_fragment:qp,clipping_planes_fragment:Jp,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:Zp,color_fragment:eg,color_pars_fragment:tg,color_pars_vertex:ng,color_vertex:ig,common:sg,cube_uv_reflection_fragment:rg,defaultnormal_vertex:og,displacementmap_pars_vertex:ag,displacementmap_vertex:cg,emissivemap_fragment:lg,emissivemap_pars_fragment:hg,colorspace_fragment:ug,colorspace_pars_fragment:Ag,envmap_fragment:dg,envmap_common_pars_fragment:fg,envmap_pars_fragment:pg,envmap_pars_vertex:gg,envmap_physical_pars_fragment:Mg,envmap_vertex:mg,fog_vertex:Eg,fog_pars_vertex:Ig,fog_fragment:_g,fog_pars_fragment:Cg,gradientmap_pars_fragment:yg,lightmap_pars_fragment:vg,lights_lambert_fragment:xg,lights_lambert_pars_fragment:Sg,lights_pars_begin:Bg,lights_toon_fragment:wg,lights_toon_pars_fragment:bg,lights_phong_fragment:Tg,lights_phong_pars_fragment:Rg,lights_physical_fragment:Dg,lights_physical_pars_fragment:Qg,lights_fragment_begin:Lg,lights_fragment_maps:Ng,lights_fragment_end:Pg,logdepthbuf_fragment:Ug,logdepthbuf_pars_fragment:Fg,logdepthbuf_pars_vertex:Og,logdepthbuf_vertex:Gg,map_fragment:Hg,map_pars_fragment:kg,map_particle_fragment:zg,map_particle_pars_fragment:Vg,metalnessmap_fragment:Yg,metalnessmap_pars_fragment:Wg,morphinstance_vertex:Xg,morphcolor_vertex:Kg,morphnormal_vertex:qg,morphtarget_pars_vertex:Jg,morphtarget_vertex:jg,normal_fragment_begin:$g,normal_fragment_maps:Zg,normal_pars_fragment:em,normal_pars_vertex:tm,normal_vertex:nm,normalmap_pars_fragment:im,clearcoat_normal_fragment_begin:sm,clearcoat_normal_fragment_maps:rm,clearcoat_pars_fragment:om,iridescence_pars_fragment:am,opaque_fragment:cm,packing:lm,premultiplied_alpha_fragment:hm,project_vertex:um,dithering_fragment:Am,dithering_pars_fragment:dm,roughnessmap_fragment:fm,roughnessmap_pars_fragment:pm,shadowmap_pars_fragment:gm,shadowmap_pars_vertex:mm,shadowmap_vertex:Em,shadowmask_pars_fragment:Im,skinbase_vertex:_m,skinning_pars_vertex:Cm,skinning_vertex:ym,skinnormal_vertex:vm,specularmap_fragment:xm,specularmap_pars_fragment:Sm,tonemapping_fragment:Bm,tonemapping_pars_fragment:Mm,transmission_fragment:wm,transmission_pars_fragment:bm,uv_pars_fragment:Tm,uv_pars_vertex:Rm,uv_vertex:Dm,worldpos_vertex:Qm,background_vert:Lm,background_frag:Nm,backgroundCube_vert:Pm,backgroundCube_frag:Um,cube_vert:Fm,cube_frag:Om,depth_vert:Gm,depth_frag:Hm,distanceRGBA_vert:km,distanceRGBA_frag:zm,equirect_vert:Vm,equirect_frag:Ym,linedashed_vert:Wm,linedashed_frag:Xm,meshbasic_vert:Km,meshbasic_frag:qm,meshlambert_vert:Jm,meshlambert_frag:jm,meshmatcap_vert:$m,meshmatcap_frag:Zm,meshnormal_vert:eE,meshnormal_frag:tE,meshphong_vert:nE,meshphong_frag:iE,meshphysical_vert:sE,meshphysical_frag:rE,meshtoon_vert:oE,meshtoon_frag:aE,points_vert:cE,points_frag:lE,shadow_vert:hE,shadow_frag:uE,sprite_vert:AE,sprite_frag:dE},Te={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},ei={basic:{uniforms:An([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:An([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new je(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:An([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:An([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:An([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new je(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:An([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:An([Te.points,Te.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:An([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:An([Te.common,Te.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:An([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:An([Te.sprite,Te.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:An([Te.common,Te.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:An([Te.lights,Te.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ei.physical={uniforms:An([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const uo={r:0,b:0,g:0},ss=new ci,fE=new nt;function pE(i,e,t,n,s,r,o){const a=new je(0);let c=r===!0?0:1,l,h,u=null,A=0,f=null;function m(C){let x=C.isScene===!0?C.background:null;return x&&x.isTexture&&(x=(C.backgroundBlurriness>0?t:e).get(x)),x}function I(C){let x=!1;const w=m(C);w===null?p(a,c):w&&w.isColor&&(p(w,1),x=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(C,x){const w=m(x);w&&(w.isCubeTexture||w.mapping===Zo)?(h===void 0&&(h=new Gt(new fs(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:er(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,N,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ss.copy(x.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fE.makeRotationFromEuler(ss)),h.material.toneMapped=It.getTransfer(w.colorSpace)!==Dt,(u!==w||A!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,A=w.version,f=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Gt(new tr(2,2),new Kn({name:"BackgroundMaterial",uniforms:er(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=It.getTransfer(w.colorSpace)!==Dt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||A!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,A=w.version,f=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function p(C,x){C.getRGB(uo,PA(i)),n.buffers.color.setClear(uo.r,uo.g,uo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(C,x=1){a.set(C),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,p(a,c)},render:I,addToRenderList:g}}function gE(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=A(null);let r=s,o=!1;function a(_,v,U,H,z){let $=!1;const Y=u(H,U,v);r!==Y&&(r=Y,l(r.object)),$=f(_,H,U,z),$&&m(_,H,U,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,w(_,v,U,H),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,v,U){const H=U.wireframe===!0;let z=n[_.id];z===void 0&&(z={},n[_.id]=z);let $=z[v.id];$===void 0&&($={},z[v.id]=$);let Y=$[H];return Y===void 0&&(Y=A(c()),$[H]=Y),Y}function A(_){const v=[],U=[],H=[];for(let z=0;z<t;z++)v[z]=0,U[z]=0,H[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:U,attributeDivisors:H,object:_,attributes:{},index:null}}function f(_,v,U,H){const z=r.attributes,$=v.attributes;let Y=0;const re=U.getAttributes();for(const te in re)if(re[te].location>=0){const _e=z[te];let Le=$[te];if(Le===void 0&&(te==="instanceMatrix"&&_.instanceMatrix&&(Le=_.instanceMatrix),te==="instanceColor"&&_.instanceColor&&(Le=_.instanceColor)),_e===void 0||_e.attribute!==Le||Le&&_e.data!==Le.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}function m(_,v,U,H){const z={},$=v.attributes;let Y=0;const re=U.getAttributes();for(const te in re)if(re[te].location>=0){let _e=$[te];_e===void 0&&(te==="instanceMatrix"&&_.instanceMatrix&&(_e=_.instanceMatrix),te==="instanceColor"&&_.instanceColor&&(_e=_.instanceColor));const Le={};Le.attribute=_e,_e&&_e.data&&(Le.data=_e.data),z[te]=Le,Y++}r.attributes=z,r.attributesNum=Y,r.index=H}function I(){const _=r.newAttributes;for(let v=0,U=_.length;v<U;v++)_[v]=0}function g(_){p(_,0)}function p(_,v){const U=r.newAttributes,H=r.enabledAttributes,z=r.attributeDivisors;U[_]=1,H[_]===0&&(i.enableVertexAttribArray(_),H[_]=1),z[_]!==v&&(i.vertexAttribDivisor(_,v),z[_]=v)}function C(){const _=r.newAttributes,v=r.enabledAttributes;for(let U=0,H=v.length;U<H;U++)v[U]!==_[U]&&(i.disableVertexAttribArray(U),v[U]=0)}function x(_,v,U,H,z,$,Y){Y===!0?i.vertexAttribIPointer(_,v,U,z,$):i.vertexAttribPointer(_,v,U,H,z,$)}function w(_,v,U,H){I();const z=H.attributes,$=U.getAttributes(),Y=v.defaultAttributeValues;for(const re in $){const te=$[re];if(te.location>=0){let ye=z[re];if(ye===void 0&&(re==="instanceMatrix"&&_.instanceMatrix&&(ye=_.instanceMatrix),re==="instanceColor"&&_.instanceColor&&(ye=_.instanceColor)),ye!==void 0){const _e=ye.normalized,Le=ye.itemSize,Oe=e.get(ye);if(Oe===void 0)continue;const we=Oe.buffer,se=Oe.type,he=Oe.bytesPerElement,me=se===i.INT||se===i.UNSIGNED_INT||ye.gpuType===ul;if(ye.isInterleavedBufferAttribute){const xe=ye.data,Ye=xe.stride,Xe=ye.offset;if(xe.isInstancedInterleavedBuffer){for(let ct=0;ct<te.locationSize;ct++)p(te.location+ct,xe.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ct=0;ct<te.locationSize;ct++)g(te.location+ct);i.bindBuffer(i.ARRAY_BUFFER,we);for(let ct=0;ct<te.locationSize;ct++)x(te.location+ct,Le/te.locationSize,se,_e,Ye*he,(Xe+Le/te.locationSize*ct)*he,me)}else{if(ye.isInstancedBufferAttribute){for(let xe=0;xe<te.locationSize;xe++)p(te.location+xe,ye.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let xe=0;xe<te.locationSize;xe++)g(te.location+xe);i.bindBuffer(i.ARRAY_BUFFER,we);for(let xe=0;xe<te.locationSize;xe++)x(te.location+xe,Le/te.locationSize,se,_e,Le*he,Le/te.locationSize*xe*he,me)}}else if(Y!==void 0){const _e=Y[re];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(te.location,_e);break;case 3:i.vertexAttrib3fv(te.location,_e);break;case 4:i.vertexAttrib4fv(te.location,_e);break;default:i.vertexAttrib1fv(te.location,_e)}}}}C()}function P(){T();for(const _ in n){const v=n[_];for(const U in v){const H=v[U];for(const z in H)h(H[z].object),delete H[z];delete v[U]}delete n[_]}}function N(_){if(n[_.id]===void 0)return;const v=n[_.id];for(const U in v){const H=v[U];for(const z in H)h(H[z].object),delete H[z];delete v[U]}delete n[_.id]}function D(_){for(const v in n){const U=n[v];if(U[_.id]===void 0)continue;const H=U[_.id];for(const z in H)h(H[z].object),delete H[z];delete U[_.id]}}function T(){F(),o=!0,r!==s&&(r=s,l(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:F,dispose:P,releaseStatesOfGeometry:N,releaseStatesOfProgram:D,initAttributes:I,enableAttribute:g,disableUnusedAttributes:C}}function mE(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function c(l,h,u,A){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],A[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,A,0,u);let m=0;for(let I=0;I<u;I++)m+=h[I];for(let I=0;I<A.length;I++)t.update(m,n,A[I])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function EE(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Bn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const T=D===ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==hn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Zt&&!T)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,A=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(A===!0){const D=e.get("EXT_clip_control");D.clipControlEXT(D.LOWER_LEFT_EXT,D.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:A,maxTextures:f,maxVertexTextures:m,maxTextureSize:I,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:C,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:P,maxSamples:N}}function IE(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new zi,a=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,A){const f=u.length!==0||A||n!==0||s;return s=A,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,A){t=h(u,A,0)},this.setState=function(u,A,f){const m=u.clippingPlanes,I=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const C=r?0:n,x=C*4;let w=p.clippingState||null;c.value=w,w=h(m,A,x,f);for(let P=0;P!==x;++P)w[P]=t[P];p.clippingState=w,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,A,f,m){const I=u!==null?u.length:0;let g=null;if(I!==0){if(g=c.value,m!==!0||g===null){const p=f+I*4,C=A.matrixWorldInverse;a.getNormalMatrix(C),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,w=f;x!==I;++x,w+=4)o.copy(u[x]).applyMatrix4(C,a),o.normal.toArray(g,w),g[w+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=I,e.numIntersection=0,g}}function _E(i){let e=new WeakMap;function t(o,a){return a===Uo?o.mapping=Js:a===Cc&&(o.mapping=js),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uo||a===Cc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Rp(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ia extends _l{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ks=4,Sh=[.125,.215,.35,.446,.526,.582],ls=20,Na=new ia,Bh=new je;let Pa=null,Ua=0,Fa=0,Oa=!1;const as=(1+Math.sqrt(5))/2,Fs=1/as,Mh=[new K(-as,Fs,0),new K(as,Fs,0),new K(-Fs,0,as),new K(Fs,0,as),new K(0,as,-Fs),new K(0,as,Fs),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class zo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Pa=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa,Ua,Fa),this._renderer.xr.enabled=Oa,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:ln,format:Bn,colorSpace:Nt,depthBuffer:!1},s=wh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CE(r)),this._blurMaterial=yE(r,e,t)}return s}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,Na)}_sceneToCubeUV(e,t,n,s){const a=new an(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,A=h.toneMapping;h.getClearColor(Bh),h.toneMapping=Xi,h.autoClear=!1;const f=new Vi({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),m=new Gt(new fs,f);let I=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,I=!0):(f.color.copy(Bh),I=!0);for(let p=0;p<6;p++){const C=p%3;C===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):C===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Ao(s,C*x,p>2?x:0,x,x),h.setRenderTarget(s),I&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=A,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Js||e.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Ao(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Na)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Mh[(s-r-1)%Mh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Gt(this._lodPlanes[s],l),A=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ls-1),I=r/m,g=isFinite(r)?1+Math.floor(h*I):ls;g>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ls}`);const p=[];let C=0;for(let D=0;D<ls;++D){const T=D/I,F=Math.exp(-T*T/2);p.push(F),D===0?C+=F:D<g&&(C+=2*F)}for(let D=0;D<p.length;D++)p[D]=p[D]/C;A.envMap.value=e.texture,A.samples.value=g,A.weights.value=p,A.latitudinal.value=o==="latitudinal",a&&(A.poleAxis.value=a);const{_lodMax:x}=this;A.dTheta.value=m,A.mipInt.value=x-n;const w=this._sizeLods[s],P=3*w*(s>x-ks?s-x+ks:0),N=4*(this._cubeSize-w);Ao(t,P,N,3*w,2*w),c.setRenderTarget(t),c.render(u,Na)}}function CE(i){const e=[],t=[],n=[];let s=i;const r=i-ks+1+Sh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ks?c=Sh[o-i+ks-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,A=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,I=3,g=2,p=1,C=new Float32Array(I*m*f),x=new Float32Array(g*m*f),w=new Float32Array(p*m*f);for(let N=0;N<f;N++){const D=N%3*2/3-1,T=N>2?0:-1,F=[D,T,0,D+2/3,T,0,D+2/3,T+1,0,D,T,0,D+2/3,T+1,0,D,T+1,0];C.set(F,I*m*N),x.set(A,g*m*N);const _=[N,N,N,N,N,N];w.set(_,p*m*N)}const P=new nn;P.setAttribute("position",new Yt(C,I)),P.setAttribute("uv",new Yt(x,g)),P.setAttribute("faceIndex",new Yt(w,p)),e.push(P),s>ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wh(i,e,t){const n=new Xn(i,e,t);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ao(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function yE(i,e,t){const n=new Float32Array(ls),s=new K(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function bh(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Th(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function yl(){return`

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
	`}function vE(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Uo||c===Cc,h=c===Js||c===js;if(l||h){let u=e.get(a);const A=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==A)return t===null&&(t=new zo(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new zo(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xE(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Lo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function SE(i,e,t,n){const s={},r=new WeakMap;function o(u){const A=u.target;A.index!==null&&e.remove(A.index);for(const m in A.attributes)e.remove(A.attributes[m]);for(const m in A.morphAttributes){const I=A.morphAttributes[m];for(let g=0,p=I.length;g<p;g++)e.remove(I[g])}A.removeEventListener("dispose",o),delete s[A.id];const f=r.get(A);f&&(e.remove(f),r.delete(A)),n.releaseStatesOfGeometry(A),A.isInstancedBufferGeometry===!0&&delete A._maxInstanceCount,t.memory.geometries--}function a(u,A){return s[A.id]===!0||(A.addEventListener("dispose",o),s[A.id]=!0,t.memory.geometries++),A}function c(u){const A=u.attributes;for(const m in A)e.update(A[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const I=f[m];for(let g=0,p=I.length;g<p;g++)e.update(I[g],i.ARRAY_BUFFER)}}function l(u){const A=[],f=u.index,m=u.attributes.position;let I=0;if(f!==null){const C=f.array;I=f.version;for(let x=0,w=C.length;x<w;x+=3){const P=C[x+0],N=C[x+1],D=C[x+2];A.push(P,N,N,D,D,P)}}else if(m!==void 0){const C=m.array;I=m.version;for(let x=0,w=C.length/3-1;x<w;x+=3){const P=x+0,N=x+1,D=x+2;A.push(P,N,N,D,D,P)}}else return;const g=new(TA(A)?NA:LA)(A,1);g.version=I;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const A=r.get(u);if(A){const f=u.index;f!==null&&A.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function BE(i,e,t){let n;function s(A){n=A}let r,o;function a(A){r=A.type,o=A.bytesPerElement}function c(A,f){i.drawElements(n,f,r,A*o),t.update(f,n,1)}function l(A,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,A*o,m),t.update(f,n,m))}function h(A,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,A,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(A,f,m,I){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<A.length;p++)l(A[p]/o,f[p],I[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,A,0,I,0,m);let p=0;for(let C=0;C<m;C++)p+=f[C];for(let C=0;C<I.length;C++)t.update(p,n,I[C])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ME(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function wE(i,e,t){const n=new WeakMap,s=new vt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let A=n.get(a);if(A===void 0||A.count!==u){let F=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",F)};A!==void 0&&A.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,I=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),m===!0&&(x=2),I===!0&&(x=3);let w=a.attributes.position.count*x,P=1;w>e.maxTextureSize&&(P=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const N=new Float32Array(w*P*4*u),D=new DA(N,w,P,u);D.type=Zt,D.needsUpdate=!0;const T=x*4;for(let _=0;_<u;_++){const v=g[_],U=p[_],H=C[_],z=w*P*4*_;for(let $=0;$<v.count;$++){const Y=$*T;f===!0&&(s.fromBufferAttribute(v,$),N[z+Y+0]=s.x,N[z+Y+1]=s.y,N[z+Y+2]=s.z,N[z+Y+3]=0),m===!0&&(s.fromBufferAttribute(U,$),N[z+Y+4]=s.x,N[z+Y+5]=s.y,N[z+Y+6]=s.z,N[z+Y+7]=0),I===!0&&(s.fromBufferAttribute(H,$),N[z+Y+8]=s.x,N[z+Y+9]=s.y,N[z+Y+10]=s.z,N[z+Y+11]=H.itemSize===4?s.w:1)}}A={count:u,texture:D,size:new Ve(w,P)},n.set(a,A),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let I=0;I<l.length;I++)f+=l[I];const m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",A.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",A.size)}return{update:r}}function bE(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const A=c.skeleton;s.get(A)!==l&&(A.update(),s.set(A,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class vl extends zt{constructor(e,t,n,s,r,o,a,c,l,h=Ws){if(h!==Ws&&h!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ws&&(n=Ki),n===void 0&&h===ds&&(n=As),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=c!==void 0?c:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const FA=new zt,Rh=new vl(1,1),OA=new DA,GA=new Ap,HA=new na,Dh=[],Qh=[],Lh=new Float32Array(16),Nh=new Float32Array(9),Ph=new Float32Array(4);function cr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Dh[s];if(r===void 0&&(r=new Float32Array(s),Dh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sa(i,e){let t=Qh[e];t===void 0&&(t=new Int32Array(e),Qh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function TE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function RE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function DE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function QE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function LE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Ph.set(n),i.uniformMatrix2fv(this.addr,!1,Ph),Xt(t,n)}}function NE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Nh.set(n),i.uniformMatrix3fv(this.addr,!1,Nh),Xt(t,n)}}function PE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Lh.set(n),i.uniformMatrix4fv(this.addr,!1,Lh),Xt(t,n)}}function UE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function FE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function OE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function GE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function HE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function zE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function VE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function YE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Rh.compareFunction=wA,r=Rh):r=FA,t.setTexture2D(e||r,s)}function WE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||GA,s)}function XE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||HA,s)}function KE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||OA,s)}function qE(i){switch(i){case 5126:return TE;case 35664:return RE;case 35665:return DE;case 35666:return QE;case 35674:return LE;case 35675:return NE;case 35676:return PE;case 5124:case 35670:return UE;case 35667:case 35671:return FE;case 35668:case 35672:return OE;case 35669:case 35673:return GE;case 5125:return HE;case 36294:return kE;case 36295:return zE;case 36296:return VE;case 35678:case 36198:case 36298:case 36306:case 35682:return YE;case 35679:case 36299:case 36307:return WE;case 35680:case 36300:case 36308:case 36293:return XE;case 36289:case 36303:case 36311:case 36292:return KE}}function JE(i,e){i.uniform1fv(this.addr,e)}function jE(i,e){const t=cr(e,this.size,2);i.uniform2fv(this.addr,t)}function $E(i,e){const t=cr(e,this.size,3);i.uniform3fv(this.addr,t)}function ZE(i,e){const t=cr(e,this.size,4);i.uniform4fv(this.addr,t)}function eI(i,e){const t=cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tI(i,e){const t=cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nI(i,e){const t=cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function iI(i,e){i.uniform1iv(this.addr,e)}function sI(i,e){i.uniform2iv(this.addr,e)}function rI(i,e){i.uniform3iv(this.addr,e)}function oI(i,e){i.uniform4iv(this.addr,e)}function aI(i,e){i.uniform1uiv(this.addr,e)}function cI(i,e){i.uniform2uiv(this.addr,e)}function lI(i,e){i.uniform3uiv(this.addr,e)}function hI(i,e){i.uniform4uiv(this.addr,e)}function uI(i,e,t){const n=this.cache,s=e.length,r=sa(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||FA,r[o])}function AI(i,e,t){const n=this.cache,s=e.length,r=sa(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||GA,r[o])}function dI(i,e,t){const n=this.cache,s=e.length,r=sa(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||HA,r[o])}function fI(i,e,t){const n=this.cache,s=e.length,r=sa(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||OA,r[o])}function pI(i){switch(i){case 5126:return JE;case 35664:return jE;case 35665:return $E;case 35666:return ZE;case 35674:return eI;case 35675:return tI;case 35676:return nI;case 5124:case 35670:return iI;case 35667:case 35671:return sI;case 35668:case 35672:return rI;case 35669:case 35673:return oI;case 5125:return aI;case 36294:return cI;case 36295:return lI;case 36296:return hI;case 35678:case 36198:case 36298:case 36306:case 35682:return uI;case 35679:case 36299:case 36307:return AI;case 35680:case 36300:case 36308:case 36293:return dI;case 36289:case 36303:case 36311:case 36292:return fI}}class gI{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qE(t.type)}}class mI{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pI(t.type)}}class EI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Uh(i,e){i.seq.push(e),i.map[e.id]=e}function II(i,e,t){const n=i.name,s=n.length;for(Ga.lastIndex=0;;){const r=Ga.exec(n),o=Ga.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Uh(t,l===void 0?new gI(a,i,e):new mI(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new EI(a),Uh(t,u)),t=u}}}class No{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);II(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Fh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const _I=37297;let CI=0;function yI(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function vI(i){const e=It.getPrimaries(It.workingColorSpace),t=It.getPrimaries(i);let n;switch(e===t?n="":e===Ho&&t===Go?n="LinearDisplayP3ToLinearSRGB":e===Go&&t===Ho&&(n="LinearSRGBToLinearDisplayP3"),i){case Nt:case ta:return[n,"LinearTransferOETF"];case Et:case ml:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Oh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+yI(i.getShaderSource(e),o)}else return s}function xI(i,e){const t=vI(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function SI(i,e){let t;switch(e){case yf:t="Linear";break;case vf:t="Reinhard";break;case xf:t="Cineon";break;case Sf:t="ACESFilmic";break;case Mf:t="AgX";break;case wf:t="Neutral";break;case Bf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fo=new K;function BI(){It.getLuminanceCoefficients(fo);const i=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MI(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function wI(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bI(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function br(i){return i!==""}function Gh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TI=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(i){return i.replace(TI,DI)}const RI=new Map;function DI(i,e){let t=ot[e];if(t===void 0){const n=RI.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jc(t)}const QI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(i){return i.replace(QI,LI)}function LI(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function NI(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dA?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ef?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function PI(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Js:case js:e="ENVMAP_TYPE_CUBE";break;case Zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UI(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function FI(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fA:e="ENVMAP_BLENDING_MULTIPLY";break;case _f:e="ENVMAP_BLENDING_MIX";break;case Cf:e="ENVMAP_BLENDING_ADD";break}return e}function OI(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function GI(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=NI(t),l=PI(t),h=UI(t),u=FI(t),A=OI(t),f=MI(t),m=wI(r),I=s.createProgram();let g,p,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(br).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(br).join(`
`),p.length>0&&(p+=`
`)):(g=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),p=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",A?"#define CUBEUV_TEXEL_WIDTH "+A.texelWidth:"",A?"#define CUBEUV_TEXEL_HEIGHT "+A.texelHeight:"",A?"#define CUBEUV_MAX_MIP "+A.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?ot.tonemapping_pars_fragment:"",t.toneMapping!==Xi?SI("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,xI("linearToOutputTexel",t.outputColorSpace),BI(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),o=Jc(o),o=Gh(o,t),o=Hh(o,t),a=Jc(a),a=Gh(a,t),a=Hh(a,t),o=kh(o),a=kh(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=C+g+o,w=C+p+a,P=Fh(s,s.VERTEX_SHADER,x),N=Fh(s,s.FRAGMENT_SHADER,w);s.attachShader(I,P),s.attachShader(I,N),t.index0AttributeName!==void 0?s.bindAttribLocation(I,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(I,0,"position"),s.linkProgram(I);function D(v){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(I).trim(),H=s.getShaderInfoLog(P).trim(),z=s.getShaderInfoLog(N).trim();let $=!0,Y=!0;if(s.getProgramParameter(I,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,I,P,N);else{const re=Oh(s,P,"vertex"),te=Oh(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(I,s.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+U+`
`+re+`
`+te)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(H===""||z==="")&&(Y=!1);Y&&(v.diagnostics={runnable:$,programLog:U,vertexShader:{log:H,prefix:g},fragmentShader:{log:z,prefix:p}})}s.deleteShader(P),s.deleteShader(N),T=new No(s,I),F=bI(s,I)}let T;this.getUniforms=function(){return T===void 0&&D(this),T};let F;this.getAttributes=function(){return F===void 0&&D(this),F};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(I,_I)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(I),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CI++,this.cacheKey=e,this.usedTimes=1,this.program=I,this.vertexShader=P,this.fragmentShader=N,this}let HI=0;class kI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zI(e),t.set(e,n)),n}}class zI{constructor(e){this.id=HI++,this.code=e,this.usedTimes=0}}function VI(i,e,t,n,s,r,o){const a=new Il,c=new kI,l=new Set,h=[],u=s.logarithmicDepthBuffer,A=s.reverseDepthBuffer,f=s.vertexTextures;let m=s.precision;const I={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,v,U,H,z){const $=H.fog,Y=z.geometry,re=_.isMeshStandardMaterial?H.environment:null,te=(_.isMeshStandardMaterial?t:e).get(_.envMap||re),ye=te&&te.mapping===Zo?te.image.height:null,_e=I[_.type];_.precision!==null&&(m=s.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const Le=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Oe=Le!==void 0?Le.length:0;let we=0;Y.morphAttributes.position!==void 0&&(we=1),Y.morphAttributes.normal!==void 0&&(we=2),Y.morphAttributes.color!==void 0&&(we=3);let se,he,me,xe;if(_e){const qt=ei[_e];se=qt.vertexShader,he=qt.fragmentShader}else se=_.vertexShader,he=_.fragmentShader,c.update(_),me=c.getVertexShaderID(_),xe=c.getFragmentShaderID(_);const Ye=i.getRenderTarget(),Xe=z.isInstancedMesh===!0,ct=z.isBatchedMesh===!0,gt=!!_.map,$e=!!_.matcap,k=!!te,Kt=!!_.aoMap,lt=!!_.lightMap,st=!!_.bumpMap,qe=!!_.normalMap,yt=!!_.displacementMap,ze=!!_.emissiveMap,L=!!_.metalnessMap,B=!!_.roughnessMap,j=_.anisotropy>0,oe=_.clearcoat>0,de=_.dispersion>0,ce=_.iridescence>0,Ge=_.sheen>0,be=_.transmission>0,Pe=j&&!!_.anisotropyMap,Je=oe&&!!_.clearcoatMap,pe=oe&&!!_.clearcoatNormalMap,Re=oe&&!!_.clearcoatRoughnessMap,Ke=ce&&!!_.iridescenceMap,ke=ce&&!!_.iridescenceThicknessMap,Be=Ge&&!!_.sheenColorMap,rt=Ge&&!!_.sheenRoughnessMap,We=!!_.specularMap,Ze=!!_.specularColorMap,V=!!_.specularIntensityMap,ve=be&&!!_.transmissionMap,W=be&&!!_.thicknessMap,le=!!_.gradientMap,De=!!_.alphaMap,Se=_.alphaTest>0,ut=!!_.alphaHash,Tt=!!_.extensions;let xt=Xi;_.toneMapped&&(Ye===null||Ye.isXRRenderTarget===!0)&&(xt=i.toneMapping);const At={shaderID:_e,shaderType:_.type,shaderName:_.name,vertexShader:se,fragmentShader:he,defines:_.defines,customVertexShaderID:me,customFragmentShaderID:xe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:ct,batchingColor:ct&&z._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&z.instanceColor!==null,instancingMorph:Xe&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ye===null?i.outputColorSpace:Ye.isXRRenderTarget===!0?Ye.texture.colorSpace:Nt,alphaToCoverage:!!_.alphaToCoverage,map:gt,matcap:$e,envMap:k,envMapMode:k&&te.mapping,envMapCubeUVHeight:ye,aoMap:Kt,lightMap:lt,bumpMap:st,normalMap:qe,displacementMap:f&&yt,emissiveMap:ze,normalMapObjectSpace:qe&&_.normalMapType===Qf,normalMapTangentSpace:qe&&_.normalMapType===MA,metalnessMap:L,roughnessMap:B,anisotropy:j,anisotropyMap:Pe,clearcoat:oe,clearcoatMap:Je,clearcoatNormalMap:pe,clearcoatRoughnessMap:Re,dispersion:de,iridescence:ce,iridescenceMap:Ke,iridescenceThicknessMap:ke,sheen:Ge,sheenColorMap:Be,sheenRoughnessMap:rt,specularMap:We,specularColorMap:Ze,specularIntensityMap:V,transmission:be,transmissionMap:ve,thicknessMap:W,gradientMap:le,opaque:_.transparent===!1&&_.blending===Ys&&_.alphaToCoverage===!1,alphaMap:De,alphaTest:Se,alphaHash:ut,combine:_.combine,mapUv:gt&&g(_.map.channel),aoMapUv:Kt&&g(_.aoMap.channel),lightMapUv:lt&&g(_.lightMap.channel),bumpMapUv:st&&g(_.bumpMap.channel),normalMapUv:qe&&g(_.normalMap.channel),displacementMapUv:yt&&g(_.displacementMap.channel),emissiveMapUv:ze&&g(_.emissiveMap.channel),metalnessMapUv:L&&g(_.metalnessMap.channel),roughnessMapUv:B&&g(_.roughnessMap.channel),anisotropyMapUv:Pe&&g(_.anisotropyMap.channel),clearcoatMapUv:Je&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:rt&&g(_.sheenRoughnessMap.channel),specularMapUv:We&&g(_.specularMap.channel),specularColorMapUv:Ze&&g(_.specularColorMap.channel),specularIntensityMapUv:V&&g(_.specularIntensityMap.channel),transmissionMapUv:ve&&g(_.transmissionMap.channel),thicknessMapUv:W&&g(_.thicknessMap.channel),alphaMapUv:De&&g(_.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(qe||j),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(gt||De),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:A,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:we,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:gt&&_.map.isVideoTexture===!0&&It.getTransfer(_.map.colorSpace)===Dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===En,flipSided:_.side===$t,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Tt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&_.extensions.multiDraw===!0||ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function C(_){const v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(const U in _.defines)v.push(U),v.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(x(v,_),w(v,_),v.push(i.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function x(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function w(_,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),_.push(a.mask)}function P(_){const v=I[_.type];let U;if(v){const H=ei[v];U=Mp.clone(H.uniforms)}else U=_.uniforms;return U}function N(_,v){let U;for(let H=0,z=h.length;H<z;H++){const $=h[H];if($.cacheKey===v){U=$,++U.usedTimes;break}}return U===void 0&&(U=new GI(i,v,_,r),h.push(U)),U}function D(_){if(--_.usedTimes===0){const v=h.indexOf(_);h[v]=h[h.length-1],h.pop(),_.destroy()}}function T(_){c.remove(_)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:C,getUniforms:P,acquireProgram:N,releaseProgram:D,releaseShaderCache:T,programs:h,dispose:F}}function YI(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function WI(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Vh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,A,f,m,I,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:A,material:f,groupOrder:m,renderOrder:u.renderOrder,z:I,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=A,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=I,p.group=g),e++,p}function a(u,A,f,m,I,g){const p=o(u,A,f,m,I,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,A,f,m,I,g){const p=o(u,A,f,m,I,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,A){t.length>1&&t.sort(u||WI),n.length>1&&n.sort(A||Vh),s.length>1&&s.sort(A||Vh)}function h(){for(let u=e,A=i.length;u<A;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function XI(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Yh,i.set(n,[o])):s>=r.length?(o=new Yh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function KI(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new je};break;case"SpotLight":t={position:new K,direction:new K,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new K,halfWidth:new K,halfHeight:new K};break}return i[e.id]=t,t}}}function qI(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let JI=0;function jI(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $I(i){const e=new KI,t=qI(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new K);const s=new K,r=new nt,o=new nt;function a(l){let h=0,u=0,A=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,m=0,I=0,g=0,p=0,C=0,x=0,w=0,P=0,N=0,D=0;l.sort(jI);for(let F=0,_=l.length;F<_;F++){const v=l[F],U=v.color,H=v.intensity,z=v.distance,$=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)h+=U.r*H,u+=U.g*H,A+=U.b*H;else if(v.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(v.sh.coefficients[Y],H);D++}else if(v.isDirectionalLight){const Y=e.get(v);if(Y.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){const re=v.shadow,te=t.get(v);te.shadowIntensity=re.intensity,te.shadowBias=re.bias,te.shadowNormalBias=re.normalBias,te.shadowRadius=re.radius,te.shadowMapSize=re.mapSize,n.directionalShadow[f]=te,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=v.shadow.matrix,C++}n.directional[f]=Y,f++}else if(v.isSpotLight){const Y=e.get(v);Y.position.setFromMatrixPosition(v.matrixWorld),Y.color.copy(U).multiplyScalar(H),Y.distance=z,Y.coneCos=Math.cos(v.angle),Y.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),Y.decay=v.decay,n.spot[I]=Y;const re=v.shadow;if(v.map&&(n.spotLightMap[P]=v.map,P++,re.updateMatrices(v),v.castShadow&&N++),n.spotLightMatrix[I]=re.matrix,v.castShadow){const te=t.get(v);te.shadowIntensity=re.intensity,te.shadowBias=re.bias,te.shadowNormalBias=re.normalBias,te.shadowRadius=re.radius,te.shadowMapSize=re.mapSize,n.spotShadow[I]=te,n.spotShadowMap[I]=$,w++}I++}else if(v.isRectAreaLight){const Y=e.get(v);Y.color.copy(U).multiplyScalar(H),Y.halfWidth.set(v.width*.5,0,0),Y.halfHeight.set(0,v.height*.5,0),n.rectArea[g]=Y,g++}else if(v.isPointLight){const Y=e.get(v);if(Y.color.copy(v.color).multiplyScalar(v.intensity),Y.distance=v.distance,Y.decay=v.decay,v.castShadow){const re=v.shadow,te=t.get(v);te.shadowIntensity=re.intensity,te.shadowBias=re.bias,te.shadowNormalBias=re.normalBias,te.shadowRadius=re.radius,te.shadowMapSize=re.mapSize,te.shadowCameraNear=re.camera.near,te.shadowCameraFar=re.camera.far,n.pointShadow[m]=te,n.pointShadowMap[m]=$,n.pointShadowMatrix[m]=v.shadow.matrix,x++}n.point[m]=Y,m++}else if(v.isHemisphereLight){const Y=e.get(v);Y.skyColor.copy(v.color).multiplyScalar(H),Y.groundColor.copy(v.groundColor).multiplyScalar(H),n.hemi[p]=Y,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=A;const T=n.hash;(T.directionalLength!==f||T.pointLength!==m||T.spotLength!==I||T.rectAreaLength!==g||T.hemiLength!==p||T.numDirectionalShadows!==C||T.numPointShadows!==x||T.numSpotShadows!==w||T.numSpotMaps!==P||T.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=I,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=w+P-N,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=D,T.directionalLength=f,T.pointLength=m,T.spotLength=I,T.rectAreaLength=g,T.hemiLength=p,T.numDirectionalShadows=C,T.numPointShadows=x,T.numSpotShadows=w,T.numSpotMaps=P,T.numLightProbes=D,n.version=JI++)}function c(l,h){let u=0,A=0,f=0,m=0,I=0;const g=h.matrixWorldInverse;for(let p=0,C=l.length;p<C;p++){const x=l[p];if(x.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),u++}else if(x.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const w=n.rectArea[m];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const w=n.point[A];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(g),A++}else if(x.isHemisphereLight){const w=n.hemi[I];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(g),I++}}}return{setup:a,setupView:c,state:n}}function Wh(i){const e=new $I(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ZI(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Wh(i),e.set(s,[a])):r>=o.length?(a=new Wh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class e_ extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t_ extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const n_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i_=`uniform sampler2D shadow_pass;
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
}`;function s_(i,e,t){let n=new Cl;const s=new Ve,r=new Ve,o=new vt,a=new e_({depthPacking:Df}),c=new t_,l={},h=t.maxTextureSize,u={[oi]:$t,[$t]:oi,[En]:En},A=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:n_,fragmentShader:i_}),f=A.clone();f.defines.HORIZONTAL_PASS=1;const m=new nn;m.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const I=new Gt(m,A),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dA;let p=this.type;this.render=function(N,D,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||N.length===0)return;const F=i.getRenderTarget(),_=i.getActiveCubeFace(),v=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ii),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=p!==yi&&this.type===yi,z=p===yi&&this.type!==yi;for(let $=0,Y=N.length;$<Y;$++){const re=N[$],te=re.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;s.copy(te.mapSize);const ye=te.getFrameExtents();if(s.multiply(ye),r.copy(te.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ye.x),s.x=r.x*ye.x,te.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ye.y),s.y=r.y*ye.y,te.mapSize.y=r.y)),te.map===null||H===!0||z===!0){const Le=this.type!==yi?{minFilter:fn,magFilter:fn}:{};te.map!==null&&te.map.dispose(),te.map=new Xn(s.x,s.y,Le),te.map.texture.name=re.name+".shadowMap",te.camera.updateProjectionMatrix()}i.setRenderTarget(te.map),i.clear();const _e=te.getViewportCount();for(let Le=0;Le<_e;Le++){const Oe=te.getViewport(Le);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),U.viewport(o),te.updateMatrices(re,Le),n=te.getFrustum(),w(D,T,te.camera,re,this.type)}te.isPointLightShadow!==!0&&this.type===yi&&C(te,T),te.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(F,_,v)};function C(N,D){const T=e.update(I);A.defines.VSM_SAMPLES!==N.blurSamples&&(A.defines.VSM_SAMPLES=N.blurSamples,f.defines.VSM_SAMPLES=N.blurSamples,A.needsUpdate=!0,f.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Xn(s.x,s.y)),A.uniforms.shadow_pass.value=N.map.texture,A.uniforms.resolution.value=N.mapSize,A.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(D,null,T,A,I,null),f.uniforms.shadow_pass.value=N.mapPass.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(D,null,T,f,I,null)}function x(N,D,T,F){let _=null;const v=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(v!==void 0)_=v;else if(_=T.isPointLight===!0?c:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const U=_.uuid,H=D.uuid;let z=l[U];z===void 0&&(z={},l[U]=z);let $=z[H];$===void 0&&($=_.clone(),z[H]=$,D.addEventListener("dispose",P)),_=$}if(_.visible=D.visible,_.wireframe=D.wireframe,F===yi?_.side=D.shadowSide!==null?D.shadowSide:D.side:_.side=D.shadowSide!==null?D.shadowSide:u[D.side],_.alphaMap=D.alphaMap,_.alphaTest=D.alphaTest,_.map=D.map,_.clipShadows=D.clipShadows,_.clippingPlanes=D.clippingPlanes,_.clipIntersection=D.clipIntersection,_.displacementMap=D.displacementMap,_.displacementScale=D.displacementScale,_.displacementBias=D.displacementBias,_.wireframeLinewidth=D.wireframeLinewidth,_.linewidth=D.linewidth,T.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const U=i.properties.get(_);U.light=T}return _}function w(N,D,T,F,_){if(N.visible===!1)return;if(N.layers.test(D.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&_===yi)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const H=e.update(N),z=N.material;if(Array.isArray(z)){const $=H.groups;for(let Y=0,re=$.length;Y<re;Y++){const te=$[Y],ye=z[te.materialIndex];if(ye&&ye.visible){const _e=x(N,ye,F,_);N.onBeforeShadow(i,N,D,T,H,_e,te),i.renderBufferDirect(T,null,H,_e,N,te),N.onAfterShadow(i,N,D,T,H,_e,te)}}}else if(z.visible){const $=x(N,z,F,_);N.onBeforeShadow(i,N,D,T,H,$,null),i.renderBufferDirect(T,null,H,$,N,null),N.onAfterShadow(i,N,D,T,H,$,null)}}const U=N.children;for(let H=0,z=U.length;H<z;H++)w(U[H],D,T,F,_)}function P(N){N.target.removeEventListener("dispose",P);for(const T in l){const F=l[T],_=N.target.uuid;_ in F&&(F[_].dispose(),delete F[_])}}}const r_={[fc]:pc,[gc]:Ic,[mc]:_c,[qs]:Ec,[pc]:fc,[Ic]:gc,[_c]:mc,[Ec]:qs};function o_(i){function e(){let V=!1;const ve=new vt;let W=null;const le=new vt(0,0,0,0);return{setMask:function(De){W!==De&&!V&&(i.colorMask(De,De,De,De),W=De)},setLocked:function(De){V=De},setClear:function(De,Se,ut,Tt,xt){xt===!0&&(De*=Tt,Se*=Tt,ut*=Tt),ve.set(De,Se,ut,Tt),le.equals(ve)===!1&&(i.clearColor(De,Se,ut,Tt),le.copy(ve))},reset:function(){V=!1,W=null,le.set(-1,0,0,0)}}}function t(){let V=!1,ve=!1,W=null,le=null,De=null;return{setReversed:function(Se){ve=Se},setTest:function(Se){Se?me(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Se){W!==Se&&!V&&(i.depthMask(Se),W=Se)},setFunc:function(Se){if(ve&&(Se=r_[Se]),le!==Se){switch(Se){case fc:i.depthFunc(i.NEVER);break;case pc:i.depthFunc(i.ALWAYS);break;case gc:i.depthFunc(i.LESS);break;case qs:i.depthFunc(i.LEQUAL);break;case mc:i.depthFunc(i.EQUAL);break;case Ec:i.depthFunc(i.GEQUAL);break;case Ic:i.depthFunc(i.GREATER);break;case _c:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Se}},setLocked:function(Se){V=Se},setClear:function(Se){De!==Se&&(i.clearDepth(Se),De=Se)},reset:function(){V=!1,W=null,le=null,De=null}}}function n(){let V=!1,ve=null,W=null,le=null,De=null,Se=null,ut=null,Tt=null,xt=null;return{setTest:function(At){V||(At?me(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(At){ve!==At&&!V&&(i.stencilMask(At),ve=At)},setFunc:function(At,qt,In){(W!==At||le!==qt||De!==In)&&(i.stencilFunc(At,qt,In),W=At,le=qt,De=In)},setOp:function(At,qt,In){(Se!==At||ut!==qt||Tt!==In)&&(i.stencilOp(At,qt,In),Se=At,ut=qt,Tt=In)},setLocked:function(At){V=At},setClear:function(At){xt!==At&&(i.clearStencil(At),xt=At)},reset:function(){V=!1,ve=null,W=null,le=null,De=null,Se=null,ut=null,Tt=null,xt=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,A=[],f=null,m=!1,I=null,g=null,p=null,C=null,x=null,w=null,P=null,N=new je(0,0,0),D=0,T=!1,F=null,_=null,v=null,U=null,H=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Y=0;const re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(re)[1]),$=Y>=1):re.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),$=Y>=2);let te=null,ye={};const _e=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),Oe=new vt().fromArray(_e),we=new vt().fromArray(Le);function se(V,ve,W,le){const De=new Uint8Array(4),Se=i.createTexture();i.bindTexture(V,Se),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ut=0;ut<W;ut++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(ve+ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return Se}const he={};he[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),me(i.DEPTH_TEST),r.setFunc(qs),lt(!1),st(jl),me(i.CULL_FACE),k(ii);function me(V){l[V]!==!0&&(i.enable(V),l[V]=!0)}function xe(V){l[V]!==!1&&(i.disable(V),l[V]=!1)}function Ye(V,ve){return h[V]!==ve?(i.bindFramebuffer(V,ve),h[V]=ve,V===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),V===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Xe(V,ve){let W=A,le=!1;if(V){W=u.get(ve),W===void 0&&(W=[],u.set(ve,W));const De=V.textures;if(W.length!==De.length||W[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,ut=De.length;Se<ut;Se++)W[Se]=i.COLOR_ATTACHMENT0+Se;W.length=De.length,le=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,le=!0);le&&i.drawBuffers(W)}function ct(V){return f!==V?(i.useProgram(V),f=V,!0):!1}const gt={[cs]:i.FUNC_ADD,[nf]:i.FUNC_SUBTRACT,[sf]:i.FUNC_REVERSE_SUBTRACT};gt[rf]=i.MIN,gt[of]=i.MAX;const $e={[af]:i.ZERO,[cf]:i.ONE,[lf]:i.SRC_COLOR,[Ac]:i.SRC_ALPHA,[pf]:i.SRC_ALPHA_SATURATE,[df]:i.DST_COLOR,[uf]:i.DST_ALPHA,[hf]:i.ONE_MINUS_SRC_COLOR,[dc]:i.ONE_MINUS_SRC_ALPHA,[ff]:i.ONE_MINUS_DST_COLOR,[Af]:i.ONE_MINUS_DST_ALPHA,[gf]:i.CONSTANT_COLOR,[mf]:i.ONE_MINUS_CONSTANT_COLOR,[Ef]:i.CONSTANT_ALPHA,[If]:i.ONE_MINUS_CONSTANT_ALPHA};function k(V,ve,W,le,De,Se,ut,Tt,xt,At){if(V===ii){m===!0&&(xe(i.BLEND),m=!1);return}if(m===!1&&(me(i.BLEND),m=!0),V!==tf){if(V!==I||At!==T){if((g!==cs||x!==cs)&&(i.blendEquation(i.FUNC_ADD),g=cs,x=cs),At)switch(V){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $l:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $l:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}p=null,C=null,w=null,P=null,N.set(0,0,0),D=0,I=V,T=At}return}De=De||ve,Se=Se||W,ut=ut||le,(ve!==g||De!==x)&&(i.blendEquationSeparate(gt[ve],gt[De]),g=ve,x=De),(W!==p||le!==C||Se!==w||ut!==P)&&(i.blendFuncSeparate($e[W],$e[le],$e[Se],$e[ut]),p=W,C=le,w=Se,P=ut),(Tt.equals(N)===!1||xt!==D)&&(i.blendColor(Tt.r,Tt.g,Tt.b,xt),N.copy(Tt),D=xt),I=V,T=!1}function Kt(V,ve){V.side===En?xe(i.CULL_FACE):me(i.CULL_FACE);let W=V.side===$t;ve&&(W=!W),lt(W),V.blending===Ys&&V.transparent===!1?k(ii):k(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),r.setFunc(V.depthFunc),r.setTest(V.depthTest),r.setMask(V.depthWrite),s.setMask(V.colorWrite);const le=V.stencilWrite;o.setTest(le),le&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),yt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(V){F!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),F=V)}function st(V){V!==$d?(me(i.CULL_FACE),V!==_&&(V===jl?i.cullFace(i.BACK):V===Zd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),_=V}function qe(V){V!==v&&($&&i.lineWidth(V),v=V)}function yt(V,ve,W){V?(me(i.POLYGON_OFFSET_FILL),(U!==ve||H!==W)&&(i.polygonOffset(ve,W),U=ve,H=W)):xe(i.POLYGON_OFFSET_FILL)}function ze(V){V?me(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function L(V){V===void 0&&(V=i.TEXTURE0+z-1),te!==V&&(i.activeTexture(V),te=V)}function B(V,ve,W){W===void 0&&(te===null?W=i.TEXTURE0+z-1:W=te);let le=ye[W];le===void 0&&(le={type:void 0,texture:void 0},ye[W]=le),(le.type!==V||le.texture!==ve)&&(te!==W&&(i.activeTexture(W),te=W),i.bindTexture(V,ve||he[V]),le.type=V,le.texture=ve)}function j(){const V=ye[te];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ge(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(V){Oe.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Oe.copy(V))}function Be(V){we.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),we.copy(V))}function rt(V,ve){let W=c.get(ve);W===void 0&&(W=new WeakMap,c.set(ve,W));let le=W.get(V);le===void 0&&(le=i.getUniformBlockIndex(ve,V.name),W.set(V,le))}function We(V,ve){const le=c.get(ve).get(V);a.get(ve)!==le&&(i.uniformBlockBinding(ve,le,V.__bindingPointIndex),a.set(ve,le))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},te=null,ye={},h={},u=new WeakMap,A=[],f=null,m=!1,I=null,g=null,p=null,C=null,x=null,w=null,P=null,N=new je(0,0,0),D=0,T=!1,F=null,_=null,v=null,U=null,H=null,Oe.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:me,disable:xe,bindFramebuffer:Ye,drawBuffers:Xe,useProgram:ct,setBlending:k,setMaterial:Kt,setFlipSided:lt,setCullFace:st,setLineWidth:qe,setPolygonOffset:yt,setScissorTest:ze,activeTexture:L,bindTexture:B,unbindTexture:j,compressedTexImage2D:oe,compressedTexImage3D:de,texImage2D:Re,texImage3D:Ke,updateUBOMapping:rt,uniformBlockBinding:We,texStorage2D:Je,texStorage3D:pe,texSubImage2D:ce,texSubImage3D:Ge,compressedTexSubImage2D:be,compressedTexSubImage3D:Pe,scissor:ke,viewport:Be,reset:Ze}}function Xh(i,e,t,n){const s=a_(n);switch(t){case _A:return i*e;case yA:return i*e;case vA:return i*e*2;case ea:return i*e/s.components*s.byteLength;case fl:return i*e/s.components*s.byteLength;case xA:return i*e*2/s.components*s.byteLength;case pl:return i*e*2/s.components*s.byteLength;case CA:return i*e*3/s.components*s.byteLength;case Bn:return i*e*4/s.components*s.byteLength;case gl:return i*e*4/s.components*s.byteLength;case bo:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vc:case Sc:return Math.max(i,16)*Math.max(e,8)/4;case yc:case xc:return Math.max(i,8)*Math.max(e,8)/2;case Bc:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case kc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qo:case zc:case Vc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case SA:case Yc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wc:case Xc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function a_(i){switch(i){case hn:case mA:return{byteLength:1,components:1};case Nr:case EA:case ln:return{byteLength:2,components:1};case Al:case dl:return{byteLength:2,components:4};case Ki:case ul:case Zt:return{byteLength:4,components:1};case IA:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function c_(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,h=new WeakMap;let u;const A=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,B){return f?new OffscreenCanvas(L,B):Fr("canvas")}function I(L,B,j){let oe=1;const de=ze(L);if((de.width>j||de.height>j)&&(oe=j/Math.max(de.width,de.height)),oe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ce=Math.floor(oe*de.width),Ge=Math.floor(oe*de.height);u===void 0&&(u=m(ce,Ge));const be=B?m(ce,Ge):u;return be.width=ce,be.height=Ge,be.getContext("2d").drawImage(L,0,0,ce,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ce+"x"+Ge+")."),be}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==fn&&L.minFilter!==bt}function p(L){i.generateMipmap(L)}function C(L,B,j,oe,de=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=B;if(B===i.RED&&(j===i.FLOAT&&(ce=i.R32F),j===i.HALF_FLOAT&&(ce=i.R16F),j===i.UNSIGNED_BYTE&&(ce=i.R8)),B===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ce=i.R8UI),j===i.UNSIGNED_SHORT&&(ce=i.R16UI),j===i.UNSIGNED_INT&&(ce=i.R32UI),j===i.BYTE&&(ce=i.R8I),j===i.SHORT&&(ce=i.R16I),j===i.INT&&(ce=i.R32I)),B===i.RG&&(j===i.FLOAT&&(ce=i.RG32F),j===i.HALF_FLOAT&&(ce=i.RG16F),j===i.UNSIGNED_BYTE&&(ce=i.RG8)),B===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ce=i.RG8UI),j===i.UNSIGNED_SHORT&&(ce=i.RG16UI),j===i.UNSIGNED_INT&&(ce=i.RG32UI),j===i.BYTE&&(ce=i.RG8I),j===i.SHORT&&(ce=i.RG16I),j===i.INT&&(ce=i.RG32I)),B===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),j===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),j===i.UNSIGNED_INT&&(ce=i.RGB32UI),j===i.BYTE&&(ce=i.RGB8I),j===i.SHORT&&(ce=i.RGB16I),j===i.INT&&(ce=i.RGB32I)),B===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),j===i.UNSIGNED_INT&&(ce=i.RGBA32UI),j===i.BYTE&&(ce=i.RGBA8I),j===i.SHORT&&(ce=i.RGBA16I),j===i.INT&&(ce=i.RGBA32I)),B===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),B===i.RGBA){const Ge=de?Oo:It.getTransfer(oe);j===i.FLOAT&&(ce=i.RGBA32F),j===i.HALF_FLOAT&&(ce=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ce=Ge===Dt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function x(L,B){let j;return L?B===null||B===Ki||B===As?j=i.DEPTH24_STENCIL8:B===Zt?j=i.DEPTH32F_STENCIL8:B===Nr&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):B===null||B===Ki||B===As?j=i.DEPTH_COMPONENT24:B===Zt?j=i.DEPTH_COMPONENT32F:B===Nr&&(j=i.DEPTH_COMPONENT16),j}function w(L,B){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==fn&&L.minFilter!==bt?Math.log2(Math.max(B.width,B.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?B.mipmaps.length:1}function P(L){const B=L.target;B.removeEventListener("dispose",P),D(B),B.isVideoTexture&&h.delete(B)}function N(L){const B=L.target;B.removeEventListener("dispose",N),F(B)}function D(L){const B=n.get(L);if(B.__webglInit===void 0)return;const j=L.source,oe=A.get(j);if(oe){const de=oe[B.__cacheKey];de.usedTimes--,de.usedTimes===0&&T(L),Object.keys(oe).length===0&&A.delete(j)}n.remove(L)}function T(L){const B=n.get(L);i.deleteTexture(B.__webglTexture);const j=L.source,oe=A.get(j);delete oe[B.__cacheKey],o.memory.textures--}function F(L){const B=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(B.__webglFramebuffer[oe]))for(let de=0;de<B.__webglFramebuffer[oe].length;de++)i.deleteFramebuffer(B.__webglFramebuffer[oe][de]);else i.deleteFramebuffer(B.__webglFramebuffer[oe]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[oe])}else{if(Array.isArray(B.__webglFramebuffer))for(let oe=0;oe<B.__webglFramebuffer.length;oe++)i.deleteFramebuffer(B.__webglFramebuffer[oe]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let oe=0;oe<B.__webglColorRenderbuffer.length;oe++)B.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[oe]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}const j=L.textures;for(let oe=0,de=j.length;oe<de;oe++){const ce=n.get(j[oe]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(j[oe])}n.remove(L)}let _=0;function v(){_=0}function U(){const L=_;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),_+=1,L}function H(L){const B=[];return B.push(L.wrapS),B.push(L.wrapT),B.push(L.wrapR||0),B.push(L.magFilter),B.push(L.minFilter),B.push(L.anisotropy),B.push(L.internalFormat),B.push(L.format),B.push(L.type),B.push(L.generateMipmaps),B.push(L.premultiplyAlpha),B.push(L.flipY),B.push(L.unpackAlignment),B.push(L.colorSpace),B.join()}function z(L,B){const j=n.get(L);if(L.isVideoTexture&&qe(L),L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){const oe=L.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(j,L,B);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+B)}function $(L,B){const j=n.get(L);if(L.version>0&&j.__version!==L.version){we(j,L,B);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+B)}function Y(L,B){const j=n.get(L);if(L.version>0&&j.__version!==L.version){we(j,L,B);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+B)}function re(L,B){const j=n.get(L);if(L.version>0&&j.__version!==L.version){se(j,L,B);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+B)}const te={[$s]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[Fo]:i.MIRRORED_REPEAT},ye={[fn]:i.NEAREST,[gA]:i.NEAREST_MIPMAP_NEAREST,[wr]:i.NEAREST_MIPMAP_LINEAR,[bt]:i.LINEAR,[wo]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},_e={[Lf]:i.NEVER,[Gf]:i.ALWAYS,[Nf]:i.LESS,[wA]:i.LEQUAL,[Pf]:i.EQUAL,[Of]:i.GEQUAL,[Uf]:i.GREATER,[Ff]:i.NOTEQUAL};function Le(L,B){if(B.type===Zt&&e.has("OES_texture_float_linear")===!1&&(B.magFilter===bt||B.magFilter===wo||B.magFilter===wr||B.magFilter===ni||B.minFilter===bt||B.minFilter===wo||B.minFilter===wr||B.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,te[B.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,te[B.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,te[B.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ye[B.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ye[B.minFilter]),B.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,_e[B.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(B.magFilter===fn||B.minFilter!==wr&&B.minFilter!==ni||B.type===Zt&&e.has("OES_texture_float_linear")===!1)return;if(B.anisotropy>1||n.get(B).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(B.anisotropy,s.getMaxAnisotropy())),n.get(B).__currentAnisotropy=B.anisotropy}}}function Oe(L,B){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,B.addEventListener("dispose",P));const oe=B.source;let de=A.get(oe);de===void 0&&(de={},A.set(oe,de));const ce=H(B);if(ce!==L.__cacheKey){de[ce]===void 0&&(de[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,j=!0),de[ce].usedTimes++;const Ge=de[L.__cacheKey];Ge!==void 0&&(de[L.__cacheKey].usedTimes--,Ge.usedTimes===0&&T(B)),L.__cacheKey=ce,L.__webglTexture=de[ce].texture}return j}function we(L,B,j){let oe=i.TEXTURE_2D;(B.isDataArrayTexture||B.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),B.isData3DTexture&&(oe=i.TEXTURE_3D);const de=Oe(L,B),ce=B.source;t.bindTexture(oe,L.__webglTexture,i.TEXTURE0+j);const Ge=n.get(ce);if(ce.version!==Ge.__version||de===!0){t.activeTexture(i.TEXTURE0+j);const be=It.getPrimaries(It.workingColorSpace),Pe=B.colorSpace===zn?null:It.getPrimaries(B.colorSpace),Je=B.colorSpace===zn||be===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,B.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,B.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let pe=I(B.image,!1,s.maxTextureSize);pe=yt(B,pe);const Re=r.convert(B.format,B.colorSpace),Ke=r.convert(B.type);let ke=C(B.internalFormat,Re,Ke,B.colorSpace,B.isVideoTexture);Le(oe,B);let Be;const rt=B.mipmaps,We=B.isVideoTexture!==!0,Ze=Ge.__version===void 0||de===!0,V=ce.dataReady,ve=w(B,pe);if(B.isDepthTexture)ke=x(B.format===ds,B.type),Ze&&(We?t.texStorage2D(i.TEXTURE_2D,1,ke,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,ke,pe.width,pe.height,0,Re,Ke,null));else if(B.isDataTexture)if(rt.length>0){We&&Ze&&t.texStorage2D(i.TEXTURE_2D,ve,ke,rt[0].width,rt[0].height);for(let W=0,le=rt.length;W<le;W++)Be=rt[W],We?V&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Be.width,Be.height,Re,Ke,Be.data):t.texImage2D(i.TEXTURE_2D,W,ke,Be.width,Be.height,0,Re,Ke,Be.data);B.generateMipmaps=!1}else We?(Ze&&t.texStorage2D(i.TEXTURE_2D,ve,ke,pe.width,pe.height),V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,Re,Ke,pe.data)):t.texImage2D(i.TEXTURE_2D,0,ke,pe.width,pe.height,0,Re,Ke,pe.data);else if(B.isCompressedTexture)if(B.isCompressedArrayTexture){We&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,ke,rt[0].width,rt[0].height,pe.depth);for(let W=0,le=rt.length;W<le;W++)if(Be=rt[W],B.format!==Bn)if(Re!==null)if(We){if(V)if(B.layerUpdates.size>0){const De=Xh(Be.width,Be.height,B.format,B.type);for(const Se of B.layerUpdates){const ut=Be.data.subarray(Se*De/Be.data.BYTES_PER_ELEMENT,(Se+1)*De/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,Se,Be.width,Be.height,1,Re,ut,0,0)}B.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Be.width,Be.height,pe.depth,Re,Be.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,ke,Be.width,Be.height,pe.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Be.width,Be.height,pe.depth,Re,Ke,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,ke,Be.width,Be.height,pe.depth,0,Re,Ke,Be.data)}else{We&&Ze&&t.texStorage2D(i.TEXTURE_2D,ve,ke,rt[0].width,rt[0].height);for(let W=0,le=rt.length;W<le;W++)Be=rt[W],B.format!==Bn?Re!==null?We?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Be.width,Be.height,Re,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,W,ke,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?V&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Be.width,Be.height,Re,Ke,Be.data):t.texImage2D(i.TEXTURE_2D,W,ke,Be.width,Be.height,0,Re,Ke,Be.data)}else if(B.isDataArrayTexture)if(We){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,ke,pe.width,pe.height,pe.depth),V)if(B.layerUpdates.size>0){const W=Xh(pe.width,pe.height,B.format,B.type);for(const le of B.layerUpdates){const De=pe.data.subarray(le*W/pe.data.BYTES_PER_ELEMENT,(le+1)*W/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,pe.width,pe.height,1,Re,Ke,De)}B.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Re,Ke,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,pe.width,pe.height,pe.depth,0,Re,Ke,pe.data);else if(B.isData3DTexture)We?(Ze&&t.texStorage3D(i.TEXTURE_3D,ve,ke,pe.width,pe.height,pe.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Re,Ke,pe.data)):t.texImage3D(i.TEXTURE_3D,0,ke,pe.width,pe.height,pe.depth,0,Re,Ke,pe.data);else if(B.isFramebufferTexture){if(Ze)if(We)t.texStorage2D(i.TEXTURE_2D,ve,ke,pe.width,pe.height);else{let W=pe.width,le=pe.height;for(let De=0;De<ve;De++)t.texImage2D(i.TEXTURE_2D,De,ke,W,le,0,Re,Ke,null),W>>=1,le>>=1}}else if(rt.length>0){if(We&&Ze){const W=ze(rt[0]);t.texStorage2D(i.TEXTURE_2D,ve,ke,W.width,W.height)}for(let W=0,le=rt.length;W<le;W++)Be=rt[W],We?V&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Re,Ke,Be):t.texImage2D(i.TEXTURE_2D,W,ke,Re,Ke,Be);B.generateMipmaps=!1}else if(We){if(Ze){const W=ze(pe);t.texStorage2D(i.TEXTURE_2D,ve,ke,W.width,W.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Ke,pe)}else t.texImage2D(i.TEXTURE_2D,0,ke,Re,Ke,pe);g(B)&&p(oe),Ge.__version=ce.version,B.onUpdate&&B.onUpdate(B)}L.__version=B.version}function se(L,B,j){if(B.image.length!==6)return;const oe=Oe(L,B),de=B.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+j);const ce=n.get(de);if(de.version!==ce.__version||oe===!0){t.activeTexture(i.TEXTURE0+j);const Ge=It.getPrimaries(It.workingColorSpace),be=B.colorSpace===zn?null:It.getPrimaries(B.colorSpace),Pe=B.colorSpace===zn||Ge===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,B.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,B.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Je=B.isCompressedTexture||B.image[0].isCompressedTexture,pe=B.image[0]&&B.image[0].isDataTexture,Re=[];for(let le=0;le<6;le++)!Je&&!pe?Re[le]=I(B.image[le],!0,s.maxCubemapSize):Re[le]=pe?B.image[le].image:B.image[le],Re[le]=yt(B,Re[le]);const Ke=Re[0],ke=r.convert(B.format,B.colorSpace),Be=r.convert(B.type),rt=C(B.internalFormat,ke,Be,B.colorSpace),We=B.isVideoTexture!==!0,Ze=ce.__version===void 0||oe===!0,V=de.dataReady;let ve=w(B,Ke);Le(i.TEXTURE_CUBE_MAP,B);let W;if(Je){We&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,rt,Ke.width,Ke.height);for(let le=0;le<6;le++){W=Re[le].mipmaps;for(let De=0;De<W.length;De++){const Se=W[De];B.format!==Bn?ke!==null?We?V&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,0,0,Se.width,Se.height,ke,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,rt,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,0,0,Se.width,Se.height,ke,Be,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,rt,Se.width,Se.height,0,ke,Be,Se.data)}}}else{if(W=B.mipmaps,We&&Ze){W.length>0&&ve++;const le=ze(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,rt,le.width,le.height)}for(let le=0;le<6;le++)if(pe){We?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Re[le].width,Re[le].height,ke,Be,Re[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,rt,Re[le].width,Re[le].height,0,ke,Be,Re[le].data);for(let De=0;De<W.length;De++){const ut=W[De].image[le].image;We?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,0,0,ut.width,ut.height,ke,Be,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,rt,ut.width,ut.height,0,ke,Be,ut.data)}}else{We?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ke,Be,Re[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,rt,ke,Be,Re[le]);for(let De=0;De<W.length;De++){const Se=W[De];We?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,0,0,ke,Be,Se.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,rt,ke,Be,Se.image[le])}}}g(B)&&p(i.TEXTURE_CUBE_MAP),ce.__version=de.version,B.onUpdate&&B.onUpdate(B)}L.__version=B.version}function he(L,B,j,oe,de,ce){const Ge=r.convert(j.format,j.colorSpace),be=r.convert(j.type),Pe=C(j.internalFormat,Ge,be,j.colorSpace);if(!n.get(B).__hasExternalTextures){const pe=Math.max(1,B.width>>ce),Re=Math.max(1,B.height>>ce);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,ce,Pe,pe,Re,B.depth,0,Ge,be,null):t.texImage2D(de,ce,Pe,pe,Re,0,Ge,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),st(B)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,de,n.get(j).__webglTexture,0,lt(B)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,de,n.get(j).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(L,B,j){if(i.bindRenderbuffer(i.RENDERBUFFER,L),B.depthBuffer){const oe=B.depthTexture,de=oe&&oe.isDepthTexture?oe.type:null,ce=x(B.stencilBuffer,de),Ge=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=lt(B);st(B)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,ce,B.width,B.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,ce,B.width,B.height):i.renderbufferStorage(i.RENDERBUFFER,ce,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ge,i.RENDERBUFFER,L)}else{const oe=B.textures;for(let de=0;de<oe.length;de++){const ce=oe[de],Ge=r.convert(ce.format,ce.colorSpace),be=r.convert(ce.type),Pe=C(ce.internalFormat,Ge,be,ce.colorSpace),Je=lt(B);j&&st(B)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,Pe,B.width,B.height):st(B)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je,Pe,B.width,B.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,B.width,B.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(L,B){if(B&&B.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(B.depthTexture&&B.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(B.depthTexture).__webglTexture||B.depthTexture.image.width!==B.width||B.depthTexture.image.height!==B.height)&&(B.depthTexture.image.width=B.width,B.depthTexture.image.height=B.height,B.depthTexture.needsUpdate=!0),z(B.depthTexture,0);const oe=n.get(B.depthTexture).__webglTexture,de=lt(B);if(B.depthTexture.format===Ws)st(B)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(B.depthTexture.format===ds)st(B)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ye(L){const B=n.get(L),j=L.isWebGLCubeRenderTarget===!0;if(B.__boundDepthTexture!==L.depthTexture){const oe=L.depthTexture;if(B.__depthDisposeCallback&&B.__depthDisposeCallback(),oe){const de=()=>{delete B.__boundDepthTexture,delete B.__depthDisposeCallback,oe.removeEventListener("dispose",de)};oe.addEventListener("dispose",de),B.__depthDisposeCallback=de}B.__boundDepthTexture=oe}if(L.depthTexture&&!B.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");xe(B.__webglFramebuffer,L)}else if(j){B.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer[oe]),B.__webglDepthbuffer[oe]===void 0)B.__webglDepthbuffer[oe]=i.createRenderbuffer(),me(B.__webglDepthbuffer[oe],L,!1);else{const de=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=B.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),B.__webglDepthbuffer===void 0)B.__webglDepthbuffer=i.createRenderbuffer(),me(B.__webglDepthbuffer,L,!1);else{const oe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=B.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(L,B,j){const oe=n.get(L);B!==void 0&&he(oe.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Ye(L)}function ct(L){const B=L.texture,j=n.get(L),oe=n.get(B);L.addEventListener("dispose",N);const de=L.textures,ce=L.isWebGLCubeRenderTarget===!0,Ge=de.length>1;if(Ge||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=B.version,o.memory.textures++),ce){j.__webglFramebuffer=[];for(let be=0;be<6;be++)if(B.mipmaps&&B.mipmaps.length>0){j.__webglFramebuffer[be]=[];for(let Pe=0;Pe<B.mipmaps.length;Pe++)j.__webglFramebuffer[be][Pe]=i.createFramebuffer()}else j.__webglFramebuffer[be]=i.createFramebuffer()}else{if(B.mipmaps&&B.mipmaps.length>0){j.__webglFramebuffer=[];for(let be=0;be<B.mipmaps.length;be++)j.__webglFramebuffer[be]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Ge)for(let be=0,Pe=de.length;be<Pe;be++){const Je=n.get(de[be]);Je.__webglTexture===void 0&&(Je.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&st(L)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let be=0;be<de.length;be++){const Pe=de[be];j.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[be]);const Je=r.convert(Pe.format,Pe.colorSpace),pe=r.convert(Pe.type),Re=C(Pe.internalFormat,Je,pe,Pe.colorSpace,L.isXRRenderTarget===!0),Ke=lt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,Re,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,j.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),me(j.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Le(i.TEXTURE_CUBE_MAP,B);for(let be=0;be<6;be++)if(B.mipmaps&&B.mipmaps.length>0)for(let Pe=0;Pe<B.mipmaps.length;Pe++)he(j.__webglFramebuffer[be][Pe],L,B,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Pe);else he(j.__webglFramebuffer[be],L,B,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);g(B)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let be=0,Pe=de.length;be<Pe;be++){const Je=de[be],pe=n.get(Je);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),Le(i.TEXTURE_2D,Je),he(j.__webglFramebuffer,L,Je,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),g(Je)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(be=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,oe.__webglTexture),Le(be,B),B.mipmaps&&B.mipmaps.length>0)for(let Pe=0;Pe<B.mipmaps.length;Pe++)he(j.__webglFramebuffer[Pe],L,B,i.COLOR_ATTACHMENT0,be,Pe);else he(j.__webglFramebuffer,L,B,i.COLOR_ATTACHMENT0,be,0);g(B)&&p(be),t.unbindTexture()}L.depthBuffer&&Ye(L)}function gt(L){const B=L.textures;for(let j=0,oe=B.length;j<oe;j++){const de=B[j];if(g(de)){const ce=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ge=n.get(de).__webglTexture;t.bindTexture(ce,Ge),p(ce),t.unbindTexture()}}}const $e=[],k=[];function Kt(L){if(L.samples>0){if(st(L)===!1){const B=L.textures,j=L.width,oe=L.height;let de=i.COLOR_BUFFER_BIT;const ce=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=n.get(L),be=B.length>1;if(be)for(let Pe=0;Pe<B.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Pe=0;Pe<B.length;Pe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[Pe]);const Je=n.get(B[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Je,0)}i.blitFramebuffer(0,0,j,oe,0,0,j,oe,de,i.NEAREST),c===!0&&($e.length=0,k.length=0,$e.push(i.COLOR_ATTACHMENT0+Pe),L.depthBuffer&&L.resolveDepthBuffer===!1&&($e.push(ce),k.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Pe=0;Pe<B.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[Pe]);const Je=n.get(B[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const B=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[B])}}}function lt(L){return Math.min(s.maxSamples,L.samples)}function st(L){const B=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&B.__useRenderToTexture!==!1}function qe(L){const B=o.render.frame;h.get(L)!==B&&(h.set(L,B),L.update())}function yt(L,B){const j=L.colorSpace,oe=L.format,de=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==Nt&&j!==zn&&(It.getTransfer(j)===Dt?(oe!==Bn||de!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),B}function ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=v,this.setTexture2D=z,this.setTexture2DArray=$,this.setTexture3D=Y,this.setTextureCube=re,this.rebindTextures=Xe,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=he,this.useMultisampledRTT=st}function l_(i,e){function t(n,s=zn){let r;const o=It.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===Al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===IA)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mA)return i.BYTE;if(n===EA)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===Zt)return i.FLOAT;if(n===ln)return i.HALF_FLOAT;if(n===_A)return i.ALPHA;if(n===CA)return i.RGB;if(n===Bn)return i.RGBA;if(n===yA)return i.LUMINANCE;if(n===vA)return i.LUMINANCE_ALPHA;if(n===Ws)return i.DEPTH_COMPONENT;if(n===ds)return i.DEPTH_STENCIL;if(n===ea)return i.RED;if(n===fl)return i.RED_INTEGER;if(n===xA)return i.RG;if(n===pl)return i.RG_INTEGER;if(n===gl)return i.RGBA_INTEGER;if(n===bo||n===To||n===Ro||n===Do)if(o===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yc||n===vc||n===xc||n===Sc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bc||n===Mc||n===wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bc||n===Mc)return o===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bc||n===Tc||n===Rc||n===Dc||n===Qc||n===Lc||n===Nc||n===Pc||n===Uc||n===Fc||n===Oc||n===Gc||n===Hc||n===kc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qo||n===zc||n===Vc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qo)return o===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===SA||n===Yc||n===Wc||n===Xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class h_ extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yi extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u_={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const I of e.hand.values()){const g=t.getJointPose(I,n),p=this._getHandJoint(l,I);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],A=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&A>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&A<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const A_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d_=`
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

}`;class f_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new zt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kn({vertexShader:A_,fragmentShader:d_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new tr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p_ extends wi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,A=null,f=null,m=null;const I=new f_,g=t.getContextAttributes();let p=null,C=null;const x=[],w=[],P=new Ve;let N=null;const D=new an;D.layers.enable(1),D.viewport=new vt;const T=new an;T.layers.enable(2),T.viewport=new vt;const F=[D,T],_=new h_;_.layers.enable(1),_.layers.enable(2);let v=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let he=x[se];return he===void 0&&(he=new Ha,x[se]=he),he.getTargetRaySpace()},this.getControllerGrip=function(se){let he=x[se];return he===void 0&&(he=new Ha,x[se]=he),he.getGripSpace()},this.getHand=function(se){let he=x[se];return he===void 0&&(he=new Ha,x[se]=he),he.getHandSpace()};function H(se){const he=w.indexOf(se.inputSource);if(he===-1)return;const me=x[he];me!==void 0&&(me.update(se.inputSource,se.frame,l||o),me.dispatchEvent({type:se.type,data:se.inputSource}))}function z(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",$);for(let se=0;se<x.length;se++){const he=w[se];he!==null&&(w[se]=null,x[se].disconnect(he))}v=null,U=null,I.reset(),e.setRenderTarget(p),f=null,A=null,u=null,s=null,C=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(se){l=se},this.getBaseLayer=function(){return A!==null?A:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",z),s.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const he={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),C=new Xn(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let he=null,me=null,xe=null;g.depth&&(xe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=g.stencil?ds:Ws,me=g.stencil?As:Ki);const Ye={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=new XRWebGLBinding(s,t),A=u.createProjectionLayer(Ye),s.updateRenderState({layers:[A]}),e.setPixelRatio(1),e.setSize(A.textureWidth,A.textureHeight,!1),C=new Xn(A.textureWidth,A.textureHeight,{format:Bn,type:hn,depthTexture:new vl(A.textureWidth,A.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:A.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),we.setContext(s),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function $(se){for(let he=0;he<se.removed.length;he++){const me=se.removed[he],xe=w.indexOf(me);xe>=0&&(w[xe]=null,x[xe].disconnect(me))}for(let he=0;he<se.added.length;he++){const me=se.added[he];let xe=w.indexOf(me);if(xe===-1){for(let Xe=0;Xe<x.length;Xe++)if(Xe>=w.length){w.push(me),xe=Xe;break}else if(w[Xe]===null){w[Xe]=me,xe=Xe;break}if(xe===-1)break}const Ye=x[xe];Ye&&Ye.connect(me)}}const Y=new K,re=new K;function te(se,he,me){Y.setFromMatrixPosition(he.matrixWorld),re.setFromMatrixPosition(me.matrixWorld);const xe=Y.distanceTo(re),Ye=he.projectionMatrix.elements,Xe=me.projectionMatrix.elements,ct=Ye[14]/(Ye[10]-1),gt=Ye[14]/(Ye[10]+1),$e=(Ye[9]+1)/Ye[5],k=(Ye[9]-1)/Ye[5],Kt=(Ye[8]-1)/Ye[0],lt=(Xe[8]+1)/Xe[0],st=ct*Kt,qe=ct*lt,yt=xe/(-Kt+lt),ze=yt*-Kt;if(he.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ze),se.translateZ(yt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Ye[10]===-1)se.projectionMatrix.copy(he.projectionMatrix),se.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const L=ct+yt,B=gt+yt,j=st-ze,oe=qe+(xe-ze),de=$e*gt/B*L,ce=k*gt/B*L;se.projectionMatrix.makePerspective(j,oe,de,ce,L,B),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ye(se,he){he===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(he.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let he=se.near,me=se.far;I.texture!==null&&(I.depthNear>0&&(he=I.depthNear),I.depthFar>0&&(me=I.depthFar)),_.near=T.near=D.near=he,_.far=T.far=D.far=me,(v!==_.near||U!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),v=_.near,U=_.far);const xe=se.parent,Ye=_.cameras;ye(_,xe);for(let Xe=0;Xe<Ye.length;Xe++)ye(Ye[Xe],xe);Ye.length===2?te(_,D,T):_.projectionMatrix.copy(D.projectionMatrix),_e(se,_,xe)};function _e(se,he,me){me===null?se.matrix.copy(he.matrixWorld):(se.matrix.copy(me.matrixWorld),se.matrix.invert(),se.matrix.multiply(he.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(he.projectionMatrix),se.projectionMatrixInverse.copy(he.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Zs*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(A===null&&f===null))return c},this.setFoveation=function(se){c=se,A!==null&&(A.fixedFoveation=se),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=se)},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(_)};let Le=null;function Oe(se,he){if(h=he.getViewerPose(l||o),m=he,h!==null){const me=h.views;f!==null&&(e.setRenderTargetFramebuffer(C,f.framebuffer),e.setRenderTarget(C));let xe=!1;me.length!==_.cameras.length&&(_.cameras.length=0,xe=!0);for(let Xe=0;Xe<me.length;Xe++){const ct=me[Xe];let gt=null;if(f!==null)gt=f.getViewport(ct);else{const k=u.getViewSubImage(A,ct);gt=k.viewport,Xe===0&&(e.setRenderTargetTextures(C,k.colorTexture,A.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(C))}let $e=F[Xe];$e===void 0&&($e=new an,$e.layers.enable(Xe),$e.viewport=new vt,F[Xe]=$e),$e.matrix.fromArray(ct.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(ct.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(gt.x,gt.y,gt.width,gt.height),Xe===0&&(_.matrix.copy($e.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),xe===!0&&_.cameras.push($e)}const Ye=s.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")){const Xe=u.getDepthInformation(me[0]);Xe&&Xe.isValid&&Xe.texture&&I.init(e,Xe,s.renderState)}}for(let me=0;me<x.length;me++){const xe=w[me],Ye=x[me];xe!==null&&Ye!==void 0&&Ye.update(xe,he,l||o)}Le&&Le(se,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),m=null}const we=new UA;we.setAnimationLoop(Oe),this.setAnimationLoop=function(se){Le=se},this.dispose=function(){}}}const rs=new ci,g_=new nt;function m_(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,PA(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,C,x,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),A(g,p),p.isMeshPhysicalMaterial&&f(g,p,w)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),I(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,C,x):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===$t&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===$t&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const C=e.get(p),x=C.envMap,w=C.envMapRotation;x&&(g.envMap.value=x,rs.copy(w),rs.x*=-1,rs.y*=-1,rs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),g.envMapRotation.value.setFromMatrix4(g_.makeRotationFromEuler(rs)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,C,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*C,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function A(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,C){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function I(g,p){const C=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E_(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,x){const w=x.program;n.uniformBlockBinding(C,w)}function l(C,x){let w=s[C.id];w===void 0&&(m(C),w=h(C),s[C.id]=w,C.addEventListener("dispose",g));const P=x.program;n.updateUBOMapping(C,P);const N=e.render.frame;r[C.id]!==N&&(A(C),r[C.id]=N)}function h(C){const x=u();C.__bindingPointIndex=x;const w=i.createBuffer(),P=C.__size,N=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,w),w}function u(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function A(C){const x=s[C.id],w=C.uniforms,P=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let N=0,D=w.length;N<D;N++){const T=Array.isArray(w[N])?w[N]:[w[N]];for(let F=0,_=T.length;F<_;F++){const v=T[F];if(f(v,N,F,P)===!0){const U=v.__offset,H=Array.isArray(v.value)?v.value:[v.value];let z=0;for(let $=0;$<H.length;$++){const Y=H[$],re=I(Y);typeof Y=="number"||typeof Y=="boolean"?(v.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,U+z,v.__data)):Y.isMatrix3?(v.__data[0]=Y.elements[0],v.__data[1]=Y.elements[1],v.__data[2]=Y.elements[2],v.__data[3]=0,v.__data[4]=Y.elements[3],v.__data[5]=Y.elements[4],v.__data[6]=Y.elements[5],v.__data[7]=0,v.__data[8]=Y.elements[6],v.__data[9]=Y.elements[7],v.__data[10]=Y.elements[8],v.__data[11]=0):(Y.toArray(v.__data,z),z+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,v.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(C,x,w,P){const N=C.value,D=x+"_"+w;if(P[D]===void 0)return typeof N=="number"||typeof N=="boolean"?P[D]=N:P[D]=N.clone(),!0;{const T=P[D];if(typeof N=="number"||typeof N=="boolean"){if(T!==N)return P[D]=N,!0}else if(T.equals(N)===!1)return T.copy(N),!0}return!1}function m(C){const x=C.uniforms;let w=0;const P=16;for(let D=0,T=x.length;D<T;D++){const F=Array.isArray(x[D])?x[D]:[x[D]];for(let _=0,v=F.length;_<v;_++){const U=F[_],H=Array.isArray(U.value)?U.value:[U.value];for(let z=0,$=H.length;z<$;z++){const Y=H[z],re=I(Y),te=w%P,ye=te%re.boundary,_e=te+ye;w+=ye,_e!==0&&P-_e<re.storage&&(w+=P-_e),U.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=re.storage}}}const N=w%P;return N>0&&(w+=P-N),C.__size=w,C.__cache={},this}function I(C){const x={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(x.boundary=4,x.storage=4):C.isVector2?(x.boundary=8,x.storage=8):C.isVector3||C.isColor?(x.boundary=16,x.storage=12):C.isVector4?(x.boundary=16,x.storage=16):C.isMatrix3?(x.boundary=48,x.storage=48):C.isMatrix4?(x.boundary=64,x.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),x}function g(C){const x=C.target;x.removeEventListener("dispose",g);const w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const C in s)i.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class I_{constructor(e={}){const{canvas:t=ip(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let A;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=n.getContextAttributes().alpha}else A=o;const f=new Uint32Array(4),m=new Int32Array(4);let I=null,g=null;const p=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=Xi,this.toneMappingExposure=1;const x=this;let w=!1,P=0,N=0,D=null,T=-1,F=null;const _=new vt,v=new vt;let U=null;const H=new je(0);let z=0,$=t.width,Y=t.height,re=1,te=null,ye=null;const _e=new vt(0,0,$,Y),Le=new vt(0,0,$,Y);let Oe=!1;const we=new Cl;let se=!1,he=!1;const me=new nt,xe=new nt,Ye=new K,Xe=new vt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function $e(){return D===null?re:1}let k=n;function Kt(M,d){return t.getContext(M,d)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$o}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Se,!1),k===null){const d="webgl2";if(k=Kt(d,M),k===null)throw Kt(d)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let lt,st,qe,yt,ze,L,B,j,oe,de,ce,Ge,be,Pe,Je,pe,Re,Ke,ke,Be,rt,We,Ze,V;function ve(){lt=new xE(k),lt.init(),We=new l_(k,lt),st=new EE(k,lt,e,We),qe=new o_(k),st.reverseDepthBuffer&&qe.buffers.depth.setReversed(!0),yt=new ME(k),ze=new YI,L=new c_(k,lt,qe,ze,st,We,yt),B=new _E(x),j=new vE(x),oe=new Lp(k),Ze=new gE(k,oe),de=new SE(k,oe,yt,Ze),ce=new bE(k,de,oe,yt),ke=new wE(k,st,L),pe=new IE(ze),Ge=new VI(x,B,j,lt,st,Ze,pe),be=new m_(x,ze),Pe=new XI,Je=new ZI(lt),Ke=new pE(x,B,j,qe,ce,A,c),Re=new s_(x,ce,st),V=new E_(k,yt,st,qe),Be=new mE(k,lt,yt),rt=new BE(k,lt,yt),yt.programs=Ge.programs,x.capabilities=st,x.extensions=lt,x.properties=ze,x.renderLists=Pe,x.shadowMap=Re,x.state=qe,x.info=yt}ve();const W=new p_(x,k);this.xr=W,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const M=lt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=lt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(M){M!==void 0&&(re=M,this.setSize($,Y,!1))},this.getSize=function(M){return M.set($,Y)},this.setSize=function(M,d,E=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,Y=d,t.width=Math.floor(M*re),t.height=Math.floor(d*re),E===!0&&(t.style.width=M+"px",t.style.height=d+"px"),this.setViewport(0,0,M,d)},this.getDrawingBufferSize=function(M){return M.set($*re,Y*re).floor()},this.setDrawingBufferSize=function(M,d,E){$=M,Y=d,re=E,t.width=Math.floor(M*E),t.height=Math.floor(d*E),this.setViewport(0,0,M,d)},this.getCurrentViewport=function(M){return M.copy(_)},this.getViewport=function(M){return M.copy(_e)},this.setViewport=function(M,d,E,y){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,d,E,y),qe.viewport(_.copy(_e).multiplyScalar(re).round())},this.getScissor=function(M){return M.copy(Le)},this.setScissor=function(M,d,E,y){M.isVector4?Le.set(M.x,M.y,M.z,M.w):Le.set(M,d,E,y),qe.scissor(v.copy(Le).multiplyScalar(re).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(M){qe.setScissorTest(Oe=M)},this.setOpaqueSort=function(M){te=M},this.setTransparentSort=function(M){ye=M},this.getClearColor=function(M){return M.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(M=!0,d=!0,E=!0){let y=0;if(M){let S=!1;if(D!==null){const G=D.texture.format;S=G===gl||G===pl||G===fl}if(S){const G=D.texture.type,O=G===hn||G===Ki||G===Nr||G===As||G===Al||G===dl,q=Ke.getClearColor(),ne=Ke.getClearAlpha(),Z=q.r,ee=q.g,J=q.b;O?(f[0]=Z,f[1]=ee,f[2]=J,f[3]=ne,k.clearBufferuiv(k.COLOR,0,f)):(m[0]=Z,m[1]=ee,m[2]=J,m[3]=ne,k.clearBufferiv(k.COLOR,0,m))}else y|=k.COLOR_BUFFER_BIT}d&&(y|=k.DEPTH_BUFFER_BIT,k.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),E&&(y|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Pe.dispose(),Je.dispose(),ze.dispose(),B.dispose(),j.dispose(),ce.dispose(),Ze.dispose(),V.dispose(),Ge.dispose(),W.dispose(),W.removeEventListener("sessionstart",Is),W.removeEventListener("sessionend",Ln),_n.stop()};function le(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=yt.autoReset,d=Re.enabled,E=Re.autoUpdate,y=Re.needsUpdate,S=Re.type;ve(),yt.autoReset=M,Re.enabled=d,Re.autoUpdate=E,Re.needsUpdate=y,Re.type=S}function Se(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ut(M){const d=M.target;d.removeEventListener("dispose",ut),Tt(d)}function Tt(M){xt(M),ze.remove(M)}function xt(M){const d=ze.get(M).programs;d!==void 0&&(d.forEach(function(E){Ge.releaseProgram(E)}),M.isShaderMaterial&&Ge.releaseShaderCache(M))}this.renderBufferDirect=function(M,d,E,y,S,G){d===null&&(d=ct);const O=S.isMesh&&S.matrixWorld.determinant()<0,q=ys(M,d,E,y,S);qe.setMaterial(y,O);let ne=E.index,Z=1;if(y.wireframe===!0){if(ne=de.getWireframeAttribute(E),ne===void 0)return;Z=2}const ee=E.drawRange,J=E.attributes.position;let ue=ee.start*Z,ge=(ee.start+ee.count)*Z;G!==null&&(ue=Math.max(ue,G.start*Z),ge=Math.min(ge,(G.start+G.count)*Z)),ne!==null?(ue=Math.max(ue,0),ge=Math.min(ge,ne.count)):J!=null&&(ue=Math.max(ue,0),ge=Math.min(ge,J.count));const fe=ge-ue;if(fe<0||fe===1/0)return;Ze.setup(S,y,q,E,ne);let Ne,Ae=Be;if(ne!==null&&(Ne=oe.get(ne),Ae=rt,Ae.setIndex(Ne)),S.isMesh)y.wireframe===!0?(qe.setLineWidth(y.wireframeLinewidth*$e()),Ae.setMode(k.LINES)):Ae.setMode(k.TRIANGLES);else if(S.isLine){let ae=y.linewidth;ae===void 0&&(ae=1),qe.setLineWidth(ae*$e()),S.isLineSegments?Ae.setMode(k.LINES):S.isLineLoop?Ae.setMode(k.LINE_LOOP):Ae.setMode(k.LINE_STRIP)}else S.isPoints?Ae.setMode(k.POINTS):S.isSprite&&Ae.setMode(k.TRIANGLES);if(S.isBatchedMesh)if(S._multiDrawInstances!==null)Ae.renderMultiDrawInstances(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount,S._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))Ae.renderMultiDraw(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount);else{const ae=S._multiDrawStarts,Fe=S._multiDrawCounts,He=S._multiDrawCount,dt=ne?oe.get(ne).bytesPerElement:1,Ot=ze.get(y).currentProgram.getUniforms();for(let it=0;it<He;it++)Ot.setValue(k,"_gl_DrawID",it),Ae.render(ae[it]/dt,Fe[it])}else if(S.isInstancedMesh)Ae.renderInstances(ue,fe,S.count);else if(E.isInstancedBufferGeometry){const ae=E._maxInstanceCount!==void 0?E._maxInstanceCount:1/0,Fe=Math.min(E.instanceCount,ae);Ae.renderInstances(ue,fe,Fe)}else Ae.render(ue,fe)};function At(M,d,E){M.transparent===!0&&M.side===En&&M.forceSinglePass===!1?(M.side=$t,M.needsUpdate=!0,fi(M,d,E),M.side=oi,M.needsUpdate=!0,fi(M,d,E),M.side=En):fi(M,d,E)}this.compile=function(M,d,E=null){E===null&&(E=M),g=Je.get(E),g.init(d),C.push(g),E.traverseVisible(function(S){S.isLight&&S.layers.test(d.layers)&&(g.pushLight(S),S.castShadow&&g.pushShadow(S))}),M!==E&&M.traverseVisible(function(S){S.isLight&&S.layers.test(d.layers)&&(g.pushLight(S),S.castShadow&&g.pushShadow(S))}),g.setupLights();const y=new Set;return M.traverse(function(S){if(!(S.isMesh||S.isPoints||S.isLine||S.isSprite))return;const G=S.material;if(G)if(Array.isArray(G))for(let O=0;O<G.length;O++){const q=G[O];At(q,E,S),y.add(q)}else At(G,E,S),y.add(G)}),C.pop(),g=null,y},this.compileAsync=function(M,d,E=null){const y=this.compile(M,d,E);return new Promise(S=>{function G(){if(y.forEach(function(O){ze.get(O).currentProgram.isReady()&&y.delete(O)}),y.size===0){S(M);return}setTimeout(G,10)}lt.get("KHR_parallel_shader_compile")!==null?G():setTimeout(G,10)})};let qt=null;function In(M){qt&&qt(M)}function Is(){_n.stop()}function Ln(){_n.start()}const _n=new UA;_n.setAnimationLoop(In),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(M){qt=M,W.setAnimationLoop(M),M===null?_n.stop():_n.start()},W.addEventListener("sessionstart",Is),W.addEventListener("sessionend",Ln),this.render=function(M,d){if(d!==void 0&&d.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),d.parent===null&&d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(d),d=W.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,d,D),g=Je.get(M,C.length),g.init(d),C.push(g),xe.multiplyMatrices(d.projectionMatrix,d.matrixWorldInverse),we.setFromProjectionMatrix(xe),he=this.localClippingEnabled,se=pe.init(this.clippingPlanes,he),I=Pe.get(M,p.length),I.init(),p.push(I),W.enabled===!0&&W.isPresenting===!0){const G=x.xr.getDepthSensingMesh();G!==null&&Ji(G,d,-1/0,x.sortObjects)}Ji(M,d,0,x.sortObjects),I.finish(),x.sortObjects===!0&&I.sort(te,ye),gt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,gt&&Ke.addToRenderList(I,M),this.info.render.frame++,se===!0&&pe.beginShadows();const E=g.state.shadowsArray;Re.render(E,M,d),se===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const y=I.opaque,S=I.transmissive;if(g.setupLights(),d.isArrayCamera){const G=d.cameras;if(S.length>0)for(let O=0,q=G.length;O<q;O++){const ne=G[O];ji(y,S,M,ne)}gt&&Ke.render(M);for(let O=0,q=G.length;O<q;O++){const ne=G[O];Di(I,M,ne,ne.viewport)}}else S.length>0&&ji(y,S,M,d),gt&&Ke.render(M),Di(I,M,d);D!==null&&(L.updateMultisampleRenderTarget(D),L.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(x,M,d),Ze.resetDefaultState(),T=-1,F=null,C.pop(),C.length>0?(g=C[C.length-1],se===!0&&pe.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?I=p[p.length-1]:I=null};function Ji(M,d,E,y){if(M.visible===!1)return;if(M.layers.test(d.layers)){if(M.isGroup)E=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(d);else if(M.isLight)g.pushLight(M),M.castShadow&&g.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||we.intersectsSprite(M)){y&&Xe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(xe);const O=ce.update(M),q=M.material;q.visible&&I.push(M,O,q,E,Xe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||we.intersectsObject(M))){const O=ce.update(M),q=M.material;if(y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Xe.copy(M.boundingSphere.center)):(O.boundingSphere===null&&O.computeBoundingSphere(),Xe.copy(O.boundingSphere.center)),Xe.applyMatrix4(M.matrixWorld).applyMatrix4(xe)),Array.isArray(q)){const ne=O.groups;for(let Z=0,ee=ne.length;Z<ee;Z++){const J=ne[Z],ue=q[J.materialIndex];ue&&ue.visible&&I.push(M,O,ue,E,Xe.z,J)}}else q.visible&&I.push(M,O,q,E,Xe.z,null)}}const G=M.children;for(let O=0,q=G.length;O<q;O++)Ji(G[O],d,E,y)}function Di(M,d,E,y){const S=M.opaque,G=M.transmissive,O=M.transparent;g.setupLightsView(E),se===!0&&pe.setGlobalState(x.clippingPlanes,E),y&&qe.viewport(_.copy(y)),S.length>0&&Qi(S,d,E),G.length>0&&Qi(G,d,E),O.length>0&&Qi(O,d,E),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function ji(M,d,E,y){if((E.isScene===!0?E.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[y.id]===void 0&&(g.state.transmissionRenderTarget[y.id]=new Xn(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?ln:hn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));const G=g.state.transmissionRenderTarget[y.id],O=y.viewport||_;G.setSize(O.z,O.w);const q=x.getRenderTarget();x.setRenderTarget(G),x.getClearColor(H),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),gt&&Ke.render(E);const ne=x.toneMapping;x.toneMapping=Xi;const Z=y.viewport;if(y.viewport!==void 0&&(y.viewport=void 0),g.setupLightsView(y),se===!0&&pe.setGlobalState(x.clippingPlanes,y),Qi(M,E,y),L.updateMultisampleRenderTarget(G),L.updateRenderTargetMipmap(G),lt.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let J=0,ue=d.length;J<ue;J++){const ge=d[J],fe=ge.object,Ne=ge.geometry,Ae=ge.material,ae=ge.group;if(Ae.side===En&&fe.layers.test(y.layers)){const Fe=Ae.side;Ae.side=$t,Ae.needsUpdate=!0,_s(fe,E,y,Ne,Ae,ae),Ae.side=Fe,Ae.needsUpdate=!0,ee=!0}}ee===!0&&(L.updateMultisampleRenderTarget(G),L.updateRenderTargetMipmap(G))}x.setRenderTarget(q),x.setClearColor(H,z),Z!==void 0&&(y.viewport=Z),x.toneMapping=ne}function Qi(M,d,E){const y=d.isScene===!0?d.overrideMaterial:null;for(let S=0,G=M.length;S<G;S++){const O=M[S],q=O.object,ne=O.geometry,Z=y===null?O.material:y,ee=O.group;q.layers.test(E.layers)&&_s(q,d,E,ne,Z,ee)}}function _s(M,d,E,y,S,G){M.onBeforeRender(x,d,E,y,S,G),M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),S.onBeforeRender(x,d,E,y,M,G),S.transparent===!0&&S.side===En&&S.forceSinglePass===!1?(S.side=$t,S.needsUpdate=!0,x.renderBufferDirect(E,d,y,S,M,G),S.side=oi,S.needsUpdate=!0,x.renderBufferDirect(E,d,y,S,M,G),S.side=En):x.renderBufferDirect(E,d,y,S,M,G),M.onAfterRender(x,d,E,y,S,G)}function fi(M,d,E){d.isScene!==!0&&(d=ct);const y=ze.get(M),S=g.state.lights,G=g.state.shadowsArray,O=S.state.version,q=Ge.getParameters(M,S.state,G,d,E),ne=Ge.getProgramCacheKey(q);let Z=y.programs;y.environment=M.isMeshStandardMaterial?d.environment:null,y.fog=d.fog,y.envMap=(M.isMeshStandardMaterial?j:B).get(M.envMap||y.environment),y.envMapRotation=y.environment!==null&&M.envMap===null?d.environmentRotation:M.envMapRotation,Z===void 0&&(M.addEventListener("dispose",ut),Z=new Map,y.programs=Z);let ee=Z.get(ne);if(ee!==void 0){if(y.currentProgram===ee&&y.lightsStateVersion===O)return $i(M,q),ee}else q.uniforms=Ge.getUniforms(M),M.onBeforeCompile(q,x),ee=Ge.acquireProgram(q,ne),Z.set(ne,ee),y.uniforms=q.uniforms;const J=y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(J.clippingPlanes=pe.uniform),$i(M,q),y.needsLights=Nn(M),y.lightsStateVersion=O,y.needsLights&&(J.ambientLightColor.value=S.state.ambient,J.lightProbe.value=S.state.probe,J.directionalLights.value=S.state.directional,J.directionalLightShadows.value=S.state.directionalShadow,J.spotLights.value=S.state.spot,J.spotLightShadows.value=S.state.spotShadow,J.rectAreaLights.value=S.state.rectArea,J.ltc_1.value=S.state.rectAreaLTC1,J.ltc_2.value=S.state.rectAreaLTC2,J.pointLights.value=S.state.point,J.pointLightShadows.value=S.state.pointShadow,J.hemisphereLights.value=S.state.hemi,J.directionalShadowMap.value=S.state.directionalShadowMap,J.directionalShadowMatrix.value=S.state.directionalShadowMatrix,J.spotShadowMap.value=S.state.spotShadowMap,J.spotLightMatrix.value=S.state.spotLightMatrix,J.spotLightMap.value=S.state.spotLightMap,J.pointShadowMap.value=S.state.pointShadowMap,J.pointShadowMatrix.value=S.state.pointShadowMatrix),y.currentProgram=ee,y.uniformsList=null,ee}function Cs(M){if(M.uniformsList===null){const d=M.currentProgram.getUniforms();M.uniformsList=No.seqWithValue(d.seq,M.uniforms)}return M.uniformsList}function $i(M,d){const E=ze.get(M);E.outputColorSpace=d.outputColorSpace,E.batching=d.batching,E.batchingColor=d.batchingColor,E.instancing=d.instancing,E.instancingColor=d.instancingColor,E.instancingMorph=d.instancingMorph,E.skinning=d.skinning,E.morphTargets=d.morphTargets,E.morphNormals=d.morphNormals,E.morphColors=d.morphColors,E.morphTargetsCount=d.morphTargetsCount,E.numClippingPlanes=d.numClippingPlanes,E.numIntersection=d.numClipIntersection,E.vertexAlphas=d.vertexAlphas,E.vertexTangents=d.vertexTangents,E.toneMapping=d.toneMapping}function ys(M,d,E,y,S){d.isScene!==!0&&(d=ct),L.resetTextureUnits();const G=d.fog,O=y.isMeshStandardMaterial?d.environment:null,q=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Nt,ne=(y.isMeshStandardMaterial?j:B).get(y.envMap||O),Z=y.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,ee=!!E.attributes.tangent&&(!!y.normalMap||y.anisotropy>0),J=!!E.morphAttributes.position,ue=!!E.morphAttributes.normal,ge=!!E.morphAttributes.color;let fe=Xi;y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(fe=x.toneMapping);const Ne=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,Ae=Ne!==void 0?Ne.length:0,ae=ze.get(y),Fe=g.state.lights;if(se===!0&&(he===!0||M!==F)){const et=M===F&&y.id===T;pe.setState(y,M,et)}let He=!1;y.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Fe.state.version||ae.outputColorSpace!==q||S.isBatchedMesh&&ae.batching===!1||!S.isBatchedMesh&&ae.batching===!0||S.isBatchedMesh&&ae.batchingColor===!0&&S.colorTexture===null||S.isBatchedMesh&&ae.batchingColor===!1&&S.colorTexture!==null||S.isInstancedMesh&&ae.instancing===!1||!S.isInstancedMesh&&ae.instancing===!0||S.isSkinnedMesh&&ae.skinning===!1||!S.isSkinnedMesh&&ae.skinning===!0||S.isInstancedMesh&&ae.instancingColor===!0&&S.instanceColor===null||S.isInstancedMesh&&ae.instancingColor===!1&&S.instanceColor!==null||S.isInstancedMesh&&ae.instancingMorph===!0&&S.morphTexture===null||S.isInstancedMesh&&ae.instancingMorph===!1&&S.morphTexture!==null||ae.envMap!==ne||y.fog===!0&&ae.fog!==G||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==pe.numPlanes||ae.numIntersection!==pe.numIntersection)||ae.vertexAlphas!==Z||ae.vertexTangents!==ee||ae.morphTargets!==J||ae.morphNormals!==ue||ae.morphColors!==ge||ae.toneMapping!==fe||ae.morphTargetsCount!==Ae)&&(He=!0):(He=!0,ae.__version=y.version);let dt=ae.currentProgram;He===!0&&(dt=fi(y,d,S));let Ot=!1,it=!1,ht=!1;const tt=dt.getUniforms(),Ft=ae.uniforms;if(qe.useProgram(dt.program)&&(Ot=!0,it=!0,ht=!0),y.id!==T&&(T=y.id,it=!0),Ot||F!==M){st.reverseDepthBuffer?(me.copy(M.projectionMatrix),rp(me),op(me),tt.setValue(k,"projectionMatrix",me)):tt.setValue(k,"projectionMatrix",M.projectionMatrix),tt.setValue(k,"viewMatrix",M.matrixWorldInverse);const et=tt.map.cameraPosition;et!==void 0&&et.setValue(k,Ye.setFromMatrixPosition(M.matrixWorld)),st.logarithmicDepthBuffer&&tt.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(y.isMeshPhongMaterial||y.isMeshToonMaterial||y.isMeshLambertMaterial||y.isMeshBasicMaterial||y.isMeshStandardMaterial||y.isShaderMaterial)&&tt.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),F!==M&&(F=M,it=!0,ht=!0)}if(S.isSkinnedMesh){tt.setOptional(k,S,"bindMatrix"),tt.setOptional(k,S,"bindMatrixInverse");const et=S.skeleton;et&&(et.boneTexture===null&&et.computeBoneTexture(),tt.setValue(k,"boneTexture",et.boneTexture,L))}S.isBatchedMesh&&(tt.setOptional(k,S,"batchingTexture"),tt.setValue(k,"batchingTexture",S._matricesTexture,L),tt.setOptional(k,S,"batchingIdTexture"),tt.setValue(k,"batchingIdTexture",S._indirectTexture,L),tt.setOptional(k,S,"batchingColorTexture"),S._colorsTexture!==null&&tt.setValue(k,"batchingColorTexture",S._colorsTexture,L));const Pt=E.morphAttributes;if((Pt.position!==void 0||Pt.normal!==void 0||Pt.color!==void 0)&&ke.update(S,E,dt),(it||ae.receiveShadow!==S.receiveShadow)&&(ae.receiveShadow=S.receiveShadow,tt.setValue(k,"receiveShadow",S.receiveShadow)),y.isMeshGouraudMaterial&&y.envMap!==null&&(Ft.envMap.value=ne,Ft.flipEnvMap.value=ne.isCubeTexture&&ne.isRenderTargetTexture===!1?-1:1),y.isMeshStandardMaterial&&y.envMap===null&&d.environment!==null&&(Ft.envMapIntensity.value=d.environmentIntensity),it&&(tt.setValue(k,"toneMappingExposure",x.toneMappingExposure),ae.needsLights&&ur(Ft,ht),G&&y.fog===!0&&be.refreshFogUniforms(Ft,G),be.refreshMaterialUniforms(Ft,y,re,Y,g.state.transmissionRenderTarget[M.id]),No.upload(k,Cs(ae),Ft,L)),y.isShaderMaterial&&y.uniformsNeedUpdate===!0&&(No.upload(k,Cs(ae),Ft,L),y.uniformsNeedUpdate=!1),y.isSpriteMaterial&&tt.setValue(k,"center",S.center),tt.setValue(k,"modelViewMatrix",S.modelViewMatrix),tt.setValue(k,"normalMatrix",S.normalMatrix),tt.setValue(k,"modelMatrix",S.matrixWorld),y.isShaderMaterial||y.isRawShaderMaterial){const et=y.uniformsGroups;for(let _t=0,Cn=et.length;_t<Cn;_t++){const Jn=et[_t];V.update(Jn,dt),V.bind(Jn,dt)}}return dt}function ur(M,d){M.ambientLightColor.needsUpdate=d,M.lightProbe.needsUpdate=d,M.directionalLights.needsUpdate=d,M.directionalLightShadows.needsUpdate=d,M.pointLights.needsUpdate=d,M.pointLightShadows.needsUpdate=d,M.spotLights.needsUpdate=d,M.spotLightShadows.needsUpdate=d,M.rectAreaLights.needsUpdate=d,M.hemisphereLights.needsUpdate=d}function Nn(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,d,E){ze.get(M.texture).__webglTexture=d,ze.get(M.depthTexture).__webglTexture=E;const y=ze.get(M);y.__hasExternalTextures=!0,y.__autoAllocateDepthBuffer=E===void 0,y.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,d){const E=ze.get(M);E.__webglFramebuffer=d,E.__useDefaultFramebuffer=d===void 0},this.setRenderTarget=function(M,d=0,E=0){D=M,P=d,N=E;let y=!0,S=null,G=!1,O=!1;if(M){const ne=ze.get(M);if(ne.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(k.FRAMEBUFFER,null),y=!1;else if(ne.__webglFramebuffer===void 0)L.setupRenderTarget(M);else if(ne.__hasExternalTextures)L.rebindTextures(M,ze.get(M.texture).__webglTexture,ze.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const J=M.depthTexture;if(ne.__boundDepthTexture!==J){if(J!==null&&ze.has(J)&&(M.width!==J.image.width||M.height!==J.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(M)}}const Z=M.texture;(Z.isData3DTexture||Z.isDataArrayTexture||Z.isCompressedArrayTexture)&&(O=!0);const ee=ze.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ee[d])?S=ee[d][E]:S=ee[d],G=!0):M.samples>0&&L.useMultisampledRTT(M)===!1?S=ze.get(M).__webglMultisampledFramebuffer:Array.isArray(ee)?S=ee[E]:S=ee,_.copy(M.viewport),v.copy(M.scissor),U=M.scissorTest}else _.copy(_e).multiplyScalar(re).floor(),v.copy(Le).multiplyScalar(re).floor(),U=Oe;if(qe.bindFramebuffer(k.FRAMEBUFFER,S)&&y&&qe.drawBuffers(M,S),qe.viewport(_),qe.scissor(v),qe.setScissorTest(U),G){const ne=ze.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+d,ne.__webglTexture,E)}else if(O){const ne=ze.get(M.texture),Z=d||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ne.__webglTexture,E||0,Z)}T=-1},this.readRenderTargetPixels=function(M,d,E,y,S,G,O){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let q=ze.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&O!==void 0&&(q=q[O]),q){qe.bindFramebuffer(k.FRAMEBUFFER,q);try{const ne=M.texture,Z=ne.format,ee=ne.type;if(!st.textureFormatReadable(Z)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}d>=0&&d<=M.width-y&&E>=0&&E<=M.height-S&&k.readPixels(d,E,y,S,We.convert(Z),We.convert(ee),G)}finally{const ne=D!==null?ze.get(D).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(M,d,E,y,S,G,O){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let q=ze.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&O!==void 0&&(q=q[O]),q){const ne=M.texture,Z=ne.format,ee=ne.type;if(!st.textureFormatReadable(Z))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(d>=0&&d<=M.width-y&&E>=0&&E<=M.height-S){qe.bindFramebuffer(k.FRAMEBUFFER,q);const J=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,J),k.bufferData(k.PIXEL_PACK_BUFFER,G.byteLength,k.STREAM_READ),k.readPixels(d,E,y,S,We.convert(Z),We.convert(ee),0);const ue=D!==null?ze.get(D).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,ue);const ge=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await sp(k,ge,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,J),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,G),k.deleteBuffer(J),k.deleteSync(ge),G}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,d=null,E=0){M.isTexture!==!0&&(Lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),d=arguments[0]||null,M=arguments[1]);const y=Math.pow(2,-E),S=Math.floor(M.image.width*y),G=Math.floor(M.image.height*y),O=d!==null?d.x:0,q=d!==null?d.y:0;L.setTexture2D(M,0),k.copyTexSubImage2D(k.TEXTURE_2D,E,0,0,O,q,S,G),qe.unbindTexture()},this.copyTextureToTexture=function(M,d,E=null,y=null,S=0){M.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture function signature has changed."),y=arguments[0]||null,M=arguments[1],d=arguments[2],S=arguments[3]||0,E=null);let G,O,q,ne,Z,ee;E!==null?(G=E.max.x-E.min.x,O=E.max.y-E.min.y,q=E.min.x,ne=E.min.y):(G=M.image.width,O=M.image.height,q=0,ne=0),y!==null?(Z=y.x,ee=y.y):(Z=0,ee=0);const J=We.convert(d.format),ue=We.convert(d.type);L.setTexture2D(d,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,d.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,d.unpackAlignment);const ge=k.getParameter(k.UNPACK_ROW_LENGTH),fe=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ne=k.getParameter(k.UNPACK_SKIP_PIXELS),Ae=k.getParameter(k.UNPACK_SKIP_ROWS),ae=k.getParameter(k.UNPACK_SKIP_IMAGES),Fe=M.isCompressedTexture?M.mipmaps[S]:M.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Fe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Fe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,q),k.pixelStorei(k.UNPACK_SKIP_ROWS,ne),M.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,S,Z,ee,G,O,J,ue,Fe.data):M.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,S,Z,ee,Fe.width,Fe.height,J,Fe.data):k.texSubImage2D(k.TEXTURE_2D,S,Z,ee,G,O,J,ue,Fe),k.pixelStorei(k.UNPACK_ROW_LENGTH,ge),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,fe),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ne),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ae),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ae),S===0&&d.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),qe.unbindTexture()},this.copyTextureToTexture3D=function(M,d,E=null,y=null,S=0){M.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),E=arguments[0]||null,y=arguments[1]||null,M=arguments[2],d=arguments[3],S=arguments[4]||0);let G,O,q,ne,Z,ee,J,ue,ge;const fe=M.isCompressedTexture?M.mipmaps[S]:M.image;E!==null?(G=E.max.x-E.min.x,O=E.max.y-E.min.y,q=E.max.z-E.min.z,ne=E.min.x,Z=E.min.y,ee=E.min.z):(G=fe.width,O=fe.height,q=fe.depth,ne=0,Z=0,ee=0),y!==null?(J=y.x,ue=y.y,ge=y.z):(J=0,ue=0,ge=0);const Ne=We.convert(d.format),Ae=We.convert(d.type);let ae;if(d.isData3DTexture)L.setTexture3D(d,0),ae=k.TEXTURE_3D;else if(d.isDataArrayTexture||d.isCompressedArrayTexture)L.setTexture2DArray(d,0),ae=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,d.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,d.unpackAlignment);const Fe=k.getParameter(k.UNPACK_ROW_LENGTH),He=k.getParameter(k.UNPACK_IMAGE_HEIGHT),dt=k.getParameter(k.UNPACK_SKIP_PIXELS),Ot=k.getParameter(k.UNPACK_SKIP_ROWS),it=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,fe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,fe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ne),k.pixelStorei(k.UNPACK_SKIP_ROWS,Z),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ee),M.isDataTexture||M.isData3DTexture?k.texSubImage3D(ae,S,J,ue,ge,G,O,q,Ne,Ae,fe.data):d.isCompressedArrayTexture?k.compressedTexSubImage3D(ae,S,J,ue,ge,G,O,q,Ne,fe.data):k.texSubImage3D(ae,S,J,ue,ge,G,O,q,Ne,Ae,fe),k.pixelStorei(k.UNPACK_ROW_LENGTH,Fe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,He),k.pixelStorei(k.UNPACK_SKIP_PIXELS,dt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ot),k.pixelStorei(k.UNPACK_SKIP_IMAGES,it),S===0&&d.generateMipmaps&&k.generateMipmap(ae),qe.unbindTexture()},this.initRenderTarget=function(M){ze.get(M).__webglFramebuffer===void 0&&L.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?L.setTextureCube(M,0):M.isData3DTexture?L.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?L.setTexture2DArray(M,0):L.setTexture2D(M,0),qe.unbindTexture()},this.resetState=function(){P=0,N=0,D=null,qe.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ml?"display-p3":"srgb",t.unpackColorSpace=It.workingColorSpace===ta?"display-p3":"srgb"}}class jc extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class __{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qc,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new K;class xl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Kh=new K,qh=new vt,Jh=new vt,C_=new K,jh=new nt,po=new K,ka=new li,$h=new nt,za=new ar;class y_ extends Gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=th,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,po),this.boundingBox.expandByPoint(po)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,po),this.boundingSphere.expandByPoint(po)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ka.copy(this.boundingSphere),ka.applyMatrix4(s),e.ray.intersectsSphere(ka)!==!1&&($h.copy(s).invert(),za.copy(e.ray).applyMatrix4($h),!(this.boundingBox!==null&&za.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,za)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===th?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;qh.fromBufferAttribute(s.attributes.skinIndex,e),Jh.fromBufferAttribute(s.attributes.skinWeight,e),Kh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Jh.getComponent(r);if(o!==0){const a=qh.getComponent(r);jh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(C_.copy(Kh).applyMatrix4(jh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class kA extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ra extends zt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=fn,h=fn,u,A){super(null,o,a,c,l,h,s,r,u,A),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zh=new nt,v_=new nt;class Sl{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:v_;Zh.multiplyMatrices(a,t[r]),Zh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Sl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ra(t,e,e,Bn,Zt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new kA),this.bones.push(o),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class $c extends Yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Os=new nt,eu=new nt,go=[],tu=new bi,x_=new nt,Er=new Gt,Ir=new li;class S_ extends Gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,x_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Os),tu.copy(e.boundingBox).applyMatrix4(Os),this.boundingBox.union(tu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Os),Ir.copy(e.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(Ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),e.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),eu.multiplyMatrices(n,Os),Er.matrixWorld=eu,Er.raycast(e,go);for(let o=0,a=go.length;o<a;o++){const c=go[o];c.instanceId=r,c.object=this,t.push(c)}go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ra(new Float32Array(s*this.count),s,this.count,ea,Zt));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class zA extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vo=new K,Yo=new K,nu=new nt,_r=new ar,mo=new li,Va=new K,iu=new K;class Bl extends Ut{constructor(e=new nn,t=new zA){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Vo.fromBufferAttribute(t,s-1),Yo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Vo.distanceTo(Yo);e.setAttribute("lineDistance",new en(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;nu.copy(s).invert(),_r.copy(e.ray).applyMatrix4(nu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,A=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let I=f,g=m-1;I<g;I+=l){const p=h.getX(I),C=h.getX(I+1),x=Eo(this,e,_r,c,p,C);x&&t.push(x)}if(this.isLineLoop){const I=h.getX(m-1),g=h.getX(f),p=Eo(this,e,_r,c,I,g);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(A.count,o.start+o.count);for(let I=f,g=m-1;I<g;I+=l){const p=Eo(this,e,_r,c,I,I+1);p&&t.push(p)}if(this.isLineLoop){const I=Eo(this,e,_r,c,m-1,f);I&&t.push(I)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Eo(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(Vo.fromBufferAttribute(o,s),Yo.fromBufferAttribute(o,r),t.distanceSqToSegment(Vo,Yo,Va,iu)>n)return;Va.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Va);if(!(c<e.near||c>e.far))return{distance:c,point:iu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const su=new K,ru=new K;class B_ extends Bl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)su.fromBufferAttribute(t,s),ru.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+su.distanceTo(ru);e.setAttribute("lineDistance",new en(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class M_ extends Bl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class VA extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ou=new nt,Zc=new ar,Io=new li,_o=new K;class w_ extends Ut{constructor(e=new nn,t=new VA){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(s),Io.radius+=r,e.ray.intersectsSphere(Io)===!1)return;ou.copy(s).invert(),Zc.copy(e.ray).applyMatrix4(ou);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const A=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=A,I=f;m<I;m++){const g=l.getX(m);_o.fromBufferAttribute(u,g),au(_o,g,c,s,e,t,this)}}else{const A=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=A,I=f;m<I;m++)_o.fromBufferAttribute(u,m),au(_o,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function au(i,e,t,n,s,r,o){const a=Zc.distanceSqToPoint(i);if(a<t){const c=new K;Zc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ml extends nn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],A=[],f=[];let m=0;const I=[],g=n/2;let p=0;C(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new en(u,3)),this.setAttribute("normal",new en(A,3)),this.setAttribute("uv",new en(f,2));function C(){const w=new K,P=new K;let N=0;const D=(t-e)/n;for(let T=0;T<=r;T++){const F=[],_=T/r,v=_*(t-e)+e;for(let U=0;U<=s;U++){const H=U/s,z=H*c+a,$=Math.sin(z),Y=Math.cos(z);P.x=v*$,P.y=-_*n+g,P.z=v*Y,u.push(P.x,P.y,P.z),w.set($,D,Y).normalize(),A.push(w.x,w.y,w.z),f.push(H,1-_),F.push(m++)}I.push(F)}for(let T=0;T<s;T++)for(let F=0;F<r;F++){const _=I[F][T],v=I[F+1][T],U=I[F+1][T+1],H=I[F][T+1];e>0&&(h.push(_,v,H),N+=3),t>0&&(h.push(v,U,H),N+=3)}l.addGroup(p,N,0),p+=N}function x(w){const P=m,N=new Ve,D=new K;let T=0;const F=w===!0?e:t,_=w===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,g*_,0),A.push(0,_,0),f.push(.5,.5),m++;const v=m;for(let U=0;U<=s;U++){const z=U/s*c+a,$=Math.cos(z),Y=Math.sin(z);D.x=F*Y,D.y=g*_,D.z=F*$,u.push(D.x,D.y,D.z),A.push(0,_,0),N.x=$*.5+.5,N.y=Y*.5*_+.5,f.push(N.x,N.y),m++}for(let U=0;U<s;U++){const H=P+U,z=v+U;w===!0?h.push(z,z+1,H):h.push(z+1,z,H),T+=3}l.addGroup(p,T,w===!0?1:2),p+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wo extends nn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new K,A=new K,f=[],m=[],I=[],g=[];for(let p=0;p<=n;p++){const C=[],x=p/n;let w=0;p===0&&o===0?w=.5/t:p===n&&c===Math.PI&&(w=-.5/t);for(let P=0;P<=t;P++){const N=P/t;u.x=-e*Math.cos(s+N*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+N*r)*Math.sin(o+x*a),m.push(u.x,u.y,u.z),A.copy(u).normalize(),I.push(A.x,A.y,A.z),g.push(N+w,1-x),C.push(l++)}h.push(C)}for(let p=0;p<n;p++)for(let C=0;C<t;C++){const x=h[p][C+1],w=h[p][C],P=h[p+1][C],N=h[p+1][C+1];(p!==0||o>0)&&f.push(x,w,N),(p!==n-1||c<Math.PI)&&f.push(w,P,N)}this.setIndex(f),this.setAttribute("position",new en(m,3)),this.setAttribute("normal",new en(I,3)),this.setAttribute("uv",new en(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oa extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=MA,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hi extends oa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Co(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function b_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function T_(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function cu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function YA(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class zr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class R_ extends zr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nh,endingEnd:nh}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ih:r=e,a=2*t-n;break;case sh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ih:o=e,c=2*n-t;break;case sh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,A=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),I=m*m,g=I*m,p=-A*g+2*A*I-A*m,C=(1+A)*g+(-1.5-2*A)*I+(-.5+A)*m+1,x=(-1-f)*g+(1.5+f)*I+.5*m,w=f*g-f*I;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+C*o[l+P]+x*o[c+P]+w*o[u+P];return r}}class D_ extends zr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let A=0;A!==a;++A)r[A]=o[l+A]*u+o[c+A]*h;return r}}class Q_ extends zr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ui{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Co(t,this.TimeBufferType),this.values=Co(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Co(e.times,Array),values:Co(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Q_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new D_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new R_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case Ur:t=this.InterpolantFactoryMethodLinear;break;case da:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Ur;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&b_(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===da,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*n,A=u-n,f=u+n;for(let m=0;m!==n;++m){const I=t[u+m];if(I!==t[A+m]||I!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,A=o*n;for(let f=0;f!==n;++f)t[A+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=Ur;class lr extends ui{constructor(e,t,n){super(e,t,n)}}lr.prototype.ValueTypeName="bool";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=Pr;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;class WA extends ui{}WA.prototype.ValueTypeName="color";class nr extends ui{}nr.prototype.ValueTypeName="number";class L_ extends zr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)ai.slerpFlat(r,0,o,l-a,o,l,c);return r}}class ir extends ui{InterpolantFactoryMethodLinear(e){return new L_(this.times,this.values,this.getValueSize(),e)}}ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;class hr extends ui{constructor(e,t,n){super(e,t,n)}}hr.prototype.ValueTypeName="string";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=Pr;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends ui{}sr.prototype.ValueTypeName="vector";class N_{constructor(e="",t=-1,n=[],s=Tf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Wn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(U_(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ui.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=T_(c);c=cu(c,1,h),l=cu(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new nr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let A=s[u];A||(s[u]=A=[]),A.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,A,f,m,I){if(f.length!==0){const g=[],p=[];YA(f,g,p,m),g.length!==0&&I.push(new u(A,g,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const A=l[u].keys;if(!(!A||A.length===0))if(A[0].morphTargets){const f={};let m;for(m=0;m<A.length;m++)if(A[m].morphTargets)for(let I=0;I<A[m].morphTargets.length;I++)f[A[m].morphTargets[I]]=-1;for(const I in f){const g=[],p=[];for(let C=0;C!==A[m].morphTargets.length;++C){const x=A[m];g.push(x.time),p.push(x.morphTarget===I?1:0)}s.push(new nr(".morphTargetInfluence["+I+"]",g,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(sr,f+".position",A,"pos",s),n(ir,f+".quaternion",A,"rot",s),n(sr,f+".scale",A,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function P_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return nr;case"vector":case"vector2":case"vector3":case"vector4":return sr;case"color":return WA;case"quaternion":return ir;case"bool":case"boolean":return lr;case"string":return hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function U_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=P_(i.type);if(i.times===void 0){const t=[],n=[];YA(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Wi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class F_{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,A=l.length;u<A;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const O_=new F_;class Ai{constructor(e){this.manager=e!==void 0?e:O_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ai.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ci={};class G_ extends Error{constructor(e,t){super(e),this.response=t}}class rr extends Ai{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Wi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:s});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Ci[e],u=l.body.getReader(),A=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=A?parseInt(A):0,m=f!==0;let I=0;const g=new ReadableStream({start(p){C();function C(){u.read().then(({done:x,value:w})=>{if(x)p.close();else{I+=w.byteLength;const P=new ProgressEvent("progress",{lengthComputable:m,loaded:I,total:f});for(let N=0,D=h.length;N<D;N++){const T=h[N];T.onProgress&&T.onProgress(P)}p.enqueue(w),C()}},x=>{p.error(x)})}}});return new Response(g)}else throw new G_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),A=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(A);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Wi.add(e,l);const h=Ci[e];delete Ci[e];for(let u=0,A=h.length;u<A;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Ci[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ci[e];for(let u=0,A=h.length;u<A;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class XA extends Ai{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Wi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Fr("img");function c(){h(),Wi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class H_ extends Ai{constructor(e){super(e)}load(e,t,n,s){const r=new na;r.colorSpace=Et;const o=new XA(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(h){r.images[l]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let l=0;l<e.length;++l)c(l);return r}}class KA extends Ai{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new ra,a=new rr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:ti,o.wrapT=l.wrapT!==void 0?l.wrapT:ti,o.magFilter=l.magFilter!==void 0?l.magFilter:bt,o.minFilter=l.minFilter!==void 0?l.minFilter:bt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=ni),l.mipmapCount===1&&(o.minFilter=bt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,s),o}}class wl extends Ai{constructor(e){super(e)}load(e,t,n,s){const r=new zt,o=new XA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class aa extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class k_ extends aa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ya=new nt,lu=new K,hu=new K;class bl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cl,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(lu),hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hu),t.updateMatrixWorld(),Ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class z_ extends bl{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Zs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class V_ extends aa{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new z_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const uu=new nt,Cr=new K,Wa=new K;class Y_ extends bl{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Cr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cr),Wa.copy(n.position),Wa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wa),n.updateMatrixWorld(),s.makeTranslation(-Cr.x,-Cr.y,-Cr.z),uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu)}}class W_ extends aa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Y_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class X_ extends bl{constructor(){super(new ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qA extends aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new X_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class K_ extends Ai{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Wi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Wi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Wi.add(e,c),r.manager.itemStart(e)}}const Tl="\\[\\]\\.:\\/",q_=new RegExp("["+Tl+"]","g"),Rl="[^"+Tl+"]",J_="[^"+Tl.replace("\\.","")+"]",j_=/((?:WC+[\/:])*)/.source.replace("WC",Rl),$_=/(WCOD+)?/.source.replace("WCOD",J_),Z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl),e0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl),t0=new RegExp("^"+j_+$_+Z_+e0+"$"),n0=["material","materials","bones","map"];class i0{constructor(e,t,n){const s=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(q_,"")}static parseTrackName(e){const t=t0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);n0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=i0;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class dn{constructor(e){this.value=e}clone(){return new dn(this.value.clone===void 0?this.value:this.value.clone())}}const Au=new nt;class s0{constructor(e,t,n=0,s=1/0){this.ray=new ar(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Il,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Au.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Au),this}intersectObject(e,t=!0,n=[]){return el(e,this,n,t),n.sort(du),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)el(e[s],this,n,t);return n.sort(du),n}}function du(i,e){return i.distance-e.distance}function el(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)el(r[o],e,t,!0)}}class fu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class r0 extends wi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$o);/**
 * postprocessing v6.37.6 build Fri Jul 04 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var Xa=1/1e3,o0=1e3,a0=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(i){typeof document<"u"&&document.hidden!==void 0&&(i?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=i)}get delta(){return this._delta*Xa}get fixedDelta(){return this._fixedDelta*Xa}set fixedDelta(i){this._fixedDelta=i*o0}get elapsed(){return this._elapsed*Xa}update(i){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(i!==void 0?i:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(i){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},c0=(()=>{const i=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new nn;return t.setAttribute("position",new Yt(i,3)),t.setAttribute("uv",new Yt(e,2)),t})(),qi=class tl{static get fullscreenGeometry(){return c0}constructor(e="Pass",t=new jc,n=new _l){this.name=e,this.renderer=null,this.scene=t,this.camera=n,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Gt(tl.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new jc),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=kr){}render(e,t,n,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,n){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Xn||t instanceof Rn||t instanceof zt||t instanceof tl)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},l0=class extends qi{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(i,e,t,n,s){const r=i.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},h0=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,u0="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",A0=class extends Kn{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new dn(null),opacity:new dn(1)},blending:ii,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:h0,vertexShader:u0})}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}getOpacity(i){return this.uniforms.opacity.value}setOpacity(i){this.uniforms.opacity.value=i}},d0=class extends qi{constructor(i,e=!0){super("CopyPass"),this.fullscreenMaterial=new A0,this.needsSwap=!1,this.renderTarget=i,i===void 0&&(this.renderTarget=new Xn(1,1,{minFilter:bt,magFilter:bt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(i){this.autoResize=i}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(i){this.autoResize=i}render(i,e,t,n,s){this.fullscreenMaterial.inputBuffer=e.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){this.autoResize&&this.renderTarget.setSize(i,e)}initialize(i,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==hn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":i!==null&&i.outputColorSpace===Et&&(this.renderTarget.texture.colorSpace=Et))}},pu=new je,JA=class extends qi{constructor(i=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=i,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(i,e,t){this.color=i,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(i){this.overrideClearColor=i}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(i){this.overrideClearAlpha=i}render(i,e,t,n,s){const r=this.overrideClearColor,o=this.overrideClearAlpha,a=i.getClearAlpha(),c=r!==null,l=o>=0;c?(i.getClearColor(pu),i.setClearColor(r,l?o:a)):l&&i.setClearAlpha(o),i.setRenderTarget(this.renderToScreen?null:e),i.clear(this.color,this.depth,this.stencil),c?i.setClearColor(pu,a):l&&i.setClearAlpha(a)}},f0=class extends qi{constructor(i,e){super("MaskPass",i,e),this.needsSwap=!1,this.clearPass=new JA(!1,!1,!0),this.inverse=!1}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get inverted(){return this.inverse}set inverted(i){this.inverse=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(i){this.inverted=i}render(i,e,t,n,s){const r=i.getContext(),o=i.state.buffers,a=this.scene,c=this.camera,l=this.clearPass,h=this.inverted?0:1,u=1-h;o.color.setMask(!1),o.depth.setMask(!1),o.color.setLocked(!0),o.depth.setLocked(!0),o.stencil.setTest(!0),o.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.stencil.setFunc(r.ALWAYS,h,4294967295),o.stencil.setClear(u),o.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?l.render(i,null):(l.render(i,e),l.render(i,t))),this.renderToScreen?(i.setRenderTarget(null),i.render(a,c)):(i.setRenderTarget(e),i.render(a,c),i.setRenderTarget(t),i.render(a,c)),o.color.setLocked(!1),o.depth.setLocked(!1),o.stencil.setLocked(!1),o.stencil.setFunc(r.EQUAL,1,4294967295),o.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.stencil.setLocked(!0)}},p0=class{constructor(i=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:n=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,n),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new d0,this.depthTexture=null,this.passes=[],this.timer=new a0,this.autoRenderToScreen=!0,this.setRenderer(i)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(i){const e=this.inputBuffer,t=this.multisampling;t>0&&i>0?(this.inputBuffer.samples=i,this.outputBuffer.samples=i,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==i&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,i),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(i){if(this.renderer=i,i!==null){const e=i.getSize(new Ve),t=i.getContext().getContextAttributes().alpha,n=this.inputBuffer.texture.type;n===hn&&i.outputColorSpace===Et&&(this.inputBuffer.texture.colorSpace=Et,this.outputBuffer.texture.colorSpace=Et,this.inputBuffer.dispose(),this.outputBuffer.dispose()),i.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(i,t,n)}}replaceRenderer(i,e=!0){const t=this.renderer,n=t.domElement.parentNode;return this.setRenderer(i),e&&n!==null&&(n.removeChild(t.domElement),n.appendChild(i.domElement)),t}createDepthTexture(){const i=this.depthTexture=new vl;return this.inputBuffer.depthTexture=i,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(i.format=ds,i.type=As):i.type=Ki,i}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const i of this.passes)i.setDepthTexture(null)}}createBuffer(i,e,t,n){const s=this.renderer,r=s===null?new Ve:s.getDrawingBufferSize(new Ve),o={minFilter:bt,magFilter:bt,stencilBuffer:e,depthBuffer:i,type:t},a=new Xn(r.width,r.height,o);return n>0&&(a.ignoreDepthForMultisampleCopy=!1,a.samples=n),t===hn&&s!==null&&s.outputColorSpace===Et&&(a.texture.colorSpace=Et),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(i){for(const e of this.passes)e.mainScene=i}setMainCamera(i){for(const e of this.passes)e.mainCamera=i}addPass(i,e){const t=this.passes,n=this.renderer,s=n.getDrawingBufferSize(new Ve),r=n.getContext().getContextAttributes().alpha,o=this.inputBuffer.texture.type;if(i.setRenderer(n),i.setSize(s.width,s.height),i.initialize(n,r,o),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),i.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,i):t.push(i),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),i.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const a=this.createDepthTexture();for(i of t)i.setDepthTexture(a)}else i.setDepthTexture(this.depthTexture)}removePass(i){const e=this.passes,t=e.indexOf(i);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const r=(a,c)=>a||c.needsDepthTexture;e.reduce(r,!1)||(i.getDepthTexture()===this.depthTexture&&i.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(i.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const i=this.passes;this.deleteDepthTexture(),i.length>0&&(this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!1),this.passes=[])}render(i){const e=this.renderer,t=this.copyPass;let n=this.inputBuffer,s=this.outputBuffer,r=!1,o,a,c;i===void 0&&(this.timer.update(),i=this.timer.getDelta());for(const l of this.passes)l.enabled&&(l.render(e,n,s,i,r),l.needsSwap&&(r&&(t.renderToScreen=l.renderToScreen,o=e.getContext(),a=e.state.buffers.stencil,a.setFunc(o.NOTEQUAL,1,4294967295),t.render(e,n,s,i,r),a.setFunc(o.EQUAL,1,4294967295)),c=n,n=s,s=c),l instanceof f0?r=!0:l instanceof l0&&(r=!1))}setSize(i,e,t){const n=this.renderer,s=n.getSize(new Ve);(i===void 0||e===void 0)&&(i=s.width,e=s.height),(s.width!==i||s.height!==e)&&n.setSize(i,e,t);const r=n.getDrawingBufferSize(new Ve);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height);for(const o of this.passes)o.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const i of this.passes)i.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),qi.fullscreenGeometry.dispose()}},us={NONE:0,DEPTH:1,CONVOLUTION:2},Ct={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},g0=class{constructor(){this.shaderParts=new Map([[Ct.FRAGMENT_HEAD,null],[Ct.FRAGMENT_MAIN_UV,null],[Ct.FRAGMENT_MAIN_IMAGE,null],[Ct.VERTEX_HEAD,null],[Ct.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=us.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Nt}},Ka=!1,gu=class{constructor(i=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(i),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case En:t=this.materialsFlatShadedDoubleSide;break;case $t:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case En:t=this.materialsDoubleSide;break;case $t:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(i){if(!(i instanceof Kn))return i.clone();const e=i.uniforms,t=new Map;for(const s in e){const r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}const n=i.clone();for(const s of t)e[s[0]].value=s[1],n.uniforms[s[0]].value=s[1];return n}setMaterial(i){if(this.disposeMaterials(),this.material=i,i!==null){const e=this.materials=[this.cloneMaterial(i),this.cloneMaterial(i),this.cloneMaterial(i)];for(const t of e)t.uniforms=Object.assign({},i.uniforms),t.side=oi;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=$t,n}),this.materialsDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=En,n}),this.materialsFlatShaded=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n}),this.materialsFlatShadedBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=$t,n}),this.materialsFlatShadedDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=En,n})}}render(i,e,t){const n=i.shadowMap.enabled;if(i.shadowMap.enabled=!1,Ka){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),i.render(e,t);for(const r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,i.render(e,t),e.overrideMaterial=s}i.shadowMap.enabled=n}disposeMaterials(){if(this.material!==null){const i=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of i)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Ka}static set workaroundEnabled(i){Ka=i}},mt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},m0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),opacity);}",E0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",I0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),opacity);}",_0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",C0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),opacity);}",y0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),opacity);}",v0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),opacity);}",x0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),opacity);}",S0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),opacity);}",B0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),opacity);}",M0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),opacity);}",w0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),opacity);}",b0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),opacity);}",T0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),opacity);}",R0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),opacity);}",D0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),opacity);}",Q0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",L0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),opacity);}",N0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",P0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),opacity);}",U0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),opacity);}",F0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),opacity);}",O0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",G0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),opacity);}",H0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),opacity);}",k0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),opacity);}",z0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",V0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),opacity);}",Y0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),opacity);}",W0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",X0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),opacity);}",K0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),opacity);}",q0=new Map([[mt.ADD,m0],[mt.ALPHA,E0],[mt.AVERAGE,I0],[mt.COLOR,_0],[mt.COLOR_BURN,C0],[mt.COLOR_DODGE,y0],[mt.DARKEN,v0],[mt.DIFFERENCE,x0],[mt.DIVIDE,S0],[mt.DST,null],[mt.EXCLUSION,B0],[mt.HARD_LIGHT,M0],[mt.HARD_MIX,w0],[mt.HUE,b0],[mt.INVERT,T0],[mt.INVERT_RGB,R0],[mt.LIGHTEN,D0],[mt.LINEAR_BURN,Q0],[mt.LINEAR_DODGE,L0],[mt.LINEAR_LIGHT,N0],[mt.LUMINOSITY,P0],[mt.MULTIPLY,U0],[mt.NEGATION,F0],[mt.NORMAL,O0],[mt.OVERLAY,G0],[mt.PIN_LIGHT,H0],[mt.REFLECT,k0],[mt.SATURATION,z0],[mt.SCREEN,V0],[mt.SOFT_LIGHT,Y0],[mt.SRC,W0],[mt.SUBTRACT,X0],[mt.VIVID_LIGHT,K0]]),J0=class extends wi{constructor(i,e=1){super(),this._blendFunction=i,this.opacity=new dn(e)}getOpacity(){return this.opacity.value}setOpacity(i){this.opacity.value=i}get blendFunction(){return this._blendFunction}set blendFunction(i){this._blendFunction=i,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(i){this.blendFunction=i}getShaderCode(){return q0.get(this.blendFunction)}},j0=class extends wi{constructor(i,e,{attributes:t=us.NONE,blendFunction:n=mt.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:o=null,vertexShader:a=null}={}){super(),this.name=i,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=a,this.defines=s,this.uniforms=r,this.extensions=o,this.blendMode=new J0(n),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=Nt,this._outputColorSpace=zn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(i){this._inputColorSpace=i,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(i){this._outputColorSpace=i,this.setChanged()}set mainScene(i){}set mainCamera(i){}getName(){return this.name}setRenderer(i){this.renderer=i}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(i){this.attributes=i,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(i){this.fragmentShader=i,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(i){this.vertexShader=i,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(i,e=kr){}update(i,e,t){}setSize(i,e){}initialize(i,e,t){}dispose(){for(const i of Object.keys(this)){const e=this[i];(e instanceof Xn||e instanceof Rn||e instanceof zt||e instanceof qi)&&this[i].dispose()}}},$0=class extends qi{constructor(i,e,t=null){super("RenderPass",i,e),this.needsSwap=!1,this.clearPass=new JA,this.overrideMaterialManager=t===null?null:new gu(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get renderToScreen(){return super.renderToScreen}set renderToScreen(i){super.renderToScreen=i,this.clearPass.renderToScreen=i}get overrideMaterial(){const i=this.overrideMaterialManager;return i!==null?i.material:null}set overrideMaterial(i){const e=this.overrideMaterialManager;i!==null?e!==null?e.setMaterial(i):this.overrideMaterialManager=new gu(i):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(i){this.overrideMaterial=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getSelection(){return this.selection}setSelection(i){this.selection=i}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(i){this.ignoreBackground=i}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(i){this.skipShadowMapUpdate=i}getClearPass(){return this.clearPass}render(i,e,t,n,s){const r=this.scene,o=this.camera,a=this.selection,c=o.layers.mask,l=r.background,h=i.shadowMap.autoUpdate,u=this.renderToScreen?null:e;a!==null&&o.layers.set(a.getLayer()),this.skipShadowMapUpdate&&(i.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(i,e),i.setRenderTarget(u),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(i,r,o):i.render(r,o),o.layers.mask=c,r.background=l,i.shadowMap.autoUpdate=h}},yr={DEFAULT:0,ESKIL:1},Z0=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,eC=class extends j0{constructor({blendFunction:i,eskil:e=!1,technique:t=e?yr.ESKIL:yr.DEFAULT,offset:n=.5,darkness:s=.5}={}){super("VignetteEffect",Z0,{blendFunction:i,defines:new Map([["VIGNETTE_TECHNIQUE",t.toFixed(0)]]),uniforms:new Map([["offset",new dn(n)],["darkness",new dn(s)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(i){this.technique!==i&&(this.defines.set("VIGNETTE_TECHNIQUE",i.toFixed(0)),this.setChanged())}get eskil(){return this.technique===yr.ESKIL}set eskil(i){this.technique=i?yr.ESKIL:yr.DEFAULT}getTechnique(){return this.technique}setTechnique(i){this.technique=i}get offset(){return this.uniforms.get("offset").value}set offset(i){this.uniforms.get("offset").value=i}getOffset(){return this.offset}setOffset(i){this.offset=i}get darkness(){return this.uniforms.get("darkness").value}set darkness(i){this.uniforms.get("darkness").value=i}getDarkness(){return this.darkness}setDarkness(i){this.darkness=i}},tC=`#include <common>
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
}`,nC="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",iC=class extends Kn{constructor(i,e,t,n,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:$o.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new dn(null),depthBuffer:new dn(null),resolution:new dn(new Ve),texelSize:new dn(new Ve),cameraNear:new dn(.3),cameraFar:new dn(1e3),aspect:new dn(1),time:new dn(0)},blending:ii,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),i&&this.setShaderParts(i),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(n)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){this.uniforms.depthBuffer.value=i}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer(i,e=kr){this.depthBuffer=i,this.depthPacking=e}setShaderData(i){this.setShaderParts(i.shaderParts),this.setDefines(i.defines),this.setUniforms(i.uniforms),this.setExtensions(i.extensions)}setShaderParts(i){return this.fragmentShader=tC.replace(Ct.FRAGMENT_HEAD,i.get(Ct.FRAGMENT_HEAD)||"").replace(Ct.FRAGMENT_MAIN_UV,i.get(Ct.FRAGMENT_MAIN_UV)||"").replace(Ct.FRAGMENT_MAIN_IMAGE,i.get(Ct.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=nC.replace(Ct.VERTEX_HEAD,i.get(Ct.VERTEX_HEAD)||"").replace(Ct.VERTEX_MAIN_SUPPORT,i.get(Ct.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(i){for(const e of i.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(i){for(const e of i.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(i){this.extensions={};for(const e of i)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(i){this.encodeOutput!==i&&(i?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(i){return this.encodeOutput}setOutputEncodingEnabled(i){this.encodeOutput=i}get time(){return this.uniforms.time.value}set time(i){this.uniforms.time.value=i}setDeltaTime(i){this.uniforms.time.value+=i}adoptCameraSettings(i){this.copyCameraSettings(i)}copyCameraSettings(i){i&&(this.uniforms.cameraNear.value=i.near,this.uniforms.cameraFar.value=i.far,i instanceof an?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(i,e){const t=this.uniforms;t.resolution.value.set(i,e),t.texelSize.value.set(1/i,1/e),t.aspect.value=i/e}static get Section(){return Ct}};function mu(i,e,t){for(const n of e){const s="$1"+i+n.charAt(0).toUpperCase()+n.slice(1),r=new RegExp("([^\\.])(\\b"+n+"\\b)","g");for(const o of t.entries())o[1]!==null&&t.set(o[0],o[1].replace(r,s))}}function sC(i,e,t){let n=e.getFragmentShader(),s=e.getVertexShader();const r=n!==void 0&&/mainImage/.test(n),o=n!==void 0&&/mainUv/.test(n);if(t.attributes|=e.getAttributes(),n===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(o&&(t.attributes&us.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!o)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const a=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,c=t.shaderParts;let l=c.get(Ct.FRAGMENT_HEAD)||"",h=c.get(Ct.FRAGMENT_MAIN_UV)||"",u=c.get(Ct.FRAGMENT_MAIN_IMAGE)||"",A=c.get(Ct.VERTEX_HEAD)||"",f=c.get(Ct.VERTEX_MAIN_SUPPORT)||"";const m=new Set,I=new Set;if(o&&(h+=`	${i}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const C=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);f+=`	${i}MainSupport(`,f+=C?`vUv);
`:`);
`;for(const x of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const w of x[1].split(/\s*,\s*/))t.varyings.add(w),m.add(w),I.add(w);for(const x of s.matchAll(a))I.add(x[1])}for(const C of n.matchAll(a))I.add(C[1]);for(const C of e.defines.keys())I.add(C.replace(/\([\w\s,]*\)/g,""));for(const C of e.uniforms.keys())I.add(C);I.delete("while"),I.delete("for"),I.delete("if"),e.uniforms.forEach((C,x)=>t.uniforms.set(i+x.charAt(0).toUpperCase()+x.slice(1),C)),e.defines.forEach((C,x)=>t.defines.set(i+x.charAt(0).toUpperCase()+x.slice(1),C));const g=new Map([["fragment",n],["vertex",s]]);mu(i,I,t.defines),mu(i,I,g),n=g.get("fragment"),s=g.get("vertex");const p=e.blendMode;if(t.blendModes.set(p.blendFunction,p),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(u+=e.inputColorSpace===Et?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==zn?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const C=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;u+=`${i}MainImage(color0, UV, `,(t.attributes&us.DEPTH)!==0&&C.test(n)&&(u+="depth, ",t.readDepth=!0),u+=`color1);
	`;const x=i+"BlendOpacity";t.uniforms.set(x,p.opacity),u+=`color0 = blend${p.blendFunction}(color0, color1, ${x});

	`,l+=`uniform float ${x};

`}if(l+=n+`
`,s!==null&&(A+=s+`
`),c.set(Ct.FRAGMENT_HEAD,l),c.set(Ct.FRAGMENT_MAIN_UV,h),c.set(Ct.FRAGMENT_MAIN_IMAGE,u),c.set(Ct.VERTEX_HEAD,A),c.set(Ct.VERTEX_MAIN_SUPPORT,f),e.extensions!==null)for(const C of e.extensions)t.extensions.add(C)}}var rC=class extends qi{constructor(i,...e){super("EffectPass"),this.fullscreenMaterial=new iC(null,null,null,i),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(i){for(const e of this.effects)e.mainScene=i}set mainCamera(i){this.fullscreenMaterial.copyCameraSettings(i);for(const e of this.effects)e.mainCamera=i}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(i){this.fullscreenMaterial.encodeOutput=i}get dithering(){return this.fullscreenMaterial.dithering}set dithering(i){const e=this.fullscreenMaterial;e.dithering=i,e.needsUpdate=!0}setEffects(i){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=i.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const i=new g0;let e=0;for(const o of this.effects)if(o.blendMode.blendFunction===mt.DST)i.attributes|=o.getAttributes()&us.DEPTH;else{if((i.attributes&o.getAttributes()&us.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${o.name})`);sC("e"+e++,o,i)}let t=i.shaderParts.get(Ct.FRAGMENT_HEAD),n=i.shaderParts.get(Ct.FRAGMENT_MAIN_IMAGE),s=i.shaderParts.get(Ct.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const o of i.blendModes.values())t+=o.getShaderCode().replace(r,`blend${o.blendFunction}`)+`
`;(i.attributes&us.DEPTH)!==0?(i.readDepth&&(n=`float depth = readDepth(UV);

	`+n),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,i.colorSpace===Et&&(n+=`color0 = sRGBToLinear(color0);
	`),i.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,i.defines.set("UV","transformedUv")):i.defines.set("UV","vUv"),i.shaderParts.set(Ct.FRAGMENT_HEAD,t),i.shaderParts.set(Ct.FRAGMENT_MAIN_IMAGE,n),i.shaderParts.set(Ct.FRAGMENT_MAIN_UV,s);for(const[o,a]of i.shaderParts)a!==null&&i.shaderParts.set(o,a.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(i)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(i,e=kr){this.fullscreenMaterial.depthBuffer=i,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(i,e)}render(i,e,t,n,s){for(const r of this.effects)r.update(i,e,n);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=n*this.timeScale,i.setRenderTarget(this.renderToScreen?null:t),i.render(this.scene,this.camera)}}setSize(i,e){this.fullscreenMaterial.setSize(i,e);for(const t of this.effects)t.setSize(i,e)}initialize(i,e,t){this.renderer=i;for(const n of this.effects)n.initialize(i,e,t);this.updateMaterial(),t!==void 0&&t!==hn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const i of this.effects)i.removeEventListener("change",this.listener),i.dispose()}handleEvent(i){switch(i.type){case"change":this.recompile();break}}};const Eu={type:"change"},Dl={type:"start"},jA={type:"end"},yo=new ar,Iu=new zi,oC=Math.cos(70*bA.DEG2RAD),Vt=new K,pn=2*Math.PI,wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qa=1e-6;class aC extends r0{constructor(e,t=null){super(e,t),this.state=wt.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vs.ROTATE,MIDDLE:Vs.DOLLY,RIGHT:Vs.PAN},this.touches={ONE:Gs.ROTATE,TWO:Gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new ai,this._lastTargetPosition=new K,this._quat=new ai().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fu,this._sphericalDelta=new fu,this._scale=1,this._panOffset=new K,this._rotateStart=new Ve,this._rotateEnd=new Ve,this._rotateDelta=new Ve,this._panStart=new Ve,this._panEnd=new Ve,this._panDelta=new Ve,this._dollyStart=new Ve,this._dollyEnd=new Ve,this._dollyDelta=new Ve,this._dollyDirection=new K,this._mouse=new Ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lC.bind(this),this._onPointerDown=cC.bind(this),this._onPointerUp=hC.bind(this),this._onContextMenu=mC.bind(this),this._onMouseWheel=dC.bind(this),this._onKeyDown=fC.bind(this),this._onTouchStart=pC.bind(this),this._onTouchMove=gC.bind(this),this._onMouseDown=uC.bind(this),this._onMouseMove=AC.bind(this),this._interceptControlDown=EC.bind(this),this._interceptControlUp=IC.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Eu),this.update(),this.state=wt.NONE}update(e=null){const t=this.object.position;Vt.copy(t).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=pn:n>Math.PI&&(n-=pn),s<-Math.PI?s+=pn:s>Math.PI&&(s-=pn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Vt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new K(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new K(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(yo.origin.copy(this.object.position),yo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yo.direction))<oC?this.object.lookAt(this.target):(Iu.setFromNormalAndCoplanarPoint(this.object.up,this.target),yo.intersectPlane(Iu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>qa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qa||this._lastTargetPosition.distanceToSquared(this.target)>qa?(this.dispatchEvent(Eu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pn/60*this.autoRotateSpeed*e:pn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Vt.setFromMatrixColumn(t,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,t){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(t,1):(Vt.setFromMatrixColumn(t,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Vt.copy(s).sub(this.target);let r=Vt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function cC(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function lC(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function hC(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jA),this.state=wt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function uC(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=wt.DOLLY;break;case Vs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}break;case Vs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(Dl)}function AC(i){switch(this.state){case wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function dC(i){this.enabled===!1||this.enableZoom===!1||this.state!==wt.NONE||(i.preventDefault(),this.dispatchEvent(Dl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(jA))}function fC(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function pC(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=wt.TOUCH_ROTATE;break;case Gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=wt.TOUCH_PAN;break;default:this.state=wt.NONE}break;case 2:switch(this.touches.TWO){case Gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=wt.TOUCH_DOLLY_PAN;break;case Gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=wt.TOUCH_DOLLY_ROTATE;break;default:this.state=wt.NONE}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(Dl)}function gC(i){switch(this._trackPointer(i),this.state){case wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=wt.NONE}}function mC(i){this.enabled!==!1&&i.preventDefault()}function EC(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function IC(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class vo{constructor(e,t,n,s=!0){let r=1/0,o=0;const a=Math.round,c=a(window.devicePixelRatio||1),l=80*c,h=48*c,u=3*c,A=2*c,f=3*c,m=15*c,I=74*c,g=30*c,p=document.createElement("canvas");p.width=l,p.height=h,p.style.cssText="width:80px;height:48px",this.dom=p;const C=p.getContext("2d");C.font=`bold ${9*c}px Helvetica,Arial,sans-serif`,C.textBaseline="top",C.fillStyle=n,C.fillRect(0,0,l,h),C.fillStyle=t,C.fillText(e,u,A),C.fillRect(f,m,I,g),C.fillStyle=n,C.globalAlpha=.9,C.fillRect(f,m,I,g),this.update=(x,w)=>{r=Math.min(r,x),o=Math.max(o,x),C.fillStyle=n,C.globalAlpha=1,C.fillRect(0,0,l,m),C.fillStyle=t;const P=Math.max(2,String(a(x)).length);C.textAlign="right",C.fillText(`${a(x)}`,u+P*5*c,A),C.textAlign="left";const N=`(${a(r)}-${a(o)})`;C.fillText(`${e} ${s?N:""}`,u+(P*5+2)*c,A),C.drawImage(p,f+c,m,I-c,g,f,m,I-c,g),C.fillRect(f+I-c,m,c,g),C.fillStyle=n,C.globalAlpha=.9,C.fillRect(f+I-c,m,c,a((1-x/w)*g))}}}class _C{constructor({showMinMax:e=!0,context:t}={}){this.mode=0,this.beginTime=performance.now(),this.prevTime=this.beginTime,this.frames=0,this.REVISION=16;const n=document.createElement("div");n.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",n.addEventListener("click",s=>{s.preventDefault(),this.showPanel(++this.mode%n.children.length)}),this.dom=n,this.fpsPanel=this.addPanel(new vo("FPS","#0ff","#002",e)),this.msPanel=this.addPanel(new vo("MS","#0f0","#020",e)),performance&&performance.memory&&(this.memPanel=this.addPanel(new vo("MB","#f08","#201",e))),this.queryExtension=t&&t.getExtension("EXT_disjoint_timer_query_webgl2"),this.queryExtension&&(this.gpuPanel=this.addPanel(new vo("MS GPU","#f90","#210",e)),this.context=t),this.showPanel(0)}addPanel(e){return this.dom.appendChild(e.dom),e}showPanel(e){for(var t=0;t<this.dom.children.length;t++)this.dom.children[t].style.display=t===e?"block":"none";this.mode=e}begin(){if(this.beginTime=performance.now(),this.gpuPanel){this.queryCreated=!1;let e=!1;if(this.query&&(e=this.context.getQueryParameter(this.query,this.context.QUERY_RESULT_AVAILABLE),e)){const n=this.context.getQueryParameter(this.query,this.context.QUERY_RESULT),s=Math.min(n/1e3/1e3,30);this.gpuPanel.update(s,30)}(e||!this.query)&&(this.queryCreated=!0,this.query=this.context.createQuery(),this.context.beginQuery(this.queryExtension.TIME_ELAPSED_EXT,this.query))}}end(){this.frames++;const e=performance.now();if(this.msPanel.update(e-this.beginTime,200),e>=this.prevTime+1e3&&(this.fpsPanel.update(this.frames*1e3/(e-this.prevTime),100),this.prevTime=e,this.frames=0,this.memPanel)){const t=performance.memory;this.memPanel.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return this.queryCreated&&this.context.endQuery(this.queryExtension.TIME_ELAPSED_EXT),e}update(){this.beginTime=this.end()}}function Ja(i,e,t,n){return new(t||(t=Promise))(function(s,r){function o(l){try{c(n.next(l))}catch(h){r(h)}}function a(l){try{c(n.throw(l))}catch(h){r(h)}}function c(l){var h;l.done?s(l.value):(h=l.value,h instanceof t?h:new t(function(u){u(h)})).then(o,a)}c((n=n.apply(i,[])).next())})}const CC=["geforce 320m","geforce 8600","geforce 8600m gt","geforce 8800 gs","geforce 8800 gt","geforce 9400","geforce 9400m g","geforce 9400m","geforce 9600m gt","geforce 9600m","geforce fx go5200","geforce gt 120","geforce gt 130","geforce gt 330m","geforce gtx 285","google swiftshader","intel g41","intel g45","intel gma 4500mhd","intel gma x3100","intel hd 3000","intel q45","legacy","mali-2","mali-3","mali-4","quadro fx 1500","quadro fx 4","quadro fx 5","radeon hd 2400","radeon hd 2600","radeon hd 4670","radeon hd 4850","radeon hd 4870","radeon hd 5670","radeon hd 5750","radeon hd 6290","radeon hd 6300","radeon hd 6310","radeon hd 6320","radeon hd 6490m","radeon hd 6630m","radeon hd 6750m","radeon hd 6770m","radeon hd 6970m","sgx 543","sgx543"];function _u(i){return i=i.toLowerCase().replace(/.*angle ?\((.+)\)(?: on vulkan [0-9.]+)?$/i,"$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g,"").replace(/(?:vulkan|opengl) \d+\.\d+(?:\.\d+)?(?: \((.*)\))?/,"$1")}const $A=typeof window>"u",Zn=(()=>{if($A)return;const{userAgent:i,platform:e,maxTouchPoints:t}=window.navigator,n=/(iphone|ipod|ipad)/i.test(i),s=e==="iPad"||e==="MacIntel"&&t>0&&!window.MSStream;return{isIpad:s,isMobile:/android/i.test(i)||n||s,isSafari12:/Version\/12.+Safari/.test(i),isFirefox:/Firefox/.test(i)}})();function yC(i,e,t){if(!t)return[e];const n=function(l){const h=`
    precision highp float;
    attribute vec3 aPosition;
    varying float vvv;
    void main() {
      vvv = 0.31622776601683794;
      gl_Position = vec4(aPosition, 1.0);
    }
  `,u=`
    precision highp float;
    varying float vvv;
    void main() {
      vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;
      enc = fract(enc);
      enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);
      gl_FragColor = enc;
    }
  `,A=l.createShader(35633),f=l.createShader(35632),m=l.createProgram();if(!(f&&A&&m))return;l.shaderSource(A,h),l.shaderSource(f,u),l.compileShader(A),l.compileShader(f),l.attachShader(m,A),l.attachShader(m,f),l.linkProgram(m),l.detachShader(m,A),l.detachShader(m,f),l.deleteShader(A),l.deleteShader(f),l.useProgram(m);const I=l.createBuffer();l.bindBuffer(34962,I),l.bufferData(34962,new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),35044);const g=l.getAttribLocation(m,"aPosition");l.vertexAttribPointer(g,3,5126,!1,0,0),l.enableVertexAttribArray(g),l.clearColor(1,1,1,1),l.clear(16384),l.viewport(0,0,1,1),l.drawArrays(4,0,3);const p=new Uint8Array(4);return l.readPixels(0,0,1,1,6408,5121,p),l.deleteProgram(m),l.deleteBuffer(I),p.join("")}(i),s="801621810",r="8016218135",o="80162181161",a=Zn?.isIpad?[["a7",o,12],["a8",r,15],["a8x",r,15],["a9",r,15],["a9x",r,15],["a10",r,15],["a10x",r,15],["a12",s,15],["a12x",s,15],["a12z",s,15],["a14",s,15],["a15",s,15],["m1",s,15],["m2",s,15]]:[["a7",o,12],["a8",r,12],["a9",r,15],["a10",r,15],["a11",s,15],["a12",s,15],["a13",s,15],["a14",s,15],["a15",s,15],["a16",s,15],["a17",s,15]];let c;return n==="80162181255"?c=a.filter(([,,l])=>l>=14):(c=a.filter(([,l])=>l===n),c.length||(c=a)),c.map(([l])=>`apple ${l} gpu`)}let Cu=class extends Error{constructor(e){super(e),Object.setPrototypeOf(this,new.target.prototype)}};const ja=[],yu=[];function vC(i,e){if(i===e)return 0;const t=i;i.length>e.length&&(i=e,e=t);let n=i.length,s=e.length;for(;n>0&&i.charCodeAt(~-n)===e.charCodeAt(~-s);)n--,s--;let r,o=0;for(;o<n&&i.charCodeAt(o)===e.charCodeAt(o);)o++;if(n-=o,s-=o,n===0)return s;let a,c,l=0,h=0,u=0;for(;h<n;)yu[h]=i.charCodeAt(o+h),ja[h]=++h;for(;u<s;)for(r=e.charCodeAt(o+u),a=u++,l=u,h=0;h<n;h++)c=r===yu[h]?a:a+1,a=ja[h],l=ja[h]=a>l?c>l?l+1:c:c>a?a+1:c;return l}function xC(i){return i!=null}const SC=({mobileTiers:i=[0,15,30,60],desktopTiers:e=[0,15,30,60],override:t={},glContext:n,failIfMajorPerformanceCaveat:s=!1,benchmarksURL:r="https://unpkg.com/detect-gpu@5.0.70/dist/benchmarks"}={})=>Ja(void 0,void 0,void 0,function*(){const o={};if($A)return{tier:0,type:"SSR"};const{isIpad:a=!!Zn?.isIpad,isMobile:c=!!Zn?.isMobile,screenSize:l=window.screen,loadBenchmarks:h=P=>Ja(void 0,void 0,void 0,function*(){const N=yield fetch(`${r}/${P}`).then(D=>D.json());if(parseInt(N.shift().split(".")[0],10)<4)throw new Cu("Detect GPU benchmark data is out of date. Please update to version 4x");return N})}=t;let{renderer:u}=t;const A=(P,N,D,T,F)=>({device:F,fps:T,gpu:D,isMobile:c,tier:P,type:N});let f,m="";if(u)u=_u(u),f=[u];else{const P=n||function(D,T=!1){const F={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:T,powerPreference:"high-performance",stencil:!1};D&&delete F.powerPreference;const _=window.document.createElement("canvas"),v=_.getContext("webgl",F)||_.getContext("experimental-webgl",F);return v??void 0}(Zn?.isSafari12,s);if(!P)return A(0,"WEBGL_UNSUPPORTED");const N=Zn?.isFirefox?null:P.getExtension("WEBGL_debug_renderer_info");if(u=N?P.getParameter(N.UNMASKED_RENDERER_WEBGL):P.getParameter(P.RENDERER),!u)return A(1,"FALLBACK");m=u,u=_u(u),f=function(D,T,F){return T==="apple gpu"?yC(D,T,F):[T]}(P,u,c)}const I=(yield Promise.all(f.map(function(P){var N;return Ja(this,void 0,void 0,function*(){const D=(we=>{const se=c?["adreno","apple","mali-t","mali","nvidia","powervr","samsung"]:["intel","apple","amd","radeon","nvidia","geforce","adreno"];for(const he of se)if(we.includes(he))return he})(P);if(!D)return;const T=`${c?"m":"d"}-${D}${a?"-ipad":""}.json`,F=o[T]=(N=o[T])!==null&&N!==void 0?N:h(T);let _;try{_=yield F}catch(we){if(we instanceof Cu)throw we;return}const v=function(we){var se;const he=(we=we.replace(/\([^)]+\)/,"")).match(/\d+/)||we.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g);return(se=he?.join("").replace(/\W|amd/g,""))!==null&&se!==void 0?se:""}(P);let U=_.filter(([,we])=>we===v);U.length||(U=_.filter(([we])=>we.includes(P)));const H=U.length;if(H===0)return;const z=P.split(/[.,()\[\]/\s]/g).sort().filter((we,se,he)=>se===0||we!==he[se-1]).join(" ");let $,[Y,,,,re]=H>1?U.map(we=>[we,vC(z,we[2])]).sort(([,we],[,se])=>we-se)[0][0]:U[0],te=Number.MAX_VALUE;const{devicePixelRatio:ye}=window,_e=l.width*ye*l.height*ye;for(const we of re){const[se,he]=we,me=se*he,xe=Math.abs(_e-me);xe<te&&(te=xe,$=we)}if(!$)return;const[,,Le,Oe]=$;return[te,Le,Y,Oe]})}))).filter(xC).sort(([P=Number.MAX_VALUE,N],[D=Number.MAX_VALUE,T])=>P===D?N-T:P-D);if(!I.length){const P=CC.find(N=>u.includes(N));return P?A(0,"BLOCKLISTED",P):A(1,"FALLBACK",`${u} (${m})`)}const[,g,p,C]=I[0];if(g===-1)return A(0,"BLOCKLISTED",p,g,C);const x=c?i:e;let w=0;for(let P=0;P<x.length;P++)g>=x[P]&&(w=P);return A(w,"BENCHMARK",p,g,C)});class Bi{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new R);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new R);const n=this.elements,s=e.x,r=e.y,o=e.z;return t.x=n[0]*s+n[1]*r+n[2]*o,t.y=n[3]*s+n[4]*r+n[5]*o,t.z=n[6]*s+n[7]*r+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Bi);const n=this.elements,s=e.elements,r=t.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],u=n[5],A=n[6],f=n[7],m=n[8],I=s[0],g=s[1],p=s[2],C=s[3],x=s[4],w=s[5],P=s[6],N=s[7],D=s[8];return r[0]=o*I+a*C+c*P,r[1]=o*g+a*x+c*N,r[2]=o*p+a*w+c*D,r[3]=l*I+h*C+u*P,r[4]=l*g+h*x+u*N,r[5]=l*p+h*w+u*D,r[6]=A*I+f*C+m*P,r[7]=A*g+f*x+m*N,r[8]=A*p+f*w+m*D,t}scale(e,t){t===void 0&&(t=new Bi);const n=this.elements,s=t.elements;for(let r=0;r!==3;r++)s[3*r+0]=e.x*n[3*r+0],s[3*r+1]=e.y*n[3*r+1],s[3*r+2]=e.z*n[3*r+2];return t}solve(e,t){t===void 0&&(t=new R);const n=3,s=4,r=[];let o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3]=e.x,r[7]=e.y,r[11]=e.z;let c=3;const l=c;let h;const u=4;let A;do{if(o=l-c,r[o+s*o]===0){for(a=o+1;a<l;a++)if(r[o+s*a]!==0){h=u;do A=u-h,r[A+s*o]+=r[A+s*a];while(--h);break}}if(r[o+s*o]!==0)for(a=o+1;a<l;a++){const f=r[o+s*a]/r[o+s*o];h=u;do A=u-h,r[A+s*a]=A<=o?0:r[A+s*a]-r[A+s*o]*f;while(--h)}}while(--c);if(t.z=r[2*s+3]/r[2*s+2],t.y=(r[1*s+3]-r[1*s+2]*t.z)/r[1*s+1],t.x=(r[0*s+3]-r[0*s+2]*t.z-r[0*s+1]*t.y)/r[0*s+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new Bi);const t=3,n=6,s=BC;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3]=1,s[9]=0,s[15]=0,s[4]=0,s[10]=1,s[16]=0,s[5]=0,s[11]=0,s[17]=1;let a=3;const c=a;let l;const h=n;let u;do{if(r=c-a,s[r+n*r]===0){for(o=r+1;o<c;o++)if(s[r+n*o]!==0){l=h;do u=h-l,s[u+n*r]+=s[u+n*o];while(--l);break}}if(s[r+n*r]!==0)for(o=r+1;o<c;o++){const A=s[r+n*o]/s[r+n*r];l=h;do u=h-l,s[u+n*o]=u<=r?0:s[u+n*o]-s[u+n*r]*A;while(--l)}}while(--a);r=2;do{o=r-1;do{const A=s[r+n*o]/s[r+n*r];l=n;do u=n-l,s[u+n*o]=s[u+n*o]-s[u+n*r]*A;while(--l)}while(o--)}while(--r);r=2;do{const A=1/s[r+n*r];l=n;do u=n-l,s[u+n*r]=s[u+n*r]*A;while(--l)}while(r--);r=2;do{o=2;do{if(u=s[t+o+n*r],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,u)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,s=e.z,r=e.w,o=t+t,a=n+n,c=s+s,l=t*o,h=t*a,u=t*c,A=n*a,f=n*c,m=s*c,I=r*o,g=r*a,p=r*c,C=this.elements;return C[0]=1-(A+m),C[1]=h-p,C[2]=u+g,C[3]=h+p,C[4]=1-(l+m),C[5]=f-I,C[6]=u-g,C[7]=f+I,C[8]=1-(l+A),this}transpose(e){e===void 0&&(e=new Bi);const t=this.elements,n=e.elements;let s;return n[0]=t[0],n[4]=t[4],n[8]=t[8],s=t[1],n[1]=t[3],n[3]=s,s=t[2],n[2]=t[6],n[6]=s,s=t[5],n[5]=t[7],n[7]=s,e}}const BC=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class R{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new R);const n=e.x,s=e.y,r=e.z,o=this.x,a=this.y,c=this.z;return t.x=a*r-c*s,t.y=c*n-o*r,t.z=o*s-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new R(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new R(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Bi([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,s=Math.sqrt(e*e+t*t+n*n);if(s>0){const r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(e){e===void 0&&(e=new R);const t=this.x,n=this.y,s=this.z;let r=Math.sqrt(t*t+n*n+s*s);return r>0?(r=1/r,e.x=t*r,e.y=n*r,e.z=s*r):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-n)*(o-n)+(a-s)*(a-s)}scale(e,t){t===void 0&&(t=new R);const n=this.x,s=this.y,r=this.z;return t.x=e*n,t.y=e*s,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new R),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new R),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new R),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const s=MC,r=1/n;s.set(this.x*r,this.y*r,this.z*r);const o=wC;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,e)):(o.set(0,1,0),s.cross(o,e)),s.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const s=this.x,r=this.y,o=this.z;n.x=s+(e.x-s)*t,n.y=r+(e.y-r)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(vu),vu.almostEquals(e,t)}clone(){return new R(this.x,this.y,this.z)}}R.ZERO=new R(0,0,0);R.UNIT_X=new R(1,0,0);R.UNIT_Y=new R(0,1,0);R.UNIT_Z=new R(0,0,1);const MC=new R,wC=new R,vu=new R;class Qn{constructor(e){e===void 0&&(e={}),this.lowerBound=new R,this.upperBound=new R,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,s){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let c=1;c<e.length;c++){let l=e[c];a&&(a.vmult(l,xu),l=xu),l.x>o.x&&(o.x=l.x),l.x<r.x&&(r.x=l.x),l.y>o.y&&(o.y=l.y),l.y<r.y&&(r.y=l.y),l.z>o.z&&(o.z=l.z),l.z<r.z&&(r.z=l.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Qn().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,s=e.lowerBound,r=e.upperBound,o=s.x<=n.x&&n.x<=r.x||t.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||t.y<=r.y&&r.y<=n.y,c=s.z<=n.z&&n.z<=r.z||t.z<=r.z&&r.z<=n.z;return o&&a&&c}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,s=e.lowerBound,r=e.upperBound;return t.x<=s.x&&n.x>=r.x&&t.y<=s.y&&n.y>=r.y&&t.z<=s.z&&n.z>=r.z}getCorners(e,t,n,s,r,o,a,c){const l=this.lowerBound,h=this.upperBound;e.copy(l),t.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),s.set(l.x,h.y,h.z),r.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(e,t){const n=Su,s=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7];this.getCorners(s,r,o,a,c,l,h,u);for(let A=0;A!==8;A++){const f=n[A];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=Su,s=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7];this.getCorners(s,r,o,a,c,l,h,u);for(let A=0;A!==8;A++){const f=n[A];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,s=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*s,c=(this.upperBound.x-n.x)*s,l=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,u=(this.lowerBound.z-n.z)*o,A=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(u,A)),m=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(u,A));return!(m<0||f>m)}}const xu=new R,Su=[new R,new R,new R,new R,new R,new R,new R,new R];class cn{constructor(e,t,n,s){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=e,this.y=t,this.z=n,this.w=s}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new R),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=bC,s=TC;e.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new cn);const n=this.x,s=this.y,r=this.z,o=this.w,a=e.x,c=e.y,l=e.z,h=e.w;return t.x=n*h+o*a+s*l-r*c,t.y=s*h+o*c+r*a-n*l,t.z=r*h+o*l+n*c-s*a,t.w=o*h-n*a-s*c-r*l,t}inverse(e){e===void 0&&(e=new cn);const t=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(e);const o=1/(t*t+n*n+s*s+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new cn),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new R);const n=e.x,s=e.y,r=e.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*r-c*s,u=l*s+c*n-o*r,A=l*r+o*s-a*n,f=-o*n-a*s-c*r;return t.x=h*l+f*-o+u*-c-A*-a,t.y=u*l+f*-a+A*-o-h*-c,t.z=A*l+f*-c+h*-a-u*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,s,r;const o=this.x,a=this.y,c=this.z,l=this.w;switch(t){case"YZX":const h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),s=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,l),s=-Math.PI/2,r=0),n===void 0){const u=o*o,A=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*A-2*f),s=Math.asin(2*h),r=Math.atan2(2*o*l-2*a*c,1-2*u-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=s,e.x=r}setFromEuler(e,t,n,s){s===void 0&&(s="XYZ");const r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),c=Math.sin(e/2),l=Math.sin(t/2),h=Math.sin(n/2);return s==="XYZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):s==="YXZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):s==="ZXY"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):s==="ZYX"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):s==="YZX"?(this.x=c*o*a+r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a-c*l*h):s==="XZY"&&(this.x=c*o*a-r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a+c*l*h),this}clone(){return new cn(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new cn);const s=this.x,r=this.y,o=this.z,a=this.w;let c=e.x,l=e.y,h=e.z,u=e.w,A,f,m,I,g;return f=s*c+r*l+o*h+a*u,f<0&&(f=-f,c=-c,l=-l,h=-h,u=-u),1-f>1e-6?(A=Math.acos(f),m=Math.sin(A),I=Math.sin((1-t)*A)/m,g=Math.sin(t*A)/m):(I=1-t,g=t),n.x=I*s+g*c,n.y=I*r+g*l,n.z=I*o+g*h,n.w=I*a+g*u,n}integrate(e,t,n,s){s===void 0&&(s=new cn);const r=e.x*n.x,o=e.y*n.y,a=e.z*n.z,c=this.x,l=this.y,h=this.z,u=this.w,A=t*.5;return s.x+=A*(r*u+o*h-a*l),s.y+=A*(o*u+a*c-r*h),s.z+=A*(a*u+r*l-o*c),s.w+=A*(-r*c-o*l-a*h),s}}const bC=new R,TC=new R,RC={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Ue{constructor(e){e===void 0&&(e={}),this.id=Ue.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Ue.idCounter=0;Ue.types=RC;class mn{constructor(e){e===void 0&&(e={}),this.position=new R,this.quaternion=new cn,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return mn.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return mn.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new R),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,s){return s===void 0&&(s=new R),n.vsub(e,s),t.conjugate(Bu),Bu.vmult(s,s),s}static pointToWorldFrame(e,t,n,s){return s===void 0&&(s=new R),t.vmult(n,s),s.vadd(e,s),s}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new R),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,s){return s===void 0&&(s=new R),t.w*=-1,t.vmult(n,s),t.w*=-1,s}}const Bu=new cn;new R;new R;new R;new R;new R,new R,new R,new R,new R,new R,new R,new R;new R;new cn;new Qn;new Bi;new Bi;new Bi;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new cn;new R;new R;new R;new R;class nl{constructor(){this.rayFromWorld=new R,this.rayToWorld=new R,this.hitNormalWorld=new R,this.hitPointWorld=new R,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,s,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}}let ZA,ed,td,nd,id,sd,rd;const Ql={CLOSEST:1,ANY:2,ALL:4};ZA=Ue.types.SPHERE;ed=Ue.types.PLANE;td=Ue.types.BOX;nd=Ue.types.CYLINDER;id=Ue.types.CONVEXPOLYHEDRON;sd=Ue.types.HEIGHTFIELD;rd=Ue.types.TRIMESH;class on{get[ZA](){return this._intersectSphere}get[ed](){return this._intersectPlane}get[td](){return this._intersectBox}get[nd](){return this._intersectConvex}get[id](){return this._intersectConvex}get[sd](){return this._intersectHeightfield}get[rd](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new R),t===void 0&&(t=new R),this.from=e.clone(),this.to=t.clone(),this.direction=new R,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=on.ANY,this.result=new nl,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||on.ANY,this.result=t.result||new nl,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Mu),$a.length=0,e.broadphase.aabbQuery(e,Mu,$a),this.intersectBodies($a),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const s=DC,r=QC;for(let o=0,a=e.shapes.length;o<a;o++){const c=e.shapes[o];if(!(n&&!c.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],s),s.vadd(e.position,s),this.intersectShape(c,r,s,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,s=e.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,s){const r=this.from;if(XC(r,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,s,e)}_intersectBox(e,t,n,s,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,s,r)}_intersectPlane(e,t,n,s,r){const o=this.from,a=this.to,c=this.direction,l=new R(0,0,1);t.vmult(l,l);const h=new R;o.vsub(n,h);const u=h.dot(l);a.vsub(n,h);const A=h.dot(l);if(u*A>0||o.distanceTo(a)<u)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const m=new R,I=new R,g=new R;o.vsub(n,m);const p=-l.dot(m)/f;c.scale(p,I),o.vadd(I,g),this.reportIntersection(l,g,r,s,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,s=this.to,r=this.from;t.x=Math.min(s.x,r.x),t.y=Math.min(s.y,r.y),t.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(e,t,n,s,r){e.data,e.elementSize;const o=LC;o.from.copy(this.from),o.to.copy(this.to),mn.pointToLocalFrame(n,t,o.from,o.from),mn.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=NC;let c,l,h,u;c=l=0,h=u=e.data.length-1;const A=new Qn;o.getAABB(A),e.getIndexOfPosition(A.lowerBound.x,A.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),e.getIndexOfPosition(A.upperBound.x,A.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let f=c;f<h;f++)for(let m=l;m<u;m++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,m,A),!!A.overlapsRay(o)){if(e.getConvexTrianglePillar(f,m,!1),mn.pointToWorldFrame(n,t,e.pillarOffset,xo),this._intersectConvex(e.pillarConvex,t,xo,s,r,wu),this.result.shouldStop)return;e.getConvexTrianglePillar(f,m,!0),mn.pointToWorldFrame(n,t,e.pillarOffset,xo),this._intersectConvex(e.pillarConvex,t,xo,s,r,wu)}}}_intersectSphere(e,t,n,s,r){const o=this.from,a=this.to,c=e.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,A=h**2-4*l*u,f=PC,m=UC;if(!(A<0))if(A===0)o.lerp(a,A,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,s,-1);else{const I=(-h-Math.sqrt(A))/(2*l),g=(-h+Math.sqrt(A))/(2*l);if(I>=0&&I<=1&&(o.lerp(a,I,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,s,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(o.lerp(a,g,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,s,-1))}}_intersectConvex(e,t,n,s,r,o){const a=FC,c=bu,l=o&&o.faceList||null,h=e.faces,u=e.vertices,A=e.faceNormals,f=this.direction,m=this.from,I=this.to,g=m.distanceTo(I),p=l?l.length:h.length,C=this.result;for(let x=0;!C.shouldStop&&x<p;x++){const w=l?l[x]:x,P=h[w],N=A[w],D=t,T=n;c.copy(u[P[0]]),D.vmult(c,c),c.vadd(T,c),c.vsub(m,c),D.vmult(N,a);const F=f.dot(a);if(Math.abs(F)<this.precision)continue;const _=a.dot(c)/F;if(!(_<0)){f.scale(_,gn),gn.vadd(m,gn),On.copy(u[P[0]]),D.vmult(On,On),T.vadd(On,On);for(let v=1;!C.shouldStop&&v<P.length-1;v++){jn.copy(u[P[v]]),$n.copy(u[P[v+1]]),D.vmult(jn,jn),D.vmult($n,$n),T.vadd(jn,jn),T.vadd($n,$n);const U=gn.distanceTo(m);!(on.pointInTriangle(gn,On,jn,$n)||on.pointInTriangle(gn,jn,On,$n))||U>g||this.reportIntersection(a,gn,r,s,w)}}}}_intersectTrimesh(e,t,n,s,r,o){const a=OC,c=YC,l=WC,h=bu,u=GC,A=HC,f=kC,m=VC,I=zC,g=e.indices;e.vertices;const p=this.from,C=this.to,x=this.direction;l.position.copy(n),l.quaternion.copy(t),mn.vectorToLocalFrame(n,t,x,u),mn.pointToLocalFrame(n,t,p,A),mn.pointToLocalFrame(n,t,C,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,A.x*=e.scale.x,A.y*=e.scale.y,A.z*=e.scale.z,f.vsub(A,u),u.normalize();const w=A.distanceSquared(f);e.tree.rayQuery(this,l,c);for(let P=0,N=c.length;!this.result.shouldStop&&P!==N;P++){const D=c[P];e.getNormal(D,a),e.getVertex(g[D*3],On),On.vsub(A,h);const T=u.dot(a),F=a.dot(h)/T;if(F<0)continue;u.scale(F,gn),gn.vadd(A,gn),e.getVertex(g[D*3+1],jn),e.getVertex(g[D*3+2],$n);const _=gn.distanceSquared(A);!(on.pointInTriangle(gn,jn,On,$n)||on.pointInTriangle(gn,On,jn,$n))||_>w||(mn.vectorToWorldFrame(t,a,I),mn.pointToWorldFrame(n,t,gn,m),this.reportIntersection(I,m,r,s,D))}c.length=0}reportIntersection(e,t,n,s,r){const o=this.from,a=this.to,c=o.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case on.ALL:this.hasHit=!0,l.set(o,a,e,t,n,s,c),l.hasHit=!0,this.callback(l);break;case on.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,e,t,n,s,c));break;case on.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,e,t,n,s,c),l.shouldStop=!0;break}}static pointInTriangle(e,t,n,s){s.vsub(t,hs),n.vsub(t,vr),e.vsub(t,Za);const r=hs.dot(hs),o=hs.dot(vr),a=hs.dot(Za),c=vr.dot(vr),l=vr.dot(Za);let h,u;return(h=c*a-o*l)>=0&&(u=r*l-o*a)>=0&&h+u<r*c-o*o}}on.CLOSEST=Ql.CLOSEST;on.ANY=Ql.ANY;on.ALL=Ql.ALL;const Mu=new Qn,$a=[],vr=new R,Za=new R,DC=new R,QC=new cn,gn=new R,On=new R,jn=new R,$n=new R;new R;new nl;const wu={faceList:[0]},xo=new R,LC=new on,NC=[],PC=new R,UC=new R,FC=new R;new R;new R;const bu=new R,OC=new R,GC=new R,HC=new R,kC=new R,zC=new R,VC=new R;new Qn;const YC=[],WC=new mn,hs=new R,So=new R;function XC(i,e,t){t.vsub(i,hs);const n=hs.dot(e);return e.scale(n,So),So.vadd(i,So),t.distanceTo(So)}new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new on;new R;new R;new R;new R(1,0,0),new R(0,1,0),new R(0,0,1);new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new Qn;new R;new Qn;new R;new R;new R;new R;new R;new R;new R;new Qn;new R;new mn;new Qn;Ue.types.SPHERE,Ue.types.SPHERE|Ue.types.PLANE,Ue.types.BOX|Ue.types.BOX,Ue.types.SPHERE|Ue.types.BOX,Ue.types.PLANE|Ue.types.BOX,Ue.types.CONVEXPOLYHEDRON,Ue.types.SPHERE|Ue.types.CONVEXPOLYHEDRON,Ue.types.PLANE|Ue.types.CONVEXPOLYHEDRON,Ue.types.BOX|Ue.types.CONVEXPOLYHEDRON,Ue.types.SPHERE|Ue.types.HEIGHTFIELD,Ue.types.BOX|Ue.types.HEIGHTFIELD,Ue.types.CONVEXPOLYHEDRON|Ue.types.HEIGHTFIELD,Ue.types.PARTICLE|Ue.types.SPHERE,Ue.types.PLANE|Ue.types.PARTICLE,Ue.types.BOX|Ue.types.PARTICLE,Ue.types.PARTICLE|Ue.types.CONVEXPOLYHEDRON,Ue.types.CYLINDER,Ue.types.SPHERE|Ue.types.CYLINDER,Ue.types.PLANE|Ue.types.CYLINDER,Ue.types.BOX|Ue.types.CYLINDER,Ue.types.CONVEXPOLYHEDRON|Ue.types.CYLINDER,Ue.types.HEIGHTFIELD|Ue.types.CYLINDER,Ue.types.PARTICLE|Ue.types.CYLINDER,Ue.types.SPHERE|Ue.types.TRIMESH,Ue.types.PLANE|Ue.types.TRIMESH;new R;new R;new R;new R;new R;new cn;new cn;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new Qn;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R,new R,new R,new R,new R,new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new cn;new R;new R;new R;new R;new R;new R;new R;new R;new R;new Qn;new on;const xr=globalThis.performance||{};if(!xr.now){let i=Date.now();xr.timing&&xr.timing.navigationStart&&(i=xr.timing.navigationStart),xr.now=()=>Date.now()-i}new R;function KC(i,e,t){let{color:n=65280,scale:s=1,onInit:r,onUpdate:o}=t===void 0?{}:t;const a=[],c=new Vi({color:n??65280,wireframe:!0}),l=new R,h=new R,u=new R,A=new cn,f=new Wo(1),m=new fs(1,1,1),I=new tr(10,10,10,10);I.translate(0,0,1e-4);function g(T){const F=new nn,_=[];for(let U=0;U<T.vertices.length;U++){const H=T.vertices[U];_.push(H.x,H.y,H.z)}F.setAttribute("position",new en(_,3));const v=[];for(let U=0;U<T.faces.length;U++){const H=T.faces[U],z=H[0];for(let $=1;$<H.length-1;$++){const Y=H[$],re=H[$+1];v.push(z,Y,re)}}return F.setIndex(v),F.computeBoundingSphere(),F.computeVertexNormals(),F}function p(T){const F=new nn,_=[],v=l,U=h,H=u;for(let z=0;z<T.indices.length/3;z++)T.getTriangleVertices(z,v,U,H),_.push(v.x,v.y,v.z),_.push(U.x,U.y,U.z),_.push(H.x,H.y,H.z);return F.setAttribute("position",new en(_,3)),F.computeBoundingSphere(),F.computeVertexNormals(),F}function C(T){const F=new nn,_=T.elementSize||1,v=T.data.flatMap((H,z)=>H.flatMap(($,Y)=>[z*_,Y*_,$])),U=[];for(let H=0;H<T.data.length-1;H++)for(let z=0;z<T.data[H].length-1;z++){const $=T.data[H].length,Y=H*$+z;U.push(Y+1,Y+$,Y+$+1),U.push(Y+$,Y+1,Y)}return F.setIndex(U),F.setAttribute("position",new en(v,3)),F.computeBoundingSphere(),F.computeVertexNormals(),F}function x(T){let F=new Gt;const{SPHERE:_,BOX:v,PLANE:U,CYLINDER:H,CONVEXPOLYHEDRON:z,TRIMESH:$,HEIGHTFIELD:Y}=Ue.types;switch(T.type){case _:{F=new Gt(f,c);break}case v:{F=new Gt(m,c);break}case U:{F=new Gt(I,c);break}case H:{const re=new Ml(T.radiusTop,T.radiusBottom,T.height,T.numSegments);F=new Gt(re,c),T.geometryId=re.id;break}case z:{const re=g(T);F=new Gt(re,c),T.geometryId=re.id;break}case $:{const re=p(T);F=new Gt(re,c),T.geometryId=re.id;break}case Y:{const re=C(T);F=new Gt(re,c),T.geometryId=re.id;break}}return i.add(F),F}function w(T,F){const{SPHERE:_,BOX:v,PLANE:U,CYLINDER:H,CONVEXPOLYHEDRON:z,TRIMESH:$,HEIGHTFIELD:Y}=Ue.types;switch(F.type){case _:{const{radius:re}=F;T.scale.set(re*s,re*s,re*s);break}case v:{T.scale.copy(F.halfExtents),T.scale.multiplyScalar(2*s);break}case U:break;case H:{T.scale.set(1*s,1*s,1*s);break}case z:{T.scale.set(1*s,1*s,1*s);break}case $:{T.scale.copy(F.scale).multiplyScalar(s);break}case Y:{T.scale.set(1*s,1*s,1*s);break}}}function P(T,F){if(!T)return!1;const{geometry:_}=T;return _ instanceof Wo&&F.type===Ue.types.SPHERE||_ instanceof fs&&F.type===Ue.types.BOX||_ instanceof tr&&F.type===Ue.types.PLANE||_.id===F.geometryId&&F.type===Ue.types.CYLINDER||_.id===F.geometryId&&F.type===Ue.types.CONVEXPOLYHEDRON||_.id===F.geometryId&&F.type===Ue.types.TRIMESH||_.id===F.geometryId&&F.type===Ue.types.HEIGHTFIELD}function N(T,F){let _=a[T],v=!1;return P(_,F)||(_&&i.remove(_),a[T]=_=x(F),v=!0),w(_,F),v}function D(){const T=a,F=l,_=A;let v=0;for(const U of e.bodies)for(let H=0;H!==U.shapes.length;H++){const z=U.shapes[H],$=N(v,z),Y=T[v];Y&&(U.quaternion.vmult(U.shapeOffsets[H],F),U.position.vadd(F,F),U.quaternion.mult(U.shapeOrientations[H],_),Y.position.copy(F),Y.quaternion.copy(_),$&&r instanceof Function&&r(U,Y,z),!$&&o instanceof Function&&o(U,Y,z)),v++}for(let U=v;U<T.length;U++){const H=T[U];H&&i.remove(H)}T.length=v}return{update:D}}var Ll=function(){var i=import.meta.url;return function(t){t=t||{};var t=typeof t<"u"?t:{},n,s;t.ready=new Promise(function(b,Q){n=b,s=Q}),t.create_buffer=function(b){return t._malloc(b)},t.free_buffer=function(b){return t._free(b)},t.locateFile=function(b,Q){return t.simd&&(b=b.replace(/\.wasm$/i,".simd.wasm")),t.getWasmPath?t.getWasmPath(b,Q,t.simd):Q+b},t.createWebCodecsEncoder=function(b){return jC(t,b)};var r={},o;for(o in t)t.hasOwnProperty(o)&&(r[o]=t[o]);var a=typeof window=="object",c=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var l="";function h(b){return t.locateFile?t.locateFile(b,l):l+b}var u;(a||c)&&(c?l=self.location.href:typeof document<"u"&&document.currentScript&&(l=document.currentScript.src),i&&(l=i),l.indexOf("blob:")!==0?l=l.substr(0,l.lastIndexOf("/")+1):l="",c&&(u=function(b){try{var Q=new XMLHttpRequest;return Q.open("GET",b,!1),Q.responseType="arraybuffer",Q.send(null),new Uint8Array(Q.response)}catch(ie){var X=ql(b);if(X)return X;throw ie}})),t.print||console.log.bind(console);var A=t.printErr||console.warn.bind(console);for(o in r)r.hasOwnProperty(o)&&(t[o]=r[o]);r=null,t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.quit&&t.quit;var f;t.wasmBinary&&(f=t.wasmBinary),t.noExitRuntime,typeof WebAssembly!="object"&&st("no native wasm support detected");var m,I=!1;function g(b,Q,X){for(var ie=Q+X,Ie="";!(Q>=ie);){var Ce=b[Q++];if(!Ce)return Ie;if(!(Ce&128)){Ie+=String.fromCharCode(Ce);continue}var Qe=b[Q++]&63;if((Ce&224)==192){Ie+=String.fromCharCode((Ce&31)<<6|Qe);continue}var Ee=b[Q++]&63;if((Ce&240)==224?Ce=(Ce&15)<<12|Qe<<6|Ee:Ce=(Ce&7)<<18|Qe<<12|Ee<<6|b[Q++]&63,Ce<65536)Ie+=String.fromCharCode(Ce);else{var Me=Ce-65536;Ie+=String.fromCharCode(55296|Me>>10,56320|Me&1023)}}return Ie}function p(b,Q){return b?g(z,b,Q):""}function C(b,Q,X,ie){if(!(ie>0))return 0;for(var Ie=X,Ce=X+ie-1,Qe=0;Qe<b.length;++Qe){var Ee=b.charCodeAt(Qe);if(Ee>=55296&&Ee<=57343){var Me=b.charCodeAt(++Qe);Ee=65536+((Ee&1023)<<10)|Me&1023}if(Ee<=127){if(X>=Ce)break;Q[X++]=Ee}else if(Ee<=2047){if(X+1>=Ce)break;Q[X++]=192|Ee>>6,Q[X++]=128|Ee&63}else if(Ee<=65535){if(X+2>=Ce)break;Q[X++]=224|Ee>>12,Q[X++]=128|Ee>>6&63,Q[X++]=128|Ee&63}else{if(X+3>=Ce)break;Q[X++]=240|Ee>>18,Q[X++]=128|Ee>>12&63,Q[X++]=128|Ee>>6&63,Q[X++]=128|Ee&63}}return Q[X]=0,X-Ie}function x(b,Q,X){return C(b,z,Q,X)}function w(b){for(var Q=0,X=0;X<b.length;++X){var ie=b.charCodeAt(X);ie>=55296&&ie<=57343&&(ie=65536+((ie&1023)<<10)|b.charCodeAt(++X)&1023),ie<=127?++Q:ie<=2047?Q+=2:ie<=65535?Q+=3:Q+=4}return Q}function P(b,Q){for(var X="",ie=0;!(ie>=Q/2);++ie){var Ie=$[b+ie*2>>1];if(Ie==0)break;X+=String.fromCharCode(Ie)}return X}function N(b,Q,X){if(X===void 0&&(X=2147483647),X<2)return 0;X-=2;for(var ie=Q,Ie=X<b.length*2?X/2:b.length,Ce=0;Ce<Ie;++Ce){var Qe=b.charCodeAt(Ce);$[Q>>1]=Qe,Q+=2}return $[Q>>1]=0,Q-ie}function D(b){return b.length*2}function T(b,Q){for(var X=0,ie="";!(X>=Q/4);){var Ie=re[b+X*4>>2];if(Ie==0)break;if(++X,Ie>=65536){var Ce=Ie-65536;ie+=String.fromCharCode(55296|Ce>>10,56320|Ce&1023)}else ie+=String.fromCharCode(Ie)}return ie}function F(b,Q,X){if(X===void 0&&(X=2147483647),X<4)return 0;for(var ie=Q,Ie=ie+X-4,Ce=0;Ce<b.length;++Ce){var Qe=b.charCodeAt(Ce);if(Qe>=55296&&Qe<=57343){var Ee=b.charCodeAt(++Ce);Qe=65536+((Qe&1023)<<10)|Ee&1023}if(re[Q>>2]=Qe,Q+=4,Q+4>Ie)break}return re[Q>>2]=0,Q-ie}function _(b){for(var Q=0,X=0;X<b.length;++X){var ie=b.charCodeAt(X);ie>=55296&&ie<=57343&&++X,Q+=4}return Q}function v(b,Q){return b%Q>0&&(b+=Q-b%Q),b}var U,H,z,$,Y,re,te,ye,_e;function Le(b){U=b,t.HEAP8=H=new Int8Array(b),t.HEAP16=$=new Int16Array(b),t.HEAP32=re=new Int32Array(b),t.HEAPU8=z=new Uint8Array(b),t.HEAPU16=Y=new Uint16Array(b),t.HEAPU32=te=new Uint32Array(b),t.HEAPF32=ye=new Float32Array(b),t.HEAPF64=_e=new Float64Array(b)}t.INITIAL_MEMORY;var Oe,we=[],se=[],he=[];function me(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Xe(t.preRun.shift());oe(we)}function xe(){oe(se)}function Ye(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)gt(t.postRun.shift());oe(he)}function Xe(b){we.unshift(b)}function ct(b){se.unshift(b)}function gt(b){he.unshift(b)}var $e=0,k=null;function Kt(b){$e++,t.monitorRunDependencies&&t.monitorRunDependencies($e)}function lt(b){if($e--,t.monitorRunDependencies&&t.monitorRunDependencies($e),$e==0&&k){var Q=k;k=null,Q()}}t.preloadedImages={},t.preloadedAudios={};function st(b){t.onAbort&&t.onAbort(b),b+="",A(b),I=!0,b="abort("+b+"). Build with -s ASSERTIONS=1 for more info.";var Q=new WebAssembly.RuntimeError(b);throw s(Q),Q}var qe="data:application/octet-stream;base64,";function yt(b){return b.startsWith(qe)}var ze;ze="data:application/octet-stream;base64,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BUEBcQR/IAYgAigCAGooAgAFIAYLIAJqIANBAiAFQQJxGyAEIAAoAgAoAhgRBQALBgAgABAXC0sBAn8gACgCBCIGQQh1IQcgACgCACIAIAEgAiAGQQFxBH8gByADKAIAaigCAAUgBwsgA2ogBEECIAZBAnEbIAUgACgCACgCFBEGAAuaAQAgAEEBOgA1AkAgACgCBCACRw0AIABBAToANAJAIAAoAhAiAkUEQCAAQQE2AiQgACADNgIYIAAgATYCECAAKAIwQQFHDQIgA0EBRg0BDAILIAEgAkYEQCAAKAIYIgJBAkYEQCAAIAM2AhggAyECCyAAKAIwQQFHDQIgAkEBRg0BDAILIAAgACgCJEEBajYCJAsgAEEBOgA2CwtdAQF/IAAoAhAiA0UEQCAAQQE2AiQgACACNgIYIAAgATYCEA8LAkAgASADRgRAIAAoAhhBAkcNASAAIAI2AhgPCyAAQQE6ADYgAEECNgIYIAAgACgCJEEBajYCJAsLmwQBA38gASAAIAFGIgI6AAwCQCACDQADQCABKAIIIgItAAwNAQJAAn8gAiACKAIIIgMoAgAiBEYEQAJAIAMoAgQiBEUNACAELQAMDQAMAwsCQCABIAIoAgBGBEAgAiEBDAELIAIgAigCBCIBKAIAIgA2AgQgASAABH8gACACNgIIIAIoAggFIAMLNgIIIAIoAggiACAAKAIAIAJHQQJ0aiABNgIAIAEgAjYCACACIAE2AgggASgCCCEDCyABQQE6AAwgA0EAOgAMIAMgAygCACIAKAIEIgE2AgAgAQRAIAEgAzYCCAsgACADKAIINgIIIAMoAggiASABKAIAIANHQQJ0aiAANgIAIAAgAzYCBCADQQhqDAELAkAgBEUNACAELQAMDQAMAgsCQCABIAIoAgBHBEAgAiEBDAELIAIgASgCBCIANgIAIAEgAAR/IAAgAjYCCCACKAIIBSADCzYCCCACKAIIIgAgACgCACACR0ECdGogATYCACABIAI2AgQgAiABNgIIIAEoAgghAwsgAUEBOgAMIANBADoADCADIAMoAgQiACgCACIBNgIEIAEEQCABIAM2AggLIAAgAygCCDYCCCADKAIIIgEgASgCACADR0ECdGogADYCACAAIAM2AgAgA0EIagsgADYCAAwCCyAEQQxqIQEgAkEBOgAMIAMgACADRiIC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IAAtAAwNBgsgAEEBOgAMDAgLIAAoAgQiAkUNAQsgAi0ADA0AIAAhAQwBCyABQQE6AAwgAEEAOgAMIAAgASgCBCICNgIAIAIEQCACIAA2AggLIAEgACgCCDYCCCAAKAIIIgIgAigCACAAR0ECdGogATYCACABIAA2AgQgACABNgIIIAAhAgsgASABKAIIIgAtAAw6AAwgAEEBOgAMIAJBAToADCAAIAAoAgQiASgCACICNgIEIAIEQCACIAA2AggLIAEgACgCCDYCCCAAKAIIIgIgAigCACAAR0ECdGogATYCACABIAA2AgAgACABNgIIDAQLIAJFBEAgAEEBOgAMIAFBADoADCABIAAoAgQiAjYCACACBEAgAiABNgIICyAAIAEoAgg2AgggASgCCCICIAIoAgAgAUdBAnRqIAA2AgAgACABNgIEIAEgADYCCCAAIAMgASADRhshAyABKAIAIQALAkACQCAAKAIAIgJFDQAgAi0ADA0AIAAhAQwBCwJAIAAoAgQiAQRAIAEtAAxFDQELIABBADoADCAAKAIIIgAtAAxBACAAIANHGw0CIABBAToADAwFCyACBEAgAi0ADEUEQCAAIQEMAgsgACgCBCEBCyABQQE6AAwgAEEAOgAMIAAgASgCACICNgIEIAIEQCACIAA2AggLIAEgACgCCDYCCCAAKAIIIgIgAigCACAAR0ECdGogATYCACABIAA2AgAgACABNgIIIAAhAgsgASABKAIIIgAtAAw6AAwgAEEBOgAMIAJBAToADCAAIAAoAgAiASgCBCICNgIAIAIEQCACIAA2AggLIAEgACgCCDYCCCAAKAIIIgIgAigCACAAR0ECdGogATYCACABIAA2AgQgACABNgIIDAMLIAAoAggiASABKAIAIABGQQJ0aigCACEADAALAAsgAkEBOgAMCyAFEBcLC1wBAX8jAEEQayIEJAAgBCABNgIMIAQgAjYCCCAEIABC/////w+DNwMAIAMoArgbIgFFBEAQPwALIAEgBEEMaiAEQQhqIAQgASgCACgCGBEKACEBIARBEGokACABC6YMAwl/AnwBfSMAQSBrIgIkACAAKAIAQdQLEAUiAxAEIQcgAxABIAdBqB8gAhAJIQwgAigCABAIIAcQASAAKAIAQcUIEAUiAxAEIQcgAxABIAdBqB8gAhAJIQsgAigCABAIIAcQASAAKAIAQb4JEAUiAxAEIQQgAxABAn8gDEQAAAAAAADwQWMgDEQAAAAAAAAAAGZxBEAgDKsMAQtBAAshCgJ/IAtEAAAAAAAA8EFjIAtEAAAAAAAAAABmcQRAIAurDAELQQALIQdDAADwQSENIAQQDwRAIAAoAgBBvgkQBSIDEAQhCCADEAEgCEHkHyACEAkhCyACKAIAEAggCBABIAu2IQ0LIAQQASAAKAIAQYQLEAUiAxAEIQQgAxABIAQQASAAKAIAQckLEAUiAxAEIQggAxABIAgQASAAKAIAQYoNEAUiABAEIQkgABABIAkQAUHAGxAYIgYgDTgCoBsgASgCABAGIAIgASgCADYCAEGMEyACEAchAEEIEB8iASAANgIEIAFBnBM2AgAgAiABNgIQIwBBEGsiAyQAAkAgBkGoG2oiBSACRg0AIAIgAigCECIBRgRAIAUgBSgCEEYEQCABIAMgASgCACgCDBECACACKAIQIgAgACgCACgCEBEAACACQQA2AhAgBSgCECIAIAIgACgCACgCDBECACAFKAIQIgAgACgCACgCEBEAACAFQQA2AhAgAiACNgIQIAMgBSADKAIAKAIMEQIAIAMgAygCACgCEBEAACAFIAU2AhAMAgsgASAFIAEoAgAoAgwRAgAgAigCECIAIAAoAgAoAhARAAAgAiAFKAIQNgIQIAUgBTYCEAwBCyAFKAIQIgAgBUYEQCAAIAIgACgCACgCDBECACAFKAIQIgAgACgCACgCEBEAACAFIAIoAhA2AhAgAiACNgIQDAELIAIgADYCECAFIAE2AhALIANBEGokAAJAAkAgAigCECIAIAJGBEBBBCEBDAELQQUhASAARQ0BCyAAIAAoAgAgAUECdGooAgARAAALQQAQAUEAEAFB2CFB2CEoAgAiBUEBajYCAEHkISEBAkBB5CEoAgAiAEUEQEHkISEADAELA0ACQCAAKAIQIgMgBUsEQCAAKAIAIgMNASAAIQEMAwsgAyAFTw0CIABBBGohASAAKAIEIgNFDQIgASEACyAAIQEgAyEADAALAAsgASgCACIDRQRAQRgQHyIDIAU2AhAgAyAANgIIIANCADcCACADQQA2AhQgASADNgIAQeAhKAIAKAIAIgAEf0HgISAANgIAIAEoAgAFIAMLIQBB5CEoAgAgABAnQeghQeghKAIAQQFqNgIACyADIAY2AhQgAkGACDYCHCACQRg2AhggAkIANwMAAkAgBigCuBsiAEUNAEEAIQECQCAAIAJBHGogAkEYaiACIAAoAgAoAhgRCgANAEEwEBgiAEUNACAAQQA2AiwgACAEQQNGIgE2AiggAEEANgIgIAAgBjYCHCAAQQE2AhggAEIYNwMQIAAgASAIQQNGciIBNgIkIAFFBEAgAkGACDYCHCACQQg2AhggAkIYNwMAIAYoArgbIgFFDQIgASACQRxqIAJBGGogAiABKAIAKAIYEQoABEAgABAXQQAhAQwCCyAAQig3AxALIABCgICAgIAWNwIEIABBsAEQGDYCACAAIQELIAlBA0YhCCAGIAE2AgAgASgCBEHYAG4hA0F+IQACQCABQdgAEBsiBEUNACAEQgA3AiggBEKAgICAgCA3AiAgBCAHNgIYIAQgCjYCFCAEQQA2AhAgBEKBgICAgPLXADcCCCAEQfXckQM2AgQgBEIANwJQIARCADcCSCAEQUBrQgA3AgAgBEIANwI4IARCADcCMCAEQSNBISAJQQNGGzYCACAEQYACEBgiBzYCHCAHRQ0AIARCADcCKCAEQQA2AkggBEIANwJAIARCADcCOCAEQgA3AjAgAyEACyAGQZwbakEBNgIAIAZBlBtqQoGAgIAQNwIAIAZBkBtqIAg2AgAgBkGMG2ogCDYCACAGQYQbaiABNgIAIAZBiBtqIAA2AgAgBkEEakEAQYAbEBwgAkEgaiQAIAUPCxA/AAuXAgIDfwF9QeQhIQUCQEHkISgCACIDRQRAQeQhIQMMAQsDQAJAIAAgAygCECIESQRAIAMoAgAiBA0BIAMhBQwDCyAAIARNDQIgA0EEaiEFIAMoAgQiBEUNAiAFIQMLIAMhBSAEIQMMAAsACyAFKAIAIgRFBEBBGBAfIgQgADYCECAEIAM2AgggBEIANwIAIARBADYCFCAFIAQ2AgBB4CEoAgAoAgAiAAR/QeAhIAA2AgAgBSgCAAUgBAshA0HkISgCACADECdB6CFB6CEoAgBBAWo2AgALIAQoAhQiA0EEaiEAQwDIr0cgAyoCoBuVIgZDAACAT10gBkMAAAAAYHEEQCAAIAEgAiAGqRAuDwsgACABIAJBABAuCw0AQeAhQeQhKAIAECgLC+gZAgBBgwgL0xkYZnR5cG1wNDIAAAAAbXA0Mmlzb21tcDRlX2ZsdXNoX2luZGV4AHVuc2lnbmVkIHNob3J0AHVuc2lnbmVkIGludABoZWlnaHQAZmxvYXQAdWludDY0X3QAc2hvd19iaXRzAGgyNjRlX2JzX3B1dF9iaXRzAGgyNjRlX2JzX2dldF9wb3NfYml0cwBNUDRFX3NldF92cHMATVA0RV9zZXRfc3BzAE1QNEVfc2V0X3BwcwBwYXRjaF9wcHMAZnBzACh1bnNpZ25lZCkocCAtIGJhc2UpIDw9IGluZGV4X2J5dGVzAChoLT5jYXBhY2l0eSAtIGgtPmJ5dGVzKSA+PSBieXRlcwBmaW5hbGl6ZV9tdXhlcgBjcmVhdGVfbXV4ZXIAVmlkZW9IYW5kbGVyAFNvdW5kSGFuZGxlcgBwYXRjaF9zbGljZV9oZWFkZXIAdW5zaWduZWQgY2hhcgB0ci0+aW5mby50cmFja19tZWRpYV9raW5kID09IGVfdmlkZW8AZnJhZ21lbnRhdGlvbgBib29sAG1pbmltcDRfdmVjdG9yX2FsbG9jX3RhaWwAZW1zY3JpcHRlbjo6dmFsAG11eF9uYWwAc2VxdWVudGlhbAB3aWR0aAAvVXNlcnMvbWFyY29mdWdhcm8vQ29kZS9tcDQtd2FzbS9zcmMvbWluaW1wNC9taW5pbXA0LmgAdW5zaWduZWQgbG9uZwBzdGQ6OndzdHJpbmcAc3RkOjpzdHJpbmcAc3RkOjp1MTZzdHJpbmcAc3RkOjp1MzJzdHJpbmcAbXV4LT5zZXF1ZW50aWFsX21vZGVfZmxhZwBkb3VibGUAdm9pZABjaGFuZ2Vfc3BzX2lkAGhldmMAd3JpdGVfcGVuZGluZ19kYXRhAGgtPmRhdGEAZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZmxvYXQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBjaGFyPgBzdGQ6OmJhc2ljX3N0cmluZzx1bnNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8bG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgbG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZG91YmxlPgBuID4gMCAmJiBuIDw9IDE2AHBwc19pZCA8PSAyNTUAKHVuc2lnbmVkKW4gPD0gMzIALWJzLT5zaGlmdCA8IDMyAHNwc19pZCA8PSAzMQAoaW50KXBvc19iaXRzID49IDAAISh2YWwgPj4gbikATjEwZW1zY3JpcHRlbjN2YWxFAAAAABAAAHcJAAAAAAAAUAoAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAAE5TdDNfXzIxMF9fZnVuY3Rpb242X19mdW5jSVoxMmNyZWF0ZV9tdXhlck4xMGVtc2NyaXB0ZW4zdmFsRVMzX0UzJF8zTlNfOWFsbG9jYXRvcklTNF9FRUZpUEt2bXhFRUUATlN0M19fMjEwX19mdW5jdGlvbjZfX2Jhc2VJRmlQS3ZteEVFRQAAEAAAIgoAACgQAADACQAASAoAAIwJAACMCQAAjAkAAFoxMmNyZWF0ZV9tdXhlck4xMGVtc2NyaXB0ZW4zdmFsRVMwX0UzJF8zAAAAABAAAGgKAACoDwAAjAkAAIwJAABpaWlpAAAAAEgPAACoDwAAwA8AAJwPAAB2aWlpaQAAAEgPAACoDwAAdmlpAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFAE5TdDNfXzIyMV9fYmFzaWNfc3RyaW5nX2NvbW1vbklMYjFFRUUAAAAAABAAABMLAACEEAAA1AoAAAAAAAABAAAAPAsAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJaE5TXzExY2hhcl90cmFpdHNJaEVFTlNfOWFsbG9jYXRvckloRUVFRQAAhBAAAFwLAAAAAAAAAQAAADwLAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSXdOU18xMWNoYXJfdHJhaXRzSXdFRU5TXzlhbGxvY2F0b3JJd0VFRUUAAIQQAAC0CwAAAAAAAAEAAAA8CwAAAAAAAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0lEc05TXzExY2hhcl90cmFpdHNJRHNFRU5TXzlhbGxvY2F0b3JJRHNFRUVFAAAAhBAAAAwMAAAAAAAAAQAAADwLAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSURpTlNfMTFjaGFyX3RyYWl0c0lEaUVFTlNfOWFsbG9jYXRvcklEaUVFRUUAAACEEAAAaAwAAAAAAAABAAAAPAsAAAAAAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0ljRUUAAAAQAADEDAAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJYUVFAAAAEAAA7AwAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWhFRQAAABAAABQNAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lzRUUAAAAQAAA8DQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJdEVFAAAAEAAAZA0AAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWlFRQAAABAAAIwNAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lqRUUAAAAQAAC0DQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJbEVFAAAAEAAA3A0AAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SW1FRQAAABAAAAQOAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lmRUUAAAAQAAAsDgAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJZEVFAAAAEAAAVA4AAFN0OXR5cGVfaW5mbwAAAAAAEAAAfA4AAE4xMF9fY3h4YWJpdjExNl9fc2hpbV90eXBlX2luZm9FAAAAACgQAACUDgAAjA4AAE4xMF9fY3h4YWJpdjExN19fY2xhc3NfdHlwZV9pbmZvRQAAACgQAADEDgAAuA4AAAAAAAA4DwAAEwAAABQAAAAVAAAAFgAAABcAAABOMTBfX2N4eGFiaXYxMjNfX2Z1bmRhbWVudGFsX3R5cGVfaW5mb0UAKBAAABAPAAC4DgAAdgAAAPwOAABEDwAAYgAAAPwOAABQDwAAYwAAAPwOAABcDwAAaAAAAPwOAABoDwAAYQAAAPwOAAB0DwAAcwAAAPwOAACADwAAdAAAAPwOAACMDwAAaQAAAPwOAACYDwAAagAAAPwOAACkDwAAbAAAAPwOAACwDwAAbQAAAPwOAAC8DwAAeAAAAPwOAADIDwAAeQAAAPwOAADUDwAAZgAAAPwOAADgDwAAZAAAAPwOAADsDwAAAAAAAOgOAAATAAAAGAAAABUAAAAWAAAAGQAAABoAAAAbAAAAHAAAAAAAAABwEAAAEwAAAB0AAAAVAAAAFgAAABkAAAAeAAAAHwAAACAAAABOMTBfX2N4eGFiaXYxMjBfX3NpX2NsYXNzX3R5cGVfaW5mb0UAAAAAKBAAAEgQAADoDgAAAAAAAMwQAAATAAAAIQAAABUAAAAWAAAAGQAAACIAAAAjAAAAJAAAAE4xMF9fY3h4YWJpdjEyMV9fdm1pX2NsYXNzX3R5cGVfaW5mb0UAAAAoEAAApBAAAOgOAEHYIQsHAQAAAPASUA==",yt(ze)||(ze=h(ze));function L(b){try{if(b==ze&&f)return new Uint8Array(f);var Q=ql(b);if(Q)return Q;if(u)return u(b);throw"both async and sync fetching of the wasm failed"}catch(X){st(X)}}function B(){return!f&&(a||c)&&typeof fetch=="function"?fetch(ze,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+ze+"'";return b.arrayBuffer()}).catch(function(){return L(ze)}):Promise.resolve().then(function(){return L(ze)})}function j(){var b={a:Jd};function Q(Qe,Ee){var Me=Qe.exports;t.asm=Me,m=t.asm.x,Le(m.buffer),Oe=t.asm.B,ct(t.asm.y),lt()}Kt();function X(Qe){Q(Qe.instance)}function ie(Qe){return B().then(function(Ee){return WebAssembly.instantiate(Ee,b)}).then(function(Ee){return Ee}).then(Qe,function(Ee){A("failed to asynchronously prepare wasm: "+Ee),st(Ee)})}function Ie(){return!f&&typeof WebAssembly.instantiateStreaming=="function"&&!yt(ze)&&typeof fetch=="function"?fetch(ze,{credentials:"same-origin"}).then(function(Qe){var Ee=WebAssembly.instantiateStreaming(Qe,b);return Ee.then(X,function(Me){return A("wasm streaming compile failed: "+Me),A("falling back to ArrayBuffer instantiation"),ie(X)})}):ie(X)}if(t.instantiateWasm)try{var Ce=t.instantiateWasm(b,Q);return Ce}catch(Qe){return A("Module.instantiateWasm callback failed with error: "+Qe),!1}return Ie().catch(s),{}}function oe(b){for(;b.length>0;){var Q=b.shift();if(typeof Q=="function"){Q(t);continue}var X=Q.func;typeof X=="number"?Q.arg===void 0?Oe.get(X)():Oe.get(X)(Q.arg):X(Q.arg===void 0?null:Q.arg)}}function de(b,Q,X,ie){st("Assertion failed: "+p(b)+", at: "+[Q?p(Q):"unknown filename",X,ie?p(ie):"unknown function"])}function ce(b,Q,X,ie,Ie){}function Ge(b){switch(b){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+b)}}function be(){for(var b=new Array(256),Q=0;Q<256;++Q)b[Q]=String.fromCharCode(Q);Pe=b}var Pe=void 0;function Je(b){for(var Q="",X=b;z[X];)Q+=Pe[z[X++]];return Q}var pe={},Re={},Ke={},ke=48,Be=57;function rt(b){if(b===void 0)return"_unknown";b=b.replace(/[^a-zA-Z0-9_]/g,"$");var Q=b.charCodeAt(0);return Q>=ke&&Q<=Be?"_"+b:b}function We(b,Q){return b=rt(b),new Function("body","return function "+b+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(Q)}function Ze(b,Q){var X=We(Q,function(ie){this.name=Q,this.message=ie;var Ie=new Error(ie).stack;Ie!==void 0&&(this.stack=this.toString()+`
`+Ie.replace(/^Error(:[^\n]*)?\n/,""))});return X.prototype=Object.create(b.prototype),X.prototype.constructor=X,X.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},X}var V=void 0;function ve(b){throw new V(b)}var W=void 0;function le(b){throw new W(b)}function De(b,Q,X){b.forEach(function(Ee){Ke[Ee]=Q});function ie(Ee){var Me=X(Ee);Me.length!==b.length&&le("Mismatched type converter count");for(var ft=0;ft<b.length;++ft)Se(b[ft],Me[ft])}var Ie=new Array(Q.length),Ce=[],Qe=0;Q.forEach(function(Ee,Me){Re.hasOwnProperty(Ee)?Ie[Me]=Re[Ee]:(Ce.push(Ee),pe.hasOwnProperty(Ee)||(pe[Ee]=[]),pe[Ee].push(function(){Ie[Me]=Re[Ee],++Qe,Qe===Ce.length&&ie(Ie)}))}),Ce.length===0&&ie(Ie)}function Se(b,Q,X){if(X=X||{},!("argPackAdvance"in Q))throw new TypeError("registerType registeredInstance requires argPackAdvance");var ie=Q.name;if(b||ve('type "'+ie+'" must have a positive integer typeid pointer'),Re.hasOwnProperty(b)){if(X.ignoreDuplicateRegistrations)return;ve("Cannot register type '"+ie+"' twice")}if(Re[b]=Q,delete Ke[b],pe.hasOwnProperty(b)){var Ie=pe[b];delete pe[b],Ie.forEach(function(Ce){Ce()})}}function ut(b,Q,X,ie,Ie){var Ce=Ge(X);Q=Je(Q),Se(b,{name:Q,fromWireType:function(Qe){return!!Qe},toWireType:function(Qe,Ee){return Ee?ie:Ie},argPackAdvance:8,readValueFromPointer:function(Qe){var Ee;if(X===1)Ee=H;else if(X===2)Ee=$;else if(X===4)Ee=re;else throw new TypeError("Unknown boolean type size: "+Q);return this.fromWireType(Ee[Qe>>Ce])},destructorFunction:null})}var Tt=[],xt=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function At(b){b>4&&--xt[b].refcount==0&&(xt[b]=void 0,Tt.push(b))}function qt(){for(var b=0,Q=5;Q<xt.length;++Q)xt[Q]!==void 0&&++b;return b}function In(){for(var b=5;b<xt.length;++b)if(xt[b]!==void 0)return xt[b];return null}function Is(){t.count_emval_handles=qt,t.get_first_emval=In}function Ln(b){switch(b){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var Q=Tt.length?Tt.pop():xt.length;return xt[Q]={refcount:1,value:b},Q}}}function _n(b){return this.fromWireType(te[b>>2])}function Ji(b,Q){Q=Je(Q),Se(b,{name:Q,fromWireType:function(X){var ie=xt[X].value;return At(X),ie},toWireType:function(X,ie){return Ln(ie)},argPackAdvance:8,readValueFromPointer:_n,destructorFunction:null})}function Di(b){if(b===null)return"null";var Q=typeof b;return Q==="object"||Q==="array"||Q==="function"?b.toString():""+b}function ji(b,Q){switch(Q){case 2:return function(X){return this.fromWireType(ye[X>>2])};case 3:return function(X){return this.fromWireType(_e[X>>3])};default:throw new TypeError("Unknown float type: "+b)}}function Qi(b,Q,X){var ie=Ge(X);Q=Je(Q),Se(b,{name:Q,fromWireType:function(Ie){return Ie},toWireType:function(Ie,Ce){if(typeof Ce!="number"&&typeof Ce!="boolean")throw new TypeError('Cannot convert "'+Di(Ce)+'" to '+this.name);return Ce},argPackAdvance:8,readValueFromPointer:ji(Q,ie),destructorFunction:null})}function _s(b,Q){if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var X=We(b.name||"unknownFunctionName",function(){});X.prototype=b.prototype;var ie=new X,Ie=b.apply(ie,Q);return Ie instanceof Object?Ie:ie}function fi(b){for(;b.length;){var Q=b.pop(),X=b.pop();X(Q)}}function Cs(b,Q,X,ie,Ie){var Ce=Q.length;Ce<2&&ve("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Qe=Q[1]!==null&&X!==null,Ee=!1,Me=1;Me<Q.length;++Me)if(Q[Me]!==null&&Q[Me].destructorFunction===void 0){Ee=!0;break}for(var ft=Q[0].name!=="void",St="",Ht="",Me=0;Me<Ce-2;++Me)St+=(Me!==0?", ":"")+"arg"+Me,Ht+=(Me!==0?", ":"")+"arg"+Me+"Wired";var yn="return function "+rt(b)+"("+St+`) {
if (arguments.length !== `+(Ce-2)+`) {
throwBindingError('function `+b+" called with ' + arguments.length + ' arguments, expected "+(Ce-2)+` args!');
}
`;Ee&&(yn+=`var destructors = [];
`);var Zi=Ee?"destructors":"null",Li=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],Ar=[ve,ie,Ie,fi,Q[0],Q[1]];Qe&&(yn+="var thisWired = classParam.toWireType("+Zi+`, this);
`);for(var Me=0;Me<Ce-2;++Me)yn+="var arg"+Me+"Wired = argType"+Me+".toWireType("+Zi+", arg"+Me+"); // "+Q[Me+2].name+`
`,Li.push("argType"+Me),Ar.push(Q[Me+2]);if(Qe&&(Ht="thisWired"+(Ht.length>0?", ":"")+Ht),yn+=(ft?"var rv = ":"")+"invoker(fn"+(Ht.length>0?", ":"")+Ht+`);
`,Ee)yn+=`runDestructors(destructors);
`;else for(var Me=Qe?1:2;Me<Q.length;++Me){var xs=Me===1?"thisWired":"arg"+(Me-2)+"Wired";Q[Me].destructorFunction!==null&&(yn+=xs+"_dtor("+xs+"); // "+Q[Me].name+`
`,Li.push(xs+"_dtor"),Ar.push(Q[Me].destructorFunction))}ft&&(yn+=`var ret = retType.fromWireType(rv);
return ret;
`),yn+=`}
`,Li.push(yn);var jd=_s(Function,Li).apply(null,Ar);return jd}function $i(b,Q,X){if(b[Q].overloadTable===void 0){var ie=b[Q];b[Q]=function(){return b[Q].overloadTable.hasOwnProperty(arguments.length)||ve("Function '"+X+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+b[Q].overloadTable+")!"),b[Q].overloadTable[arguments.length].apply(this,arguments)},b[Q].overloadTable=[],b[Q].overloadTable[ie.argCount]=ie}}function ys(b,Q,X){t.hasOwnProperty(b)?((X===void 0||t[b].overloadTable!==void 0&&t[b].overloadTable[X]!==void 0)&&ve("Cannot register public name '"+b+"' twice"),$i(t,b,b),t.hasOwnProperty(X)&&ve("Cannot register multiple overloads of a function with the same number of arguments ("+X+")!"),t[b].overloadTable[X]=Q):(t[b]=Q,X!==void 0&&(t[b].numArguments=X))}function ur(b,Q){for(var X=[],ie=0;ie<b;ie++)X.push(re[(Q>>2)+ie]);return X}function Nn(b,Q,X){t.hasOwnProperty(b)||le("Replacing nonexistant public symbol"),t[b].overloadTable!==void 0&&X!==void 0?t[b].overloadTable[X]=Q:(t[b]=Q,t[b].argCount=X)}function M(b,Q,X){var ie=t["dynCall_"+b];return X&&X.length?ie.apply(null,[Q].concat(X)):ie.call(null,Q)}function d(b,Q,X){return b.includes("j")?M(b,Q,X):Oe.get(Q).apply(null,X)}function E(b,Q){var X=[];return function(){X.length=arguments.length;for(var ie=0;ie<arguments.length;ie++)X[ie]=arguments[ie];return d(b,Q,X)}}function y(b,Q){b=Je(b);function X(){return b.includes("j")?E(b,Q):Oe.get(Q)}var ie=X();return typeof ie!="function"&&ve("unknown function pointer with signature "+b+": "+Q),ie}var S=void 0;function G(b){var Q=Jl(b),X=Je(Q);return pi(Q),X}function O(b,Q){var X=[],ie={};function Ie(Ce){if(!ie[Ce]&&!Re[Ce]){if(Ke[Ce]){Ke[Ce].forEach(Ie);return}X.push(Ce),ie[Ce]=!0}}throw Q.forEach(Ie),new S(b+": "+X.map(G).join([", "]))}function q(b,Q,X,ie,Ie,Ce){var Qe=ur(Q,X);b=Je(b),Ie=y(ie,Ie),ys(b,function(){O("Cannot call "+b+" due to unbound types",Qe)},Q-1),De([],Qe,function(Ee){var Me=[Ee[0],null].concat(Ee.slice(1));return Nn(b,Cs(b,Me,null,Ie,Ce),Q-1),[]})}function ne(b,Q,X){switch(Q){case 0:return X?function(ie){return H[ie]}:function(ie){return z[ie]};case 1:return X?function(ie){return $[ie>>1]}:function(ie){return Y[ie>>1]};case 2:return X?function(ie){return re[ie>>2]}:function(ie){return te[ie>>2]};default:throw new TypeError("Unknown integer type: "+b)}}function Z(b,Q,X,ie,Ie){Q=Je(Q),Ie===-1&&(Ie=4294967295);var Ce=Ge(X),Qe=function(ft){return ft};if(ie===0){var Ee=32-8*X;Qe=function(ft){return ft<<Ee>>>Ee}}var Me=Q.includes("unsigned");Se(b,{name:Q,fromWireType:Qe,toWireType:function(ft,St){if(typeof St!="number"&&typeof St!="boolean")throw new TypeError('Cannot convert "'+Di(St)+'" to '+this.name);if(St<ie||St>Ie)throw new TypeError('Passing a number "'+Di(St)+'" from JS side to C/C++ side to an argument of type "'+Q+'", which is outside the valid range ['+ie+", "+Ie+"]!");return Me?St>>>0:St|0},argPackAdvance:8,readValueFromPointer:ne(Q,Ce,ie!==0),destructorFunction:null})}function ee(b,Q,X){var ie=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],Ie=ie[Q];function Ce(Qe){Qe=Qe>>2;var Ee=te,Me=Ee[Qe],ft=Ee[Qe+1];return new Ie(U,ft,Me)}X=Je(X),Se(b,{name:X,fromWireType:Ce,argPackAdvance:8,readValueFromPointer:Ce},{ignoreDuplicateRegistrations:!0})}function J(b,Q){Q=Je(Q);var X=Q==="std::string";Se(b,{name:Q,fromWireType:function(ie){var Ie=te[ie>>2],Ce;if(X)for(var Qe=ie+4,Ee=0;Ee<=Ie;++Ee){var Me=ie+4+Ee;if(Ee==Ie||z[Me]==0){var ft=Me-Qe,St=p(Qe,ft);Ce===void 0?Ce=St:(Ce+="\0",Ce+=St),Qe=Me+1}}else{for(var Ht=new Array(Ie),Ee=0;Ee<Ie;++Ee)Ht[Ee]=String.fromCharCode(z[ie+4+Ee]);Ce=Ht.join("")}return pi(ie),Ce},toWireType:function(ie,Ie){Ie instanceof ArrayBuffer&&(Ie=new Uint8Array(Ie));var Ce,Qe=typeof Ie=="string";Qe||Ie instanceof Uint8Array||Ie instanceof Uint8ClampedArray||Ie instanceof Int8Array||ve("Cannot pass non-string to std::string"),X&&Qe?Ce=function(){return w(Ie)}:Ce=function(){return Ie.length};var Ee=Ce(),Me=ua(4+Ee+1);if(te[Me>>2]=Ee,X&&Qe)x(Ie,Me+4,Ee+1);else if(Qe)for(var ft=0;ft<Ee;++ft){var St=Ie.charCodeAt(ft);St>255&&(pi(Me),ve("String has UTF-16 code units that do not fit in 8 bits")),z[Me+4+ft]=St}else for(var ft=0;ft<Ee;++ft)z[Me+4+ft]=Ie[ft];return ie!==null&&ie.push(pi,Me),Me},argPackAdvance:8,readValueFromPointer:_n,destructorFunction:function(ie){pi(ie)}})}function ue(b,Q,X){X=Je(X);var ie,Ie,Ce,Qe,Ee;Q===2?(ie=P,Ie=N,Qe=D,Ce=function(){return Y},Ee=1):Q===4&&(ie=T,Ie=F,Qe=_,Ce=function(){return te},Ee=2),Se(b,{name:X,fromWireType:function(Me){for(var ft=te[Me>>2],St=Ce(),Ht,yn=Me+4,Zi=0;Zi<=ft;++Zi){var Li=Me+4+Zi*Q;if(Zi==ft||St[Li>>Ee]==0){var Ar=Li-yn,xs=ie(yn,Ar);Ht===void 0?Ht=xs:(Ht+="\0",Ht+=xs),yn=Li+Q}}return pi(Me),Ht},toWireType:function(Me,ft){typeof ft!="string"&&ve("Cannot pass non-string to C++ string type "+X);var St=Qe(ft),Ht=ua(4+St+Q);return te[Ht>>2]=St>>Ee,Ie(ft,Ht+4,St+Q),Me!==null&&Me.push(pi,Ht),Ht},argPackAdvance:8,readValueFromPointer:_n,destructorFunction:function(Me){pi(Me)}})}function ge(b,Q){Q=Je(Q),Se(b,{isVoid:!0,name:Q,argPackAdvance:0,fromWireType:function(){},toWireType:function(X,ie){}})}function fe(b){return b||ve("Cannot use deleted val. handle = "+b),xt[b].value}function Ne(b,Q){var X=Re[b];return X===void 0&&ve(Q+" has unknown type "+G(b)),X}function Ae(b,Q,X){b=fe(b),Q=Ne(Q,"emval::as");var ie=[],Ie=Ln(ie);return re[X>>2]=Ie,Q.toWireType(ie,b)}function ae(b,Q){for(var X=new Array(b),ie=0;ie<b;++ie)X[ie]=Ne(re[(Q>>2)+ie],"parameter "+ie);return X}function Fe(b,Q,X,ie){b=fe(b);for(var Ie=ae(Q,X),Ce=new Array(Q),Qe=0;Qe<Q;++Qe){var Ee=Ie[Qe];Ce[Qe]=Ee.readValueFromPointer(ie),ie+=Ee.argPackAdvance}var Me=b.apply(void 0,Ce);return Ln(Me)}function He(b,Q){return b=fe(b),Q=fe(Q),Ln(b[Q])}function dt(b){b>4&&(xt[b].refcount+=1)}function Ot(b){return b=fe(b),typeof b=="number"}var it={};function ht(b){var Q=it[b];return Q===void 0?Je(b):Q}function tt(b){return Ln(ht(b))}function Ft(b){var Q=xt[b].value;fi(Q),At(b)}function Pt(b,Q){b=Ne(b,"_emval_take_value");var X=b.readValueFromPointer(Q);return Ln(X)}function et(){st()}function _t(b,Q,X){z.copyWithin(b,Q,Q+X)}function Cn(b){try{return m.grow(b-U.byteLength+65535>>>16),Le(m.buffer),1}catch{}}function Jn(b){var Q=z.length;b=b>>>0;var X=2147483648;if(b>X)return!1;for(var ie=1;ie<=4;ie*=2){var Ie=Q*(1+.2/ie);Ie=Math.min(Ie,b+100663296);var Ce=Math.min(X,v(Math.max(b,Ie),65536)),Qe=Cn(Ce);if(Qe)return!0}return!1}be(),V=t.BindingError=Ze(Error,"BindingError"),W=t.InternalError=Ze(Error,"InternalError"),Is(),S=t.UnboundTypeError=Ze(Error,"UnboundTypeError");var Mn=typeof atob=="function"?atob:function(b){var Q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",X="",ie,Ie,Ce,Qe,Ee,Me,ft,St=0;b=b.replace(/[^A-Za-z0-9\+\/\=]/g,"");do Qe=Q.indexOf(b.charAt(St++)),Ee=Q.indexOf(b.charAt(St++)),Me=Q.indexOf(b.charAt(St++)),ft=Q.indexOf(b.charAt(St++)),ie=Qe<<2|Ee>>4,Ie=(Ee&15)<<4|Me>>2,Ce=(Me&3)<<6|ft,X=X+String.fromCharCode(ie),Me!==64&&(X=X+String.fromCharCode(Ie)),ft!==64&&(X=X+String.fromCharCode(Ce));while(St<b.length);return X};function vs(b){try{for(var Q=Mn(b),X=new Uint8Array(Q.length),ie=0;ie<Q.length;++ie)X[ie]=Q.charCodeAt(ie);return X}catch{throw new Error("Converting base64 string to bytes failed.")}}function ql(b){if(yt(b))return vs(b.slice(qe.length))}var Jd={a:de,q:ce,u:ut,t:Ji,m:Qi,k:q,d:Z,c:ee,n:J,l:ue,v:ge,j:Ae,w:Fe,b:At,e:He,g:dt,p:Ot,f:tt,i:Ft,h:Pt,o:et,r:_t,s:Jn};j(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.y).apply(null,arguments)};var ua=t._malloc=function(){return(ua=t._malloc=t.asm.z).apply(null,arguments)},pi=t._free=function(){return(pi=t._free=t.asm.A).apply(null,arguments)},Jl=t.___getTypeName=function(){return(Jl=t.___getTypeName=t.asm.C).apply(null,arguments)};t.___embind_register_native_and_builtin_types=function(){return(t.___embind_register_native_and_builtin_types=t.asm.D).apply(null,arguments)},t.dynCall_ijiii=function(){return(t.dynCall_ijiii=t.asm.E).apply(null,arguments)};var Xr;k=function b(){Xr||Aa(),Xr||(k=b)};function Aa(b){if($e>0||(me(),$e>0))return;function Q(){Xr||(Xr=!0,t.calledRun=!0,!I&&(xe(),n(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),Ye()))}t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),Q()},1)):Q()}if(t.run=Aa,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return Aa(),t.ready}}(),qC=Ll,ec=new Uint8Array([0,0,0,1]);function JC(i){console.error(i)}Ll.createFile=od;function od(i=256){let e=0,t=0,n=new Uint8Array(i);return{contents:function(){return n.slice(0,t)},seek:function(r){e=r},write:function(r){let o=r.byteLength;return s(e+o),n.set(r,e),e+=o,t=Math.max(t,e),o}};function s(r){var o=n.length;if(o>=r)return;var a=1024*1024;r=Math.max(r,o*(o<a?2:1.125)>>>0),o!=0&&(r=Math.max(r,256));let c=n;n=new Uint8Array(r),t>0&&n.set(c.subarray(0,t),0)}}Ll.isWebCodecsSupported=Xo;function Xo(){return typeof window<"u"&&typeof window.VideoEncoder=="function"}function jC(i,e={}){let{width:t,height:n,groupOfPictures:s=20,fps:r=30,fragmentation:o=!1,sequential:a=!1,hevc:c=!1,format:l="annexb",codec:h="avc1.4d0034",acceleration:u,bitrate:A,error:f=JC,encoderOptions:m={},flushFrequency:I=10}=e;if(!Xo())throw new Error("MP4 H264 encoding/decoding depends on WebCodecs API which is not supported in this environment");if(typeof t!="number"||typeof n!="number")throw new Error("Must specify { width, height } options");if(!isFinite(t)||t<0||!isFinite(n)||n<0)throw new Error("{ width, height } options must be positive integers");let g=od(),p=i.create_muxer({width:t,height:n,fps:r,fragmentation:o,sequential:a,hevc:c},P),C={codec:h,width:t,height:n,avc:{format:l},hardwareAcceleration:u,bitrate:A,...m},x=0,w=new window.VideoEncoder({output(T,F){D(T,F)},error:f});return w.configure(C),{async end(){return await w.flush(),w.close(),i.finalize_muxer(p),g.contents()},async addFrame(T){let F=1/r*x*1e6,_=x%s==0,v=new VideoFrame(T,{timestamp:F});w.encode(v,{keyFrame:_}),v.close(),I!=null&&(x+1)%I==0&&await w.flush(),x++},async flush(){return w.flush()}};function P(T,F,_){g.seek(_);let v=i.HEAPU8.subarray(T,T+F);return g.write(v)!==v.byteLength}function N(T){let F=i._malloc(T.byteLength);i.HEAPU8.set(T,F),i.mux_nal(p,F,T.byteLength),i._free(F)}function D(T,F){let _=null;if(F.description)try{_=ey(F.description)}catch(U){f(U);return}let v=[];if(_&&(_.sps_list.forEach(U=>{v.push(ec),v.push(U)}),_.pps_list.forEach(U=>{v.push(ec),v.push(U)})),l==="annexb"){let U=new Uint8Array(T.byteLength);T.copyTo(U),v.push(U)}else try{let U=new ArrayBuffer(T.byteLength);T.copyTo(U),ZC(U).forEach(H=>{v.push(ec),v.push(H)})}catch(U){f(U);return}N($C(v))}}function $C(i){let e=i.reduce((s,r)=>s+r.byteLength,0),t=new Uint8Array(e),n=0;for(let s=0;s<i.length;s++){let r=i[s];t.set(r,n),n+=r.byteLength}return t}function ZC(i){let e=4,t=0,n=[],s=i.byteLength,r=new Uint8Array(i);for(;t+e<s;){let o=r[t];if(o=(o<<8)+r[t+1],o=(o<<8)+r[t+2],o=(o<<8)+r[t+3],n.push(new Uint8Array(i,t+e,o)),o==0)throw new Error("Error: invalid nal_length 0");t+=e+o}return n}function ey(i){let e=new DataView(i),t=0,n=e.getUint8(t++),s=e.getUint8(t++),r=e.getUint8(t++),o=e.getUint8(t++),a=(e.getUint8(t++)&3)+1;if(a!==4)throw new Error("Expected length_size to indicate 4 bytes");let c=e.getUint8(t++)&31,l=[];for(let A=0;A<c;A++){let f=e.getUint16(t,!1);t+=2;let m=new Uint8Array(e.buffer,t,f);l.push(m),t+=f}let h=e.getUint8(t++),u=[];for(let A=0;A<h;A++){let f=e.getUint16(t,!1);t+=2;let m=new Uint8Array(e.buffer,t,f);u.push(m),t+=f}return{offset:t,version:n,profile:s,compat:r,level:o,length_size:a,pps_list:u,sps_list:l,numSPS:c}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class si{constructor(e,t,n,s,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),si.nextNameID=si.nextNameID||0,this.$name.id=`lil-gui-name-${++si.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class ty extends si{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function il(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const ny={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:il,toHexString:il},Or={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},iy={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=Or.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const s=i*n<<16^e*n<<8^t*n<<0;return Or.toHexString(s)}},sy={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=Or.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const s=i*n<<16^e*n<<8^t*n<<0;return Or.toHexString(s)}},ry=[ny,Or,iy,sy];function oy(i){return ry.find(e=>e.match(i))}class ay extends si{constructor(e,t,n,s){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=oy(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=il(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class tc extends si{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class ad extends si{constructor(e,t,n,s,r,o){super(e,t,n,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let C=parseFloat(this.$input.value);isNaN(C)||(this._stepExplicit&&(C=this._snap(C)),this.setValue(this._clamp(C)))},n=C=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+C),this.$input.value=this.getValue())},s=C=>{C.key==="Enter"&&this.$input.blur(),C.code==="ArrowUp"&&(C.preventDefault(),n(this._step*this._arrowKeyMultiplier(C))),C.code==="ArrowDown"&&(C.preventDefault(),n(this._step*this._arrowKeyMultiplier(C)*-1))},r=C=>{this._inputFocused&&(C.preventDefault(),n(this._step*this._normalizeMouseWheel(C)))};let o=!1,a,c,l,h,u;const A=5,f=C=>{a=C.clientX,c=l=C.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",I)},m=C=>{if(o){const x=C.clientX-a,w=C.clientY-c;Math.abs(w)>A?(C.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>A&&I()}if(!o){const x=C.clientY-l;u-=x*this._step*this._arrowKeyMultiplier(C),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}l=C.clientY},I=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",I)},g=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,C,x,w,P)=>(p-C)/(x-C)*(P-w)+w,t=p=>{const C=this.$slider.getBoundingClientRect();let x=e(p,C.left,C.right,this._min,this._max);this._snapClampSetValue(x)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=p=>{t(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,c;const l=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,c=p.touches[0].clientY,o=!0):l(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",A))},u=p=>{if(o){const C=p.touches[0].clientX-a,x=p.touches[0].clientY-c;Math.abs(C)>Math.abs(x)?l(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",A))}else p.preventDefault(),t(p.touches[0].clientX)},A=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",A)},f=this._callOnFinishChange.bind(this),m=400;let I;const g=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const x=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(I),I=setTimeout(f,m)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class cy extends si{constructor(e,t,n,s){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class ly extends si{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const hy=`.lil-gui {
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
}`;function uy(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Tu=!1;class Nl{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!Tu&&a&&(uy(hy),Tu=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,n,s,r){if(Object(n)===n)return new cy(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new ad(this,e,t,n,s,r);case"boolean":return new ty(this,e,t);case"string":return new ly(this,e,t);case"function":return new tc(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new ay(this,e,t,n)}addFolder(e){const t=new Nl({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof tc||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof tc)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Ay=i=>Math.pow(10,i),Sr=Math.log10;class dy extends ad{constructor(e,t,n,s,r,o){super(e,t,n,s,r,o)}updateDisplay(){if(super.updateDisplay(),this._hasSlider){const e=Sr(this.getValue()),t=Sr(this._min),n=Sr(this._max);let s=(e-t)/(n-t);s=Math.max(0,Math.min(s,1)),this.$fill.style.width=s*100+"%"}return this}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=Sr(this._min),t=Sr(this._max),n=l=>(l<e&&(l=e),l>t&&(l=t),l),s=(l,h,u,A,f)=>(l-h)/(u-h)*(f-A)+A,r=l=>{const h=this.$slider.getBoundingClientRect();let u=s(l,h.left,h.right,e,t);this.setValue(this._snap(Ay(n(this._snap(u)))))},o=l=>{this._setDraggingStyle(!0),r(l.clientX),window.addEventListener("pointermove",a),window.addEventListener("pointerup",c)},a=l=>{r(l.clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",c)};this.$slider.addEventListener("pointerdown",o)}}class fy{#t;#n;isRunning=!1;time=0;dt=0;#i=performance.now();#e=[];#c=[];#l=[];#h=[];#s;#r;#u;#o;#A;#a=[];options;renderer;canvas;maxPixelRatio;maxDeltaTime;camera;scene;gl;isDragging=!1;composer;orbitControls;world;cannonDebugger;stats;gui;guiState;loadGPUTier;gpu;get background(){return this.renderer.getClearColor(new je)}get backgroundAlpha(){return this.renderer.getClearAlpha()}set background(e){this.renderer.setClearColor(e,this.backgroundAlpha)}set backgroundAlpha(e){this.renderer.setClearColor(this.background,e)}get isRecording(){return!!this.#o}constructor({background:e="#111",backgroundAlpha:t=1,fov:n=45,frustumSize:s=3,near:r=.01,far:o=100,...a}={}){this.options={background:e,backgroundAlpha:t,fov:n,frustumSize:s,near:r,far:o,...a},this.renderer=new I_({antialias:!this.options.postprocessing,alpha:t!==1,preserveDrawingBuffer:!0,...this.options}),this.options.sortObjects!==void 0&&(this.renderer.sortObjects=this.options.sortObjects),this.options.xr&&(this.renderer.xr.enabled=!0),this.canvas=this.renderer.domElement,this.renderer.setClearColor(e,t),this.#t=this.options.width,this.#n=this.options.height,this.maxPixelRatio=this.options.maxPixelRatio||1.5,this.maxDeltaTime=this.options.maxDeltaTime||1/30;const c=(this.#t||window.innerWidth)/(this.#n||window.innerHeight);if(this.options.orthographic?(this.camera=new ia(-(s*c)/2,s*c/2,s/2,-s/2,r,o),this.camera.frustumSize=s):this.camera=new an(n,c,r,o),this.camera.position.copy(this.options.cameraPosition||new K(0,0,4)),this.camera.lookAt(this.options.cameraTarget||new K),this.scene=new jc,this.gl=this.renderer.getContext(),window.addEventListener("resize",this.resize),window.addEventListener("orientationchange",this.resize),this.resize(),this.isDragging=!1,this.canvas.addEventListener("pointerdown",l=>{if(!l.isPrimary)return;this.isDragging=!0,this.#s=l.offsetX,this.#r=l.offsetY;const h={x:l.offsetX,y:l.offsetY};this.scene.traverse(u=>{typeof u.onPointerDown=="function"&&u.onPointerDown(l,h)}),this.#c.forEach(u=>u(l,h))}),this.canvas.addEventListener("pointermove",l=>{if(!l.isPrimary)return;const h={x:l.offsetX,y:l.offsetY,...this.#s!==void 0&&{dragX:l.offsetX-this.#s},...this.#r!==void 0&&{dragY:l.offsetY-this.#r}};this.scene.traverse(u=>{typeof u.onPointerMove=="function"&&u.onPointerMove(l,h)}),this.#l.forEach(u=>u(l,h))}),this.canvas.addEventListener("pointerup",l=>{if(!l.isPrimary)return;this.isDragging=!1;const h={x:l.offsetX,y:l.offsetY,...this.#s!==void 0&&{dragX:l.offsetX-this.#s},...this.#r!==void 0&&{dragY:l.offsetY-this.#r}};this.scene.traverse(u=>{typeof u.onPointerUp=="function"&&u.onPointerUp(l,h)}),this.#h.forEach(u=>u(l,h)),this.#s=void 0,this.#r=void 0}),this.options.postprocessing){const l=this.gl.getParameter(this.gl.MAX_SAMPLES);this.composer=new p0(this.renderer,{multisampling:Math.min(8,l),frameBufferType:ln,...this.options}),this.composer.addPass(new $0(this.scene,this.camera))}}async init(){this.options.orbitControls&&(this.orbitControls=new aC(this.camera,this.canvas),typeof this.options.orbitControls=="object"&&Object.assign(this.orbitControls,this.options.orbitControls)),this.options.world&&(this.world=this.options.world,this.options.showWorldWireframes&&(this.cannonDebugger=new KC(this.scene,this.world.bodies))),this.options.showFps&&(this.stats=new _C,this.stats.showPanel(0),document.body.appendChild(this.stats.dom)),this.options.gui&&(this.gui=new Nl,this.options.guiClosed&&this.gui.close(),Object.assign(Object.getPrototypeOf(this.gui),{addSmart(e,t,n=""){const s=e[t];switch(typeof s){case"number":return s===0?this.add(e,t,-10,10,.01):0<s&&s<1&&!["f","a","frequency","amplitude"].includes(n)?this.add(e,t,0,1,.01):s>0?new dy(this,e,t,.01,s<100?100:1e3,.01):this.add(e,t,-10,0,.01);case"object":return this.addColor(e,t);default:return this.add(e,t)}},wireUniforms(e,t,{blacklist:n=[]}={}){const s=this.addFolder(e);Object.keys(t).forEach(r=>{if(n.includes(r))return;const o=t[r];s.addSmart(o,"value",r).name(r)})}}),typeof this.options.gui=="object"&&(this.guiState=this.options.gui,Object.keys(this.options.gui).forEach(e=>{this.gui?.addSmart(this.guiState,e)}))),this.loadGPUTier=SC({glContext:this.gl}).then(e=>{this.gpu={...e}}),Xo()&&qC().then(e=>{this.#u=e})}get width(){return this.#t||window.innerWidth}get height(){return this.#n||window.innerHeight}get pixelRatio(){return Math.min(this.maxPixelRatio,window.devicePixelRatio)}resize=({width:e=this.width,height:t=this.height,pixelRatio:n=this.pixelRatio}={})=>{if(this.renderer.getPixelRatio()!==n&&this.renderer.setPixelRatio(n),this.renderer.setSize(e,t),this.camera.isPerspectiveCamera)this.camera.aspect=e/t;else{const s=e/t,r=this.camera;r.left=-(r.frustumSize*s)/2,r.right=r.frustumSize*s/2,r.top=r.frustumSize/2,r.bottom=-r.frustumSize/2}return this.camera.updateProjectionMatrix(),this.composer&&this.composer.setSize(),this.scene.traverse(s=>{typeof s.resize=="function"&&s.resize({width:e,height:t,pixelRatio:n})}),this.draw(),this};saveScreenshot=async({width:e=this.width,height:t=this.height,fileName:n="Screenshot"}={})=>{this.resize({width:e,height:t,pixelRatio:1});const s=await new Promise(r=>this.canvas.toBlob(r,"image/png"));this.resize(),s&&Ru(`${n}.png`,s)};startRecording=({width:e=this.width,height:t=this.height,fileName:n="Recording",...s}={})=>{if(!Xo())throw new Error("You need the WebCodecs API to use mp4-wasm");if(this.isRecording)return;this.#A=n,this.resize({width:e,height:t,pixelRatio:1}),this.draw();const r=60;this.#o=this.#u.createWebCodecsEncoder({width:Du(e),height:Du(t),fps:r,bitrate:120*1e3*1e3,encoderOptions:{framerate:Math.min(30,r)},...s})};stopRecording=async()=>{if(!this.isRecording)return;for(let n of this.#a)await this.#o.addFrame(n);const e=await this.#o.end(),t=new Blob([e]);this.#o=void 0,this.#a.forEach(n=>n.close()),this.#a.length=0,this.resize(),this.draw(),Ru(`${this.#A}.mp4`,t)};update=(e,t,n)=>(this.orbitControls&&this.orbitControls.update(),this.scene.traverse(s=>{typeof s.update=="function"&&!s.isTransformControls&&s.update(e,t,n)}),this.world&&(this.world.step(1/60,e),this.cannonDebugger&&this.cannonDebugger.update(),this.world.bodies.forEach(s=>{typeof s.update=="function"&&s.update(e,t)})),this.#e.forEach(s=>s(e,t,n)),this);onUpdate(e){this.#e.push(e)}onPointerDown(e){this.#c.push(e)}onPointerMove(e){this.#l.push(e)}onPointerUp(e){this.#h.push(e)}offUpdate(e){const t=this.#e.indexOf(e);t!==-1&&this.#e.splice(t,1)}offPointerDown(e){const t=this.#c.indexOf(e);t!==-1&&this.#c.splice(t,1)}offPointerMove(e){const t=this.#l.indexOf(e);t!==-1&&this.#l.splice(t,1)}offPointerUp(e){const t=this.#h.indexOf(e);t!==-1&&this.#h.splice(t,1)}draw=()=>{const e=this.renderer.xr.enabled&&this.renderer.xr.isPresenting;return this.composer&&!e?this.composer.render(this.dt):this.renderer.render(this.scene,this.camera),this};start=()=>{if(!this.isRunning)return this.isRunning=!0,this.draw(),this.renderer.setAnimationLoop(this.animate),this};stop=()=>{if(this.isRunning)return this.renderer.setAnimationLoop(null),this.isRunning=!1,this};animate=(e,t)=>{if(this.isRunning){if(this.stats&&this.stats.begin(),this.dt=Math.min(this.maxDeltaTime,(e-this.#i)/1e3),this.time+=this.dt,this.#i=e,this.update(this.dt,this.time,t),this.draw(),this.isRecording){const n=this.#a.length;createImageBitmap(this.canvas).then(s=>{this.#a[n]=s})}this.stats&&this.stats.end()}};get cursor(){return this.canvas.style.cursor}set cursor(e){e?this.canvas.style.cursor=e:this.canvas.style.cursor="auto"}}function Ru(i,e){const t=document.createElement("a");t.download=i,t.href=URL.createObjectURL(e),t.click(),setTimeout(()=>{URL.revokeObjectURL(t.href),t.removeAttribute("href")},0)}function Du(i){return Math.round(i/2)*2}const Qu=i=>Number.isFinite(i)?i:0;function py(i){return{days:Math.trunc(i/864e5),hours:Math.trunc(i/36e5%24),minutes:Math.trunc(i/6e4%60),seconds:Math.trunc(i/1e3%60),milliseconds:Math.trunc(i%1e3),microseconds:Math.trunc(Qu(i*1e3)%1e3),nanoseconds:Math.trunc(Qu(i*1e6)%1e3)}}function gy(i){return{days:i/86400000n,hours:i/3600000n%24n,minutes:i/60000n%60n,seconds:i/1000n%60n,milliseconds:i%1000n,microseconds:0n,nanoseconds:0n}}function my(i){switch(typeof i){case"number":{if(Number.isFinite(i))return py(i);break}case"bigint":return gy(i)}throw new TypeError("Expected a finite number or bigint")}const Ey=i=>i===0||i===0n,Iy=(i,e)=>e===1||e===1n?i:`${i}s`,_y=1e-7,Cy=24n*60n*60n*1000n;function nc(i,e){const t=typeof i=="bigint";if(!t&&!Number.isFinite(i))throw new TypeError("Expected a finite number or bigint");e={...e};const n=i<0?"-":"";i=i<0?-i:i,e.colonNotation&&(e.compact=!1,e.formatSubMilliseconds=!1,e.separateMilliseconds=!1,e.verbose=!1),e.compact&&(e.unitCount=1,e.secondsDecimalDigits=0,e.millisecondsDecimalDigits=0);let s=[];const r=(h,u)=>{const A=Math.floor(h*10**u+_y);return(Math.round(A)/10**u).toFixed(u)},o=(h,u,A,f)=>{if(!((s.length===0||!e.colonNotation)&&Ey(h)&&!(e.colonNotation&&A==="m"))){if(f??=String(h),e.colonNotation){const m=f.includes(".")?f.split(".")[0].length:f.length,I=s.length>0?2:1;f="0".repeat(Math.max(0,I-m))+f}else f+=e.verbose?" "+Iy(u,h):A;s.push(f)}},a=my(i),c=BigInt(a.days);if(e.hideYearAndDays?o(BigInt(c)*24n+BigInt(a.hours),"hour","h"):(e.hideYear?o(c,"day","d"):(o(c/365n,"year","y"),o(c%365n,"day","d")),o(Number(a.hours),"hour","h")),o(Number(a.minutes),"minute","m"),!e.hideSeconds)if(e.separateMilliseconds||e.formatSubMilliseconds||!e.colonNotation&&i<1e3){const h=Number(a.seconds),u=Number(a.milliseconds),A=Number(a.microseconds),f=Number(a.nanoseconds);if(o(h,"second","s"),e.formatSubMilliseconds)o(u,"millisecond","ms"),o(A,"microsecond","µs"),o(f,"nanosecond","ns");else{const m=u+A/1e3+f/1e6,I=typeof e.millisecondsDecimalDigits=="number"?e.millisecondsDecimalDigits:0,g=m>=1?Math.round(m):Math.ceil(m),p=I?m.toFixed(I):g;o(Number.parseFloat(p),"millisecond","ms",p)}}else{const h=(t?Number(i%Cy):i)/1e3%60,u=typeof e.secondsDecimalDigits=="number"?e.secondsDecimalDigits:1,A=r(h,u),f=e.keepDecimalsOnWholeSeconds?A:A.replace(/\.0+$/,"");o(Number.parseFloat(f),"second","s",f)}if(s.length===0)return n+"0"+(e.verbose?" milliseconds":"ms");const l=e.colonNotation?":":" ";return typeof e.unitCount=="number"&&(s=s.slice(0,Math.max(e.unitCount,1))),n+s.join(l)}function yy(i){return i.length!==void 0}function Lu(i){var e=new Promise(function(t,n){i.naturalWidth?t(i):i.complete?n(i):(i.addEventListener("load",s),i.addEventListener("error",s));function s(){i.naturalWidth?t(i):n(i),i.removeEventListener("load",s),i.removeEventListener("error",s)}});return Object.assign(e,{image:i})}function cd(i,e){if(e===void 0&&(e={}),i instanceof HTMLImageElement)return Lu(i);if(typeof i=="string"){var t=i,n=new Image;return Object.keys(e).forEach(function(c){return n.setAttribute(c,e[c])}),n.src=t,Lu(n)}if(yy(i)){var s=function(c){return cd(c,e).catch(function(l){return l})},r=[].map.call(i,s),o=Promise.all(r).then(function(c){var l=c.filter(function(h){return h.naturalWidth});return l.length===c.length?l:Promise.reject({loaded:l,errored:c.filter(function(h){return!h.naturalWidth})})});return o}var a=Promise.reject(new TypeError("input is not an image, a URL string, or an array of them."));return a}var ld=typeof global=="object"&&global&&global.Object===Object&&global,vy=typeof self=="object"&&self&&self.Object===Object&&self,di=ld||vy||Function("return this")(),Dn=di.Symbol,hd=Object.prototype,xy=hd.hasOwnProperty,Sy=hd.toString,Br=Dn?Dn.toStringTag:void 0;function By(i){var e=xy.call(i,Br),t=i[Br];try{i[Br]=void 0;var n=!0}catch{}var s=Sy.call(i);return n&&(e?i[Br]=t:delete i[Br]),s}var My=Object.prototype,wy=My.toString;function by(i){return wy.call(i)}var Ty="[object Null]",Ry="[object Undefined]",Nu=Dn?Dn.toStringTag:void 0;function gs(i){return i==null?i===void 0?Ry:Ty:Nu&&Nu in Object(i)?By(i):by(i)}function Mi(i){return i!=null&&typeof i=="object"}var Dy="[object Symbol]";function Pl(i){return typeof i=="symbol"||Mi(i)&&gs(i)==Dy}function ud(i,e){for(var t=-1,n=i==null?0:i.length,s=Array(n);++t<n;)s[t]=e(i[t],t,i);return s}var qn=Array.isArray,Pu=Dn?Dn.prototype:void 0,Uu=Pu?Pu.toString:void 0;function Ad(i){if(typeof i=="string")return i;if(qn(i))return ud(i,Ad)+"";if(Pl(i))return Uu?Uu.call(i):"";var e=i+"";return e=="0"&&1/i==-1/0?"-0":e}function Vr(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")}function dd(i){return i}var Qy="[object AsyncFunction]",Ly="[object Function]",Ny="[object GeneratorFunction]",Py="[object Proxy]";function fd(i){if(!Vr(i))return!1;var e=gs(i);return e==Ly||e==Ny||e==Qy||e==Py}var ic=di["__core-js_shared__"],Fu=function(){var i=/[^.]+$/.exec(ic&&ic.keys&&ic.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();function Uy(i){return!!Fu&&Fu in i}var Fy=Function.prototype,Oy=Fy.toString;function ms(i){if(i!=null){try{return Oy.call(i)}catch{}try{return i+""}catch{}}return""}var Gy=/[\\^$.*+?()[\]{}|]/g,Hy=/^\[object .+?Constructor\]$/,ky=Function.prototype,zy=Object.prototype,Vy=ky.toString,Yy=zy.hasOwnProperty,Wy=RegExp("^"+Vy.call(Yy).replace(Gy,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Xy(i){if(!Vr(i)||Uy(i))return!1;var e=fd(i)?Wy:Hy;return e.test(ms(i))}function Ky(i,e){return i?.[e]}function Es(i,e){var t=Ky(i,e);return Xy(t)?t:void 0}var sl=Es(di,"WeakMap");function qy(i,e,t){switch(t.length){case 0:return i.call(e);case 1:return i.call(e,t[0]);case 2:return i.call(e,t[0],t[1]);case 3:return i.call(e,t[0],t[1],t[2])}return i.apply(e,t)}var Jy=800,jy=16,$y=Date.now;function Zy(i){var e=0,t=0;return function(){var n=$y(),s=jy-(n-t);if(t=n,s>0){if(++e>=Jy)return arguments[0]}else e=0;return i.apply(void 0,arguments)}}function ev(i){return function(){return i}}var Ko=function(){try{var i=Es(Object,"defineProperty");return i({},"",{}),i}catch{}}(),tv=Ko?function(i,e){return Ko(i,"toString",{configurable:!0,enumerable:!1,value:ev(e),writable:!0})}:dd,nv=Zy(tv);function iv(i,e){for(var t=-1,n=i==null?0:i.length;++t<n&&e(i[t],t,i)!==!1;);return i}var sv=9007199254740991,rv=/^(?:0|[1-9]\d*)$/;function pd(i,e){var t=typeof i;return e=e??sv,!!e&&(t=="number"||t!="symbol"&&rv.test(i))&&i>-1&&i%1==0&&i<e}function Ul(i,e,t){e=="__proto__"&&Ko?Ko(i,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):i[e]=t}function Fl(i,e){return i===e||i!==i&&e!==e}var ov=Object.prototype,av=ov.hasOwnProperty;function gd(i,e,t){var n=i[e];(!(av.call(i,e)&&Fl(n,t))||t===void 0&&!(e in i))&&Ul(i,e,t)}function cv(i,e,t,n){var s=!t;t||(t={});for(var r=-1,o=e.length;++r<o;){var a=e[r],c=void 0;c===void 0&&(c=i[a]),s?Ul(t,a,c):gd(t,a,c)}return t}var Ou=Math.max;function lv(i,e,t){return e=Ou(e===void 0?i.length-1:e,0),function(){for(var n=arguments,s=-1,r=Ou(n.length-e,0),o=Array(r);++s<r;)o[s]=n[e+s];s=-1;for(var a=Array(e+1);++s<e;)a[s]=n[s];return a[e]=t(o),qy(i,this,a)}}var hv=9007199254740991;function Ol(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=hv}function md(i){return i!=null&&Ol(i.length)&&!fd(i)}var uv=Object.prototype;function Ed(i){var e=i&&i.constructor,t=typeof e=="function"&&e.prototype||uv;return i===t}function Av(i,e){for(var t=-1,n=Array(i);++t<i;)n[t]=e(t);return n}var dv="[object Arguments]";function Gu(i){return Mi(i)&&gs(i)==dv}var Id=Object.prototype,fv=Id.hasOwnProperty,pv=Id.propertyIsEnumerable,Gl=Gu(function(){return arguments}())?Gu:function(i){return Mi(i)&&fv.call(i,"callee")&&!pv.call(i,"callee")};function gv(){return!1}var _d=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Hu=_d&&typeof module=="object"&&module&&!module.nodeType&&module,mv=Hu&&Hu.exports===_d,ku=mv?di.Buffer:void 0,Ev=ku?ku.isBuffer:void 0,qo=Ev||gv,Iv="[object Arguments]",_v="[object Array]",Cv="[object Boolean]",yv="[object Date]",vv="[object Error]",xv="[object Function]",Sv="[object Map]",Bv="[object Number]",Mv="[object Object]",wv="[object RegExp]",bv="[object Set]",Tv="[object String]",Rv="[object WeakMap]",Dv="[object ArrayBuffer]",Qv="[object DataView]",Lv="[object Float32Array]",Nv="[object Float64Array]",Pv="[object Int8Array]",Uv="[object Int16Array]",Fv="[object Int32Array]",Ov="[object Uint8Array]",Gv="[object Uint8ClampedArray]",Hv="[object Uint16Array]",kv="[object Uint32Array]",Qt={};Qt[Lv]=Qt[Nv]=Qt[Pv]=Qt[Uv]=Qt[Fv]=Qt[Ov]=Qt[Gv]=Qt[Hv]=Qt[kv]=!0;Qt[Iv]=Qt[_v]=Qt[Dv]=Qt[Cv]=Qt[Qv]=Qt[yv]=Qt[vv]=Qt[xv]=Qt[Sv]=Qt[Bv]=Qt[Mv]=Qt[wv]=Qt[bv]=Qt[Tv]=Qt[Rv]=!1;function zv(i){return Mi(i)&&Ol(i.length)&&!!Qt[gs(i)]}function Hl(i){return function(e){return i(e)}}var Cd=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Qr=Cd&&typeof module=="object"&&module&&!module.nodeType&&module,Vv=Qr&&Qr.exports===Cd,sc=Vv&&ld.process,or=function(){try{var i=Qr&&Qr.require&&Qr.require("util").types;return i||sc&&sc.binding&&sc.binding("util")}catch{}}(),zu=or&&or.isTypedArray,yd=zu?Hl(zu):zv,Yv=Object.prototype,Wv=Yv.hasOwnProperty;function vd(i,e){var t=qn(i),n=!t&&Gl(i),s=!t&&!n&&qo(i),r=!t&&!n&&!s&&yd(i),o=t||n||s||r,a=o?Av(i.length,String):[],c=a.length;for(var l in i)(e||Wv.call(i,l))&&!(o&&(l=="length"||s&&(l=="offset"||l=="parent")||r&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||pd(l,c)))&&a.push(l);return a}function xd(i,e){return function(t){return i(e(t))}}var Xv=xd(Object.keys,Object),Kv=Object.prototype,qv=Kv.hasOwnProperty;function Jv(i){if(!Ed(i))return Xv(i);var e=[];for(var t in Object(i))qv.call(i,t)&&t!="constructor"&&e.push(t);return e}function kl(i){return md(i)?vd(i):Jv(i)}function jv(i){var e=[];if(i!=null)for(var t in Object(i))e.push(t);return e}var $v=Object.prototype,Zv=$v.hasOwnProperty;function ex(i){if(!Vr(i))return jv(i);var e=Ed(i),t=[];for(var n in i)n=="constructor"&&(e||!Zv.call(i,n))||t.push(n);return t}function tx(i){return md(i)?vd(i,!0):ex(i)}var nx=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ix=/^\w*$/;function zl(i,e){if(qn(i))return!1;var t=typeof i;return t=="number"||t=="symbol"||t=="boolean"||i==null||Pl(i)?!0:ix.test(i)||!nx.test(i)||e!=null&&i in Object(e)}var Gr=Es(Object,"create");function sx(){this.__data__=Gr?Gr(null):{},this.size=0}function rx(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e}var ox="__lodash_hash_undefined__",ax=Object.prototype,cx=ax.hasOwnProperty;function lx(i){var e=this.__data__;if(Gr){var t=e[i];return t===ox?void 0:t}return cx.call(e,i)?e[i]:void 0}var hx=Object.prototype,ux=hx.hasOwnProperty;function Ax(i){var e=this.__data__;return Gr?e[i]!==void 0:ux.call(e,i)}var dx="__lodash_hash_undefined__";function fx(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=Gr&&e===void 0?dx:e,this}function ps(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}ps.prototype.clear=sx;ps.prototype.delete=rx;ps.prototype.get=lx;ps.prototype.has=Ax;ps.prototype.set=fx;function px(){this.__data__=[],this.size=0}function ca(i,e){for(var t=i.length;t--;)if(Fl(i[t][0],e))return t;return-1}var gx=Array.prototype,mx=gx.splice;function Ex(i){var e=this.__data__,t=ca(e,i);if(t<0)return!1;var n=e.length-1;return t==n?e.pop():mx.call(e,t,1),--this.size,!0}function Ix(i){var e=this.__data__,t=ca(e,i);return t<0?void 0:e[t][1]}function _x(i){return ca(this.__data__,i)>-1}function Cx(i,e){var t=this.__data__,n=ca(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this}function Ti(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Ti.prototype.clear=px;Ti.prototype.delete=Ex;Ti.prototype.get=Ix;Ti.prototype.has=_x;Ti.prototype.set=Cx;var Hr=Es(di,"Map");function yx(){this.size=0,this.__data__={hash:new ps,map:new(Hr||Ti),string:new ps}}function vx(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null}function la(i,e){var t=i.__data__;return vx(e)?t[typeof e=="string"?"string":"hash"]:t.map}function xx(i){var e=la(this,i).delete(i);return this.size-=e?1:0,e}function Sx(i){return la(this,i).get(i)}function Bx(i){return la(this,i).has(i)}function Mx(i,e){var t=la(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this}function Ri(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Ri.prototype.clear=yx;Ri.prototype.delete=xx;Ri.prototype.get=Sx;Ri.prototype.has=Bx;Ri.prototype.set=Mx;var wx="Expected a function";function Vl(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError(wx);var t=function(){var n=arguments,s=e?e.apply(this,n):n[0],r=t.cache;if(r.has(s))return r.get(s);var o=i.apply(this,n);return t.cache=r.set(s,o)||r,o};return t.cache=new(Vl.Cache||Ri),t}Vl.Cache=Ri;var bx=500;function Tx(i){var e=Vl(i,function(n){return t.size===bx&&t.clear(),n}),t=e.cache;return e}var Rx=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Dx=/\\(\\)?/g,Qx=Tx(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(Rx,function(t,n,s,r){e.push(s?r.replace(Dx,"$1"):n||t)}),e});function Lx(i){return i==null?"":Ad(i)}function ha(i,e){return qn(i)?i:zl(i,e)?[i]:Qx(Lx(i))}function Yr(i){if(typeof i=="string"||Pl(i))return i;var e=i+"";return e=="0"&&1/i==-1/0?"-0":e}function Yl(i,e){e=ha(e,i);for(var t=0,n=e.length;i!=null&&t<n;)i=i[Yr(e[t++])];return t&&t==n?i:void 0}function Nx(i,e,t){var n=i==null?void 0:Yl(i,e);return n===void 0?t:n}function Wl(i,e){for(var t=-1,n=e.length,s=i.length;++t<n;)i[s+t]=e[t];return i}var Vu=Dn?Dn.isConcatSpreadable:void 0;function Px(i){return qn(i)||Gl(i)||!!(Vu&&i&&i[Vu])}function Ux(i,e,t,n,s){var r=-1,o=i.length;for(t||(t=Px),s||(s=[]);++r<o;){var a=i[r];t(a)?Wl(s,a):s[s.length]=a}return s}function Fx(i){var e=i==null?0:i.length;return e?Ux(i):[]}function Ox(i){return nv(lv(i,void 0,Fx),i+"")}var Sd=xd(Object.getPrototypeOf,Object),Gx="[object Object]",Hx=Function.prototype,kx=Object.prototype,Bd=Hx.toString,zx=kx.hasOwnProperty,Vx=Bd.call(Object);function Yx(i){if(!Mi(i)||gs(i)!=Gx)return!1;var e=Sd(i);if(e===null)return!0;var t=zx.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Bd.call(t)==Vx}function Wx(i,e,t){var n=-1,s=i.length;e<0&&(e=-e>s?0:s+e),t=t>s?s:t,t<0&&(t+=s),s=e>t?0:t-e>>>0,e>>>=0;for(var r=Array(s);++n<s;)r[n]=i[n+e];return r}function Xx(){this.__data__=new Ti,this.size=0}function Kx(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t}function qx(i){return this.__data__.get(i)}function Jx(i){return this.__data__.has(i)}var jx=200;function $x(i,e){var t=this.__data__;if(t instanceof Ti){var n=t.__data__;if(!Hr||n.length<jx-1)return n.push([i,e]),this.size=++t.size,this;t=this.__data__=new Ri(n)}return t.set(i,e),this.size=t.size,this}function ri(i){var e=this.__data__=new Ti(i);this.size=e.size}ri.prototype.clear=Xx;ri.prototype.delete=Kx;ri.prototype.get=qx;ri.prototype.has=Jx;ri.prototype.set=$x;var Md=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Yu=Md&&typeof module=="object"&&module&&!module.nodeType&&module,Zx=Yu&&Yu.exports===Md,Wu=Zx?di.Buffer:void 0;Wu&&Wu.allocUnsafe;function eS(i,e){return i.slice()}function tS(i,e){for(var t=-1,n=i==null?0:i.length,s=0,r=[];++t<n;){var o=i[t];e(o,t,i)&&(r[s++]=o)}return r}function wd(){return[]}var nS=Object.prototype,iS=nS.propertyIsEnumerable,Xu=Object.getOwnPropertySymbols,bd=Xu?function(i){return i==null?[]:(i=Object(i),tS(Xu(i),function(e){return iS.call(i,e)}))}:wd,sS=Object.getOwnPropertySymbols,rS=sS?function(i){for(var e=[];i;)Wl(e,bd(i)),i=Sd(i);return e}:wd;function Td(i,e,t){var n=e(i);return qn(i)?n:Wl(n,t(i))}function Ku(i){return Td(i,kl,bd)}function Rd(i){return Td(i,tx,rS)}var rl=Es(di,"DataView"),ol=Es(di,"Promise"),al=Es(di,"Set"),qu="[object Map]",oS="[object Object]",Ju="[object Promise]",ju="[object Set]",$u="[object WeakMap]",Zu="[object DataView]",aS=ms(rl),cS=ms(Hr),lS=ms(ol),hS=ms(al),uS=ms(sl),kn=gs;(rl&&kn(new rl(new ArrayBuffer(1)))!=Zu||Hr&&kn(new Hr)!=qu||ol&&kn(ol.resolve())!=Ju||al&&kn(new al)!=ju||sl&&kn(new sl)!=$u)&&(kn=function(i){var e=gs(i),t=e==oS?i.constructor:void 0,n=t?ms(t):"";if(n)switch(n){case aS:return Zu;case cS:return qu;case lS:return Ju;case hS:return ju;case uS:return $u}return e});var AS=Object.prototype,dS=AS.hasOwnProperty;function fS(i){var e=i.length,t=new i.constructor(e);return e&&typeof i[0]=="string"&&dS.call(i,"index")&&(t.index=i.index,t.input=i.input),t}var Jo=di.Uint8Array;function Xl(i){var e=new i.constructor(i.byteLength);return new Jo(e).set(new Jo(i)),e}function pS(i,e){var t=Xl(i.buffer);return new i.constructor(t,i.byteOffset,i.byteLength)}var gS=/\w*$/;function mS(i){var e=new i.constructor(i.source,gS.exec(i));return e.lastIndex=i.lastIndex,e}var eA=Dn?Dn.prototype:void 0,tA=eA?eA.valueOf:void 0;function ES(i){return tA?Object(tA.call(i)):{}}function IS(i,e){var t=Xl(i.buffer);return new i.constructor(t,i.byteOffset,i.length)}var _S="[object Boolean]",CS="[object Date]",yS="[object Map]",vS="[object Number]",xS="[object RegExp]",SS="[object Set]",BS="[object String]",MS="[object Symbol]",wS="[object ArrayBuffer]",bS="[object DataView]",TS="[object Float32Array]",RS="[object Float64Array]",DS="[object Int8Array]",QS="[object Int16Array]",LS="[object Int32Array]",NS="[object Uint8Array]",PS="[object Uint8ClampedArray]",US="[object Uint16Array]",FS="[object Uint32Array]";function OS(i,e,t){var n=i.constructor;switch(e){case wS:return Xl(i);case _S:case CS:return new n(+i);case bS:return pS(i);case TS:case RS:case DS:case QS:case LS:case NS:case PS:case US:case FS:return IS(i);case yS:return new n;case vS:case BS:return new n(i);case xS:return mS(i);case SS:return new n;case MS:return ES(i)}}var GS="[object Map]";function HS(i){return Mi(i)&&kn(i)==GS}var nA=or&&or.isMap,kS=nA?Hl(nA):HS,zS="[object Set]";function VS(i){return Mi(i)&&kn(i)==zS}var iA=or&&or.isSet,YS=iA?Hl(iA):VS,Dd="[object Arguments]",WS="[object Array]",XS="[object Boolean]",KS="[object Date]",qS="[object Error]",Qd="[object Function]",JS="[object GeneratorFunction]",jS="[object Map]",$S="[object Number]",Ld="[object Object]",ZS="[object RegExp]",eB="[object Set]",tB="[object String]",nB="[object Symbol]",iB="[object WeakMap]",sB="[object ArrayBuffer]",rB="[object DataView]",oB="[object Float32Array]",aB="[object Float64Array]",cB="[object Int8Array]",lB="[object Int16Array]",hB="[object Int32Array]",uB="[object Uint8Array]",AB="[object Uint8ClampedArray]",dB="[object Uint16Array]",fB="[object Uint32Array]",Rt={};Rt[Dd]=Rt[WS]=Rt[sB]=Rt[rB]=Rt[XS]=Rt[KS]=Rt[oB]=Rt[aB]=Rt[cB]=Rt[lB]=Rt[hB]=Rt[jS]=Rt[$S]=Rt[Ld]=Rt[ZS]=Rt[eB]=Rt[tB]=Rt[nB]=Rt[uB]=Rt[AB]=Rt[dB]=Rt[fB]=!0;Rt[qS]=Rt[Qd]=Rt[iB]=!1;function Po(i,e,t,n,s,r){var o;if(t&&(o=s?t(i,n,s,r):t(i)),o!==void 0)return o;if(!Vr(i))return i;var a=qn(i);if(a)o=fS(i);else{var c=kn(i),l=c==Qd||c==JS;if(qo(i))return eS(i);if(c==Ld||c==Dd||l&&!s)o={};else{if(!Rt[c])return s?i:{};o=OS(i,c)}}r||(r=new ri);var h=r.get(i);if(h)return h;r.set(i,o),YS(i)?i.forEach(function(f){o.add(Po(f,e,t,f,i,r))}):kS(i)&&i.forEach(function(f,m){o.set(m,Po(f,e,t,m,i,r))});var u=Rd,A=a?void 0:u(i);return iv(A||i,function(f,m){A&&(m=f,f=i[m]),gd(o,m,Po(f,e,t,m,i,r))}),o}var pB="__lodash_hash_undefined__";function gB(i){return this.__data__.set(i,pB),this}function mB(i){return this.__data__.has(i)}function jo(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new Ri;++e<t;)this.add(i[e])}jo.prototype.add=jo.prototype.push=gB;jo.prototype.has=mB;function EB(i,e){for(var t=-1,n=i==null?0:i.length;++t<n;)if(e(i[t],t,i))return!0;return!1}function IB(i,e){return i.has(e)}var _B=1,CB=2;function Nd(i,e,t,n,s,r){var o=t&_B,a=i.length,c=e.length;if(a!=c&&!(o&&c>a))return!1;var l=r.get(i),h=r.get(e);if(l&&h)return l==e&&h==i;var u=-1,A=!0,f=t&CB?new jo:void 0;for(r.set(i,e),r.set(e,i);++u<a;){var m=i[u],I=e[u];if(n)var g=o?n(I,m,u,e,i,r):n(m,I,u,i,e,r);if(g!==void 0){if(g)continue;A=!1;break}if(f){if(!EB(e,function(p,C){if(!IB(f,C)&&(m===p||s(m,p,t,n,r)))return f.push(C)})){A=!1;break}}else if(!(m===I||s(m,I,t,n,r))){A=!1;break}}return r.delete(i),r.delete(e),A}function yB(i){var e=-1,t=Array(i.size);return i.forEach(function(n,s){t[++e]=[s,n]}),t}function vB(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t}var xB=1,SB=2,BB="[object Boolean]",MB="[object Date]",wB="[object Error]",bB="[object Map]",TB="[object Number]",RB="[object RegExp]",DB="[object Set]",QB="[object String]",LB="[object Symbol]",NB="[object ArrayBuffer]",PB="[object DataView]",sA=Dn?Dn.prototype:void 0,rc=sA?sA.valueOf:void 0;function UB(i,e,t,n,s,r,o){switch(t){case PB:if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case NB:return!(i.byteLength!=e.byteLength||!r(new Jo(i),new Jo(e)));case BB:case MB:case TB:return Fl(+i,+e);case wB:return i.name==e.name&&i.message==e.message;case RB:case QB:return i==e+"";case bB:var a=yB;case DB:var c=n&xB;if(a||(a=vB),i.size!=e.size&&!c)return!1;var l=o.get(i);if(l)return l==e;n|=SB,o.set(i,e);var h=Nd(a(i),a(e),n,s,r,o);return o.delete(i),h;case LB:if(rc)return rc.call(i)==rc.call(e)}return!1}var FB=1,OB=Object.prototype,GB=OB.hasOwnProperty;function HB(i,e,t,n,s,r){var o=t&FB,a=Ku(i),c=a.length,l=Ku(e),h=l.length;if(c!=h&&!o)return!1;for(var u=c;u--;){var A=a[u];if(!(o?A in e:GB.call(e,A)))return!1}var f=r.get(i),m=r.get(e);if(f&&m)return f==e&&m==i;var I=!0;r.set(i,e),r.set(e,i);for(var g=o;++u<c;){A=a[u];var p=i[A],C=e[A];if(n)var x=o?n(C,p,A,e,i,r):n(p,C,A,i,e,r);if(!(x===void 0?p===C||s(p,C,t,n,r):x)){I=!1;break}g||(g=A=="constructor")}if(I&&!g){var w=i.constructor,P=e.constructor;w!=P&&"constructor"in i&&"constructor"in e&&!(typeof w=="function"&&w instanceof w&&typeof P=="function"&&P instanceof P)&&(I=!1)}return r.delete(i),r.delete(e),I}var kB=1,rA="[object Arguments]",oA="[object Array]",Bo="[object Object]",zB=Object.prototype,aA=zB.hasOwnProperty;function VB(i,e,t,n,s,r){var o=qn(i),a=qn(e),c=o?oA:kn(i),l=a?oA:kn(e);c=c==rA?Bo:c,l=l==rA?Bo:l;var h=c==Bo,u=l==Bo,A=c==l;if(A&&qo(i)){if(!qo(e))return!1;o=!0,h=!1}if(A&&!h)return r||(r=new ri),o||yd(i)?Nd(i,e,t,n,s,r):UB(i,e,c,t,n,s,r);if(!(t&kB)){var f=h&&aA.call(i,"__wrapped__"),m=u&&aA.call(e,"__wrapped__");if(f||m){var I=f?i.value():i,g=m?e.value():e;return r||(r=new ri),s(I,g,t,n,r)}}return A?(r||(r=new ri),HB(i,e,t,n,s,r)):!1}function Kl(i,e,t,n,s){return i===e?!0:i==null||e==null||!Mi(i)&&!Mi(e)?i!==i&&e!==e:VB(i,e,t,n,Kl,s)}var YB=1,WB=2;function XB(i,e,t,n){var s=t.length,r=s;if(i==null)return!r;for(i=Object(i);s--;){var o=t[s];if(o[2]?o[1]!==i[o[0]]:!(o[0]in i))return!1}for(;++s<r;){o=t[s];var a=o[0],c=i[a],l=o[1];if(o[2]){if(c===void 0&&!(a in i))return!1}else{var h=new ri,u;if(!(u===void 0?Kl(l,c,YB|WB,n,h):u))return!1}}return!0}function Pd(i){return i===i&&!Vr(i)}function KB(i){for(var e=kl(i),t=e.length;t--;){var n=e[t],s=i[n];e[t]=[n,s,Pd(s)]}return e}function Ud(i,e){return function(t){return t==null?!1:t[i]===e&&(e!==void 0||i in Object(t))}}function qB(i){var e=KB(i);return e.length==1&&e[0][2]?Ud(e[0][0],e[0][1]):function(t){return t===i||XB(t,i,e)}}function JB(i,e){return i!=null&&e in Object(i)}function jB(i,e,t){e=ha(e,i);for(var n=-1,s=e.length,r=!1;++n<s;){var o=Yr(e[n]);if(!(r=i!=null&&t(i,o)))break;i=i[o]}return r||++n!=s?r:(s=i==null?0:i.length,!!s&&Ol(s)&&pd(o,s)&&(qn(i)||Gl(i)))}function $B(i,e){return i!=null&&jB(i,e,JB)}var ZB=1,eM=2;function tM(i,e){return zl(i)&&Pd(e)?Ud(Yr(i),e):function(t){var n=Nx(t,i);return n===void 0&&n===e?$B(t,i):Kl(e,n,ZB|eM)}}function nM(i){return function(e){return e?.[i]}}function iM(i){return function(e){return Yl(e,i)}}function sM(i){return zl(i)?nM(Yr(i)):iM(i)}function rM(i){return typeof i=="function"?i:i==null?dd:typeof i=="object"?qn(i)?tM(i[0],i[1]):qB(i):sM(i)}function oM(i){return function(e,t,n){for(var s=-1,r=Object(e),o=n(e),a=o.length;a--;){var c=o[++s];if(t(r[c],c,r)===!1)break}return e}}var aM=oM();function cM(i,e){return i&&aM(i,e,kl)}function lM(i){var e=i==null?0:i.length;return e?i[e-1]:void 0}function hM(i,e){return e.length<2?i:Yl(i,Wx(e,0,-1))}function uM(i,e){var t={};return e=rM(e),cM(i,function(n,s,r){Ul(t,s,e(n,s,r))}),t}function AM(i,e){return e=ha(e,i),i=hM(i,e),i==null||delete i[Yr(lM(e))]}function dM(i){return Yx(i)?void 0:i}var fM=1,pM=2,gM=4,mM=Ox(function(i,e){var t={};if(i==null)return t;var n=!1;e=ud(e,function(r){return r=ha(r,i),n||(n=r.length>1),r}),cv(i,Rd(i),t),n&&(t=Po(t,fM|pM|gM,dM));for(var s=e.length;s--;)AM(t,e[s]);return t});function EM(i,{renderer:e,...t}){if(!e)throw new Error(`Texture requires renderer to passed in the options for ${i}!`);return new Promise((n,s)=>{new wl().load(i,r=>{e.outputColorSpace===Et&&t.gamma&&(r.colorSpace=Et),Object.keys(t).filter(a=>!["linear"].includes(a)).forEach(a=>{r[a]=t[a]}),e.initTexture(r),n(r)},void 0,r=>s(new Error(`Could not load texture ${i}:
${r}`)))})}class Fd extends KA{constructor(e){super(e),this.type=ln}parse(e){const o=function(T,F){switch(T){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(F||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(F||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(F||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(F||""))}},u=function(T,F,_){F=F||1024;let U=T.pos,H=-1,z=0,$="",Y=String.fromCharCode.apply(null,new Uint16Array(T.subarray(U,U+128)));for(;0>(H=Y.indexOf(`
`))&&z<F&&U<T.byteLength;)$+=Y,z+=Y.length,U+=128,Y+=String.fromCharCode.apply(null,new Uint16Array(T.subarray(U,U+128)));return-1<H?(T.pos+=z+H+1,$+Y.slice(0,H)):!1},A=function(T){const F=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,v=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,U=/^\s*FORMAT=(\S+)\s*$/,H=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,z={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let $,Y;for((T.pos>=T.byteLength||!($=u(T)))&&o(1,"no header found"),(Y=$.match(F))||o(3,"bad initial token"),z.valid|=1,z.programtype=Y[1],z.string+=$+`
`;$=u(T),$!==!1;){if(z.string+=$+`
`,$.charAt(0)==="#"){z.comments+=$+`
`;continue}if((Y=$.match(_))&&(z.gamma=parseFloat(Y[1])),(Y=$.match(v))&&(z.exposure=parseFloat(Y[1])),(Y=$.match(U))&&(z.valid|=2,z.format=Y[1]),(Y=$.match(H))&&(z.valid|=4,z.height=parseInt(Y[1],10),z.width=parseInt(Y[2],10)),z.valid&2&&z.valid&4)break}return z.valid&2||o(3,"missing format specifier"),z.valid&4||o(3,"missing image size specifier"),z},f=function(T,F,_){const v=F;if(v<8||v>32767||T[0]!==2||T[1]!==2||T[2]&128)return new Uint8Array(T);v!==(T[2]<<8|T[3])&&o(3,"wrong scanline width");const U=new Uint8Array(4*F*_);U.length||o(4,"unable to allocate buffer space");let H=0,z=0;const $=4*v,Y=new Uint8Array(4),re=new Uint8Array($);let te=_;for(;te>0&&z<T.byteLength;){z+4>T.byteLength&&o(1),Y[0]=T[z++],Y[1]=T[z++],Y[2]=T[z++],Y[3]=T[z++],(Y[0]!=2||Y[1]!=2||(Y[2]<<8|Y[3])!=v)&&o(3,"bad rgbe scanline format");let ye=0,_e;for(;ye<$&&z<T.byteLength;){_e=T[z++];const Oe=_e>128;if(Oe&&(_e-=128),(_e===0||ye+_e>$)&&o(3,"bad scanline data"),Oe){const we=T[z++];for(let se=0;se<_e;se++)re[ye++]=we}else re.set(T.subarray(z,z+_e),ye),ye+=_e,z+=_e}const Le=v;for(let Oe=0;Oe<Le;Oe++){let we=0;U[H]=re[Oe+we],we+=v,U[H+1]=re[Oe+we],we+=v,U[H+2]=re[Oe+we],we+=v,U[H+3]=re[Oe+we],H+=4}te--}return U},m=function(T,F,_,v){const U=T[F+3],H=Math.pow(2,U-128)/255;_[v+0]=T[F+0]*H,_[v+1]=T[F+1]*H,_[v+2]=T[F+2]*H,_[v+3]=1},I=function(T,F,_,v){const U=T[F+3],H=Math.pow(2,U-128)/255;_[v+0]=Hs.toHalfFloat(Math.min(T[F+0]*H,65504)),_[v+1]=Hs.toHalfFloat(Math.min(T[F+1]*H,65504)),_[v+2]=Hs.toHalfFloat(Math.min(T[F+2]*H,65504)),_[v+3]=Hs.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;const p=A(g),C=p.width,x=p.height,w=f(g.subarray(g.pos),C,x);let P,N,D;switch(this.type){case Zt:D=w.length/4;const T=new Float32Array(D*4);for(let _=0;_<D;_++)m(w,_*4,T,_*4);P=T,N=Zt;break;case ln:D=w.length/4;const F=new Uint16Array(D*4);for(let _=0;_<D;_++)I(w,_*4,F,_*4);P=F,N=ln;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:C,height:x,data:P,header:p.string,gamma:p.gamma,exposure:p.exposure,type:N}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){switch(o.type){case Zt:case ln:o.colorSpace=Nt,o.minFilter=bt,o.magFilter=bt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,s)}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Tn=Uint8Array,zs=Uint16Array,IM=Int32Array,Od=new Tn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Gd=new Tn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),_M=new Tn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Hd=function(i,e){for(var t=new zs(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new IM(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},kd=Hd(Od,2),zd=kd.b,CM=kd.r;zd[28]=258,CM[258]=28;var yM=Hd(Gd,0),vM=yM.b,cl=new zs(32768);for(var Lt=0;Lt<32768;++Lt){var Hi=(Lt&43690)>>1|(Lt&21845)<<1;Hi=(Hi&52428)>>2|(Hi&13107)<<2,Hi=(Hi&61680)>>4|(Hi&3855)<<4,cl[Lt]=((Hi&65280)>>8|(Hi&255)<<8)>>1}var Lr=function(i,e,t){for(var n=i.length,s=0,r=new zs(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new zs(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new zs(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],h=e-i[s],u=o[i[s]-1]++<<h,A=u|(1<<h)-1;u<=A;++u)a[cl[u]>>c]=l}else for(a=new zs(n),s=0;s<n;++s)i[s]&&(a[s]=cl[o[i[s]-1]++]>>15-i[s]);return a},Wr=new Tn(288);for(var Lt=0;Lt<144;++Lt)Wr[Lt]=8;for(var Lt=144;Lt<256;++Lt)Wr[Lt]=9;for(var Lt=256;Lt<280;++Lt)Wr[Lt]=7;for(var Lt=280;Lt<288;++Lt)Wr[Lt]=8;var Vd=new Tn(32);for(var Lt=0;Lt<32;++Lt)Vd[Lt]=5;var xM=Lr(Wr,9,1),SM=Lr(Vd,5,1),oc=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Gn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},ac=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},BM=function(i){return(i+7)/8|0},MM=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new Tn(i.subarray(e,t))},wM=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Hn=function(i,e,t){var n=new Error(e||wM[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Hn),!t)throw n;return n},bM=function(i,e,t,n){var s=i.length,r=0;if(!s||e.f&&!e.l)return t||new Tn(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new Tn(s*3));var l=function(gt){var $e=t.length;if(gt>$e){var k=new Tn(Math.max($e*2,gt));k.set(t),t=k}},h=e.f||0,u=e.p||0,A=e.b||0,f=e.l,m=e.d,I=e.m,g=e.n,p=s*8;do{if(!f){h=Gn(i,u,1);var C=Gn(i,u+1,3);if(u+=3,C)if(C==1)f=xM,m=SM,I=9,g=5;else if(C==2){var N=Gn(i,u,31)+257,D=Gn(i,u+10,15)+4,T=N+Gn(i,u+5,31)+1;u+=14;for(var F=new Tn(T),_=new Tn(19),v=0;v<D;++v)_[_M[v]]=Gn(i,u+v*3,7);u+=D*3;for(var U=oc(_),H=(1<<U)-1,z=Lr(_,U,1),v=0;v<T;){var $=z[Gn(i,u,H)];u+=$&15;var x=$>>4;if(x<16)F[v++]=x;else{var Y=0,re=0;for(x==16?(re=3+Gn(i,u,3),u+=2,Y=F[v-1]):x==17?(re=3+Gn(i,u,7),u+=3):x==18&&(re=11+Gn(i,u,127),u+=7);re--;)F[v++]=Y}}var te=F.subarray(0,N),ye=F.subarray(N);I=oc(te),g=oc(ye),f=Lr(te,I,1),m=Lr(ye,g,1)}else Hn(1);else{var x=BM(u)+4,w=i[x-4]|i[x-3]<<8,P=x+w;if(P>s){c&&Hn(0);break}a&&l(A+w),t.set(i.subarray(x,P),A),e.b=A+=w,e.p=u=P*8,e.f=h;continue}if(u>p){c&&Hn(0);break}}a&&l(A+131072);for(var _e=(1<<I)-1,Le=(1<<g)-1,Oe=u;;Oe=u){var Y=f[ac(i,u)&_e],we=Y>>4;if(u+=Y&15,u>p){c&&Hn(0);break}if(Y||Hn(2),we<256)t[A++]=we;else if(we==256){Oe=u,f=null;break}else{var se=we-254;if(we>264){var v=we-257,he=Od[v];se=Gn(i,u,(1<<he)-1)+zd[v],u+=he}var me=m[ac(i,u)&Le],xe=me>>4;me||Hn(3),u+=me&15;var ye=vM[xe];if(xe>3){var he=Gd[xe];ye+=ac(i,u)&(1<<he)-1,u+=he}if(u>p){c&&Hn(0);break}a&&l(A+131072);var Ye=A+se;if(A<ye){var Xe=r-ye,ct=Math.min(ye,Ye);for(Xe+A<0&&Hn(3);A<ct;++A)t[A]=n[Xe+A]}for(;A<Ye;++A)t[A]=t[A-ye]}}e.l=f,e.p=Oe,e.b=A,e.f=h,f&&(h=1,e.m=I,e.d=m,e.n=g)}while(!h);return A!=t.length&&o?MM(t,0,A):t.subarray(0,A)},TM=new Tn(0),RM=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Hn(6,"invalid zlib data"),(i[1]>>5&1)==1&&Hn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Mo(i,e){return bM(i.subarray(RM(i),-4),{i:2},e,e)}var DM=typeof TextDecoder<"u"&&new TextDecoder,QM=0;try{DM.decode(TM,{stream:!0}),QM=1}catch{}class LM extends KA{constructor(e){super(e),this.type=ln}parse(e){const F=Math.pow(2.7182818,2.2);function _(d,E){let y=0;for(let G=0;G<65536;++G)(G==0||d[G>>3]&1<<(G&7))&&(E[y++]=G);const S=y-1;for(;y<65536;)E[y++]=0;return S}function v(d){for(let E=0;E<16384;E++)d[E]={},d[E].len=0,d[E].lit=0,d[E].p=null}const U={l:0,c:0,lc:0};function H(d,E,y,S,G){for(;y<d;)E=E<<8|rt(S,G),y+=8;y-=d,U.l=E>>y&(1<<d)-1,U.c=E,U.lc=y}const z=new Array(59);function $(d){for(let y=0;y<=58;++y)z[y]=0;for(let y=0;y<65537;++y)z[d[y]]+=1;let E=0;for(let y=58;y>0;--y){const S=E+z[y]>>1;z[y]=E,E=S}for(let y=0;y<65537;++y){const S=d[y];S>0&&(d[y]=S|z[S]++<<6)}}function Y(d,E,y,S,G,O){const q=E;let ne=0,Z=0;for(;S<=G;S++){if(q.value-E.value>y)return!1;H(6,ne,Z,d,q);const ee=U.l;if(ne=U.c,Z=U.lc,O[S]=ee,ee==63){if(q.value-E.value>y)throw new Error("Something wrong with hufUnpackEncTable");H(8,ne,Z,d,q);let J=U.l+6;if(ne=U.c,Z=U.lc,S+J>G+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)O[S++]=0;S--}else if(ee>=59){let J=ee-59+2;if(S+J>G+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)O[S++]=0;S--}}$(O)}function re(d){return d&63}function te(d){return d>>6}function ye(d,E,y,S){for(;E<=y;E++){const G=te(d[E]),O=re(d[E]);if(G>>O)throw new Error("Invalid table entry");if(O>14){const q=S[G>>O-14];if(q.len)throw new Error("Invalid table entry");if(q.lit++,q.p){const ne=q.p;q.p=new Array(q.lit);for(let Z=0;Z<q.lit-1;++Z)q.p[Z]=ne[Z]}else q.p=new Array(1);q.p[q.lit-1]=E}else if(O){let q=0;for(let ne=1<<14-O;ne>0;ne--){const Z=S[(G<<14-O)+q];if(Z.len||Z.p)throw new Error("Invalid table entry");Z.len=O,Z.lit=E,q++}}}return!0}const _e={c:0,lc:0};function Le(d,E,y,S){d=d<<8|rt(y,S),E+=8,_e.c=d,_e.lc=E}const Oe={c:0,lc:0};function we(d,E,y,S,G,O,q,ne,Z){if(d==E){S<8&&(Le(y,S,G,O),y=_e.c,S=_e.lc),S-=8;let ee=y>>S;if(ee=new Uint8Array([ee])[0],ne.value+ee>Z)return!1;const J=q[ne.value-1];for(;ee-- >0;)q[ne.value++]=J}else if(ne.value<Z)q[ne.value++]=d;else return!1;Oe.c=y,Oe.lc=S}function se(d){return d&65535}function he(d){const E=se(d);return E>32767?E-65536:E}const me={a:0,b:0};function xe(d,E){const y=he(d),G=he(E),O=y+(G&1)+(G>>1),q=O,ne=O-G;me.a=q,me.b=ne}function Ye(d,E){const y=se(d),S=se(E),G=y-(S>>1)&65535,O=S+G-32768&65535;me.a=O,me.b=G}function Xe(d,E,y,S,G,O,q){const ne=q<16384,Z=y>G?G:y;let ee=1,J,ue;for(;ee<=Z;)ee<<=1;for(ee>>=1,J=ee,ee>>=1;ee>=1;){ue=0;const ge=ue+O*(G-J),fe=O*ee,Ne=O*J,Ae=S*ee,ae=S*J;let Fe,He,dt,Ot;for(;ue<=ge;ue+=Ne){let it=ue;const ht=ue+S*(y-J);for(;it<=ht;it+=ae){const tt=it+Ae,Ft=it+fe,Pt=Ft+Ae;ne?(xe(d[it+E],d[Ft+E]),Fe=me.a,dt=me.b,xe(d[tt+E],d[Pt+E]),He=me.a,Ot=me.b,xe(Fe,He),d[it+E]=me.a,d[tt+E]=me.b,xe(dt,Ot),d[Ft+E]=me.a,d[Pt+E]=me.b):(Ye(d[it+E],d[Ft+E]),Fe=me.a,dt=me.b,Ye(d[tt+E],d[Pt+E]),He=me.a,Ot=me.b,Ye(Fe,He),d[it+E]=me.a,d[tt+E]=me.b,Ye(dt,Ot),d[Ft+E]=me.a,d[Pt+E]=me.b)}if(y&ee){const tt=it+fe;ne?xe(d[it+E],d[tt+E]):Ye(d[it+E],d[tt+E]),Fe=me.a,d[tt+E]=me.b,d[it+E]=Fe}}if(G&ee){let it=ue;const ht=ue+S*(y-J);for(;it<=ht;it+=ae){const tt=it+Ae;ne?xe(d[it+E],d[tt+E]):Ye(d[it+E],d[tt+E]),Fe=me.a,d[tt+E]=me.b,d[it+E]=Fe}}J=ee,ee>>=1}return ue}function ct(d,E,y,S,G,O,q,ne,Z){let ee=0,J=0;const ue=q,ge=Math.trunc(S.value+(G+7)/8);for(;S.value<ge;)for(Le(ee,J,y,S),ee=_e.c,J=_e.lc;J>=14;){const Ne=ee>>J-14&16383,Ae=E[Ne];if(Ae.len)J-=Ae.len,we(Ae.lit,O,ee,J,y,S,ne,Z,ue),ee=Oe.c,J=Oe.lc;else{if(!Ae.p)throw new Error("hufDecode issues");let ae;for(ae=0;ae<Ae.lit;ae++){const Fe=re(d[Ae.p[ae]]);for(;J<Fe&&S.value<ge;)Le(ee,J,y,S),ee=_e.c,J=_e.lc;if(J>=Fe&&te(d[Ae.p[ae]])==(ee>>J-Fe&(1<<Fe)-1)){J-=Fe,we(Ae.p[ae],O,ee,J,y,S,ne,Z,ue),ee=Oe.c,J=Oe.lc;break}}if(ae==Ae.lit)throw new Error("hufDecode issues")}}const fe=8-G&7;for(ee>>=fe,J-=fe;J>0;){const Ne=E[ee<<14-J&16383];if(Ne.len)J-=Ne.len,we(Ne.lit,O,ee,J,y,S,ne,Z,ue),ee=Oe.c,J=Oe.lc;else throw new Error("hufDecode issues")}return!0}function gt(d,E,y,S,G,O){const q={value:0},ne=y.value,Z=Be(E,y),ee=Be(E,y);y.value+=4;const J=Be(E,y);if(y.value+=4,Z<0||Z>=65537||ee<0||ee>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ue=new Array(65537),ge=new Array(16384);v(ge);const fe=S-(y.value-ne);if(Y(d,y,fe,Z,ee,ue),J>8*(S-(y.value-ne)))throw new Error("Something wrong with hufUncompress");ye(ue,Z,ee,ge),ct(ue,ge,d,y,J,ee,O,G,q)}function $e(d,E,y){for(let S=0;S<y;++S)E[S]=d[E[S]]}function k(d){for(let E=1;E<d.length;E++){const y=d[E-1]+d[E]-128;d[E]=y}}function Kt(d,E){let y=0,S=Math.floor((d.length+1)/2),G=0;const O=d.length-1;for(;!(G>O||(E[G++]=d[y++],G>O));)E[G++]=d[S++]}function lt(d){let E=d.byteLength;const y=new Array;let S=0;const G=new DataView(d);for(;E>0;){const O=G.getInt8(S++);if(O<0){const q=-O;E-=q+1;for(let ne=0;ne<q;ne++)y.push(G.getUint8(S++))}else{const q=O;E-=2;const ne=G.getUint8(S++);for(let Z=0;Z<q+1;Z++)y.push(ne)}}return y}function st(d,E,y,S,G,O){let q=new DataView(O.buffer);const ne=y[d.idx[0]].width,Z=y[d.idx[0]].height,ee=3,J=Math.floor(ne/8),ue=Math.ceil(ne/8),ge=Math.ceil(Z/8),fe=ne-(ue-1)*8,Ne=Z-(ge-1)*8,Ae={value:0},ae=new Array(ee),Fe=new Array(ee),He=new Array(ee),dt=new Array(ee),Ot=new Array(ee);for(let ht=0;ht<ee;++ht)Ot[ht]=E[d.idx[ht]],ae[ht]=ht<1?0:ae[ht-1]+ue*ge,Fe[ht]=new Float32Array(64),He[ht]=new Uint16Array(64),dt[ht]=new Uint16Array(ue*64);for(let ht=0;ht<ge;++ht){let tt=8;ht==ge-1&&(tt=Ne);let Ft=8;for(let et=0;et<ue;++et){et==ue-1&&(Ft=fe);for(let _t=0;_t<ee;++_t)He[_t].fill(0),He[_t][0]=G[ae[_t]++],qe(Ae,S,He[_t]),yt(He[_t],Fe[_t]),ze(Fe[_t]);L(Fe);for(let _t=0;_t<ee;++_t)B(Fe[_t],dt[_t],et*64)}let Pt=0;for(let et=0;et<ee;++et){const _t=y[d.idx[et]].type;for(let Cn=8*ht;Cn<8*ht+tt;++Cn){Pt=Ot[et][Cn];for(let Jn=0;Jn<J;++Jn){const Mn=Jn*64+(Cn&7)*8;q.setUint16(Pt+0*_t,dt[et][Mn+0],!0),q.setUint16(Pt+2*_t,dt[et][Mn+1],!0),q.setUint16(Pt+4*_t,dt[et][Mn+2],!0),q.setUint16(Pt+6*_t,dt[et][Mn+3],!0),q.setUint16(Pt+8*_t,dt[et][Mn+4],!0),q.setUint16(Pt+10*_t,dt[et][Mn+5],!0),q.setUint16(Pt+12*_t,dt[et][Mn+6],!0),q.setUint16(Pt+14*_t,dt[et][Mn+7],!0),Pt+=16*_t}}if(J!=ue)for(let Cn=8*ht;Cn<8*ht+tt;++Cn){const Jn=Ot[et][Cn]+8*J*2*_t,Mn=J*64+(Cn&7)*8;for(let vs=0;vs<Ft;++vs)q.setUint16(Jn+vs*2*_t,dt[et][Mn+vs],!0)}}}const it=new Uint16Array(ne);q=new DataView(O.buffer);for(let ht=0;ht<ee;++ht){y[d.idx[ht]].decoded=!0;const tt=y[d.idx[ht]].type;if(y[ht].type==2)for(let Ft=0;Ft<Z;++Ft){const Pt=Ot[ht][Ft];for(let et=0;et<ne;++et)it[et]=q.getUint16(Pt+et*2*tt,!0);for(let et=0;et<ne;++et)q.setFloat32(Pt+et*2*tt,W(it[et]),!0)}}}function qe(d,E,y){let S,G=1;for(;G<64;)S=E[d.value],S==65280?G=64:S>>8==255?G+=S&255:(y[G]=S,G++),d.value++}function yt(d,E){E[0]=W(d[0]),E[1]=W(d[1]),E[2]=W(d[5]),E[3]=W(d[6]),E[4]=W(d[14]),E[5]=W(d[15]),E[6]=W(d[27]),E[7]=W(d[28]),E[8]=W(d[2]),E[9]=W(d[4]),E[10]=W(d[7]),E[11]=W(d[13]),E[12]=W(d[16]),E[13]=W(d[26]),E[14]=W(d[29]),E[15]=W(d[42]),E[16]=W(d[3]),E[17]=W(d[8]),E[18]=W(d[12]),E[19]=W(d[17]),E[20]=W(d[25]),E[21]=W(d[30]),E[22]=W(d[41]),E[23]=W(d[43]),E[24]=W(d[9]),E[25]=W(d[11]),E[26]=W(d[18]),E[27]=W(d[24]),E[28]=W(d[31]),E[29]=W(d[40]),E[30]=W(d[44]),E[31]=W(d[53]),E[32]=W(d[10]),E[33]=W(d[19]),E[34]=W(d[23]),E[35]=W(d[32]),E[36]=W(d[39]),E[37]=W(d[45]),E[38]=W(d[52]),E[39]=W(d[54]),E[40]=W(d[20]),E[41]=W(d[22]),E[42]=W(d[33]),E[43]=W(d[38]),E[44]=W(d[46]),E[45]=W(d[51]),E[46]=W(d[55]),E[47]=W(d[60]),E[48]=W(d[21]),E[49]=W(d[34]),E[50]=W(d[37]),E[51]=W(d[47]),E[52]=W(d[50]),E[53]=W(d[56]),E[54]=W(d[59]),E[55]=W(d[61]),E[56]=W(d[35]),E[57]=W(d[36]),E[58]=W(d[48]),E[59]=W(d[49]),E[60]=W(d[57]),E[61]=W(d[58]),E[62]=W(d[62]),E[63]=W(d[63])}function ze(d){const E=.5*Math.cos(.7853975),y=.5*Math.cos(3.14159/16),S=.5*Math.cos(3.14159/8),G=.5*Math.cos(3*3.14159/16),O=.5*Math.cos(5*3.14159/16),q=.5*Math.cos(3*3.14159/8),ne=.5*Math.cos(7*3.14159/16),Z=new Array(4),ee=new Array(4),J=new Array(4),ue=new Array(4);for(let ge=0;ge<8;++ge){const fe=ge*8;Z[0]=S*d[fe+2],Z[1]=q*d[fe+2],Z[2]=S*d[fe+6],Z[3]=q*d[fe+6],ee[0]=y*d[fe+1]+G*d[fe+3]+O*d[fe+5]+ne*d[fe+7],ee[1]=G*d[fe+1]-ne*d[fe+3]-y*d[fe+5]-O*d[fe+7],ee[2]=O*d[fe+1]-y*d[fe+3]+ne*d[fe+5]+G*d[fe+7],ee[3]=ne*d[fe+1]-O*d[fe+3]+G*d[fe+5]-y*d[fe+7],J[0]=E*(d[fe+0]+d[fe+4]),J[3]=E*(d[fe+0]-d[fe+4]),J[1]=Z[0]+Z[3],J[2]=Z[1]-Z[2],ue[0]=J[0]+J[1],ue[1]=J[3]+J[2],ue[2]=J[3]-J[2],ue[3]=J[0]-J[1],d[fe+0]=ue[0]+ee[0],d[fe+1]=ue[1]+ee[1],d[fe+2]=ue[2]+ee[2],d[fe+3]=ue[3]+ee[3],d[fe+4]=ue[3]-ee[3],d[fe+5]=ue[2]-ee[2],d[fe+6]=ue[1]-ee[1],d[fe+7]=ue[0]-ee[0]}for(let ge=0;ge<8;++ge)Z[0]=S*d[16+ge],Z[1]=q*d[16+ge],Z[2]=S*d[48+ge],Z[3]=q*d[48+ge],ee[0]=y*d[8+ge]+G*d[24+ge]+O*d[40+ge]+ne*d[56+ge],ee[1]=G*d[8+ge]-ne*d[24+ge]-y*d[40+ge]-O*d[56+ge],ee[2]=O*d[8+ge]-y*d[24+ge]+ne*d[40+ge]+G*d[56+ge],ee[3]=ne*d[8+ge]-O*d[24+ge]+G*d[40+ge]-y*d[56+ge],J[0]=E*(d[ge]+d[32+ge]),J[3]=E*(d[ge]-d[32+ge]),J[1]=Z[0]+Z[3],J[2]=Z[1]-Z[2],ue[0]=J[0]+J[1],ue[1]=J[3]+J[2],ue[2]=J[3]-J[2],ue[3]=J[0]-J[1],d[0+ge]=ue[0]+ee[0],d[8+ge]=ue[1]+ee[1],d[16+ge]=ue[2]+ee[2],d[24+ge]=ue[3]+ee[3],d[32+ge]=ue[3]-ee[3],d[40+ge]=ue[2]-ee[2],d[48+ge]=ue[1]-ee[1],d[56+ge]=ue[0]-ee[0]}function L(d){for(let E=0;E<64;++E){const y=d[0][E],S=d[1][E],G=d[2][E];d[0][E]=y+1.5747*G,d[1][E]=y-.1873*S-.4682*G,d[2][E]=y+1.8556*S}}function B(d,E,y){for(let S=0;S<64;++S)E[y+S]=Hs.toHalfFloat(j(d[S]))}function j(d){return d<=1?Math.sign(d)*Math.pow(Math.abs(d),2.2):Math.sign(d)*Math.pow(F,Math.abs(d)-1)}function oe(d){return new DataView(d.array.buffer,d.offset.value,d.size)}function de(d){const E=d.viewer.buffer.slice(d.offset.value,d.offset.value+d.size),y=new Uint8Array(lt(E)),S=new Uint8Array(y.length);return k(y),Kt(y,S),new DataView(S.buffer)}function ce(d){const E=d.array.slice(d.offset.value,d.offset.value+d.size),y=Mo(E),S=new Uint8Array(y.length);return k(y),Kt(y,S),new DataView(S.buffer)}function Ge(d){const E=d.viewer,y={value:d.offset.value},S=new Uint16Array(d.columns*d.lines*(d.inputChannels.length*d.type)),G=new Uint8Array(8192);let O=0;const q=new Array(d.inputChannels.length);for(let Ne=0,Ae=d.inputChannels.length;Ne<Ae;Ne++)q[Ne]={},q[Ne].start=O,q[Ne].end=q[Ne].start,q[Ne].nx=d.columns,q[Ne].ny=d.lines,q[Ne].size=d.type,O+=q[Ne].nx*q[Ne].ny*q[Ne].size;const ne=le(E,y),Z=le(E,y);if(Z>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ne<=Z)for(let Ne=0;Ne<Z-ne+1;Ne++)G[Ne+ne]=We(E,y);const ee=new Uint16Array(65536),J=_(G,ee),ue=Be(E,y);gt(d.array,E,y,ue,S,O);for(let Ne=0;Ne<d.inputChannels.length;++Ne){const Ae=q[Ne];for(let ae=0;ae<q[Ne].size;++ae)Xe(S,Ae.start+ae,Ae.nx,Ae.size,Ae.ny,Ae.nx*Ae.size,J)}$e(ee,S,O);let ge=0;const fe=new Uint8Array(S.buffer.byteLength);for(let Ne=0;Ne<d.lines;Ne++)for(let Ae=0;Ae<d.inputChannels.length;Ae++){const ae=q[Ae],Fe=ae.nx*ae.size,He=new Uint8Array(S.buffer,ae.end*2,Fe*2);fe.set(He,ge),ge+=Fe*2,ae.end+=Fe}return new DataView(fe.buffer)}function be(d){const E=d.array.slice(d.offset.value,d.offset.value+d.size),y=Mo(E),S=d.inputChannels.length*d.lines*d.columns*d.totalBytes,G=new ArrayBuffer(S),O=new DataView(G);let q=0,ne=0;const Z=new Array(4);for(let ee=0;ee<d.lines;ee++)for(let J=0;J<d.inputChannels.length;J++){let ue=0;switch(d.inputChannels[J].pixelType){case 1:Z[0]=q,Z[1]=Z[0]+d.columns,q=Z[1]+d.columns;for(let fe=0;fe<d.columns;++fe){const Ne=y[Z[0]++]<<8|y[Z[1]++];ue+=Ne,O.setUint16(ne,ue,!0),ne+=2}break;case 2:Z[0]=q,Z[1]=Z[0]+d.columns,Z[2]=Z[1]+d.columns,q=Z[2]+d.columns;for(let fe=0;fe<d.columns;++fe){const Ne=y[Z[0]++]<<24|y[Z[1]++]<<16|y[Z[2]++]<<8;ue+=Ne,O.setUint32(ne,ue,!0),ne+=4}break}}return O}function Pe(d){const E=d.viewer,y={value:d.offset.value},S=new Uint8Array(d.columns*d.lines*(d.inputChannels.length*d.type*2)),G={version:Ze(E,y),unknownUncompressedSize:Ze(E,y),unknownCompressedSize:Ze(E,y),acCompressedSize:Ze(E,y),dcCompressedSize:Ze(E,y),rleCompressedSize:Ze(E,y),rleUncompressedSize:Ze(E,y),rleRawSize:Ze(E,y),totalAcUncompressedCount:Ze(E,y),totalDcUncompressedCount:Ze(E,y),acCompression:Ze(E,y)};if(G.version<2)throw new Error("EXRLoader.parse: "+Nn.compression+" version "+G.version+" is unsupported");const O=new Array;let q=le(E,y)-2;for(;q>0;){const Ae=Je(E.buffer,y),ae=We(E,y),Fe=ae>>2&3,He=(ae>>4)-1,dt=new Int8Array([He])[0],Ot=We(E,y);O.push({name:Ae,index:dt,type:Ot,compression:Fe}),q-=Ae.length+3}const ne=Nn.channels,Z=new Array(d.inputChannels.length);for(let Ae=0;Ae<d.inputChannels.length;++Ae){const ae=Z[Ae]={},Fe=ne[Ae];ae.name=Fe.name,ae.compression=0,ae.decoded=!1,ae.type=Fe.pixelType,ae.pLinear=Fe.pLinear,ae.width=d.columns,ae.height=d.lines}const ee={idx:new Array(3)};for(let Ae=0;Ae<d.inputChannels.length;++Ae){const ae=Z[Ae];for(let Fe=0;Fe<O.length;++Fe){const He=O[Fe];ae.name==He.name&&(ae.compression=He.compression,He.index>=0&&(ee.idx[He.index]=Ae),ae.offset=Ae)}}let J,ue,ge;if(G.acCompressedSize>0)switch(G.acCompression){case 0:J=new Uint16Array(G.totalAcUncompressedCount),gt(d.array,E,y,G.acCompressedSize,J,G.totalAcUncompressedCount);break;case 1:const Ae=d.array.slice(y.value,y.value+G.totalAcUncompressedCount),ae=Mo(Ae);J=new Uint16Array(ae.buffer),y.value+=G.totalAcUncompressedCount;break}if(G.dcCompressedSize>0){const Ae={array:d.array,offset:y,size:G.dcCompressedSize};ue=new Uint16Array(ce(Ae).buffer),y.value+=G.dcCompressedSize}if(G.rleRawSize>0){const Ae=d.array.slice(y.value,y.value+G.rleCompressedSize),ae=Mo(Ae);ge=lt(ae.buffer),y.value+=G.rleCompressedSize}let fe=0;const Ne=new Array(Z.length);for(let Ae=0;Ae<Ne.length;++Ae)Ne[Ae]=new Array;for(let Ae=0;Ae<d.lines;++Ae)for(let ae=0;ae<Z.length;++ae)Ne[ae].push(fe),fe+=Z[ae].width*d.type*2;st(ee,Ne,Z,J,ue,S);for(let Ae=0;Ae<Z.length;++Ae){const ae=Z[Ae];if(!ae.decoded)switch(ae.compression){case 2:let Fe=0,He=0;for(let dt=0;dt<d.lines;++dt){let Ot=Ne[Ae][Fe];for(let it=0;it<ae.width;++it){for(let ht=0;ht<2*ae.type;++ht)S[Ot++]=ge[He+ht*ae.width*ae.height];He++}Fe++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(S.buffer)}function Je(d,E){const y=new Uint8Array(d);let S=0;for(;y[E.value+S]!=0;)S+=1;const G=new TextDecoder().decode(y.slice(E.value,E.value+S));return E.value=E.value+S+1,G}function pe(d,E,y){const S=new TextDecoder().decode(new Uint8Array(d).slice(E.value,E.value+y));return E.value=E.value+y,S}function Re(d,E){const y=ke(d,E),S=Be(d,E);return[y,S]}function Ke(d,E){const y=Be(d,E),S=Be(d,E);return[y,S]}function ke(d,E){const y=d.getInt32(E.value,!0);return E.value=E.value+4,y}function Be(d,E){const y=d.getUint32(E.value,!0);return E.value=E.value+4,y}function rt(d,E){const y=d[E.value];return E.value=E.value+1,y}function We(d,E){const y=d.getUint8(E.value);return E.value=E.value+1,y}const Ze=function(d,E){let y;return"getBigInt64"in DataView.prototype?y=Number(d.getBigInt64(E.value,!0)):y=d.getUint32(E.value+4,!0)+Number(d.getUint32(E.value,!0)<<32),E.value+=8,y};function V(d,E){const y=d.getFloat32(E.value,!0);return E.value+=4,y}function ve(d,E){return Hs.toHalfFloat(V(d,E))}function W(d){const E=(d&31744)>>10,y=d&1023;return(d>>15?-1:1)*(E?E===31?y?NaN:1/0:Math.pow(2,E-15)*(1+y/1024):6103515625e-14*(y/1024))}function le(d,E){const y=d.getUint16(E.value,!0);return E.value+=2,y}function De(d,E){return W(le(d,E))}function Se(d,E,y,S){const G=y.value,O=[];for(;y.value<G+S-1;){const q=Je(E,y),ne=ke(d,y),Z=We(d,y);y.value+=3;const ee=ke(d,y),J=ke(d,y);O.push({name:q,pixelType:ne,pLinear:Z,xSampling:ee,ySampling:J})}return y.value+=1,O}function ut(d,E){const y=V(d,E),S=V(d,E),G=V(d,E),O=V(d,E),q=V(d,E),ne=V(d,E),Z=V(d,E),ee=V(d,E);return{redX:y,redY:S,greenX:G,greenY:O,blueX:q,blueY:ne,whiteX:Z,whiteY:ee}}function Tt(d,E){const y=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],S=We(d,E);return y[S]}function xt(d,E){const y=ke(d,E),S=ke(d,E),G=ke(d,E),O=ke(d,E);return{xMin:y,yMin:S,xMax:G,yMax:O}}function At(d,E){const y=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],S=We(d,E);return y[S]}function qt(d,E){const y=["ENVMAP_LATLONG","ENVMAP_CUBE"],S=We(d,E);return y[S]}function In(d,E){const y=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],S=["ROUND_DOWN","ROUND_UP"],G=Be(d,E),O=Be(d,E),q=We(d,E);return{xSize:G,ySize:O,levelMode:y[q&15],roundingMode:S[q>>4]}}function Is(d,E){const y=V(d,E),S=V(d,E);return[y,S]}function Ln(d,E){const y=V(d,E),S=V(d,E),G=V(d,E);return[y,S,G]}function _n(d,E,y,S,G){if(S==="string"||S==="stringvector"||S==="iccProfile")return pe(E,y,G);if(S==="chlist")return Se(d,E,y,G);if(S==="chromaticities")return ut(d,y);if(S==="compression")return Tt(d,y);if(S==="box2i")return xt(d,y);if(S==="envmap")return qt(d,y);if(S==="tiledesc")return In(d,y);if(S==="lineOrder")return At(d,y);if(S==="float")return V(d,y);if(S==="v2f")return Is(d,y);if(S==="v3f")return Ln(d,y);if(S==="int")return ke(d,y);if(S==="rational")return Re(d,y);if(S==="timecode")return Ke(d,y);if(S==="preview")return y.value+=G,"skipped";y.value+=G}function Ji(d,E){const y=Math.log2(d);return E=="ROUND_DOWN"?Math.floor(y):Math.ceil(y)}function Di(d,E,y){let S=0;switch(d.levelMode){case"ONE_LEVEL":S=1;break;case"MIPMAP_LEVELS":S=Ji(Math.max(E,y),d.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return S}function ji(d,E,y,S){const G=new Array(d);for(let O=0;O<d;O++){const q=1<<O;let ne=E/q|0;S=="ROUND_UP"&&ne*q<E&&(ne+=1);const Z=Math.max(ne,1);G[O]=(Z+y-1)/y|0}return G}function Qi(){const d=this,E=d.offset,y={value:0};for(let S=0;S<d.tileCount;S++){const G=ke(d.viewer,E),O=ke(d.viewer,E);E.value+=8,d.size=Be(d.viewer,E);const q=G*d.blockWidth,ne=O*d.blockHeight;d.columns=q+d.blockWidth>d.width?d.width-q:d.blockWidth,d.lines=ne+d.blockHeight>d.height?d.height-ne:d.blockHeight;const Z=d.columns*d.totalBytes,J=d.size<d.lines*Z?d.uncompress(d):oe(d);E.value+=d.size;for(let ue=0;ue<d.lines;ue++){const ge=ue*d.columns*d.totalBytes;for(let fe=0;fe<d.inputChannels.length;fe++){const Ne=Nn.channels[fe].name,Ae=d.channelByteOffsets[Ne]*d.columns,ae=d.decodeChannels[Ne];if(ae===void 0)continue;y.value=ge+Ae;const Fe=(d.height-(1+ne+ue))*d.outLineWidth;for(let He=0;He<d.columns;He++){const dt=Fe+(He+q)*d.outputChannels+ae;d.byteArray[dt]=d.getter(J,y)}}}}}function _s(){const d=this,E=d.offset,y={value:0};for(let S=0;S<d.height/d.blockHeight;S++){const G=ke(d.viewer,E)-Nn.dataWindow.yMin;d.size=Be(d.viewer,E),d.lines=G+d.blockHeight>d.height?d.height-G:d.blockHeight;const O=d.columns*d.totalBytes,ne=d.size<d.lines*O?d.uncompress(d):oe(d);E.value+=d.size;for(let Z=0;Z<d.blockHeight;Z++){const ee=S*d.blockHeight,J=Z+d.scanOrder(ee);if(J>=d.height)continue;const ue=Z*O,ge=(d.height-1-J)*d.outLineWidth;for(let fe=0;fe<d.inputChannels.length;fe++){const Ne=Nn.channels[fe].name,Ae=d.channelByteOffsets[Ne]*d.columns,ae=d.decodeChannels[Ne];if(ae!==void 0){y.value=ue+Ae;for(let Fe=0;Fe<d.columns;Fe++){const He=ge+Fe*d.outputChannels+ae;d.byteArray[He]=d.getter(ne,y)}}}}}}function fi(d,E,y){const S={};if(d.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");S.version=d.getUint8(4);const G=d.getUint8(5);S.spec={singleTile:!!(G&2),longName:!!(G&4),deepFormat:!!(G&8),multiPart:!!(G&16)},y.value=8;let O=!0;for(;O;){const q=Je(E,y);if(q==0)O=!1;else{const ne=Je(E,y),Z=Be(d,y),ee=_n(d,E,y,ne,Z);ee===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ne}'.`):S[q]=ee}}if((G&-7)!=0)throw console.error("THREE.EXRHeader:",S),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return S}function Cs(d,E,y,S,G){const O={size:0,viewer:E,array:y,offset:S,width:d.dataWindow.xMax-d.dataWindow.xMin+1,height:d.dataWindow.yMax-d.dataWindow.yMin+1,inputChannels:d.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Nt};switch(d.compression){case"NO_COMPRESSION":O.blockHeight=1,O.uncompress=oe;break;case"RLE_COMPRESSION":O.blockHeight=1,O.uncompress=de;break;case"ZIPS_COMPRESSION":O.blockHeight=1,O.uncompress=ce;break;case"ZIP_COMPRESSION":O.blockHeight=16,O.uncompress=ce;break;case"PIZ_COMPRESSION":O.blockHeight=32,O.uncompress=Ge;break;case"PXR24_COMPRESSION":O.blockHeight=16,O.uncompress=be;break;case"DWAA_COMPRESSION":O.blockHeight=32,O.uncompress=Pe;break;case"DWAB_COMPRESSION":O.blockHeight=256,O.uncompress=Pe;break;default:throw new Error("EXRLoader.parse: "+d.compression+" is unsupported")}const q={};for(const J of d.channels)switch(J.name){case"Y":case"R":case"G":case"B":case"A":q[J.name]=!0,O.type=J.pixelType}let ne=!1;if(q.R&&q.G&&q.B)ne=!q.A,O.outputChannels=4,O.decodeChannels={R:0,G:1,B:2,A:3};else if(q.Y)O.outputChannels=1,O.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(O.type==1)switch(G){case Zt:O.getter=De;break;case ln:O.getter=le;break}else if(O.type==2)switch(G){case Zt:O.getter=V;break;case ln:O.getter=ve}else throw new Error("EXRLoader.parse: unsupported pixelType "+O.type+" for "+d.compression+".");O.columns=O.width;const Z=O.width*O.height*O.outputChannels;switch(G){case Zt:O.byteArray=new Float32Array(Z),ne&&O.byteArray.fill(1,0,Z);break;case ln:O.byteArray=new Uint16Array(Z),ne&&O.byteArray.fill(15360,0,Z);break;default:console.error("THREE.EXRLoader: unsupported type: ",G);break}let ee=0;for(const J of d.channels)O.decodeChannels[J.name]!==void 0&&(O.channelByteOffsets[J.name]=ee),ee+=J.pixelType*2;if(O.totalBytes=ee,O.outLineWidth=O.width*O.outputChannels,d.lineOrder==="INCREASING_Y"?O.scanOrder=J=>J:O.scanOrder=J=>O.height-1-J,O.outputChannels==4?(O.format=Bn,O.colorSpace=Nt):(O.format=ea,O.colorSpace=zn),d.spec.singleTile){O.blockHeight=d.tiles.ySize,O.blockWidth=d.tiles.xSize;const J=Di(d.tiles,O.width,O.height),ue=ji(J,O.width,d.tiles.xSize,d.tiles.roundingMode),ge=ji(J,O.height,d.tiles.ySize,d.tiles.roundingMode);O.tileCount=ue[0]*ge[0];for(let fe=0;fe<J;fe++)for(let Ne=0;Ne<ge[fe];Ne++)for(let Ae=0;Ae<ue[fe];Ae++)Ze(E,S);O.decode=Qi.bind(O)}else{O.blockWidth=O.width;const J=Math.ceil(O.height/O.blockHeight);for(let ue=0;ue<J;ue++)Ze(E,S);O.decode=_s.bind(O)}return O}const $i={value:0},ys=new DataView(e),ur=new Uint8Array(e),Nn=fi(ys,e,$i),M=Cs(Nn,ys,ur,$i,this.type);return M.decode(),{header:Nn,width:M.width,height:M.height,data:M.byteArray,format:M.format,colorSpace:M.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){o.colorSpace=a.colorSpace,o.minFilter=bt,o.magFilter=bt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,r,n,s)}}class NM extends Ai{constructor(e){super(e),this.hdrLoader=new Fd,this.type=ln}load(e,t,n,s){const r=new na;switch(r.type=this.type,r.type){case Zt:r.colorSpace=Nt,r.minFilter=bt,r.magFilter=bt,r.generateMipmaps=!1;break;case ln:r.colorSpace=Nt,r.minFilter=bt,r.magFilter=bt,r.generateMipmaps=!1;break}const o=this;let a=0;function c(l,h,u,A){new rr(o.manager).setPath(o.path).setResponseType("arraybuffer").setWithCredentials(o.withCredentials).load(e[l],function(f){a++;const m=o.hdrLoader.parse(f);if(m){if(m.data!==void 0){const I=new ra(m.data,m.width,m.height);I.type=r.type,I.colorSpace=r.colorSpace,I.format=r.format,I.minFilter=r.minFilter,I.magFilter=r.magFilter,I.generateMipmaps=r.generateMipmaps,r.images[l]=I}a===6&&(r.needsUpdate=!0,h&&h(r))}},u,A)}for(let l=0;l<e.length;l++)c(l,t,n,s);return r}setDataType(e){return this.type=e,this.hdrLoader.setDataType(e),this}}function PM(i,{renderer:e,...t}){if(!e)throw new Error(`Env map requires renderer to passed in the options for ${i}!`);const n=!Array.isArray(i);let s;if(n){const o=i,a=o.slice(o.lastIndexOf(".")+1);switch(a){case"hdr":s=new Fd().setDataType(hn).loadAsync(o);break;case"exr":s=new LM().setDataType(hn).loadAsync(o);break;case"png":case"jpg":s=new wl().loadAsync(o).then(c=>(e.outputColorSpace===Et&&t.gamma&&(c.colorSpace=Et),c));break;default:throw new Error(`Extension ${a} not supported`)}s=s.then(c=>t.pmrem?UM(c,e):OM(c))}else{const o=i,a=o[0].slice(o[0].lastIndexOf(".")+1);switch(a){case"hdr":s=new NM().setDataType(hn).loadAsync(o);break;case"png":case"jpg":s=new H_().loadAsync(o).then(c=>(e.outputColorSpace===Et&&t.gamma&&(c.colorSpace=Et),c));break;default:throw new Error(`Extension ${a} not supported`)}s=s.then(c=>t.pmrem?FM(c,e):c)}return Object.keys(t).filter(o=>!["pmrem","linear"].includes(o)).forEach(o=>{s=s.then(a=>(a[o]=t[o],a))}),s}function UM(i,e){const t=new zo(e);t.compileEquirectangularShader();const n=t.fromEquirectangular(i);return t.dispose(),i.dispose(),n.texture}function FM(i,e){const t=new zo(e);t.compileCubemapShader();const n=t.fromCubemap(i);return t.dispose(),i.dispose(),n.texture}function OM(i){return i.mapping=Uo,i}function cA(i,e){if(e===Rf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Kc||e===BA){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Kc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class GM extends Ai{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new YM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new tw(t)}),this.register(function(t){return new nw(t)}),this.register(function(t){return new iw(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new VM(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new ew(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new kM(t)}),this.register(function(t){return new sw(t)}),this.register(function(t){return new rw(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Dr.extractUrlBase(e);o=Dr.resolveURL(l,this.path)}else o=Dr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new rr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Yd){try{o[pt.KHR_BINARY_GLTF]=new ow(e)}catch(u){s&&s(u);return}r=JSON.parse(o[pt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Iw(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],A=r.extensionsRequired||[];switch(u){case pt.KHR_MATERIALS_UNLIT:o[u]=new zM;break;case pt.KHR_DRACO_MESH_COMPRESSION:o[u]=new aw(r,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:o[u]=new cw;break;case pt.KHR_MESH_QUANTIZATION:o[u]=new lw;break;default:A.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function HM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class kM{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new je(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Nt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new qA(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new W_(h),l.distance=u;break;case"spot":l=new V_(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,vi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class zM{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return Vi}extendParams(e,t,n){const s=[];e.color=new je(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Nt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(s)}}class VM{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class YM{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(a,a)}return Promise.all(r)}}class WM{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class XM{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class KM{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new je(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Nt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Et)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class qM{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class JM{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new je().setRGB(a[0],a[1],a[2],Nt),Promise.all(r)}}class jM{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class $M{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new je().setRGB(a[0],a[1],a[2],Nt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Et)),Promise.all(r)}}class ZM{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class ew{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class tw{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class nw{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class iw{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class sw{constructor(e){this.name=pt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,A=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,A,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,A,s.mode,s.filter),f})})}else return null}}class rw{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==bn.TRIANGLES&&l.mode!==bn.TRIANGLE_STRIP&&l.mode!==bn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],A=l[0].count,f=[];for(const m of u){const I=new nt,g=new K,p=new ai,C=new K(1,1,1),x=new S_(m.geometry,m.material,A);for(let w=0;w<A;w++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,w),c.SCALE&&C.fromBufferAttribute(c.SCALE,w),x.setMatrixAt(w,I.compose(g,p,C));for(const w in c)if(w==="_COLOR_0"){const P=c[w];x.instanceColor=new $c(P.array,P.itemSize,P.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&m.geometry.setAttribute(w,c[w]);Ut.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Yd="glTF",Mr=12,lA={JSON:1313821514,BIN:5130562};class ow{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Mr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Yd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Mr,r=new DataView(e,Mr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===lA.JSON){const l=new Uint8Array(e,Mr+o,a);this.content=n.decode(l)}else if(c===lA.BIN){const l=Mr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class aw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=ll[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=ll[h]||h.toLowerCase();if(o[h]!==void 0){const A=n.accessors[e.attributes[h]],f=Ks[A.componentType];l[u]=f.name,c[u]=A.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,A){s.decodeDracoFile(h,function(f){for(const m in f.attributes){const I=f.attributes[m],g=c[m];g!==void 0&&(I.normalized=g)}u(f)},a,l,Nt,A)})})}}class cw{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class lw{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}}class Wd extends zr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,A=u*u,f=A*u,m=e*l,I=m-l,g=-2*f+3*A,p=f-A,C=1-g,x=p-A+u;for(let w=0;w!==a;w++){const P=o[I+w+a],N=o[I+w+c]*h,D=o[m+w+a],T=o[m+w]*h;r[w]=C*P+x*N+g*D+p*T}return r}}const hw=new ai;class uw extends Wd{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return hw.fromArray(r).normalize().toArray(r),r}}const bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hA={9728:fn,9729:bt,9984:gA,9985:wo,9986:wr,9987:ni},uA={33071:ti,33648:Fo,10497:$s},cc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ll={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Aw={CUBICSPLINE:void 0,LINEAR:Ur,STEP:Pr},lc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dw(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new oa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oi})),i.DefaultMaterial}function os(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fw(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const A=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(A)}if(s){const A=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(A)}if(r){const A=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(A)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],A=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=A),i.morphTargetsRelative=!0,i})}function pw(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gw(i){let e;const t=i.extensions&&i.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hc(t.attributes):e=i.indices+":"+hc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+hc(i.targets[n]);return e}function hc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function hl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mw(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Ew=new nt;class Iw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new HM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new wl(this.options.manager):this.textureLoader=new K_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return os(r,a,s),vi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Dr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=cc[s.type],a=Ks[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Yt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=cc[s.type],l=Ks[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,A=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let I,g;if(f&&f!==u){const p=Math.floor(A/f),C="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let x=t.cache.get(C);x||(I=new l(a,p*f,s.count*f/h),x=new __(I,f/h),t.cache.add(C,x)),g=new xl(x,c,A%f/h,m)}else a===null?I=new l(s.count*c):I=new l(a,A,s.count*c),g=new Yt(I,c,m);if(s.sparse!==void 0){const p=cc.SCALAR,C=Ks[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,P=new C(o[1],x,s.sparse.count*p),N=new l(o[2],w,s.sparse.count*c);a!==null&&(g=new Yt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let D=0,T=P.length;D<T;D++){const F=P[D];if(g.setX(F,N[D*c]),c>=2&&g.setY(F,N[D*c+1]),c>=3&&g.setZ(F,N[D*c+2]),c>=4&&g.setW(F,N[D*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const A=(r.samplers||{})[o.sampler]||{};return h.magFilter=hA[A.magFilter]||bt,h.minFilter=hA[A.minFilter]||ni,h.wrapS=uA[A.wrapS]||$s,h.wrapT=uA[A.wrapT]||$s,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const A=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(A),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(A,f){let m=A;t.isImageBitmapLoader===!0&&(m=function(I){const g=new zt(I);g.needsUpdate=!0,A(g)}),t.load(Dr.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),vi(u,o),u.userData.mimeType=o.mimeType||mw(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[pt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new VA,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new zA,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return oa}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[pt.KHR_MATERIALS_UNLIT]){const u=s[pt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new je(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const A=u.baseColorFactor;a.color.setRGB(A[0],A[1],A[2],Nt),a.opacity=A[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Et)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(A){return A.getMaterialType&&A.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(A){return A.extendMaterialParams&&A.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=En);const h=r.alphaMode||lc.OPAQUE;if(h===lc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===lc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Vi&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ve(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Vi&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Vi){const u=r.emissiveFactor;a.emissive=new je().setRGB(u[0],u[1],u[2],Nt)}return r.emissiveTexture!==void 0&&o!==Vi&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Et)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),vi(u,r),t.associations.set(u,{materials:e}),r.extensions&&os(s,u,r),u})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return AA(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=gw(l),u=s[h];if(u)o.push(u.promise);else{let A;l.extensions&&l.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?A=r(l):A=AA(new nn,l,t),s[h]={primitive:l,promise:A},o.push(A)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?dw(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const I=h[f],g=o[f];let p;const C=l[f];if(g.mode===bn.TRIANGLES||g.mode===bn.TRIANGLE_STRIP||g.mode===bn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new y_(I,C):new Gt(I,C),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===bn.TRIANGLE_STRIP?p.geometry=cA(p.geometry,BA):g.mode===bn.TRIANGLE_FAN&&(p.geometry=cA(p.geometry,Kc));else if(g.mode===bn.LINES)p=new B_(I,C);else if(g.mode===bn.LINE_STRIP)p=new Bl(I,C);else if(g.mode===bn.LINE_LOOP)p=new M_(I,C);else if(g.mode===bn.POINTS)p=new w_(I,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&pw(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),vi(p,r),g.extensions&&os(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&os(s,u[0],r),u[0];const A=new Yi;r.extensions&&os(s,A,r),t.associations.set(A,{meshes:e});for(let f=0,m=u.length;f<m;f++)A.add(u[f]);return A})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new an(bA.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ia(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const A=new nt;r!==null&&A.fromArray(r.array,l*16),c.push(A)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Sl(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,A=s.channels.length;u<A;u++){const f=s.channels[u],m=s.samplers[f.sampler],I=f.target,g=I.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,C=s.parameters!==void 0?s.parameters[m.output]:m.output;I.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",C)),l.push(m),h.push(I))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const A=u[0],f=u[1],m=u[2],I=u[3],g=u[4],p=[];for(let C=0,x=A.length;C<x;C++){const w=A[C],P=f[C],N=m[C],D=I[C],T=g[C];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const F=n._createAnimationTracks(w,P,N,D,T);if(F)for(let _=0;_<F.length;_++)p.push(F[_])}return new N_(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],A=l[2];A!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(A,Ew)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new kA:l.length>1?h=new Yi:l.length===1?h=l[0]:h=new Ut,h!==l[0])for(let u=0,A=l.length;u<A;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),vi(h,r),r.extensions&&os(n,h,r),r.matrix!==void 0){const u=new nt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Yi;n.name&&(r.name=s.createUniqueName(n.name)),vi(r,n),n.extensions&&os(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[A,f]of s.associations)(A instanceof Rn||A instanceof zt)&&u.set(A,f);return h.traverse(A=>{const f=s.associations.get(A);f!=null&&u.set(A,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];ki[r.path]===ki.weights?e.traverse(function(A){A.morphTargetInfluences&&c.push(A.name?A.name:A.uuid)}):c.push(a);let l;switch(ki[r.path]){case ki.weights:l=nr;break;case ki.rotation:l=ir;break;case ki.position:case ki.scale:l=sr;break;default:switch(n.itemSize){case 1:l=nr;break;case 2:case 3:default:l=sr;break}break}const h=s.interpolation!==void 0?Aw[s.interpolation]:Ur,u=this._getArrayFromAccessor(n);for(let A=0,f=c.length;A<f;A++){const m=new l(c[A]+"."+ki[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=hl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof ir?uw:Wd;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _w(i,e,t){const n=e.attributes,s=new bi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new K(c[0],c[1],c[2]),new K(l[0],l[1],l[2])),a.normalized){const h=hl(Ks[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new K,c=new K;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const A=t.json.accessors[u.POSITION],f=A.min,m=A.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),A.normalized){const I=hl(Ks[A.componentType]);c.multiplyScalar(I)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new li;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function AA(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=ll[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return It.workingColorSpace!==Nt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${It.workingColorSpace}" not supported.`),vi(i,e),_w(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?fw(i,e.targets,t):i})}const uc=new WeakMap;class Cw extends Ai{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){const r=new rr(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Et,n).catch(n)}decodeDracoFile(e,t,n,s,r=Nt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(uc.has(e)){const c=uc.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(s=c,new Promise((l,h)=>{s._callbacks[r]={resolve:l,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),uc.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new nn;e.index&&t.setIndex(new Yt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const s=e.attributes[n],r=s.name,o=s.array,a=s.itemSize,c=new Yt(o,a);r==="color"&&(this._assignVertexColorSpace(c,s.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==Et)return;const n=new je;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),It.toWorkingColorSpace(n,Et),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new rr(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=yw.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){const o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function yw(){let i,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(h=>{const u=h.draco,A=new u.Decoder;try{const f=t(u,A,new Int8Array(c),l),m=f.attributes.map(I=>I.array.buffer);f.index&&m.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},m)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(A)}});break}};function t(o,a,c,l){const h=l.attributeIDs,u=l.attributeTypes;let A,f;const m=a.GetEncodedGeometryType(c);if(m===o.TRIANGULAR_MESH)A=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,A);else if(m===o.POINT_CLOUD)A=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,A);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||A.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const I={index:null,attributes:[]};for(const g in h){const p=self[u[g]];let C,x;if(l.useUniqueIDs)x=h[g],C=a.GetAttributeByUniqueId(A,x);else{if(x=a.GetAttributeId(A,o[h[g]]),x===-1)continue;C=a.GetAttribute(A,x)}const w=s(o,a,A,g,p,C);g==="color"&&(w.vertexColorSpace=l.vertexColorSpace),I.attributes.push(w)}return m===o.TRIANGULAR_MESH&&(I.index=n(o,a,A)),o.destroy(A),I}function n(o,a,c){const h=c.num_faces()*3,u=h*4,A=o._malloc(u);a.GetTrianglesUInt32Array(c,u,A);const f=new Uint32Array(o.HEAPF32.buffer,A,h).slice();return o._free(A),{array:f,itemSize:1}}function s(o,a,c,l,h,u){const A=u.num_components(),m=c.num_points()*A,I=m*h.BYTES_PER_ELEMENT,g=r(o,h),p=o._malloc(I);a.GetAttributeDataArrayForAllPoints(c,u,g,I,p);const C=new h(o.HEAPF32.buffer,p,m).slice();return o._free(p),{name:l,array:C,itemSize:A}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function vw(i,e={}){return new Promise((t,n)=>{const s=new GM;if(e.draco){const r=new Cw;r.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"),s.setDRACOLoader(r)}s.load(i,t,void 0,r=>n(new Error(`Could not load GLTF asset ${i}:
${r}`)))})}class xw{#t=[];#n={};#i=[];#e=[];addProgressListener(e){if(typeof e!="function")throw new TypeError("onProgress must be a function");this.#i.push(e)}queue({url:e,type:t,...n}){if(!e)throw new TypeError("Must specify a URL or opt.url for AssetManager.queue()");const s=this._getQueued(e);if(s){const o=mM(s,["url","type","key"]);if(JSON.stringify(n)!==JSON.stringify(o)){const a=performance.now().toFixed(3).replace(".",""),c=`${e}.${a}`;return this.#t.push({key:c,url:e,type:t||this._extractType(e),...n}),c}return s.key||s.url}const r={url:e,type:t||this._extractType(e),...n};return this.#t.push(r),r.key||r.url}queueStandardMaterial(e,t={}){const n={},s=["pbrMap","alphaMap","aoMap","bumpMap","displacementMap","lightMap","metalnessMap","roughnessMap","clearcoatMap","clearcoatNormalMap","clearcoatRoughnessMap","sheenRoughnessMap","sheenColorMap","specularIntensityMap","specularColorMap","thicknessMap","transmissionMap"];return Object.keys(e).forEach(r=>{n[r]=this.queue({url:e[r],type:"texture",...t,...!s.includes(r)&&{gamma:!0}})}),n}_getQueued(e){return this.#t.find(t=>t.url===e)}_extractType(e){const t=e.slice(e.lastIndexOf("."));switch(!0){case/\.(gltf|glb)$/i.test(t):return"gltf";case/\.json$/i.test(t):return"json";case/\.svg$/i.test(t):return"svg";case/\.(jpe?g|png|gif|bmp|tga|tif)$/i.test(t):return"image";case/\.(wav|mp3)$/i.test(t):return"audio";case/\.(mp4|webm|ogg|ogv)$/i.test(t):return"video";default:throw new Error(`Could not load ${e}, unknown file extension!`)}}get=e=>{if(!e)throw new TypeError("Must specify an URL for AssetManager.get()");return this.#n[e]};getStandardMaterial=e=>uM(e,t=>this.get(t));async loadSingle({renderer:e,...t}){if(!e)throw new Error("You must provide a renderer to the loadSingle function.");try{const n=performance.now(),s=t.key||t.url;return s in this.#n||(this.#n[s]=await this._loadItem({renderer:e,...t})),window.DEBUG&&console.log(`📦 Loaded single asset %c${t.url}%c in ${nc(performance.now()-n)}`,"color:blue","color:black"),s}catch(n){console.error(`📦 Asset ${t.url} was not loaded:
${n}`)}}async load({renderer:e}){if(!e)throw new Error("You must provide a renderer to the load function.");const t=this.#t.slice();this.#t.length=0;const n=t.length;if(n===0){setTimeout(()=>this.#i.forEach(r=>r(1)),0);return}const s=performance.now();if(await Promise.all(t.map(async(r,o)=>{try{const c=performance.now(),l=r.key||r.url;l in this.#n||(this.#n[l]=await this._loadItem({renderer:e,...r})),window.DEBUG&&this.log(`Loaded %c${r.url}%c in ${nc(performance.now()-c)}`,"color:blue","color:black")}catch(c){this.logError(`Asset ${r.url} was not loaded:
${c}`)}const a=(o+1)/n;this.#i.forEach(c=>c(a))})),window.DEBUG){const r=this.#e.filter(o=>o.type==="error");r.length===0?this.groupLog(`📦 Assets loaded in ${nc(performance.now()-s)} ⏱`):this.groupLog(`📦 %c Could not load ${r.length} asset${r.length>1?"s":""} `,"color:white;background:red;")}}_loadItem({url:e,type:t,renderer:n,...s}){switch(t){case"gltf":return vw(e,s);case"json":return fetch(e).then(r=>r.json());case"envmap":case"envMap":case"env-map":return PM(e,{renderer:n,...s});case"svg":case"image":return cd(e,{crossorigin:"anonymous"});case"texture":return EM(e,{renderer:n,...s});case"audio":return fetch(e).then(r=>r.arrayBuffer());case"video":return fetch(e).then(r=>r.blob());default:throw new Error(`Could not load ${e}, the type ${t} is unknown!`)}}log(...e){this.#e.push({type:"log",text:e})}logError(...e){this.#e.push({type:"error",text:e})}groupLog(...e){console.groupCollapsed(...e),this.#e.forEach(t=>{console[t.type](...t.text)}),console.groupEnd(),this.#e.length=0}}const Sn=new xw;function Sw(i,e){Xd(i),i.uniforms=e,i.addBeforeCompileListener?.(t=>{i.uniforms={...i.uniforms,...t.uniforms},t.uniforms=i.uniforms}),Kd(i)}function Bw(i,e){Xd(i),i.addBeforeCompileListener?.(t=>{t.vertexShader=Mw(t.vertexShader,e)}),Kd(i)}function Xd(i){i.beforeCompileListeners||(i.beforeCompileListeners=[],i.addBeforeCompileListener=e=>{i.beforeCompileListeners?.push(e)})}function Kd(i){i.onBeforeCompile=e=>{i.beforeCompileListeners?.forEach(t=>t(e))}}function Mw(i,{defines:e={},head:t="",main:n="",transformed:s,objectNormal:r,transformedNormal:o,gl_Position:a,diffuse:c,emissive:l,gl_FragColor:h,...u}){let A=i;const f=(I,g,p)=>I.split(g).join(p);return Object.keys(u).forEach(I=>{A=f(A,I,u[I])}),A=A.replace("void main() {",`
    ${t}
    void main() {
      ${n}
    `),s&&A.includes("#include <begin_vertex>")&&(A=A.replace("#include <begin_vertex>",`#include <begin_vertex>
      ${s}
      `)),r&&A.includes("#include <beginnormal_vertex>")&&(A=A.Sreplace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
      ${r}
      `)),o&&A.includes("#include <defaultnormal_vertex>")&&(A=A.replace("#include <defaultnormal_vertex>",`#include <defaultnormal_vertex>
      ${o}
      `)),a&&A.includes("#include <project_vertex>")&&(A=A.replace("#include <project_vertex>",`#include <project_vertex>
      ${a}
      `)),c&&A.includes("vec4 diffuseColor = vec4( diffuse, opacity );")&&(A=A.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`
      vec3 diffuse_;
      ${f(c,"diffuse =","diffuse_ =")}
      vec4 diffuseColor = vec4(diffuse_, opacity);
      `)),l&&A.includes("vec3 totalEmissiveRadiance = emissive;")&&(A=A.replace("vec3 totalEmissiveRadiance = emissive;",`
      vec3 emissive_;
      ${f(l,"emissive =","emissive_ =")}
      vec3 totalEmissiveRadiance = emissive_;
      `)),h&&A.includes("#include <output_fragment>")&&(A=A.replace("#include <output_fragment>",`
      #include <output_fragment>
      ${h}
      `)),`
    ${Object.keys(e).map(I=>`#define ${I} ${e[I]}`).join(`
`)}
    ${A}
  `}const ww=Sn.queue({url:"assets/suzanne.gltf",type:"gltf"}),bw=Sn.queue({url:"assets/spotty-metal/albedo.jpg",type:"texture",gamma:!0}),Tw=Sn.queue({url:"assets/spotty-metal/metalness.jpg",type:"texture"}),Rw=Sn.queue({url:"assets/spotty-metal/roughness.jpg",type:"texture"}),Dw=Sn.queue({url:"assets/spotty-metal/normal.jpg",type:"texture"}),Qw=Sn.queue({url:"assets/ouside-afternoon-blurred-hdr.jpg",type:"env-map",gamma:!0});class Lw extends Yi{webgl;options;material;speed;constructor(e,t={}){super(),this.webgl=e,this.options=t;const s=Sn.get(ww).scene.clone(),r=Sn.get(Qw),o=new oa({map:Sn.get(bw),metalnessMap:Sn.get(Tw),roughnessMap:Sn.get(Rw),normalMap:Sn.get(Dw),normalScale:new Ve(2,2),envMap:r,roughness:.5,metalness:1});this.webgl.gui?.add(o,"roughness"),this.material=o,Sw(o,{time:{value:0},frequency:{value:.5},amplitude:{value:.7}});const a=this.webgl.gui?.addFolder("Movement");a?.add(o.uniforms.frequency,"value",0,1).name("frequency"),a?.add(o.uniforms.amplitude,"value",0,1).name("amplitude"),Bw(o,{head:`
        uniform float time;
        uniform float frequency;
        uniform float amplitude;
      `,main:`
        float theta = sin(position.z * frequency + time) * amplitude;
        float c = cos(theta);
        float s = sin(theta);
        mat3 deformMatrix = mat3(c, 0, s, 0, 1, 0, -s, 0, c);
      `,objectNormal:`
        objectNormal *= deformMatrix;
      `,transformed:`
        transformed *= deformMatrix;
      `}),s.traverse(c=>{c.isMesh&&(c.material=o)}),s.scale.multiplyScalar(1.2),this.speed=1.5,a?.add(this,"speed",0,5),this.add(s),this.webgl.scene.background=r}onPointerDown(e,{x:t,y:n}){const s=new Ve().set(t/this.webgl.width*2-1,-n/this.webgl.height*2+1),r=new s0;r.setFromCamera(s,this.webgl.camera);const o=r.intersectObject(this,!0);console.log(o.length>0?`Hit ${o[0].object.name}!`:"No hit")}update(e,t){this.material.uniforms&&(this.material.uniforms.time.value+=e*this.speed)}}function Nw(i){const e=new k_(16777215,16777215,.6);e.color.setHSL(.6,1,.6),e.groundColor.setHSL(.095,1,.75),e.position.set(0,50,0),i.scene.add(e);const t=new qA(16777215,1);t.color.setHSL(.1,1,.95),t.position.set(3,5,1),t.position.multiplyScalar(50),i.scene.add(t)}const qd=`
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
`;function Pw(i){const e=document.createElement("style");e.textContent=qd,document.head.appendChild(e);const t=document.createElement("div");t.classList.add("button"),t.style.position="fixed",t.style.bottom="0",t.style.right="0",t.textContent="📸 Save screenshot",t.addEventListener("click",()=>i.saveScreenshot()),document.body.appendChild(t)}function Uw(i){const e=document.createElement("style");e.textContent=qd,document.head.appendChild(e);const t=document.createElement("div");t.classList.add("button"),t.style.position="fixed",t.style.bottom="0",t.style.left="0",t.textContent="🔴 Start recording mp4",t.addEventListener("click",async()=>{i.isRecording?(t.textContent="⏳ Processing video...",t.setAttribute("disabled",""),await i.stopRecording(),t.removeAttribute("disabled"),t.textContent="🔴 Start recording mp4"):(t.textContent="🟥 Stop recording mp4",i.startRecording())}),document.body.appendChild(t)}window.DEBUG=window.location.search.includes("debug");const Fw=document.querySelector("#app"),tn=new fy({canvas:Fw,background:"#111",backgroundAlpha:1,postprocessing:!0,showFps:window.DEBUG,orbitControls:window.DEBUG,gui:window.DEBUG});window.DEBUG&&(window.webgl=tn);tn.canvas&&(tn.canvas.style.visibility="hidden");await tn.init();await Sn.load({renderer:tn.renderer});tn.scene.suzanne=new Lw(tn);tn.scene.add(tn.scene.suzanne);Nw(tn);tn.composer&&tn.composer.addPass(new rC(tn.camera,new eC));window.DEBUG&&(Pw(tn),Uw(tn));tn.canvas&&(tn.canvas.style.visibility="");tn.start();
