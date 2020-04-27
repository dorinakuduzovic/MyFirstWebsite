function navbarNavbar() {
    var x = document.getElementById("navnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}