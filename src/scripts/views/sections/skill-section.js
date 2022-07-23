import DATA from '../../data-resource/SKILLS.json';

const skillsContainer = document.querySelector('#skills-container');

const containers = document.createElement('div');
containers.classList.add('row')

const fetchSkillsByTab = (tabType) => DATA.skills.filter((skill) => skill.tab_type === tabType)

const clearContainer = () => {
  containers.innerHTML = '';
}

const attachToContainer = (datas) => {
  datas.forEach((data) => {
    const skillCard = document.createElement('skill-card')
    skillCard.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-3')
    skillCard.title = data.title
    skillCard.levelStatus = data.level
    skillCard.sinceStatus = data.since
    skillCard.imageSource = `./src/static/skill-images/${data.image_name}`
    skillCard.renderComponent()

    containers.append(skillCard);
  })

  skillsContainer.innerHTML = ''
  skillsContainer.append(containers)
}

export {
  fetchSkillsByTab,
  attachToContainer,
  clearContainer,
}
