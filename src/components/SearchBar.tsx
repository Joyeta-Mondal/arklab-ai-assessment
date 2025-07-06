"use client";

import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSearch } from "@/redux/agentSlice";

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.agent.filters.search);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-4">
      <Input
        type="text"
        placeholder="Search by name or description..."
        value={search}
        onChange={handleChange}
        className="text-base"
      />
    </div>
  );
}
