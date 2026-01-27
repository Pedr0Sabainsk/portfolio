const elemProjects = document.getElementById('project__content')

const createImage = (projectImage, projectName) => {
  const elemPicture = document.createElement('picture')
  const elemImg = document.createElement('img')

  elemImg.setAttribute('src', projectImage)
  elemImg.setAttribute('alt', 'Imagem de capa do projeto ' + projectName)

  elemPicture.appendChild(elemImg)

  return elemPicture
}

const createStrong = (projectName) => {
  const elemStrong = document.createElement('strong')
  elemStrong.innerText = projectName

  return elemStrong
}

const createTags = (projectTags) => {
  const elemTags = document.createElement('div')

  projectTags.forEach(tag => {
    const elemTag = document.createElement('span')
    elemTag.innerText = tag

    elemTags.appendChild(elemTag)
  })

  return elemTags
}

const createProject = (project, index) => {
  const elemProject = document.createElement('a')

  elemProject.href = project.link
  elemProject.target = '_blank'

  elemProject.dataset.aos = 'zoom-in-up'
  elemProject.dataset.aosDuration = '800'
  elemProject.dataset.aosEasing = 'ease-in-out'
  elemProject.dataset.aosOffset = '-100'

  const delay = (index % 3) * 150
  elemProject.dataset.aosDelay = delay

  elemProject.classList.add('project')

  elemProject.appendChild(createImage(project.image, project.name))
  elemProject.appendChild(createStrong(project.name))
  elemProject.appendChild(createTags(project.tags))

  return elemProject
}

const loadProjects = (projects) => {
  projects.forEach((project, index) => {
    elemProjects.appendChild(createProject(project, index))
  })

  AOS.refreshHard()
}


fetch('./projects.json').then(response => response.json()).then(loadProjects)