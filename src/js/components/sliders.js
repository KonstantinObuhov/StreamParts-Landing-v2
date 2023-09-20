import Swiper, { Navigation, Pagination } from 'swiper';
import Pagination from 'swiper/modules/pagination/pagination';
import Autoplay from 'swiper/modules/autoplay/autoplay';
import FadeEffect from 'swiper/modules/effect-fade/effect-fade';
import CreativeEffect from 'swiper/modules/effect-creative/effect-creative'

if(document.querySelector(".deliverySlides")){
    const deliverySlide = new Swiper('.deliverySlides', {
        modules: [Autoplay, Pagination, FadeEffect, CreativeEffect],
        loop: true,
        centeredSlides: true,
        effect: "creative",
        pagination: {
          el: '.paginationBeliverySlides',
          clickable:true,
        },
        creativeEffect:{
          limitProgress:2,
          prev:{
              translate: ["-100%",-60,-60],
          },
          next:{
              translate: ["100%",-60,-60],
          },
      },
        breakpoints: {
          641:{
            slidesPerView: 1.5,
            spaceBetween: 10,
            creativeEffect:{
              limitProgress:2,
              prev:{
                  translate: ["-90%",-40,-40],
              },
              next:{
                  translate: ["90%",-40,-40],
              },
          },
          },
          769: {
            spaceBetween: 40,
            slidesPerView: 2,
            creativeEffect:{
              limitProgress:2,
              prev:{
                  translate: ["-90%",-40,-40],
              },
              next:{
                  translate: ["90%",-40,-40],
              },
          },
          }
        }
    });
}
if(document.querySelector(".aboutSlides")){
    const aboutSlides = new Swiper('.aboutSlides', {
        modules: [Autoplay, Pagination, FadeEffect, CreativeEffect],
        slidesPerView: 1,
        loop: true,
        
        pagination: {
        el: '.aboutSlides__pagination',
        clickable:true,
        },
        breakpoints: {
          481:{
            direction: 'vertical',
          },
        }
    });
}
const geographySlider = new Swiper('.geographySlider', {
    modules: [Autoplay, Pagination, FadeEffect, CreativeEffect],
    effect: "fade",
    loop:true,
    observer: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.geographySlider__pagination',
        bulletClass: 'swiper-pagination-bullet-custom',
        bulletActiveClass: 'swiper-pagination-bullet-custom--active',
        renderBullet: function(index, className) {
          return `<div class="${className}" data-index="${index}">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="2" viewBox="0 0 80 2" fill="none">
            <line y1="1" x2="0" y2="1" stroke="white" stroke-width="2"/>
          </svg>
          </div>`
        },
        clickable: true
      },
      on: {
        init: function() {
          const _self = this;
          _self.el.style.setProperty('--delay', _self.params.autoplay.delay);
          document.querySelectorAll(".swiper-pagination-bullet-custom line").forEach(element => {
            element.setAttribute("x2", "0");
          });
          document.querySelector(".swiper-pagination-bullet-custom.swiper-pagination-bullet-custom--active line")?.setAttribute("x2", "80");
          // _self.el.addEventListener('mouseenter', function() {
          //   _self.el.classList.add('swiper--pause');
          //   _self.autoplay.stop();
          // });
          // _self.el.addEventListener('mouseleave', function() {
          //   _self.el.classList.remove('swiper--pause');
          //   _self.autoplay.start();
          // });
        },
        slideChange: function(){
          document.querySelectorAll(".swiper-pagination-bullet-custom line").forEach(element => {
            element.setAttribute("x2", "0");
          });
          document.querySelector(".swiper-pagination-bullet-custom.swiper-pagination-bullet-custom--active line")?.setAttribute("x2", "80");
        }
      }
});
const header = document.querySelector(".header");

if (window.innerWidth > 1366) {
    $('#fullpage')?.fullpage({
      navigation: false,
      onLeave: function (anchor, index, nextIndex, direction, destination) {
        if(index.isLast == true){
          header.classList.add("close");
        }
        else if(document.querySelector(".header.close")){
          header.classList.remove("close");
        }
        if (document.querySelector(".fp-viewing-1") && document.querySelector(".geographySlider")) {
            geographySlider.slideToLoop(0,0)
        }
        if (document.querySelector(".fp-viewing-3") && document.querySelector(".geographySlider")) {
            geographySlider.slideToLoop(0,0)
        }
      },
    })
}