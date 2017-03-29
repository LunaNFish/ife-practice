		var $ = function (id){
				return document.getElementById(id);
			}
			
			var head = $("head");
			var body = $("body");
			var box = $("box");
			
			function direction(){
				var headwidth = head.style.width;
				var headorder= head.style.order;
				switch(headwidth){
					case "50px":
						if(headorder=="1"){
							return 1; //1代表正面，逆时针方向分别代表1234.
						}else{
							return 3;
						}
					case "15px":
						if(headorder=="1"){
							return 2;
						}else if(headorder=="2"){
							return 4;
						}else{
							alert("eror");
						}
				}
			}
			
			function turn(txt,num){
				var headTpDir = "width: 50px;height: 15px; ";
				var bodyTpDir = "width: 50px;height: 35px; ";
				var headLftDir = "width: 15px; height: 50px; ";
				var bodyLftDir = "width: 35px; height: 50px; ";
				var headRgtDir = "width: 15px;height: 50px; "
				var bodyRgtDir = "width: 35px;height: 50px; ";
				var headBckDir = "width: 50px;height: 15px; ";
				var bodyBckDir = "width: 50px;height: 35px; ";
 				switch(num){
					case 1:
						if(txt == "TUN LEF"){
							head.style.cssText = headLftDir;
							head.style.order = "1";
							body.style.cssText = bodyLftDir;
							body.style.order = "2";
							box.style.flexDirection="row";
						}else if(txt == "TUN RIG"){
							head.style.cssText = headRgtDir;
							head.style.order = "2";
							body.style.cssText = bodyRgtDir;
							body.style.order = "1";
							box.style.flexDirection="row";
						}else if(txt == "TUN BAC"){
							head.style.cssText = headBckDir;
							head.style.order="2";
							body.style.cssText = bodyBckDir;
							body.style.order = "1";
							box.style.flexDirection="column";
						}else if(txt == "GO"){
							goahead= box.style.top.replace(/px/,"");
							goahead = parseInt(goahead);
							goahead -=50;
							box.style.top = goahead + "px";
						}
						break;
					case 2:
						if(txt == "TUN LEF"){
							head.style.cssText = headBckDir;
							head.style.order="2";
							body.style.cssText = bodyBckDir;
							body.style.order = "1";
							box.style.flexDirection="column";
						}else if(txt == "TUN RIG"){
							head.style.cssText = headTpDir;
							head.style.order = "1";
							body.style.cssText = bodyTpDir;
							body.style.order = "2";
							box.style.flexDirection = "column";
						}else if(txt == "TUN BAC"){
							head.style.cssText = headRgtDir;
							head.style.order = "2";
							body.style.cssText = bodyRgtDir;
							body.style.order = "1";
							box.style.flexDirection="row";
						}else if(txt == "GO"){
							goahead= box.style.left.replace(/px/,"");
							goahead = parseInt(goahead);
							goahead -=50;
							box.style.left = goahead + "px";
						}else{
							alert("ERROR");
						}
						break;
					case 3:
						if(txt == "TUN LEF"){
						head.style.cssText = headLftDir;
							head.style.order = "1";
							body.style.cssText = bodyLftDir;
							body.style.order = "2";
							box.style.flexDirection="row";
						}else if(txt == "TUN RIG"){
							head.style.cssText = headRgtDir;
							head.style.order = "2";
							body.style.cssText = bodyRgtDir;
							body.style.order = "1";
							box.style.flexDirection="column";
						}else if(txt == "TUN BAC"){
							head.style.cssText = headTpDir;
							head.style.order = "1";
							body.style.cssText = bodyTpDir;
							body.style.order = "2";
							box.style.flexDirection = "column";
						}else if(txt == "GO"){
							goahead= box.style.top.replace(/px/,"");
							goahead = parseInt(goahead);
							goahead +=50;
							box.style.top = goahead + "px";
						}else{
							alert("ERROR");
						}
						break;
					case 4:
						if(txt == "TUN LEF"){
							head.style.cssText = headTpDir;
							head.style.order = "1";
							body.style.cssText = bodyTpDir;
							body.style.order = "2";
							box.style.flexDirection = "column";

						}else if(txt == "TUN RIG"){
							head.style.cssText = headBckDir;
							head.style.order="2";
							body.style.cssText = bodyBckDir;
							body.style.order = "1";
							box.style.flexDirection="column";
						
						}else if(txt == "TUN BAC"){
							head.style.cssText = headLftDir;
							head.style.order = "1";
							body.style.cssText = bodyLftDir;
							body.style.order = "2";
							box.style.flexDirection="row";
						}else if(txt == "GO"){
							goahead= box.style.left.replace(/px/,"");
							goahead = parseInt(goahead);
							goahead +=50;
							box.style.left = goahead + "px";
						}else{
							alert("ERROR");
						}
						break;
				}
			}
			
			$("go").onclick = function (){
				var dir;
				var txt = $("command").value;
				dir = direction();
				turn(txt,dir);
			}