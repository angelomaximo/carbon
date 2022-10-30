const frame = document.getElementById('frame');
const editor = document.getElementById('editor');
const fieldset = document.getElementById('fieldset');
const btn = document.getElementById('btn');


btn.addEventListener('click', (e) => {
    frame.innerHTML += `<button id="myBtn" class="btn btn-primary">Click here</button>`;

    const myBtn = document.getElementById('myBtn');
    myBtn.addEventListener('click', (e) => {
        fieldset.innerHTML = (`
        <legend>id</legend>
        <label>Content:</label>
        <input id="content" class="form-control" type="text">
        <br>
        <label>Style</label>
        <input id="style" class="form-control" type="text">
        `)
    })
})


