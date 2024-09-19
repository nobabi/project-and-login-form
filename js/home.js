
// add money to the account
// setp :01
document.getElementById("btn-add-money")
.addEventListener("click",function(e){
    // sept prevent 
    e.preventDefault();
    //setp 02
    const addMoneyInput=document.getElementById("input-add-money").value;

    // step 03 get the pin number
    // const pinNumber = document.getElementById("input-pin-number").value;
     const   pintNumber = document.getElementById('input-pin-number').value;
     //verify pin number

     if(pintNumber==="1234")
     {
      

        const balance = document.getElementById("current-balance").innerText;
        //setp 5 
      
       const addMoneyNumber =parseFloat(addMoneyInput);
       const balanceNumber= parseFloat(balance);
       const newBalance =  addMoneyNumber+balanceNumber;
       // step 06
       document.getElementById("current-balance").innerText=newBalance;
       console.log("newBalance",newBalance);


     }

     else{
        alert("fail to added money")
     }

    // console.log(pintNumber);
})