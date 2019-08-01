<?php
if (isset($_POST['signup-submit'])){
    
    
    require 'dbh.inc.php';
    
    $username = $_POST['uid'];
    $email = $_POST['mail'];
    $password = $_POST['pwd'];
    $passwordrepeat = $_POST['pwd-repeat'];
    
}
    if (empty($username) || (empty($email) || (empty($password) || (empty($passwordrepeat) )))) {
        header("Location: ../signup.php?error=emptyfields&uid=".$username. "&mail=" .$email);
        exit();
    }
         if (!filter_var($email, FILTER_VALIDATE_EMAIL) && !preg_match("/^[a-zA-Z-0-9]*$/", $username)) {
            header("Location: ../signup.php?error=invalidemail&uid=");
        exit();
            
        
    }
                                                if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                                                    header("Location: ../signup.php?error=invalidemail&uid=" .$username);
        exit();
                                                   
                                               }
                                                if (!preg_match("/^[a-zA-Z0-9]*$/", $username)) {
                                                    header("Location: ../signup.php?error=invaliduid&mail=" .$email);
        exit();
                                               }
        if ($password !== $passwordRepeat) {
            header("Location: ../signup.php?error=passwordcheck&uid=" .$username);
        exit();
            
            
        }
        if { )
            $sql = "SELECT uidUsers FROM users WHERE uidUsers=?";
            $stmt = mysqli_stmt_init($conn);
            if (!mysqli_stmt_prepare($stmt, $sql))
                header("Location: ../signup.php?error=sqlerror&uid=" .$username);
        exit();
        }
         if{
            mysqli_stmt_bind_param($stmt, "s", $username,);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            $resultCheck = mysqli_stmt_num_rows($stmt);
            if ($resultCheck > 0) 
                header("Location: ../signup.php?error=usertaken&mail=" .$email);
        exit();
            }
            if {
                $sql = "INSERT INTO users (uidUsers, emailUsers, pwdUsers) Values (?, ?, ?)";
                $stmt = mysqli_stmt_init($conn);
                if (!mysqli_stmt_prepare($stmt, $sql)) {
                    header ("Location: ../signup.php?signup=success");
                    exit();
                }
                if {
                    $hashedPwd = password_hash($password, PASSWORD_DEFAULT )
                    mysqli_stmt_bind_param($stmt, "sss", $username, $email, $hashedPwd);
                    mysqli_stmt_execute($stmt);
                                    header("Location: ../signup.php?error=usertaken&mail=" .$email);
        exit();
                    
                }
                    
                }
                    
                
        mysqli_stmt_close($stmt);
        mysqli_close($conn);
        
        if {
                header("Location: ../signup.php");
        exit();
                    
        }        
                
                
            
    
                                               
                                               
                                               
    
    

                                               
                                               Left off at 1:12:47 in video 