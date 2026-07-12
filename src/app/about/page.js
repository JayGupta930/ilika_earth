export default function About() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#FAFAFA] px-4 pb-16 pt-28 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl" style={{ fontFamily: "Inter, Poppins, ui-sans-serif, system-ui, sans-serif" }}>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-emerald-200/70 bg-gradient-to-br from-emerald-100 via-lime-50 to-teal-100 px-6 py-12 text-center shadow-[0_25px_70px_rgba(16,185,129,0.2)] sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute -left-12 -top-16 h-40 w-40 rounded-full bg-emerald-300/30 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 -right-10 h-44 w-44 rounded-full bg-teal-300/30 blur-2xl" />

          <div className="relative">
            <p className="mb-4 inline-flex items-center rounded-full border border-emerald-300/80 bg-white/70 px-4 py-1 text-xs font-semibold tracking-[0.16em] text-emerald-800 backdrop-blur">
              ilika Greentech Pvt. Ltd.
            </p>

            <h1 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight text-emerald-950 sm:text-5xl md:text-6xl">
              Building a Greener Future with AI & IoT
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-emerald-900/80 sm:text-lg">
              Empowering industries with ESG intelligence, smart machinery management, and sustainable decision-making through data-driven technology.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:w-auto"
              >
                Get Demo
              </a>
              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl border border-emerald-400/80 bg-white/70 px-6 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:w-auto"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <section className="mt-14">
          <div className="mb-6">
            <p className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
              Vision
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="group relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-white p-6 shadow-[0_12px_28px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_20px_45px_rgba(16,185,129,0.2)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-100 text-emerald-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c4.97-1.11 8.25-5.2 8.25-10.12V6.75L12 3 3.75 6.75v4.13C3.75 15.8 7.03 19.89 12 21Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.25 13.5c1.1-2.6 3.2-4.2 5.5-4.9-.1 2.4-.9 5.1-3.4 6.9-1.2.85-2.45 1.2-3.6 1.35" />
                </svg>
              </div>
              <p className="relative mt-4 text-sm font-medium leading-relaxed text-emerald-950">
                Accelerate transition to a low-carbon economy
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-white p-6 shadow-[0_12px_28px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_20px_45px_rgba(16,185,129,0.2)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-100 text-emerald-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5h15v15h-15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15.75 10.25 12.75 12.75 14.75 16.5 10.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h1.5M11.25 8.25h1.5M15 8.25h1.5" />
                </svg>
              </div>
              <p className="relative mt-4 text-sm font-medium leading-relaxed text-emerald-950">
                Enable data-driven sustainability decisions
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-white p-6 shadow-[0_12px_28px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_20px_45px_rgba(16,185,129,0.2)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-100 text-emerald-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 4.5 6v6c0 4.42 3.07 8.31 7.5 9.3 4.43-.99 7.5-4.88 7.5-9.3V6L12 3Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.75 11.75 10.75 13.75 15.25 9.25" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 16.25h7.5" />
                </svg>
              </div>
              <p className="relative mt-4 text-sm font-medium leading-relaxed text-emerald-950">
                Simplify ESG compliance and reporting
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-white p-6 shadow-[0_12px_28px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_20px_45px_rgba(16,185,129,0.2)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-100 text-emerald-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75 8.25 6v4.5c0 3.6 2.43 6.75 3.75 7.95 1.32-1.2 3.75-4.35 3.75-7.95V6L12 3.75Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 12.75c1.05-1.95 2.55-3.15 4.25-3.75-.1 1.8-.7 3.75-2.55 5.1-.8.55-1.55.85-2.2 1.05" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 19.5h9" />
                </svg>
              </div>
              <p className="relative mt-4 text-sm font-medium leading-relaxed text-emerald-950">
                AI-powered environmental intelligence
              </p>
            </article>
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-3xl border border-emerald-200/70 bg-white/85 p-6 shadow-[0_18px_40px_rgba(16,24,40,0.08)] backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-l font-semibold tracking-[0.14em] text-emerald-800">
                About ilika Greentech
              </p>

              <h2 className="mt-4 text-2xl font-semibold leading-tight text-emerald-950 sm:text-3xl lg:text-4xl">
                Sustainable Innovation Built in Chhattisgarh
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                <p>
                  ilika Greentech is a Chhattisgarh-based DPIIT-recognized startup focused on building a sustainable future through technology.
                </p>
                <p>
                  The name ilika reflects our connection to the Earth and our commitment to environmental responsibility.
                </p>
                <p>
                  We provide a unified SaaS platform for ESG data management, machinery monitoring, and Social Return on Investment (SROI), helping organizations reduce inefficiencies, ensure compliance, and make smarter decisions using AI and IoT.
                </p>
                <p>
                  Our goal is to enable industries to transition towards a low-carbon, data-driven, and environmentally responsible ecosystem.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-200/60 via-lime-100/50 to-teal-200/50 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/60 p-2">
                <img
                  src="/home/ilika.png"
                  alt="Ilika Greentech sustainability platform"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8 text-center">
            <p className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
              What We Do
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-emerald-950 sm:text-3xl lg:text-4xl">
              Smart Services for Sustainable Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article className="group relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-white p-6 shadow-[0_14px_32px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_24px_52px_rgba(16,185,129,0.22)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-100 text-emerald-700 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/327848/sustainability-approved-ecology-approval-environment-conservation-agreement.svg"
                  alt="Sustainability icon"
                  className="h-6 w-6"
                />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold text-emerald-950">
                ESG Data Management
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                Track ESG metrics, monitor GHG emissions, and generate compliance-ready reports aligned with global standards like BRSR and GRI.
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-white p-6 shadow-[0_14px_32px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_24px_52px_rgba(16,185,129,0.22)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-100 text-emerald-700 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/185186/industrial-robot-robotics.svg"
                  alt="Industrial robot icon"
                  className="h-6 w-6"
                />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold text-emerald-950">
                Machinery Management
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                Monitor machine health, track maintenance, and optimize performance with real-time data and predictive analytics.
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-white p-6 shadow-[0_14px_32px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_24px_52px_rgba(16,185,129,0.22)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-100 text-emerald-700 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/340468/iot-connect.svg"
                  alt="IoT connect icon"
                  className="h-6 w-6"
                />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold text-emerald-950">
                AI + IoT Platform
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                Leverage AI-driven insights and IoT integration to automate operations, improve efficiency, and reduce environmental impact.
              </p>
            </article>
          </div>

          <div className="mt-6 flex justify-center">
            <article className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-emerald-200/80 bg-white p-6 shadow-[0_14px_32px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_24px_52px_rgba(16,185,129,0.22)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-100 text-emerald-700 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/501484/calculator.svg"
                  alt="Calculator icon"
                  className="h-6 w-6"
                />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold text-emerald-950">
                SROI Calculator
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                Measure and visualize Social Return on Investment (SROI) to evaluate impact outcomes and make data-backed sustainability decisions.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8 text-center">
            <p className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
              Achievements
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-emerald-950 sm:text-3xl lg:text-4xl">
              Events We Participated In
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-700 sm:text-base">
              We proudly represented ilika at Chhattisgarh Tech Start and Bharat Expo in New Delhi.
            </p>
          </div>

          <div className="space-y-10">
            <article className="overflow-hidden rounded-2xl border border-emerald-200/80 bg-white p-5 shadow-[0_14px_32px_rgba(16,24,40,0.08)] sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-emerald-300/80 bg-emerald-100 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-emerald-800">
                  Chhattisgarh Tech Start Event
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* <div className="overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50">
                  <img
                    src="/Image/IMG_2477.jpg"
                    alt="ilika team at Chhattisgarh Tech Start event"
                    className="h-72 w-full object-contain bg-white"
                  />
                </div> */}
                <div className="overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50">
                  <img
                    src="/Image/WhatsApp%20Image%202026-04-26%20at%2012.49.57%20PM.jpeg"
                    alt="ilika exhibition booth at Chhattisgarh Tech Start"
                    className="h-72 w-full object-contain bg-white"
                  />
                </div>
                  <div className="overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50">
                    <img
                      src="/Image/iiii.jpeg"
                      alt="ilika booth presentation at Chhattisgarh Tech Start"
                      className="h-72 w-full object-contain bg-white"
                    />
                  </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-emerald-200/80 bg-white p-5 shadow-[0_14px_32px_rgba(16,24,40,0.08)] sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-teal-300/80 bg-teal-100 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-teal-800">
                  Bharat Expo, New Delhi
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50">
                  <img
                    src="/Image/IMG_2485.JPG.jpeg"
                    alt="ilika participation at Bharat Expo in New Delhi"
                    className="h-72 w-full object-contain bg-white"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50">
                  <img
                    src="/Image/IMG_2532.jpg"
                    alt="ilika team presence at Bharat Expo New Delhi"
                    className="h-72 w-full object-contain bg-white"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50">
                  <img
                    src="/Image/IMG_2477.jpg"
                    alt="ilika interaction at Bharat Expo in New Delhi"
                    className="h-72 w-full object-contain bg-white"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50">
                  <img
                    src="/Image/IMG_2537.jpg"
                    alt="ilika booth setup at Bharat Expo in New Delhi"
                    className="h-72 w-full object-contain bg-white"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50">
                  <img
                    src="/Image/IMG_2747.jpg"
                    alt="ilika showcase moments at Bharat Expo New Delhi"
                    className="h-72 w-full object-contain bg-white"
                  />
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}
