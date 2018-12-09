reset();

function reset(category){
    textshow([["36","本测试主要测试了插入图片功能，文本插入数据库功能与PHP，AJAX，JS配合完成的功能。\r\n<br>首先先测试一下图片插入好了- -。\r\n<img src=\"https://ooo.0o0.ooo/2017/04/18/58f6335057fd1.jpg\" alt=\"1.jpg\" title=\"1.jpg\" />\r\n之前在图片插入上出现了很多的bug，经过检查发现是我用奇特的方法将PHP数组转成JS数组时将URL的一部分替换了。。。\r\n<br>【这是一个重大的错误！恩。】\r\n<br>那么在接下来我将继续测试一些相关功能，会添加时间记录以及留言功能，希望能够顺利完成吧。\r\n","对于自创博客“系统”的一个测试",null,"2017-03-18 23:42:23","1"],["45","时隔已久，现在再次开始修改这个项目，现在已经将文本的体验和自适应，居中等问题解决，添加了一些高级选项和按钮，将来的任务还有很多要做呢......","10月日志","日志的一部分罢了","2017-10-27 23:50:23","1"],["46","转眼就到了11月，关于Pagemove[一个已经应用的可以支持自动页面上下平滑滚动的js]的js也已经完善很多了，目前可以在按钮里指定数值来进行移动，以后会继续改成更加方便的id搜索式。逻辑方面还是要考虑一下。","11月日志","只是日志的另一部分罢了","2017-11-04 17:35:27","1"],["47","上一个月的具体成果应该就是大幅度的完善和改进了主页的用户体验和设计，也自行研发出了一个由Google MaterialDesign启发而来的一个涟漪特效，今后还需要更加优化一下js的工程化。对于主页的一些设计改进也是比较用心的，添加了技能树，改进了个人介绍和首页等等。等到彻底完成这个博客功能的时候我就要开始学习用JS和引擎做一些本地的小应用玩玩。希望能够实现。","12月日志","每月日志","2017-12-15 22:12:33","1"]]);
}

function textshow(string)
{
    $string = string;
    if(string!="")
    {
        line = string.length;
        $preline = string.length;
        var contain = "";
        var datecontain = "";
        contain = contain + '<p class="header">TEXT</p>' + '<div class="main-infoend"></div>';
        while(line>0)
        {
            line--
            var texttemp = string[line][1]
            var titletemp = string[line][2];
            var discription = string[line][3];
            var datetemp = string[line][4];
            var category = string[line][5];
            var user = 'Round_Cookies';
            if(discription == null)
            {
                discription = "";
            }
            if(category==1)
            {
                var categoryc = '工作日志';
            }
            else if(category==2)
            {
                var categoryc = '闲聊日常';
            }
            contain = contain + '<div class="main-infoline" id="time' + line + '">' 
                              + '<div class="infoseperateline"></div>'
                              + '<p class="infosection">Date</p>'
                              + '<p class="infoline">' + datetemp + '</p>' 
                              + '<div class="infoseperateline"></div>'
                              + '<p class="infosection">Writer</p>'
                              + '<p class="infoline">' + user + '</p>'
                              + '<div class="infoseperateline"></div>'
                              + '<p class="infosection">Category</p>'
                              + '<p class="infoline"  onclick="reset(' + category + ')">' + categoryc + '</p>'
                              + '<div class="infoseperateline"></div>'
                              + '</div>'
                              + '<div id="text'+line+'" class="dynamic-block">'
                              + '<article>'
                              + '<h1>' + titletemp + '</h1>'
                              + '<h5>' + discription + '</h5>'
                              + '<div>' + texttemp +'</div>'
                              + '<div class="textfoot">'
                              + '<img src="img/头像.png" alt="头像">'
                              + '<h2>' + datetemp + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + categoryc + '</h2>'
                              + '</div>'
                              + '</article>'
                              + '</div>';
        }
        contain = contain + '<p class="footer">--End of the Blog--</p>'
        document.getElementById("container").innerHTML = contain;
    }   
    else
    {
        document.getElementById("container").innerHTML='<div class="textcreate"><h2>空空如也呦~</h2></div>';
    }
}
