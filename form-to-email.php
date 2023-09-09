<head>
    <body>
<?php
if(!isset($_POST['submit']))
{
    //This page should not be accessed directly. Need to submit the form.
    echo "error; you need to submit the form!";
}
$number = $_POST['phone-number'];
//Validate first
if(empty($number))
{
    echo "Number is mandatory!";
    exit;
}

$email_from = 'tovelljamie40@gmail.com';//<== Put your email address here
$email_subject = "New form submission";
$email_body = "You have recieved a new message from the user $number.\n".
$to = "tovelljamie40@gmail.com";//<== Put your email address here
$headers = "From: $email_from \r\n";

//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done
?>

