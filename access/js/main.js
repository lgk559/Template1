(function ($) {

    "use strict";

    $(document).ready(function () {
        const swiper2 = new Swiper('.max_Swiper', {
            loop: false,
            slidesPerView: 1,
            spaceBetween: 0,
            noSwiping: true,
            
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
                    fadeEffect: {
                        crossFade: true,
                    },
                },
            },
        });

        const kv_Swiper = new Swiper('.kv_Swiper', {
            loop: true,
            direction: 'vertical',
            autoplay: false,
            mousewheel: true,
            pagination: {
                el: ".kv_Swiper .swiper-pagination",
                dynamicBullets: false,
                clickable: true,
            },
        })

        const Customers_swiper = new Swiper('.Customers-swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            freeMode: true,
            centeredSlides: false,
            // allowTouchMove: true,
            // autoplay : {
            //     delay: 5000
            // },
            breakpoints: {
                
                991: {
                    slidesPerView: 2.5,
                    spaceBetween: 10,
                    centeredSlides: true,
                },
                768: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                    centeredSlides: true,
                },
            }
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
            // header
            gsap.to("#header", {
                duration: 1,
                scrollTrigger: {  
                trigger: '#kv',
                markers: false,
                start: "top bottom", 
                end: "bottom top",
                onEnter: () => { $("#header").removeClass('scroll') },
                onEnterBack: () => { $("#header").removeClass('scroll') },
                onLeave: () => { $("#header").addClass('scroll') },
                onLeaveBack: () => { $("#header").addClass('scroll') },
            }          
            });

            gsap.utils.toArray(".item-bg").forEach((item, i) => {
                gsap.to(item, {
                    left: "120%",
                    duration: 2,
                    ease: "slow(0.1,0.4,false)",
                    scrollTrigger: {  
                    trigger: item,
                    markers: false,
                    start: "top bottom", 
                    end: "bottom top",
                    toggleActions: "restart pause restart pause",
                }          
                });
            });

            gsap.utils.toArray(".js-scroll-item").forEach(item => {
                let href = item.getAttribute("href")
                // console.log(item,href)
                // let menuDom = $(item).parent().parent().parent()
                // console.log(menuDom)
                let offset = item.getAttribute("data-offset") ? item.getAttribute("data-offset") : 0
                const eachTop = $(href).offset().top - $('#header').height() - offset
                gsap.to(href, {
                  scrollTrigger: {
                    trigger: href,
                    markers: false,
                    start: "top 40%",
                    end: "bottom 20%",
                    onEnter: () => { $(`#header a[href='${href}']`).addClass('active') },
                    onEnterBack: () => { $(`#header a[href='${href}']`).addClass('active') },
                    onLeave: () => { $(`#header a[href='${href}']`).removeClass('active') },
                    onLeaveBack: () => { $(`#header a[href='${href}']`).removeClass('active') },
                  },
                })
                item.addEventListener('click', function (e) {
                  e.preventDefault()
                  // console.log(item, eachTop)
                  $("html, body").animate({ scrollTop: eachTop }, 600);
                })
              })

         }, 1000);
        



    }); // End of a document





})(jQuery);