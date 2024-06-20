document.addEventListener('DOMContentLoaded', () => {
  const animationsConfig = [
    {
      path: './json/0903_promo_camping.json',
      loop: true,
      playOnceAndStop: false,
      containerId: 'lottie1',
    },
    {
      path: './json/1111_promo_christ.json',
      loop: true,
      playOnceAndStop: false,
      containerId: 'lottie2',
    },
  ];

  animationsConfig.forEach(config => {
    const animation = lottie.loadAnimation({
      container: document.getElementById(config.containerId),
      renderer: 'svg',
      loop: config.loop,
      autoplay: true,
      path: config.path
    });

    animation.addEventListener('DOMLoaded', () => {
      if (config.playOnceAndStop) {
        animation.playSegments(config.playSegmentsOnce, true);
        animation.addEventListener('complete', () => {
          animation.goToAndStop(config.playSegmentsOnce[1], true);
        });
      } else {
        animation.playSegments(config.playSegmentsOnce, true);
        animation.addEventListener('complete', () => {
          animation.loop = true;
          animation.playSegments(config.loopSegments, true);
        });
      }
    });
  });
});
// path: './1111_promo_christ.json', // 파일 경로
// loop: false, // 반ㅗㄱ 여뷰
// playSegmentsOnce: [0, 20], // 한 번만 실행할 프레임 범위
// loopSegments: [0, 80], // 이후에 반복할 프레임 범위
// playOnceAndStop: true // 한 번만 실행여부
// containerId: 'lottie1' // 아이디 지정