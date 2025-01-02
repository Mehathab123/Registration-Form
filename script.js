const form = document.getElementById('registrationForm');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();  
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    errorMessage.textContent = "";

    
    if (password === confirmPassword) {
        errorMessage.textContent = "Your Password Matches";
        errorMessage.style.color = "#ff006e";  
    } else {
        errorMessage.textContent = "Your Password Doesn't Match";
        errorMessage.style.color = "#d00000";  
    }
});



</script>

<!-- <script>
   document.getElementById("registrationForm").addEventListener('submit',function(e){
       e.preventDefault();

       firstName=document.getElementById("first-name").value;
       lastName=document.getElementById("last-name").value;
       phoneNo=document.getElementById("phonenumber").value;
       email=document.getElementById("email").value;
       password=document.getElementById("password").value;
       confoirmPasword=document.getElementById("confirm-password").value;
       address=document.getElementById("address").value;

       const data={
           fName:firstName,
           lName:lastName,
           phone:phoneNo,
           email:email,
           password:password,
           cPassword:confoirmPasword,
           address:address
       }

       fetch("http://192.168.0.110:8080/Customer/register",{
           method:"POST",
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify(data)
       }).then(response=>{
           console.log("successs")
       }).catch(error=>{
           console.log("Failed")
       })

   })
</script> -->