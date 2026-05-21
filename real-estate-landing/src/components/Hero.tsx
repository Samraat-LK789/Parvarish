import { useState } from 'react'
import { X } from 'lucide-react'
import project4 from '../assets/project4.jpeg'

export default function Hero() {
  const [isDuneOpen, setIsDuneOpen] = useState(false)
  const [isDuneZoomed, setIsDuneZoomed] = useState(false)

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src={project4}
          alt="The Dune"
          className="h-full w-full object-cover object-[20%_center] lg:object-center blur-[8px]"
        />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <div className="max-w-3xl">
        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          The Dune Swarnikaa
        </h1>
        <div className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-black sm:text-3xl">
          Leap into The Realm of Collectable Architecture
        </div>
        <div className="mt-10">
          <button
            type="button"
            onClick={() => setIsDuneOpen(true)}
            className="inline-flex items-center gap-3 border border-black bg-black px-6 py-3 text-xs uppercase tracking-[0.25em] text-white transition-colors duration-200 hover:bg-white hover:text-black cursor-pointer"
          >
            Know More
          </button>
        </div>
      </div>
      </div>
      {isDuneOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6 py-10"
          role="dialog"
          aria-modal="true"
          onClick={() => {
            setIsDuneOpen(false)
            setIsDuneZoomed(false)
          }}
        >
          <div
            className="relative max-h-[90vh] w-[95vw] max-w-6xl overflow-y-auto bg-black text-white no-scrollbar"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                setIsDuneOpen(false)
                setIsDuneZoomed(false)
              }}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center text-white transition-opacity duration-200 hover:opacity-70 cursor-pointer"
              aria-label="Close preview"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="w-full bg-black px-6 pt-10">
              <img
                src={project4}
                alt="The Dune"
                className={`max-h-[55vh] w-full cursor-zoom-in object-contain transition-transform duration-300 ${
                  isDuneZoomed ? 'scale-150 cursor-zoom-out' : ''
                }`}
                onClick={() => setIsDuneZoomed((zoomed) => !zoomed)}
              />
            </div>
            <div className="px-6 pb-10 pt-6">
              <div className="w-full overflow-hidden rounded-none bg-black py-4">
                <iframe
                  className="h-72 w-full sm:h-96"
                  src="https://www.youtube.com/embed/6xN4O2qacwg?rel=0"
                  title="The Dune video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="mt-6 text-center text-sm uppercase tracking-[0.2em]">
                The Dune
              </div>
              <div className="mt-2 text-center text-xs uppercase tracking-[0.2em] text-white/70">
                2026 · Resedential
              </div>
              <div className="mt-3 text-center text-xs uppercase tracking-[0.2em] text-white/80">
                For Those Who are Rare
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
