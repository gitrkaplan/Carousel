/* global fetch */

const imageFetch = () => {
  return fetch('/carousel/images').then(res => res.json())
}

const carousel = {
  slides: null,
  current: 0
}

imageFetch().then(documents => (carousel.slides = documents)

setInterval(function() {
  document
    .querySelector('.image')
    .setAttribute('src', `${carousel.slides[carousel.current].url}`)
  if (carousel.current < carousel.slides.length - 1) {
    carousel.current++
  } else {
    carousel.current = 0
  }
}, 4000)
