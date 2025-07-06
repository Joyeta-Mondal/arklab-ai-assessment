"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Extensive AI Agent Catalog",
      description: "Browse a wide variety of AI agents tailored to your needs and preferences.",
    },
    {
      title: "Advanced Filtering & Search",
      description: "Quickly find the perfect AI tool using powerful filters and search options.",
    },
    {
      title: "SEO-Friendly & Fast",
      description: "Our website uses modern tech to ensure fast loading and great search engine rankings.",
    },
    {
      title: "User-Friendly Interface",
      description: "Clean, intuitive design that works flawlessly on all devices.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold mb-12 text-center tracking-tight">
        Why Choose Our Website?
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map(({ title, description }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
          >
            <Card className="hover:shadow-xl transition-shadow rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
