import DATAS from '../../data-resource/EXPERIENCES.json'

const experienceWrapper = document.querySelector('#experience-wrapper')

const attachExperienceToContainer = () => {
  let experienceCards = ''
  let jobType = ''

  DATAS.experiences.forEach((data, index) => {
    let additionalAttribute = ''
    let displayLayout = ''

    if (index !== 0 && index % 2 !== 0) {
      jobType = `${data.job_type} &nbsp; <i class="fa-solid fa-thumbtack"></i>`
      displayLayout = 'experience-point-right'
    } else {
      jobType = `<i class="fa-solid fa-thumbtack"></i> &nbsp; ${data.job_type}`
      displayLayout = 'experience-point-left'
    }

    if (index === 0) additionalAttribute = 'id="first-step"'

    experienceCards += `
        <div class="step" ${additionalAttribute}>
            <div class="circle-warpper">
                <div class="circle"></div>
            </div>
            <div class="${displayLayout}" data-aos="fade-right">
            <div class="year">${data.working_time}</div>
            <div class="role font-regular">${data.role} - <span class="font-medium">${data.company}</span></div>
            <div class="caption">${data.description}</div>
            <div class="type mt-2">${jobType}</div>
            </div>
        </div>
    `
  })

  experienceWrapper.innerHTML = experienceCards
}

export default attachExperienceToContainer
