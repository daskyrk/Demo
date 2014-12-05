/**
 * Created by 骏 on 2014/11/17.
 */


window.onload = function () {
    //禁止图片被选中
    document.onselectstart = new Function('event.returnValue = false;');
    $("#main").draggable({containment: 'parent', drag: setChoice});
    var mainDiv = document.getElementById("main");
    var leftDiv = document.getElementById("left");
    var rightDiv = document.getElementById("right");
    var topDiv = document.getElementById("top");
    var bottomDiv = document.getElementById("bottom");
    var leftTopDiv = document.getElementById("left-top");
    var rightTopDiv = document.getElementById("right-top");
    var leftBottomDiv = document.getElementById("left-bottom");
    var rightBottomDiv = document.getElementById("right-bottom");
    var ifKeyDown = false;
    var contact = "";//表示被按下的触点
    rightDiv.onmousedown = function (e) {
        e.stopPropagation();
        ifKeyDown = true;
        contact = "right";
    }
    leftDiv.onmousedown = function (e) {
        e.stopPropagation();
        ifKeyDown = true;
        contact = "left";
    }
    topDiv.onmousedown = function (e) {
        e.stopPropagation();
        ifKeyDown = true;
        contact = "top";
    }
    bottomDiv.onmousedown = function (e) {
        e.stopPropagation();
        ifKeyDown = true;
        contact = "bottom";
    }
    leftTopDiv.onmousedown = function (e) {
        e.stopPropagation();
        ifKeyDown = true;
        contact = "left-up";
    }
    rightTopDiv.onmousedown = function (e) {
        e.stopPropagation();
        ifKeyDown = true;
        contact = "right-up";
    }
    leftBottomDiv.onmousedown = function (e) {
        e.stopPropagation();
        ifKeyDown = true;
        contact = "left-bottom";
    }
    rightBottomDiv.onmousedown = function (e) {
        e.stopPropagation();
        ifKeyDown = true;
        contact = "right-bottom";
    }
    window.onmouseup = function (e) {
        e.stopPropagation();
        ifKeyDown = false;
    }
    window.onmousemove = function (e) {
        if (ifKeyDown) {
            switch (contact) {
                case "right":
                    rightMove(e);
                    break;
                case "top":
                    topMove(e);
                    break;
                case "left":
                    leftMove(e);
                    break;
                case "bottom":
                    bottomMove(e);
                    break;
                case "left-up":
                    leftMove(e);
                    topMove(e);
                    break;
                case "right-up":
                    rightMove(e);
                    topMove(e);
                    break;
                case "left-bottom":
                    leftMove(e);
                    bottomMove(e);
                    break;
                case "right-bottom":
                    rightMove(e);
                    bottomMove(e);
                    break;
            }
        }
        setChoice();
        setPreview();
    }
    function rightMove(e) {
        var x = e.clientX;//鼠标在浏览器中的横坐标
        var widthBefore = mainDiv.offsetWidth - 2;//选取框变化前的宽度，减去2个像素宽度
        var addWidth = x - getPosition(mainDiv).left - widthBefore;//鼠标移动后选取框增加的宽度
        mainDiv.style.width = addWidth + widthBefore + "px";
    }

    function topMove(e) {
        var y = e.clientY;
        var heightBefore = mainDiv.offsetHeight - 2;
        var addHeight = getPosition(mainDiv).top - y;//鼠标移动后选取框增加的高度
        mainDiv.style.height = addHeight + heightBefore + "px";//鼠标移动后的高度
        mainDiv.style.top = mainDiv.offsetTop - addHeight + "px";//鼠标移动后的上边框位置
    }

    function leftMove(e) {
        var x = e.clientX;//鼠标在浏览器中的横坐标
        var widthBefore = mainDiv.offsetWidth - 2;//选取框变化前的宽度，减去2个像素宽度
        var addWidth = getPosition(mainDiv).left - x;//鼠标移动后选取框增加的宽度
        mainDiv.style.width = addWidth + widthBefore + "px";
        mainDiv.style.left = mainDiv.offsetLeft - addWidth + "px";
    }

    function bottomMove(e) {
        var y = e.clientY;
        var heightBefore = mainDiv.offsetHeight - 2;
        var addHeight = y - getPosition(mainDiv).top - heightBefore;//鼠标移动后选取框增加的高度
        mainDiv.style.height = addHeight + heightBefore + "px";//鼠标移动后的高度
    }

    //设置选取区域高亮可见
    function setChoice() {
        var top = mainDiv.offsetTop;
        var right = mainDiv.offsetLeft + mainDiv.offsetWidth;
        var left = mainDiv.offsetLeft;
        var bottom = mainDiv.offsetTop + mainDiv.offsetHeight;
        var img2 = document.getElementById("img2");
        img2.style.clip = "rect(" + top + "px," + right + "px," + bottom + "px," + left + "px)";
    }

    //预览函数
    function setPreview() {
        var top = mainDiv.offsetTop;
        var right = mainDiv.offsetLeft + mainDiv.offsetWidth;
        var left = mainDiv.offsetLeft;
        var bottom = mainDiv.offsetTop + mainDiv.offsetHeight;
        var img3 = document.getElementById("img3");
        img3.style.top = -top + "px";
        img3.style.left = -left +"px";
        img3.style.clip = "rect(" + top + "px," + right + "px," + bottom + "px," + left + "px)";
    }
}

//获取元素相对于屏幕左边的距离，利用offsetLeft
function getPosition(node) {
    var left = node.offsetLeft;
    var top = node.offsetTop;
    var parent = node.offsetParent;
    while (parent != null) {
        left += parent.offsetLeft;
        top += parent.offsetTop;
        parent = parent.offsetParent;
    }
    return {"left": left, "top": top};
}
