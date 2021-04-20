import Point3 from './Point3'
import Metadata from './Metadata'

interface IVolume {
  uid: string
  metadata: Metadata
  dimensions: Point3
  spacing: Array<number>
  origin: Array<number>
  direction: Array<number>
  scalarData: Float32Array | Uint8Array
  vtkImageData?: Record<string, unknown>
  scaling?: any
  sizeInBytes?: number
}

export default IVolume