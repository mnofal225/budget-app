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
let regLetters = /^[A-Za-z]+$/;
let regNumbers = /^[0-9]*$/

const budgetErrorHandling = (inputBudget) => {
  //if user inputs 0 or negative number, create alert, otherwise continue
  if (inputBudget.value <= 0) {
    alert("The budget amount can be zero or less");
    budgetTotal.innerText = 0;
  } else {
    budgetTotal.innerText = inputBudget.value;
  }
};

const getBudgetAmount = budgetCalculateBtn.addEventListener("click", () => {
  budgetTotal.innerText = budgetAmount.value;
  budgetErrorHandling(budgetAmount);
  calculateBalanceTotal();
  budgetAmount.value = "";
});

const calculateExpenseTotal = () => {
  let expenseSum = 0;
  expenseList.forEach((expense) => {
    expenseSum += expense.value;
  });
  return (expenseTotal.innerText = expenseSum);
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
  itemName.className = "itemname";
  itemValue.className = "itemvalue";
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
      expenseAmount.value = removedItem[0].value;
    }
  }
};

const expenseErrorHandling = (inputName, inputAmount, e) => {
  if ((!inputName.value && !inputAmount.value) && budgetTotal.innerText <= 0) {
    alert("Must have a budget first !");
    e[0].stopPropation();
    inputName.value = "";
    inputAmount.value = "";
  } else if (!inputName.value && !inputAmount.value) { 
    alert("Must give an expense name and amount !");
    e[0].stopPropation();
    inputName.value = "";
    inputAmount.value = "";
  }else if(!inputName.value.match(regLetters)) { 
    alert("The expense name must only have letters!");
    e[0].stopPropation();
    inputName.value = "";
  }else if (!inputName.value) {
    alert("Must give an expense name!");
    e[0].stopPropation();
    inputName.value = "";
  }else if (!parseFloat(inputAmount.value)) {
    alert("Must give an expense amount !");
    e[0].stopPropation();
    inputAmount.value = "";
  } else {
    inputName.value = "";
    inputAmount.value = "";
  }
};

const addExpensesList = addExpenseBtn.addEventListener("click", (e) => {
  let counter = 1 + expenseList.length;
  const expenseDetails = {
    name: expenseName.value,
    value: parseFloat(expenseAmount.value),
    id: counter,
  };

  expenseErrorHandling(expenseName, expenseAmount, e);
  expenseList.push(expenseDetails);
  populateList(expenseList);

  let options = document.createElement("li");
  let appendOptions = editAndDelete.appendChild(options);

  let deleteItem = document.createElement("a");
  deleteItem.href = "#";
  deleteItem.className = "deleteitem";
  let deleteIcon = document.createElement('i');
  deleteIcon.className = "fa-solid fa-circle-minus"
  deleteItem.addEventListener("click", () => {
    deleteItemFunc(expenseList, expenseDetails);
  });
  deleteItem.appendChild(deleteIcon)
  appendOptions.appendChild(deleteItem);

  let editItem = document.createElement("a");
  editItem.href = "#";
  editItem.className = "edititem";
  let editIcon = document.createElement("i");
  editIcon.className = "fa-solid fa-pen"
  editItem.addEventListener("click", () => {
    editItemFunc(expenseList, expenseDetails);
  });
  editItem.appendChild(editIcon);
  let appendEdit = appendOptions.appendChild(editItem);

  calculateExpenseAndBalanceTotal();
});
