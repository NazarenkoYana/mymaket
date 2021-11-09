var actionsLi = document.querySelectorAll('#ul-actions li');
var contentsLi = document.querySelectorAll('.li-content');

actionsLi.forEach(function (li, index) {
    li.addEventListener('mouseover', function (event) {

        var currentVisibleLiContent = document.querySelector('.li-content.visible');

        if (currentVisibleLiContent) {
            currentVisibleLiContent.classList.remove('visible');
        }

        if (contentsLi[index]) {
            contentsLi[index].classList.add('visible');
        } else {
            throw new Error(`Error`);
        }
    });
});

