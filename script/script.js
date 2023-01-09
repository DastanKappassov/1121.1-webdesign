$(function(){
    // NAV
    $('.nav>li').mouseenter(function(){
        $(this).children('.subnav').stop(true).slideDown(200)
    }).mouseleave(function(){
        $(this).children('.subnav').stop(true).slideUp(200)
    })

    // SLIDER
    setInterval(function(){
        $('.slides').animate({'top':'-100%'}, function(){
            $('.slide:first').appendTo('.slides')
            $('.slides').css({'top':'0%'})
        })
    }, 7000)

    // TABS
    $('.gallery>a>h3').click(function(){
        $(this).addClass('active')
        $('.notice>a>h3').removeClass('active')
        $('.notice>ul').stop(true).fadeOut(100)
        $('.gallery>ul').stop(true).fadeIn(100)
    })
    $('.notice>a>h3').click(function(){
        $(this).addClass('active')
        $('.gallery>a>h3').removeClass('active')
        $('.gallery>ul').stop(true).fadeOut(100)
        $('.notice>ul').stop(true).fadeIn(100)
    })

    // POPUP
    $('.notice>ul>li:first').click(function(){
        $('#popup').stop(true).fadeIn(200)
    })
    $('.btn').click(function(){
        $('#popup').stop(true).fadeOut(200)
    })
})