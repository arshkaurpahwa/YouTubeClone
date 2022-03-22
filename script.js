var menuIcon=document.querySelector(".menu-icon");
var sideBar=document.querySelector(".sidebar");
var container =document.querySelector(".container"); // home vgera to toggle krne k liye

menuIcon.onclick=function(){
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");            // home vgera to toggle krne k liye
}