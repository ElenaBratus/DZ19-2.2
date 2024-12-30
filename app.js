$(".slider-block").slick({
    dots: true,
    arrows: false
});
$(".slider-block2").slick({
    slidesToShow: 2,
    arrows: true,
    responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1,
            arrows: false,
           
          }
        },]

});
