//Get time hands
let hourHand = document.querySelector(".hour-hand");
let minHand = document.querySelector(".min-hand");
let secHand = document.querySelector(".second-hand");


function getHour (){
    const now = new Date();

    let hour = now.getHours();
    
    let minute = now.getMinutes();

    let second = now.getSeconds();

}