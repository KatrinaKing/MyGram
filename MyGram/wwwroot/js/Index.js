

init();


function init() {
    $.when(
        $.ajax({
            type: "GET",
            url: "/Home/getImages",
            async: true,
            datatype: "json",
            success: function (response) {
       
            }, failure: function (response) {
                alert(response);
            }
        })).then(
            function (data) {
           
                $("#MainContainer").append("<br>");
                $("#MainContainer").append("<br>");
                for (var i = 0; i < 4; i++) {
                    $("#MainContainer").append("<span id='row"+i+"'></span>");

                    for (var j = 0; j < 5; j++) {

                        $("#row" + i).append("<span class='imagespan clickable-image'>" + data[(5 * i) + j].descritpion + "</span>");
                        

                      

                    }
                    $("#MainContainer").append("<br>");
                }
                $("#MainContainer").append("<br>");
                $("#MainContainer").append("<br>");
                $("#MainContainer").append("<span>About Blog Jobs Help </span>");
                $("#MainContainer").append("<br>");
                $("#MainContainer").append("<span>English 2021 MyGram </span>");

                $(".clickable-image").on("click", function (data) {
                    $.toast({
                        heading: "Liked",
                        text: "You liked this Image",
                        loader: true,
                        bgColor: '#ff0066'
                    });
                });

            }
        );
}



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
            $("#confirmRegistration").dialog("open");
        }
    });
});



$("#dialog").dialog({
    autoOpen: false,
    width: 750,
    modal: true,
    close: function () {
        console.log("closed the form");
    }
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

    //$("#logindiv").css("display", "block");
    $("#dialog").dialog("open");

  

});

dataTable = $("#MainCharacterTable").DataTable();



$("#confirmRegistration").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
        "Ok": function () {

            $.when(
                $.ajax({
                    type: "POST",
                    url: "/Home/validatesInfo",
                    async: true,
                    datatype: "json",
                    data: {
                        username: $("#UserInput").val()
                        , password: $("#PasswordInput").val()
                    },
                    success: function (response) {

                    }, failure: function (response) {
                        alert(response);
                    }
                })).then(
                    function (data) {
                        console.log(data);
                        //alert(data.message);
                        $.toast({
                            heading: 'Success',
                            text: data.message,
                            icon: 'info',
                            loader: true,
                            bgColor: '#ff0066'
                        })
                    }
                );
               
        },
        Cancel: function () {
            $("#confirmRegistration").dialog("close");
        }
    },
    close: function () {
        console.log("closed the form");
    }});