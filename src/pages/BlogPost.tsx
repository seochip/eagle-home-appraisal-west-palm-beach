import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../lib/supabase';
import { OrganizationSchema, BreadcrumbSchema, ArticleSchema } from '../components/Schema';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image_url: string;
  author: string;
  published_date: string;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

      if (error) {
        console.error('Error fetching blog post:', error);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-navy-50 to-white pt-24 lg:pt-32 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-navy-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-navy-50 to-white pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-serif text-4xl font-bold text-navy-900 mb-4">Article Not Found</h1>
          <p className="text-navy-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-gold-600 hover:text-gold-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let key = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${key++}`} className="list-disc ml-8 mb-6 space-y-2">
            {currentList.map((item, i) => (
              <li key={i} className="text-navy-700 leading-relaxed text-lg">
                {item}
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (!trimmedLine) {
        flushList();
        return;
      }

      if (trimmedLine.startsWith('• ')) {
        currentList.push(trimmedLine.substring(2));
      } else {
        flushList();

        const isHeading = /^[A-Z]/.test(trimmedLine) &&
                         trimmedLine.length < 100 &&
                         !trimmedLine.endsWith('.') &&
                         !trimmedLine.includes('$') &&
                         lines[index + 1]?.trim() === '';

        if (isHeading) {
          elements.push(
            <h2 key={`heading-${key++}`} className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 mt-10 mb-4">
              {trimmedLine}
            </h2>
          );
        } else if (trimmedLine.match(/^\d+\./)) {
          elements.push(
            <h3 key={`subheading-${key++}`} className="font-serif text-xl font-semibold text-navy-800 mt-6 mb-3">
              {trimmedLine}
            </h3>
          );
        } else {
          elements.push(
            <p key={`para-${key++}`} className="text-navy-700 leading-relaxed mb-4 text-lg">
              {trimmedLine}
            </p>
          );
        }
      }
    });

    flushList();
    return elements;
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Eagle Home Appraisal</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={`https://eaglehomeappraisalwestpalmbeach.com${post.image_url}`} />
        <meta property="og:type" content="article" />
      </Helmet>
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` }
        ]}
      />
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        datePublished={post.published_date}
        dateModified={post.published_date}
        author={post.author}
        image={`https://eaglehomeappraisalwestpalmbeach.com${post.image_url}`}
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-navy-50 to-white pt-24 lg:pt-32">
        <article className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center space-x-2 text-gold-600 hover:text-gold-700 font-medium mb-8 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Blog</span>
              </Link>

              <div className="mb-8">
                <div className="flex items-center space-x-4 text-sm text-navy-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.published_date)}</span>
                  </div>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
                  {post.title}
                </h1>
                {post.excerpt && (
                  <p className="text-xl text-navy-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
              </div>

              {post.image_url && (
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-xl">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="prose prose-lg max-w-none">
                {renderContent(post.content)}
              </div>

              <div className="mt-16 pt-12 border-t border-navy-200">
                <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-grain opacity-20" />
                  <div className="relative">
                    <h3 className="font-serif text-3xl font-bold mb-4">
                      Need a Professional Appraisal?
                    </h3>
                    <p className="text-navy-200 text-lg mb-8">
                      Contact Eagle Home Appraisal today for accurate, reliable residential property appraisals in West Palm Beach and Palm Beach County.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="tel:5614933707"
                        className="flex items-center justify-center space-x-2 px-8 py-4 bg-gold-600 text-white rounded-full font-semibold hover:bg-gold-700 transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        <span>(561) 493-3707</span>
                      </a>
                      <Link
                        to="/contact"
                        className="flex items-center justify-center px-8 py-4 bg-white text-navy-900 rounded-full font-semibold hover:bg-navy-50 transition-colors"
                      >
                        Get a Free Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    </>
  );
}
