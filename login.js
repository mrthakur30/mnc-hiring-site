    
     const user  = "mukul";

    function signup(event) {
        event.preventDefault();
        if(user){
            window.location.href = "http://127.0.0.1:5500/dashboard.html";
        }
       
    }

    function signin(event) {
        event.preventDefault();
        if(user){
            window.location.href = "http://127.0.0.1:5500/dashboard.html";
        }
    }

    function logout(event) {
        event.preventDefault();
        user = null ;
        window.location.href = "http://127.0.0.1:5500/home.html";
    }

    function toggleForm() {
      var signupContainer = document.getElementById("signupForm").parentNode;
      var signinContainer = document.getElementById("signinContainer");

      signupContainer.style.display = signupContainer.style.display === "none" ? "block" : "none";
      signinContainer.style.display = signinContainer.style.display === "none" ? "block" : "none";
    }

    function authorizeDashboard(user){
        var authorizedContainer = document.getElementById("authorizedContainer");
        var unauthorizedContainer = document.getElementById("unauthorizedContainer");
      
         authorizedContainer.style.display = "block";
         unauthorizedContainer.style.display = "none";
        
    }