import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/70">
          <Mail className="h-4 w-4" aria-hidden="true" />
          <span>Contact</span>
        </div>
        <div className="mt-8">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Always Here
            </h2>
            <p className="mt-6 text-base leading-relaxed text-black/70">
              Begin your inquiry now.
            </p>
            <div className="mt-8 space-y-3 text-sm text-black/70">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>+91 9935035936</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>cashcons@gmail.com</span>
              </div>
            </div>
            <a
              href="#home"
              className="mt-10 inline-flex items-center justify-center border border-black bg-black px-6 py-3 text-xs uppercase tracking-[0.25em] text-white transition-colors duration-200 hover:bg-white hover:text-black"
            >
              To the Top
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 text-xs uppercase tracking-[0.2em] text-black/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 PARVARISH / <b>परवरिश</b></span>
        </div>
      </div>
    </footer>
  )
}
