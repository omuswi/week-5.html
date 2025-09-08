alert("YOU ARE HOME ; SMILE~````")

// 1. Get DOM elements by their ID

const reg = document.getElementById("reg")
const regbutton = document.getElementById("regbutton")

//display message after click
function registration() {
    reg.textContent = "You Were Successfully Registered call 0700000008";
    regbutton.textContent = "REGISTERED AWAIT MORE INSTRUCTIONS IN YOUR EMAIL";

    // After 5 seconds, reset the button and message.
    setTimeout(() => {
        reg.textContent = "Click the button to register.";
        regbutton.textContent = "Register Again";
    }, 30000); // 5000 milliseconds = 5 seconds
    alert("registered");
}
regbutton.addEventListener('click', registration);


const places1 = document.getElementById("places 1");
function locations1(){
      places1.textContent = "Our houses in Donholm inlude places like: Naivas, Rounder,Tena, Manyanja Road";}

const places2 = document.getElementById("places 2");
function locations2(){
      places2.textContent = "Our houses on Thika Road inlude places like: Naivas, Rounder,Roysambu Manyanja Road";}
places2.addEventListener('click', locations2)

const places3= document.getElementById("places 3");
function locations3(){
      places3.textContent = "Our houses on Thika Road inlude places like: Naivas, Rounder,Roysambu Manyanja Road";}
places3.addEventListener('click', locations3)

const places4= document.getElementById("places 4");
function locations4(){
      places4.textContent = "Our houses on Thika Road inlude places like: Naivas, Rounder,Roysambu Manyanja Road";}
places4.addEventListener('click', locations4)

const places5= document.getElementById("places 5");
function locations5(){
      places5.textContent = "Our houses on Thika Road inlude places like: Naivas, Rounder,Roysambu Manyanja Road";}
places5.addEventListener('click', locations5)

const places6 = document.getElementById("places 6");
function locations6(){
      places6.textContent = "Our houses on Thika Road inlude places like: Naivas, Rounder,Roysambu Manyanja Road";}
places6.addEventListener('click', locations6)

const country = document.getElementById("country");
const country1 = document.getElementById("country1");
const message = document.getElementById("message");
function checkcountry() {
        const countryValue = country.value.toLowerCase();
        if (countryValue === "kenya" ) {
           message.textContent = "User can get a home. We are glad to have you!";
        }
        else if (countryValue=== "uganda") {
            message.textContent = "User can get a home. call 2029299!";
        }
        else {
            message.textContent = "User does not meet the country requirement.";
        }
        }
country1.addEventListener('click', checkcountry)
