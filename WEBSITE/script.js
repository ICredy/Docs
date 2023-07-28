//Code to handle the menu in mobile view

document.addEventListener("DOMContentLoaded", function() {
  const mobileMenuIcon = document.getElementById("mobile-menu-icon");
  const mainMenu = document.getElementById("main-menu");

  mobileMenuIcon.addEventListener("click", function() {
    mainMenu.classList.toggle("show");
    mobileMenuIcon.classList.toggle("active");
  });
});





// Code for hyperledger section
window.addEventListener("scroll", function () {
  var hyperledgerSection = document.querySelector(".hyperledger-section");
  var sectionPosition = hyperledgerSection.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (sectionPosition < screenHeight * 0.75) {
    var hyperledgerInfo = document.querySelector(".hyperledger-info");
    hyperledgerInfo.classList.add("visible");

    var hyperledgerImage = document.querySelector(".hyperledger-image");
    hyperledgerImage.classList.add("visible");
  }
});


//Code to handle the contact form submission

function handleResponse(response) {
    var thankYouMessage = document.getElementById("thankYouMessage");
    if (response.success) {
        thankYouMessage.textContent = "Thank you for contacting us!";
    } else {
        thankYouMessage.textContent = "Failed to send email. Please try again.";
    }
}















