import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { skillCategories } from "@/data/portfolio";

const SkillsPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="section-container">
        <SectionHeader title="Skills" subtitle="Technologies and tools I work with on a daily basis." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15 }}
              className="glass-card-hover p-6"
            >
              <h2 className="text-xl font-semibold mb-6 gradient-text">{category.title}</h2>
              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 * i, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
