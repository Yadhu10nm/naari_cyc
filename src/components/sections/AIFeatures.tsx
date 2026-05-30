"use client";
import { motion } from "framer-motion";
import { BrainCircuit, LineChart, Sparkles, ShieldAlert } from "lucide-react";

export default function AIFeatures() {
  return (
    <section className="py-24 bg-white" id="ai-pcos">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-6">
            <BrainCircuit size={16} />
            AI Intelligence
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The AI Behind Naari Cycle</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our proprietary AI doesn't just record data; it understands your unique body rhythms to provide proactive care.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-lavender-50 flex items-center justify-center shrink-0">
                <LineChart className="text-lavender-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Pattern Analysis</h4>
                <p className="text-gray-600">Identifies correlations between your cycle phases, mood, and physical symptoms.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                <Sparkles className="text-brand-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Predictive Insights</h4>
                <p className="text-gray-600">Forecasts upcoming fertile windows and PMS phases with high accuracy.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                <ShieldAlert className="text-orange-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Risk Awareness System</h4>
                <p className="text-gray-600">Continuously monitors for anomalies that could indicate underlying conditions.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-full bg-gradient-to-tr from-brand-100 to-lavender-200 opacity-20 absolute inset-0 blur-3xl" />
          <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-xl">
            <div className="flex flex-col items-center justify-center space-y-6 py-8">
              <div className="flex justify-between w-full max-w-xs">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center shadow-inner">
                  Day 1
                </motion.div>
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center shadow-inner">
                  Day 14
                </motion.div>
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }} className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center shadow-inner">
                  Day 28
                </motion.div>
              </div>
              
              <div className="h-16 w-1 border-l-2 border-dashed border-brand-300 relative">
                 <motion.div 
                   animate={{ y: [0, 64] }} 
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-brand-500" 
                 />
              </div>
              
              <div className="w-full max-w-sm bg-lavender-50 rounded-2xl p-6 text-center border border-lavender-100 relative overflow-hidden">
                <BrainCircuit className="w-12 h-12 mx-auto text-lavender-500 mb-3 opacity-20 absolute -right-2 -top-2" />
                <h3 className="font-bold text-lg mb-2 relative z-10">Naari Engine processing...</h3>
                <div className="flex gap-2 justify-center relative z-10">
                  <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                  <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
