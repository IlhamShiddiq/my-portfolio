class SocialMedias extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="quick-social-medias d-flex flex-column">
            <button class="btn btn-app btn-app-big btn-social-media btn-primary-outline"><i class="fa-brands fa-linkedin"></i></button>
            <button class="btn btn-app btn-app-big btn-social-media btn-primary-outline"><i class="fa-brands fa-instagram"></i></button>
            <button class="btn btn-app btn-app-big btn-social-media btn-primary-outline"><i class="fa-brands fa-gitlab"></i></button>
            <button class="btn btn-app btn-app-big btn-social-media btn-primary-outline"><i class="fa-brands fa-github"></i></button>
        </div>
    `;
  }
}

customElements.define('social-medias', SocialMedias);
