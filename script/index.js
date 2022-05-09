(function(){
  'use strict'

  const card = document.querySelector(`.card`)
  const cardBg = document.querySelector(`.card-bg`)
  const cardThemes = [`card-bg--type-1`, `card-bg--type-2`, `card-bg--type-3`]
  const cardColors = document.querySelectorAll(`.card-themes a`)
  
  function init() {
    bindEvents()
  }

  function bindEvents() {
    cardColors.forEach(cardColor => {
      cardColor.addEventListener('click', (event) => {
        let type = event.currentTarget.getAttribute(`data-type`)
        
        removeTheme()
        addTheme(type)
        
        setTimeout(() => {
          card.classList.remove(...cardThemes)
          card.classList.add(`card-bg--type-${type}`)
          cardBg.classList.remove(`card-bg--animation`)
        }, 1000 * 0.5);
      })
    })

  }

  function removeTheme() {
    cardBg.classList.remove(...cardThemes)
  }

  function addTheme(type) {
    cardBg.classList.add(`card-bg--animation`, `card-bg--type-${type}`)
  }

  init()

})();