$(function(){
    $('.noticeSlider').slick({
        autoplay : true,
        autoplaySpeed:2000,
        vertical : true,
        arrows: false
    });
    
    $('.imgSliderClass').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
})

$(function(){
const imgSlideInWidth = $('.imgSlideIn').width();
const scrWidth = $(window).width();
const gap = (imgSlideInWidth - scrWidth) / 2;
console.log(gap)

    $('.imgSlider').css('left',-gap+"px");
    $('.search-btn').click(function(e){
        e.preventDefault();
        $('.searchForm,.input-search').toggleClass('act');
    });


// navbar gnb teacher
$('.gnb>li').hover(function(){
    $(this).find('.lnb').slideToggle();

});

$('.mobile-nav-box').click(function(){
    if($(this).find('.fa-solid').hasClass('fa-angle-down')){
        $(this).find('.fa-solid').removeClass('fa-angle-down').addClass('fa-angle-up')
        
    }else{
        $(this).find('.fa-solid').removeClass('fa-angle-up').addClass('fa-angle-down')
    }
    $(this).find('.mobile-lnb').slideToggle();

});

$('.menu').click(function(){
    $('.wrapper').css({
        position: 'absolute',
        top : 0,
        left : 0,
        width: '100%'
    }).animate({
        left: '-70%'
    },500);
    $('.fadeblack').css({
        display:'block',
        top:0,
        left:'100%'}).animate({left : 0},500);
    $('.xclose').css({
            display:'block',
            top:0,
            left:'100%'}).animate({left : "-150%"},500);
});
$('.xclose').click(function(){
    $('.wrapper').animate({
        left: 0},500,function(){
            $('.wrapper').css({
                position:'relative',
                top : 0,
                width:"100%"
            })
        });
        $('.fadeblack').animate({left : 0},500,function(){
            $('.fadeblack').css({
            display:'none',
            top:0,
            left:'100%'})
       
        $('.xclose').css({
            dislay: "none",
            left: "100%"

        })
})
});

$(function(){
    $('.imgs').click(function(e){
    e.preventDefault();
    $('.imgSlideIn').slideToggle('fast',function(){
        if($(this).css('display') == "none"){
         $('.imgs').find('.fa-solid').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }else{
            $('.imgs').find('.fa-solid').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        }
    })

  

});



$('.summer_bg').mouseover(function(){
      $(this).find('.sLeftIn,.sRightIn').
      css('animation-play-state',"running");
  });
});
});

// $(window).scroll(function(){
//    let stop =  $(window).scrollTop();
//     // let otop = $('.summer_bg').offset().top();
//  if(otop > 50){
//     $(this).find('.sLeftIn,sRightIn').css('animattion-play-state','running')
//  }
// })


// setInterval(mySlider,3000);


// function mySlider(){
//     $('.imgSlideIn').animate({
//         left : -gap+'px'
//     },500,function(){
//         $('.imgSlideIn>div').removeClass('opacity-1');
//         $('.imgSlideIn>div:first-child').clone().appendTo('.imgSlideIn')
//         $('.imgSlideIn>div:first-child').remove();
//         $('.imgSlideIn').css("left",-(gap)+)

//     });
// }

