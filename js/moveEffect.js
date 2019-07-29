var $or = true;

function Pagemove(ID)
{
    if($or == true)
    {
        actualTop = document.getElementById(ID).offsetTop;
        current = document.getElementById(ID).offsetParent;
    
        while (current !== null)
        {
            actualTop += current.offsetTop;
            current = current.offsetParent;
        }
        i = actualTop;
        var y;
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


        $or = false
        $velocity = 1.5;//初速度，单位为像素/10毫秒
        $af = Math.abs(i-y)/1080*10.5;//加速度系数
        navHeight = 60;//导航栏高度
        /*↑可设置变量*/
        i = i - navHeight;
        $x=0;

        $timer = setInterval(function(){
            var z;
            if(window.pageYOffset)
            {
                z = window.pageYOffset;    
            } 
            else if(document.documentElement && document.documentElement.scrollTop) 
            {  
                z = document.documentElement.scrollTop;    
            }
            else if(document.body)
            {
                z = document.body.scrollTop;    
            }
            if(y<=i)
            {
                if(z<=i)
                {
                    if(z<=(i+y)/2)
                    {
                        $x = Math.abs(180/(i-y)*(z-y)+1);
                    }
                    else
                    {
                        $x = Math.abs(180/(i-y)*(z-y+1));
                    }
                    speed = Math.sin(2*Math.PI/360*$x)
                    target = z + $af*speed + $velocity;
                    window.scrollTo(0,target)
                }
                else
                {
                    clearInterval($timer);
                    $or = true;
                }
            }
            else
            {
                if(i<z)
                {
                    if(z<(i+y)/2)
                    {
                        $x = Math.abs(180/(i-y)*(z-y+1));
                    }
                    else
                    {
                        $x = Math.abs(180/(i-y)*(z-y+1));
                    }
                    speed = Math.sin(2*Math.PI/360*$x)
                    target = z - $af*speed - $velocity;
                    window.scrollTo(0,target)
                }
                else
                {
                    clearInterval($timer);
                    $or = true;
                }
            }
        },5)
    }
}