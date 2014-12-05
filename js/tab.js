/**
 * Created by 骏 on 2014/11/6.
 */
function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : id;
}
window.onload = function () {
    //获取鼠标滑过或点击的标签和要切换的内容
    var titles = $("notice-tit").getElementsByTagName("li"), divs = $("notice-con").getElementsByTagName("div");
//    alert(titles.length);
    if (titles.length != divs.length)return;
    // 遍历titles下所有的li
    for (var i = 0; i < titles.length; i++) {
        titles[i].id = i;
        titles[i].onmouseover=function(){
            for(var j=0;j<titles.length;j++){
                titles[j].className = "";
                divs[j].style.display = "none";
            }
            this.className = "select";
            divs[this.id].style.display = "block";

        }
    }
}