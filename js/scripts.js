//Get elements to style
const firstNavBar = document.querySelector('.first');
const secondNavBar = document.querySelector('.second');
const ofSet = 
console.log(secondNavBar);

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        console.log(window.scrollY);
        firstNavBar.style.display = "TranslateY(-100%)";
        secondNavBar.style.transform = "TranslateY(1%)";
    } else {
        if(window.scrollY < 50 && window.scrollY > 0) {
            firstNavBar.style.display = "TranslateY(1%)";
            secondNavBar.style.transform = "TranslateY(-100%)";
        }
    }
    // else if(window.scrollY < 50 && window.scrollY > 0) {
    //     firstNavBar.style.transform = "translateY(100%)"
    //     secondNavBar.style.transform = "TranslateY(-100%)";
    // }
    console.log(window.scrollY);
    // firstNavBar.style.transform = "translateY(-100%)";
    // secondNavBar.style.transform = "TranslateY(1%)";
});