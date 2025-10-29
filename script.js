const menu = document.getElementById("menu");
const navItems = document.getElementById("nav-items");

let isOne = 1;
menu.addEventListener("click", () => {
    // console.log("1");
    if (isOne == 1) {
        navItems.style.display = "none";
        isOne = 0;
    } else {
        navItems.style.display = "block";
        isOne = 1;
    }
});

window.addEventListener("resize", () => {
    const currentWidth = window.innerWidth;
    if (currentWidth > 1000) {
        navItems.style.display = "none";
    }
});

