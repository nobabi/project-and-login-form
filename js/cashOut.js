
document.getElementById("btn-cash-out")
.addEventListener('click',function(e){
    e.preventDefault();
 const cashOut= document.getElementById("input-cash-out").value;
 const pinNumber= document.getElementById("input-cash-out-pin").value;
//  const currentBalance=document.getElementById("current-balance").innerText;
 if(pinNumber==='1234')
 {
    const balance = document.getElementById("current-balance").innerText;
        //setp 5 
      
       const cashOutNumber =parseFloat(cashOut);
       const balanceNumber= parseFloat(balance);
       const newBalance =  balanceNumber-cashOutNumber;
       // step 06
       document.getElementById("current-balance").innerText=newBalance;
       console.log("newBalance",newBalance);

 }
 else
 {
    alert("Fail to Decrease Money")
 }
});