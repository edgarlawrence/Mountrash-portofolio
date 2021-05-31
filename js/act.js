//Local Scroll Init
$('body').localScroll();

// Navbar Function Control
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('active'); 
    } else {
        $('nav').removeClass('active');
    }
});

//Light Case Init
jQuery(document).ready(function($) {
    $('a[data-rel^=lightcase]').lightcase();
});

// Menu Mobile
function menu(x) {
    x.classList.toggle("change");
    if ($('.menu-btn').hasClass('change')) {
        $('.menu').addClass('active');
    } else {
        $('.menu').removeClass('active');
    }
}

// Slider Testimoni
var swiper = new Swiper('#testimoni .swiper-container', {
    loop : true,
    // autoplay : true,
    centeredSlides: true,
    slidesPerView: 'auto',
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// Slider Progress
var swiper = new Swiper('#progress .swiper-container', {
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

var swiper = new Swiper('#news .swiper-container', {
    loop : true,
    // autoplay : true,
    centeredSlides: true,
    slidesPerView: 'auto',
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// CTA Join
$(".drop").click(function(){
    $(this).toggleClass("open");
});

// APi Callback Progress
$.ajax({
    url: "https://dev-api.mountrash.co.id/ordering-api/api/v1/barometer/index/global",
    contentType: "application/json",
    dataType: 'json',
    success: function(result){
        $.map(result, function(value, key) {
        //   console.log(result);
            $('.card').append(`<div class="list"><img src="img/${value.name}.png" alt="icon"><div class="info"><h2>${value.name}</h2><p> Pcs : ${value.pcs}</p><p>Kgs : ${value.kgs}</p></div>`);
        })
    }
})

$(function() {
    if ($('#lang-switch').is(':checked')) {
        $('html').attr('lang', 'id');
    } else {
        $('html').attr('lang', 'eng');
    }
})

$("#lang-switch").change(function () {
    if ($(this).is(':checked')) {
        $('html').attr('lang', 'id');
    } else {
        $('html').attr('lang', 'eng');
    }
})