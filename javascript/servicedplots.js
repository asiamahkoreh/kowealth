const phoneNumber = document.getElementById("phoneNumber")
const errorElement = document.getElementById("error")


phoneNumber.addEventListener('click', function()  { 
     
     if (phoneNumber.value.length < 10) {
          errorElement.textContent = ("Phone Number must be 10 digits")
     }
})