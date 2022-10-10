const addSection = document.getElementById('addSection');
const addElement = document.getElementById('addElement');

const main = document.getElementById('main');

addSection.addEventListener('click', (e) => {
    let sectionTxt = `<div id="sec" class="section"></div>`;
    console.log(sectionTxt);
    main.innerHTML = sectionTxt;
})


addElement.addEventListener('click', (e) => {
    const sec = document.getElementById('sec');

    let elementHTML = `<label class="element">Preferred*: <input class="element" type="text" placeholder="enter"></label>`;
    console.log(elementHTML);
    sec.innerHTML = elementHTML;
})