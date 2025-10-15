import { Phone, Award, CheckCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-[#0a1628]/80 backdrop-blur-sm border-b border-gray-700/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src="/Better-Score-Solutions-Logo.png"
              alt="Better Score Solutions"
              className="h-24 w-auto"
            />
            <div className="hidden md:flex items-center gap-6 ml-6">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Award className="w-4 h-4 text-cyan-400" />
                <span className="font-medium">BBB A+ Rated</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span className="font-medium">CROA Certified</span>
              </div>
            </div>
          </div>

          <a
            href="tel:+14353602370"
            className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <div className="text-left">
              <div className="text-xs opacity-90">Call Now</div>
              <div className="text-base">(435) 360-2370</div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
