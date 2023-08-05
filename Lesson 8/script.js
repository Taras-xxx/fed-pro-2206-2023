window.onload = function(){
    let menuBtn = document.querySelector('.menu-control');
    let menu = document.querySelector('.menu');

    menuBtn.onclick = function() {
        menuBtn.classList.toggle('close-menu');
        menu.classList.toggle('hide');
    };

    let btnGrow = document.querySelector('.grow');
    btnGrow.onclick = function(){
        let btnStyle = getComputedStyle(btnGrow);
        console.log(btnStyle.fontSize);
        let fontSize = parseFloat(btnStyle.fontSize);
        let newSize = fontSize + 10;

        btnGrow.style.fontSize = `${newSize}px`;
    }
};