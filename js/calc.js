


const orderBtn = document.getElementById('order-btn');

orderBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const price = 18900;
    const width1 = document.getElementById('width1');
    const height1 = document.getElementById('height1');
    const diagonal1 = document.getElementById('diagonal1');
    let windowCount = '';
    if(width1.value && height1.value && diagonal1.value){
        let d = Math.sqrt(width1.value**2 + height1.value**2)
        let dValue = diagonal1.value - d;
        if(Math.abs(dValue) > 2){
            let step = document.getElementById('step1');
            let error = step.querySelector('.form-error');
            error.classList.remove('d-none');
        }
        else{
            windowCount = 1;
        }

        let summa = price * windowCount;
        console.log(summa)

        pay(summa)
    }
    else{
        console.log('Поля пустые')
    }

})