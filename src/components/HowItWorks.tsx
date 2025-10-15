import { FileSearch, AlertCircle, TrendingUp, Activity } from 'lucide-react';

const steps = [
  {
    icon: FileSearch,
    title: 'Free Credit Analysis',
    description: 'We thoroughly review your credit report and identify all negative items impacting your score.',
  },
  {
    icon: AlertCircle,
    title: 'Dispute Inaccuracies',
    description: 'Our experts challenge questionable items with creditors and bureaus on your behalf.',
  },
  {
    icon: TrendingUp,
    title: 'Boost & Optimize Score',
    description: 'We provide personalized strategies to maximize your credit score improvement.',
  },
  {
    icon: Activity,
    title: 'Track Progress in Real Time',
    description: 'Monitor your score improvements and dispute status through our client dashboard.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our proven 4-step process gets results fast
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-2 border-blue-100 h-full transition-all duration-200 hover:shadow-lg hover:border-blue-200">
                    <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
