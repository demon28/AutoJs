//app.launchApp("抖音短视频"); 打开APP
auto.waitFor();

//youngWin()
Huadong(5);

//PingLun("123")
//Guanzhu();
//Dianzan();

/*公共参数开始*/

//分辨率
var Screen=1080*1920 ;   




/*公共参数结束*/

    
function Huadong(count)
{
    var i = 0;

    while (i < count) {
        i = i + 1;
    
        toast("执行第" + i + "次");

        var WidthOne = random(300, 800);
        var HeightOne = random(1600, 1800);
        var WidthTwo = random(300, 800);
        var HeightTwo = random(500, 700);
        var timeGo = random(250, 600);

        swipe(WidthOne, HeightOne, WidthTwo, HeightTwo, timeGo);
        var timeNext = random(2000, 18000); //等待随机数
        sleep(timeNext);
    
    }
}



function PingLun(msg){
    toast("开始评论");
    sleep(1000);
   var PointX= random(950, 1000);
   var PointY= random(1110, 1130);


   click(PointX,PointY);   //弹出评论框

   sleep(2000);
   click(117,1826);   //弹出评论框
   sleep(2000);
   id("y6").findOne().setText(msg);  //设置内容
   sleep(2000);
   id("yl").findOne().click();        //发送内容
   sleep(1000);
   toast("结束评论");
  
}

function Dianzan(){
    toast("开始点赞");
    sleep(1000);
   var PointX= random(950, 1000);
   var PointY= random(880, 915);

   click(PointX,PointY);
   sleep(1000);
   toast("点赞结束");
}

function Guanzhu(){


    toast("开始关注");
    sleep(1000);
   
    //var PointX= random(970, 1000);
   //var PointY= random(746, 766);
   // click(PointX,PointY);
   
   var FButton=id("a95").findOne().click();

  
   sleep(1000);
   toast("结束关注");
  
}

function Sixin(msg,fx,fy){


}
function youngWin() {
    if (youngWin = text("我知道了").exists()) {
        console.log("点击了我知道了(青少年窗口)");
        youngWin.click();
    };
}

toast("执行结束");


