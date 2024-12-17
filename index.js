    document.getElementById("signupForm").addEventListener('submit', validateForm);
    
    function validateForm(event) {
        event.preventDefault();
        var firstName = document.getElementById("firstName").value;
        var middleName = document.getElementById("middleName").value;
        var lastName = document.getElementById("lastName").value;
        var mobile = document.getElementById("mobile").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        const obj = {firstName,middleName,lastName,mobile,username,password};
        
      fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      })
      .then(response => {
        if (!response.ok) {
          alert('Network response was not ok'); 
        }
        return response.json();
      })
      .then(data => {
        alert(JSON.stringify(data)); // Handle the API response data here
      })
      .catch(error => {
        debugger;
        alert('There was a problem with the fetch operation:', error);
      });
    }