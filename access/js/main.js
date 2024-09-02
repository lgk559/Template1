(function ($) {

    "use strict";

    $(document).ready(function () {
        const swiper2 = new Swiper('.max_Swiper', {
            // Optional parameters
            // direction: 'vertical',
            loop: true,
            effect: 'coverflow',
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            watchSlidesVisibility: true,
            grabCursor: true,
            breakpoints: {
                991: {
                    slidesPerView: 1.8,
                    spaceBetween: 0
                },
            },
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
            },
            navigation: {
                nextEl: '.swiper_index-button-next',
                prevEl: '.swiper_index-button-prev',
            },
            thumbs: {
                swiper: {
                    el: ".sub_Swiper",
                    slidesPerView: 1,
                    spaceBetween: 0,
                    watchSlidesVisibility: true,/*避免出现bug*/
                    noSwiping: true,
                    // centeredSlides: true,
                },
            },
            // creativeEffect: {
            //     prev: {
            //     //   shadow: true,
            //       translate: ["-10%", 0, -1],
            //     },
            //     next: {
            //       translate: ["100%", 0, 0],
            //     },
            // },
        });

        const news = new Swiper('.news_Swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            // loop: true,
            navigation: {
                nextEl: '.swiper_news-button-next',
                prevEl: '.swiper_news-button-prev',
            },
            pagination: {
                el: ".news_Swiper .swiper-pagination",
                dynamicBullets: true,
                clickable: true,
            },
            breakpoints: {
                991: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
            }
        })

        const kv_Swiper = new Swiper('.kv_Swiper', {
            // loop: true,
            direction: 'vertical',
            autoplay: true,
            mousewheel: true,
            pagination: {
                el: ".kv_Swiper .swiper-pagination",
                dynamicBullets: false,
                clickable: true,
            },
        })

        const Customers_swiper = new Swiper('.Customers-swiper', {
            // loop: true,
            slidesPerView: 2.5,
            spaceBetween: 30,
            freeMode: true,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: '.swiper_Customers-button-next',
                prevEl: '.swiper_Customers-button-prev',
            },
            // pagination: {
            //     el: ".kv_Swiper .swiper-pagination",
            //     dynamicBullets: false,
            //     clickable: true,
            // },
        })

        // init jarallax parallax
        var initJarallax = function () {
            jarallax(document.querySelectorAll(".jarallax"));
            jarallax(document.querySelectorAll(".jarallax-img"), {
                keepImg: true,
            });
        }
        initJarallax();

        // init gasp
        setTimeout(function () { 
            gsap.registerPlugin(ScrollTrigger);
            gsap.utils.toArray(".item-bg").forEach((item, i) => {
                gsap.to(item, {
                    left: "120%",
                    duration: 2,
                    ease: "slow(0.1,0.4,false)",
                    scrollTrigger: {  
                    trigger: '.Services-main',
                    markers: false,
                    start: "top bottom", 
                    end: "bottom top",
                    toggleActions: "restart pause restart pause",
                }          
                });
            });
         }, 1000);
        



    }); // End of a document





})(jQuery);