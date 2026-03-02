const headerElement = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'
const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const logo = document.createElement('img')
logo.src = "/icon.png"
logo.className = "logo"
const headerTitle = document.createElement('h1')
headerTitle.textContent = "NAS Master"
headerLeft.appendChild(logo)
headerLeft.appendChild(headerTitle)

const button = document.createElement('button')
button.textContent = "Home"
button.addEventListener("click", () => {
  window.location = '/'
})
headerRight.appendChild(button)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)
headerElement.appendChild(headerContainer)