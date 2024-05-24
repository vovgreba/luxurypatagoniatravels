const tabs = document.querySelector('.tabs');
let tabsButtons = null;
let tabsPanels = null;
let tabIdFromUrl = window.location.hash.substring(1);

if(tabs) {
  tabsButtons = Array.from(tabs.querySelectorAll('[role="tab"]'));
  tabsPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));
  if(tabIdFromUrl) {
    tabsButtons.forEach(button => {
      if(button.id === tabIdFromUrl) {
        handleClick(button, tabIdFromUrl)
      }
    })
  }
}

if (tabsButtons) tabsButtons.forEach(button => button.addEventListener('click', handleClick))

function handleClick(ev, tabIdFromUrl) {

  tabsPanels.forEach(el => {
    el.hidden = true;
  })

  tabsButtons.forEach(button => {
    button.setAttribute('aria-selected', 'false')
  })

  if(tabIdFromUrl) {
    console.log(tabIdFromUrl)
    console.log(ev)

    ev.setAttribute('aria-selected', 'true')

    const tabPanel = tabsPanels.find(elem => {
      if(tabIdFromUrl === elem.getAttribute('aria-labelledby')) {
        return true
      }
    })
    tabPanel.hidden = false;
    window.location.hash = '';

  } else {

    ev.currentTarget.setAttribute('aria-selected', 'true')

    const {id} = ev.currentTarget

    const tabPanel = tabsPanels.find(elem => {
      if(id === elem.getAttribute('aria-labelledby')) {
        return true
      }
    })

    tabPanel.hidden = false;
  }

}






