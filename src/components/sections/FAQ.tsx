"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {FAQS.map(function(faq, index) {
            return (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full text-left p-6 font-semibold flex justify-between items-center" onClick={function() { setOpenIndex(openIndex === index ? null : index); }}>
                  {faq.question}
                  <ChevronDown className={"transition-transform " + (openIndex === index ? "rotate-180" : "")} />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <div className="p-6 pt-0 text-gray-600 border-t border-gray-100 mt-2">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
