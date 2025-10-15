export default function Partners() {
  return (
    <section className="bg-[#0a1628] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            TRUSTED BY LEADING BRANDS
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Top Partners
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
          <div className="bg-[#1a2942] hover:bg-[#243552] rounded-xl p-8 flex items-center justify-center transition-all duration-300 border border-gray-700/50">
            <span className="text-3xl font-bold text-gray-400">
              HONDA
            </span>
          </div>

          <div className="bg-[#1a2942] hover:bg-[#243552] rounded-xl p-8 flex flex-col items-center justify-center transition-all duration-300 border border-gray-700/50">
            <span className="text-2xl font-bold text-gray-400">
              QuikFix
            </span>
            <span className="text-xs text-gray-500 mt-1">
              Financial Solutions
            </span>
          </div>

          <div className="bg-[#1a2942] hover:bg-[#243552] rounded-xl p-8 flex items-center justify-center transition-all duration-300 border border-gray-700/50">
            <span className="text-4xl font-bold text-gray-400">
              KIA
            </span>
          </div>

          <div className="bg-[#1a2942] hover:bg-[#243552] rounded-xl p-8 flex items-center justify-center transition-all duration-300 border border-gray-700/50">
            <span className="text-3xl font-bold text-gray-400">
              FORD
            </span>
          </div>

          <div className="bg-[#1a2942] hover:bg-[#243552] rounded-xl p-8 flex items-center justify-center transition-all duration-300 border border-gray-700/50">
            <span className="text-3xl font-bold text-gray-400">
              CHEVY
            </span>
          </div>
        </div>

        <p className="text-center text-blue-300 text-sm max-w-3xl mx-auto">
          Helping thousands get approved for auto loans and financing with improved credit scores
        </p>
      </div>
    </section>
  );
}
