export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">Vura</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="transition hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="transition hover:text-gray-900">
              Terms
            </a>
            <a
              href="https://github.com/CommanderThrow/Vura"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-gray-900"
            >
              GitHub
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Vura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
