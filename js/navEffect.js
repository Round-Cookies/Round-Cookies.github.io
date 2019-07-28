window.onscroll = function()
{
    //获得当前高度及总共高度
    var scrollY;
    var lengthY = document.body.scrollHeight;
    if(window.pageYOffset) 
    {   
        scrollY = window.pageYOffset;    
    } else if(document.documentElement && document.documentElement.scrollTop) 
    {   
        scrollY = document.documentElement.scrollTop;     
    } else if(document.body) 
    {  
        scrollY = document.body.scrollTop;    
    } 

    //调整背景高度
    bgHeight = 10 - scrollY/lengthY * 300;
    if(bgHeight<=0){bgHeight = 0;}
    if(document.getElementById("bg")){document.getElementById("bg").setAttribute("style","top:" + bgHeight + "%");}

    //检测高度并更改class
    if(scrollY>=300)
    {
        if(document.getElementById("nav")){document.getElementById("nav").className = "nav-dark";}
        if(document.getElementById("bgcover")){document.getElementById("bgcover").className = "backgroundcover-show";}
    }
    else
    {
        if(document.getElementById("nav")){document.getElementById("nav").className = "nav-bright";}
        if(document.getElementById("bgcover")){document.getElementById("bgcover").className = "backgroundcover-hide";}
    }
}

function slide()
{
    document.getElementById("sidebar").className="side-bar-show";
    document.getElementById("cover").style.display="block";
}

function clearslide()
{
    document.getElementById("sidebar").className="side-bar-hide";
    document.getElementById("cover").style.display="none";
}

/*var click = 1
function mainMove()
{
    click = -click;
    if(click>0)
    {
        document.getElementById("start").setAttribute("style","margin-bottom: 58.2vh;");
    }
    else
    {
        document.getElementById("start").setAttribute("style","margin-bottom: 12.1924vh;");
    }
}
var exclick = 1
exhibitionMove()
{
    {
        click = -click;
        if(click>0)
        {
            document.getElementById("start").setAttribute("style","margin-bottom: 58.2vh;");
        }
        else
        {
            document.getElementById("start").setAttribute("style","margin-bottom: 12.1924vh;");
        }
    }
}*/