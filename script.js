$(function(){
    var t=0;
    function slide(){
        if(t<2){
            t++;
        }
        else{
            t=0;
        }
    
    $(".slide ul").animate({top:t*300*(-1)+"px"},1000)
    }
    setInterval(slide,2000)

    $(".tabmenu li").click(function(){
        $('.tabmenu li').removeClass('on')
        $(this).addClass('on')

        var i=$(this).index();
        console.log(i);

        $(".tabcon").eq(i).show();

        return false;
    })

    $(".pp").click(function(){
        $(".popup").show()
    })


    $("nav>ul<li").mouseenter(function(){
        $(".sub").stop().slideDown()
    })

    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp()
    })
}) 