
import { RootState } from "./store";

export const selectFilteredAgents = (state: RootState) => {
  const { agents, filters } = state.agent;

  return agents.filter((agent) => {
    // Search filter (name or description, case-insensitive)
    const matchesSearch =
      agent.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      agent.description.toLowerCase().includes(filters.search.toLowerCase());

    // Status filter (empty array means no filter)
    const matchesStatus =
      filters.status.length === 0 || filters.status.includes(agent.status);

    // Category filter (empty array means no filter)
    const matchesCategory =
      filters.category.length === 0 || filters.category.includes(agent.category);

    // Pricing model filter (empty string means no filter)
    const matchesPricing =
      filters.pricingModel === "" || agent.pricingModel === filters.pricingModel;

    return matchesSearch && matchesStatus && matchesCategory && matchesPricing;
  });
};
