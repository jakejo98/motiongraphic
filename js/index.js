$(document).ready(function(){
  lyPopActive();
  lyPopDisabled();
})

function lyPopActive(){
  $('.lottie-card-link').click(function(event){
    event.preventDefault();
    const cardId = $(this).parent('.lottie-card').index('.lottie-card');
    $('.ly-pop-wrap').eq(cardId).addClass('active').siblings().removeClass('active');
  })
}

function lyPopDisabled(){
  $('.ly-header-btn').click(function(){
    $('.ly-pop-wrap').removeClass('active');
  })
}

function changeLinkState() {
  const section = $('.lottie')
}