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
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
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
            }
        });


    }); // End of a document

})(jQuery);