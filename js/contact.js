
const pathName = window.location.pathname;
const pageName = pathName.split('/').pop();


if(pageName === "contact.html"){
    document.querySelector(".contact").classList.add("activeLink");
}