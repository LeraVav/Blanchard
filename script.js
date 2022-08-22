
let burger = document.querySelector('.burger');
let burgerclose = document.querySelector('.burgerclose');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__list');

burger.addEventListener('click',
    function () {
        burger.classList.toggle('burgerclose--active');
        menu.classList.toggle('header__nav--active');
    })

burgerclose.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
})


const searchBtn = document.querySelector('.header__search-btn-open');
const searchModal = document.querySelector('.header__search');
const searchCloseBtn = document.querySelector('.header__search-btn-close');

searchBtn.addEventListener('click', () => {
    searchModal.classList.add('header__search_opened');
});

searchCloseBtn.addEventListener('click', () => {
    searchModal.classList.remove('header__search_opened');
});

const element = document.querySelector('.selectCustom');


const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ""
});

var swiper = new Swiper('.header__swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    }
});


document.querySelectorAll('.gallery__hover').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {

        document.querySelectorAll('.gallery__modal-window').forEach(tabsBtn => {
            tabsBtn.classList.remove('gallery__modal-window--active')
        })

        document.querySelectorAll('.gallery__modal-wrap').forEach(tabsBtn => {
            tabsBtn.classList.remove('gallery__modal-wrap--active')
        })

        document.querySelectorAll('.gallery__modal-close').forEach(tabsBtn => {
            tabsBtn.classList.remove('gallery__modal-window--active', 'gallery__modal-wrap--active')
        })

        e.currentTarget.classList.add('gallery__modal-window--active')

        e.currentTarget.classList.add('gallery__modal-wrap--active')

        const path = e.currentTarget.dataset.path;

        document.querySelector(`[data-target="${path}"]`).classList.add('gallery__modal-window--active', 'gallery__modal-wrap--active');
    });

});




var Myswiper = new Swiper('.swiper-container-gallery', {

    navigation: {
        nextEl: '.swiper-btn-gallery-next',
        prevEl: '.swiper-btn-gallery-prev',
    },

    pagination: {
        el: '.swiper-pagination-gallery',
        clickable: true,
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return '' + number;
        }

    },

    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 16,
            slidesPerGroup: 3,
        },

        321: {
            slidesPerView: 2,
            spaceBetween: 52,
            slidesPerGroup: 2,
        },

        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
        },


    }
});




var swiperEvents = new Swiper('.swiper-container-events', {


    navigation: {
        nextEl: '.events__swiper-btn',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


    breakpoints: {
        1025: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
        769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 27,
        },

        500: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 34
        },

        320: {
            spaceBetween: 10,
        },
    }

});


var swiperPartners = new Swiper('.swiper-container-partners', {
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next-partners',
    },

    breakpoints: {
        1025: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        },
        769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 16,
        },

        600: {
            slidesPerView: 2,
            spaceBetween: 8,
            slidesPerGroup: 2,
        },

        320: {
            slidesPerView: 1,
            spaceBetween: 16,
            slidesPerGroup: 1,
        },
    }

});


document.querySelectorAll('.accordion-item-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {

        document.querySelectorAll('.catalog__info').forEach(tabsBtn => {
            tabsBtn.classList.remove('catalog__info--active')
        })

        document.querySelectorAll('.accordion-item-btn').forEach(tabsBtn => {
            tabsBtn.classList.remove('accordion-item-btn--active')
        })

        e.currentTarget.classList.add('accordion-item-btn--active')

        const path = e.currentTarget.dataset.path;

        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__info--active');
    });

});




// figureclose.addEventListener('click', function () {
//     gallerywindow.classList.remove('gallery__window--active');
// })

// let gallerywindow = document.querySelector('.gallery__window');
// let figureclose = document.querySelector('.gallery__window-close');

// document.querySelectorAll('.gallery__hover').forEach(function (tabsBtn) {
//     tabsBtn.addEventListener('click', function (e) {

//         document.querySelectorAll('.gallery__window').forEach(tabsBtn => {
//             tabsBtn.classList.remove('gallery__window--active')
//         })



//         document.querySelectorAll('.gallery__hover').forEach(tabsBtn => {
//             tabsBtn.classList.remove('gallery__hover--active')
//         })

//         e.currentTarget.classList.add('gallery__hover--active')

//         const path = e.currentTarget.dataset.path;

//         document.querySelector(`[data-target="${path}"]`).classList.add('gallery__window--active');
//     })

// });

$(".accordion").accordion({
    heightStyle: "content",
    collapsible: true,
});

$(function () {
    $(".accordion_header").click(function () {
        $(".accordion_header").removeClass("active");
        $(this).addClass("active");
    });

    $(".accordion_header:first").addClass("active");
});


ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.75555888025219, 37.61562439490891],
        zoom: 14,
        controls: ['smallMapDefaultSet']
    });

    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mapicon.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -42],
        iconImageColor: '9D5CD0',
        fillColor: '9D5CD0',
        strokeColor: '9D5CD0'
    });

    myMap.geoObjects.add(myPlacemark);
}

var selector = document.getElementById("tel");

var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);



const validation = new JustValidate('#form');

validation
    .addField('#name', [
        {
            rule: 'minLength',
            value: 3,
        },
        {
            rule: 'maxLength',
            value: 30,
        },
        {
            rule: 'required',
            errorMessage: 'Недопустимый формат',
        },
    ])
    .addField('#tel', [
        {
            rule: 'required',
            errorMessage: 'Недопустимый формат',
        },
    ])


