import type { DocketData } from '@/types/docket'
import president from './president'
import vicePresident from './vicePresident'
import secretary from './secretary'
import treasury from './treasury'
import proCmo from './proCmo'
import gst from './gst'
import glt from './glt'
import gmt from './gmt'
import get from './get'

const docketMap: Record<string, DocketData> = {
  president,
  'vice-president': vicePresident,
  secretary,
  treasury,
  'pro-cmo': proCmo,
  gst,
  glt,
  gmt,
  get
}

export const docketList = Object.values(docketMap)
export default docketMap
