//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src;if(null!=b&&-1!=b.indexOf("index_hype_generated_script.js")){h=b.substr(0,b.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_530","HYPE_dtl_530",!0==(null!=a&&10>a||false==!0)?"HYPE-530.full.min.js":"HYPE-530.thin.min.js"),false==!0&&(a=a||l("HYPE_w_530","HYPE_wdtl_530","HYPE-530.waypoints.min.js")),a))return;
f=window.HYPE.documents;if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);for(var d=document.getElementsByTagName("div"),b=!1,a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\tmenu = hypeDocument.getElementById('menu');\n\tshipping = hypeDocument.getElementById('shipping');\n\t\n\tconsole.log(element)\n\tconsole.dir(event)\n\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\t\n\t\tvar menuDelta = 250;\n\t\tvar shippingDelta = 2775;\n\n\t\tif (scroll > menuDelta){\n\t\t\tmenu.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= menuDelta){\n\t\t\tmenu.classList.remove('sticky')\n\t\t}\n\t\t\n\t\tif (scroll > shippingDelta){\n\t\t\tshipping.classList.add('sticky')\n\t\t}\n\t\tif (scroll <= shippingDelta){\n\t\t\tshipping.classList.remove('sticky')\n\t\t}\n\t};\t\n}",identifier:"36"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\tel = hypeDocument.getElementById('menu2');\n\n\n\twindow.onscroll = function(){\n\t\tvar scroll = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop);\n\t\tvar delta = 500;\n\n\t\tif (scroll > delta){\n\t\t\tel.classList.add('sticky')\n\n\t\t}\n\t\tif (scroll <= delta){\n\t\t\tel.classList.remove('sticky')\n\n\t\t\n\t\t}\n\t};\t\n\n\t\n}",identifier:"39"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),
d[b[a].name]=function(){}}a=new HYPE_530(c,e,{"10":{p:1,n:"fixednav.png",g:"34",t:"@1x"},"2":{p:1,n:"Pasted-1.png",g:"10",t:"@1x"},"3":{p:1,n:"Pasted-2.png",g:"12",t:"@1x"},"11":{p:1,n:"Shipping.png",g:"37",t:"@1x"},"4":{p:1,n:"Pasted-3.png",g:"14",t:"@1x"},"5":{p:1,n:"Pasted-4.png",g:"16",t:"@1x"},"6":{p:1,n:"Pasted-5.png",g:"18",t:"@1x"},"7":{p:1,n:"BG.png",g:"21",t:"@1x"},"0":{n:"personaltrainer-final.mp4",g:"5",t:"video/mp4"},"8":{p:1,n:"modal.png",g:"23",t:"@1x"},"1":{p:1,n:"Pasted.png",g:"8",t:"@1x"},"9":{p:1,n:"modal-1.png",g:"31",t:"@1x"}},h,[],d,[{n:"Landing Page",o:"1",X:[0]}],[{o:"3",p:"600px",x:0,cA:false,Z:6970,Y:1440,c:"#FFFFFF",L:[],bY:1,d:1440,U:{},T:{"27":{i:"27",n:"Modal 1",z:0.14,b:[],a:[{f:"c",y:0,z:0.02,i:"cY",e:"0",s:"1",o:"51"},{f:"c",y:0,z:0.02,i:"cY",e:"0",s:"1",o:"53"},{f:"c",y:0.02,z:0.08,i:"e",e:0.80000000000000004,s:0,o:"53"},{f:"c",y:0.02,z:0.08,i:"e",e:1,s:0,o:"51"},{f:"c",y:0.02,z:0.12,i:"b",e:3957,s:3929,o:"51"},{y:0.02,i:"cY",s:"0",z:0,o:"53",f:"c"},{y:0.02,i:"cY",s:"0",z:0,o:"51",f:"c"},{y:0.1,i:"e",s:1,z:0,o:"51",f:"c"},{y:0.1,i:"e",s:0.80000000000000004,z:0,o:"53",f:"c"},{y:0.14,i:"b",s:3957,z:0,o:"51",f:"c"}],f:30},"30":{i:"30",n:"Modal 1.2",z:0.14,b:[],a:[{f:"c",y:0,z:0.02,i:"cY",e:"0",s:"1",o:"55"},{f:"c",y:0,z:0.02,i:"cY",e:"0",s:"1",o:"56"},{f:"c",y:0.02,z:0.12,i:"b",e:3957,s:3929,o:"55"},{f:"c",y:0.02,z:0.08,i:"e",e:1,s:0,o:"55"},{f:"c",y:0.02,z:0.08,i:"e",e:0.80000000000000004,s:0,o:"56"},{y:0.02,i:"cY",s:"0",z:0,o:"56",f:"c"},{y:0.02,i:"cY",s:"0",z:0,o:"55",f:"c"},{y:0.1,i:"e",s:1,z:0,o:"55",f:"c"},{y:0.1,i:"e",s:0.80000000000000004,z:0,o:"56",f:"c"},{y:0.14,i:"b",s:3957,z:0,o:"55",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:49.26,b:[],a:[{y:0,p:1,i:"Video Track",z:49.26,o:"41",f:"a"},{f:"c",y:0,z:1,i:"cR",e:1,s:1.25,o:"41"},{f:"c",y:0,z:1,i:"cQ",e:1,s:1.25,o:"41"},{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"41"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:4,h:"36"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:0.16,z:0.17,i:"e",e:1,s:0,o:"43"},{f:"c",y:0.19,z:0.12,i:"b",e:240,s:271,o:"44"},{f:"c",y:0.19,z:0.09,i:"e",e:1,s:0,o:"44"},{f:"c",y:0.25,z:0.09,i:"e",e:1,s:0,o:"45"},{f:"c",y:0.25,z:0.12,i:"b",e:279,s:310,o:"45"},{y:0.28,i:"e",s:1,z:0,o:"44",f:"c"},{f:"c",y:1,z:0.1,i:"e",e:1,s:0,o:"49"},{y:1,i:"cR",s:1,z:0,o:"41",f:"c"},{y:1,i:"e",s:1,z:0,o:"41",f:"c"},{y:1,i:"cQ",s:1,z:0,o:"41",f:"c"},{f:"c",y:1.01,z:0.09,i:"e",e:1,s:0,o:"46"},{f:"c",y:1.01,z:0.12,i:"b",e:470,s:501,o:"46"},{y:1.01,i:"b",s:240,z:0,o:"44",f:"c"},{y:1.03,i:"e",s:1,z:0,o:"43",f:"c"},{y:1.04,i:"e",s:1,z:0,o:"45",f:"c"},{y:1.07,i:"b",s:279,z:0,o:"45",f:"c"},{y:1.1,i:"e",s:1,z:0,o:"46",f:"c"},{y:1.1,i:"e",s:1,z:0,o:"49",f:"c"},{y:1.13,i:"b",s:470,z:0,o:"46",f:"c"}],f:30}},bZ:180,O:["55","51","54","52","56","53","59","58","57","48","47","49","46","45","44","43","41","42","50"],v:{"57":{w:"",h:"34",p:"no-repeat",x:"visible",i:"menu",q:"100% 100%",a:0,j:"absolute",b:-84,z:8,k:"div",c:1440,d:62.912621359223301,r:"inline"},"42":{x:"hidden",a:0,b:-12,j:"absolute",cY:"0",c:1440,k:"div",z:2,d:726,cQ:1,e:1,cR:1},"47":{h:"16",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"49",z:1,k:"div",c:58,d:58,r:"inline",e:1},"53":{c:1452,d:6936,I:"Solid",cY:"1",e:0,J:"Solid",r:"inline",K:"Solid",g:"#FFFFFF",L:"Solid",aP:"pointer",M:1,N:1,aI:10,aA:{a:[{b:"27",p:3,z:true,symbolOid:"2"}]},O:1,A:"#D8DDE4",x:"visible",aJ:10,j:"absolute",C:"#D8DDE4",z:11,k:"div",D:"#D8DDE4",aK:10,B:"#D8DDE4",P:1,a:0,aL:10,b:32},"58":{h:"37",p:"no-repeat",x:"visible",i:"shipping",q:"100% 100%",a:1287,j:"absolute",b:-242,c:142,k:"div",z:9,d:142,r:"inline"},"43":{h:"8",p:"no-repeat",x:"visible",a:649,q:"100% 100%",b:41,j:"absolute",r:"inline",c:141,k:"div",z:3,d:42,e:0},"48":{h:"18",p:"no-repeat",x:"visible",a:24,q:"100% 100%",b:19,j:"absolute",bF:"49",c:10,k:"div",z:2,d:19,r:"inline"},"54":{c:310,d:68,I:"None",r:"inline",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"30",p:3,z:false,symbolOid:"2"}]},B:"#D8DDE4",j:"absolute",k:"div",C:"#D8DDE4",z:14,O:0,D:"#D8DDE4",P:0,a:565,b:4532},"59":{h:"37",p:"no-repeat",x:"visible",a:1287,q:"100% 100%",b:-242,j:"absolute",r:"inline",c:142,k:"div",z:10,d:142},"50":{h:"21",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:-28,j:"absolute",r:"inline",z:1,k:"div",c:1440,d:7002,cQ:1,e:1,cR:1},"44":{h:"10",p:"no-repeat",x:"visible",a:132,q:"100% 100%",b:271,j:"absolute",r:"inline",c:216,k:"div",z:4,d:14,e:0},"49":{x:"visible",k:"div",c:58,d:58,z:7,e:0,a:691,j:"absolute",b:685},"55":{h:"31",p:"no-repeat",x:"visible",a:385,q:"100% 100%",b:4095,j:"absolute",cY:"1",aA:{a:[{b:"30",p:3,z:true,symbolOid:"2"}]},z:16,k:"div",d:578,c:672,r:"inline",e:0,aP:"pointer"},"45":{h:"12",p:"no-repeat",x:"visible",a:132,q:"100% 100%",b:310,j:"absolute",r:"inline",c:868,k:"div",z:5,d:156,e:0},"51":{h:"23",p:"no-repeat",x:"visible",a:384,q:"100% 100%",b:3957,j:"absolute",cY:"1",aA:{a:[{b:"27",p:3,z:true,symbolOid:"2"}]},z:15,k:"div",d:680,c:672,r:"inline",e:0,aP:"pointer"},"56":{c:1452,d:6936,I:"Solid",cY:"1",e:0,J:"Solid",r:"inline",K:"Solid",g:"#FFFFFF",L:"Solid",aP:"pointer",M:1,N:1,aI:10,aA:{a:[{b:"30",p:3,z:true,symbolOid:"2"}]},O:1,A:"#D8DDE4",x:"visible",aJ:10,j:"absolute",C:"#D8DDE4",z:12,k:"div",D:"#D8DDE4",aK:10,B:"#D8DDE4",P:1,a:0,aL:10,b:32},"41":{aR:true,x:"visible",bE:"5",a:0,b:-4,j:"absolute",bF:"42",z:1,aO:false,k:"video",d:822,c:1440,cQ:1.25,e:0,cR:1.25,aQ:true,aH:true},"52":{c:310,d:68,I:"None",r:"inline",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"27",p:3,z:false,symbolOid:"2"}]},B:"#D8DDE4",j:"absolute",k:"div",C:"#D8DDE4",z:13,O:0,D:"#D8DDE4",P:0,a:566,b:4244},"46":{h:"14",p:"no-repeat",x:"visible",a:132,q:"100% 100%",b:501,j:"absolute",r:"inline",c:312,k:"div",z:6,d:40,e:0}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
