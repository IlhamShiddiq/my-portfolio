import { fetchSkillsByTab, attachToContainer } from './sections/skill-section'
import attachExperienceToContainer from './sections/experience-section'
import './utils/button-actions'

class App {
  async renderPage() {
    this.renderSkillSection()
  }

  renderSkillSection() {
    const skills = fetchSkillsByTab('backend')
    attachToContainer(skills)

    attachExperienceToContainer()

    return this
  }
}

export default App
