document.addEventListener('DOMContentLoaded', () => {
  const lottieCardList = document.querySelectorAll('.lottie-card-link');
  const animations = [];

  const animationsConfig = [
    {
      path: './json/1111_promo_christ.json',
      loop: false,
      playOnceAndStop: true,
      containerId: 'lottie-text1',
    },
    {
      path: './json/toy.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-text2',
      playSegmentsOnce: [0, 9],
      loopSegments: [0, 9],
      delayTime: 3000,
    },
    {
      path: './json/0529_promo_diet.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-object1',
      playSegmentsOnce: [0, 21],
      loopSegments: [9, 21],
      delayTime: 3000,
    },
    {
      path: './json/ballon.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-object2',
      playSegmentsOnce: [0, 59],
      loopSegments: [0, 59],
      delayTime: 3000,
    },
    {
      path: './json/0612_promo_pulmuone.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-object3',
      playSegmentsOnce: [0, 34],
      loopSegments: [28, 34],
      delayTime: 3000,
    },
    {
      path: './json/showty.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-object4',
      playSegmentsOnce: [0, 19],
      loopSegments: [15, 19],
      delayTime: 3000,
    },
    {
      path: './json/giftbox.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-object5',
      playSegmentsOnce: [0, 68],
      loopSegments: [18, 68],
      delayTime: 0
    },
    {
      path: './json/alarm_v1.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-object6',
      playSegmentsOnce: [0, 36],
      loopSegments: [0, 36],
      delayTime: 3000,
    },
    {
      path: './json/alarm_v2.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-object7',
      playSegmentsOnce: [0, 28],
      loopSegments: [0, 28],
      delayTime: 3000,
    },
    {
      path: './json/0903_promo_camping.json',
      loop: false,
      playOnceAndStop: true,
      containerId: 'lottie-object8',
    },
    {
      path: './json/0731_promo_frosted-fruits.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-object9',
      playSegmentsOnce: [0, 72],
      loopSegments: [24, 72],
      delayTime: 0,
    },
    {
      path: './json/nt_new_join_event_top.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-object10',
      playSegmentsOnce: [0, 80],
      loopSegments: [32, 80],
      delayTime: 0,
    },
    {
      path: './json/1218_promo_winterfood.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-object11',
      playSegmentsOnce: [0, 40],
      loopSegments: [0, 40],
      delayTime: 0,
    },
    {
      path: './json/summer.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-background1',
      playSegmentsOnce: [0, 8],
      loopSegments: [0, 8],
      delayTime: 3000,
    },
    {
      path: './json/summer02.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-background2',
      playSegmentsOnce: [0, 168],
      loopSegments: [0, 168],
      delayTime: 0,
    },
    {
      path: './json/gangsale.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-mix1',
      playSegmentsOnce: [0, 67],
      loopSegments: [0, 67],
      delayTime: 3000,
    },
    {
      path: './json/nt_customer_monitering.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-mix2',
      playSegmentsOnce: [0, 66],
      loopSegments: [0, 66],
      delayTime: 3000,
    },
    {
      path: './json/nt_weekend_coupon.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-mix3',
      playSegmentsOnce: [0, 110],
      loopSegments: [62, 110],
      delayTime: 0,
    },
    {
      path: './json/0206_promo_sul.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-mix4',
      playSegmentsOnce: [0, 78],
      loopSegments: [48, 78],
      delayTime: 0,
    },
    {
      path: './json/0308_promo_agricultural.json',
      loop: false,
      playOnceAndStop: true,
      containerId: 'lottie-mix5',
    },
    {
      path: './json/0826_circle_bn_chuseok_5days_v3.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-mix6',
      playSegmentsOnce: [0, 52],
      loopSegments: [52, 100],
      delayTime: 0,
    },
    {
      path: './json/0525_promo_end.json',
      loop: false,
      playOnceAndStop: true,
      containerId: 'lottie-mix7',
    },
    {
      path: './json/0227_promo_dupont.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-mix8',
      playSegmentsOnce: [0, 48],
      loopSegments: [0, 48],
      delayTime: 2000,
    },
    {
      path: './json/0307_promo_WhiteDay.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-mix9',
      playSegmentsOnce: [0, 60],
      loopSegments: [46, 60],
      delayTime: 1500,
    },
    {
      path: './json/1104_promo_peperoday.json',
      loop: false,
      playOnceAndStop: false,
      containerId: 'lottie-mix10',
      playSegmentsOnce: [0, 72],
      loopSegments: [66, 72],
      delayTime: 1500,
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

    animation.config = config;  // 애니메이션 객체에 설정 저장
    animations.push(animation);
  });

  const playAnimationWithDelay = async (anim, config) => {
    const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

    const onComplete = async () => {
      await delay(config.delayTime);
      if (config.loopSegments) {
        anim.playSegments(config.loopSegments, true);
      } else if (config.playSegmentsOnce) {
        anim.playSegments(config.playSegmentsOnce, true);
      }
    };

    anim.addEventListener('complete', onComplete);

    if (config.loopSegments) {
      anim.playSegments(config.playSegmentsOnce, true);
    } else if (config.playSegmentsOnce) {
      anim.playSegments(config.playSegmentsOnce, true);
    } else {
      anim.play();
    }
  };
  
  lottieCardList.forEach((element, index) => {
    element.addEventListener('click', () => {
      const anim = animations[index];
      const config = anim.config;

      anim.stop();
      anim.goToAndStop(0, true);

      playAnimationWithDelay(anim, config);
    });
  });
  
});