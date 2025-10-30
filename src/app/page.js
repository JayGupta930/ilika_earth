import Link from "next/link";
import { CardHoverEffectDemo } from "@/components/HoverCard";
// import Pricing from "@/components/Pricing";

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
              <Link
                className="rounded-full bg-gradient-to-r from-cyan-500 to-green-500 text-white transition-all duration-200 flex items-center justify-center gap-2 hover:from-cyan-600 hover:to-green-600 font-medium text-base h-12 px-8 shadow-lg hover:shadow-xl transform hover:scale-105"
                href="/about"
              >
                Learn More
              </Link>
              <div className="relative inline-flex items-center justify-center group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-green-500 to-green-800 group-hover:shadow-lg group-hover:shadow-green-500/50"></div>
                <a
                  href="/contact"
                  className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-black bg-[#FAFAFA] border border-transparent rounded-full"
                >
                  Get in Touch
                </a>
              </div>
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
        </div>
      </div>
      {/* <Pricing /> */}
    </div>
  );
}
