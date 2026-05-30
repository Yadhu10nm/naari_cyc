"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  { step: 1, title: "Track Cycle", description: "Log your dates and symptoms effortlessly." },
  { step: 2, title: "AI Analyzes Patterns", description: "Our engine looks for correlations and trends." },
  { step: 3, title: "Personalized Recommendations", description: "Get daily insights on diet, exercise, and lifestyle." },
  { step: 4, title: "Early Risk Awareness", description: "Receive alerts for irregularities or PCOS markers." },
  { step: 5, title: "Better Long-Term Health", description: "Take control of your reproductive wellness." }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-lavender-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            How It Works
          </motion.h2>
          <p className="text-lg text-gray-600">From tracking to total preventive care.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line for mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-brand-200 md:hidden"></div>
          
          <div className="space-y-12">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center md:justify-center gap-6 md:gap-0"
              >
                {/* Mobile Number Indicator */}
                <div className="md:hidden z-10 w-16 h-16 rounded-full bg-white border-4 border-lavender-50 flex items-center justify-center font-bold text-brand-500 shadow-sm shrink-0">
                  {item.step}
                </div>
                
                {/* Content Card */}
                <div className="flex-1 md:w-1/2 md:flex-none bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
                  <h3 className="text-xl font-semibold mb-2">
                    <span className="hidden md:inline-block mr-2 text-brand-500">Step {item.step}:</span>
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                
                {/* Arrow Connector for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-full left-1/2 -translate-x-1/2 h-12 items-center justify-center text-brand-300">
                    <ArrowRight className="rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
