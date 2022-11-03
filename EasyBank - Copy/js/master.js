
const body = document.getElementById("body");
const toogleOpen = document.getElementById("open");
const toogleClose = document.getElementById("close");
const phones = document.getElementById("phones");
const menu = document.getElementById("menu")
const Nav = document.getElementById("nav-nav") 
console.log(Nav)

window.onload = function() {
    console.log(menu)
    console.log(body)

}


function handleElements () {
    toogleOpen.onmouseenter = function () {
        menu.style.setProperty("display","block")
    }
    body.onmouseenter = function () {
        menu.style.removeProperty("dispaly");
        menu.style.setProperty("display","none");
    }
    body.onmouseenter = function () {
        toogleOpen.style.setProperty("display","block");
        menu.style.setProperty("display","none")
    }
    body.onmouseleave = function () {
        toogleOpen.style.setProperty("display","block");
        menu.style.setProperty("display","none")
    }
    Nav.onmouseenter = function () {
        menu.style.setProperty("display","none");
        toogleClose.style.setProperty("display","none")
        toogleOpen.style.setProperty("display","block")

    }
    toogleOpen.onmouseenter = function () {
        toogleOpen.style.setProperty("display","none");
        toogleClose.style.setProperty("display","block");
        menu.style.setProperty("display","block")
    
    }
    toogleOpen.onmouseleave = function () {
        //  toogleOpen.style.setProperty("display","none");
        //  toogleClose.style.removeProperty("display");
        //  toogleClose.style.setProperty("display","block")
    }
    
    toogleClose.onmouseenter = function () {
        // toogleOpen.style.setProperty("display","none");
        // toogleOpen.style.setProperty("display","block");
        // menu.style.removeProperty("display");
        // menu.style.setProperty("display","none")
    
    }
    toogleClose.onmouseleave = function () {
        // toogleOpen.style.setProperty("display","block");
        // toogleClose.style.removeProperty("display")
        // toogleClose.style.setProperty("display","none")
    
    }
}


handleElements()



    
