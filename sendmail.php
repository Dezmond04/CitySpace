<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	// $mail = new PHPMailer(true);
	// $mail->CharSet = 'UTF-8';
	// $mail->setLanguage('ru', 'phpmailer/language/');
	// $mail->IsHTML(true);


	$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'webcoupmailing@gmail.com'; // Логин на почте
    $mail->Password   = 'webcoup2021'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('webcoupmailing@gmail.com', 'Игорь Карих'); // Адрес самой почты и имя отправителя
	// //От кого письмо
	// $mail->setFrom('webcoupmailing@gmail.com', 'Фрилансер по жизни');
	//Кому отправить
	$mail->addAddress('i.karih.home@gmail.com');
	//Тема письма
	$mail->Subject = 'Новое обращение"';



	//Тело письма
	$body = '<h1>Встречайте супер письмо!</h1>';
	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['phone'].'</p>';
	}
		
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
	}
	
	

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>