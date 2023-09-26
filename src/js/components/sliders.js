import fullpage from "./../components/fullpage4/dist/fullpage.js";
import Swiper, { Navigation, Pagination } from 'swiper';
import Pagination from 'swiper/modules/pagination/pagination';
import Autoplay from 'swiper/modules/autoplay/autoplay';
import FadeEffect from 'swiper/modules/effect-fade/effect-fade';
import CreativeEffect from 'swiper/modules/effect-creative/effect-creative'
import $ from 'jquery';

window.$ = window.jQuery = $;

export default function () {
    if(document.querySelector(".delivery")){
        const delivery = new Swiper('.delivery', {
            modules: [Autoplay, Pagination, FadeEffect, CreativeEffect],
            loop: true,
            centeredSlides: true,
            effect: "creative",
            grabCursor: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.delivery-pagination',
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
    if(document.querySelector(".about")){
        const about = new Swiper('.about', {
            modules: [Autoplay, Pagination, FadeEffect, CreativeEffect],
            slidesPerView: 1,
            loop: true,
            grabCursor: true,
            pagination: {
                el: '.about-pagination',
                clickable:true,
            },
            breakpoints: {
                481:{
                    direction: 'vertical',
                },
            }
        });
    }
    const geography = new Swiper('.geography', {
        modules: [Autoplay, Pagination, FadeEffect, CreativeEffect],
        effect: "fade",
        loop:true,
        grabCursor: true,
        observer: true,
        grabCursor: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.geography-pagination',
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
        fullpage('#fullpage', {
            navigation: false,
            onLeave: function (anchor, index, nextIndex, direction, destination) {
                if(index.isLast == true){
                    header.classList.add("close");
                }
                else if(document.querySelector(".header.close")){
                    header.classList.remove("close");
                }
                if (document.querySelector(".fp-viewing-1") && document.querySelector(".geography")) {
                    geography.slideToLoop(0,0)
                }
                if (document.querySelector(".fp-viewing-3") && document.querySelector(".geography")) {
                    geography.slideToLoop(0,0)
                }
            },
        })
    }
    if (window.innerWidth <= 1366) {
        window.addEventListener("scroll", function() {
          var block_show = null;
          var wt = $(window).scrollTop();
          var wh = $(window).height();
          var et = $('.footer').offset().top;
          var eh = $('.footer').outerHeight();
         
          if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
            if (block_show == null || block_show == false) {
              header.classList.add("close");
            }
            block_show = true;
          } else {
            if (block_show == null || block_show == true) {
              header.classList.remove("close");
            }
            block_show = false;
          }
        })
    }
}