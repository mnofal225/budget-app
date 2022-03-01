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
const editAndDelete = document.querySelector('#editanddelete');


const getBudgetAmount = budgetCalculateBtn.addEventListener('click', ()=> {
    event.preventDefault();
    budgetTotal.innerText = budgetAmount.value;
    balanceTotal.innerText = parseFloat(budgetAmount.value) - parseFloat(expenseTotal.innerText);
}) 


const addExpensesList = addExpenseBtn.addEventListener('click', () => {
    let name = document.createElement('li') ;
    let value = document.createElement('li');

    let options = document.createElement('li');
    let editItem = document.createElement('a');
    let deleteItem = document.createElement('a');

    expenseTitle.appendChild(name);
    expenseValue.appendChild(value);
    let appendOptions =  editAndDelete.appendChild(options);
    let appendEandD = appendOptions.appendChild(editItem,deleteItem);


    name.innerText = expenseName.value;
    value.innerText = expenseAmount.value;
    
    
    calculateBalanceTotal();
    calculateExpenseTotal();
})


calculateBalanceTotal = ()=> {
    let total = 0;
    let numBalanceTotal =  parseFloat(balanceTotal.innerText);
    let numExpenseAmount = parseFloat(expenseAmount.value)

    total = numBalanceTotal - numExpenseAmount;

    return balanceTotal.innerHTML = total;
}

calculateExpenseTotal = ()=> {
    let total = 0;
    let numExpenseTotal =  parseFloat(expenseTotal.innerText);
    let numExpenseAmount = parseFloat(expenseAmount.value)

    total = numExpenseTotal + numExpenseAmount;

    return expenseTotal.innerText = total;
}