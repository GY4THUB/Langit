const fb = document.getElementById("facebook");
const msngr = document.getElementById("messenger");
const insta = document.getElementById("instagram");
const sms = document.getElementById("phone");
const mail = document.getElementById("mail");

sms.addEventListener('click', () => {
let phoneNumber = "09944127243"; // Replace with your phone number
            let message = "Hello Jhonas, I would like to contact you."; // Replace with your message
            let smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
            window.location.href = smsLink;
});

mail.addEventListener('click', () => {
    let email = "jhonasheaven77@gmail.com"; // Replace with your email
            let subject = "Inquiry"; // Replace with your subject
            let body = "Hello Jhonas, I would like to contact you."; // Replace with your message
            let mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(mailtoLink, "_blank");
});

fb.addEventListener('click',() => {
    window.location.href = "https://www.facebook.com/JhonasLngt";
})

insta.addEventListener('click', () => {
    window.location.href = "https://www.instagram.com/heaven_anx?igsh=YzljYTk1ODg3Zg=="
});

msngr.addEventListener('click', () => {
    window.location.href = "https://m.me/JhonasLngt";
});

function calcU() {
    window.location.href = "others/Calculator.html";
}

function magiC() {
    window.location.href = "others/MagicBall.html";
}

function xoX() {
    window.location.href = "others/Xox.html";
}

function rocK() {
    window.location.href = "others/RockScissor.html";
}

function racE() {
    window.location.href = "others/Racing.html";
}

function spiN() {
    window.location.href = "others/Spinner.html";
}