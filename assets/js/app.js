const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const filterTypes = $$('.menu__type')
const cards = $$('.menu__food')

const optionField = $('.book__option-field')
const optionText = $('.book__option-field span')
const optionList = $('.book__option-list')
const optionItems = $$('.book__option-item')
const arrow = $('.book__option-icon')

const menuBtn = $('.header__menu-btn')
const menu = $('.header__menu')
const overlay = $('.header__overlay')
const closeBtn = $('.header__close-btn')

const navbar = $('.header__nav')

const navItems = $$('.header__item')
const navMenuItems = $$('.header__menu-item')

const inputDate = $('.book__input-date')
const inputTime = $('.book__input-time')



// filter food
function filterFood() {
    filterTypes.forEach((type) => {

        // active
        type.onclick = () => {
            $('.menu__type.menu__type--active').classList.remove('menu__type--active')
            type.classList.add('menu__type--active')
    
            // filter 
            const typeName = type.innerText
    
            cards.forEach((card) => {
                card.style.display = 'none'
    
                // data-food == typeName 
                if(card.dataset.food == typeName.toLowerCase() || typeName == 'All') {
                    card.style.display = 'block'
                }
            })
        }
        
    })
}

// select 
function select() {

    optionField.onclick = () => {
        optionList.classList.toggle('open')
        arrow.classList.toggle('rotate')
    }

    optionItems.forEach(function (optionItem, index) {
        optionItem.onclick = function() {
            optionText.innerText = optionItem.innerText
            optionList.classList.remove('open')
        }  
    })
    
}

// Open menu 
function openMenu() {
    // open
    menuBtn.onclick = function() {
        menu.classList.add('open-menu')
    
        setTimeout(() => {
            overlay.style.display = 'block'
        }, 270)
    }

    // close by X
    closeBtn.onclick = function() {
        menu.classList.remove('open-menu')
        setTimeout(() => {
            overlay.style.display = 'none'
        }, 270)
    }

    // close by overlay
    overlay.onclick = function() {
        menu.classList.remove('open-menu')
        setTimeout(() => {
            overlay.style.display = 'none'
        }, 270)
    }
}

// Sticky navbar scroll 
function scrollNavbar() {
    document.onscroll = function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop

        if (scrollTop > 500) {
            navbar.classList.add('fixed-nav')
        } else {
            navbar.classList.remove('fixed-nav')

        }
    }
}

function activeCurrentSection() {
    navItems.forEach((navItem) => {
        navItem.onclick = function () {
            $('.header__item.header__item--active').classList.remove('header__item--active')

            navItem.classList.add('header__item--active')
        }
    })

    navMenuItems.forEach((navMenuItem) => {
        navMenuItem.onclick = function () {
            $('.header__menu-item.header__item--active').classList.remove('header__item--active')
            navMenuItem.classList.add('header__item--active')

            menu.classList.remove('open-menu')
            overlay.style.display = 'none'
        }
    })
}

function setCurrentTime() {
    let date = new Date()
    let currentDate = date.toISOString().slice(0, 10) // lấy ngày và cắt chuỗi
    let currentTime = date.toISOString().slice(11, 16)
    window.onload = function () {
        inputDate.value = currentDate
        inputTime.value = currentTime
    }

}

function start() {
    filterFood()
    select()
    openMenu()
    scrollNavbar()
    activeCurrentSection()
    setCurrentTime()
}

start()
