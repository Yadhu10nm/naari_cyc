"use client";
import { motion } from "framer-motion";
import { TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

export default function InvestorSection() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-brand-300 text-sm font-semibold mb-6">
            For Investors
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Naari Cycle Matters</h2>
          <p className="text-lg text-gray-400">A massive opportunity in the underserved preventive healthcare market.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white/5 border-white/10 text-white">
            <CardContent className="p-8">
              <Users className="w-10 h-10 text-brand-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">India's Young Female Population</h3>
              <p className="text-gray-400">A rapidly growing market of digitally native women actively seeking better health solutions but lacking culturally relevant options.</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 text-white">
            <CardContent className="p-8">
              <TrendingUp className="w-10 h-10 text-brand-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Preventive Healthcare Shift</h3>
              <p className="text-gray-400">Moving the industry from reactive symptom treatment to proactive AI-driven pattern recognition and early intervention.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
