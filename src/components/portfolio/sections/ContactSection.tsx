
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { contact } from "@/components/portfolio/portfolioData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Globe, MessageSquare } from "lucide-react";

export function ContactSection() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // 2. Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle Form Submission to Google Sheets
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Your Deployed Google Apps Script URL
    const scriptUrl = "https://script.google.com/macros/s/AKfycbya6_mmFAPYxqpxwPNAkNfS3trxSUDz5BPCJ-cT0Ak4BtTwC04x1rfRzirgE7nVzg5p/exec";

    // Format data as FormData to bypass CORS blocks natively
    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("subject", formData.subject);
    submitData.append("message", formData.message);

    try {
      // Send data to Google Script
      await fetch(scriptUrl, {
        method: "POST",
        body: submitData,
        mode: "no-cors", 
      });

      // Clear the form
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Show the beautiful custom success message
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#000000] text-white py-32 overflow-hidden"
    >
      {/* 🌌 Cyber Backdrop Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#7e3bed]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-[#7e3bed]/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7e3bed]/10 border border-[#7e3bed]/30 text-[#7e3bed] text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            <Globe size={12} className="animate-spin-slow" /> Open for opportunities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black tracking-tighter italic"
          >
            GET IN <span className="text-[#7e3bed]">TOUCH</span>
            <div className="h-1 w-20 bg-[#7e3bed] mx-auto mt-6 rounded-full shadow-[0_0_15px_#7e3bed]" />
          </motion.h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 items-stretch">
          
          {/* ================= LEFT: CONTACT INFO CARD ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="h-full p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-2xl flex flex-col justify-between group overflow-hidden relative">
              
              {/* Decorative Background Icon */}
              <MessageSquare size={200} className="absolute -right-10 -bottom-10 text-[#7e3bed]/5 group-hover:text-[#7e3bed]/10 transition-colors duration-700 pointer-events-none" />

              <div>
                <h3 className="text-3xl font-bold mb-10 tracking-tight leading-[1.1]">
                  Have a <span className="text-[#7e3bed]">vision?</span> <br/>
                  Let's bring it to life.
                </h3>
                
                <div className="space-y-8 relative z-10">
                  <ContactInfoItem 
                    icon={<Mail size={20} />} 
                    label="Email" 
                    value={contact.email} 
                    href={`mailto:${contact.email}`}
                  />
                  <ContactInfoItem 
                    icon={<Linkedin size={20} />} 
                    label="LinkedIn" 
                    value={contact.linkedinLabel} 
                    href={contact.linkedinHref}
                  />
                  <ContactInfoItem 
                    icon={<MapPin size={20} />} 
                    label="Location" 
                    value={contact.location} 
                  />
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.2em]">
                  Usually responds within 24 hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT: THE GLASS FORM ================= */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput 
                  label="Name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required 
                />
                <FormInput 
                  label="Email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com" 
                  type="email" 
                  required 
                />
              </div>
              
              <FormInput 
                label="Subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can I help?" 
                required 
              />

              <div className="space-y-3">
                <label className="text-[10px] uppercase font-black tracking-widest text-gray-600 ml-6">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  rows={6}
                  required
                  className="w-full px-8 py-6 rounded-[2.5rem] bg-white/[0.03] border border-white/10 focus:border-[#7e3bed]/50 focus:outline-none text-white transition-all placeholder:text-gray-800 text-sm resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-6 rounded-full bg-[#7e3bed] text-white font-black uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(126,59,237,0.3)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"} 
                  {!isSubmitting && <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </span>
                {/* Magnetic Hover Fill */}
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 mix-blend-difference" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ================= SUCCESS NOTIFICATION ================= */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] px-8 py-4 rounded-full bg-[#7e3bed] text-white shadow-[0_20px_50px_rgba(126,59,237,0.4)] flex items-center gap-4 border border-white/20"
          >
            <CheckCircle2 size={20} />
            <span className="font-bold uppercase tracking-widest text-[10px]">Transmission Received! I'll contact you soon.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/** 💎 Reusable Components */

function ContactInfoItem({ icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) {
  return (
    <div className="flex items-center gap-6 group/item">
      <div className="h-14 w-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#7e3bed] group-hover/item:bg-[#7e3bed] group-hover/item:text-white transition-all duration-500 shadow-xl">
        {icon}
      </div>
      <div>
        <p className="text-[9px] uppercase font-black tracking-[0.2em] text-gray-600 mb-1">{label}</p>
        {href ? (
          <a href={href} target="_blank" className="text-white hover:text-[#7e3bed] transition-colors font-semibold text-sm sm:text-lg break-all">
            {value}
          </a>
        ) : (
          <p className="text-white font-semibold text-sm sm:text-lg">{value}</p>
        )}
      </div>
    </div>
  );
}

function FormInput({ label, ...props }: any) {
  return (
    <div className="space-y-3">
      <label className="text-[10px] uppercase font-black tracking-widest text-gray-600 ml-6">{label}</label>
      <input
        {...props}
        className="w-full px-8 py-5 rounded-full bg-white/[0.03] border border-white/10 focus:border-[#7e3bed]/50 focus:outline-none text-white transition-all placeholder:text-gray-800 text-sm"
      />
    </div>
  );
}