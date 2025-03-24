document.getElementById("login-button").addEventListener("click", function (e) {
    let nameInput = document.getElementById("floatingInput").value.trim();
    let passwordInput = document.getElementById("floatingInputs").value.trim();
    let nameRegex = /^[a-zA-Z0-9]+$/;
    let passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,12}$/;
    if (!nameRegex.test(nameInput)) {
        alert("Name should contain only alphabets and numbers.");
        e.preventDefault();
        return;
    }
    if (!passwordRegex.test(passwordInput)) {
        alert("Password must be 8 to 12 characters long and include at least one special character.");
        e.preventDefault();
        return;
    }
    document.getElementById("Name").textContent = nameInput;
    window.location.href = "trackerpage.html";
});