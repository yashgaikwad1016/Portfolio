import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
}

const SectionHeader = ({ title, subtitle, gradient = true }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h1 className={`page-title ${gradient ? "gradient-text" : ""}`}>{title}</h1>
    {subtitle && <p className="page-subtitle">{subtitle}</p>}
  </motion.div>
);

export default SectionHeader;
