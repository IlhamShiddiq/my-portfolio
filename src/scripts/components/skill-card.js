class SkillCard extends HTMLElement {
  connectedCallback() {
    this.setAttribute();
    this.render();
  }

  setAttribute() {
    this.img_src = this.getAttribute('img-src') || null;
    this.skill = this.getAttribute('skill') || null;
    this.level = this.getAttribute('level') || null;
    this.since = this.getAttribute('since') || null;
  }

  render() {
    this.innerHTML = `
        <div class="card-skill p-3 text-white shadow-small">
            <img src="${this.img_src}" alt="${this.skill}" class="skill-image">
            <div class="skill-content">
                <h1 class="font-regular">${this.skill}</h1>
                <p class="info">${this.level} - since ${this.since}</p>
            </div>
        </div>
    `;
  }
}

customElements.define('skill-card', SkillCard);
