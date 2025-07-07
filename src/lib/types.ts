export type AgentStatus = "Active" | "Beta" | "Archived";

export interface Agent {
  id: string;
  name: string;
  description: string;
  status: AgentStatus;
  category: string;
  pricingModel: string;
}
