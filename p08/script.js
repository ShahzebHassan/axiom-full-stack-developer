//Getting DOM Elements
const balance = document.getElementById('balance');
const moneyCredit = document.getElementById('money-credit');
const moneyDebit = document.getElementById('money-debit');
const list = document.getElementById('list');
const addForm = document.getElementById('add-form');
const amount = document.getElementById('amount');
const description = document.getElementById('reason');

/*/ Dummy Transactions
const dummyTransactions = [
    { id: 1, reason: 'Salary', amount: 1000 },
    { id: 2, reason: 'Electric Bill', amount: -500 },
    { id: 3, reason: 'Internet Bill', amount: -100 },
    { id: 4, reason: 'Profit', amount: 5000 }
];*/

const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
  );
  let transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

//Function to display Transcations in DOM - History section
function displayTransaction(transaction) {
    //Calculate if transaction is credit or Debit
    const type = transaction.amount > 0 ? '+' : '-';
    // Create a list items for the transaction
    const transactionLI = document.createElement('li');
    //Determine class based on transaction type. if positive,then credit,otherwise debit
    transactionLI.classList.add(transaction.amount > 0 ? 'credit' : 'debit');
    //assign the inner HTML for the transaction li
    transactionLI.innerHTML = `
      ${transaction.reason} <span>${transaction.amount}</span>
      <button class="delete-btn" onclick="deleteTransaction(${transaction.id})" >X</button>
    `; 


    //add the li in the DOM under the transaction history list
    list.appendChild(transactionLI);
};

//function to update balance
function updateBalance() {
    //create a new array with just the amount
    const transactionAmounts = transactions.map(transaction => transaction.amount);
    //calculate balance values
    const totalBalance = transactionAmounts.reduce((acc, amount) => ( acc += amount) ,0);
    //calculate total credit balance value
    const creditBalance = transactionAmounts
                          .filter(amount => amount > 0)
                          .reduce((acc, amount) => (acc += amount) ,0)
    //calculte total debit balance value
    const debitBalance = transactionAmounts
                          .filter(amount => amount < 0)
                          .reduce((acc, amount) => (acc += amount) ,0)
                          //update values in the DOM
    balance.innerText = `$${totalBalance}`;
    moneyCredit.innerText = `$${creditBalance}`;
    moneyDebit.innerText = `$${debitBalance}`;                     
};
//function to create a random ID
function createID() {
    return Math.floor(Math.random() *1000000000);;
};
//function to add transaction from the form
function addTransaction(e) {
    //stop page for reloading
    e.preventDefault();
    //check if form has valid data
    if(reason.value.trim() === '' || amount.value.trim() === '') {
        //error msg when form is not complete
        alert("Please provide the valid reason and Transaction ammount")
    } else{
        //create an object for the transaction contain id,
        //text for the reason, and the transaction ammount
        const transaction = {
            id:createID(), 
            reason: reason.value,
            amount: +amount.value
        }
//push the new transaction into thr transaction array
transactions.push(transaction);
//display new transactions in the DOM
displayTransaction(transaction);
//update all balance
updateBalance();
updateLocalStorage();
 //clear form fields
 reason.value = '';
 amount.value = '';
 
 }

};
//function to delete transaction from the history
function deleteTransaction (id) {
transactions = transactions.filter(transaction => transaction.id !== id);
//initilize the app again to update the dom
updateLocalStorage();
init();
};
//Update local storage transactions
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}
//initilize hte app again to updatte the dom
//Function to Initialize Application
function init() {
    //clear all transaction history
    list.innerHTML = '';
    //display all transactions in db in the the DOM
    transactions.forEach(displayTransaction);
    //update all balance values
    updateBalance();
   
};

//Event Litsners
//listen for form submit
addForm.addEventListener('submit', addTransaction);
 //Initialize the Application
 init();
