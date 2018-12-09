name = 'block';
for(var id = 0;id >= 0;id++)
{
    bid = name + id;
    alert(bid);
    if(document.getElementById(bid))
    {
        document.getElementById(bid).className = 'block';
    }
    else
    {
        break;
    }
}