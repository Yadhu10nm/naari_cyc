"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-brand-500 to-lavender-400 text-white text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold mb-6">Ready to Take Control?</h2>
          <p className="text-xl mb-10 text-white/90">Join thousands of women discovering the power of preventive menstrual health.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-50">Join Waitlist</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Contact Us</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
