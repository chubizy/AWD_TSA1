document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#167a85', '#084a5e', '#f7c254', '#d43832'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.resume').style.backgroundColor = randomColor;
});

document.getElementById('whiteButton').addEventListener('click', function() {
    const colors = ['#ffffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.resume').style.backgroundColor = randomColor;
});