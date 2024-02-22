import gsap from 'gsap';
import './assets/css/reset.css'
import './assets/css/tailwind.css'
import './assets/css/variable.css'
import './assets/css/style.css'
import './assets/css/marquee.css'
import { ScrollTrigger } from 'gsap/all';
import Marquee from './src/Marquee';

gsap.registerPlugin(ScrollTrigger);


document.querySelectorAll('.capsule_animation').forEach((element) => {
  // Générer un nombre aléatoire entre 5 et 15 (en secondes)
  const randomSeconds = Math.floor(Math.random() * (15 - 5 + 1) + 5);

  new Marquee({
    el: element.querySelector('.marquee__container'),
    container: element,
    text: '',
    destroyEl: false,
    directLoad: true,
    autoplay: true,
    fontFamily: 'system-ui',
    direction: 1,
    timingAnimation: [1, 100], // 1 sec for 500px,
    duration: randomSeconds
  });
})


// gsap.to(".textGreen", {
//   scrollTrigger: ".section1", // start the animation when ".box" enters the viewport (once)
// });

gsap.to(".tasseCofee", {
  scrollTrigger: {
    trigger: ".tasseCofee",
    markers: true,
    scrub: 1
  },
  opacity: 1,
  scale: 1,
  duration: 2
});



gsap.to(".test", {
  scrollTrigger: {
    trigger: ".world",
    toggleActions: "restart pause reverse none",
    scrub: 1,
    markers: true,
  },
  x: 400,
  duration: 3
});


// document.querySelectorAll('.section').forEach((el) => {
//   ScrollTrigger.create({
//     trigger: el,
//     end: "300px",
//     onToggle: (self) => {
//       el.classList.toggle('active', self.isActive)
//     },
//   });
// })