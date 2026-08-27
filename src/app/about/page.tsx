import Link from 'next/link';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-200 px-4 py-3 flex items-center">
        <Link href="/" className="mr-3 p-1 rounded-full hover:bg-slate-100 active:bg-slate-200 text-slate-700">
          <ChevronLeft className="h-7 w-7" />
          <span className="sr-only">Back</span>
        </Link>
        <h1 className="text-xl font-bold text-slate-900">About / Sources</h1>
      </header>

      <main className="flex-1 p-4 max-w-2xl mx-auto w-full pb-20 space-y-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-slate-700 leading-relaxed mb-4">
            This app is a <strong>personal quick-reference tool</strong> assembled for CSU exam supervisor work in Dubbo. It is designed to provide immediate answers during an exam.
          </p>
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-amber-900 text-sm font-medium">
            <p>This is NOT an official CSU publication. Always follow current CSU instructions, exam-specific materials, host directions, and emergency wardens where they differ.</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Information Sources</h2>
          <p className="text-sm text-slate-600 mb-4">The procedures in this app are paraphrased and compiled from the following sources:</p>
          
          <ul className="space-y-3">
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium">CSU exam-supervisor training, delivered 27 Aug 2026</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-slate-700">CSU On-Campus Supervisor Handbook</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-slate-700">CSU Assessment Policy</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-slate-700">CSU Assessment – Conduct of Coursework Assessment and Examinations Procedure</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-slate-700">CSU emergency and security guidance</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
