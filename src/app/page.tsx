"use client";

import { useState } from 'react';
import Link from 'next/link';
import { procedures } from '@/data/procedures';
import SearchBox from '@/components/SearchBox';
import { AlertTriangle, ChevronRight, Phone, Info } from 'lucide-react';
import { searchProcedures } from '@/utils/search';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProcedures = searchProcedures(searchQuery);

  return (
    <main className="p-4 max-w-2xl mx-auto w-full">
      <header className="mb-6 text-center mt-4">
        <h1 className="text-2xl font-bold text-slate-900 leading-tight">CSU Exam Supervisor</h1>
        <p className="text-slate-600 font-medium">Dubbo Quick Reference</p>
      </header>

      <SearchBox onSearch={setSearchQuery} />

      {!searchQuery && (
        <div className="mb-6">
          <Link href="/emergency" className="block w-full bg-red-600 hover:bg-red-700 text-white p-4 rounded-xl shadow-sm border border-red-700 flex items-center justify-between active:scale-[0.98] transition-transform">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-7 w-7" />
              <span className="text-xl font-bold tracking-wide">EMERGENCY</span>
            </div>
            <ChevronRight className="h-6 w-6 opacity-80" />
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {filteredProcedures.map(proc => (
          <Link 
            key={proc.id} 
            href={`/procedure/${proc.id}`}
            className="block w-full bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:border-blue-400 hover:shadow active:scale-[0.99] transition-all flex items-center justify-between min-h-[4.5rem]"
          >
            <div>
              <h2 className="text-lg font-semibold text-slate-800">{proc.title}</h2>
              {searchQuery && (
                <p className="text-sm text-slate-500 line-clamp-1 mt-0.5">{proc.shortAnswer}</p>
              )}
            </div>
            <ChevronRight className="h-5 w-5 text-slate-400 shrink-0" />
          </Link>
        ))}
      </div>

      {filteredProcedures.length === 0 && (
        <div className="text-center py-10 text-slate-500">
          No procedures found for "{searchQuery}".
        </div>
      )}

      {!searchQuery && (
        <div className="mt-8 grid grid-cols-2 gap-3">
          <Link href="/contacts" className="bg-slate-800 text-white p-4 rounded-xl shadow-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform font-medium">
            <Phone className="h-5 w-5" />
            Contacts
          </Link>
          <Link href="/about" className="bg-slate-200 text-slate-800 p-4 rounded-xl shadow-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform font-medium">
            <Info className="h-5 w-5" />
            About
          </Link>
        </div>
      )}

      <footer className="mt-12 text-center text-xs text-slate-500 pb-8 space-y-2">
        <p>Training/reference updated: 27 Aug 2026</p>
        <p className="max-w-xs mx-auto">Quick reference only — follow current CSU instructions, exam-specific materials, host directions and emergency wardens where they differ.</p>
      </footer>
    </main>
  );
}
