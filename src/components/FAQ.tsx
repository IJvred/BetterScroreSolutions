import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does credit repair take?',
    answer: 'Most clients see significant improvements within 3-6 months. However, results vary depending on your unique credit situation. Some see changes in as little as 30 days, while more complex cases may take up to 12 months.',
  },
  {
    question: 'Is credit repair legal?',
    answer: 'Yes! Credit repair is 100% legal and protected by the Credit Repair Organizations Act (CROA). We follow all federal and state regulations to ensure your rights are protected throughout the process.',
  },
  {
    question: 'How much does it cost?',
    answer: 'We offer transparent, affordable pricing with no hidden fees. Contact us for a free consultation and custom quote based on your specific needs. We also offer payment plans to make our services accessible to everyone.',
  },
  {
    question: 'Can I repair my credit myself?',
    answer: 'While you can dispute items yourself, our experts know the intricate details of credit law, bureau procedures, and proven strategies that get results. We save you time, stress, and often achieve better outcomes faster than DIY efforts.',
  },
  {
    question: 'What items can be removed from my credit report?',
    answer: 'We can dispute inaccurate, unverifiable, or outdated items including late payments, collections, charge-offs, bankruptcies, foreclosures, repossessions, and more. If an item cannot be verified or is reported incorrectly, it can be removed.',
  },
  {
    question: 'Will this hurt my credit score?',
    answer: 'No! Our process is designed to improve your credit, not harm it. Disputing inaccurate items and optimizing your credit profile will only help your score. We never take actions that would negatively impact your credit.',
  },
  {
    question: 'Do you guarantee results?',
    answer: 'While we cannot guarantee specific results due to the unique nature of each credit profile, we do guarantee our best effort and expertise. We have a proven track record with thousands of satisfied clients and will work tirelessly on your behalf.',
  },
  {
    question: 'What happens after my credit is repaired?',
    answer: 'We provide ongoing credit education and strategies to help you maintain and continue improving your score. You\'ll have the knowledge and tools to keep your credit healthy for life.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about credit repair
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
