import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            Vura
          </span>
          <span className="rounded-full bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-600">
            Beta
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            Features
          </a>
          <a
            href="#templates"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            Templates
          </a>
          <Link
            to="/builder"
            className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Build Resume
          </Link>
        </div>
      </nav>
    </header>
  )
}
