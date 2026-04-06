import { motion } from "framer-motion";
import { GraduationCap, Target, User } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { personalInfo } from "@/data/portfolio";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="section-container">
        <SectionHeader title="About Me" subtitle="Get to know me, my background, and what drives me." />

        {/* Bio */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div variants={item} className="glass-card-hover p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10"><User className="w-5 h-5 text-primary" /></div>
              <h2 className="text-xl font-semibold">Who I Am</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{personalInfo.bio}</p>
          </motion.div>

          <motion.div variants={item} className="glass-card-hover p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/10"><Target className="w-5 h-5 text-accent" /></div>
              <h2 className="text-xl font-semibold">Career Goals</h2>
            </div>
            <ul className="space-y-3">
              {personalInfo.goals.map((goal, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {goal}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10"><GraduationCap className="w-5 h-5 text-primary" /></div>
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>
          <div className="relative pl-8 border-l border-border/50 space-y-8">
            {personalInfo.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[2.55rem] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                <div className="glass-card-hover p-6">
                  <span className="text-xs font-mono text-primary">{edu.year}</span>
                  <h3 className="text-lg font-semibold mt-1">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
