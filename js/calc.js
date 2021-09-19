const price = 18900;
const step1 = document.getElementById('step1');
const calc1 = document.querySelectorAll('.calc1');
const itog = document.getElementById('itog')
let windowCount = 0;

let width1 = '';
let height1 = '';
let diagonal1 = '';

//вычисления перого окна
for(let window1 of calc1){
    window1.addEventListener('keyup', (e)=>{
        let target = e.target

        if(target.getAttribute('name') == 'width1'){
            width1 = window1.value;
        }
        if(target.getAttribute('name') == 'height1'){
            height1 = window1.value;
        }
        if(target.getAttribute('name') == 'diagonal1'){
            diagonal1 = window1.value;
        }

        if(width1 && height1 && diagonal1){
            let d = Math.sqrt(width1**2 + height1**2)
            let dValue = diagonal1 - d;
            step1.querySelector('.form-error1').classList.add('d-none');
            if(Math.abs(dValue) > 2){
                step1.querySelector('.form-error1').classList.add('d-none');
                step1.querySelector('.form-error2').classList.remove('d-none');
                itog.innerHTML = 0;
            }
            else{
                windowCount = 1;
                itog.innerHTML = price * windowCount;
            }

        }
        else{
            step1.querySelector('.form-error1').classList.remove('d-none');
            step1.querySelector('.form-error2').classList.add('d-none');
            itog.innerHTML = 0;
        }
    })
}


// User
const orderCity = document.getElementById('order-city');
const users = document.querySelectorAll('.user');
let city = '';
let phone = '';
let adress = '';
for(let user of users){

    user.addEventListener('keyup', (e)=>{
        let target = e.target

        if(target.getAttribute('name') == 'phone'){
            phone = user.value;
        }
        if(target.getAttribute('name') == 'adress'){
            adress = user.value;
        }

        if(orderCity.value && phone && adress && itog.innerText > 0){
            orderBtn.classList.remove('disabled');
        }
        else{
            orderBtn.classList.add('disabled');
        }
    })
}

const orderBtn = document.getElementById('order-btn');

orderBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let summa = +itog.innerText
    pay(summa)
})






