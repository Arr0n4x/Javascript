const swiper = new Swiper('.swiper-container',{
    pagination:{
        el: '.swiper-pagination',
        clickable : true
    },
    autoplay:{
        delay:2500
    },
    effect: 'coverflow',
    grabCursor: true,
    slidesPerView: 'auto',
    coverflowEffect:{
        rotate:30,
        stretch:0,
        depth:200,
        modifier:1,
        slideShadows:true
    },
    centeredSlides: true
});