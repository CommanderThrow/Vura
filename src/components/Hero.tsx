import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-violet-50/50 via-white to-white px-6 py-20 sm:py-28">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="relative flex w-full max-w-6xl flex-col items-center gap-12">
        {/* ---- Text block ---- */}
        <div className="flex w-full flex-col items-center text-center">
          {/* Badge */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200/60 bg-violet-50/80 px-4 py-1.5 text-sm font-medium text-violet-700 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Free &amp; Private — your data stays in your browser
          </span>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Build a polished resume{' '}
            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-sky-500 bg-clip-text text-transparent">
              in minutes
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
            No sign-up. No uploads. Create an ATS-friendly resume that looks
            great to humans and parses cleanly for applicant-tracking systems.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/builder"
              className="group rounded-xl bg-gray-900 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-gray-900/20 transition-all duration-200 hover:bg-gray-800 hover:shadow-xl"
            >
              Get Started Free
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <a
              href="#features"
              className="rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-300 hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* ---- Preview mockup ---- */}
        <div className="relative mx-auto w-full max-w-3xl">
          {/* Glow behind mockup */}
          <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-r from-violet-400/20 via-sky-400/20 to-violet-400/20 blur-xl" />

          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-900/10">
            {/* Browser chrome bar */}
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 flex-1 rounded-md bg-gray-200/70 px-3 py-1 text-xs text-gray-400">
                vura.app/builder
              </span>
            </div>

            {/* Fake resume preview */}
            <div className="flex gap-6 p-6 sm:p-8">
              {/* Sidebar */}
              <div className="hidden w-1/3 flex-col gap-3 sm:flex">
                <div className="h-16 w-16 rounded-full bg-gray-200" />
                <div className="h-3 w-3/4 rounded bg-gray-200" />
                <div className="h-2 w-full rounded bg-gray-100" />
                <div className="h-2 w-5/6 rounded bg-gray-100" />
                <div className="mt-2 h-2 w-2/3 rounded bg-violet-200" />
                <div className="mt-1 h-2 w-full rounded bg-gray-100" />
                <div className="h-2 w-4/5 rounded bg-gray-100" />
              </div>

              {/* Main column */}
              <div className="flex flex-1 flex-col gap-3">
                <div className="h-5 w-2/3 rounded bg-gray-800" />
                <div className="h-3 w-full rounded bg-gray-200" />
                <div className="h-3 w-5/6 rounded bg-gray-100" />
                <div className="mt-2 h-2.5 w-1/3 rounded bg-violet-200" />
                <div className="h-2 w-full rounded bg-gray-100" />
                <div className="h-2 w-full rounded bg-gray-100" />
                <div className="h-2 w-4/5 rounded bg-gray-100" />
                <div className="mt-2 h-2.5 w-1/3 rounded bg-sky-200" />
                <div className="h-2 w-full rounded bg-gray-100" />
                <div className="h-2 w-3/4 rounded bg-gray-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
