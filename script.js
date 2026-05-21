let transactions = JSON.parse(localStorage.getItem("transactions")) || [

  {
    id:1,
    title:"Salary",
    amount:50000,
    type:"income",
    category:"Salary"
  },

  {
    id:2,
    title:"Pizza Order",
    amount:1200,
    type:"expense",
    category:"Food"
  },

  {
    id:3,
    title:"Movie",
    amount:800,
    type:"expense",
    category:"Entertainment"
  },

  {
    id:4,
    title:"Freelance Work",
    amount:15000,
    type:"income",
    category:"Salary"
  },

  {
    id:5,
    title:"Shopping",
    amount:3500,
    type:"expense",
    category:"Shopping"
  },

  {
    id:6,
    title:"Electricity Bill",
    amount:2000,
    type:"expense",
    category:"Bills"
  }

];

const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const transactionList = document.getElementById("transactionList");

function addTransaction(){

  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const type = document.getElementById("type").value;
  const category = document.getElementById("category").value;

  if(title === "" || amount === ""){
    alert("Please fill all fields");
    return;
  }

  const transaction = {
    id: Date.now(),
    title,
    amount: Number(amount),
    type,
    category
  };

  transactions.push(transaction);

  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );

  updateUI();

  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";

}

function updateUI(){

  transactionList.innerHTML = "";

  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach(transaction => {

    if(transaction.type === "income"){
      totalIncome += transaction.amount;
    }
    else{
      totalExpense += transaction.amount;
    }

    const div = document.createElement("div");

    div.classList.add("transaction");

    if(transaction.type === "income"){
      div.classList.add("transaction-income");
    }
    else{
      div.classList.add("transaction-expense");
    }

    div.innerHTML = `
      <div class="transaction-info">
        <h3>${transaction.title}</h3>
        <p>${transaction.category}</p>
        <small>${transaction.type}</small>
      </div>

      <div>
        <h3>₹${transaction.amount}</h3>

        <button class="delete-btn"
        onclick="deleteTransaction(${transaction.id})">
          Delete
        </button>

      </div>
    `;

    transactionList.appendChild(div);

  });

  income.innerText = `₹${totalIncome}`;
  expense.innerText = `₹${totalExpense}`;
  balance.innerText = `₹${totalIncome - totalExpense}`;

  updateChart();

}

function deleteTransaction(id){

  transactions = transactions.filter(
    transaction => transaction.id !== id
  );

  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );

  updateUI();

}

let chart;

function updateChart(){

  const categories = {};
  
  transactions.forEach(transaction => {

    if(transaction.type === "expense"){

      if(categories[transaction.category]){
        categories[transaction.category] += transaction.amount;
      }
      else{
        categories[transaction.category] = transaction.amount;
      }

    }

  });

  const ctx = document.getElementById("expenseChart");

  if(chart){
    chart.destroy();
  }

  chart = new Chart(ctx, {

    type: "bar",

    data: {

      labels: Object.keys(categories),

      datasets: [{

        label: "Expenses by Category",

        data: Object.values(categories),

        backgroundColor: [
          "#ef4444",
          "#3b82f6",
          "#22c55e",
          "#facc15",
          "#a855f7",
          "#ec4899"
        ],

        borderRadius:10

      }]

    },

    options: {

      responsive:true,

      plugins:{
        legend:{
          display:false
        }
      },

      scales:{
        y:{
          beginAtZero:true
        }
      }

    }

  });

}

updateUI();
/* ========================= */
/* DARK LIGHT MODE */
/* ========================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){

    themeBtn.innerHTML =
    `<i class="fa-solid fa-sun"></i>`;

  }
  else{

    themeBtn.innerHTML =
    `<i class="fa-solid fa-moon"></i>`;

  }

});