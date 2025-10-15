import { Shield, Users, Target, Award } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integrity First',
    description: 'We operate with complete transparency and always follow legal guidelines.',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your financial success is our only priority. We celebrate every win with you.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We use proven strategies and relentless advocacy to maximize your score.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'BBB A+ rated with thousands of 5-star reviews and success stories.',
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/Interior-Wall-3D-Logo-Mockup.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-[#0a1628]/95 to-black/95"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Better Score Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're more than a credit repair company—we're your partners in financial transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                Founded on the belief that everyone deserves a second chance, Better Score Solutions has helped thousands of individuals and families rebuild their credit and reclaim their financial future. We combine cutting-edge technology with personalized service to deliver results that change lives.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Our Commitment</h3>
              <p className="text-gray-300 leading-relaxed">
                We're committed to providing ethical, effective credit repair services with complete transparency. Every client receives personalized attention from certified credit experts who understand that behind every credit report is a real person with real dreams.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-200"
                >
                  <div className="bg-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
