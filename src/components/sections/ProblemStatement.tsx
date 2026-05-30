"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { AlertCircle, FileWarning, EyeOff, BookOpen } from "lucide-react";

const problems = [
  {
    title: "Ignored Symptoms",
    description: "Many young women ignore subtle menstrual health symptoms until they become severe.",
    icon: <AlertCircle className="w-8 h-8 text-rose-500" />
  },
  {
    title: "Undiagnosed PCOS",
    description: "Conditions like PCOS and irregular cycles often go unnoticed for years.",
    icon: <EyeOff className="w-8 h-8 text-orange-500" />
  },
  {
    title: "Reactive Tracking",
    description: "Most period trackers only record dates without providing meaningful, preventive guidance.",
    icon: <FileWarning className="w-8 h-8 text-yellow-500" />
  },
  {
    title: "Lack of Education",
    description: "There is a massive gap in personalized, culturally relevant menstrual health education.",
    icon: <BookOpen className="w-8 h-8 text-blue-500" />
  }
];

export default function ProblemStatement() {
  return (
    <section className="py-24 bg-white" id="problem">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            The Problem We Are Solving
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Traditional apps only tell you when your period is coming. But they miss the signs that could affect your long-term reproductive health.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-gray-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
