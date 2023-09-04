const buttonOfChange = document.getElementById('changeImage');
const containerForImage = document.querySelector('.image_container');
const amountOfImages = 9;
function getNumberOfImg() {
    return Math.floor(Math.random() * amountOfImages) + 1;
}

function changeRandomImage() {
    let randomNum = getNumberOfImg();
    const imgForUser = document.createElement('img');
    imgForUser.src  = `images/${randomNum}.jpeg`;

    containerForImage.innerHTML = '';
    containerForImage.appendChild(imgForUser);
}
buttonOfChange.addEventListener('click', changeRandomImage);
changeRandomImage();


