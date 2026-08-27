import { procedures } from '@/data/procedures';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, CheckCircle2, AlertCircle } from 'lucide-react';

export function generateStaticParams() {
  return procedures.map((p) => ({
    id: p.id,
  }));
}

export default async function ProcedurePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const procedure = procedures.find((p) => p.id === id);
  
  if (!procedure) {
    notFound();
  }

  const isEmergency = procedure.urgency === 'emergency';
  const isWarning = procedure.urgency === 'warning';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-200 px-4 py-3 flex items-center">
        <Link href="/" className="mr-3 p-1 rounded-full hover:bg-slate-100 active:bg-slate-200 text-blue-700">
          <ChevronLeft className="h-7 w-7" />
          <span className="sr-only">Back</span>
        </Link>
        <h1 className="text-xl font-bold text-slate-900 truncate pr-4">{procedure.title}</h1>
      </header>

      <main className="flex-1 p-4 max-w-2xl mx-auto w-full pb-20">
        <div className={`p-4 rounded-xl mb-6 shadow-sm border ${
          isEmergency ? 'bg-red-50 border-red-200 text-red-900' :
          isWarning ? 'bg-amber-50 border-amber-200 text-amber-900' :
          'bg-blue-50 border-blue-200 text-blue-900'
        }`}>
          <p className="text-lg font-medium leading-snug">{procedure.shortAnswer}</p>
        </div>

        {procedure.status === 'confirm-with-host' && (
          <div className="flex items-start gap-2 bg-amber-100/50 border border-amber-300 text-amber-800 p-3 rounded-lg mb-6 text-sm font-medium">
            <AlertCircle className="h-5 w-5 shrink-0 text-amber-600" />
            <p>Confirm with host / Exams team. Exact procedure still awaiting confirmation.</p>
          </div>
        )}

        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wider font-bold text-slate-500 mb-4">Detailed Steps</h2>
          <ul className="space-y-3">
            {procedure.steps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-slate-400" />
                </div>
                <span className="text-slate-800 text-base leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </section>

        {procedure.notes && procedure.notes.length > 0 && (
          <section className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
            <h2 className="text-sm uppercase tracking-wider font-bold text-slate-500 mb-3">Important Notes</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              {procedure.notes.map((note, idx) => (
                <li key={idx} className="pl-1 leading-relaxed">{note}</li>
              ))}
            </ul>
          </section>
        )}

        {procedure.sourceType && procedure.sourceType.length > 0 && (
          <section className="mt-8 pt-6 border-t border-slate-100">
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">Sources</h2>
            <div className="flex flex-wrap gap-2">
              {procedure.sourceType.map((source, idx) => (
                <span key={idx} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
                  {source}
                </span>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
