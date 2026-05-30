"use client";
import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/constants";

export default function StartupJourney() {
  return (
    <section className="py-24 bg-brand-50" id="roadmap">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600">The roadmap to redefining women's healthcare.</p>
        </div>
        <div className="relative border-l border-brand-200 ml-3 md:mx-auto md:w-1">
          {TIMELINE.map(function(item, idx) {
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 ml-8 md:ml-0 md:flex md:items-center md:justify-between w-full">
                <div className={"hidden md:block md:w-5/12 " + (idx % 2 === 0 ? "text-right pr-8" : "order-3 pl-8")}>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-3 h-3 bg-brand-500 rounded-full ring-4 ring-brand-100" />
                <div className="md:hidden">
                  <span className="text-brand-500 font-bold text-sm">{item.year}</span>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div className={"hidden md:block md:w-5/12 " + (idx % 2 === 0 ? "order-3 pl-8 text-brand-500 font-bold" : "text-right pr-8 text-brand-500 font-bold")}>
                  {item.year}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
