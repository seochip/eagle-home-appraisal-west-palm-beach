import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  delay?: number;
}

export default function TestimonialCard({ name, location, rating, text, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'fill-gold-500 text-gold-500' : 'text-navy-200'
            }`}
          />
        ))}
      </div>

      <p className="text-navy-700 leading-relaxed mb-6 italic">
        "{text}"
      </p>

      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-white font-serif font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-navy-900">{name}</p>
          <p className="text-sm text-navy-500">{location}</p>
        </div>
      </div>
    </motion.div>
  );
}
