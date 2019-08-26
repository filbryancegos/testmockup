<?php
    include('menu.php')
?>

<?php
    include('lib/includes/header.php')
?>

<section id="contact-us">
    <div class="container">
        <div class="row text-center">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12-xs slideDown">
                <h2>Contact Us</h2>
                <p class="pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatem nesciunt ipsum praesentium sunt, repellat deserunt unde fuga reprehenderit, numquam suscipit in, error ipsa explicabo, aspernatur quo ipsum rem aperiam. Facere nulla fugit suscipit voluptatem repellendus a ut voluptatibus eaque aspernatur sunt consequatur cupiditate animi aut, molestias ea totam ullam harum eos! Error iste harum animi maxime rem?</p>
            </div>
        </div>
    </div>
</section>


<section id="contact-form">
    <div class="container">
        <div class="row d-flex align-items-center justify-content-end ">
            <div class="col-lg-6 col-md-6 col-sm-6 col-12-xs slideLeft">
                <h3 class="mb-5">Feel Free to reach out</h3>
                
                <?php
                // define variables and set to empty values
                $nameErr = $emailErr;
                $name = $email = $message;

                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                    if (empty($_POST["name"])) {
                        $nameErr = "Name is required";
                    } else {
                        $name = test_input($_POST["name"]);
                        // check if name only contains letters and whitespace
                        if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
                        $nameErr = "Only letters and white space allowed"; 
                        }
                    }
                    
                    if (empty($_POST["email"])) {
                        $emailErr = "Email is required";
                    } else {
                        $email = test_input($_POST["email"]);
                        // check if e-mail address is well-formed
                        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                        $emailErr = "Invalid email format"; 
                        }
                    }
                        
                    if (empty($_POST["message"])) {
                        $message = "";
                    } else {
                        $message = test_input($_POST["message"]);
                    }

                }

                function test_input($data) {
                $data = trim($data);
                $data = stripslashes($data);
                $data = htmlspecialchars($data);
                return $data;
                }
                ?>
                <form method="post" id="form"  action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
                    <div class="form-group">
                        <div class="d-flex align-items-center">
                            <input type="text" class="form-control" name="name" id="name" value="<?php echo $name;?>" placeholder="your name here">
                            <span class="error d-none">*</span>
                        </div>
                        <p class="error"><?php echo $nameErr;?></p>
                    </div>  
                    <div class="form-group">
                        <div class="d-flex align-items-center">
                            <input type="text" name="email" class="form-control" id= "email" value="<?php echo $email;?>" placeholder="your email here">
                            <span class="error d-none">*</span>
                        </div>
                        <p class="error"><?php echo $emailErr;?></p>
                    </div>
                    <div class="form-group">
                        <textarea name="message" rows="5" cols="40" id="message"><?php echo $message;?></textarea>
                    </div>
                    <input type="submit" name="submit" class="btn btn-1" value="Submit">  
                </form>

            </div>
            <?php include('lib/includes/right.php') ?>
        </div>
    </div>
</section>


<?php
    include('lib/includes/footer.php')
?>