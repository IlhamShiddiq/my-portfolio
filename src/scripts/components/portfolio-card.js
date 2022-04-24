class PortfolioCard extends HTMLElement {
  connectedCallback() {
    this.setAttribute();
    this.setProjectUrl();
    this.render();
  }

  setAttribute() {
    this.img_src = this.getAttribute('img-src') || null;
    this.image_id = this.getAttribute('image-id') || null;
    this.title = this.getAttribute('title') || null;
    this.background_color = this.getAttribute('background-color') || null;
    this.image_align = this.getAttribute('image-align') || null;
    this.image_margin = this.getAttribute('image-margin') || null;
    this.summary = this.getAttribute('summary') || null;
    this.github_url = this.getAttribute('github-url') || null;
    this.web_url = this.getAttribute('web-url') || null;
  }

  setProjectUrl() {
    let projectUrls = `<a href="${this.github_url}" class="btn btn-sm text-white close-button"><i class="fa-brands fa-github"></i></a>`;

    if (this.web_url) {
      projectUrls += `<a href="${this.web_url}" class="btn btn-sm text-white close-button mx-1"><i class="fa-solid fa-link"></i></a>`;
    }

    this.project_urls = projectUrls;
  }

  setPortfolioOnClick() {
    const portoflio = document.querySelector(`#${this.image_id}-detail`);
    const overlayClicker = document.querySelector(`#${this.image_id}-overlay-clicker`)
    const closeButton = document.querySelector(`#${this.image_id}-close-button`);

    overlayClicker.addEventListener('click', () => {
      portoflio.classList.add('portfolio-display');
      portoflio.classList.remove('portfolio-hide');
    });

    closeButton.addEventListener('click', () => {
      portoflio.classList.add('portfolio-hide');
      portoflio.classList.remove('portfolio-display');
    });

    return this;
  }

  render() {
    this.innerHTML = `
            <style>
              #${this.image_id}-wrapper {
                background-color: ${this.background_color};
                text-align: ${this.image_align};
              }

              #${this.image_id}-wrapper #${this.image_id} {
                ${this.image_margin}
              }
            </style>

            <div class="portfolio-card p-4" id="${this.image_id}-wrapper">
              <img src="${this.img_src}" alt="${this.title}" id="${this.image_id}">
              <div class="overlay-clicker" id="${this.image_id}-overlay-clicker"></div>
              <div class="portfolio-card-detail portfolio-hide" id="${this.image_id}-detail">
                <div class="details">
                  <button type="button" class="btn text-white close-button" id="${this.image_id}-close-button"><i class="fa-solid fa-xmark"></i></button>
                  <div class="about-project text-white">
                    <div class="link-project mb-2">
                      ${this.project_urls}
                    </div>
                    <div class="project-summary">
                      <h1>${this.title}</h1>
                      <p class="font-light">${this.summary}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      `;

    this.setPortfolioOnClick();
  }
}

customElements.define('portfolio-card', PortfolioCard);
