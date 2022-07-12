function validateForm() {
    let x = document.forms["form1"]["name"].value;
    let y = document.forms["form1"]["email"].value;
    let z = document.forms["form1"]["message"].value;
    let mailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (x == "") {
        alert("Please fill the name: ");
        return false;
    } else if (y == "") {
        alert("Please fill the email: ");
        return false;
    } else if (z == "") {
        alert("Please fill the message: ");
        return false;
    } else if (/[^a-zA-Z ]/.test(x)) {
        alert("The name must only contain alphabets: ");
        return false;
    } else if (!y.match(mailregex)) {
        alert("Please enter valid email address: ");
        return false;
    } else {
        alert("Your form has been submitted successfully: ");
        return true;
    }

}

function toggle1() {
    var x = document.getElementById("fa-bars");
    var y = document.getElementById("fa-times");
    var p = document.getElementById("ham_menu");

    y.style.display = 'block';
    x.style.display = 'none';
    p.style.display = 'block';
}
function toggle2() {
    var x = document.getElementById("fa-bars");
    var y = document.getElementById("fa-times");
    var p = document.getElementById("ham_menu");

    y.style.display = 'none';
    x.style.display = 'block';
    p.style.display = 'none';
}