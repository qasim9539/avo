
const pathName = window.location.pathname;
const pageName = pathName.split('/').pop();


if(pageName === "index.html"){
    document.querySelector(".index").classList.add("activeLink");
}