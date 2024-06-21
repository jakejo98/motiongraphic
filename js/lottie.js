document.addEventListener('DOMContentLoaded', () => {
  const animationsConfig = [
    {
      path: './json/0903_promo_camping.json',
      loop: true,
      playOnceAndStop: false,
      containerId: 'lottie-text1',
    },
    {
      path: './json/1111_promo_christ.json',
      loop: true,
      playOnceAndStop: false,
      containerId: 'lottie-text2',
    },
    {
      path: './json/0529_promo_diet.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-object1',
      playSegmentsOnce: [0, 8],
      loopSegments: [9, 21],
      firstLoopCompleted: false,
      delayTime: 2000,
    },
    {
      path: './json/0612_promo_pulmuone.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-object2',
      playSegmentsOnce: [0, 27],
      loopSegments: [28, 34],
      firstLoopCompleted: false,
      delayTime: 2000,
    },
  ];

  animationsConfig.forEach(config => {
    const animation = lottie.loadAnimation({
      container: document.getElementById(config.containerId),
      renderer: 'svg',
      loop: config.loop,
      autoplay: true,
      path: config.path,
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
          if (!config.firstLoopCompleted) {
            config.firstLoopCompleted = true;
            animation.playSegments(config.loopSegments, true);
          } else {
            setTimeout(() => {
              animation.playSegments(config.loopSegments, true);
            }, config.delayTime);
          }
        });
      }
    });
  });
});
