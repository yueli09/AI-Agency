'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with AI-Powered Solutions
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Automate workflows, analyze data, and scale intelligently.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Schedule a Free AI Audit
          </button>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-slate-900/50 pointer-events-none" />
    </section>
  );
}