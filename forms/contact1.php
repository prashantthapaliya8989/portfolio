<?php
//variable setting
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$subject = $_REQUEST['subject'];
$message = $_REQUEST['message'];

//check input fields
if (empty($name) || empty($email) || empty(subject) || empty(message))
{
    echo "Please fill all the fields.";
}
else
{
    mail("prashantthapaliya8989@gmail.com", $subject, $messsage, "From: $name <$email>");
    echo "<script type='text/javascript'>alert('Your message has been sent.');
        window.history.log(-1);
        </script>";
}


?>
