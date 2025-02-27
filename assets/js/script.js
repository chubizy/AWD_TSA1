document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#167a85', '#ead151', '#fc6c87', '#084a5e', '#eab76a',  '#aa4064', '#f7c254', '#f9827a', '#d43832', '#c9b25f'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.resume').style.backgroundColor = randomColor;
});

document.getElementById('whiteButton').addEventListener('click', function() {
    const colors = ['#ffffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.resume').style.backgroundColor = randomColor;
});