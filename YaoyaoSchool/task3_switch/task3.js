var $ = function (id){
				document.getElementById(id);
			}
			var check = [];
			check = document.getElementsByClassName("checkbox");
			var content = [];
			content = document.getElementsByClassName("content");
			var j=0;
			 for(var i=0;i<check.length;i++)
			 {
			 	check[i].addEventListener("click",function(e){
			 		var target = e.target;
			 		if(target.id=="notinschool"){
			 			content[j].style.cssText = "display : none;"
			 			content[j+1].style.cssText = "display : block;"
					 }
			 		else{
			 			content[j].style.cssText = "display :  block;"
			 			content[j+1].style.cssText = "display : none;"
			 		}
			 	})
			 }