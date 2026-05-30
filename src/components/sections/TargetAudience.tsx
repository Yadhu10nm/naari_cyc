"use client";
import { motion } from "framer-motion";
import { TARGET_AUDIENCE } from "@/lib/constants";

export default function TargetAudience() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {TARGET_AUDIENCE.map(function(audience, idx) {
            return (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-gray-50 border border-gray-100 rounded-full px-6 py-3 flex items-center gap-3">
                <span className="font-semibold text-gray-800">{audience.title}</span>
                <span className="text-gray-400 text-sm">|</span>
                <span className="text-sm text-gray-500">{audience.description}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
