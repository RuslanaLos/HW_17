const imageByRandom = document.getElementById('randomImage');
const buttonOfChange = document.getElementById('changeImage');
let imagesArr = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg'];
function getNumberOfImg() {
    return Math.floor(Math.random() * imagesArr.length);
}

function changeRandomImage() {
    let randomNum = getNumberOfImg();
    let imgName = imagesArr[randomNum];
    imageByRandom.src  = `images/${imgName}`;
}
buttonOfChange.addEventListener('click', changeRandomImage);
changeRandomImage();


