$(document).ready(function() {
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: ture, 
        customPaging : function(slider, i) {
            return ''; 
        }
    });
});
