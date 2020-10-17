function loop() {
    const text = document.querySelector('.color');
    const strTxt = text.textContent;
    const splitText = strTxt.split("");
    text.textContent = "";
    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span class='split'>" + splitText[i] + "</span>"; 
    }
    let char = 0;
    let timer = setInterval(colorAni,50);

    function colorAni(){
        const span = text.querySelectorAll('span')[char];
        span.classList.add('add');
        char++;
        if (char === splitText.length) {
            finish();
            return;
        }
    }
    function finish() {
        clearInterval(timer);
        timer=null;
    }
}