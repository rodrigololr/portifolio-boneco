$(function(){
    $('.fa-navicon').click(function(){
        $('nav.celular').slideToggle()
    })
        
    $('nav.celular li').click(function(){
        var href = $(this).find('a').attr('href');
        var offSetTop = $(href).offset().top;
        $('html,body').animate({'scrollTop':offSetTop})

        return false;
    })

    $('nav.menu-desktop a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;
        $('html,body').animate({'scrollTop':offSetTop})

        return false;
    })

    

   $('.resume .center .experience').slick({
    centerMode: false,
    slidesToShow:1,
    arrows:false,
    infinite:false,
    dots:true,
})

$('.resume .center .education').slick({
    centerMode: false,
    slidesToShow:1,
    arrows:false,
    infinite:false,
    dots:true,
})


            
    
})