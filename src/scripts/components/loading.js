class LoadingIndicator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
              <style>
                .loading-indicator {
                    text-align: center;
                }
              </style>
              <div class="loading-indicator">
                <img src="./src/static/images/loading.svg" alt="Loading" width="100">
              </div>
        `;
  }
}

customElements.define('loading-indicator', LoadingIndicator);
