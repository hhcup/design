(()=>{
    var swiper = new Swiper(".swiper", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        mousewheel: {
            thresholdTime: 500,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
})();