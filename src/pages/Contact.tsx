import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { OrganizationSchema, BreadcrumbSchema } from '../components/Schema';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  propertyAddress: z.string().min(5, 'Property address is required'),
  appraisalType: z.string().min(1, 'Please select an appraisal type'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact-form`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to send message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const appraisalTypes = [
    'Residential Purchase/Refinance',
    'Divorce Appraisal',
    'Estate/Date of Death',
    'Bankruptcy',
    'PMI Removal',
    'Pre-Listing/Pre-Purchase',
    'Tax Appeal',
    'Land Appraisal',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Eagle Home Appraisal - West Palm Beach</title>
        <meta name="description" content="Contact Eagle Home Appraisal for a free quote. Call (561) 282-5509 or submit a request online. Located in West Palm Beach serving all of Palm Beach County." />
      </Helmet>
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: 'Contact', path: '/contact' }]} />

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
                Get in <span className="text-gold-600">Touch</span>
              </h1>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                Request a free quote or consultation. We typically respond within 24 hours.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="bg-white/60 backdrop-blur-sm border border-navy-100 rounded-3xl p-8 lg:p-10 shadow-xl">
                  <h2 className="font-serif text-3xl font-bold text-navy-900 mb-8">
                    Request a Quote
                  </h2>

                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800"
                    >
                      Thank you! We'll contact you within 24 hours.
                    </motion.div>
                  )}

                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800"
                    >
                      {submitError}
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300"
                        placeholder="John Smith"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300"
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-2">
                          Phone Number *
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300"
                          placeholder="(561) 555-0123"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="propertyAddress" className="block text-sm font-medium text-navy-900 mb-2">
                        Property Address *
                      </label>
                      <input
                        {...register('propertyAddress')}
                        type="text"
                        id="propertyAddress"
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300"
                        placeholder="123 Main St, West Palm Beach, FL 33401"
                      />
                      {errors.propertyAddress && (
                        <p className="mt-1 text-sm text-red-600">{errors.propertyAddress.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="appraisalType" className="block text-sm font-medium text-navy-900 mb-2">
                        Appraisal Type *
                      </label>
                      <select
                        {...register('appraisalType')}
                        id="appraisalType"
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300 bg-white"
                      >
                        <option value="">Select appraisal type...</option>
                        {appraisalTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.appraisalType && (
                        <p className="mt-1 text-sm text-red-600">{errors.appraisalType.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">
                        Additional Information *
                      </label>
                      <textarea
                        {...register('message')}
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300 resize-none"
                        placeholder="Tell us more about your appraisal needs..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gold-600 text-white rounded-full font-semibold text-lg hover:bg-gold-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Request</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 space-y-8"
              >
                <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-grain opacity-20" />
                  <div className="relative">
                    <h2 className="font-serif text-3xl font-bold mb-8">
                      Contact Information
                    </h2>

                    <div className="space-y-6">
                      <a
                        href="tel:5612825509"
                        className="flex items-start space-x-4 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-navy-200 mb-1">Phone</div>
                          <div className="text-xl font-semibold group-hover:text-gold-400 transition-colors">
                            (561) 282-5509
                          </div>
                        </div>
                      </a>

                      <a
                        href="mailto:marlene@eaglehomeappraisal.com"
                        className="flex items-start space-x-4 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-navy-200 mb-1">Email</div>
                          <div className="text-lg font-semibold group-hover:text-gold-400 transition-colors break-all">
                            marlene@eaglehomeappraisal.com
                          </div>
                        </div>
                      </a>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-navy-200 mb-1">Address</div>
                          <div className="text-lg">
                            1500 North Congress Ave<br />
                            Suite 410<br />
                            West Palm Beach, FL 33409
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-navy-200 mb-1">Business Hours</div>
                          <div className="text-lg">
                            Monday - Friday: 7:00 AM - 7:00 PM<br />
                            Saturday: 9:00 AM - 5:00 PM<br />
                            Sunday: Closed
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2835!2d-80.0725!3d26.7153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d678c3733fc1%3A0x4e5622e8dd44c4ff!2s1500%20N%20Congress%20Ave%2C%20West%20Palm%20Beach%2C%20FL%2033409!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Eagle Home Appraisal Location"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
