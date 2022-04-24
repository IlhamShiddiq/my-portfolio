class SkillCard extends HTMLElement {
  set imageSource(imageSource) {
    this.img_src = imageSource
  }

  set title(title) {
    this.skill = title
  }

  set levelStatus(levelStatus) {
    this.level = levelStatus
  }

  set sinceStatus(sinceStatus) {
    this.since = sinceStatus
  }

  renderComponent() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="card-skill p-3 text-white shadow-small" data-aos="flip-up">
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
