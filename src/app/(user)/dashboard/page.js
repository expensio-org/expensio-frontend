import React from "react";

const Dashboard = () => {
  const cards = [
    {
      title: "Available balance",
      amount: "₹ 40,000",
      label: "Expense Tracker",
      bg: "bg-purple-200",
    },
    {
      title: "Total Budget Reached",
      amount: "₹ 80,000",
      label: "Budget Planner",
      bg: "bg-yellow-100",
    },
    {
      title: "Total Debt Paid",
      amount: "₹ 1,20,000",
      label: "Debt Manager",
      bg: "bg-purple-100",
    },
  ];

  function OverviewCards() {
    return (
      <>
        {cards.map((card, i) => (
          <div key={i} className={`p-4 rounded-md shadow-md ${card.bg} w-full`}>
            <p className="text-sm text-gray-700">{card.title}</p>
            <h3 className="text-xl font-bold">{card.amount}</h3>
            <p className="mt-2 text-sm text-gray-600">{card.label}</p>
          </div>
        ))}
      </>
    );
  }

  // components/ExpenseCard.tsx
  function ExpenseCard() {
    return (
      <div className="bg-purple-200 p-4 rounded-md shadow-md">
        <h3 className="text-md font-semibold text-gray-700">Expense</h3>
        <p className="text-sm text-gray-500">Total Amount Spent</p>
        <h2 className="text-xl font-bold">₹ 1,20,000</h2>
        <p className="text-xs text-gray-600 mt-2">
          You have spent extra ₹ 150000 this month.
        </p>
      </div>
    );
  }

  // components/BudgetCard.tsx
  function BudgetCard() {
    return (
      <div className="bg-yellow-100 p-4 rounded-md shadow-md">
        <h3 className="font-semibold text-gray-700 mb-2">Budget</h3>
        <div className="text-sm">
          <div className="mb-1">Laptop Purchase</div>
          <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
            <div className="bg-yellow-400 h-2 rounded-full w-1/4"></div>
          </div>
          <div className="mb-1">Others</div>
          <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
            <div className="bg-yellow-400 h-2 rounded-full w-2/5"></div>
          </div>
          <div className="mb-1">Home Rent</div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div className="bg-yellow-400 h-2 rounded-full w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  // components/LoanCard.tsx
  function LoanCard() {
    return (
      <div className="bg-purple-100 p-4 rounded-md shadow-md">
        <h3 className="font-semibold text-gray-700 mb-2">Loan Payment</h3>
        <div className="text-sm">
          <div className="mb-1">Phone EMI</div>
          <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
            <div className="bg-purple-600 h-2 rounded-full w-1/4"></div>
          </div>
          <div className="mb-1">Home Loan</div>
          <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
            <div className="bg-purple-600 h-2 rounded-full w-2/5"></div>
          </div>
          <div className="mb-1">Car EMI</div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

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
                item === "DashBoard"
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

  const transactions = [
    {
      description: "Airtel Recharge",
      amount: 500,
      date: "Sep 25, 2024",
      category: "Internet Data",
    },
    {
      description: "Wifi Recharge",
      amount: 500,
      date: "Nov 02, 2024",
      category: "Home wifi",
    },
    {
      description: "OTT Recharge",
      amount: 500,
      date: "Oct 13, 2024",
      category: "Entertainment",
    },
    {
      description: "Domino Pizza",
      amount: 500,
      date: "Sep 20, 2024",
      category: "Food",
    },
    {
      description: "Laptop Purchase",
      amount: 189000,
      date: "Mar 15, 2024",
      category: "Work",
    },
  ];

  const categoryColors = {
    "Internet Data": "bg-green-200 text-green-800",
    "Home wifi": "bg-yellow-200 text-yellow-800",
    Entertainment: "bg-red-200 text-red-800",
    Food: "bg-green-100 text-green-700",
    Work: "bg-orange-200 text-orange-800",
  };

  function RecentTransactions() {
    return (
      <div className="bg-white shadow-md rounded-xl">
        <div className="p-4 border-b font-semibold">Recent Transaction</div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-purple-100 text-left text-sm">
              <tr>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Expense Category</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, idx) => (
                <tr key={idx} className="text-sm border-t">
                  <td className="px-4 py-2">{t.description}</td>
                  <td className="px-4 py-2">₹ {t.amount}</td>
                  <td className="px-4 py-2">{t.date}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        categoryColors[t.category]
                      }`}
                    >
                      {t.category}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-white p-4 space-y-4">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <OverviewCards />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">{/* <ExpenseChart /> */}</div>
          <ExpenseCard />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <RecentTransactions className="lg:col-span-2" />
          <div className="space-y-4">
            <BudgetCard />
            <LoanCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
