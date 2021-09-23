<?php
error_reporting(-1);
header('Content-Type: text/html; charset=utf-8');
require_once("./mailsender/PHPMailerAutoload.php");

$subject = 'Оплата с сайта babysafe.pro '.$_POST['phone'].'. '.$_POST['adress'];

$form_data = array(
    'Страница'	=> 'babysafe.pro отдельная страница',
    'Сумма' 		=> $_POST['pay-summa'] ?: '0',
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
$message = "<table style='width: 100%;'>$message</table>";




$mail = new PHPMailer;
$mail->addAddress('Yerlan-ali@mail.ru');
$mail->Subject = $subject;
$mail->Body    = $message;


if($mail->send()) {
    echo 'success';


}else return false;

$mail->ClearAddresses();