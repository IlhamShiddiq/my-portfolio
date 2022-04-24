class SocialMedias extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="quick-social-medias d-flex flex-column">
            <a href="https://linkedin.ilhamsh.id/" target="_blank" class="btn btn-app btn-app-big btn-social-media btn-primary-outline" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/ilham_shiddiq373/" target="_blank" class="btn btn-app btn-app-big btn-social-media btn-primary-outline" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://gitlab.com/IlhamShiddiq/" target="_blank" class="btn btn-app btn-app-big btn-social-media btn-primary-outline" rel="noopener noreferrer"><i class="fa-brands fa-gitlab"></i></a>
            <a href="https://github.ilhamsh.id/" target="_blank" class="btn btn-app btn-app-big btn-social-media btn-primary-outline" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
        </div>
    `;
  }
}

customElements.define('social-medias', SocialMedias);
