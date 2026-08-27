import Link from 'next/link';
import { ChevronLeft, Phone } from 'lucide-react';
import { procedures } from '@/data/procedures';

export default function EmergencyPage() {
  const evacProcedure = procedures.find(p => p.id === 'fire-evacuation');

  return (
    <div className="flex flex-col min-h-screen bg-red-50">
      <header className="sticky top-0 z-10 bg-red-600 px-4 py-3 flex items-center shadow-md">
        <Link href="/" className="mr-3 p-1 rounded-full hover:bg-red-700 active:bg-red-800 text-white transition-colors">
          <ChevronLeft className="h-7 w-7" />
          <span className="sr-only">Back</span>
        </Link>
        <h1 className="text-xl font-bold text-white uppercase tracking-wide">Emergency Actions</h1>
      </header>

      <main className="flex-1 p-4 max-w-2xl mx-auto w-full pb-20 space-y-6">
        <section className="bg-white p-5 rounded-xl border-l-4 border-red-600 shadow-sm">
          <h2 className="text-red-700 font-bold text-sm uppercase tracking-wider mb-1">Life-Threatening Emergency</h2>
          <p className="text-3xl font-black text-slate-900 mb-4">Call 000</p>
          <a href="tel:000" className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-sm active:scale-[0.98] transition-all">
            <Phone className="h-6 w-6" />
            CALL 000
          </a>
        </section>

        <section className="bg-white p-5 rounded-xl border-l-4 border-amber-500 shadow-sm">
          <h2 className="text-amber-700 font-bold text-sm uppercase tracking-wider mb-1">CSU Campus Security</h2>
          <p className="text-2xl font-bold text-slate-900 mb-4">1800 931 633</p>
          <a href="tel:1800931633" className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-sm active:scale-[0.98] transition-all">
            <Phone className="h-6 w-6" />
            CALL SECURITY
          </a>
        </section>

        {evacProcedure && (
          <section className="bg-white p-5 rounded-xl shadow-sm mt-8 border border-slate-200">
            <h2 className="font-bold text-xl mb-4 text-slate-800">FIRE / EVACUATION</h2>
            <ul className="space-y-3 mb-6">
              {evacProcedure.steps.map((step, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 items-start">
                  <span className="font-bold text-red-500 min-w-[1.2rem]">{idx + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-slate-100 p-4 rounded-lg mb-6 text-sm text-slate-700 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">If YOU discover fire/smoke:</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Raise/activate alarm.</li>
                <li>Call 000.</li>
                <li>Notify CSU Campus Security.</li>
                <li>Evacuate according to warden instructions.</li>
              </ol>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-sm">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                EXAM CONSEQUENCES
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-amber-800">
                <li>Students do not individually need to lodge Special Consideration merely because the exam was stopped for safety.</li>
                <li>The academic response is determined by the appropriate CSU school/Subject Coordinator process.</li>
                <li>Possible outcomes can include marking completed work, deferred examination or replacement assessment.</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-sm mt-4">
              <h3 className="font-bold text-blue-900 mb-2">PAPER EXAMS DURING EVACUATION</h3>
              <ul className="list-disc pl-5 space-y-1 text-blue-800">
                <li>Do not delay evacuation to gather exam papers.</li>
                <li>Leave exam materials in place unless current wardens/Exam instructions tell you otherwise.</li>
                <li>Maintain supervision and exam security where practicable.</li>
                <li>Do not allow discussion of exam content.</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-sm mt-4 font-medium text-red-800 flex gap-2 items-start">
              <span className="text-xl">⚠️</span>
              <p>Current CSU documents do not clearly specify BYOD laptop handling during evacuation. Follow warden/host instructions and never delay evacuation for a device.</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
