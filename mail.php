<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$userName = $_POST['username'];
$userPhone = $_POST['userphone'];
$email = $_POST['email'];
$text = $_POST['text'];
$company = $_POST['company'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "Заявка отправлена! ";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com '; // SMTP сервера GMAIL
    $mail->Username   = 'webstart91@gmail.com'; // Логин на почте
    $mail->Password   = 'AvaBlink182'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('webstart91@gmail.com', 'mail-server'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('ildar-t3p@yandex.ru');
        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Новая заявка';
        $mail->Body    = "<b>Имя:</b> $userName <br>
        <b>Компания:</b> $company<br>
        <b>Телефон:</b> $userPhone<br>
        <b>Почта:</b> $email<br>
        <b>Сообщение:</b>$text";


// Проверяем отравленность сообщения
if ($mail->send()) {
    header('Location: thanks.php');
} else { 
 "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}

} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}