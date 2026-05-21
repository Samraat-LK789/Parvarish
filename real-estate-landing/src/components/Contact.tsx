import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
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
        </div>
      </div>
    </div>
  )
}
