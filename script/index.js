(function(){
  'use strict'

  const card = document.querySelector(`.card`)
  const cardThemes = [`card-bg--type-1`, `card-bg--type-2`, `card-bg--type-3`]
  const cardColors = document.querySelectorAll(`.card-themes a`)
  
  function init() {
    bindEvents()
  }

  function bindEvents() {
    cardColors.forEach(cardColor => {
      cardColor.addEventListener('click', (event) => {
        let target = event.currentTarget 
        let type = target.getAttribute(`data-type`)
        
        removeDefaultClassFromCard()
        card.classList.add(`card-bg--type-${type}`)
      })
    })
  }

  function removeDefaultClassFromCard() {
    card.classList.remove(...cardThemes)
  }

  init()

})();