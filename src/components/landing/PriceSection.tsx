import React from "react";
import { Check } from "lucide-react";
const PriceSection = () => {
  return (
    <div
      className="w-full bg-gradient-to-b from-slate-100 to-slate-200 p-14 "
      id="pricing"
    >
      <div className="text-center px-2">
        <h4 className="text-2xl font-semibold text-slate-700 md:text-3xl">
          Simple, Fair Pricing
        </h4>
        <p className="mt-4 text-sm text-slate-500 md:text-md lg:text-lg">
          Start free, upgrade when your team grows
        </p>
      </div>
      {/*Free Tier */}
      <div className="border rounded-lg border-gray-50 mt-6 bg-white px-6 max-w-[300px] mx-auto">
        <div className="mt-10 lg:mt-14 ">
          <h4 className="text-2xl font-bold">Free</h4>
          <p className="text-gray-500"> Perfect for Individual Developers</p>
        </div>
        <div className="mt-6">
          <p>
            <span className="text-2xl font-bold">$0</span>
            <span className="font-semibold text-gray-400">/month</span>
          </p>
        </div>
        <div className=" py-10">
          <ul className="flex flex-col gap-4">
            <li className="flex gap-1">
              <Check className="text-blue-500" />
              Unlimited Personal Snippets
            </li>
            <li className="flex gap-1">
              <Check className="text-blue-500" />
              Basic Search and Filtering
            </li>
            <li className="flex gap-1">
              <Check className="text-blue-500" />
              10+ programming languages
            </li>
            <li className="flex gap-1">
              <Check className="text-blue-500" />
              Export Snippets
            </li>
          </ul>
        </div>
        <div>
          <button className="border border-blue-600 rounded-md text-blue-500 w-[90%] py-3 mb-16 mt-10">
            Get Started Free
          </button>
        </div>
      </div>
      {/*Paid Tier */}
      <div></div>
    </div>
  );
};

export default PriceSection;
