// "use client";

// import { useState } from "react";
// import { PortfolioLayout } from "@/components/portfolio/PortfolioLayout";
// import { contact } from "@/components/portfolio/portfolioData";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner"; 

// export default function ContactPage() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
  
//   // Form State
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });

//   // Handle Input Changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle Form Submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // ✅ Your Deployed Google Apps Script URL
//     const scriptUrl = "https://script.google.com/macros/s/AKfycby2j41gjNt-FIVO2eAtVvw515_3d7_iZml7Q1a_hceEiMcxRoTd0PdcHznvHlmcQYvCvA/exec";

//     // ✅ Format data as FormData to bypass CORS blocks natively
//     const submitData = new FormData();
//     submitData.append("name", formData.name);
//     submitData.append("email", formData.email);
//     submitData.append("subject", formData.subject);
//     submitData.append("message", formData.message);

//     try {
//       // ✅ mode: 'no-cors' prevents the browser from blocking the Google redirect
//       await fetch(scriptUrl, {
//         method: "POST",
//         body: submitData,
//         mode: "no-cors", 
//       });

//       // Clear the form on success
//       setFormData({ name: "", email: "", subject: "", message: "" });
      
//       // Show Success Toast
//       toast.success("Message sent successfully!", {
//         description: "Check your email for an automated reply."
//       });

//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error("Failed to send message.", {
//         description: "Please check your internet connection and try again."
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <PortfolioLayout>
//       <section className="container py-14 max-w-6xl mx-auto px-6 font-['Open_Sans']">
        
//         {/* ================= HEADER ================= */}
//         <header className="mb-12">
//           <h1 className="text-4xl md:text-6xl font-black tracking-tight italic font-['Montserrat'] uppercase">
//             Get In <span className="text-[#7e3bed]">Touch</span>
//           </h1>
//           <p className="mt-4 text-gray-400 italic">Let's discuss your next project</p>
//         </header>

//         <div className="grid gap-8 lg:grid-cols-2">
          
//           {/* ================= CONTACT INFO CARD ================= */}
//           <section className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 shadow-2xl hover:border-[#7e3bed]/30 transition-all duration-500 flex flex-col justify-center">
//             <h2 className="text-2xl font-black italic font-['Montserrat'] mb-8 uppercase text-white">Contact Info</h2>
//             <dl className="grid gap-8 text-sm">
//               <div>
//                 <dt className="font-bold text-[#7e3bed] uppercase tracking-[0.2em] text-[10px] mb-2">Email</dt>
//                 <dd className="text-gray-300 font-mono text-base">{contact.email}</dd>
//               </div>
//               <div>
//                 <dt className="font-bold text-[#7e3bed] uppercase tracking-[0.2em] text-[10px] mb-2">Phone</dt>
//                 <dd className="text-gray-300 font-mono text-base">{contact.phone}</dd>
//               </div>
//               <div>
//                 <dt className="font-bold text-[#7e3bed] uppercase tracking-[0.2em] text-[10px] mb-2">Location</dt>
//                 <dd className="text-gray-300 font-mono text-base">{contact.location}</dd>
//               </div>
//               <div>
//                 <dt className="font-bold text-[#7e3bed] uppercase tracking-[0.2em] text-[10px] mb-2">Professional</dt>
//                 <dd>
//                   <a className="text-white hover:text-[#7e3bed] transition-colors font-bold tracking-wide flex items-center gap-2 w-fit" href={contact.linkedinHref} target="_blank" rel="noreferrer">
//                     {contact.linkedinLabel} <span className="text-[#7e3bed]">↗</span>
//                   </a>
//                 </dd>
//               </div>
//             </dl>
//           </section>

//           {/* ================= CONTACT FORM CARD ================= */}
//           <section className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 shadow-2xl hover:border-[#7e3bed]/30 transition-all duration-500">
//             <h2 className="text-2xl font-black italic font-['Montserrat'] mb-8 uppercase text-white">Send a Message</h2>
//             <form className="grid gap-5" onSubmit={handleSubmit}>
//               <Input 
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your Name" 
//                 required 
//                 className="bg-black/50 border-white/10 focus:border-[#7e3bed] text-white transition-colors h-12"
//               />
//               <Input 
//                 type="email" 
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Your Email" 
//                 required 
//                 className="bg-black/50 border-white/10 focus:border-[#7e3bed] text-white transition-colors h-12"
//               />
//               <Input 
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 placeholder="Subject" 
//                 required 
//                 className="bg-black/50 border-white/10 focus:border-[#7e3bed] text-white transition-colors h-12"
//               />
//               <Textarea 
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your Message" 
//                 rows={6} 
//                 required 
//                 className="bg-black/50 border-white/10 focus:border-[#7e3bed] text-white transition-colors resize-none p-4"
//               />
              
//               <Button 
//                 type="submit" 
//                 disabled={isSubmitting}
//                 className="w-full h-12 bg-[#7e3bed] text-white hover:bg-white hover:text-black transition-all duration-300 font-bold tracking-widest uppercase mt-4 italic rounded-full"
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </Button>
//             </form>
//           </section>
//         </div>
//       </section>
//     </PortfolioLayout>
//   );
// }