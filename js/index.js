$(document).ready(function(){
  lyPopActive();
  lyPopDisabled();
})

function lyPopActive(){
  $('.lottie-card-link').click(function(event){
    event.preventDefault();
    const cardId = $(this).parent('.lottie-card').index('.lottie-card');
    $('.ly-pop-wrap').eq(cardId).addClass('active').siblings().removeClass('active');
    $('body').addClass('is-fixed');
  })
}

function lyPopDisabled(){
  $('.ly-header-btn').click(function(){
    $('.ly-pop-wrap').removeClass('active');
    $('body').removeClass('is-fixed');
  })
}

function changeLinkState() {
  const section = $('.lottie')
}