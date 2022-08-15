/* eslint-disable quotes */
import DATAS from '../../data-resource/PORTFOLIOS.json';

const portfolioContainer = document.querySelector('#portfolios-wrapper');

const attachToContainer = () => {
  DATAS.portfolios.forEach((data) => {
    const container = document.createElement('div');
    const valueMdLg = (data.image_align !== 'center') ? 7 : 5;
    container.classList.add('col-12', 'col-md-6', `col-lg-${valueMdLg}`, `col-xl-${valueMdLg}`, 'mb-4');

    const portfolioCard = document.createElement('portfolio-card');
    portfolioCard.componentAttribute = {
      img_src: data.image_url,
      image_id: data.id,
      title: data.title,
      background_color: data.background_color,
      image_align: data.image_align,
      image_margin: data.image_margin,
      summary: data.summary,
      github_url: data.github_url,
      web_url: data.web_url,
    }
    portfolioCard.renderComponent();

    container.append(portfolioCard);
    portfolioContainer.append(container);

    portfolioCard.portfolioOnClick = data.id
  })
}

export default attachToContainer;
