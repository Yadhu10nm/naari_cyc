"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Link } from "lucide-react";

export default function Team() {
  return (
    <section className="py-24 bg-white" id="team">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Founder</h2>
        <p className="text-lg text-gray-600 mb-12">Driven by personal experience and a passion for women's health technology.</p>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-sm mx-auto">
          <Card className="border-gray-100 shadow-md">
            <CardContent className="p-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-brand-300 to-lavender-300 mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                YK
              </div>
              <h3 className="text-2xl font-bold mb-1">Yadhu Krishna NM</h3>
              <p className="text-brand-600 font-medium mb-4">Founder & CEO</p>
              <p className="text-gray-600 mb-6 text-sm">Passionate about using AI to solve real-world healthcare challenges for women in India.</p>
              <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                <Link size={20} /> LinkedIn Profile
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
