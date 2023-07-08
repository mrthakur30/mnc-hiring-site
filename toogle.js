function toggleForm() {
    var signupContainer = document.getElementById("signupForm").parentNode;
    var signinContainer = document.getElementById("signinContainer");

    signupContainer.style.display = signupContainer.style.display === "none" ? "block" : "none";
    signinContainer.style.display = signinContainer.style.display === "none" ? "block" : "none";
  }

