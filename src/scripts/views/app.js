import { fetchSkillsByTab, attachToContainer as attachToSkillContainer } from './sections/skill-section'
import attachToContainer from './sections/portfolio-section'
import attachExperienceToContainer from './sections/experience-section'
import './utils/button-actions'

class App {
  async renderPage() {
    this.renderSkillSection()
    this.renderPortfolioSection()
  }

  renderSkillSection() {
    const skills = fetchSkillsByTab('backend')
    attachToSkillContainer(skills)

    attachExperienceToContainer()

    return this
  }

  renderPortfolioSection() {
    attachToContainer();

    return this
  }
}

export default App
