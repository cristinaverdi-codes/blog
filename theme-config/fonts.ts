import { Permanent_Marker, Poppins } from 'next/font/google'

export const permanenetMarker = Permanent_Marker( {
  weight: '400',
  preload: true,
  subsets: ['latin'],
  variable: '--permanent-marker'
} )
export const poppins = Poppins( {
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  preload: true,
  subsets: ['latin'],
  variable: '--poppins'
} )