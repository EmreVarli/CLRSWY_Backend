const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
    // toggle the type attribute
    const type =
        password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the eye slash icon
    // this.classList.toggle("fa-eye-slash");
    // togglePassword.classList.toggle("fa-eye-slash");  

    if (!togglePassword.classList.contains("fa-eye-slash")){
        togglePassword.classList.add("fa-eye-slash")
    }else{
        togglePassword.classList.remove("fa-eye-slash")
    }
});
