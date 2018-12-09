swi = 0;
window.onscroll = function()
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
    var skillposy = document.getElementById('skill').offsetTop;
    var galleryposy = document.getElementById('gallery').offsetTop;
    if(y>galleryposy+50)
    {
        if(swi <= 0)
        {
            name = 'block';
            for(var id = 0;id >= 0;id++)
            {
                bid = name + id;
                if(document.getElementById(bid))
                {
                    document.getElementById(bid).className = 'block';
                }
                else
                {
                    swi = 1;
                    break;
                }
            }
        }
    }
    if(y>skillposy)
    {
        document.getElementById('htmlbar').className = "bar-right";
        document.getElementById('cssbar').className = "bar-right";
        document.getElementById('jsbar').className = "bar-right";
    }
    if(y>=50)
    {
        if(document.getElementById("nav")){document.getElementById("nav").className = "nav-show";}
        if(document.getElementById("start")){document.getElementById("start").className = "start-hide";}
        if(document.getElementById("bgcover")){document.getElementById("bgcover").className = "backgroundcover-show";}
        //id输入替换nav
    }
    else
    {
        if(document.getElementById("nav")){document.getElementById("nav").className = "nav-hide";}
        if(document.getElementById("start")){document.getElementById("start").className = "start-show";}
        if(document.getElementById("bgcover")){document.getElementById("bgcover").className = "backgroundcover-hide";}
        //id输入替换nav
    }
}