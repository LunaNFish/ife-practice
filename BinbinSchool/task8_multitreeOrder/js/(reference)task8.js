/**
 * Created by Lenovo on 2017/3/13.
 */
var $ = function (id) {
    return document.getElementById(id);
}
var $$ = function(classname){
	return document.getElementsByClassName(classname);
}
var root = $("root");
var child = [];
var clearInter;
var childList = root.childNodes;

(function () {
    for (var i=0;i<childList.length;i++){
        if (childList[i].nodeType != 3){
            child.push(childList[i]);
        }
    }
})()
/*
 改变背景颜色
 */
function changeColor(divList) {
	
    var i=0; //控制颜色
    clearInter = setInterval(function () {
        if (i < divList.length){
            if (i>0){
                divList[i-1].style.backgroundColor = "white";
            }
            divList[i++].style.backgroundColor = "blue";
        }else {
            clearInterval(clearInter);
            if (i >=child.length - 1){
                divList[i-1].style.backgroundColor = "white";
            }

        }

    },800);
}


//查询方法
function changeGetBC(divList,nodeText) {
    var i=0; //控制颜色
    clearInter = setInterval(function () {
        if (i < divList.length){
            if (i>0){
                divList[i-1].style.backgroundColor = "white";
            }
            // alert(nodeText[i]);
            // alert(nodeText[i].length)
            //由于nodeText[i]前后都有空格，所以要把空格替换掉
            if (nodeText[i].replace(/(^\s*)|(\s*$)/g,"") == $("neirong").value){
                divList[i].style.backgroundColor = "red";
                clearInterval(clearInter);
                divList = [];
                nodeText = [];
            }
            divList[i++].style.backgroundColor = "blue";
        }
        else if (i == divList.length ){
            divList[i-1].style.backgroundColor = "white";
            alert("找不到");
            i = divList.length+1;  //退出if 语句
        }
    },100);

}


//深度查询操作
$("query").onclick = function () {
    var divList = [];
    var nodeText = [];
    divList.push(root);
    nodeText.push(root.firstChild.nodeValue);
    pre_traversal(child,divList,nodeText);
    changeGetBC(divList,nodeText);
}

//广度查询
$("breadquery").onclick = function () {
    var divList = [];
    var nodeText = [];
    divList.push(root);
    nodeText.push(root.firstChild.nodeValue);
    breadOrder(child,divList,nodeText);
    changeGetBC(divList,nodeText);
}


/*
 深度优先遍历
 */
function pre_traversal(child,divList,nodeText) {
    for (var i=0;i<child.length;i++){
        divList.push(child[i]);
        nodeText.push(child[i].firstChild.nodeValue);
        pre_traversal(child[i].children,divList,nodeText);
    }
}

/*
广度优先遍历
 */
function breadOrder(child,divList,nodeText) {
    for (var i=0;i<child.length;i++){
        divList.push(child[i]);
        nodeText.push(child[i].firstChild.nodeValue);
    }
    for (var i=0;i<child.length;i++)
    {
        breadOrder(child[i].children,divList,nodeText);
    }
}

$$(".node").click = function (){
	this.style.backgroundColor = "red";
}
