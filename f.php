
<?php
        $serverName = "localhost";
        $username = "pruthvi";
        $password = "1234";
        $databasename = "shadowart";
        $conn = mysqli_connect($serverName, $username, $password, $databasename);
        $name = $_POST['name'];
        $email=$_POST['email'];
        $comment=$_POST['comment'];
        $query = "INSERT INTO table1(`name`, `email`, `comment`) VALUES( '$name','$email','$comment')";
      if( mysqli_query($conn, $query)){
         echo "data has been inserted";
  }
     else{
         echo "errorrrr". die(mysqli_error($conn));
    }
     
    ?>