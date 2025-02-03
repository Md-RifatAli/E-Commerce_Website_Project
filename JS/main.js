// Special Countdown section

let dayItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let Countdown = () => {
    let futureDate = new Date("April 20, 2025 00:00:00"); // Explicit time to avoid timezone issues
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24); // Corrected to 24 hours
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24; // Corrected to 24-hour format
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;

    dayItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
}

Countdown();
setInterval(Countdown, 1000);

// Special Countdown section ends


// Scroll section starts here

document.addEventListener("DOMContentLoaded", function () {
    let scrollTopButton = document.getElementById("scrollup");

    window.addEventListener("scroll", function () {
        if (window.scrollY >= 250) {
            scrollTopButton.classList.add("scrollActive");
        } else {
            scrollTopButton.classList.remove("scrollActive");
        }
    });

    scrollTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


// Scroll section ends here



// navber hide section 

    let navBer = document.querySelectorAll('.nav-link');
    let navCollapse = document.querySelector('.navbar-collapse.collapse');

    navBer.forEach(function (a){
        a.addEventListener("click", function(){
            navCollapse.classList.remove("show");
        })
    })
