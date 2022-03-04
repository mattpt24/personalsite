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
const skillsDropdownContainer = document.querySelector(".skills-main-container");
const skillSquares = document.querySelector(".skills");
const skillSquaresBottom = document.querySelector(".bottom");
const skillsLink = document.querySelector(".skills-link");
const skillsBackButton = document.querySelector(".skills-back-btn");
const portfolioLink = document.querySelector(".portfolio-link");
const portfolioDropdownContainer = document.querySelector(".portfolio-dropdown");
const portfolioBackButton = document.querySelector(".portfolio-back-button");
const portfolioCardsContainer = document.querySelector(".portfolio-cards-container");
const pizza = document.querySelector(".pizza");
const pizzaPopUp = document.querySelector(".pizza-popup");
const pizzaSlice = document.querySelector(".pizza-slice");
const pizzaPopUpMessage = document.querySelector(".pizza-popup-message");


// PIZZA DROPDOWN 

const openPizzaPopUp = () => {
    pizzaPopUp.classList.add("pizza-popup-active");
}

const closePizzaPopUp = () => {
    pizzaPopUp.classList.remove("pizza-popup-active");
    pizzaPopUpMessage.innerText = "Yummy!";
    pizza.style.pointerEvents = "none";
}

// PORTFOLIO DROPDOWN 
const openPortfolioDropdown = () => {
    portfolioDropdownContainer.classList.add("open-portfolio-container");
    portfolioCardsContainer.classList.add("fade-in");
}

const closePortfolioDropdown = () => {
    portfolioDropdownContainer.classList.remove("open-portfolio-container");
    portfolioCardsContainer.classList.remove("fade-in");
}



// SKILLS DROPDOWN 
const openSkillsDropdown = () => {
    skillsDropdownContainer.classList.add("open-skills-container");
    skillSquares.classList.add("fade-in");
    skillSquaresBottom.classList.add("fade-in-delay");

}

const closeSkillsDropdown = () => {
    skillsDropdownContainer.classList.remove("open-skills-container");
    skillSquares.classList.remove("fade-in");
    skillSquaresBottom.classList.remove("fade-in-delay");
}





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
skillsLink.addEventListener("click", openSkillsDropdown);
skillsBackButton.addEventListener("click", closeSkillsDropdown);
portfolioLink.addEventListener("click", openPortfolioDropdown);
portfolioBackButton.addEventListener("click", closePortfolioDropdown);
pizza.addEventListener("click", openPizzaPopUp);
pizzaSlice.addEventListener("click", closePizzaPopUp);








