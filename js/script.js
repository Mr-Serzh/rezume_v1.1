import { techSkills } from '/data/techSkills.js';
import { softSkills } from '/data/softSkills.js';

function createSkillsList (skillArray, listElementId){
  const skillsList = document.getElementById(listElementId)

  skillArray.forEach(item => {
    const listItem = document.createElement('li')
    const spanItem = document.createElement('span')

    listItem.classList.add('skills-item')
    spanItem.classList.add('skills-text')

    spanItem.textContent = item

    listItem.appendChild(spanItem)
    skillsList.appendChild(listItem)
  })
}

// createSkillsList(techSkills, 'tech-skills-list')
// createSkillsList(softSkills, 'soft-skills-list')