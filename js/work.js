const pathName = window.location.pathname;
const pageName = pathName.split('/').pop();


if(pageName === "work.html"){
    document.querySelector(".work").classList.add("activeLink");
}