<?php
// connceton with database using pdo 

$host="localhost";
$username="root";
$password="";
$conn= new PDO("mysql:host=$host;dbname=restaurants",$username,$password);
$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
// echo"database connectted";

if(isset($_POST['btn']))
{
  $name=$_POST['name'];
  $email=$_POST['email'];
  $message=$_POST['textarea'];

 $contact= $conn->prepare("INSERT INTO `contactform` Values('$name','$email','$message')");
 $result=$contact->execute();
 if($result){
  echo"<script> alert('Thank You')</script>";
 }
 else{
  echo"<script> alert('Somthing went Wrong')</script>";

 }

}


?>