"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { FEATURES } from "@/lib/constants";
import { Brain, Activity, AlertCircle, MapPin } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Brain": return <Brain className="w-8 h-8 text-brand-500" />;
    case "Activity": return <Activity className="w-8 h-8 text-brand-500" />;
    case "AlertCircle": return <AlertCircle className="w-8 h-8 text-brand-500" />;
    case "MapPin": return <MapPin className="w-8 h-8 text-brand-500" />;
    default: return <Brain className="w-8 h-8 text-brand-500" />;
  }
};

export default function CoreFeatures() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Core Features
          </motion.h2>
          <p className="text-lg text-gray-600">Everything you need for preventive menstrual health.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-100 transition-colors">
                    {getIcon(feature.icon)}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
