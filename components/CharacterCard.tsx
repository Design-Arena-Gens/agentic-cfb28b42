import Link from 'next/link'
import Image from 'next/image'
import type { Character } from '@/types/character'

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <Link href={`/characters/${character.slug}`} className="card overflow-hidden group">
      <div className="relative aspect-[4/3]">
        <Image src={character.images[0]} alt={character.nameAr} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between">
          <h3 className="text-lg font-bold">{character.nameAr}</h3>
          <span className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10">{character.origin}</span>
        </div>
      </div>
      <div className="p-4 text-white/80 text-sm line-clamp-2 min-h-[3.5rem]">{character.descriptionAr}</div>
    </Link>
  )
}
