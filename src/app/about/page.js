export default function About() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent">
                Ilika
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Basifying a greener tomorrow through sustainable innovation and environmental responsibility.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Mission */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Ilika, we are committed to creating sustainable solutions that protect our planet 
                while driving innovation. Our mission is to develop technologies and practices that 
                contribute to a greener, more sustainable future for generations to come.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through cutting-edge research, strategic partnerships, and unwavering dedication to 
                environmental stewardship, we're working to make a positive impact on the world.
              </p>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                  Our Values
                </h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start group">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full mt-2 mr-4 group-hover:scale-110 transition-transform duration-200"></div>
                  <span className="text-gray-600 text-lg leading-relaxed">Environmental sustainability in everything we do</span>
                </li>
                <li className="flex items-start group">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full mt-2 mr-4 group-hover:scale-110 transition-transform duration-200"></div>
                  <span className="text-gray-600 text-lg leading-relaxed">Innovation that creates lasting positive change</span>
                </li>
                <li className="flex items-start group">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full mt-2 mr-4 group-hover:scale-110 transition-transform duration-200"></div>
                  <span className="text-gray-600 text-lg leading-relaxed">Transparency and integrity in all our operations</span>
                </li>
                <li className="flex items-start group">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full mt-2 mr-4 group-hover:scale-110 transition-transform duration-200"></div>
                  <span className="text-gray-600 text-lg leading-relaxed">Collaboration with communities and partners</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent mb-2">
                Global Impact
              </h3>
              <p className="text-gray-600">Making a difference worldwide through sustainable solutions</p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">Pioneering breakthrough technologies for environmental progress</p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent mb-2">
                Community
              </h3>
              <p className="text-gray-600">Building partnerships that amplify our environmental impact</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-cyan-50 to-green-50 p-12 rounded-3xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent">
                Mission?
              </span>
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with us to create innovative solutions that drive environmental change and build a sustainable future.
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <a
                className="rounded-full bg-gradient-to-r from-cyan-500 to-green-500 text-white transition-all duration-200 flex items-center justify-center gap-2 hover:from-cyan-600 hover:to-green-600 font-medium text-base h-12 px-8 shadow-lg hover:shadow-xl transform hover:scale-105"
                href="/contact"
              >
                Get In Touch
              </a>
              <a
                className="rounded-full border-2 border-gray-300 text-gray-700 transition-all duration-200 flex items-center justify-center gap-2 hover:border-cyan-500 hover:text-cyan-600 font-medium text-base h-12 px-8"
                href="/services"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
