/* eslint-disable class-methods-use-this */
class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  eventClick() {
    const hamburgerButton = document.querySelector('#hamburger-menu');
    const closeButton = document.querySelector('#close-menu');
    const linkNav = document.querySelector('#link-nav');
    const navMenu = document.querySelectorAll('.nav-menu');

    hamburgerButton.addEventListener('click', () => {
      linkNav.classList.toggle('shift-drawer');
    });

    closeButton.addEventListener('click', () => {
      linkNav.classList.remove('shift-drawer');
    });

    navMenu.forEach((menu) => {
      menu.addEventListener('click', () => {
        linkNav.classList.remove('shift-drawer');
      });
    })
  }

  render() {
    this.innerHTML = `
        <header>
            <nav class="nav">
                <div class="head-nav">
                    <span class="font-medium">Ilham</span> Shiddiq
                </div>
                <div class="hamburger-menu" id="hamburger-menu">
                    <button class="btn"><i class="fa-solid fa-bars"></i></button>
                </div>
                <div class="link-nav" id="link-nav">
                    <div class="sub-head-nav">
                        <a href="#" class="no-decoration"><span class="font-medium">Ilham</span> Shiddiq</a>
                        <div class="close-menu" id="close-menu">
                            <button class="btn"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>
                    <a href="/" class="no-decoration">About Me</a>
                    <a href="#experiences" class="nav-menu no-decoration">Experiences</a>
                    <a href="#skills" class="nav-menu no-decoration">Skills</a>
                    <a href="#portfolios" class="nav-menu no-decoration">Portfolios</a>
                    <a href="#contacts" class="nav-menu no-decoration">Contacts</a>
                </div>
            </nav>
        </header>
    `;

    this.eventClick()
  }
}

customElements.define('nav-bar', NavBar);
