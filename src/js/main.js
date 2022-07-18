const navbar = document.querySelector('.navbar');
const btnNavbar = document.querySelector('#menu-btn');

const searchForm = document.querySelector('.search-form');
const bntSearch = document.querySelector('#search-btn');

btnNavbar.addEventListener('click', () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
})

bntSearch.addEventListener('click', () => {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
})

window.onscroll = () => {
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
}