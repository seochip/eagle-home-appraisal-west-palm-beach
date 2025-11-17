import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  delay?: number;
}

export default function ServiceCard({ icon: Icon, title, description, link, delay = 0 }: ServiceCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-navy-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
          <Icon className="w-7 h-7 text-white" />
        </div>

        <h3 className="font-serif text-2xl font-semibold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-navy-600 leading-relaxed mb-6">
          {description}
        </p>

        {link && (
          <div className="flex items-center space-x-2 text-gold-600 font-medium group-hover:space-x-4 transition-all duration-300">
            <span>Learn more</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        )}
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-500/5 to-transparent rounded-tl-full transform translate-x-16 translate-y-16 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500" />
    </motion.div>
  );

  if (link) {
    return <Link to={link}>{content}</Link>;
  }

  return content;
}
