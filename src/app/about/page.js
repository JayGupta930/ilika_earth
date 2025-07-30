/* import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main>
      <Spline
        scene="https://prod.spline.design/l0WtQCtvpvWanWyc/scene.splinecode" 
      />
    </main>
  );
}
*/



import Spline from '@splinetool/react-spline/next';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">About Ilika</h1>
              <p className="text-xl text-gray-600">
                Basifying a greener tomorrow through sustainable innovation and environmental responsibility.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Ilika, we are committed to creating sustainable solutions that protect our planet 
                while driving innovation. Our mission is to develop technologies and practices that 
                contribute to a greener, more sustainable future for generations to come.
              </p>
              <p className="text-lg text-gray-600">
                Through cutting-edge research, strategic partnerships, and unwavering dedication to 
                environmental stewardship, we're working to make a positive impact on the world.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Environmental sustainability in everything we do</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Innovation that creates lasting positive change</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Transparency and integrity in all our operations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Collaboration with communities and partners</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right side - Spline Robot */}
          <div className="h-[600px] lg:h-[500px] -mt-16 lg:-mt-50 bg-white rounded-lg shadow-lg relative">
            <Spline
              scene="https://prod.spline.design/l0WtQCtvpvWanWyc/scene.splinecode" 
            />
            {/* Hide Spline watermark */}
            <div className="absolute bottom-4 right-3 w-37 h-11 rounded "
            style={{ backgroundImage: 'linear-gradient(160deg, #7a2a2d 25%, #6e1c1c 15%, #a2397b 16%, #9b3766 100%)'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
