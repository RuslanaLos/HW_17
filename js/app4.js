const imageByRandom = document.getElementById('randomImage');
const buttonOfChange = document.getElementById('changeImage');
const amountOfImages = 9;
function getNumberOfImg() {
    return Math.floor(Math.random() * amountOfImages) + 1;
}

function changeRandomImage() {
    let randomNum = getNumberOfImg();
    imageByRandom.src  = `images/${randomNum}.jpeg`;
}
buttonOfChange.addEventListener('click', changeRandomImage);
changeRandomImage();


