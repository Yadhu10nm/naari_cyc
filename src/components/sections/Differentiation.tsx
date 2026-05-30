"use client";
import { motion } from "framer-motion";
import { COMPARISON } from "@/lib/constants";
import { CheckCircle2, XCircle } from "lucide-react";

export default function Differentiation() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-lavender-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why We Are Different
          </motion.h2>
          <p className="text-lg text-gray-600">A new paradigm in women's health tracking.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="p-6 text-left text-gray-500 font-medium">Feature</th>
                  <th className="p-6 text-left text-gray-500 font-medium border-l border-gray-100 bg-gray-50">Traditional Apps</th>
                  <th className="p-6 text-left text-brand-600 font-semibold border-l border-gray-100 bg-brand-50">Naari Cycle</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(function(row, index) {
                  return (
                    <tr key={index} className="border-b border-gray-100 last:border-0">
                      <td className="p-6 font-medium text-gray-800">{row.feature}</td>
                      <td className="p-6 border-l border-gray-100 bg-gray-50 text-gray-500 flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-gray-400" />
                        {row.traditional}
                      </td>
                      <td className="p-6 border-l border-gray-100 bg-brand-50 text-brand-700 font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-brand-500" />
                        {row.naari}
                      </td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
