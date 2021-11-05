var slides = [
    {
        img: 'assets/images/slider1.jpg',
        largeSrc: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
        alt: '',
        category: ['med-sites', 'landings', 'web-clm', 'app']
    },
    {
        img: 'assets/images/slider2.jpg',
        largeSrc: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
        alt: '',
        category: ['prod-sites', 'landings', 'web-clm']
    },
    {
        img: 'assets/images/slider3.jpg',
        largeSrc: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
        alt: '',
        category: ['web-clm', 'web-clm', 'prod-sites']
    },
    {
        img: 'assets/images/slider4.jpg',
        largeSrc: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
        alt: '',
        category: ['med-sites', 'landings', 'web-clm']
    },
    {
        img: 'assets/images/slider5.jpg',
        largeSrc: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
        alt: '',
        category: ['app', 'landings', 'prod-sites']
    },
];
var sliderContainerSelector = '.my-slider';
var categoriesElements = Array.from(document.querySelectorAll('.portfolio-arrow-list li'));
var sliderWrapper = document.querySelector('.portfolio-slider-wrapper');
var sliderIns;
var imageViewerIns;


function initSpiderByCategory(category, event) {

    sliderWrapper.classList.toggle('hidden');
    sliderWrapper.style.minHeight = sliderWrapper.clientHeight + 'px';

    for (var categoryElement of categoriesElements) {
        categoryElement.classList.remove('active');
    }

    if (event && event.target) {
        event.target.classList.add('active');
    } else {
        categoriesElements[categoriesElements.length - 1].classList.add('active');
    }

    setTimeout(function () {
        if (sliderIns) {
            sliderIns.destroy();
        }

        if (imageViewerIns)
            imageViewerIns.destroy();

        var sliderElement = document.querySelector(sliderContainerSelector);


        var newHtmlContent = '';

        for (var img of slides) {
            if (!category || img.category.indexOf(category) !== -1) {
                newHtmlContent += `<img src="${img.img}" alt="${img.alt}" data-large="${img.largeSrc}">`;
            }
        }

        sliderElement.innerHTML = newHtmlContent;


        sliderIns = tns({
            container: sliderContainerSelector,
            // items: 3,
            // slideBy: "page",
            mouseDrag: true,
            swipeAngle: false,
            gutter: 80,
            nav: false,
            loop: false,
            // mouseDrag: false,
            // autoHeight: true,
            prevButton: '.prev-btn',
            nextButton: '.next-btn',
            // preventScrollOnTouch: 'force',
            responsive: {
                320: {
                    controls: false,
                    gutter: 10,
                    items: 2.4,
                },
                768: {
                    gutter: 30,
                    items: 3.5,
                    controls: false
                },
                1000: {
                    gutter: 80,
                    controls: true,
                    items: 4.8
                },

            },
            onInit: function () {
                setTimeout(function () {
                    sliderWrapper.classList.toggle('hidden');
                    sliderWrapper.style.minHeight = null;
                }, 100);
            }
        });

        imageViewerIns = new Viewer(sliderElement, {
            toolbar: false,
            zoomable: false,
            title: false,
            url: 'data-large'
        });

    }, 100);
}


initSpiderByCategory();
