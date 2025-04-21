import React from "react";

const SignUp = () => {
  function LoginOption({ label }) {
    return (
      <button className="w-full bg-white text-purple-700 py-2 px-4 rounded-full flex items-center justify-between font-semibold hover:bg-purple-100 transition">
        <span>{label}</span>
      </button>
    );
  }

  function FeatureCard({ label }) {
    return (
      <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-lg transition">
        {/* Placeholder Icon */}
        <div className="w-10 h-10 bg-purple-300 rounded-md mb-2" />
        <span className="text-sm font-medium text-purple-900 text-center">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans">
      {/* Left Panel */}
      <div className="bg-purple-700 text-white p-6 md:w-1/3 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8">Expensio</h1>
          <h2 className="text-lg font-semibold mb-4">
            Welcome! How would you like to connect?
          </h2>

          <div className="space-y-4">
            <LoginOption label="Email" />
            <LoginOption label="Phone Number" />
            <LoginOption label="Google" />
          </div>

          <div className="mt-6">
            <p className="text-sm mb-2">
              Want to talk to our sales team instead?
            </p>
            <LoginOption label="Contact Sales" />
          </div>
        </div>

        <p className="text-xs mt-6">
          By logging in, you agree to our{" "}
          <a href="#" className="underline">
            terms of service
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            privacy policy
          </a>
        </p>
      </div>

      {/* Right Panel */}
      <div className="bg-purple-200 flex flex-col justify-center items-center p-8 md:w-2/3 text-center rounded-t-3xl md:rounded-none">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-900 max-w-lg">
          The expense management app that does it all, for every business.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 max-w-xl">
          <FeatureCard label="Track receipts" />
          <FeatureCard label="Manage expenses" />
          <FeatureCard label="Corporate cards" />
          <FeatureCard label="Reimburse employees" />
          <FeatureCard label="Send invoices" />
          <FeatureCard label="Pay bills" />
        </div>

        <p className="text-sm mt-6 text-purple-800 max-w-md">
          Save yourself, your team, and your company time and money. Get started
          with Expensio today.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
