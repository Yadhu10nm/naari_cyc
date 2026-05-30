"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function PCOSAwareness() {
  return (
    <section className="py-24 bg-rose-50">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white text-rose-600 text-sm font-semibold mb-6 shadow-sm">
            Early Awareness Matters
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            1 in 5 Indian women suffer from PCOS. <br className="hidden md:block"/>
            <span className="text-rose-500">Early detection can change everything.</span>
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            PCOS and other reproductive health issues are highly manageable when identified early. Naari Cycle is committed to providing the educational resources and pattern tracking needed to empower women to seek timely medical advice.
          </p>
          <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white border-none shadow-md">
            Learn About Preventive Care
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
