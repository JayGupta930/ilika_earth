import { CardHoverEffectDemo } from "@/components/HoverCard";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#FAFAFA] py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Basifying a{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent">
                Greener Tomorrow
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leading sustainable innovation for a cleaner, more efficient future. 
              Join us in our mission to create environmental solutions that matter.
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <a
                className="rounded-full bg-gradient-to-r from-cyan-500 to-green-500 text-white transition-all duration-200 flex items-center justify-center gap-2 hover:from-cyan-600 hover:to-green-600 font-medium text-base h-12 px-8 shadow-lg hover:shadow-xl transform hover:scale-105"
                href="#learn-more"
              >
                Learn More
              </a>
              <a
                className="rounded-full bg-gradient-to-r from-cyan-500 to-green-500 text-white transition-all duration-200 flex items-center justify-center gap-2 hover:from-cyan-600 hover:to-green-600 font-medium text-base h-12 px-8 shadow-lg hover:shadow-xl transform hover:scale-105"
                href="/contact"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-[#FAFAFA]">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sustainable Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Innovative approaches to environmental challenges
            </p>
          </div>
          <CardHoverEffectDemo/>
          
          {/* <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean Energy</h3>
              <p className="text-gray-600">Renewable energy solutions for a sustainable future</p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Green Technology</h3>
              <p className="text-gray-600">Advanced eco-friendly technologies and innovations</p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Impact</h3>
              <p className="text-gray-600">Making a difference worldwide through sustainable practices</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
