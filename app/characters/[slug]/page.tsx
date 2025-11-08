import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getCharacterBySlug, getAllCharacters } from '@/data/characters'
import SkillPill from '@/components/SkillPill'

interface Params { slug: string }

export function generateStaticParams() {
  return getAllCharacters().map((c) => ({ slug: c.slug }))
}

export default function CharacterPage({ params }: { params: Params }) {
  const character = getCharacterBySlug(params.slug)
  if (!character) return notFound()

  return (
    <article className="space-y-8">
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">{character.nameAr}</h1>
        <Link href="/" className="text-sm text-white/70 hover:text-white">????</Link>
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="card overflow-hidden">
          <div className="relative aspect-[4/3]">
            <Image src={character.images[0]} alt={character.nameAr} fill className="object-cover"/>
          </div>
        </div>
        <div className="space-y-4">
          <div className="card p-5 space-y-2">
            <h2 className="text-xl font-semibold">???? ?? ???????</h2>
            <p className="text-white/80 leading-8">{character.descriptionAr}</p>
          </div>

          <div className="card p-5 space-y-3">
            <h2 className="text-xl font-semibold">????????</h2>
            <div className="flex flex-wrap gap-2">
              {character.skills.map((s) => (
                <SkillPill key={s.nameAr} name={s.nameAr} description={s.descriptionAr} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {character.images.length > 1 && (
        <section className="space-y-3">
          <h3 className="text-lg font-semibold">???? ?????</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {character.images.slice(1).map((src, i) => (
              <div key={i} className="card overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={src} alt={`${character.nameAr} ${i+1}`} fill className="object-cover"/>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
