const buttonTrigger = document.querySelector('.mobile-current-category');
const mobileCategoryUl = document.querySelector('ul.portfolio-arrow-list');


mobileCategoryUl.childNodes.forEach(function (li) {
    li.addEventListener('click', function () {
        buttonTrigger.innerText = li.innerText;
    });
});


function toggleMenuListListener($event) {
    if (mobileCategoryUl.classList.contains('visible')) {
        mobileCategoryUl.classList.remove('visible');
        document.removeEventListener('click', toggleMenuListListener);
    } else {
        mobileCategoryUl.classList.add('visible');
        $event.stopPropagation();
        document.addEventListener('click', toggleMenuListListener);
    }
}


buttonTrigger.addEventListener('click', toggleMenuListListener);



