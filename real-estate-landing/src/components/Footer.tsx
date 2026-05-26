import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  const [isDevInfoOpen, setIsDevInfoOpen] = useState(false)

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
          <div className="relative flex flex-col gap-2">
            <span>© 2026 PARVARISH / <b>परवरिश</b></span>
            <button
              type="button"
              onClick={() => setIsDevInfoOpen((open) => !open)}
              aria-expanded={isDevInfoOpen}
              className="cursor-pointer text-left text-[10px] uppercase tracking-[0.2em] text-black/60 underline decoration-black/30 underline-offset-4 transition-colors duration-200 hover:text-black"
            >
              Contact website developer
            </button>
            {isDevInfoOpen && (
              <div className="absolute bottom-full left-0 mb-3 w-64 rounded border border-black/10 bg-white px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-black shadow-sm">
                <div className="text-black/70">Developer Mail: samraat1official8@gmail.com</div>
                <a
                  href="https://www.linkedin.com/in/samraat-jain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex text-black underline decoration-black/40 underline-offset-4 transition-colors duration-200 hover:text-black/70"
                >
                  linkedin.com/in/samraat-jain
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
