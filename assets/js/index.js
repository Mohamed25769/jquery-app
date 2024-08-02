

//OPEN ASIDEBAR
$('.openIcon').on('click',function () {
  $('.asideBar').css('left','0');
});
//CLOSE ASIDEBAR
$('.closeAside').click(function () {
  $('.asideBar').css('left','-270px');

});

//slide dives
$('.about h3').click(function () {
 $(this).next().slideToggle();
 $('.info-about').not($(this).next()).slideUp();
})

//contact

$('textarea').keyUp(function () {
  let myLeng = $(this).val().length;
  console.log(myLeng);

  $('#chars').text(
    100-myLeng <= 0 ? 'you finshed allowing chracter' : 100-myLeng 
  )
})