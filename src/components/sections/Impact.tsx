"use client";
import { motion } from "framer-motion";
import { IMPACT_CARDS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/Card";

export default function Impact() {
  return (
    <section className="py-24 bg-lavender-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Creating Healthier Futures</h2>
          <p className="text-lg text-gray-600">The impact we aim to achieve for young women.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_CARDS.map(function(card, idx) {
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-500 font-bold mb-4">{idx + 1}</div>
                    <h4 className="font-bold mb-2">{card.title}</h4>
                    <p className="text-sm text-gray-600">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
