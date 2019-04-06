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
    if(num==0)
    {
        addr="https://i.loli.net/2019/04/06/5ca850c948541.jpg";
    }
    if(num==1)
    {
        addr="https://i.loli.net/2019/04/06/5ca850c956e4b.jpg";
    }
    if(num==2)
    {
        addr="https://i.loli.net/2019/04/06/5ca850c95329a.jpg";
    }
    if(num==3)
    {
        addr="https://i.loli.net/2019/04/06/5ca850c95b194.jpg";
    }
    document.getElementById("bg").style.background = 'url('+ addr +') no-repeat center';
    document.getElementById("bg").style.backgroundSize = 'cover';
    var t=setTimeout("BackgroundChange()",5000);
}