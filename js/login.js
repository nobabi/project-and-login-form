
// console.log("hello");
// step -01 event handler
document.getElementById("button-login").addEventListener("click", function(event){
    // step 02 prevent default behavior (prevent reloading browser) 
    event.preventDefault();
    // step 3 get the phone number
    const phoneNumber =document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
   if(phoneNumber==="5" && pinNumber==="1234")
   {
    console.log('Your are logged in')
    window.location.href='/home.html'
   }
   else
   {
    alert('Wrong phone or pin number')
   }
    
    

});