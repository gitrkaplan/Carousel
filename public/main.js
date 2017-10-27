/* global fetch */

const imageFetch = () => {
  return fetch('/carousel/images').then(res => res.json())
}

const carousel = {
  slides: null,
  current: 0
}

const renderSlide = () => {
  document
    .querySelector('.image')
    .setAttribute('src', `${carousel.slides[carousel.current].url}`)
}

const progress = () => {
  const $progress = document.createElement('ul')

  const $steps = carousel.slides.map((slide, index) => {
    const $step = document.createElement('li')

    if (index === carousel.current) {
      $step.className = 'fa fa-circle fa-2x'
    } else {
      $step.className = 'fa fa-circle-o fa-2x'
    }

    return $step
  })

  return $steps.reduce((parent, child) => {
    parent.appendChild(child)
    return parent
  }, document.createElement('ul'))
}

const updateProgress = () => {
  const $progress = document.querySelector('.progress')
  $progress.innerHTML = ''
  $progress.appendChild(progress())
}

imageFetch()
  .then(documents => (carousel.slides = documents))
  .then(renderSlide)
  .then(updateProgress)

document.querySelector('#left').addEventListener('click', () => {
  console.log('left')
  if (carousel.current === 0) {
    carousel.current = carousel.slides.length - 1
    renderSlide()
    updateProgress()
  } else {
    carousel.current--
    renderSlide()
    updateProgress()
  }
})

document.querySelector('#right').addEventListener('click', () => {
  if (carousel.current === carousel.slides.length - 1) {
    carousel.current = 0
    renderSlide()
    updateProgress()
  } else {
    carousel.current++
    renderSlide()
    updateProgress()
  }
})

setInterval(() => {
  if (carousel.current < carousel.slides.length - 1) {
    carousel.current++
  } else {
    carousel.current = 0
  }
  renderSlide()
  updateProgress()
}, 4000)
