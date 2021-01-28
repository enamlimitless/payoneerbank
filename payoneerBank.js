//Login And Jump Dashboard Section
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})
//Deposit Button Event Handler

const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("deposit-amount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("current-deposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    
    document.getElementById("current-deposit").innerText = totalDeposit;
    document.getElementById("deposit-amount").value = "";

})

// Withdraw button event handler
const withdrawBtn = document.getElementById("withdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawAmount = document.getElementById("withdraw-amount").value;
    const withdrawNumber = parseFloat(withdrawAmount);

    const currentWithdraw = document.getElementById("current-withdraw").innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    const totalWithdraw = withdrawNumber + currentWithdrawNumber;

    document.getElementById("current-withdraw").innerText = totalWithdraw;
    document.getElementById("withdraw-amount").value = "";

})

// Balance Event Handler