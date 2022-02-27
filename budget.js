const budgetAmount =  document.querySelector('#budgetAmount');
const budgetTotal = document.querySelector('#budgettotal');
const budgetCalculateBtn = document.querySelector('#budgetCalculateBtn');
const balanceTotal =  document.querySelector('#balancetotal');
const expenseName = document.querySelector('#expensename');
const expenseAmount = document.querySelector('#expenseamount');
const addExpenseBtn = document.querySelector('#addexpensebtn');
const expenseTotal = document.querySelector('#expensetotal');
const expenseTitle = document.querySelector('#expensetitle');
const expenseValue = document.querySelector('#expensevalue');


const getBudgetAmount = budgetCalculateBtn.addEventListener('click', ()=> {
    event.preventDefault();
    budgetTotal.innerText = budgetAmount.value;
    balanceTotal.innerText = budgetAmount.value;
}) 


const addExpensesList = addExpenseBtn.addEventListener('click', () => {
    let name = document.createElement('li') ;
    let value = document.createElement('li');

    expenseTotal.innerText = expenseAmount.value;
    expenseTitle.innerText = expenseName.value;
    expenseValue.innerText = expenseAmount.value;

    calculateBalance();

})

console.log('balancetotal', balanceTotal.innerText);
console.log('expense amount',expenseAmount.value);

calculateBalance = ()=> {
    let total = 0;
    let numBalanceTotal =  parseFloat(balanceTotal.innerText);
    let numExpenseAmount = parseFloat(expenseAmount.value)

    total = numBalanceTotal - numExpenseAmount;

    return balanceTotal.innerHTML = total;

}




