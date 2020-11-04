function sendEmail(){
    var templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        companyName: document.getElementById("companyName").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_nmpvqb6","template_khy0t7u", templateParams, "user_FaeTjR8fF4GzoZ5xUVZrl")
        .then(function(response) {
            for(var element of document.getElementsByClassName("formEle")){
                element.disabled = true;
            }
            document.getElementById("subBtn").value = "SENT";
            alert("Email Sent");
        },function(error) {
            alert(error.text + "\n\nPlease send the email manually to khoo_ahwei@hotmail.com");
        });
}