var top;
var num=1;
var t;

window.onscroll = function awdawd() 
{ 
    var y; 
    if(window.pageYOffset) 
    {    // 除了IE    
        y = window.pageYOffset;    
    } else if(document.documentElement && document.documentElement.scrollTop) 
    {    // IE6   
        y = document.documentElement.scrollTop;     
    } else if(document.body) 
    {    // 其他IE  
        y = document.body.scrollTop;
    } 
    if(y/document.body.clientHeight>=0.1)
    {
        if(document.getElementById("bgcover")){document.getElementById("bgcover").className = "backgroundcover-dim";}
        if(document.getElementById("start")){document.getElementById("start").className = "start-hide";}
        //id输入替换nav
    }
    else
    {
        if(document.getElementById("bgcover")){document.getElementById("bgcover").className = "backgroundcover-light";}
        if(document.getElementById("start")){document.getElementById("start").className = "start-show";}
        //id输入替换nav
    }
    for(num=1;document.getElementById(num);num++)
    {
        if(document.getElementById(num).getBoundingClientRect().top<=document.body.clientHeight*2/3&&document.getElementById(num).getBoundingClientRect().top>=document.body.clientHeight*1/2)
        {
            if(num==14||num==18)
            {
                document.getElementById(num).setAttribute('style','animation: jackInTheBox 1s ease-out;');
            }
            else if(num==16)
            {
                document.getElementById(num).setAttribute('style','animation: rollIn 1s ease-out;');
            }
            else if(num==24||num==26||num==28)
            {
                document.getElementById(num).setAttribute('style','animation: jackInTheBox 1s ease-out;');
            }
            else if(num==25||num==27||num==29)
            {
                document.getElementById(num).setAttribute('style','animation: bounceInUp 1s ease-out;');
            }
            else
            {
                document.getElementById(num).setAttribute('style','animation: fadeInUp 1s ease-out;');
            }
        }
    }
    num=0;
}
