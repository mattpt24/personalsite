const openButton = document.querySelector(".about-me-btn");
const closeButton = document.querySelector(".close-btn");
const dropdown = document.querySelector(".dropdown-container");
const navLinks = document.querySelector(".nav-links");
const getInTouch = document.querySelector(".get-in-touch-btn");
const contactContainer = document.querySelector(".contact-dropdown-container");
const contactCloseBtn = document.querySelector(".contact-close-btn");
const myEmail = document.querySelector("#email");
const copyBtn = document.querySelector(".copy-btn");

const openContactDropdown = () => {
    contactContainer.classList.add("open-contact-container");
}

const closeContactDropdown = () => {
    contactContainer.classList.remove("open-contact-container");
}


const openDropdown = () => {
    dropdown.classList.add("active");
    navLinks.classList.add("fade-in");
}

const closeDropdown = () => {
    dropdown.classList.remove("active");
    navLinks.classList.remove("fade-in");

}


const copyText = () => {
    myEmail.select();
    document.execCommand("copy");
    copyBtn.innerText = "Copied!"
    copyBtn.classList.add("copied-text");
}

openButton.addEventListener("click", openDropdown);
closeButton.addEventListener("click", closeDropdown);
navLinks.addEventListener("click", closeDropdown);
getInTouch.addEventListener("click", openContactDropdown);
contactCloseBtn.addEventListener("click", closeContactDropdown);
copyBtn.addEventListener("click", copyText);






