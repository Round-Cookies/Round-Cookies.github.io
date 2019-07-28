var i = 1;
while(i<61)
{
    var num = Math.floor((Math.random()*10)-1)+5;
    if(num==10)
    {
        num='a';
    }
    if(num==11)
    {
        num='b';
    }
    if(num==12)
    {
        num='c';
    }
    if(num==13)
    {
        num='d';
    }
    if(num==14)
    {
        num='e';
    }
    document.getElementById(i).setAttribute("style","color: #e"+num+"e"+num+"e"+num+"");
    i++;
}

