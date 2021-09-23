<? $title = 'Информация об онлайн оплате';
include('./header.php'); ?>


</header>

<section id="about" class='mt-5'>
    <div class="block-headline">
        <h2 class="hdr">Оплата</h2>
        <div class="hr"></div>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <form class="pay-page" style="max-width: 400px">
                        <div class="form-group">
                            <label for="summa">Сумма</label>
                            <input type="number" class="form-control" name="pay-summa" id="pay-summa" value="0">
                            <small id="emailHelp" class="form-text text-muted">Введите сумму для оплаты</small>
                        </div>
                        <button id="pay-send" type="submit" class="btn btn-primary">Оплатить</button>
                    </form>
                </div>
            </div>
        </div>
        <script>
            const paySend = document.getElementById('pay-send');
            const paySumma = document.getElementById('pay-summa');
            paySend.addEventListener('click', (e)=>{
                e.preventDefault();
                let summa = +paySumma.value;

                payOne(summa);
            })

            function payOne(summa) {
                let widget = new cp.CloudPayments();
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
                            let th = $('#pay-page');
                            $.ajax
                            ({
                                url: "/send-payone.php",
                                type: "POST",
                                data: th.serialize(),
                                beforeSend: function () {
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
        </script>
</section>

</main>

<? include('./footer.php'); ?>
