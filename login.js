const display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function login() {
    const password = document.getElementById("password").value;

    if (password === "0411") {
        display1.value = "Login Successful";
        open("do.html", "_self");
    }
    else if (password === "") {
         display1.value = "Enter Password";
    }
    else {
        display1.value = "Login Failed";
    }
}