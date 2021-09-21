<?php
require_once(realpath(dirname(__FILE__)) . "/mailsender/PHPMailerAutoload.php");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {

    // проверка что мобильный введен верно
    $mobile = $_POST['phone'];
    $mobile = preg_replace('/[^0-9]/', '', $mobile);
    if (iconv_strlen($mobile) != 11) {
        echo 0;
        exit;
    }


    if ($_POST["type"] == 'zvonok') {
        $subject = 'Заявка с сайта babysafe.pro, Обратный звонок';

        $message = 'Заявка с сайта babysafe.pro, Обратный звонок';

        $message .= '<br />Город: ';
        $message .= $_POST['city'];

        $message .= '<br />Телефон: ';
        $message .= $_POST['phone'];
    }

    //Заказать со скидкой
    if ($_POST["type"] == 'send_form_zvonok_skidos') {
        $subject = 'Заявка с сайта babysafe.pro, Шапка сайта. Купить со скидкой';

        $message = 'Заявка с сайта babysafe.pro, Шапка сайта. Купить со скидкой';

        $message .= '<br />Город: ';
        $message .= $_POST['city'];

        $message .= '<br />Телефон: ';
        $message .= $_POST['phone'];
    }


    //Узнать подбобнее
    if ($_POST["type"] == 'send_form_zvonok_big') {
        $subject = 'Заявка с сайта babysafe.pro, Кнопка. Узнать подробнее.';

        $message = 'Заявка с сайта babysafe.pro, Кнопка. Узнать подробнее.';

        $message .= '<br />Город: ';
        $message .= $_POST['city'];

        $message .= '<br />Телефон: ';
        $message .= $_POST['phone'];
    }


    //Узнать подбобнее
    if ($_POST["type"] == 'send_form_zvonok_cons') {
        $subject = 'Заявка с сайта babysafe.pro, Кнопка. Получить консультацию.';

        $message = 'Заявка с сайта babysafe.pro, Кнопка. Получить консультацию.';

        $message .= '<br />Город: ';
        $message .= $_POST['city'];

        $message .= '<br />Телефон: ';
        $message .= $_POST['phone'];
    }


    if ($_POST["type"] == 'zakaz_data') {
        $subject = 'Заявка с сайта babysafe.pro,  Синий блок, Акция';

        $message = 'Заявка с сайта babysafe.pro, Синий блок, Акция';

        $message .= '<br />Город: ';
        $message .= $_POST['city'];

        $message .= '<br />Телефон: ';
        $message .= $_POST['phone'];

    }


    if ($_POST["type"] == 'zakaz_data_foot') {
        $subject = 'Заявка с сайта babysafe.pro,  Нижний блок, получить консультацию';

        $message = 'Заявка с сайта babysafe.pro, Нижний блок, получить консультацию';

        $message .= '<br />Город: ';
        $message .= $_POST['city'];

        $message .= '<br />Телефон: ';
        $message .= $_POST['phone'];

    }


    if ($_POST["type"] == 'send_form_partnership') {
        $subject = 'Заявка с сайта babysafe.pro, Сотрудничество';

        $message = 'Заявка с сайта babysafe.pro, Сотрудничество';

        $message .= '<br />Имя: ';
        $message .= $_POST['name'];

        $message .= '<br />Телефон: ';
        $message .= $_POST['phone'];

        $message .= '<br />Email: ';
        $message .= $_POST['email'];

        $message .= '<br />Город: ';
        $message .= $_POST['city'];

        $message .= '<br />Что отправить: ';
        $message .= $_POST['types'];

    }

    if ($_POST["type"] == 'zakaz_data_about') {
        $subject = 'Заявка с сайта babysafe.pro, О нас. Получить консультацию. Синяя форма';

        $message = 'Заявка с сайта babysafe.pro, О нас. Получить консультацию. Синяя форма';

        $message .= '<br />Имя: ';
        $message .= $_POST['name'];

        $message .= '<br />Телефон: ';
        $message .= $_POST['phone'];

        $message .= '<br />Email: ';
        $message .= $_POST['email'];

        $message .= '<br />Город: ';
        $message .= $_POST['city'];

    }


    function adopt($text)
    {
        return '=?UTF-8?B?' . Base64_encode($text) . '?=';
    }

    $mail_to = 'lied@babysafe.pro';
    $project_name = 'BABYSAFE.PRO';


    // Заказать звонок шапка и header
    if (
        $_POST["type"] == 'zvonok' && $_POST["city"] != '' && $_POST["phone"] != '' ||
        ($_POST["type"] == 'send_form_zvonok_skidos' && $_POST["city"] != '' && $_POST["phone"] != '') ||
        ($_POST["type"] == 'send_form_zvonok_big' && $_POST["city"] != '' && $_POST["phone"] != '') ||
        ($_POST["type"] == 'send_form_zvonok_cons' && $_POST["city"] != '' && $_POST["phone"] != '')
    ) {
        $mail = new PHPMailer;
        $mail->addAddress($mail_to);
        $mail->Subject = adopt($subject);
        $mail->Body = $message;
        if ($mail->send()) {
            echo 1;
        } else {
            echo 0;
        }
        exit;
    } //Синий блок, акции
    elseif ($_POST["type"] == 'zakaz_data' && $_POST["phone"] != '' && $_POST["city"] != '') {
        $mail = new PHPMailer;
        $mail->addAddress($mail_to);
        $mail->Subject = adopt($subject);
        $mail->Body = $message;

        if ($mail->send()) {
            echo 1;
        } else {
            echo 0;
        }
        exit;
    } //Нижний блок, Получить консультацию
    elseif ($_POST["type"] == 'zakaz_data_foot' && $_POST["phone"] != '' && $_POST["city"] != '') {
        $mail = new PHPMailer;
        $mail->addAddress($mail_to);
        $mail->Subject = adopt($subject);
        $mail->Body = $message;

        if ($mail->send()) {
            echo 1;
        } else {
            echo 0;
        }
        exit;
    }//Сотрудничество
    elseif ($_POST["type"] == 'send_form_partnership' && $_POST["name"] != '' && $_POST["phone"] != '' && $_POST["email"] != '' && $_POST["types"] != '' && $_POST["city"] != '') {

        $mail = new PHPMailer;
        $mail->addAddress($mail_to);
        $mail->Subject = adopt($subject);
        $mail->Body = $message;
        if ($mail->send()) {
            echo 1;
        } else {
            echo 0;
        }
        exit;
    }// О нас. Получить консультацию. Синяя форма
    elseif ($_POST["type"] == 'zakaz_data_about' && $_POST["name"] != '' && $_POST["phone"] != '' && $_POST["email"] != '' && $_POST["city"] != '') {

        $mail = new PHPMailer;
        $mail->addAddress($mail_to);
        $mail->Subject = adopt($subject);
        $mail->Body = $message;
        if ($mail->send()) {
            echo 1;
        } else {
            echo 0;
        }
        exit;
    } else echo 0;


}
?>
