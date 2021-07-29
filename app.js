const toggleBar = ()=>{
 const burger = document.querySelector('.burger-icon')
 const navbar = document.querySelector('.head-menu-items')
 burger.addEventListener('click', ()=>{
  navbar.classList.toggle('active')
 })
}
toggleBar()