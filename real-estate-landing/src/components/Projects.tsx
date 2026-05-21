import { useEffect, useMemo, useState } from 'react'
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MapPin,
  Maximize2,
  X,
} from 'lucide-react'
import { projects } from '../data/projects'

export default function Projects() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) ?? null,
    [activeProjectId],
  )
  const activeGallery = useMemo(() => {
    if (!activeProject) {
      return []
    }

    if (activeProject.images && activeProject.images.length > 0) {
      return activeProject.images
    }

    return activeProject.image ? [activeProject.image] : []
  }, [activeProject])

  useEffect(() => {
    setActiveImageIndex(0)
  }, [activeProjectId])

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/70">
        <Building2 className="h-4 w-4" aria-hidden="true" />
        <span>Projects</span>
      </div>
      <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
        RESIDENTIAL / COMMERCIAL
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => {
          const LinkIcon = project.linkType === 'map' ? MapPin : ExternalLink

          return (
            <div key={project.id} className="flex flex-col border border-black">
              <div className="relative h-56 w-full border-b border-black bg-white">
                {project.image || project.images?.[0] ? (
                  <img
                    src={project.image ?? project.images?.[0]}
                    alt={project.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full" aria-hidden="true" />
                )}
              </div>
              <div className="relative px-4 py-4">
                <div className="text-sm uppercase tracking-[0.2em]">
                  {project.name}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-black/70">
                  {project.year} · {project.category} · {project.status}
                </div>
                {project.location && (
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-black/60">
                    {project.location}
                  </div>
                )}
                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] transition-colors duration-200 hover:text-neutral-500"
                >
                  <LinkIcon className="h-4 w-4" aria-hidden="true" />
                  {project.linkType === 'map' ? 'Maps' : 'Website'}
                </a>
                <button
                  type="button"
                  onClick={() => setActiveProjectId(project.id)}
                  className="absolute bottom-4 right-4 inline-flex h-9 w-9 items-center justify-center border border-black bg-white text-black transition-colors duration-200 hover:bg-black hover:text-white cursor-pointer"
                  aria-label={`Expand ${project.name}`}
                >
                  <Maximize2 className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6 py-10"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveProjectId(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-black text-white"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveProjectId(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center text-white transition-opacity duration-200 hover:opacity-70 cursor-pointer"
              aria-label="Close preview"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="relative h-[70vh] w-full bg-black">
              {activeGallery.length > 0 ? (
                <img
                  src={activeGallery[activeImageIndex]}
                  alt={activeProject.name}
                  className="h-full w-full object-contain"
                />
              ) : (
                <div className="h-full w-full" aria-hidden="true" />
              )}
            </div>
            {activeGallery.length > 1 && (
              <div className="flex items-center justify-between px-6 py-3">
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex(
                      (index) =>
                        (index - 1 + activeGallery.length) %
                        activeGallery.length,
                    )
                  }
                  className="inline-flex h-8 w-8 items-center justify-center text-white transition-opacity duration-200 hover:opacity-70 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex(
                      (index) => (index + 1) % activeGallery.length,
                    )
                  }
                  className="inline-flex h-8 w-8 items-center justify-center text-white transition-opacity duration-200 hover:opacity-70 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            )}
            <div className="px-6 py-5">
              <div className="text-sm uppercase tracking-[0.2em]">
                {activeProject.name}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/70">
                {activeProject.year} · {activeProject.category} ·
                {activeProject.status}
              </div>
              {activeProject.location && (
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
                  {activeProject.location}
                </div>
              )}
              <a
                href={activeProject.linkUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] transition-colors duration-200 hover:text-white/60"
              >
                {activeProject.linkType === 'map' ? (
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                )}
                {activeProject.linkType === 'map' ? 'Maps' : 'Website'}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
