/* eslint-disable class-methods-use-this */
class PortfolioCard extends HTMLElement {
  renderComponent() {
    this.setProjectUrl();
    this.render();
  }

  set componentAttribute(data) {
    this.img_src = data.img_src;
    this.image_id = data.image_id;
    this.title = data.title;
    this.background_color = data.background_color;
    this.image_align = data.image_align;
    this.image_margin = data.image_margin;
    this.summary = data.summary;
    this.github_url = data.github_url;
    this.web_url = data.web_url;
  }

  set portfolioOnClick(imageId) {
    const portoflio = document.querySelector(`#${imageId}-detail`);
    const overlayClicker = document.querySelector(`#${imageId}-overlay-clicker`)
    const closeButton = document.querySelector(`#${imageId}-close-button`);

    overlayClicker.addEventListener('click', () => {
      portoflio.classList.add('portfolio-display');
      portoflio.classList.remove('portfolio-hide');
    });

    closeButton.addEventListener('click', () => {
      portoflio.classList.add('portfolio-hide');
      portoflio.classList.remove('portfolio-display');
    });
  }

  setProjectUrl() {
    let projectUrls = `<a href="${this.github_url}" class="btn btn-sm text-white close-button"><i class="fa-brands fa-github"></i></a>`;

    if (this.web_url) {
      projectUrls += `<a href="${this.web_url}" class="btn btn-sm text-white close-button mx-1"><i class="fa-solid fa-link"></i></a>`;
    }

    this.project_urls = projectUrls;
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

            <div class="portfolio-card p-4" id="${this.image_id}-wrapper" data-aos="zoom-in">
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
  }
}

customElements.define('portfolio-card', PortfolioCard);
