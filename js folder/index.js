class Index {

  constructor() {
    this.navbar = document.getElementById("navbar");
    this.navbarToggle = navbar.querySelector(".navbar-toggle");
    this.navbarMenu = navbar.querySelector(".navbar-menu");
    this.navbarLinksContainer = navbar.querySelector(".navbar-links");
    
    document.getElementById("button").onclick = this.toggle.bind(this);

  }

  openMobileNavbar() {
    this.navbar.classList.add("opened");
    this.navbarToggle.setAttribute("aria-label", "Close navigation menu.");
  }

  closeMobileNavbar() {
    this.navbar.classList.remove("opened");
    this.navbarToggle.setAttribute("aria-label", "Open navigation menu.");
  }

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