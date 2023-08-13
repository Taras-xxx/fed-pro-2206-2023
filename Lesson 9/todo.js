window.onload = function(){
    let btn = document.querySelector('.btn-danger');
    let inputEl = document.querySelector('input');
    let resultEl = document.querySelector('.list-group');
    let form = document.querySelector('form');
    function createDiv(value){
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        let date = new Date().toDateString();
        li.innerHTML = `<strong>${date}</strong> ${value}`;
        return li;
    }
    form.addEventListener('submit', function(e){
        e.preventDefault();
        if(inputEl.value.length === 0){
            inputEl.classList.add('bg-danger');
        }
        else{
            resultEl.appendChild(createDiv(inputEl.value));
            inputEl.value = '';
            if(inputEl.classList.contains('bg-danger')){
                inputEl.classList.remove('bg-danger');
            }
        }
    });
    resultEl.addEventListener('click', function(e){
        this.removeChild(e.target);
    });
}