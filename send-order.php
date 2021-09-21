<?php
error_reporting(-1);
header('Content-Type: text/html; charset=utf-8');
require_once("./mailsender/PHPMailerAutoload.php");

$subject = 'Оплата с сайта babysafe.pro '.$_POST['phone'].'. '.$_POST['adress'];

$form_data = array(
    'Страница'	=> 'babysafe.pro ',
    'Форма' 	=> 'Оплатили заказ',
    'Телефон' 	=> $_POST['phone'] ?: 'Не указан',
    'Адрес' 		=> $_POST['adress'] ?: 'Не указан'
);

$c = true;
foreach ( $form_data as $key => $value ) {
    if ( $value != "" ) {
        $message .= "
		" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
    }
}

foreach ($_POST['steps'] as $key => $step) {
    if (is_array($step['value'])) {
        $inner_value = '';
        foreach ($step['value'] as $title => $value) {
            $value = $value ?: 'Не указан';
            $inner_value .= "\n   ".$title.' - '.$value.'; ';
        }

        $step['value'] = $inner_value;
    }
    if($step['width'] == ''){
        $step['width'] = 'Не выбрано';
    }else{
        $steps_data .= '<b>'. $step['title'].'</b>'.'<br>' .'Ширина: '.$step['width'].'<br>'.'Высота: '.$step['height'].'<br>'.'Диагональ: '.$step['diagonal'].'<br>';
    }

}

$message = "<table style='width: 100%;'>$message</table><br>$steps_data";




$mail = new PHPMailer;
$mail->addAddress('maximum454@gmail.com');
$mail->Subject = $subject;
$mail->Body    = $message;


if($mail->send()) {
    echo 'success';


}else return false;

$mail->ClearAddresses();