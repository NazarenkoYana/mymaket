var slides = [
    {
        img: 'assets/images/slider1.jpg',
        largeSrc: 'assets/images/largeSrc1.png',
        alt: '',
        category: ['med-sites', 'landings', 'web-clm', 'app'],
        href: 'https://proximaresearch.com/uk/clm/#/slide-1',
    },
    {
        img: 'assets/images/slider2.jpg',
        largeSrc: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
        alt: '',
        category: ['prod-sites', 'landings', 'web-clm'],
        href: 'https://www.google.com.ua/?hl=ru',
    },
    {
        img: 'assets/images/slider3.jpg',
        largeSrc: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
        alt: '',
        category: ['web-clm', 'prod-sites', 'app'],
        href: 'https://www.google.com.ua/?hl=ru',
    },
    {
        img: 'assets/images/slider4.jpg',
        largeSrc: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
        alt: '',
        category: ['med-sites', 'landings', 'web-clm'],
        href: 'https://www.google.com.ua/?hl=ru',
    },
    {
        img: 'assets/images/slider5.jpg',
        largeSrc: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
        alt: '',
        category: ['app', 'landings', 'prod-sites'],
        href: 'https://www.google.com.ua/?hl=ru',
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
                newHtmlContent += `<img src="${img.img}" alt="${img.alt}" data-large="${img.largeSrc}" data-href="${img.href}" ">`;
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
            // edgePadding: 0,
            prevButton: '.prev-btn',
            nextButton: '.next-btn',
            // preventScrollOnTouch: 'force',
            responsive: {
                320: {
                    controls: false,
                    gutter: 20,
                    items: 3,
                },
                768: {
                    gutter: 30,
                    items: 3.5,
                    controls: false,
                },
                1000: {
                    gutter: 80,
                    controls: true,
                    items: 4.8,
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
            movable: false,
            url: 'data-large',
            inheritedAttributes: ['data-href', 'alt'],
            viewed: function (event){
                var image = event.detail.image;
                // console.log(image);
                event.detail.image.addEventListener('click', function (){
                    window.open(image.getAttribute('data-href'), '_blank');
                });
            }
        });

    }, 100);
}

initSpiderByCategory();
