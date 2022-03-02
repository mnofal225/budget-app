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
let expenseList = [];
let isDeleteClicked = false;
let isEditClicked = false;


const getBudgetAmount = budgetCalculateBtn.addEventListener('click', ()=> {
    event.preventDefault();
    budgetTotal.innerText = budgetAmount.value;
    balanceTotal.innerText = parseFloat(budgetAmount.value) - parseFloat(expenseTotal.innerText);
}) 


const addExpensesList = addExpenseBtn.addEventListener('click', () => {
    let name = document.createElement('li') ;
    let value = document.createElement('li');

    expenseTitle.appendChild(name);
    expenseValue.appendChild(value);
    
    value.innerText = expenseAmount.value;

    let listTracker = (itemName, itemValue) => {
        let counter = 1 + expenseList.length;
        itemName.innerText = expenseName.value;
        itemValue.innerText = parseFloat(expenseAmount.value);
       
        expenseList.push({name : itemName.innerText, value: parseFloat(itemValue.innerText), id: counter})
        console.log(expenseList)
    }



    // let options = document.createElement('li');
    // let appendOptions =  editAndDelete.appendChild(options);

    // let editItem = document.createElement('a');
    // editItem.href = '#';
    // editItem.innerText = 'edit ';
    // editItem.addEventListener('click', editItemFunc());
    // let appendEdit = appendOptions.appendChild(editItem);
    
    
    // let deleteItem = document.createElement('a');
    // deleteItem.href = '#';
    // deleteItem.innerText = 'delete';
    // deleteItem.addEventListener('click', () => { isDeleteClicked = true , deleteItemFunc(options) });
    // let appendDelete = appendOptions.appendChild(deleteItem);
    
    
    calculateBalanceTotal();
    calculateExpenseTotal();
    listTracker(name, value);
})

// calculates the balance total 
let calculateBalanceTotal = ()=> {
    let total = 0;
    let numBalanceTotal =  parseFloat(balanceTotal.innerText);
    let numExpenseAmount = parseFloat(expenseAmount.value)

    total = numBalanceTotal - numExpenseAmount;

    return balanceTotal.innerHTML = total;
}

// calculates the expense total 
let calculateExpenseTotal = ()=> {
    let total = 0;
    let numExpenseTotal =  parseFloat(expenseTotal.innerText);
    let numExpenseAmount = parseFloat(expenseAmount.value)

    total = numExpenseTotal + numExpenseAmount;

    return expenseTotal.innerText = total;
}

// tracks the list of expenses 
// let listTracker = (name, value) => {
//  let counter = 1 + expenseList.length;
//  let itemName = name.value;
//  let itemValue = parseFloat(value.value);

//  expenseList.push({name : itemName, value: itemValue, id: counter})
//  console.log(expenseList)
// }


// Delete functionality 
let deleteItemFunc = (item) => {
    // if(item.parentNode){
    //     item.parentNode.removeChild(item);
    // }
    for(let i = 0; i < expenseList.length; i++){
        if(isDeleteClicked === true){
            expenseList.splice(i,1)
        }
    }
}



