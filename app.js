// constants
const initialName = 'Bob';

// grab DOM elements
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
const colorInput = document.getElementById('color-input');
const nameTagDisplay = document.getElementById('name-tag');

// set the display's initial content
nameDisplay.textContent = initialName;

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
nameInput.addEventListener('input', () =>{
    let name = nameInput.value;
    if (name === '') {
        name = initialName;
    }
    nameDisplay.textContent = name;
});

colorInput.addEventListener('input', () => {
    const color = colorInput.value;
    nameTagDisplay.style.backgroundColor = color;
});