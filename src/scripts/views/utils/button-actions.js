import { fetchSkillsByTab, attachToContainer, clearContainer } from '../sections/skill-section'

const skillsContainer = document.querySelector('#skills-container');
const skillTabs = document.querySelectorAll('.skill-tab');

skillTabs.forEach((skillTab) => {
  skillTab.addEventListener('click', () => {
    skillsContainer.innerHTML = ''
    const skills = fetchSkillsByTab(skillTab.getAttribute('data-tab'))
    clearContainer()
    attachToContainer(skills)
  })
})
