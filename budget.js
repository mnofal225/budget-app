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
let testlist = [];


const getBudgetAmount = budgetCalculateBtn.addEventListener('click', ()=> {
    event.preventDefault();
    budgetTotal.innerText = budgetAmount.value;
    balanceTotal.innerText = parseFloat(budgetAmount.value) - parseFloat(expenseTotal.innerText);
}) 

const populateList = (arr) => {
    let itemName = document.createElement('li') ;
    let itemValue = document.createElement('li');
    for(i = 0; i < arr.length; i++){
        itemName.innerText = arr[i].name
        itemValue.innerText = arr[i].value
        expenseTitle.appendChild(itemName);
        expenseValue.appendChild(itemValue);
    }
    
    console.log('m',arr);
}

const addExpensesList = addExpenseBtn.addEventListener('click', () => {
    event.preventDefault();
    let counter = 1 + expenseList.length;
    let  expenseDetails = {
        name : expenseName.value, 
        value: parseFloat(expenseAmount.value), 
        id: counter
    }
    expenseList.push(expenseDetails);


    populateList(expenseList);

    

    let options = document.createElement('li');
    let appendOptions =  editAndDelete.appendChild(options);

    
    let deleteItem = document.createElement('a');
    deleteItem.href = '#';
    deleteItem.innerText = 'delete';
    deleteItem.addEventListener('click', () => { 
        deleteItemFunc(expenseList) 
    });
    appendOptions.appendChild(deleteItem);

    let deleteItemFunc = (arr) => {
        for(let i = 0; i < arr.length; i++){
            if(arr[i].id === expenseDetails.id){
                arr.splice(i, 1)
                console.log('splice init', arr);
                expenseTitle.removeChild(expenseTitle.children[i]);
                expenseValue.removeChild(expenseValue.children[i]);
                editAndDelete.removeChild(editAndDelete.children[i]);
            }
        }    
    }
   
    calculateBalanceTotal();
    calculateExpenseTotal();
})

// calculates the balance total 
let calculateBalanceTotal = () => {
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





































    // let editItem = document.createElement('a');
    // editItem.href = '#';
    // editItem.innerText = ' edit';
    // editItem.addEventListener('click', () => { 
    //     editItemFunc(expenseDetails) 
    // });
    // let appendEdit = appendOptions.appendChild(editItem);

    // let editItemFunc = (expdet) => {
    //     for(let i = 0; i < expenseList.length; i++){
    //         if(expenseList[i].id == expdet.id){
    //             expenseList.splice(i, 1,  )
    //             console.log('edit init', expenseList);    
    //         }
    //     }
    // }