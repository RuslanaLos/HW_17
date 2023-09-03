document.getElementById('inputLink').addEventListener('click', textingForLink);
document.getElementById('followTheLink').addEventListener('click', redirectToLink);

let linkByUser;

function textingForLink() {
    linkByUser = prompt('Введіть посилання');
    while (linkByUser === '') {
        linkByUser = prompt('Введіть посилання');
    }
    if (linkByUser && !linkByUser.startsWith('http://') && !linkByUser.startsWith('https://')) {
        linkByUser = `https://${linkByUser}`;
    }
}

function redirectToLink() {
    if (linkByUser) {
        window.location.href = linkByUser;
    }
}