function clickHamburger() {
    const dropdown = document.querySelector('dropdown')

    if (dropdown.classList.contains('hide')) {
        dropdown.classList.remove('hide')
    } else {
        dropdown.classList.add('hide')
    }
}

function removeMenu() {
    const dropdown = document.getElementById('dropdown')
    if (!dropdown.classList.contains('hide')) {
        dropdown.classList.add('hide')
    }
}

function makeTransparent() {
    removeMenu()
    const header = document.getElementById('headerBar')

    if (header.classList.contains('goClear')) {
        header.classList.remove('goClear')
    } else {
        header.classList.add('goClear')
    }

}