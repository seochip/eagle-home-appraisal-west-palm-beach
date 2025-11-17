import { HelpCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-50 via-white to-navy-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-gold-600" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-navy-600">
            Get answers to common questions about our appraisal services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="bg-white border border-navy-100 rounded-2xl p-6 hover:shadow-lg transition-all"
            >
              <h3
                itemProp="name"
                className="text-lg font-bold text-navy-900 mb-3 flex items-start"
              >
                <span className="text-gold-600 mr-3 font-serif text-xl flex-shrink-0">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text" className="text-navy-600 leading-relaxed flex items-start">
                  <span className="text-gold-600 mr-3 font-serif text-xl flex-shrink-0">A.</span>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
