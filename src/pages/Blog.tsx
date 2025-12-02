import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { OrganizationSchema, BreadcrumbSchema } from '../components/Schema';

export default function Blog() {
  const posts = [
    {
      title: 'How Much Does A Home Appraisal Cost In West Palm Beach 2025-2026?',
      date: 'December 2, 2025',
      excerpt: 'Discover the cost of home appraisals in West Palm Beach for 2025-2026. Learn about factors affecting pricing, what\'s included, and how to get the best value.',
      image: '/eha-west-palm-beach-how-much-does-a-home-appraisal-cost-in-west-palm-beach-2025-2026.png',
      slug: '/blog/how-much-does-a-home-appraisal-cost-in-west-palm-beach-2025-2026'
    },
    {
      title: 'Understanding Property Appraisals in South Florida',
      date: 'March 15, 2024',
      excerpt: 'Learn the key factors that influence property values in the Palm Beach County real estate market.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      slug: null
    },
    {
      title: 'When Should You Get a Pre-Listing Appraisal?',
      date: 'March 8, 2024',
      excerpt: 'Discover how a pre-listing appraisal can help you price your home right and attract serious buyers.',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600',
      slug: null
    },
    {
      title: 'PMI Removal: Save Thousands on Your Mortgage',
      date: 'February 28, 2024',
      excerpt: 'Find out how an appraisal can help you eliminate private mortgage insurance and reduce monthly payments.',
      image: 'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=600',
      slug: null
    },
    {
      title: 'The Divorce Appraisal Process Explained',
      date: 'February 20, 2024',
      excerpt: 'Navigate property division with confidence through professional, unbiased divorce appraisals.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
      slug: null
    },
    {
      title: 'Tax Appeals: Fighting Unfair Property Assessments',
      date: 'February 12, 2024',
      excerpt: 'Learn how professional appraisals can help you successfully appeal high property tax assessments.',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600',
      slug: null
    },
    {
      title: 'What Makes Waterfront Properties Unique to Appraise',
      date: 'February 5, 2024',
      excerpt: 'Understanding the special considerations for appraising luxury waterfront estates in Palm Beach County.',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600',
      slug: null
    }
  ];

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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => {
                const ArticleWrapper = post.slug ? Link : 'div';
                const wrapperProps = post.slug ? { to: post.slug } : {};

                return (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white/60 backdrop-blur-sm border border-navy-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <ArticleWrapper {...wrapperProps} className={post.slug ? 'block' : ''}>
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-2 text-sm text-navy-500 mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <h2 className="font-serif text-xl font-semibold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-navy-600 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                        {post.slug && (
                          <div className="flex items-center space-x-2 text-gold-600 font-medium group-hover:space-x-4 transition-all duration-300">
                            <span>Read Article</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        )}
                        {!post.slug && (
                          <div className="flex items-center space-x-2 text-navy-400 font-medium">
                            <span>Coming Soon</span>
                          </div>
                        )}
                      </div>
                    </ArticleWrapper>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <p className="text-navy-600 text-lg">
                More articles coming soon. Stay tuned for expert insights on property appraisals and real estate trends.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
