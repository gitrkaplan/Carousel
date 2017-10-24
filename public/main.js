/* global fetch */

const imageFetch = () => {
  return fetch('/carousel/images').then(res => res.json())
}

const images = imageFetch()
