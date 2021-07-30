<?php

function console_log( $data ){
    echo '<script>';
    echo 'console.log('. json_encode( $data ) .')';
    echo '</script>';
}

$to = 'obrien.music@gmail.com';
$subject = 'New Message from obrientrombone.com Contact Form!';
$name = $_POST['contactName'];
$email = $_POST['contactEmail'];
$message = wordwrap($_POST['contactMessage']);

$body = "Name: $name\nEmail: $email\n\nMessage: $message";

mail($to, $subject, $body);
header("Location: ../connect.html");


?>