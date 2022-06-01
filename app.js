// constants
const initialName = 'Bob';

// grab DOM elements
const nameInput = document.getElementById('name-input');
const pronounInput = document.getElementById('pronoun-input');
const nameDisplay = document.getElementById('name-display');
const colorInput = document.getElementById('color-input');
const nameTagDisplay = document.getElementById('name-tag');

// set the display's initial content
nameDisplay.textContent = initialName;

function onInputChanged() {
    let name = nameInput.value || initialName;
    let pronoun = pronounInput.value;
    if (pronoun) { pronoun = `(${pronoun})`; }


    nameDisplay.textContent = `${name} ${pronoun}`;
}

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
nameInput.addEventListener('input', onInputChanged);
pronounInput.addEventListener('input', onInputChanged);

colorInput.addEventListener('input', () => {
    const color = colorInput.value;
    nameTagDisplay.style.backgroundColor = color;
});