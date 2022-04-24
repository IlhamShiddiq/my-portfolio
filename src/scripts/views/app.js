import { fetchSkillsByTab, attachToContainer } from './sections/skill-section'
import './utils/button-actions'

class App {
  async renderPage() {
    this.renderSkillSection()
  }

  renderSkillSection() {
    const skills = fetchSkillsByTab('backend')
    attachToContainer(skills)

    return this
  }
}

export default App
