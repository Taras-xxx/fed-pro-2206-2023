window.onload = function(){
    let btn = document.querySelector('.btn-danger');
    let inputEl = document.querySelector('input');
    let resultEl = document.querySelector('.result');

    function randomColor(){
        let hue = Math.floor(Math.random() * 360);
        let saturation = Math.floor(Math.random() * 100);
        let light = Math.floor(Math.random() * 100);
        return `hsl(${hue},${saturation}%, ${light}%)`;
    }
    function createDiv(value, Isborder){
        let div = document.createElement('div');
        div.style.height = '50px';
        div.style.width = '50px';
        div.style.textAlign = 'center';
        div.innerHTML = value;
        div.style.backgroundColor = randomColor();
        if(Isborder){
            div.style.border = '1px solid black';
        }
        return div;
    }
    btn.addEventListener('click', function(){
        let [...createdElement] = document.querySelectorAll('.result div');
        if(createdElement.length > 0){
            console.log(1);
            createdElement.forEach(item=>{
                resultEl.removeChild(item);
            });
        }
        if(inputEl.value.length >0){
            let count = Number(inputEl.value);
            for(let i = 0; i < count; i++){
                let el = createDiv(i+1);
                resultEl.appendChild(el);
            }
            inputEl.value = "";
        }
    });
}