var appearFirst = document.getElementById('appearFirst');
var appearSecond = document.getElementById('appearSecond');
var appearThird = document.getElementById('appearThird');
var appearTable = [appearFirst, appearSecond, appearThird];

appearTable.forEach(element => {
    element.style.opacity = 0;
});

window.addEventListener('scroll', function () {

    var scrollValue = window.scrollY;
    console.log(scrollValue);

    if (scrollValue > 500) {

        appearTable.forEach(element => {
            element.style.opacity = 1;
        });

        appearFirst.style.transition = 'opacity 1s';
        appearSecond.style.transition = 'opacity 1s 0.5s';
        appearThird.style.transition = 'opacity 2s 1s';

    } else {

        appearTable.forEach(element => {
            element.style.opacity = 0;
        });

    }
})