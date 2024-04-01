import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

// ВСЕ ЧТО ВЫШЕ, МОЖНО УДАЛЯТЬ, ЭТО АВТОВСТАВКА VITE
document.addEventListener("DOMContentLoaded", () => {
// шапка и меню
    const header = document.querySelector('.header')
    document.querySelector('.js--open-menu').addEventListener('click', () => {
        header.classList.add('open')
    })
    document.querySelector('.js--close-menu').addEventListener('click', () => {
        header.classList.remove('open')
    })

    window.onscroll = function () {
        toggleHeaderFixedPosition()
    };

    function toggleHeaderFixedPosition() {
        if (window.pageYOffset > header.offsetTop && window.innerWidth < 1023) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    }

// футер
    document.querySelector('.js--scroll-top').addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
    let footerAccordeons = document.querySelectorAll('.js--mobile-accordeon')

    footerAccordeons.forEach(el => {
        el.addEventListener('click', (event) => {
            if (window.innerWidth < 779) {
                event.target.closest('.footer__column').classList.toggle('open')
            }
        })
    })

//accordeon

    let accordeons = document.querySelectorAll('.js--toggle-accordeon')

    accordeons.forEach(el => {
        el.addEventListener('click', (event) => {
            event.target.closest('.accordeon__el').classList.toggle('open')
        })
    })

// календарь
    flatpickr(".calendar-inline", {
        inline: true,
        "locale": "ru"
    });
    flatpickr(".calendar-inline.range", {
        inline: true,
        mode: "range",
        "locale": "ru"
    });


// табы
    const tabs = document.querySelectorAll('.tabs__caption')
    if (tabs.length) {
        tabs.forEach((tab) => {
            tab.addEventListener('click', function (event) {
                let target = event.target
                if (!target.classList.contains('active')) {
                    let container = target.closest('.tabs');
                    let tabs = target.closest('.tabs__caption');
                    let tabsList = Array.from(tabs.children);
                    let index = tabsList.indexOf(target);
                    if (container.querySelector('li.active')) {
                        container.querySelector('li.active').classList.remove('active');
                    }
                    if (container.querySelector('.tabs__content.active')) {
                        container.querySelector('.tabs__content.active').classList.remove('active');
                    }
                    container.getElementsByClassName('tabs__content')[index].classList.add('active');
                    target.classList.add('active');
                }
            })
        });
    }

    // карта
    if (document.querySelector('#map')) {
        var myMap;
        ymaps.ready(init);

        function init() {
            if (!document.querySelector('#map').classList.contains('relative')) {
                myMap = new ymaps.Map('map', {
                        center: [55.683857, 37.725741],
                        zoom: 16,
                        controls: ['smallMapDefaultSet'],
                    },
                    {zoomControlPosition: {right: 10, top: 150}},
                    {
                        searchControlProvider: 'yandex#search'
                    });
            } else {
                myMap = new ymaps.Map('map', {
                        center: [55.683857, 37.725741],
                        zoom: 16,
                        controls: ['smallMapDefaultSet'],
                    },
                    {zoomControlPosition: {right: 10, top: 150}},
                    {
                        searchControlProvider: 'yandex#search'
                    });

                let myGeoObject = new ymaps.GeoObject({
                        geometry: {
                            type: "Point",
                            coordinates: [55.683857, 37.725741]
                        },
                        properties: {
                            iconContent: 'Офис-шоурум tur-arenda.ru',
                        }
                    }, {
                        preset: 'islands#blueStretchyIcon'
                    });

                myMap.geoObjects.add(myGeoObject);
            }
        }
    }

    // слайдер страница категории
    const sliderMulti = document.querySelectorAll('.swiper');

    if (sliderMulti.length) {
        sliderMulti.forEach((slider) => {

        })
    }


    var swiper = new Swiper(".swiper-thumbnails", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            640: {
                slidesPerView: 3,
            },
            780: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
        },
    });
    var swiper2 = new Swiper(".swiper-main", {
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });

    if (document.querySelector('.js--toggle-all')) {
        document.querySelector('.js--toggle-all').addEventListener('click', (event) => {
            if (event.target.checked) {
                document.querySelector('.purchases').classList.add('selected-all')
            } else {
                document.querySelector('.purchases').classList.remove('selected-all')
            }
        })
    }
});