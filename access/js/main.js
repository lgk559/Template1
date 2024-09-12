(function ($) {

    "use strict";

    $(document).ready(function () {
        const swiper2 = new Swiper('.sub_Swiper', {
            direction: 'horizontal',
            speed: 2400,
            mousewheel: {
                releaseOnEdges: true,
            },
            pagination: {
                el: ".sup_swiper-pagination",
                dynamicBullets: false,
                clickable: true,
            },
        });

        const kv_Swiper = new Swiper('.kv_Swiper', {
            direction: 'vertical',
            autoplay: false,
            mousewheel: {
                forceToAxis: true,
                releaseOnEdges: true,
            },
            // effect: 'fade',
            speed: 2400,
            pagination: {
                el: ".kv_Swiper .swiper-pagination",
                dynamicBullets: false,
                clickable: true,
            },
        })

        const Customers_swiper = new Swiper('.Customers-swiper', {
            loop: true,
            slidesPerView: 1,
            freeMode: true,
            centeredSlides: true,
            // allowTouchMove: true,
            speed: 5000,
            spaceBetween: 0,
            autoplay: {
                delay: 2500
            },
            breakpoints: {
                991: {
                    slidesPerView: 2.5,
                    spaceBetween: 80,
                    centeredSlides: true,
                },
                768: {
                    slidesPerView: 1.8,
                    spaceBetween: 80,
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

        // var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
        // var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
        //     return new bootstrap.Offcanvas(offcanvasEl)
        // })



    }); // End of a document





})(jQuery);