import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { OrganizationSchema, BreadcrumbSchema } from '../components/Schema';
import { supabase } from '../lib/supabase';

interface BlogPost {
  title: string;
  published_date: string;
  excerpt: string;
  image_url: string;
  slug: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('title, published_date, excerpt, image_url, slug')
        .eq('is_published', true)
        .order('published_date', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts:', error);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog | Eagle Home Appraisal - Real Estate Insights</title>
        <meta name="description" content="Expert insights on property appraisals, real estate valuations, and market trends in West Palm Beach and Palm Beach County." />
      </Helmet>
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: 'Blog', path: '/blog' }]} />

      <div className="min-h-screen bg-gradient-to-b from-white via-navy-50 to-white pt-24 lg:pt-32">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 mb-6">
                Appraisal <span className="text-gold-600">Insights</span>
              </h1>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                Expert guidance on property appraisals and real estate valuations
              </p>
            </motion.div>

            {loading ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 border-4 border-gold-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-navy-600">Loading articles...</p>
              </div>
            ) : posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white/60 backdrop-blur-sm border border-navy-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <Link to={`/blog/${post.slug}`} className="block">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={post.image_url}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-2 text-sm text-navy-500 mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.published_date)}</span>
                        </div>
                        <h2 className="font-serif text-xl font-semibold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-navy-600 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center space-x-2 text-gold-600 font-medium group-hover:space-x-4 transition-all duration-300">
                          <span>Read Article</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <p className="text-navy-600 text-lg">
                  More articles coming soon. Stay tuned for expert insights on property appraisals and real estate trends.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
