class Index {

  constructor() {
    //Gets elements from HTML and places them in variables//
    this.navbar = document.getElementById("navbar");
    this.navbarToggle = navbar.querySelector(".navbar-toggle");
    this.navbarMenu = navbar.querySelector(".navbar-menu");
    this.navbarLinksContainer = navbar.querySelector(".navbar-links");

    //hamburger button on touch event handler//
    document.getElementById("button").onclick = this.toggle.bind(this);
    let count = 3;
    let id = 0;
    for( let i = 0; i < count; i++) {
      document.getElementById(id).onclick = this.closeMobileNavbar.bind(this);
      id++;
    }

  }
  //toggles navbar open
  openMobileNavbar() {
    this.navbar.classList.add("opened");
    this.navbarToggle.setAttribute("aria-label", "Close navigation menu.");
  }
  //toggle navbar closed
  closeMobileNavbar(event) {
    this.navbar.classList.remove("opened");
    this.navbarToggle.setAttribute("aria-label", "Open navigation menu.");
  }
  //hamburger touch event togglesnav bar open or close ontouch or click
  toggle(event) {
    event.preventDefault();
    if (this.navbar.classList.contains("opened")) {
      this.closeMobileNavbar();
    } else {
      this.openMobileNavbar();
    }
  }
}

let index;
window.onload = () => { index = new Index(); }