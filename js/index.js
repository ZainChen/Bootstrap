var gh = 0;
function Refresh() {
  var w = document.body.clientWidth;  //当前窗口的宽度
  if(w < 750) {
    haXS();
  } else {
    haSM();
  }
  var gtop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; //滚动条距离顶部的距离
  // console.log(gtop);
  gh = gtop;
}
function pcORphone() {
  var w = document.body.clientWidth;  //当前窗口的宽度
  console.log(w)
  if(w < 750) {
    haXS();
  } else {
    haSM();
  }
}
function haSM() {
  for(var i = 1; i <= 6; i++) {
    var ha = document.getElementById("header-a"+i);
    ha.style.display = "inline";
    ha.style.width = "";
    ha.style.margin = "0px";
    ha.style.marginTop = "0";
    ha.style.paddingTop = "9px";
    ha.style.paddingBottom = "9px";
  }
  var hm = document.getElementById("czy-header-menu");
  hm.style.marginTop = "48px";
  hm.style.marginBottom = "30px";
  for(var i = 1; i <= 8; i++) {
    var mli = document.getElementById("czy-menu-li"+i);
    mli.style.display = "inline-block";
  }
  var cm = document.getElementById("czy-menu");
  cm.style.textAlign = "center";
}
function haXS() {
  for(var i = 1; i <= 6; i++) {
    var ha = document.getElementById("header-a"+i);
    ha.style.display = "block";
    ha.style.width = "50%";
    ha.style.height = "36px";
    ha.style.lineHeight = "17px";
    ha.style.margin = "auto";
    ha.style.marginTop = "10px";
  }
  var hm = document.getElementById("czy-header-menu");
  hm.style.marginTop = "50px";
  hm.style.marginBottom = "22px";
  for(var i = 1; i <= 8; i++) {
    var mli = document.getElementById("czy-menu-li"+i);
    mli.style.display = "block";
  }
  var cm = document.getElementById("czy-menu");
  cm.style.textAlign = "left";
}
//===返回顶部按钮功能实现==============
var re = document.getElementById("czy-return");
function Roll() {
  var gtop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; //滚动条距离顶部的距离
  // console.log(gtop);
  gh = gtop;
  if(gtop >= 50) {
    re.style.display = "block";
  } else {
    re.style.display = "none";
  }
}
var va = 1;
function ReturnTop() {
  window.scrollTo(0, gh);  //滚动条置顶
  var time1 = setTimeout(ReturnTop, 10);
  if(gh <= 0) {
    clearTimeout(time1);  //清除延迟消息触发事件
  }
  va++;  //加速度,返回顶部的速度越来越快
  gh -= (50+va);  //滚动条距离最上方距离(可控制滚动速度)
}
re.onclick = function() {  //单击返回顶部按钮事件
  ReturnTop();  //滚动条返回到顶部函数(形成滚动动画)
}

window.onload = Refresh;  //页面刷新执行Refresh()函数
window.onresize = pcORphone;  //窗口大小改变触发事件
window.onscroll = Roll;  //窗口滚动条滚动事件