"use client";

import { useEffect } from "react";
import Head from "next/head";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAgents } from "@/redux/agentSlice";
import { selectFilteredAgents } from "@/redux/selectors";
import AgentCard from "@/components/AgentCard";
import Filters from "@/components/Filters";
import SearchBar from "@/components/SearchBar";
import mockData from "@/data/mock-agents.json";
import { Agent } from "@/lib/types"; // Adjust path if needed

export default function AgentsPage() {
  const dispatch = useAppDispatch();
  const agents = useAppSelector(selectFilteredAgents);

  useEffect(() => {
    // Set mock agents (typecasted to satisfy TS)
    dispatch(setAgents(mockData as Agent[]));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>AI Agents – ArkLab</title>
        <meta name="description" content="Browse and filter AI agents tailored to your needs." />
      </Head>

      <main className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Explore AI Agents</h1>
        <SearchBar />
        <Filters />
        <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-6">
          {agents.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">No agents found.</p>
          ) : (
            agents.map((agent) => <AgentCard key={agent.id} agent={agent} />)
          )}
        </section>
      </main>
    </>
  );
}
