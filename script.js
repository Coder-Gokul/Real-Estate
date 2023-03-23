const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn');
const iconClose = document.querySelector('.icon-close');
const nextlink = document.querySelector('.next-link');
const otplink = document.querySelector('.otp-link');
let refresh = document.querySelector('button');
let inputs = document.querySelectorAll('input');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    wrapper.classList.remove('active-otp');
});

nextlink.addEventListener('click',()=>{
    wrapper.classList.add('active-otp');
});

refresh.addEventListener('click',()=>{
    inputs.forEach(input => input.value ='');
});

function refreshPage(){
    window.location.reload();
} 