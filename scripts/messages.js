let rightSide = document.querySelector('.right-side');
let leftSide = document.querySelector('.left-side');

function changed() {

    rightSide.innerHTML = `
        <link rel="stylesheet" href="../styles/view-message.css">
        <div class="right-side1">
            <img src="${image}" class="pp">
            <div class="pn">${userName.innerHTML}</div>

            <div class="messaging-options">
                <img src="../icons/phone.PNG" class="phone-icon" title="Phone call">
                <img src="../icons/video.PNG" class="video-call-icon" title="Video call">
                <img src="../icons/info.PNG" class="info-icon" title="Info">
            </div>

            <div class="bb"></div>

            <div class="message-input-container">
                <div class="message-area"></div>
                <input type="text" class="message-input" placeholder="Message...">

                <img src="../icons/face-smile-regular.svg" class="message-emoji">
                <img src="../icons/image.PNG" class="image-icon">
                <img src="../icons/heart-regular.svg" class="like-message">
            </div>
        </div>
    `;
}

let image = ' ';
let userName = ' ';

let friend1 = document.getElementById("friend1");
friend1.addEventListener('click', () => {
    userName = document.getElementById("friend-name1");
    image = '../images/juice-tank.JPG'

    changed();

})


let friend2 = document.getElementById("friend2");
friend2.addEventListener('click', () => {
    image = '../images/download.png';
    userName = document.getElementById("friend-name2");

    changed();

})


let friend3 = document.getElementById("friend3");
friend3.addEventListener('click', () => {
    image = '../images/islam.png';
    userName = document.getElementById("friend-name3");

    changed();

})


let friend4 = document.getElementById("friend4");
friend4.addEventListener('click', () => {
    image = '../images/leo.jpg';
    userName = document.getElementById("friend-name4");

    changed();

})


let friend5 = document.getElementById("friend5");
friend5.addEventListener('click', () => {
    image = '../images/Messii.jfif';
    userName = document.getElementById("friend-name5");

    changed();

})


let friend6 = document.getElementById("friend6");
friend6.addEventListener('click', () => {
    image = '../images/download.jfif';
    userName = document.getElementById("friend-name6");

    changed();

})


let friend7 = document.getElementById("friend7");
friend7.addEventListener('click', () => {
    image = '../images/Story 6.jpeg';
    userName = document.getElementById("friend-name7");

    changed();

})
