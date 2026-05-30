"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-24 pb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] opacity-30 bg-gradient-to-r from-brand-200 to-lavender-300 blur-[100px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-lavender-100 text-brand-600 text-sm font-semibold mb-6 shadow-sm border border-brand-100">
            ? Introducing Naari Cycle
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-tight">
            Beyond Period Tracking. <br className="hidden md:block"/>
            <span className="gradient-text">Towards Preventive Women's Health.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
            Naari Cycle uses AI to help young women understand their menstrual health through personalized cycle insights, lifestyle recommendations, and early risk awareness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Join Waitlist
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-md mx-auto"
        >
          <div className="relative aspect-[4/5] rounded-[2.5rem] bg-white shadow-2xl border-8 border-gray-100 overflow-hidden flex flex-col">
            <div className="bg-brand-500 text-white p-6 pb-12 rounded-b-3xl">
              <div className="flex justify-between items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-white/20"></div>
                <div className="text-sm font-medium">Naari Cycle</div>
                <div className="w-8 h-8"></div>
              </div>
              <h3 className="text-2xl font-bold mb-1">Good Morning, Priya</h3>
              <p className="text-brand-100 text-sm">Your cycle is healthy and on track.</p>
            </div>
            
            <div className="flex-1 p-6 -mt-8 relative z-10">
              <div className="bg-white rounded-2xl shadow-lg p-5 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-500 font-bold">
                    Day 14
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Ovulation Window</div>
                    <div className="text-sm text-gray-500">High chance of conception</div>
                  </div>
                </div>
              </div>
              
              <h4 className="font-semibold text-gray-700 mb-3 text-sm">AI Daily Insights</h4>
              <div className="space-y-3">
                <div className="bg-lavender-50 rounded-xl p-4 border border-lavender-100">
                  <div className="font-medium text-lavender-600 text-sm mb-1">Nutrition</div>
                  <div className="text-gray-600 text-xs">Add more iron-rich foods today. Try spinach or lentils!</div>
                </div>
                <div className="bg-brand-50 rounded-xl p-4 border border-brand-100">
                  <div className="font-medium text-brand-600 text-sm mb-1">PCOS Awareness</div>
                  <div className="text-gray-600 text-xs">Your last 3 cycles show regular patterns. Great job!</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
