<html>
<head>
<title>Ejemplo de PHP</title>
</head>
<body> 
<?php 
if (isset($_POST["submit"])) {
  $destino="vbiaggi10@gmail.com";
  $asunto="Quiero contactarme contigo";
    
  $name=$_POST['name'];
  $email=$_POST['email'];
  $subject=$_POST['subject'];
  $message=$_POST['message'];
  $destiny='vbiaggi10@gmail.com'
  $msn="
    Name: $name  \n
    email: $email  \n
    subject: $subject \n
    message: $message  \n
  ";
    
  $headers = "Reply-To:$email";
  mail($destiny,$subject,$message,$headers)
   
  // if(mail($destino,$asunto,$msn,$headers)){
  //   header("Location: contacto.php?m=1");
  // }
}
?>

</body>
</html>