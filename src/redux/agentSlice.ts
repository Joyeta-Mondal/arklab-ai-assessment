import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Agent } from "@/lib/types";

type State = {
  agents: Agent[];
  filters: {
    search: string;
    status: string[];
    category: string[];
    pricingModel: string;
  };
};

const initialState: State = {
  agents: [],
  filters: {
    search: "",
    status: [],
    category: [],
    pricingModel: "",
  },
};

const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    setAgents: (state, action: PayloadAction<Agent[]>) => {
      state.agents = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
    },
    setStatusFilter: (state, action: PayloadAction<string[]>) => {
      state.filters.status = action.payload;
    },
    setCategoryFilter: (state, action: PayloadAction<string[]>) => {
      state.filters.category = action.payload;
    },
    setPricingModelFilter: (state, action: PayloadAction<string>) => {
      state.filters.pricingModel = action.payload;
    },
    clearFilters: (state) => {
      state.filters = { search: "", status: [], category: [], pricingModel: "" };
    },
  },
});

export const {
  setAgents,
  setSearch,
  setStatusFilter,
  setCategoryFilter,
  setPricingModelFilter,
  clearFilters,
} = agentSlice.actions;

export default agentSlice.reducer;
