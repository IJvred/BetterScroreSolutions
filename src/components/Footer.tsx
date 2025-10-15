import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Better Score Solutions
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner in credit repair. We're committed to helping you achieve financial freedom through better credit.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Contact Us
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+14353602370"
                  className="flex items-center gap-3 hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(435) 360-2370</span>
                </a>
                <a
                  href="mailto:info@betterscoresolutions.com"
                  className="flex items-center gap-3 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@betterscoresolutions.com</span>
                </a>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-400">
                  Hours: Monday - Friday<br />
                  9:00 AM - 6:00 PM EST
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-blue-400 transition-colors"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('success-stories')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Success Stories
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Credit Education
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-blue-400 transition-colors"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer and Legal */}
          <div className="border-t border-gray-800 pt-8">
            <div className="text-sm text-gray-500 space-y-4">
              <p>
                <strong className="text-gray-400">Disclaimer:</strong> Better Score Solutions is a credit repair service. Results may vary by individual circumstances. While we guarantee our best efforts and have a high success rate, we cannot guarantee specific credit score increases for every client. The 150+ point guarantee applies to clients who complete our full program and meet eligibility requirements.
              </p>
              <p>
                Credit repair services are regulated by federal and state laws. We comply with the Credit Repair Organizations Act (CROA) and all applicable regulations. You have the right to cancel services within 5 days of signing an agreement.
              </p>
              <p>
                <strong className="text-gray-400"><sup>1</sup> 150-Point Warranty Policy:</strong> Contract cancellation is available only on plans that include a warranty (Tier 2 and Tier 3 plans only) and only if a 150-point increase totaled across all three credit bureaus (Experian, Equifax, and TransUnion) is not achieved within the specified timeframe. The warranty may be voided by: (1) new hard inquiries made after contract initiation, (2) new negative credit items added after the start of the contract, or (3) failure to follow advice and recommendations provided by our credit professionals. Not all plans include a warranty. Only Tier 2 and Tier 3 plans include this warranty protection.
              </p>
            </div>
            <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>© 2025 Better Score Solutions. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Legal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
