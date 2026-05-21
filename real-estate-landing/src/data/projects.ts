import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project2Graphic from '../assets/project2_graphic.jpg'
import project3 from '../assets/project3.jpg'
import project5 from '../assets/project5.jpg'
import project5a from '../assets/project5a.jpeg'
import project5b from '../assets/project5b.jpeg'
import project6 from '../assets/project6.jpg'
import project6a from '../assets/project6a.jpeg'

export type ProjectCategory = 'Resedential' | 'Commercial'
export type ProjectLinkType = 'map' | 'website'

export type Project = {
  id: string
  name: string
  year: number
  category: ProjectCategory
  status: string
  location: string
  linkType: ProjectLinkType
  linkUrl: string
  image?: string
  images?: string[]
}

export const projects: Project[] = [
  {
    id: 'aarjav-villas',
    name: 'Aarjav',
    year: 2011,
    category: 'Resedential',
    status: '',
    location: 'Kanpur, Uttar Pradesh',
    linkType: 'map',
    linkUrl: 'https://maps.app.goo.gl/cTTVrZw7FWixWhZM7?g_st=am',
    image: project1,
  },
  {
    id: 'parvarish-bungalows',
    name: 'Parvarish Bungalows',
    year: 2016,
    category: 'Resedential',
    status: '',
    location: 'Kanpur, Uttar Pradesh',
    linkType: 'map',
    linkUrl: 'https://maps.app.goo.gl/M1opUreUCYvJNuFk7?g_st=aw',
    image: project2Graphic,
    images: [project2Graphic, project2],
  },
  {
    id: 'kailash-nilay-bungalows',
    name: 'Kailash Nilay',
    year: 2021,
    category: 'Resedential',
    status: '',
    location: 'Kanpur, Uttar Pradesh',
    linkType: 'map',
    linkUrl: 'https://maps.app.goo.gl/ba8vEbin8U5o1ZKs9?g_st=aw',
    image: project3,
  },
  {
    id: 'parvarish-chambers',
    name: 'Parvarish Chambers',
    year: 2024,
    category: 'Commercial',
    status: '',
    location: 'Jaipur, Rajasthan',
    linkType: 'map',
    linkUrl: 'https://goo.gl/maps/9rXmdzx2VDR7a7UC8?g_st=aw',
    image: project5b,
    images: [project5b, project5, project5a],
  },
  {
    id: 'sri-venkatesa-tower',
    name: 'Sri Venkatesa Tower',
    year: 2026,
    category: 'Commercial',
    status: 'Available',
    location: 'Jaipur, Rajasthan',
    linkType: 'map',
    linkUrl: 'https://maps.app.goo.gl/dBDitAoxntHLWKbK8?g_st=aw',
    image: project6,
    images: [project6, project6a],
  },
]
