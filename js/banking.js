// total get the element
function getInputValue(inputId){
        const depositInput = document.getElementById(inputId);
        const inputAmountText = depositInput.value;
        const DepositValue = parseFloat(inputAmountText);
         // clear input Field
        depositInput.value = '';
        return DepositValue;
}

// common function for deposit and withdraw total
function updateTotalField(totalFieldId, amount){
        const depositTotal = document.getElementById(totalFieldId);
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const totalDepositAmount = previousDepositAmount + amount;
    depositTotal.innerText = totalDepositAmount;
}
// common balance update
function getCurrentBalance(){
        const balanceTotal = document.getElementById('balance-total');
        const currentBalanceText = balanceTotal.innerText;
        const currentBalanceAmount = parseFloat(currentBalanceText);
        return currentBalanceAmount;
}
    

// withdraw condition
function totalBalanceUpdate(depositAmount, isAdd){
        const balanceTotal = document.getElementById('balance-total');
        // const currentBalanceText = balanceTotal.innerText;
        // const currentBalanceAmount = parseFloat(currentBalanceText);
        const currentBalanceAmount = getCurrentBalance();
       if(isAdd == true){
        balanceTotal.innerText = currentBalanceAmount + depositAmount;
       }
       else{
        balanceTotal.innerText = currentBalanceAmount - depositAmount;
       }
}



document.getElementById("deposit-btn").addEventListener('click', function(){
        // get current deposit
//     const depositTotal = document.getElementById('deposit-total');
//     const previousDepositText = depositTotal.innerText;
//     const previousDepositAmount = parseFloat(previousDepositText);
//     const totalDepositAmount = previousDepositAmount + newDepositAmount;
//     depositTotal.innerText = totalDepositAmount;
    

    // update Balance
//     const balanceTotal = document.getElementById('balance-total');
//     const currentBalanceText = balanceTotal.innerText;
//     const currentBalanceAmount = parseFloat(currentBalanceText);
//     const totalBalanceAmount = currentBalanceAmount + newDepositAmount;
//     balanceTotal.innerText = totalBalanceAmount;
        const newDepositAmount = getInputValue("deposit-input");
        if(newDepositAmount > 0){
         updateTotalField('deposit-total', newDepositAmount);
        totalBalanceUpdate(newDepositAmount, true);
        }
        
  
})


// withdraw handle event 
document.getElementById("withdraw-btn").addEventListener('click', function(){
        // const withdrawTotal = document.getElementById("withdraw-input");
        // const withdrawInputText = parseFloat(withdrawTotal.value);
        // const newWithdrawInputAmount = withdrawInputText;
        

        // withdraw update
        // const withdrawInput = document.getElementById('withdraw-total');
        // const previousWithdrawAmountText = withdrawInput.innerText;
        // const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
        // const withdrawTotalAmount = previousWithdrawAmount + newWithdrawInputAmount;
        // withdrawInput.innerText = withdrawTotalAmount;
       


        // update balance after withdraw
        // const balanceTotal = document.getElementById('balance-total');
        // const balanceAmountText = balanceTotal.innerText;
        // const balanceAmount = parseFloat(balanceAmountText);
        // const totalBalanceAmount = balanceAmount - newWithdrawInputAmount;
        // balanceTotal.innerText = totalBalanceAmount;
        const newWithdrawInputAmount = getInputValue('withdraw-input');
        const currentBalance = getCurrentBalance();
        if(newWithdrawInputAmount > 0 && newWithdrawInputAmount < currentBalance){
        updateTotalField('withdraw-total', newWithdrawInputAmount)
        totalBalanceUpdate(newWithdrawInputAmount, false)
        }
        if(newWithdrawInputAmount > currentBalance){
                alert('You cannot withdraw more than what you have in your account ');
        }
        
      
})
