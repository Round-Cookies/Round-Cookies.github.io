function waves(i,j)
{
    var e = j || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    var add = 'card' + i;
    var address = document.getElementById(add);
    var minus = address.getBoundingClientRect();
    var posx = x - minus.left - 100;
    var posy = y - minus.top - scrollY - 100;
    var node = document.createElement("div");
    node.setAttribute("class","wave");
    node.setAttribute("style",'top:' + posy + ';left:' + posx + ';animation: wave 0.6s ease-out;-moz-animation: wave 0.6s ease-out;-webkit-animation: wave 0.6s ease-out;-o-animation: wave 0.6s ease-out');
    address.appendChild(node);
    setTimeout(
        function()
        {
            var last = document.getElementById(add).firstChild;
            address.removeChild(last);
        }
    ,700)
}