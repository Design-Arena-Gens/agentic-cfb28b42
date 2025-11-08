import Link from 'next/link'
import Image from 'next/image'
import { getAllCharacters } from '@/data/characters'
import CharacterCard from '@/components/CharacterCard'
import { Suspense } from 'react'

export default function HomePage() {
  const characters = getAllCharacters()

  return (
    <div className="space-y-10">
      <header className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold">???? ????????? ????? ????? ??????</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          ?????? ???? ???????? ????? ??? ???? ???? ????????? ?? ??? ?????.
        </p>
      </header>

      <SearchableGrid />

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {characters.map((c) => (
          <CharacterCard key={c.slug} character={c} />
        ))}
      </section>
    </div>
  )
}

function SearchableGrid() {
  // client behavior not required; keep layout consistent and fast
  return (
    <div className="card p-4 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
      <div className="text-lg font-semibold">????????</div>
      <div className="text-sm text-white/60">???? ??? ?? ????? ???? ????????</div>
    </div>
  )
}
