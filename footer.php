<!-- Замер и оплата  !-->
<div class="modal fade" id="priceModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <form action="" class="price-form form-blue" method="POST" id="price-form-order">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <input type="hidden" name="subject" value="оплата">
                    <div class="mask">
                        <div class="form-headline text-center">Заполните данные ниже</div>
                        <div class="leap-1"></div>
                        <div class="leap-2"></div>


                        <fieldset id="step1" class="step" data-count="1">
                            <input type="hidden" name="steps[1][title]" value="Окно 1">
                            <div class="form-group">
                                <label for="width1" class="form-icon">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#width"></use>
                                    </svg>
                                </label>
                                <input id="width1" type="text" name="steps[1][width]" value="" placeholder="Ширина окна (см)"
                                       class="form-control calc1">
                            </div>
                            <div class="form-group">
                                <label for="height1" class="form-icon">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#height"></use>
                                    </svg>
                                </label>
                                <input id="height1" type="number" name="steps[1][height]" value="" placeholder="Высота окна (см) "
                                       class="form-control calc1">
                            </div>
                            <div class="form-group">
                                <label for="diagonal1" class="form-icon diagonal">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#height"></use>
                                    </svg>
                                </label>
                                <input id="diagonal1" type="number" name="steps[1][diagonal]" value="" placeholder="Диагональ окна (см) "
                                       class="form-control calc1">
                            </div>
                            <!--*калькулятор должен по формуле Пифагора вычислять правильное значение диагонали и в случае расхождения указанного значения более чем на 2 см в большую или меньшую сторону, писать красным цветом: -->
                            <div class="form-error1 d-none text-danger">Заполните все поля</div>
                            <div class="form-error2 d-none text-danger">Одно из значений указано неверно! Пожалуйста,
                                измерьте окно снова и укажите верные данные
                            </div>
                            <button type="button" class="btn btn-more d-none">Еще окно</button>
                        </fieldset>

                        <fieldset id="step2" class="step d-none" data-count="2">
                            <input type="hidden" name="steps[2][title]" value="Окно 2">
                            <div class="form-headline text-center">Окно 2</div>
                            <div class="form-group">
                                <label for="width2" class="form-icon">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#width"></use>
                                    </svg>
                                </label>
                                <input id="width2" type="text" name="steps[2][width]" value="" placeholder="Ширина окна (см)"
                                       class="form-control calc2">
                            </div>
                            <div class="form-group">
                                <label for="height2" class="form-icon">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#height"></use>
                                    </svg>
                                </label>
                                <input id="height2" type="number" name="steps[2][height]" value="" placeholder="Высота окна (см) "
                                       class="form-control calc2">
                            </div>
                            <div class="form-group">
                                <label for="diagonal2" class="form-icon diagonal">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#height"></use>
                                    </svg>
                                </label>
                                <input id="diagonal2" type="number" name="steps[2][diagonal]" value="" placeholder="Диагональ окна (см) "
                                       class="form-control calc2">
                            </div>
                            <!--*калькулятор должен по формуле Пифагора вычислять правильное значение диагонали и в случае расхождения указанного значения более чем на 2 см в большую или меньшую сторону, писать красным цветом: -->
                            <div class="form-error1 d-none text-danger">Заполните все поля</div>
                            <div class="form-error2 d-none text-danger">Одно из значений указано неверно! Пожалуйста,
                                измерьте окно снова и укажите верные данные
                            </div>
                            <button type="button" class="price-form__close">Убрать окно</button>
                            <button type="button" class="btn btn-more d-none">Еще окно</button>
                        </fieldset>
                        <fieldset id="step3" class="step d-none" data-count="3">

                            <input type="hidden" name="steps[3][title]" value="Окно 3">
                            <div class="form-headline text-center">Окно 3</div>
                            <div class="form-group">
                                <label for="width3" class="form-icon">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#width"></use>
                                    </svg>
                                </label>
                                <input id="width3" type="text" name="steps[3][width]" value="" placeholder="Ширина окна (см)"
                                       class="form-control calc1">
                            </div>
                            <div class="form-group">
                                <label for="height3" class="form-icon">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#height"></use>
                                    </svg>
                                </label>
                                <input id="height3" type="number" name="steps[3][height]" value="" placeholder="Высота окна (см) "
                                       class="form-control calc1">
                            </div>
                            <div class="form-group">
                                <label for="diagonal3" class="form-icon diagonal">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#height"></use>
                                    </svg>
                                </label>
                                <input id="diagonal3" type="number" name="steps[3][diagonal]" value="" placeholder="Диагональ окна (см) "
                                       class="form-control calc1">
                            </div>
                            <div class="form-error1 d-none text-danger">Заполните все поля</div>
                            <div class="form-error2 d-none text-danger">Одно из значений указано неверно! Пожалуйста,
                                измерьте окно снова и укажите верные данные
                            </div>
                            <button type="button" class="price-form__close">Убрать окно</button>
                            <button type="button" class="btn btn-more d-none">Еще окно</button>
                        </fieldset>
                        <fieldset id="step4" class="step d-none" data-count="4">
                            <input type="hidden" name="steps[4][title]" value="Окно 4">
                            <div class="form-headline text-center">Окно 4</div>
                            <div class="form-group">
                                <label for="width4" class="form-icon">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#width"></use>
                                    </svg>
                                </label>
                                <input id="width4" type="text" name="steps[4][width]" value="" placeholder="Ширина окна (см)"
                                       class="form-control calc1">
                            </div>
                            <div class="form-group">
                                <label for="height4" class="form-icon">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#height"></use>
                                    </svg>
                                </label>
                                <input id="height4" type="number" name="steps[4][height]" value="" placeholder="Высота окна (см) "
                                       class="form-control calc1">
                            </div>
                            <div class="form-group">
                                <label for="diagonal4" class="form-icon diagonal">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#height"></use>
                                    </svg>
                                </label>
                                <input id="diagonal4" type="number" name="steps[4][diagonal]" value="" placeholder="Диагональ окна (см) "
                                       class="form-control calc1">
                            </div>
                            <!--*калькулятор должен по формуле Пифагора вычислять правильное значение диагонали и в случае расхождения указанного значения более чем на 2 см в большую или меньшую сторону, писать красным цветом: -->
                            <div class="form-error1 d-none text-danger">Заполните все поля</div>
                            <div class="form-error2 d-none text-danger">Одно из значений указано неверно! Пожалуйста,
                                измерьте окно снова и укажите верные данные
                            </div>
                            <button type="button" class="price-form__close">Убрать окно</button>
                            <button type="button" class="btn btn-more d-none">Еще окно</button>
                        </fieldset>
                        <fieldset id="step5" class="step d-none" data-count="5">

                            <input type="hidden" name="steps[5][title]" value="Окно 5">
                            <div class="form-headline text-center">Окно 5</div>
                            <div class="form-group">
                                <label for="width5" class="form-icon">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#width"></use>
                                    </svg>
                                </label>
                                <input id="width5" type="text" name="steps[5][width]" value="" placeholder="Ширина окна (см)"
                                       class="form-control calc1">
                            </div>
                            <div class="form-group">
                                <label for="height5" class="form-icon">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#height"></use>
                                    </svg>
                                </label>
                                <input id="height5" type="number" name="steps[5][height]" value="" placeholder="Высота окна (см) "
                                       class="form-control calc1">
                            </div>
                            <div class="form-group">
                                <label for="diagonal5" class="form-icon diagonal">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#height"></use>
                                    </svg>
                                </label>
                                <input id="diagonal5" type="number" name="steps[5][diagonal]" value="" placeholder="Диагональ окна (см) "
                                       class="form-control calc1">
                            </div>
                            <!--*калькулятор должен по формуле Пифагора вычислять правильное значение диагонали и в случае расхождения указанного значения более чем на 2 см в большую или меньшую сторону, писать красным цветом: -->
                            <div class="form-error1 d-none text-danger">Заполните все поля</div>
                            <div class="form-error2 d-none text-danger">Одно из значений указано неверно! Пожалуйста,
                                измерьте окно снова и укажите верные данные
                            </div>
                            <button type="button" class="price-form__close">Убрать окно</button>
                        </fieldset>


                        <br>
                        <fieldset id="data-user">
                            <div class="form-group">
                                <label for="blue-city" class="form-icon">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#map"></use>
                                    </svg>
                                </label>
                                <select type="text" name="city" placeholder="Выберите город" class="form-control custom-select user" id="order-city">
                                    <option value="Нур Султан">Нур Султан</option>
                                    <option value="Алматы">Алматы</option>
                                    <option value="Шымкент">Шымкент</option>
                                    <option value="Павлодар">Павлодар</option>
                                    <option value="Караганда">Караганда</option>
                                    <option value="Семей">Семей</option>
                                    <option value="Актобе">Актобе</option>
                                    <option value="Атырау">Атырау</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="blue-phone" class="form-icon">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#phone"></use>
                                    </svg>
                                </label>
                                <input id="phone-order" type="text" name="phone" placeholder="Ваш телефон" class="form-control user"
                                       id="order-phone">
                            </div>
                            <div class="form-group">
                                <label for="blue-adress" class="form-icon">
                                    <svg width="20" height="20">
                                        <use xlink:href="./img/svg/symbol/sprite.svg#map"></use>
                                    </svg>
                                </label>
                                <input type="text" name="adress" placeholder="Ваш адрес" class="form-control user"
                                       id="order-adress">
                            </div>
                        </fieldset>
                        <p class="price-form__itog">Общая стоимость: <span id="itog">0</span> тенге</p>
                        <div class="text-center">
                            <button id="order-btn" type="button" class="btn btn-order disabled">Оплатить
                                <span class="btn-arrow-right">
                                    <svg width="18" height="18"><use
                                                xlink:href="./img/svg/symbol/sprite.svg#arrow-sm-right"></use></svg>
                                </span>
                            </button>
                        </div>

                        <div class="form-subtitle">Не получается самостоятельно измерить окна?
                            Мы отправим к вам менеджера, который сделает замеры.
                        </div>

                        <div class="text-center">
                            <button type="button" class="btn btn-order" data-dismiss="modal" data-toggle="modal" data-target="#callModal">
                                Вызвать замерщика <span
                                        class="btn-arrow-right"><svg width="18" height="18"><use
                                                xlink:href="./img/svg/symbol/sprite.svg#arrow-sm-right"></use></svg></span>
                            </button>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    </div>
</div>
<!-- Заказать со скидкой  шапка  !-->
<div class="modal fade" id="callModalSkidos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <form action="" method="POST" id="call-form" class="price-form form-default skidos">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="mask">
                        <div class="form-headline text-center">Купить со скидкой</div>
                        <div class="leap-1 d-none"></div>
                        <div class="leap-2"></div>

                        <div class="form-group">
                            <label for="city" class="form-icon">
                                <svg width="20" height="20">
                                    <use xlink:href="./img/svg/symbol/sprite.svg#map"></use>
                                </svg>
                            </label>
                            <!--input type="text" name="name" placeholder="Выберите город" class="form-control" id="blue-city"-->
                            <select type="text" name="city" placeholder="Выберите город"
                                    class="form-control custom-select" id="city">
                                <option value="Нур Султан">Нур Султан</option>
                                <option value="Алматы">Алматы</option>
                                <option value="Шымкент">Шымкент</option>
                                <option value="Павлодар">Павлодар</option>
                                <option value="Караганда">Караганда</option>
                                <option value="Семей">Семей</option>
                                <option value="Актобе">Актобе</option>
                                <option value="Атырау">Атырау</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="phone" class="form-icon">
                                <svg width="20" height="20">
                                    <use xlink:href="./img/svg/symbol/sprite.svg#phone"></use>
                                </svg>
                            </label>
                            <input type="text" name="phone" placeholder="Ваш телефон" class="form-control" id="phone">
                        </div>
                        <div class="text-center status">
                            <button class="btn btn-order send_form_zvonok_skidos">Купить <span class="btn-arrow-right"><svg
                                            width="18" height="18"><use
                                                xlink:href="./img/svg/symbol/sprite.svg#arrow-sm-right"></use></svg></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- Заказать со скидкой   !-->

<!-- Обратный звонок шапка  !-->
<div class="modal fade" id="callModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <form action="" method="POST" id="call-form" class="price-form form-default">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <input type="hidden" name="subject" value="Обратный звонок">
                    <div class="mask">
                        <div class="form-headline text-center">Обратный звонок</div>
                        <div class="leap-1 d-none"></div>
                        <div class="leap-2"></div>

                        <!--div class="form-group">
                        <label for="name" class="form-icon"><svg width="20" height="20"><use xlink:href="./img/svg/symbol/sprite.svg#map"></use></svg></label>
                        <input type="text" name="name" placeholder="Ваше имя" class="form-control" id="name">
                        </div!-->

                        <div class="form-group">
                            <label for="city" class="form-icon">
                                <svg width="20" height="20">
                                    <use xlink:href="./img/svg/symbol/sprite.svg#map"></use>
                                </svg>
                            </label>
                            <!--input type="text" name="name" placeholder="Выберите город" class="form-control" id="blue-city"-->
                            <select type="text" name="city" placeholder="Выберите город"
                                    class="form-control custom-select" id="city">
                                <option value="Нур Султан">Нур Султан</option>
                                <option value="Алматы">Алматы</option>
                                <option value="Шымкент">Шымкент</option>
                                <option value="Павлодар">Павлодар</option>
                                <option value="Караганда">Караганда</option>
                                <option value="Семей">Семей</option>
                                <option value="Актобе">Актобе</option>
                                <option value="Атырау">Атырау</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="phone" class="form-icon">
                                <svg width="20" height="20">
                                    <use xlink:href="./img/svg/symbol/sprite.svg#phone"></use>
                                </svg>
                            </label>
                            <input type="text" name="phone" placeholder="Ваш телефон" class="form-control"
                                   id="blue-phone" value="">
                        </div>
                        <div class="text-center status">
                            <button class="btn btn-order send_form_zvonok">Заказать звонок <span
                                        class="btn-arrow-right"><svg width="18" height="18"><use
                                                xlink:href="./img/svg/symbol/sprite.svg#arrow-sm-right"></use></svg></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- Обратный звонок шапка  !-->


<!-- Обратный звонок шапка  !-->
<div class="modal fade" id="callModalBig" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <form action="" method="POST" id="call-form" class="price-form form-default big">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="mask">
                        <div class="form-headline text-center">Узнать подробнее</div>
                        <div class="leap-1 d-none"></div>
                        <div class="leap-2"></div>

                        <!--div class="form-group">
                        <label for="name" class="form-icon"><svg width="20" height="20"><use xlink:href="./img/svg/symbol/sprite.svg#map"></use></svg></label>
                        <input type="text" name="name" placeholder="Ваше имя" class="form-control" id="name">
                        </div!-->

                        <div class="form-group">
                            <label for="city" class="form-icon">
                                <svg width="20" height="20">
                                    <use xlink:href="./img/svg/symbol/sprite.svg#map"></use>
                                </svg>
                            </label>
                            <!--input type="text" name="name" placeholder="Выберите город" class="form-control" id="blue-city"-->
                            <select type="text" name="city" placeholder="Выберите город"
                                    class="form-control custom-select" id="city">
                                <option value="Нур Султан">Нур Султан</option>
                                <option value="Алматы">Алматы</option>
                                <option value="Шымкент">Шымкент</option>
                                <option value="Павлодар">Павлодар</option>
                                <option value="Караганда">Караганда</option>
                                <option value="Семей">Семей</option>
                                <option value="Актобе">Актобе</option>
                                <option value="Атырау">Атырау</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="phone" class="form-icon">
                                <svg width="20" height="20">
                                    <use xlink:href="./img/svg/symbol/sprite.svg#phone"></use>
                                </svg>
                            </label>
                            <input type="text" name="phone" placeholder="Ваш телефон" class="form-control" id="phone">
                        </div>
                        <div class="text-center status">
                            <button class="btn btn-order send_form_zvonok_big">Узнать <span class="btn-arrow-right"><svg
                                            width="18" height="18"><use
                                                xlink:href="./img/svg/symbol/sprite.svg#arrow-sm-right"></use></svg></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- Обратный звонок шапка  !-->


<!-- Получить консультацию  шапка  !-->
<div class="modal fade" id="callModalCons" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <form action="" method="POST" id="call-form" class="price-form form-default cons">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="mask">
                        <div class="form-headline text-center">Получить консультацию</div>
                        <div class="leap-1 d-none"></div>
                        <div class="leap-2"></div>

                        <!--div class="form-group">
                        <label for="name" class="form-icon"><svg width="20" height="20"><use xlink:href="./img/svg/symbol/sprite.svg#map"></use></svg></label>
                        <input type="text" name="name" placeholder="Ваше имя" class="form-control" id="name">
                        </div!-->

                        <div class="form-group">
                            <label for="city" class="form-icon">
                                <svg width="20" height="20">
                                    <use xlink:href="./img/svg/symbol/sprite.svg#map"></use>
                                </svg>
                            </label>
                            <!--input type="text" name="name" placeholder="Выберите город" class="form-control" id="blue-city"-->
                            <select type="text" name="city" placeholder="Выберите город"
                                    class="form-control custom-select" id="city">
                                <option value="Нур Султан">Нур Султан</option>
                                <option value="Алматы">Алматы</option>
                                <option value="Шымкент">Шымкент</option>
                                <option value="Павлодар">Павлодар</option>
                                <option value="Караганда">Караганда</option>
                                <option value="Семей">Семей</option>
                                <option value="Актобе">Актобе</option>
                                <option value="Атырау">Атырау</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="phone" class="form-icon">
                                <svg width="20" height="20">
                                    <use xlink:href="./img/svg/symbol/sprite.svg#phone"></use>
                                </svg>
                            </label>
                            <input type="text" name="phone" placeholder="Ваш телефон" class="form-control" id="phone">
                        </div>
                        <div class="text-center status">
                            <button class="btn btn-order send_form_zvonok_cons">Получить <span class="btn-arrow-right"><svg
                                            width="18" height="18"><use
                                                xlink:href="./img/svg/symbol/sprite.svg#arrow-sm-right"></use></svg></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- Получить консультацию  шапка  !-->




<footer id="footer" class="pl-lg-4 pr-lg-4">
    <div class="container-fluid d-md-flex align-items-center">
        <div class="d-flex">
            <div class="logo mr-5 d-none d-md-block"><img src="./img/images/footer-logo.png" alt=""></div>
        </div>
        <div class="contacts">
            <div class="phone d-block d-lg-none mb-3 mb-lg-2"><a href="#">
                    <svg width="18" height="18">
                        <use xlink:href="./img/svg/symbol/sprite.svg#phon-footer"></use>
                    </svg>
                    8 777 474 84 94</a></div>
            <div class="mail mb-3 mb-lg-2 d-flex">
                <div class="icon">
                    <svg width="18" height="18">
                        <use xlink:href="./img/svg/symbol/sprite.svg#mail"></use>
                    </svg>
                </div>
                <a href="mailto:info@BabySafe.pro">info@BabySafe.pro</a>
            </div>
            <div class="adress d-flex">
                <div class="icon">
                    <svg width="18" height="18">
                        <use xlink:href="./img/svg/symbol/sprite.svg#location"></use>
                    </svg>
                </div>
                Казахстан, г.Астана, ул. Акжан, 3 (пос.&nbsp;им.&nbsp;Тельмана)
            </div>
        </div>
        <nav class="footer-menu ml-lg-5 ml-xl-auto mr-auto d-none d-lg-block">
            <ul class="nav">
                <li class="nav-item"><a href="/about.php" class="nav-link">О компании</a></li>
                <li class="nav-item"><a href="/reviews.php" class="nav-link">Отзывы</a></li>
                <li class="nav-item"><a href="/partnership.php" class="nav-link">Условия сотрудничества</a></li>
                <li class="nav-item"><a href="/regions.php" class="nav-link">Представители в регионах</a></li>
                <li class="nav-item"><a href="/blog.php" class="nav-link">Блог</a></li>
                <li class="nav-item"><a href="/payments.php" class="nav-link">Платежи</a></li>
            </ul>
        </nav>
        <div class="social d-flex ml-md-auto ml-lg-0 justify-content-center justify-content-md-end">
            <!--div class="social-item mr-3"><a href="https://business.facebook.com/Babysafekz-1825015617606705"><svg width="18" height="18"><use xlink:href="./img/svg/symbol/sprite.svg#fb"></use></svg></a></div!-->
            <div class="social-item">
                <a href="https://www.instagram.com/babysafe.pro/" target="_blank">
                    <svg width="18" height="18">
                        <use xlink:href="./img/svg/symbol/sprite.svg#in"></use>
                    </svg>
                </a>
            </div>
            <div class="social-item ml-1">
                <a href="https://www.youtube.com/channel/UC5ATXpHFpO4jH2kuS_JS18w" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28"
                         viewBox="-35.20005 -41.33325 305.0671 247.9995">
                        <path d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85"
                              fill="red"/>
                        <path d="M93.333 117.559l61.333-34.89-61.333-34.894z" fill="#fff"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</footer>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
<script src="./js/main.js"></script>
<script src="/js/app.js"></script>
<script src="/js/calc.js"></script>


<script src="/js/extras.js"></script>
<script src="/js/jquery.inputmask.bundle.js"></script>


<script>
    $('#phone, #blue-phone, #phone-order').inputmask("+7-999-999-99-99");


    $(document).on('click', '.send_form_zvonok', function (e) {
        var city = $('#call-form #city').val();
        var phone = $('#call-form #blue-phone').val();

        var curStr = phone.replace(/[_]/g, "");

        var buttom = '<button  type="submit" class="btn btn-order send_form_zvonok">Заказать звонок <span class="btn-arrow-right"><svg width="18" height="18"><use xlink:href="./img/svg/symbol/sprite.svg#arrow-sm-right"></use></svg></span></button>';

        if (curStr.length == 16) {
            $('.modal-body .mask .text-center.status').html(buttom);
        }

        $.ajax
        ({
            url: "/send.php",
            type: "POST",
            data: {"city": city, "phone": phone, "type": "zvonok"},
            cache: true,
            beforeSend: function () {
                $('#call-form #city').prop('disabled', true);
                $('#call-form #blue-phone').prop('disabled', true);
                $('.modal-body .mask .text-center.status').html(buttom);
            },
            success: function (response) {
                if (response == 0) {
                    $('.modal-body .mask .text-center.status').html('<span style="color:#FF0000" class="error_text">Заполните все поля</span>' + buttom);
                } else {
                    setTimeout(function () {
                        location.href = '/thankyoupage/';
                    }, 900);
                }
                $('#call-form #city').prop('disabled', false);
                $('#call-form #blue-phone').prop('disabled', false);
            }
        });

        e.preventDefault();
    });


    //header заказать со скидкой
    $(document).on('click', '.send_form_zvonok_skidos', function (e) {
        var city = $('form.price-form.form-default.skidos #city').val();
        var phone = $('form.price-form.form-default.skidos #phone').val();
        var buttom = '<button  type="submit" class="btn btn-order send_form_zvonok_skidos">Купить <span class="btn-arrow-right"><svg width="18" height="18"><use xlink:href="./img/svg/symbol/sprite.svg#arrow-sm-right"></use></svg></span></button>';

        $.ajax
        ({
            url: "/send.php",
            type: "POST",
            data: {"city": city, "phone": phone, "type": "send_form_zvonok_skidos"},
            cache: true,
            beforeSend: function () {
                $('form.price-form.form-default.skidos #city').prop('disabled', true);
                $('form.price-form.form-default.skidos #phone').prop('disabled', true);
                $('form.price-form.form-default.skidos .text-center.status').html(buttom);
            },
            success: function (response) {
                if (response == 0) {
                    $('form.price-form.form-default.skidos .text-center.status').html('<span style="color:#FF0000" class="error_text">Заполните все поля</span>' + buttom);
                } else {
                    setTimeout(function () {
                        location.href = '/thankyoupage/';
                    }, 900);
                }
                $('form.price-form.form-default.skidos #city').prop('disabled', false);
                $('form.price-form.form-default.skidos #phone').prop('disabled', false);
            }
        });

        e.preventDefault();
    });

    //header заказать со скидкой
    $(document).on('click', '.send_form_zvonok_big', function (e) {
        var city = $('form.price-form.form-default.big #city').val();
        var phone = $('form.price-form.form-default.big #phone').val();
        var buttom = '<button  type="submit" class="btn btn-order send_form_zvonok_skidos">Заказать <span class="btn-arrow-right"><svg width="18" height="18"><use xlink:href="./img/svg/symbol/sprite.svg#arrow-sm-right"></use></svg></span></button>';

        $.ajax
        ({
            url: "/send.php",
            type: "POST",
            data: {"city": city, "phone": phone, "type": "send_form_zvonok_big"},
            cache: true,
            beforeSend: function () {
                $('form.price-form.form-default.big #city').prop('disabled', true);
                $('form.price-form.form-default.big #phone').prop('disabled', true);
                $('form.price-form.form-default.big .text-center.status').html(buttom);
            },
            success: function (response) {
                if (response == 0) {
                    $('form.price-form.form-default.big .text-center.status').html('<span style="color:#FF0000"  class="error_text">Заполните все поля</span>' + buttom);
                } else {
                    setTimeout(function () {
                        location.href = '/thankyoupage/';
                    }, 900);
                }
                $('form.price-form.form-default.big #city').prop('disabled', false);
                $('form.price-form.form-default.big #phone').prop('disabled', false);
            }
        });

        e.preventDefault();
    });


    //header получить консультацию
    $(document).on('click', '.send_form_zvonok_cons', function (e) {
        var city = $('form.price-form.form-default.cons #city').val();
        var phone = $('form.price-form.form-default.cons #phone').val();
        var buttom = '<button  type="submit" class="btn btn-order send_form_zvonok_cons">Заказать <span class="btn-arrow-right"><svg width="18" height="18"><use xlink:href="./img/svg/symbol/sprite.svg#arrow-sm-right"></use></svg></span></button>';

        $.ajax
        ({
            url: "/send.php",
            type: "POST",
            data: {"city": city, "phone": phone, "type": "send_form_zvonok_cons"},
            cache: true,
            beforeSend: function () {
                $('form.price-form.form-default.cons #city').prop('disabled', true);
                $('form.price-form.form-default.cons #phone').prop('disabled', true);
                $('form.price-form.form-default.cons .text-center.status').html(buttom);
            },
            success: function (response) {
                if (response == 0) {
                    $('form.price-form.form-default.cons .text-center.status').html('<span style="color:#FF0000"  class="error_text">Заполните все поля</span>' + buttom);
                } else {
                    setTimeout(function () {
                        location.href = '/thankyoupage/';
                    }, 900);
                }
                $('form.price-form.form-default.cons #city').prop('disabled', false);
                $('form.price-form.form-default.cons #phone').prop('disabled', false);
            }
        });

        e.preventDefault();
    });


    //Синий блок акции
    $(document).on('click', 'form.price-form.form-blue .zakaz_data', function (e) {
        var city = $('form.price-form.form-blue #blue-city').val();
        //var width  	=  	$('form.price-form.form-blue #blue-width').val();
        //var name  	=  	$('form.price-form.form-blue #blue-name').val();
        var phone = $('form.price-form.form-blue #blue-phone').val();
        var buttom = '<button type="submit" class="btn btn-order zakaz_data">Купить со скидкой <span class="btn-arrow-right"><svg width="18" height="18"><use xlink:href="./img/svg/symbol/sprite.svg#arrow-sm-right"></use></svg></span></button>';

        $.ajax
        ({
            url: "/send.php",
            type: "POST",
            data: {"city": city, "phone": phone, "type": "zakaz_data"},
            cache: true,
            beforeSend: function () {
                $('form.price-form.form-blue #blue-city').prop('disabled', true);
                $('form.price-form.form-blue #blue-phone').prop('disabled', true);
                $('form.price-form.form-blue .text-center.status').html(buttom);
            },
            success: function (response) {
                if (response == 0) {
                    $('form.price-form.form-blue .text-center.status').html('<span style="color:#FF0000"  class="error_text">Заполните все поля</span>' + buttom);
                } else {
                    setTimeout(function () {
                        location.href = '/thankyoupage/';
                    }, 900);
                }

                $('form.price-form.form-blue #blue-city').prop('disabled', false);
                $('form.price-form.form-blue #blue-phone').prop('disabled', false);
            }
        });
        e.preventDefault();
    });

    //Синий блок оплата
    $(document).on('click', 'form.price-form.form-blue .zakaz_data', function (e) {
        var city = $('form.price-form.form-blue #order-city').val();
        var width = $('form.price-form.form-blue #blue-width').val();
        var name = $('form.price-form.form-blue #blue-name').val();
        var phone = $('form.price-form.form-blue #blue-phone').val();
        var buttom = '<button type="submit" class="btn btn-order zakaz_data">Купить со скидкой <span class="btn-arrow-right"><svg width="18" height="18"><use xlink:href="./img/svg/symbol/sprite.svg#arrow-sm-right"></use></svg></span></button>';

        $.ajax
        ({
            url: "/send.php",
            type: "POST",
            data: {"city": city, "phone": phone, "type": "zakaz_data"},
            cache: true,
            beforeSend: function () {
                $('form.price-form.form-blue #blue-city').prop('disabled', true);
                $('form.price-form.form-blue #blue-phone').prop('disabled', true);
                $('form.price-form.form-blue .text-center.status').html(buttom);
            },
            success: function (response) {
                if (response == 0) {
                    $('form.price-form.form-blue .text-center.status').html('<span style="color:#FF0000"  class="error_text">Заполните все поля</span>' + buttom);
                } else {
                    setTimeout(function () {
                        location.href = '/thankyoupage/';
                    }, 900);
                }

                $('form.price-form.form-blue #blue-city').prop('disabled', false);
                $('form.price-form.form-blue #blue-phone').prop('disabled', false);
            }
        });
        e.preventDefault();
    });

    //Низ сайта ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
    $(document).on('click', 'form.price-form.form-default .zakaz_data_foot', function (e) {
        var city = $('form.price-form.form-default #blue-city').val();
        var phone = $('form.price-form.form-default #blue-phone').val();
        var buttom = '<button type="submit" class="btn btn-order zakaz_data_foot">Получить консультацию  <span class="btn-arrow-right"><svg width="18" height="18"><use xlink:href="./img/svg/symbol/sprite.svg#arrow-sm-right"></use></svg></span></button>';

        $.ajax
        ({
            url: "/send.php",
            type: "POST",
            data: {"city": city, "phone": phone, "type": "zakaz_data_foot"},
            cache: true,
            beforeSend: function () {
                $('form.price-form.form-default #blue-city').prop('disabled', true);
                $('form.price-form.form-default #blue-phone').prop('disabled', true);
                $('form.price-form.form-default .text-center.status').html(buttom);
            },
            success: function (response) {
                if (response == 0) {
                    $('form.price-form.form-default .text-center.status').html('<span style="color:#FF0000"  class="error_text">Заполните все поля</span>' + buttom);
                } else {
                    setTimeout(function () {
                        location.href = '/thankyoupage/';
                    }, 900);
                }

                $('form.price-form.form-default #blue-city').prop('disabled', false);
                $('form.price-form.form-default #blue-phone').prop('disabled', false);
            }
        });
        e.preventDefault();
    });


    $(document).on('click', '.callModalPartnership', function (e) {
        var direction = $(this).attr('data-direction');
        $('form.price-form.form-default.partnership #type').val(direction);
        $('form.price-form.form-default.partnership .subject').val(direction);
        $('form.price-form.form-default.partnership .form-headline.text-center').html(direction);
    });

    //Сотрудничество
    $(document).on('click', 'form.price-form.form-default.partnership .send_form_partnership', function (e) {
        var name = $('form.price-form.form-default.partnership #name').val();
        var phone = $('form.price-form.form-default.partnership #phone').val();
        var email = $('form.price-form.form-default.partnership #email').val();
        var type = $('form.price-form.form-default.partnership #type').val();
        var city = $('form.price-form.form-default.partnership #blue-city').val();
        var buttom = '<button type="submit" class="btn btn-order send_form_partnership">Получить файл<span class="btn-arrow-right"><svg width="18" height="18"><use xlink:href="./img/svg/symbol/sprite.svg#arrow-sm-right"></use></svg></span></button>';

        $.ajax
        ({
            url: "/send.php",
            type: "POST",
            data: {
                "city": city,
                "name": name,
                "phone": phone,
                "email": email,
                "types": type,
                "type": "send_form_partnership"
            },
            cache: true,
            beforeSend: function () {
                $('form.price-form.form-default.partnership #name').prop('disabled', true);
                $('form.price-form.form-default.partnership #phone').prop('disabled', true);
                $('form.price-form.form-default.partnership #email').prop('disabled', true);
                $('form.price-form.form-default.partnership #type').prop('disabled', true);
                $('form.price-form.form-default.partnership #blue-city').prop('disabled', true);
                $('form.price-form.form-default.partnership .text-center.status').html(buttom);
            },
            success: function (response) {
                if (response == 0) {
                    $('form.price-form.form-default.partnership .text-center.status').html('<span style="color:#FF0000"  class="error_text">Заполните все поля</span>' + buttom);
                } else {
                    $('form.price-form.form-default.partnership .text-center.status').html('' + buttom);
                    setTimeout(function () {
                        location.href = '/thankyoupage/';
                    }, 900);
                }


                $('form.price-form.form-default.partnership #name').prop('disabled', false);
                $('form.price-form.form-default.partnership #phone').prop('disabled', false);
                $('form.price-form.form-default.partnership #email').prop('disabled', false);
                $('form.price-form.form-default.partnership #type').prop('disabled', false);
                $('form.price-form.form-default.partnership #blue-city').prop('disabled', false);
            }
        });


        e.preventDefault();
    });


    // О нас. Получить консультацию. Синяя форма
    $(document).on('click', 'form.price-form.form-blue.about .zakaz_data_about', function (e) {
        var name = $('form.price-form.form-blue.about #name').val();
        var phone = $('form.price-form.form-blue.about #phone').val();
        var email = $('form.price-form.form-blue.about #email').val();
        var city = $('form.price-form.form-blue.about #blue-city').val();
        var buttom = '<button type="submit" class="btn btn-order zakaz_data_about">Получить консультацию <span class="btn-arrow-right"><svg width="18" height="18"><use xlink:href="./img/svg/symbol/sprite.svg#arrow-sm-right"></use></svg></span></button>';

        $.ajax
        ({
            url: "/send.php",
            type: "POST",
            data: {"city": city, "name": name, "phone": phone, "email": email, "type": "zakaz_data_about"},
            cache: true,
            beforeSend: function () {
                $('form.price-form.form-blue.about #name').prop('disabled', true);
                $('form.price-form.form-blue.about #phone').prop('disabled', true);
                $('form.price-form.form-blue.about #email').prop('disabled', true);
                $('form.price-form.form-blue.about #blue-city').prop('disabled', true);
                $('form.price-form.form-blue.about .text-center.status').html(buttom);
            },
            success: function (response) {
                if (response == 0) {
                    $('form.price-form.form-blue.about .text-center.status').html('<span style="color:#FF0000"  class="error_text">Заполните все поля</span>' + buttom);
                } else {
                    $('form.price-form.form-blue.about .text-center.status').html('' + buttom);
                    setTimeout(function () {
                        location.href = '/thankyoupage/';
                    }, 900);
                }

                $('form.price-form.form-blue.about #name').prop('disabled', false);
                $('form.price-form.form-blue.about #phone').prop('disabled', false);
                $('form.price-form.form-blue.about #email').prop('disabled', false);
                $('form.price-form.form-blue.about #blue-city').prop('disabled', false);
            }
        });
        e.preventDefault();
    });


    //Костыли пздц, а че жедать, заказчик нужный труба
    $('.modal-body #call-form #blue-phone').keyup(function () {
        var phone = $(this).val();
        var curStr = phone.replace(/[_]/g, "");
        if (curStr.length == 16) {
            $(".modal-body span.error_text").remove();
            $('.modal-body button').prop('disabled', false);
        } else {
            $(".modal-body span.error_text").remove();
            $(".modal-body .text-center.status").prepend('<span style="color:#FF0000" class="error_text">Заполните все поля</span>');
            $('.modal-body button').prop('disabled', true);
        }
    });

    $('#order #blue-phone').keyup(function () {
        var phone = $(this).val();
        var curStr = phone.replace(/[_]/g, "");
        if (curStr.length == 16) {
            $("#order span.error_text").remove();
            $('#order button').prop('disabled', false);
        } else {
            $("#order span.error_text").remove();
            $("#order .text-center.status").prepend('<span style="color:#FF0000" class="error_text">Заполните все поля</span>');
            $('#order button').prop('disabled', true);
        }
    });


    $('#price #blue-phone').keyup(function () {
        var phone = $(this).val();
        var curStr = phone.replace(/[_]/g, "");
        if (curStr.length == 16) {
            $("#price span.error_text").remove();
            $('#price button').prop('disabled', false);
        } else {
            $("#price span.error_text").remove();
            $("#price .text-center.status").prepend('<span style="color:#FF0000" class="error_text">Заполните все поля</span>');
            $('#price button').prop('disabled', true);
        }
    });

    $('#callModalSkidos #call-form #phone').keyup(function () {
        var phone = $(this).val();
        var curStr = phone.replace(/[_]/g, "");
        if (curStr.length == 16) {
            $("#callModalSkidos span.error_text").remove();
            $('#callModalSkidos button').prop('disabled', false);
        } else {
            $("#callModalSkidos span.error_text").remove();
            $("#callModalSkidos .text-center.status").prepend('<span style="color:#FF0000" class="error_text">Заполните все поля</span>');
            $('#callModalSkidos button').prop('disabled', true);
        }
    });


    $('#callModalPartnership #call-form #phone').keyup(function () {
        var phone = $(this).val();
        var curStr = phone.replace(/[_]/g, "");
        if (curStr.length == 16) {
            $("#callModalPartnership span.error_text").remove();
            $('#callModalPartnership button').prop('disabled', false);
        } else {
            $("#callModalPartnership span.error_text").remove();
            $("#callModalPartnership .text-center.status").prepend('<span style="color:#FF0000" class="error_text">Заполните все поля</span>');
            $('#callModalPartnership button').prop('disabled', true);
        }
    });


</script>


</body>
</html>
