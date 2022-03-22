/* eslint-disable class-methods-use-this */
class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  eventClick() {
    const hamburgerButton = document.querySelector('#hamburger-menu');
    const closeButton = document.querySelector('#close-menu');
    const linkNav = document.querySelector('#link-nav');

    hamburgerButton.addEventListener('click', () => {
      linkNav.classList.toggle('shift-drawer');
    });

    closeButton.addEventListener('click', () => {
      linkNav.classList.remove('shift-drawer');
    });
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
                    <a href="#" class="no-decoration">About Me</a>
                    <a href="#" class="no-decoration">Experience</a>
                    <a href="#" class="no-decoration">Skills</a>
                    <a href="#" class="no-decoration">Portfolio</a>
                    <a href="#" class="no-decoration">Contacts</a>
                </div>
            </nav>
        </header>
    `;

    this.eventClick()
  }
}

customElements.define('nav-bar', NavBar);
