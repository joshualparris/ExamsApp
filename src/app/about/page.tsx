import Link from 'next/link';
import { ChevronLeft, CheckCircle2, ExternalLink } from 'lucide-react';

const officialSources = [
  {
    name: 'Assessment – Conduct of Coursework Assessment and Examinations Procedure',
    href: 'https://policy.csu.edu.au/document/view-current.php?id=515',
  },
  {
    name: 'Assessment Flexibility Procedure',
    href: 'https://policy.csu.edu.au/document/view-current.php?id=514',
  },
  {
    name: 'Charles Sturt emergency guidance',
    href: 'https://www.csu.edu.au/emergency',
  },
  {
    name: 'Current Students – Exams',
    href: 'https://www.csu.edu.au/current-students/studying/assignments-and-exams/exams',
  },
  {
    name: 'Current Students – Technical exam help',
    href: 'https://www.csu.edu.au/current-students/studying/assignments-and-exams/exams/technical-help',
  },
  {
    name: 'Student Central',
    href: 'https://www.csu.edu.au/current-students/support/student-services/student-central',
  },
];

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
            This is a <strong>personal quick-reference tool</strong> for Charles Sturt exam-supervisor work. It is not an official University publication.
          </p>
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-amber-900 text-sm font-medium">
            <p>Always follow the current exam-specific instructions, approved alternative exam arrangements, Exams team/host directions and Emergency Wardens where they are more specific or have changed.</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Fact-check status</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Content was re-checked on 27 Aug 2026. Current CSU Policy Library documents and current CSU public webpages are treated as the highest-authority sources. The On-Campus Supervisor Handbook and supervisor training are used for operational detail. Where those sources do not fully agree or a local Dubbo process is not documented, the app says to confirm with the host/Exams team rather than guessing.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Official current sources</h2>
          <ul className="space-y-3">
            {officialSources.map(source => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noreferrer" className="flex gap-3 items-start text-blue-700 hover:underline">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="flex-1">{source.name}</span>
                  <ExternalLink className="h-4 w-4 shrink-0 mt-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Operational sources</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-slate-700">CSU On-Campus Supervisor Handbook supplied for supervisor work</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-slate-700">CSU exam-supervisor training notes, 27 Aug 2026</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
