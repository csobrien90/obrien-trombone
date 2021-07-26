<?php

$name = $_POST['contactName'];
$email = $_POST['contactEmail'];
$message = $_POST['contactMessage'];

$body = "Name: " . $name . "\n" . "Email: " . $email . "\n\n" . "Message: " . wordwrap($message);

mail('obrien.music@gmail.com', 'New Message from obrientrombone.com Contact Form!', $body);
header("Location: ../connect.html");

?>