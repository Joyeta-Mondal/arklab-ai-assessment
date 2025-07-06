"use client";

import { useEffect } from "react";
import Head from "next/head";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAgents } from "@/redux/agentSlice";
import mockData from "@/data/mock-agents.json";
import AgentCard from "@/components/AgentCard";
import Filters from "@/components/Filters";
import SearchBar from "@/components/SearchBar";
import { selectFilteredAgents } from "@/redux/selectors";

export default function CatalogPage() {
  const dispatch = useAppDispatch();
 
const agents = useAppSelector(selectFilteredAgents);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      dispatch(setAgents(mockData));
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      <Head>
        <title >ArkLab AI Agents Catalog</title>
        <meta
          name="description"
          content="Explore and filter a list of AI agents from ArkLab's product suite."
        />
      </Head>
      <main className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">AI Agents Catalog</h1>
        <SearchBar />
        <Filters />
        <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-6">
          {agents.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">Loading agents...</p>
          ) : (
            agents.map((agent) => <AgentCard key={agent.id} agent={agent} />)
          )}
        </section>
      </main>
    </>
  );
}
