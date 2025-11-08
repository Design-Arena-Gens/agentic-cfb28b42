import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold">????? ?????? - ???? ?????????</Link>
        <nav className="text-sm text-white/70 flex items-center gap-4">
          <Link href="/" className="hover:text-white">????????</Link>
          <a href="https://supercell.com/en/fankit/" target="_blank" rel="noreferrer" className="hover:text-white">Supercell Fankit</a>
        </nav>
      </div>
    </header>
  )
}
