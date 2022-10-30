// :: ELEMENTS :: 
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

// => THE EDITOR IS THE SETTER.

// editor => 1. put the id (getelementByid). Change this element class object with setter.
// if btnInp == 'alert', then class tag is div and the class is 'alert alert-primary'. If else chain to avoid putting every component EventListener. Receive a data when the user clicks an not  event listiner

// function putInFrame(thing) {
//   return frame.innerHTML += thing;
// }

let globalID = 'nothing';//change this ID when you click in OW 
let globalElem = 'none';
console.log(globalID);
setTimeout(() => console.log(globalID), 5000)

const button = document.getElementById('button');
button.addEventListener('click', (e) => {
  // Generate the default element
  let x = new Button('myBtn', 'btn btn-primary', '', 'Button')
  // Put inside frame
  frame.innerHTML += x.getButton();
  // Generate the overview. The id of the overview will be with the id generator
  overview.innerHTML += `<button id="${x.getId()}-edit" class="btn text-white">${x.getId()}</button>`
  // Get the generated element DOM. 
   // Add an event listner to the ow to generete the form field
  const elem = document.getElementById(`${x.getId()}-edit`);
  elem.addEventListener('click', (e) => {
    const fieldset = document.getElementById('fieldset');

    fieldset.innerHTML = (`
    <legend>#${x.getId()}</legend>
    <label>Class:</label>
    <input id="cl" class="form-control" type="text">
    <br>
    <label>Style</label>
    <input id="style" class="form-control" type="text">
    <br>
    <label>Content:</label>
    <input id="content" class="form-control" type="text">
    `);

    // change the global variable
    globalID = x.getId();
    globalElem = 'button';
    console.log(globalID);
  })
})

const paragraph = document.getElementById('paragraph');
paragraph.addEventListener('click', (e) => {
  // Generate the default element
  let x = new Paragraph('myParagraph', '', '', 'Lorem Ipsum')
  // Put inside frame
  frame.innerHTML += x.getParagraph();
  // Generate the overview. The id of the overview will be with the id generator
  overview.innerHTML += `<button id="${x.getId()}-edit" class="btn text-white">${x.getId()}</button>`
  // Get the generated element DOM. 
   // Add an event listner to the ow to generete the form field
  const elem = document.getElementById(`${x.getId()}-edit`);
  elem.addEventListener('click', (e) => {
    const fieldset = document.getElementById('fieldset');

    fieldset.innerHTML = (`
    <legend>#${x.getId()}</legend>
    <label>Class:</label>
    <input id="cl" class="form-control" type="text">
    <br>
    <label>Style</label>
    <input id="style" class="form-control" type="text">
    <br>
    <label>Content:</label>
    <input id="content" class="form-control" type="text">
    `);

    // change the global variable
    globalID = x.getId();
    globalElem = 'paragraph';
    console.log(globalID);
  })
})


const editorForm = document.getElementById('editorForm');
editorForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const cl = document.getElementById('cl').value;
  const style = document.getElementById('style').value;
  const content = document.getElementById('content').value;

  let element = document.getElementById(globalID);//need pick any selected elem. | A data with the ID name should be send here.
  
  if (globalElem == 'button') {
    element = new Button(globalID, cl, style, content);// new Element type
    frame.innerHTML += element.getButton();// getElemType  
    console.log(frame.innerHTML);
  } else if (globalElem == 'paragraph') {
    element = new Paragraph(globalID, cl, style, content);
    frame.innerHTML += element.getParagraph();
  }
})
// what matters is the edit id and the generated button id. 

// [ ] Change the Class declaration to the elem that should be created
// [ ] change the getName routine to get the Element necessary. 



// I click the elem btn and then it generate the editor html with his id. And also i get his dom. 