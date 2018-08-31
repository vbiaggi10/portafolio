const navbar = document.querySelector('#navbarNav');
const collapseNav = document.querySelector('#collapseNav');
const closeNavbar = document.querySelector('#closeNavbar');

navbar.addEventListener('click', () =>{
    collapseNav.style.display = 'block';
})
closeNavbar.addEventListener('click', () =>{
  collapseNav.style.display = 'none';
})