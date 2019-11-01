$('.app-slider').owlCarousel({
    center: true,
    nav:true,
    items:2,
    loop:true,
    dots: false,
    autoPlay: 3000,
    margin:10,
    responsive:{
        600:{
            items:5
        }
    }
});