"use client";
import { motion } from "framer-motion";
import { MapPin, Globe2, Leaf, HeartPulse } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

export default function BuiltForIndia() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-50 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="grid grid-cols-2 gap-6">
            <Card className="border-none shadow-lg bg-orange-50/50">
              <CardContent className="p-6">
                <Globe2 className="w-10 h-10 text-orange-500 mb-4" />
                <h4 className="font-bold mb-2">Regional Languages</h4>
                <p className="text-sm text-gray-600">Health education accessible in multiple Indian languages.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-green-50/50 mt-8">
              <CardContent className="p-6">
                <Leaf className="w-10 h-10 text-green-600 mb-4" />
                <h4 className="font-bold mb-2">Local Diet Plans</h4>
                <p className="text-sm text-gray-600">Recommendations based on Indian cuisine and availability.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-blue-50/50">
              <CardContent className="p-6">
                <HeartPulse className="w-10 h-10 text-blue-500 mb-4" />
                <h4 className="font-bold mb-2">Doctor Discovery</h4>
                <p className="text-sm text-gray-600">Connect with verified gynecologists across India.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-brand-50/50 mt-8">
              <CardContent className="p-6">
                <MapPin className="w-10 h-10 text-brand-500 mb-4" />
                <h4 className="font-bold mb-2">Cultural Sensitivity</h4>
                <p className="text-sm text-gray-600">Content designed for the cultural nuances of Indian society.</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-6">
            Made for India
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Localized Experience. <br/>Global Standards.</h2>
          <p className="text-lg text-gray-600 mb-6">
            Western apps often lack context for Indian diets, lifestyle, and healthcare access. Naari Cycle bridges this gap.
          </p>
          <ul className="space-y-4">
             <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-1">✓</div>
              <span className="text-gray-700">Integrates Ayurvedic wellness tips alongside modern medicine.</span>
             </li>
             <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-1">✓</div>
              <span className="text-gray-700">Teen Safe Mode allows parents to introduce tracking safely.</span>
             </li>
             <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-1">✓</div>
              <span className="text-gray-700">Privacy-first design respecting Indian family dynamics.</span>
             </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
