import React from "react";

const ExpenseTracker = () => {
  function Sidebar() {
    const menu = [
      "DashBoard",
      "Expense Tracker",
      "Budget Planner",
      "Debt Manager",
      "Report Insight",
      "Settings",
    ];

    return (
      <aside className="w-full md:w-64 bg-purple-700 text-white p-4 space-y-6">
        <h2 className="text-2xl font-bold">Expensio</h2>
        <ul className="space-y-2">
          {menu.map((item) => (
            <li
              key={item}
              className={`p-2 rounded-lg hover:bg-purple-600 ${
                item === "Expense Tracker"
                  ? "bg-white text-purple-700 font-semibold"
                  : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="space-y-2 pt-6">
          <button className="w-full text-left p-2 hover:bg-purple-600 rounded-lg">
            Help
          </button>
          <button className="w-full text-left p-2 hover:bg-purple-600 rounded-lg">
            Log Out
          </button>
        </div>
      </aside>
    );
  }

  function Header() {
    return (
      <div className="text-gray-800">
        <h1 className="text-2xl font-semibold">Welcome Back! , John</h1>
        <p className="text-sm text-gray-500">
          It always best time to manage your finances.
        </p>
      </div>
    );
  }

  function OverviewCards() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-600">Available balance</p>
          <p className="text-2xl font-bold">₹ 40,000</p>
        </div>
        <div className="bg-purple-100 rounded-xl shadow p-4">
          <p className="text-sm text-gray-600">Total amount Spend</p>
          <p className="text-2xl font-bold">₹ 1,20,000</p>
          <p className="text-xs text-gray-500 mt-1">
            <span className="text-green-600 font-semibold">75% Income</span>,
            <span className="text-red-500 font-semibold"> 25% Expense</span>
          </p>
          <p className="text-xs text-gray-400">
            You have spent extra ₹56000 this month
          </p>
        </div>
        <button className="bg-purple-500 text-white rounded-xl shadow p-4 flex flex-col justify-center items-center">
          <span className="text-3xl font-bold">+</span>
          <span>Add Income</span>
        </button>
      </div>
    );
  }

  function CategoryFilter() {
    const categories = [
      "Utility Bills",
      "Transportation",
      "Internet Data",
      "Food",
      "Entertainment",
      "Health",
    ];

    return (
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
          >
            {cat}
          </button>
        ))}
      </div>
    );
  }

  function UtilityBills() {
    const bills = [
      { name: "Electricity Bills", desc: "Electricity", amount: 4500 },
      { name: "Water Bills", desc: "Water Supply Bills", amount: 1200 },
      { name: "Security Bills", desc: "Society Bills", amount: 4500 },
      { name: "Grocery Bills", desc: "Home Grocery bills", amount: 24500 },
    ];
    return (
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Utility Bills
        </h3>
        <p className="text-sm text-gray-500 mb-4">Input Your Expense Here</p>
        <div className="space-y-2">
          {bills.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center"
            >
              <div className="bg-gray-100 p-2 rounded">{item.name}</div>
              <div className="bg-gray-100 p-2 rounded">{item.desc}</div>
              <div className="bg-gray-100 p-2 rounded">₹ {item.amount}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="text-purple-600 text-xl">＋</button>
        </div>
      </div>
    );
  }
  const transactions = [
    {
      day: "Mon",
      date: "12/11/24",
      amount: 22500,
      desc: "Salary",
      cat: "Income",
    },
    {
      day: "Tue",
      date: "13/11/24",
      amount: 2500,
      desc: "Movie",
      cat: "Entertainment",
    },
    { day: "Tue", date: "13/11/24", amount: 2500, desc: "Lunch", cat: "Food" },
    {
      day: "Tue",
      date: "13/11/24",
      amount: 2500,
      desc: "LightBill",
      cat: "Utility",
    },
    {
      day: "Tue",
      date: "13/11/24",
      amount: 2500,
      desc: "WaterBill",
      cat: "Utility",
    },
    {
      day: "Tue",
      date: "13/11/24",
      amount: 7500,
      desc: "Grocery",
      cat: "Utility",
    },
    {
      day: "Tue",
      date: "13/11/24",
      amount: 500,
      desc: "OTT",
      cat: "Entertainment",
    },
  ];
  function TransactionHistory() {
    return (
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Transaction History
          </h3>
          <button className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            This Week
          </button>
        </div>
        <div className="space-y-2 text-sm">
          {transactions.map((t, idx) => (
            <div key={idx} className="grid grid-cols-5 gap-2 items-center">
              <span
                className={`text-lg ${
                  t.cat === "Income" ? "text-green-600" : "text-red-600"
                }`}
              >
                ●
              </span>
              <span>{t.day}</span>
              <span>{t.date}</span>
              <span>₹{t.amount}</span>
              <span className="truncate">{t.desc}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-4 space-y-4">
        <Header />
        <OverviewCards />
        <CategoryFilter />
        <UtilityBills />
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2">{/* <MoneyFlowChart /> */}</div>
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
