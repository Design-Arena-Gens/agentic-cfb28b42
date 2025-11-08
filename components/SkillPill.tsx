"use client"
import { useState } from 'react'

export default function SkillPill({ name, description }: { name: string; description: string }) {
  const [open, setOpen] = useState(false)
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="px-3 py-1 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm"
      title={description}
    >
      {name}
    </button>
  )
}
