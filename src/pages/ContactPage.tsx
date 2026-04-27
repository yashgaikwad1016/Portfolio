import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SectionHeader from "@/components/SectionHeader";
import { socialLinks, personalInfo } from "@/data/portfolio";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSending(true);

    try {
      if (formRef.current) {
        // NOTE: Replace these with your actual Service ID, Template ID, and Public Key from EmailJS
        await emailjs.sendForm(
          'service_f28m8o3',
          'template_aa6jm1k',
          formRef.current,
          '8t8vLN5DOJCKicfdl'
        );
        toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
        setForm({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast({ title: "Error sending message", description: "Please try again later or contact me directly via email.", variant: "destructive" });
      console.error("EmailJS Error:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="section-container">
        <SectionHeader title="Contact" subtitle="Have a question or want to work together? Let's connect." />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card-hover p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10"><Mail className="w-4 h-4 text-primary" /></div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">{personalInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10"><MapPin className="w-4 h-4 text-primary" /></div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-sm font-medium">{personalInfo.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10"><Phone className="w-4 h-4 text-primary" /></div>
                <div>
                  <p className="text-sm text-muted-foreground">Mobile No.</p>
                  <p className="text-sm font-medium">{personalInfo.mobile}</p>
                </div>
              </div>
            </div>

            <div className="glass-card-hover p-6">
              <p className="text-sm text-muted-foreground mb-4">Follow me</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                    aria-label={link.name}
                  >
                    <link.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card-hover p-6 sm:p-8 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium mb-1.5">Name</label>
              <input
                type="text"
                name="from_name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Your name"
                maxLength={100}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Email</label>
              <input
                type="email"
                name="from_email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="you@example.com"
                maxLength={255}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Your message..."
                maxLength={1000}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {sending ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;


