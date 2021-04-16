
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
            UserInput: "required",
            PasswordInput: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            UserInput: "Please enter your user name",
            PasswordInput: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
        },
        submitHandler: function (form) {
            $.when(
                $.ajax({
                    type: "POST",
                    url: "/Home/validatesInfo",
                    data: {
                        username: $("#UserInput").val()
                        , password: $("#PasswordInput").val()
                    },
                    success: function (response) {

                    }, failure: function (response) {
                        alert(response);
                    }
                })).then(
                    function (response) {
                        if (response) {
                            alert("User has been registered");
                        } else {

                            alert("error");
                        }
                    }
                );
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