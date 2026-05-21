import { Compass } from 'lucide-react'

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/70">
          <Compass className="h-4 w-4" aria-hidden="true" />
          <span>About us</span>
        </div>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
          Parvarish Tex Product Pvt. Ltd.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-black/70">
          <i>"The Dune Swarnikaa represents the transition of Parvarish into the realm of Collectable Architecture. Having established a foundation in high quality 
          residential housing, this project represents our one of one magnum opus the result of giving an architect total creative liberty. Based in the historic 
          city of Jaipur, we are trying to bridge the gap between traditional real estate and high value asset curation. We recognize that for the modern HNI, a 
          home should be a Trophy an asset as rare and brag worthy as a limited edition supercar. Our focus is on delivering properties that stand out not just in the city, 
          but on a national scale. By prioritizing unique architectural DNA over mass market luxury, we provide our clients with a legacy asset that defines their status 
          and rewards their discernment."</i>
        </p>
      </div>
    </div>
  )
}
