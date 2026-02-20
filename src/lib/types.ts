export type ContentType = 'project' | 'writing' | 'experiment'

export type LayoutType = 'hero' | 'wide' | 'square' | 'feature'

export type CanvasItem = {
  id: string
  slug: string
  title: string
  excerpt?: string
  image?: string
  type: ContentType
  layout: LayoutType
  visible: boolean
  order: number
}
