const budgetAmount = document.querySelector("#budgetAmount");
const budgetTotal = document.querySelector("#budgettotal");
const budgetCalculateBtn = document.querySelector("#budgetCalculateBtn");
const balanceTotal = document.querySelector("#balancetotal");
const expenseName = document.querySelector("#expensename");
const expenseAmount = document.querySelector("#expenseamount");
const addExpenseBtn = document.querySelector("#addexpensebtn");
const expenseTotal = document.querySelector("#expensetotal");
const expenseTitle = document.querySelector("#expensetitle");
const expenseValue = document.querySelector("#expensevalue");
const editAndDelete = document.querySelector("#editanddelete");
let expenseList = [];

const getBudgetAmount = budgetCalculateBtn.addEventListener("click", () => {
  event.preventDefault();
  budgetTotal.innerText = budgetAmount.value;
  calculateBalanceTotal();
});

const calculateExpenseTotal = () => {
    let expenseSum  = 0 ;
    expenseList.forEach(expense => {
        expenseSum += expense.value
    })
    return expenseTotal.innerText = expenseSum;
};

const calculateBalanceTotal = () => {
    balanceTotal.innerText = 
      parseFloat(budgetTotal.innerText) - parseFloat(expenseTotal.innerText);
};

const calculateExpenseAndBalanceTotal = () => {
    calculateExpenseTotal();
    calculateBalanceTotal();
};

const populateList = (arr) => {
  let itemName = document.createElement("li");
  let itemValue = document.createElement("li");
  for (i = 0; i < arr.length; i++) {
    itemName.innerText = arr[i].name;
    itemValue.innerText = arr[i].value;
    expenseTitle.appendChild(itemName);
    expenseValue.appendChild(itemValue);
  }
};

const deleteItemFunc = (arr, expenseDetails) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === expenseDetails.id) {
        arr.splice(i, 1);
        expenseTitle.removeChild(expenseTitle.children[i]);
        expenseValue.removeChild(expenseValue.children[i]);
        editAndDelete.removeChild(editAndDelete.children[i]);
        calculateExpenseAndBalanceTotal();
        }
    }
};

const editItemFunc = (arr, expenseDetails) => {
    let removedItem = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === expenseDetails.id) {
        removedItem = arr.splice(i, 1);
        console.log(removedItem[0]);
        expenseTitle.removeChild(expenseTitle.children[i]);
        expenseValue.removeChild(expenseValue.children[i]);
        editAndDelete.removeChild(editAndDelete.children[i]);
        calculateExpenseAndBalanceTotal();
        expenseName.value = removedItem[0].name;
        expenseAmount.value = removedItem[0].value;;
        }
    }
}

const addExpensesList = addExpenseBtn.addEventListener("click", () => {
  event.preventDefault();
  let counter = 1 + expenseList.length;
  const expenseDetails = {
    name: expenseName.value,
    value: parseFloat(expenseAmount.value),
    id: counter,
  };
  expenseList.push(expenseDetails);
  populateList(expenseList);

  let options = document.createElement("li");
  let appendOptions = editAndDelete.appendChild(options);

  let deleteItem = document.createElement("a");
    deleteItem.href = "#";
    deleteItem.innerText = "delete";
    deleteItem.addEventListener("click", () => {
        deleteItemFunc(expenseList, expenseDetails);
    });
    appendOptions.appendChild(deleteItem);

  let editItem = document.createElement('a');
    editItem.href = '#';
    editItem.innerText = ' edit';
    editItem.addEventListener('click', () => {
        editItemFunc(expenseList, expenseDetails);
    });
    let appendEdit = appendOptions.appendChild(editItem);

  calculateExpenseAndBalanceTotal();
});




