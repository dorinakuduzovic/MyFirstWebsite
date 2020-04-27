function validPhoneNumber(evt) {


    var iKeyCode = (evt.which) ? evt.which : evt.keyCode;
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57)) {
        return false;
    }


}

function validForm() {
    let fname = document.getElementById('fname'); // first name input
    let lname = document.getElementById('lname'); // last name input
    let fnameText = document.getElementById('fnameText'); // element ispod input za first name
    let lnameText = document.getElementById('lnameText'); // element ispod input za last name
    let letters = /^[a-z]*$/i;
    // provjera first name
    if (!fname.value.match(letters)) {
        fname.focus();
        fnameText.innerHTML = "First name can contain letters only";
        return false;
    } else fnameText.innerHTML = "";
    // provjera last name
    if (!lname.value.match(letters)) {
        lname.focus();
        lnameText.innerHTML = "Last name can contain letters only";
        return false;
    } else lnameText.innerHTML = "";

    let address = document.getElementById('address'); // address input
    let addressText = document.getElementById('addressText'); // element ispod input za address
    // provjera address
    if (address.value === "") {
        address.focus();
        addressText.innerHTML = "Address cannot be empty";
        return false;
    } else addressText.innerHTML = "";

    let phoneNumber = document.getElementById("number"); // phone number input
    let phoneNumberText = document.getElementById("numberText"); // element ispod input za phone number
    // provjera 9 digits min za phone number
    if (phoneNumber.value.length < 9) {
        phoneNumber.focus();
        phoneNumberText.innerHTML = "Number cannot be shorter than 9 digits";
        return false;
    } else phoneNumberText.innerHTML = "";

    let email = document.getElementById('mail'); // email input
    let emailText = document.getElementById('mailText'); // element ispod input za email
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // provjera e-maila
    if (!filter.test(email.value)) {
        emailText.innerHTML = "E-mail must be valid";
        email.focus();
        return false;
    } else emailText.innerHTML = "";

    alert("Order confirmed");
}