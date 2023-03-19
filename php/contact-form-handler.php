<?php
    $errors = '';
    $myemail = 'info@kilometriemiglia.it';//<-----Put Your email address here.
    if(empty($_POST['name'])  ||
       empty($_POST['surname'])  ||
       empty($_POST['email']) ||
       empty($_POST['message']))
    {
        $errors .= "\n Error: all fields are required";
    }
    $name = $_POST['name'];
    $name = $_POST['surname'];
    $email_address = $_POST['email'];
    $message = $_POST['message'];
    if (!preg_match(
    "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
    $email_address))
    {
        $errors .= "\n Error: Invalid email address";
    }
    
    if(empty($errors))
    {
        $to = $myemail;
        $email_subject = "Messaggio dal sito, inviato da: $name $surname";
        $email_body = "Hai ricevuto un nuovo messaggio. ".
        " Ecco i dettagli:\n Nome e Cognome: $name $surname \n ".
        "Email: $email_address\n Messaggio \n $message";
        $headers = "From: $myemail\n";
        $headers .= "Reply-To: $email_address";
        mail($to,$email_subject,$email_body,$headers);
        //redirect to the 'thank you' page
        header('Location: /pages/ringraziamento-form-contatti.html');
    }
?>
