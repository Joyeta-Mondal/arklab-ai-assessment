
"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setStatusFilter,
  setCategoryFilter,
  setPricingModelFilter,
  clearFilters,
} from "@/redux/agentSlice";

import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";


const statusOptions = ["Active", "Beta", "Archived"];
const categoryOptions = [
  "Customer Service",
  "Marketing",
  "Development",
  "Operations",
  "Data Analysis",
  "Human Resources",
  "Finance",
  "Legal",
];
const pricingOptions = ["Free Tier", "Subscription", "Per-Use"];

const boxVariants : Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 100 },
  }),
};

export default function Filters() {
  const dispatch = useAppDispatch();
  const { status, category, pricingModel } = useAppSelector(
    (state) => state.agent.filters
  );

  const handleStatusChange = (value: string) => {
    const updated = status.includes(value)
      ? status.filter((s) => s !== value)
      : [...status, value];
    dispatch(setStatusFilter(updated));
  };

  const handleCategoryChange = (value: string) => {
    const updated = category.includes(value)
      ? category.filter((c) => c !== value)
      : [...category, value];
    dispatch(setCategoryFilter(updated));
  };

  const handlePricingChange = (value: string) => {
    dispatch(setPricingModelFilter(value));
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner/Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl mt-3 p-8 bg-[#025c9c] text-white shadow-2xl "
      >
        <h2 className="text-4xl font-extrabold tracking-tight mb-2 drop-shadow-md">
          Find the Right AI Tool
        </h2>
        <p className="text-base text-white/90 max-w-xl drop-shadow-sm">
          Refine your results with category, status, and pricing filters.
        </p>
      </motion.div>

      {/* Filters Grid */}
      <motion.div
        className="grid gap-8 md:grid-cols-3"
        initial="hidden"
        animate="visible"
      >
        {/* Status Filter Box */}
        <motion.div
          custom={0}
          variants={boxVariants}
          className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-300 dark:border-slate-700 shadow-lg p-6 flex flex-col"
          whileHover={{ scale: 1.03 }}
        >
          <h4 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white tracking-wide">
            Status
          </h4>
          <div className="flex flex-col gap-4">
            {statusOptions.map((s) => (
              <label
                key={s}
                className="flex items-center gap-3 cursor-pointer text-base font-medium text-slate-800 dark:text-slate-200 select-none"
              >
                <Checkbox
                  checked={status.includes(s)}
                  onCheckedChange={() => handleStatusChange(s)}
                  id={`status-${s}`}
                  className="border-black checked:border-black checked:bg-black transition-transform duration-200 ease-in-out hover:scale-110"
                />
                <span>{s}</span>
              </label>
            ))}
          </div>
        </motion.div>

        {/* Category Filter Box */}
        <motion.div
          custom={1}
          variants={boxVariants}
          className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-300 dark:border-slate-700 shadow-lg p-6 flex flex-col"
          whileHover={{ scale: 1.03 }}
        >
          <h4 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white tracking-wide">
            Category
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {categoryOptions.map((c) => (
              <label
                key={c}
                className="flex items-center gap-3 cursor-pointer text-base font-medium text-slate-800 dark:text-slate-200 select-none"
              >
                <Checkbox
                  checked={category.includes(c)}
                  onCheckedChange={() => handleCategoryChange(c)}
                  id={`cat-${c}`}
                  className="border-black checked:border-black checked:bg-black transition-transform duration-200 ease-in-out hover:scale-110"
                />
                <span>{c}</span>
              </label>
            ))}
          </div>
        </motion.div>

        {/* Pricing Model Filter Box */}
        <motion.div
          custom={2}
          variants={boxVariants}
          className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-300 dark:border-slate-700 shadow-lg p-6 flex flex-col"
          whileHover={{ scale: 1.03 }}
        >
          <h4 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white tracking-wide">
            Pricing Model
          </h4>
          <RadioGroup
            value={pricingModel}
            onValueChange={handlePricingChange}
            className="flex flex-col gap-5"
          >
            {pricingOptions.map((p) => (
              <label
                key={p}
                htmlFor={`pricing-${p}`}
                className="flex items-center gap-3 cursor-pointer text-base font-medium text-slate-800 dark:text-slate-200 select-none"
              >
                <RadioGroupItem
                  value={p}
                  id={`pricing-${p}`}
                  className="border-black checked:border-black checked:bg-black transition-transform duration-200 ease-in-out hover:scale-110"
                />
                <span>{p}</span>
              </label>
            ))}
          </RadioGroup>
        </motion.div>
      </motion.div>

      {/* Clear Filters Button */}
      <div className="flex justify-end mt-2">
        <Button
          variant="outline"
          onClick={() => dispatch(clearFilters())}
          className="border-slate-400 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all font-semibold tracking-wide rounded-xl px-6 py-3 shadow-md"
        >
          Clear All Filters
        </Button>
      </div>
    </div>
  );
}

