//Get elements to style
const firstNavBar = document.querySelector('.first');
const secondNavBar = document.querySelector('.second');
const downArrow = document.querySelector('.down');

//Scroll event
window.addEventListener('scroll', () => {
    //Display second header when condition met
    if(window.scrollY > 50) {
        console.log(window.scrollY);
        firstNavBar.style.display = "TranslateY(-100%)";
        secondNavBar.style.transform = "TranslateY(1%)";

    } else {
        //Hide it otherwise
        if(window.scrollY < 50 && window.scrollY > -1) {
            firstNavBar.style.display = "TranslateY(1%)";
            secondNavBar.style.transform = "TranslateY(-100%)";

        }
    }
});