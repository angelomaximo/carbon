// :: COMPONENTS ::
import { bootstrap } from "./components.js"

const alertBtn = document.getElementById('alertBtn');
const breadcrumbBtn = document.getElementById('breadcrumbBtn');
const buttonBtn = document.getElementById('buttonBtn');
const navbarBtn = document.getElementById('navbarBtn');
const cardBtn = document.getElementById('cardBtn');
const dropdownBtn = document.getElementById('dropdownBtn');

function putInFrame(thing) {
    return frame.innerHTML += thing;
}
  

const breadcrumb = bootstrap.components.breadcrumb.getBreadcrumb3();

breadcrumbBtn.addEventListener('click', (e) => {
  putInFrame(breadcrumb);
})

buttonBtn.addEventListener('click', (e) => {
  let x = bootstrap.components.button.getButtonPrimary('Insira o texto');
  frame.innerHTML += x;
})

navbarBtn.addEventListener('click', (e) => {
  let x = bootstrap.components.navbar.getNavBar();
  frame.innerHTML += x;
})

cardBtn.addEventListener('click', (e) => {
  let x = bootstrap.components.card.getCard('./img/amazon.jpeg', 'Insert Title', 'Insert text', 'Read more');
  frame.innerHTML += x;
})

dropdownBtn.addEventListener('click', (e) => {
  let x = bootstrap.components.dropdown.getDropdown('Dropdown button', 'Option 1', 'Option 2', 'Option 3');
  frame.innerHTML += x;
})