!function(n){"module"in this?module.exports=n():bobs=n()}(function(){var n=new TextEncoder,t=f(":"),e=f("d"),r=f("e"),i=f("i"),o=f("l"),u=f("s");function f(t){return n.encode(t)}function c(n,t){n.push(i,f(+t),r)}function a(n,e){n.push(u,f((e=f(e)).byteLength),t,e)}function h(n,i,u){return"boolean"==(u=typeof i)||"number"===u&&i%1==0?c(n,i):i&&i.byteLength?function(n,e){n.push(f(e.byteLength),t,e)}(n,new Uint8Array(i)):Array.isArray(i)?function(n,t,e,i){for(n.push(o),e=0,i=t.length;e<i;e++)h(n,t[e]);n.push(r)}(n,i):i instanceof Object?function(n,t,i,o,u){for(n.push(e),o=0,u=(i=Object.keys(t).sort()).length;o<u;o++)a(n,i[o]),h(n,t[i[o]]);n.push(r)}(n,i):i?a(n,i):c(n),n.length}var l=new TextDecoder,s=58,y=100,b=101,d=105,g=108,p=115,v=45,w=48,A=57;function L(n){return l.decode(m(n))}function m(n,t){return t=U(n,n.i,n.i=x(n,s)+1),n.val.subarray(n.i,n.i+=t)}function x(n,t,e){for(e=n.i;e<n.l;e++)if(n.val[e]===t)return e}function U(n,t,e,r,i,o){for(r=0,i=1;t<e;t++)(o=n.val[t])===v&&(i=-1),o>=w&&o<=A&&(r=10*r+o-48);return r*i}return{encode:function(n,t,e,r,i,o,u,f,c){for(e=r=0,i=h(t=[],n),o=[];e<i;e++)r+=o[e]=t[e].byteLength;for(e=u=0,f=new Uint8Array(r);e<i;e++)for(c=0;c<o[e];c++)f[u++]=t[e][c];return f},decode:function(n){return function n(t,e){return(e=t.val[t.i])===g?function(t,e){for(t.i++,e=[];t.val[t.i]!==b;)e[e.length]=n(t);return t.i++,e}(t):e===d?function(n){return U(n,++n.i,n.i=x(n,b)+1)}(t):e===y?function(t,e){for(t.i++,e={};t.val[t.i]!==b;)e[L(t)]=n(t);return t.i++,e}(t):e===p?L(t):m(t)}({i:0,val:new Uint8Array(n),l:n.byteLength})}}});