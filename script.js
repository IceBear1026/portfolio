function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    // We are creating a class called "Open" using classlist.toggle.
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}