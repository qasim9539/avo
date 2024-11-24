
const pathName = window.location.pathname;
const pageName = pathName.split('/').pop();


if(pageName === "blog.html"){
    document.querySelector(".news").classList.add("activeLink");
}