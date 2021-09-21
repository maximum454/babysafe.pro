const price = 18900;
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const step4 = document.getElementById('step4');
const step5 = document.getElementById('step5');
const itog = document.getElementById('itog')
let windowCount = 0;



//вычисления перого окна
let width1 = 0;
let height1 = 0;
let diagonal1 = 0;
step1.addEventListener('keyup',  (e)=>{
        let target = e.target;
        target.setAttribute('value', target.value);
        if(target.getAttribute('name') == 'steps[1][width]'){
            width1 = target.value;

            console.log(width1)
        }
        else if(target.getAttribute('name') == 'steps[1][height]'){
            height1 = target.value;
        }
        else if(target.getAttribute('name') == 'steps[1][diagonal]'){
            diagonal1 = target.value;
        }

        if(width1 && height1 && diagonal1){
            let dValue = calculateDiagonal(width1,height1,diagonal1);
            target.closest('.step').querySelector('.form-error1').classList.add('d-none');
            if(Math.abs(dValue) > 2){
                target.closest('.step').querySelector('.btn-more').classList.add('d-none');
                target.closest('.step').querySelector('.form-error1').classList.add('d-none');
                target.closest('.step').querySelector('.form-error2').classList.remove('d-none');
                calculatePrice(price, 0)

            }
            else{
                target.closest('.step').querySelector('.btn-more').classList.remove('d-none')
                windowCount = target.closest('.step').getAttribute('data-count');
                calculatePrice(price, windowCount)

            }

        }
        else{
            target.closest('.step').querySelector('.form-error1').classList.remove('d-none');
            target.closest('.step').querySelector('.form-error2').classList.add('d-none');
            calculatePrice(price, 0)
        }
    })
step1.querySelector('.btn-more').addEventListener('click', (e)=> {
    step2.classList.remove('d-none');
})

//вычисления второго окна
let width2 = 0;
let height2 = 0;
let diagonal2 = 0;
step2.addEventListener('keyup',  (e)=>{
    let target = e.target
    target.setAttribute('value', target.value);
    if(target.getAttribute('name') == 'steps[2][width]'){
        width2 = target.value;
    }
    else if(target.getAttribute('name') == 'steps[2][height]'){
        height2 = target.value;
    }
    else if(target.getAttribute('name') == 'steps[2][diagonal]'){
        diagonal2 = target.value;
    }

    if(width2 && height2 && diagonal2){
        let dValue = calculateDiagonal(width1,height1,diagonal2)
        target.closest('.step').querySelector('.form-error1').classList.add('d-none');
        if(Math.abs(dValue) > 2){
            target.closest('.step').querySelector('.form-error1').classList.add('d-none');
            target.closest('.step').querySelector('.form-error2').classList.remove('d-none');
            calculatePrice(price, 1)
        }
        else{
            windowCount = target.closest('.step').getAttribute('data-count');
            calculatePrice(price, windowCount)
        }

    }
    else{
        target.closest('.step').querySelector('.form-error1').classList.remove('d-none');
        target.closest('.step').querySelector('.form-error2').classList.add('d-none');
        calculatePrice(price, 1)
    }
})
step2.querySelector('.btn-more').addEventListener('click', (e)=> {
    step3.classList.remove('d-none');
})

//вычисления третьего окна
let width3 = 0;
let height3 = 0;
let diagonal3 = 0;
step3.addEventListener('keyup',  (e)=>{
    let target = e.target
    target.setAttribute('value', target.value);
    if(target.getAttribute('name') == 'steps[3][diagonal]'){
        width3 = target.value;
    }
    else if(target.getAttribute('name') == 'steps[3][diagonal]'){
        height3 = target.value;
    }
    else if(target.getAttribute('name') == 'steps[3][diagonal]'){
        diagonal3 = target.value;
    }

    if(width3 && height3 && diagonal3){
        let dValue = calculateDiagonal(width3,height3,diagonal3)
        target.closest('.step').querySelector('.form-error1').classList.add('d-none');
        if(Math.abs(dValue) > 2){
            target.closest('.step').querySelector('.form-error1').classList.add('d-none');
            target.closest('.step').querySelector('.form-error2').classList.remove('d-none');
            calculatePrice(price, 2)
        }
        else{
            windowCount = target.closest('.step').getAttribute('data-count');
            calculatePrice(price, windowCount)
        }

    }
    else{
        target.closest('.step').querySelector('.form-error1').classList.remove('d-none');
        target.closest('.step').querySelector('.form-error2').classList.add('d-none');
        calculatePrice(price, 2)
    }
})
step3.querySelector('.btn-more').addEventListener('click', (e)=> {
    step4.classList.remove('d-none');
})

//вычисления четвертого окна
let width4 = 0;
let height4 = 0;
let diagonal4 = 0;
step4.addEventListener('keyup',  (e)=>{
    let target = e.target
    target.setAttribute('value', target.value);
    if(target.getAttribute('name') == 'steps[4][diagonal]'){
        width4 = target.value;
    }
    else if(target.getAttribute('name') == 'steps[4][diagonal]'){
        height4 = target.value;
    }
    else if(target.getAttribute('name') == 'steps[4][diagonal]'){
        diagonal4 = target.value;
    }

    if(width4 && height4 && diagonal4){
        let dValue = calculateDiagonal(width4,height4,diagonal4)
        target.closest('.step').querySelector('.form-error1').classList.add('d-none');
        if(Math.abs(dValue) > 2){
            step4.querySelector('.form-error1').classList.add('d-none');
            step4.querySelector('.form-error2').classList.remove('d-none');
            calculatePrice(price, 3)
        }
        else{
            windowCount = target.closest('.step').getAttribute('data-count');
            calculatePrice(price, windowCount)
        }

    }
    else{
        target.closest('.step').querySelector('.form-error1').classList.remove('d-none');
        target.closest('.step').querySelector('.form-error2').classList.add('d-none');
        calculatePrice(price, 3)
    }
})
step4.querySelector('.btn-more').addEventListener('click', (e)=> {
    step5.classList.remove('d-none');
})

//вычисления пятого окна
let width5 = 0;
let height5 = 0;
let diagonal5 = 0;
step5.addEventListener('keyup',  (e)=>{
    let target = e.target
    target.setAttribute('value', target.value);
    if(target.getAttribute('name') == 'steps[5][diagonal]'){
        width5 = target.value;
    }
    else if(target.getAttribute('name') == 'steps[5][diagonal]'){
        height5 = target.value;
    }
    else if(target.getAttribute('name') == 'steps[5][diagonal]'){
        diagonal5 = target.value;
    }

    if(width5 && height5 && diagonal5){
        let dValue = calculateDiagonal(width5,height5,diagonal5)
        target.closest('.step').querySelector('.form-error1').classList.add('d-none');
        if(Math.abs(dValue) > 2){
            step4.querySelector('.form-error1').classList.add('d-none');
            step4.querySelector('.form-error2').classList.remove('d-none');
            calculatePrice(price, 4)
        }
        else{
            windowCount = target.closest('.step').getAttribute('data-count');
            calculatePrice(price, windowCount)
        }

    }
    else{
        target.closest('.step').querySelector('.form-error1').classList.remove('d-none');
        target.closest('.step').querySelector('.form-error2').classList.add('d-none');
        calculatePrice(price, 4)
    }
})

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



//Функция возвращает разницу диагоналей
function calculateDiagonal(width, height, diagonal){
    let dSqrt = Math.sqrt(width**2 + height**2)
    let d = diagonal - dSqrt;
    return d;
}
//Подсчет цены
function calculatePrice(price, windowCount){
    itog.innerHTML = price * windowCount;
}

$(function (){
    function pay(summa) {
        var widget = new cp.CloudPayments();
        widget.pay('auth', // или 'charge'
            { //options
                publicId: 'pk_2b869ea9d04943323e2f425f0b6f8', //id из личного кабинета
                description: 'Оплата товаров в babysafe.pro', //назначение
                amount: summa, //сумма
                currency: 'KZT', //валюта
                skin: "mini", //дизайн виджета (необязательно)
                data: {
                    myProp: 'myProp value'
                }
            },
            {
                onSuccess: function (options) { // success
                    //действие при успешной оплате
                    console.log('оплата прошла')
                    let th = $('#price-form-order');
                    $.ajax
                    ({
                        url: "/send-order.php",
                        type: "POST",
                        data: th.serialize(),
                        beforeSend: function () {
                            orderBtn.setAttribute('disabled','true');
                            console.log('заблокировать кнопку');
                        },
                        success: function (response) {
                            if (response == 0) {
                                console.log('Заполните все поля');
                            } else {
                                console.log('Отправилось');

                            }
                        }
                    });
                },
                onFail: function (reason, options) { // fail
                    //действие при неуспешной оплате
                    console.log('оплата не прошла')
                },
                onComplete: function (paymentResult, options) { //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
                    //например вызов вашей аналитики Facebook Pixel
                }
            }
        )
    };
    $('#order-btn').on('click', function (){
        let summa = +itog.innerText;
        pay(summa);
        return false;
    })
})





