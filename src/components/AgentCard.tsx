"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Agent } from "@/lib/types";
import { motion } from "framer-motion";

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="w-full shadow-md">
        <CardContent className="space-y-2 p-4">
          <h2 className="text-xl font-semibold">{agent.name}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">{agent.description}</p>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{agent.status}</span>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded">{agent.category}</span>
            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">{agent.pricingModel}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
