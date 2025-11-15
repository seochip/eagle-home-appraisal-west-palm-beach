import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-navy-600 mb-6">
      <Link to="/" className="hover:text-gold-600 transition-colors">
        Home
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4" />
          {item.path && index < items.length - 1 ? (
            <Link to={item.path} className="hover:text-gold-600 transition-colors">
              {item.name}
            </Link>
          ) : (
            <span className="text-navy-900 font-medium">{item.name}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
