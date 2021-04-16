//Get elements to style
const firstNavBar = document.querySelector('.first');
const secondNavBar = document.querySelector('.second');
const downArrow = document.querySelector('.down');

console.log(downArrow);

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        console.log(window.scrollY);
        firstNavBar.style.display = "TranslateY(-100%)";
        secondNavBar.style.transform = "TranslateY(1%)";

    } else {
        if(window.scrollY < 50 && window.scrollY > -1) {
            firstNavBar.style.display = "TranslateY(1%)";
            secondNavBar.style.transform = "TranslateY(-100%)";

        }
    }
});