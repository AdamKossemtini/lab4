function Submit() {
    console.log("Lab04");
    let form = document.getElementById("loginForm");
    console.log("Email: " + form.elements['Email'].value);
    console.log("Password: " + form.elements['Pass'].value);
    console.log("Website URL: " + form.elements['Url'].value);
    console.log("Check me out: " + document.getElementById("loginForm").elements['checkOut'].checked);
    return false;
}