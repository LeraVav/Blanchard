
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




document.addEventListener("DOMContentLoaded", () => {
    let gallerySlider = new Swiper(".swiper-container-gallery", {
        slidesPerView: 1,
        grid: {
            rows: 1,
            fill: "row"
        },
        spaceBetween: 20,

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
            600: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 30
            },

            1920: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50
            }
        },

        a11y: false,
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slideVisibleClass: "slide-visible",

        on: {
            init: function () {
                this.slides.forEach((slide) => {
                    if (!slide.classList.contains("slide-visible")) {
                        slide.tabIndex = "-1";
                    } else {
                        slide.tabIndex = "";
                    }
                });
            },
            slideChange: function () {
                this.slides.forEach((slide) => {
                    if (!slide.classList.contains("slide-visible")) {
                        slide.tabIndex = "-1";
                    } else {
                        slide.tabIndex = "";
                    }
                });
            }
        }


    });
});


const btns = document.querySelectorAll('.gallery__hover');
const modalClose = document.querySelectorAll('.gallery__modal-close');
const modals = document.querySelectorAll('.gallery__modal-window');
const modalOverlay = document.querySelector('.gallery__modal-wrap ');

btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
            el.classList.remove('gallery__modal-window--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('gallery__modal-window--visible');
        modalOverlay.classList.add('gallery__modal-wrap--visible');
    });
});

modalOverlay.addEventListener('click', (e) => {
    console.log(e.target);


    modalOverlay.classList.remove('gallery__modal-wrap--visible');
    modals.forEach((el) => {
        el.classList.remove('gallery__modal-window--visible');
    });

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
        600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 27,
        },

        500: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 34,
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



(() => {
    new Accordion(".js-accordion-container", {
        openOnInit: [0]
    });
})();


const params = {
    tabsClass: "js-tab-btn",
    wrap: "js-tabs-wrap",
    content: "js-tab-content",
    active: "active"
};

function setTabs(params) {
    const tabBtns = document.querySelectorAll(`.${params.tabsClass}`);

    function onTabClick(e) {
        e.preventDefault();
        const path = this.dataset.path;
        const wrap = document.querySelector(`.${params.wrap}`)
        const currentContent = wrap.querySelector(`.${params.content}[data-target="${path}"]`);
        const contents = wrap.querySelectorAll(`.${params.content}`);

        contents.forEach((el) => {
            el.classList.remove(params.active);
        });

        currentContent.classList.add(params.active);

        tabBtns.forEach((el) => {
            el.classList.remove(params.active);
        });

        this.classList.add(params.active);
    }

    tabBtns.forEach(function (el) {
        el.addEventListener("click", onTabClick);
    });
}

setTabs(params);

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


const form = document.querySelector('.contacts__form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.contacts__form');

validation
    .addField('#name', [
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'required',
            value: true,
            errorMessage: 'Недопустимый формат',
        },

    ])
    .addField('#tel', [
        {
            rule: 'required',
            value: true,
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'function',
            validator: function () {
                const phone = telSelector.inputmask.unmaskedvalue();
                return phone.length === 10;
            },
            errorMessage: 'Недопустимый формат',
        },

    ]).onSuccess((event) => {
        console.log('Validation passes and form submitted', event);


        let formData = new FormData(event.target);

        console.log(...formData);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Отправлено');
                }
            }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        event.target.reset();
    });

document.querySelectorAll('.js-scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top;

        window.scrollBy({
            top: elementPosition,
            behavior: 'smooth'
        });
    });
})

