//switch function

const switchTheme = () => {
    //Get root elementv and data theme value
    const rootElem = document.documentElement
    let dtatTheme = rootElem.getAttribute('data-theme'),
       newTheme
    newTheme = (dtatTheme === 'light') ? 'dark' : 'light'

    //Set new HTML Attribute
    rootElem.setAttribute('data-theme', newTheme )
}

//Add event listener for the theme switcher
document.querySelector('#theme-switcher').addEventListener('click,switchTheme')