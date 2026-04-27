import { motion } from "framer-motion";
import { Download, Briefcase, Award } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { resumeData, personalInfo, skillCategories } from "@/data/portfolio";

const ResumePage = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <SectionHeader title="Experiences" subtitle="A snapshot of my professional journey, education, and skills." />
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            href="/assets/Resume_Yash.pdf"
            download="Resume_Yash.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity self-start sm:self-auto shrink-0"
          >
            <Download className="w-4 h-4" /> Download CV
          </motion.a>
        </div>

        {/* Resume Preview */}
        <div className="glass-card p-6 sm:p-10 space-y-10">

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-6">
              {resumeData.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="pl-6 border-l-2 border-primary/30"
                >
                  <h4 className="text-lg font-semibold">{exp.role}</h4>
                  <p className="text-base text-primary font-mono">{exp.company} • {exp.period}</p>
                  <p className="text-base text-muted-foreground mt-2">{exp.description}</p>
                  <ul className="mt-2 space-y-1">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-base text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary shrink-0" /> {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              {personalInfo.education.map((edu, i) => (
                <div key={i} className="pl-6 border-l-2 border-accent/30">
                  <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  <p className="text-base text-accent font-mono">{edu.institution} • {edu.year}</p>
                  <p className="text-base text-muted-foreground mt-1">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills summary */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skillCategories.flatMap((c) => c.skills).map((s) => (
                <span key={s.name} className="px-3 py-1.5 text-base rounded-md bg-secondary text-secondary-foreground">
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
            <ul className="space-y-2">
              {resumeData.certifications.map((cert, i) => (
                <li key={i} className="flex items-center gap-2 text-base text-muted-foreground">
                  <Award className="w-3.5 h-3.5 text-primary" /> {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
