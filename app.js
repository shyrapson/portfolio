const userDatas = [
    {img:"./images/html.svg",text:'HTML5'},
    {img:"./images/css.svg",text:'CSS3'},
    {img:"./images/sass.svg",text:'SASS'},
    {img:"./images/js.svg",text:'JAVASCRIPT'},
    {img:"./images/react.svg",text:'REACT'},
    {img:"./images/bootstrap.svg",text:'BOOTSTRAP'},
    {img:"",text:'TAILWIND'},
    {img:"./images/git.svg",text:'GIT'},
    {img:"./images/figma.svg",text:'FIGMA'}
]

// selectors
const using = document.querySelector('.using');
const toggle = document.querySelector('.toggle');
const links = document.querySelector('.links')
const forLinks = document.querySelectorAll('.links li')
const navBar = document.getElementById('nav')
const gotopLink = document.querySelector('.gotop-link')
const navHeader = document.querySelector('.nav-header')

forLinks.forEach((link,index)=>{
   link.addEventListener('click',()=>{
       let item = link.currentTarget
       console.log(item)
 
    })
})
toggle.addEventListener('click',()=>{
    links.classList.toggle('show-links')
})

const loadLang = () => {
 const user  = userDatas.map(data => {
       return `<div class='laguage'>
        <img src=${data.img} alt="">
         <h2>${data.text}</h2>
         </div>`
    }).join('')
   using.innerHTML = user
}
const callScroll = () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if(scrollHeight > navHeight) {
        navBar.classList.add('fixed-nav')
        navHeader.classList.add('fixed-header')
    } else {
        navBar.classList.remove('fixed-nav')
        navHeader.classList.remove('fixed-header')
        
        
    }
    if(scrollHeight > 500) {
        gotopLink.classList.add('show-arrow')
    } else {
        gotopLink.classList.remove('show-arrow')
    }
}
window.addEventListener('DOMContentLoaded',loadLang)
window.addEventListener('scroll',callScroll)
