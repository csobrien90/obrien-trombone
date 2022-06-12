<?php

require_once '../../define.php';

// Honey pot verification
$honeypot = isset($_POST['honeyPot']) && ( strlen(htmlspecialchars($_POST['honeyPot']) ) > 0 );
if ( $honeypot ) {
	echo '{"message":"Get your fingers out of my honey pot!"}';
	die();
}; 

// Sanitize POST data
$name = htmlspecialchars($_POST['contactName']);
$email = filter_var($_POST['contactEmail'], FILTER_SANITIZE_EMAIL);
$message = wordwrap(htmlspecialchars($_POST['contactMessage']));
$recaptcha_response = $_POST['g-recaptcha-response'];

// Set email params
$to = 'chad@obrientrombone.com';
$subject = 'New Message from obrientrombone.com Contact Form!';
$body = "Name: $name\nEmail: $email\n\nMessage: $message";

// Verify reCaptcha
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify?secret='.RECAPTCHA_SECRET_KEY.'&response='.$recaptcha_response);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
$response = json_decode($response);

if($response->success) {
	// Successful verification - send email
	$mail_sent = mail($to, $subject, $body);
	$message = $mail_sent ? 'Thank you for reaching out! I will be in touch soon.' : 'Hmm - something went wrong. Please refresh the page and try again.';    
} else {
	// Failed the reCaptcha
	$message = 'reCAPTHCA verification failed, please try again.';
}

header('Content-Type: application/json');
// echo '{"message":"'.$message.'"}';
echo '{"message":"'.$message.'"}';
die();

?>