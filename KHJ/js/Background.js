var num = -1;
BackgroundChange();
function BackgroundChange()
{
    num++;
    if(num == 4)
    {
        num = 0;
    }
    document.getElementById("bg").className= "background-black";
    var t=setTimeout("Settimer()",500);
}

function Settimer()
{
    document.getElementById("bg").className= "background";
    document.getElementById("bg").style.background = 'url("../img/Background' + num + '.jpg") no-repeat center';
    document.getElementById("bg").style.backgroundSize = 'cover';
    var t=setTimeout("BackgroundChange()",5000);
}