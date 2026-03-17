export default function About() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#FAFAFA] px-4 pb-16 pt-28 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl" style={{ fontFamily: "Inter, Poppins, ui-sans-serif, system-ui, sans-serif" }}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold tracking-[0.16em] text-emerald-700">
            WHO WE ARE
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
            About ILiKA
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600 sm:text-lg">
            Building a Sustainable Future with AI & IoT
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          <article className="group relative overflow-hidden rounded-[20px] border border-emerald-100 bg-white/90 p-7 shadow-[0_14px_32px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-emerald-300 hover:shadow-[0_25px_65px_rgba(16,185,129,0.22)]">
            <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-emerald-100/80 transition-all duration-300 group-hover:ring-emerald-200" />
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 12A8.25 8.25 0 1 1 3.75 12a8.25 8.25 0 0 1 16.5 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75c2.4 2.4 2.4 14.1 0 16.5m0-16.5c-2.4 2.4-2.4 14.1 0 16.5M4.5 9.75h15m-15 4.5h15" />
              </svg>
            </div>

            <h2 className="text-2xl font-semibold text-emerald-950">About ILiKA</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              ILiKA is inspired by the Sanskrit word meaning Shrishti (Earth). We aim to build a greener and more sustainable future by helping organizations transition to a low-carbon economy.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              With the 1.5C global warming threshold already breached, we empower businesses to reduce environmental impact and drive long-term sustainability.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-[20px] border border-emerald-100 bg-white/90 p-7 shadow-[0_14px_32px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-emerald-300 hover:shadow-[0_25px_65px_rgba(20,184,166,0.22)]">
            <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-emerald-100/80 transition-all duration-300 group-hover:ring-teal-200" />
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-200/70 bg-gradient-to-br from-teal-100 to-emerald-100 text-teal-700">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9zM2 9h2m0 6H2m20-6h-2m2 6h-2M9 2v2m6-2v2m-6 16v2m6-2v2" />
              </svg>
            </div>

            <h2 className="text-2xl font-semibold text-emerald-950">AI & IoT Platform</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              Our AI-enabled SaaS platform integrated with IoT systems helps monitor and optimize environmental impact in real time.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-gray-700 sm:text-base">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                Real-time tracking of energy, water, waste, and emissions
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                AI-driven recommendations to reduce GHG emissions
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                Automated ESG compliance reporting (BRSR, GRI, CBAM)
              </li>
            </ul>
          </article>

          <article className="group relative overflow-hidden rounded-[20px] border border-emerald-100 bg-white/90 p-7 shadow-[0_14px_32px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-emerald-300 hover:shadow-[0_25px_65px_rgba(52,211,153,0.22)] md:col-span-2 xl:col-span-1">
            <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-emerald-100/80 transition-all duration-300 group-hover:ring-emerald-200" />
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-emerald-100 to-lime-100 text-emerald-700">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 11.25a6 6 0 0 1 12 0" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 11.25h5.25v5.25h-5.25z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.5 12 2.625 2.1L21.75 12" />
              </svg>
            </div>

            <h2 className="text-2xl font-semibold text-emerald-950">Team & Contact</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              We are building AI-enabled sustainable organizations while creating employment opportunities in Chhattisgarh.
            </p>

            <div className="mt-5 space-y-4 text-sm text-gray-700 sm:text-base">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">Founders</p>
                <p className="mt-1">Gayatri Bhardwaj</p>
                <p>Jay Gupta</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">Contact</p>
                <p className="mt-1">Phone: 88171-01064, 7417959474</p>
                <p>
                  Email: <a className="underline decoration-emerald-400 underline-offset-4 hover:text-emerald-700" href="mailto:info@ilika.earth">info@ilika.earth</a>,{" "}
                  <a className="underline decoration-emerald-400 underline-offset-4 hover:text-emerald-700" href="mailto:ilikagreentech@gmail.com">ilikagreentech@gmail.com</a>
                </p>
                <p>Raipur, Chhattisgarh</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
