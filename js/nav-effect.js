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
