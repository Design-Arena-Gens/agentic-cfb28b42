export type Skill = {
  nameAr: string
  descriptionAr: string
}

export type Character = {
  slug: string
  nameAr: string
  nameEn: string
  origin: string
  descriptionAr: string
  skills: Skill[]
  images: string[]
}
