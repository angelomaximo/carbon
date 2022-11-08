/* 
--Ov = Overview.
--Put elements wrapped in a container, so you can modify
  the container's innerHTML.
--The inputs in the editor shall be used as setters. setContent(contentInp);
*/

// ELEMENTS \\
import { Element,
  Div, Img, Paragraph,
  Header, Hr, Input,
  Anchor, Button, Span,
  Iframe, Nav, List } from "./elements.js" 

const frame = document.getElementById('frame');
const overview = document.getElementById('overview');
const viewBtn = document.getElementById('viewBtn');

viewBtn.addEventListener('click', (e) => {
  console.log(frame);
});

// editor => 1. put the id (getelementByid). Change this element class object with setter.
// if btnInp == 'alert', then class tag is div and the class is 'alert alert-primary'. If else chain to avoid putting every component EventListener. Receive a data when the user clicks an not  event listiner


const generateElement = (elementType, containerId, id, cl, style, content) => {
  let x;

  if (elementType == 'button') {
    // Generate the default element
    x = new Button(containerId, id, cl, style, content);
    // Put inside frame
    frame.innerHTML += x.getButton();
    // Generate the overview. The id of the overview will be with the id generator
    overview.innerHTML += `<button id="${x.getId()}-edit" class="btn text-white">${x.getId()}</button>`
  } else if (elementType == 'paragraph') {
    x = new Paragraph(containerId, id, cl, style, content);
    frame.innerHTML += x.getParagraph();
    overview.innerHTML += `<button id="${x.getId()}-edit" class="btn text-white">${x.getId()}</button>`
  }

  return x;
}

function callEditor(id) {

  // set editor field
  const fieldset = document.getElementById('fieldset');
  return fieldset.innerHTML = (`
  <legend>#${id}</legend>
  <label>Class:</label>
  <input id="cl" class="form-control" type="text">
  <br>
  <label>Style</label>
  <input id="style" class="form-control" type="text">
  <br>
  <label>Content:</label>
  <input id="content" class="form-control" type="text">
  `);
}

let containerIdCounter = 0;
let btnIdCounter = 0;
let paragraphIdCounter = 0;
function generateId(elementType) {
  let id;

  if (elementType == 'container') {
    id = `container${containerIdCounter}`
    containerIdCounter++
    return id;
  } else if(elementType == 'button') {
    id = `myBtn${btnIdCounter}`
    btnIdCounter++ // update the counter
    return id;
  } else if (elementType == 'paragraph') {
    id = `myParagraph${paragraphIdCounter}`
    paragraphIdCounter++
    return id;
  }
}

let globalId = 'nothing';//change this ID when you click in OW 
let globalElem = 'none';
let globalContainerId = 'nothing'
// console.log(globalId);
// setTimeout(() => console.log(globalId), 5000)

const button = document.getElementById('button');
button.addEventListener('click', (e) => {
  const x = generateElement('button', generateId('container'), generateId('button'), 'btn btn-primary', '', 'Button');

  // Get the generated element DOM. 
  const overviewElem = document.getElementById(`${x.getId()}-edit`);
  // Add an event listner to the Ov to generete the form field
  overviewElem.addEventListener('click', (e) => {

    callEditor(x.getId());

    // change the global variable
    globalId = x.getId();
    globalContainerId = x.getContainerId();
    globalElem = 'button';
    console.log(globalId);
  })
})

const paragraph = document.getElementById('paragraph');
paragraph.addEventListener('click', (e) => {
  const x = generateElement('paragraph', generateId('container'), generateId('paragraph'), '', '', 'Lorem Ipsum')

  // Get the generated element DOM. 
  const overviewElem = document.getElementById(`${x.getId()}-edit`);
  // Add an event listner to the Ov to generete the form field
  overviewElem.addEventListener('click', (e) => {

    callEditor(x.getId());

    // change the global variable
    globalId = x.getId();
    globalContainerId = x.getContainerId();
    globalElem = 'paragraph';
    console.log(globalId);
  })
})



const editorForm = document.getElementById('editorForm');
editorForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const cl = document.getElementById('cl').value;
  const style = document.getElementById('style').value;
  const content = document.getElementById('content').value;

  let elemContainer = document.getElementById(globalContainerId); 
  let element = document.getElementById(globalId);//need pick any selected elem. | A data with the ID name should be send here.

  if (globalElem == 'button') {
    element = new Button(globalContainerId, globalId, cl, style, content);// new Element type
    elemContainer.innerHTML = element.getButton();// getElemType  
  } else if (globalElem == 'paragraph') {
    element = new Paragraph(globalContainerId, globalId, cl, style, content);
    elemContainer.innerHTML = element.getParagraph();
  }
})


// [ ] Change the Class declaration to the elem that should be created
// [ ] change the getName routine to get the Element necessary. 

// I click the elem btn and then it generate the editor html with his id. And also i get his dom. 

