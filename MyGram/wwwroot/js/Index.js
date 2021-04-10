
/*$("#MainContainer").append("<span>My Gram </span>");
$("#MainContainer").append("<button>Log In </button>");
$("#MainContainer").append("&nbsp;");
$("#MainContainer").append("<button> Sign up</button>");
*/
$("#MainContainer").append("<br>");
$("#MainContainer").append("<br>");
$("#MainContainer").append("<span>Image 1 Image 2 Image 3 Image 4 Image 5</span>");
$("#MainContainer").append("<br>");
$("#MainContainer").append("<br>");
$("#MainContainer").append("<span>About Blog Jobs Help </span>");
$("#MainContainer").append("<br>");
$("#MainContainer").append("<span>English 2021 MyGram </span>");


$("#login").click(function () {
    alert("You have logged in");
});


$("#register").click(function () {
    $("form[name='registration']").validate({
        rules: {
            User: "required",
            Password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            User: "Please enter your user name",
            Password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
        },
        submitHandler: function (form) {
            e.preventDefault();
            $.when(
                $.ajax({
                    type: "POST",
                    url: "/HomeController/validatesInfo",
                    data: { username: $("#usernameInput").val(), password: ("#passwordInput").val() },
                    success: function (response) {
                        console.log(response);
                    }
                })).then(
                    function (response) {
                        if (response) {
                            alert("User is: " + $("#usernameInput").val() + ", and the Password is: " + $("#passwordInput").val());

                        } else {

                            alert("error");
                        }
                    }
            );

            return false;
        }
    });
  
    
});


$("#signup").click(function () {
    
    /*$("#logindiv").append("<br>");
    $("#logindiv").append("<span>User <input type='text' placeholder='Add User Name here'></span>");
    $("#logindiv").append("<br>");
    $("#logindiv").append("<span>Password <input type='text' placeholder='Add password here'></span>");
    $("#logindiv").append("<br>");
    $("#logindiv").append("<br>");
    $("#logindiv").append("<br>");
    $("#logindiv").append("<br>");
    $("#logindiv").append("<span><button id='register'>Register</button></span>");*/

    $("#logindiv").css("display", "block");
});