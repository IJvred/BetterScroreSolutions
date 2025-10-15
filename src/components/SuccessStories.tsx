import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    scoreBefore: 540,
    scoreAfter: 720,
    increase: 180,
    story: 'I was skeptical at first, but Better Score Solutions delivered exactly what they promised. My credit went from poor to excellent in just 5 months.',
    location: 'Los Angeles, CA',
  },
  {
    name: 'Jamal Washington',
    scoreBefore: 590,
    scoreAfter: 755,
    increase: 165,
    story: 'After years of credit problems, I finally got approved for a mortgage thanks to their help. The process was transparent and stress-free.',
    location: 'Dallas, TX',
  },
  {
    name: 'Maria Gonzalez',
    scoreBefore: 625,
    scoreAfter: 790,
    increase: 165,
    story: 'The education I received was just as valuable as the score increase. Now I know how to maintain excellent credit for life.',
    location: 'Miami, FL',
  },
  {
    name: 'David K.',
    scoreBefore: 510,
    scoreAfter: 680,
    increase: 170,
    story: 'I got my dream car loan at a great interest rate. Better Score Solutions changed my financial future.',
    location: 'Chicago, IL',
  },
  {
    name: 'Priya Patel',
    scoreBefore: 605,
    scoreAfter: 770,
    increase: 165,
    story: 'Professional, responsive, and they actually care about results. I wish I had found them years ago.',
    location: 'Atlanta, GA',
  },
  {
    name: 'Chen Li',
    scoreBefore: 555,
    scoreAfter: 735,
    increase: 180,
    story: 'From denied credit cards to premium rewards cards. The transformation was incredible and happened faster than I expected.',
    location: 'Phoenix, AZ',
  },
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-24 bg-[#0a1628]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results, Real People
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have transformed their credit scores
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1a2942] p-8 rounded-xl border border-gray-700/50 hover:bg-[#243552] transition-all duration-200 hover:shadow-xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                ))}
              </div>

              {/* Score Increase */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">Before</div>
                    <div className="text-2xl font-bold text-red-400">{testimonial.scoreBefore}</div>
                  </div>
                  <div className="text-center px-4">
                    <div className="text-sm text-cyan-400 font-semibold mb-1">+{testimonial.increase}</div>
                    <div className="text-xs text-gray-400">points</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">After</div>
                    <div className="text-2xl font-bold text-green-400">{testimonial.scoreAfter}</div>
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${((testimonial.scoreAfter - 300) / 550) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Testimonial */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.story}"
              </p>

              {/* Name and Location */}
              <div className="border-t border-gray-700/50 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
