//about 위치
$('.info').click(function(){
    let offset = $('.introduce').offset();
    console.log(offset)
    $('html').animate({scrollTop : offset.top - 0}, 400);
});
$('.contents').click(function(){
    let offset = $('.contentBox').offset();
    console.log(offset)
    $('html').animate({scrollTop : offset.top - 0}, 400);
});

//top이동 버튼
$(document).ready(function () {
    let location = document.querySelector(".contentBox").offsetTop;

    // 1. 특정 위치에서 부터 버튼 나타고, 사라지게..효과는 fade로
     $(window).scroll(function () {
         if ($(this).scrollTop() > location) {
             $('.topButton').fadeIn(200);
         } else {
             $('.topButton').fadeOut(200);
         }
     });
     // 2. 버튼 클릭하면 원하는 위치로 이동
     $('.topButton').click(function (event) {
         event.preventDefault();
         window.scrollTo({top:location, behavior:'smooth'});
     });
 
 });
 

//file 슬라이드
$('.ehehe').click(()=>{
    $('.content').slideDown();
    $('.webProject').css({display:'none'})
    $('.detailProject').css({display:'none'})
    $('.eheheProject').css({display:'flex'})
    $('.fileOpen').css({display:'none'})
    $('.fileClose').css({display:'flex'})
    $('.ehehefileOpen').css({display:'flex'})
    $('.ehehefileClose').css({display:'none'})
    
})
$('.web').click(()=>{
    $('.content').slideDown();
    $('.webProject').css({display:'flex'})
    $('.detailProject').css({display:'none'})
    $('.eheheProject').css({display:'none'})
    $('.fileOpen').css({display:'none'})
    $('.fileClose').css({display:'flex'})
    $('.webfileOpen').css({display:'flex'})
    $('.webfileClose').css({display:'none'})
    
})
$('.detail').click(()=>{
    $('.content').slideDown();
    $('.webProject').css({display:'none'})
    $('.detailProject').css({display:'flex'})
    $('.eheheProject').css({display:'none'})
    $('.fileOpen').css({display:'none'})
    $('.fileClose').css({display:'flex'})
    $('.detailfileOpen').css({display:'flex'})
    $('.detailfileClose').css({display:'none'})
})

