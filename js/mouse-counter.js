setInterval(function()
{
    if(window.pageYOffset)
    {
        y = window.pageYOffset;    
    } 
    else if(document.documentElement && document.documentElement.scrollTop) 
    {  
        y = document.documentElement.scrollTop;    
    }
    else if(document.body)
    {
        y = document.body.scrollTop;    
    }
    if(y>600)
    {
        document.getElementById("intro").className="introduction-show";
    }
},50)