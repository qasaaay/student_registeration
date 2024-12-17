function login(){
    var username = document.getElementById("username").value;
    var password = document .getElementById("password").value;
    var loginPayload = {username: username, password: password};

    document.getElementById("submit").addEventListener('click',(reqPayload)=>{
        console.log(reqPayload)
    });
    
    function validateLogin(loginPayload){
        var isLogin = true;
        for(var key in loginPayload){
            var value = loginPayload[key];
            if(!value){
                isLogin = false;
            }
        }

        if(isLogin){
            redirectUserToSignUpPage();
        } else {  
            alert(`Invalid crdentials`)
        }
    }

    function redirectUserToSignUpPage(){
        window.location.href = "index.html";
    }
   
}