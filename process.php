<?php
  if (isset($_POST['email']))  {
  
    // Email information
    $admin_email = "wilder.m@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    
    // Send email
    mail($admin_email, "New Form Submission", $name . ' - ' . $phone, "From:" . $email);
    
    // Redirect after mail function 
    // header('Location: http://sideledger.com/success.html');
    header('Location: /success.html');
  } 