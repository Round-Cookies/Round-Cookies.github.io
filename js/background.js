function background(n)
{
    var randomnum = Math.random();
    var randomnum = Math.ceil(n* randomnum);
    bg = document.getElementById("bg");
    bg.setAttribute("style","background: url(../BlogV2.0/img/Pic" + randomnum+ ".png) no-repeat center;background-size: cover;animation: fade-out 0.7s ease-out;");
}

window.onload = function()
{
    background(3);
}