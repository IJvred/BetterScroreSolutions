interface ContactFormProps {
  show: boolean;
}

export default function ContactForm({ show }: ContactFormProps) {
  return (
    <section id="contact-form" className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start Your Credit Transformation Today
            </h2>
            <p className="text-xl text-blue-100">
              Get your free credit analysis and personalized action plan
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-0 overflow-hidden">
            <iframe
              src="https://pulse.disputeprocess.com/jsp/custom_form.jsp?tab_id=M01aN3BNUGFRaGZ1SGM1a0Iwd1pIZz09&cust_type=1&company_id=aEtmNkZ6TEltVk5VZlY0VXdha2V1UT09&isLinkFromIframe=1&redirect_url="
              height="850"
              width="100%"
              style={{ background: 'white', border: 'none' }}
              title="Contact Form"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
