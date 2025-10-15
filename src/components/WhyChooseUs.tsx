import { Shield, TrendingUp, Clock, Eye, BookOpen, Award, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: '150 Point Warranty',
    description: 'We guarantee a minimum 150-point increase or you pay nothing.',
  },
  {
    icon: Shield,
    title: 'No-Risk, Pay-for-Results Model',
    description: 'Only pay when you see real results. No upfront costs, no hidden fees, no surprises.',
  },
  {
    icon: Clock,
    title: 'Fast Dispute Turnaround',
    description: 'We work aggressively to challenge negative items and get results in weeks, not months.',
  },
  {
    icon: Eye,
    title: 'Transparent Process',
    description: 'Track every dispute, see every update, and know exactly what we are doing for you.',
  },
  {
    icon: BookOpen,
    title: 'Credit Education Included',
    description: 'Learn how to maintain and improve your score long after our work is done.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: 'Over 10,000 clients helped with a 98% success rate. Real results you can trust.',
  },
];

interface WhyChooseUsProps {
  onCtaClick: () => void;
}

export default function WhyChooseUs({ onCtaClick }: WhyChooseUsProps) {
  return (
    <section className="py-24 bg-[#0a1628]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The most trusted name in credit repair
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-[#1a2942] p-8 rounded-xl hover:bg-[#243552] transition-all duration-200 border border-gray-700/50"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onCtaClick}
            className="group bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Free Analysis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
