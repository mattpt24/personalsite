const openButton = document.querySelector(".about-me-btn");
const closeButton = document.querySelector(".close-btn");
const dropdown = document.querySelector(".dropdown-container");
const getInTouch = document.querySelector(".get-in-touch-btn");
const contactContainer = document.querySelector(".contact-dropdown-container");
const contactCloseBtn = document.querySelector(".contact-close-btn");
const myEmail = document.querySelector("#email");
const navLinks = document.querySelector(".nav-links");
const copyBtn = document.querySelector(".copy-btn");
const aboutBackButton = document.querySelector(".about-back-btn");
const aboutLink = document.querySelector(".about-link");
const aboutDropdownContainer = document.querySelector(".about-me-dropdown");






// ABOUT DROPDOWN 
const openAboutDropdown = () => {
    aboutDropdownContainer.classList.add("open-about-container");
}

const closeAboutDropdown = () => {
    aboutDropdownContainer.classList.remove("open-about-container");
}




// CONTACT DROPDOWN 

const  openContactDropdown = () => {
    contactContainer.classList.add("open-contact-container");
}

const closeContactDropdown = () => {
    contactContainer.classList.remove("open-contact-container");
}




// MAIN MENU DROPDOWN

const openDropdown = () => {
    dropdown.classList.add("active");
    navLinks.classList.add("fade-in");
}

const closeDropdown = () => {
    dropdown.classList.remove("active");
    navLinks.classList.remove("fade-in");

}



// COPY TEXT FUNCTION

const copyText = () => {
    myEmail.select();
    document.execCommand("copy");
    copyBtn.innerText = "Copied!"
    copyBtn.classList.add("copied-text");
}






// EVENT LISTENERS

openButton.addEventListener("click", openDropdown);
closeButton.addEventListener("click", closeDropdown);
getInTouch.addEventListener("click", openContactDropdown);
contactCloseBtn.addEventListener("click", closeContactDropdown);
copyBtn.addEventListener("click", copyText);
aboutLink.addEventListener("click", openAboutDropdown);
aboutBackButton.addEventListener("click", closeAboutDropdown);






