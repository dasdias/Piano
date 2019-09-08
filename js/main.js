document.addEventListener('keydown', function (event) {
    let whiteKeyPress = document.querySelector('li[data-key="' + event.which + '"]');
    let BlackKeyPress = document.querySelector('div[data-key="' + event.which +'"]');
    let keyPress = event.which;
    console.log(keyPress);
    if (whiteKeyPress) {
        whiteKeyPress.classList.toggle('white-active');
    }
    if (BlackKeyPress) {
        BlackKeyPress.classList.toggle('black-active');
    }
   
})

document.addEventListener('keyup', function (event) {
    let whiteKeyPress = document.querySelector('li[data-key="' + event.which + '"]');
    let BlackKeyPress = document.querySelector('div[data-key="' + event.which + '"]');
    if (whiteKeyPress) {
        whiteKeyPress.classList.toggle('white-active');
    }
    if (BlackKeyPress) {
        BlackKeyPress.classList.toggle('black-active');
    }
})
