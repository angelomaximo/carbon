// :: SECTION ::
import { basicThemes } from "./sectionThemes.js";
// :: COMPONENTS ::
import { bootstrap } from "./components.js"
// :: ELEMENTS :: 
import { Div, Iframe } from "./elements.js" 


const frame = document.getElementById('frame');
const viewBtn = document.getElementById('viewBtn');

viewBtn.addEventListener('click', (e) => {
  console.log(frame);
})

const alertBtn = document.getElementById('alertBtn');
const breadcrumbBtn = document.getElementById('breadcrumbBtn');
const buttonBtn = document.getElementById('buttonBtn');
const navbarBtn = document.getElementById('navbarBtn');
const cardBtn = document.getElementById('cardBtn');
const dropdownBtn = document.getElementById('dropdownBtn');



breadcrumbBtn.addEventListener('click', (e) => {
  let x = bootstrap.components.breadcrumb.getBreadcrumb3();
  frame.innerHTML += x;
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


// => THE EDITOR IS THE SETTER.

// editor => 1. put the id (getelementByid). Change this element class object with setter.
// if btnInp == 'alert', then class tag is div and the class is 'alert alert-primary'. If else chain to avoid putting every component EventListener. Receive a data when the user clicks an not  event listiner
const editorForm = document.getElementById('editorForm');
editorForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const content = document.getElementById('content').value;
  const style = document.getElementById('style').value;

  let x = new Element('div', '', 'alert alert-primary', style, content);

  // x.setContent(content);
  // x.setStyle(style);

  frame.innerHTML = x.getElement();
})


alertBtn.addEventListener('click', (e) => {
  let x = new Element('div', '', 'alert alert-primary', null, 'Default text');

  frame.innerHTML += x.getElement();
})


function putInFrame(thing) {
  return frame.innerHTML = thing;
}



const p = new Iframe('myP', 'embed-resposive-item', 'padding: 16px; border-radius: 36px; height: 300px; width: 500px;', 'Some title','https://www.youtube.com/embed/kjoldYi7eH0')
console.log(p);

putInFrame(p.getIframe());




const navbarBasicBtn = document.getElementById('navbarBasicBtn');
const heroBasicBtn = document.getElementById('heroBasicBtn');
const featuresBasicBtn = document.getElementById('featuresBasicBtn');
const testimonialBasicBtn = document.getElementById('testimonialBasicBtn');
const calltoactionBasicBtn = document.getElementById('calltoactionBasicBtn');
const footerBasicBtn = document.getElementById('footerBasicBtn');

navbarBasicBtn.addEventListener('click', (e) => {
  // parameters: 
  // logoSrc, brandName, firstItem, secondItem, thirdItem, buttonText
  let x = basicThemes.getNavbarBasic('./img/maxston-logo.png');
  frame.innerHTML += x;
})

heroBasicBtn.addEventListener('click', (e) => {
  // parameters:
  // 
  let x = basicThemes.getHeroBasic();
  frame.innerHTML += x;
})

featuresBasicBtn.addEventListener('click', (e) => {
  let x = basicThemes.getFeaturesBasic();
  frame.innerHTML += x;
})

testimonialBasicBtn.addEventListener('click', (e) => {
  let x = basicThemes.getTestimonialBasic();
  frame.innerHTML += x;
})

calltoactionBasicBtn.addEventListener('click', (e) => {
  let x = basicThemes.getCalltoActionBasic();
  frame.innerHTML += x;
})

footerBasicBtn.addEventListener('click', (e) => {
  let x = basicThemes.getFooterBasic();
  frame.innerHTML += x;
})


const navbarBasicForm = document.getElementById('navbarBasicForm');
navbarBasicForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // parameters: 
  // logoSrc, brandName, firstItem, secondItem, thirdItem, buttonText

  const navbarLogo = document.getElementById('navbarLogo').value;
  const navbarBrandname = document.getElementById('navbarBrandname').value;
  const navbarFirstItem = document.getElementById('navbarFirstItem').value;
  const navbarSecondItem = document.getElementById('navbarSecondItem').value;
  const navbarThirdItem = document.getElementById('navbarThirdItem').value;
  const navbarBtnTxt = document.getElementById('navbarBtnTxt').value;

  let x = basicThemes.getNavbarBasic(navbarLogo, navbarBrandname,
    navbarFirstItem, navbarSecondItem, navbarThirdItem,
    navbarBtnTxt);
  
  frame.innerHTML += x;
});

const heroBasicForm = document.getElementById('heroBasicForm');
heroBasicForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // parameters: 
  // logoSrc, brandName, firstItem, secondItem, thirdItem, buttonText

  const heroHeadline = document.getElementById('heroHeadline').value;
  const heroSubHeadline = document.getElementById('heroSubHeadline').value;
  const btnTxt1 = document.getElementById('btnTxt1').value;
  const btnTxt2 = document.getElementById('btnTxt2').value;

  let x = basicThemes.getHeroBasic(heroHeadline, heroSubHeadline,
    btnTxt1, btnTxt2);
  
  frame.innerHTML += x;
});