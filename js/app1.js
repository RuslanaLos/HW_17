const myTextField = document.getElementById('textField');
const myInfoBlock = document.getElementById('infoBlock');

myTextField.addEventListener('focus', () => {
    myInfoBlock.style.display = 'block';
})

myTextField.addEventListener('blur', () => {
    myInfoBlock.style.display = 'none';
})
