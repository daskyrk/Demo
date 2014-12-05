/**
 * Created by 骏 on 2014/11/6.
 */
function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : id;
}
window.onload = function () {
    var index = 0;
    //获取鼠标滑过或点击的标签和要切换的内容
    var titles = $("notice-tit").getElementsByTagName("li"), divs = $("notice-con").getElementsByTagName("div");
    if (titles.length != divs.length)return;
    // 遍历titles下所有的li
    var timer = null;
    timer = setInterval(auto, 2000);
    function auto() {
        index++;
        if (index >= titles.length) {
            index = 0;
        }
        changeTab(index);
    }

    for (var i = 0; i < titles.length; i++) {
        titles[i].id = i;
        titles[i].onmouseover = function () {
            clearInterval(timer);
            changeTab(this.id);
        }
        titles[i].onmouseout = function () {
            if(timer){
                clearInterval(timer);
                timer = null;
            }
            timer = setInterval(auto, 2000);
        }
    }
    function changeTab(curIndex) {
        for (var j = 0; j < titles.length; j++) {
            titles[j].className = "";
            divs[j].style.display = "none";
        }
        titles[curIndex].className = "select";
        divs[curIndex].style.display = "block";
        index = curIndex;
    }
}