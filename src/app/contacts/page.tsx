import Link from 'next/link';
import { ChevronLeft, Phone, AlertCircle } from 'lucide-react';
import { contacts } from '@/data/contacts';

export default function ContactsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-200 px-4 py-3 flex items-center">
        <Link href="/" className="mr-3 p-1 rounded-full hover:bg-slate-100 active:bg-slate-200 text-slate-700">
          <ChevronLeft className="h-7 w-7" />
          <span className="sr-only">Back</span>
        </Link>
        <h1 className="text-xl font-bold text-slate-900">Key Contacts</h1>
      </header>

      <main className="flex-1 p-4 max-w-2xl mx-auto w-full pb-20 space-y-4">
        {contacts.map(contact => {
          const isPhoneAvailable = contact.number !== 'TBA';
          const href = isPhoneAvailable ? `tel:${contact.number.replace(/\s/g, '')}` : '#';
          
          return (
            <div key={contact.id} className={`p-4 rounded-xl border shadow-sm bg-white ${contact.isEmergency ? 'border-red-200' : 'border-slate-200'}`}>
              <div className="mb-3">
                <h2 className="text-sm uppercase tracking-wider font-bold text-slate-500 mb-1">{contact.name}</h2>
                <p className={`text-2xl font-bold ${contact.isEmergency ? 'text-red-700' : 'text-slate-900'}`}>
                  {contact.number}
                </p>
                <p className="text-sm text-slate-600 mt-2">{contact.description}</p>
                
                {contact.status === 'placeholder' && (
                  <div className="mt-3 flex items-start gap-1.5 text-amber-700 text-xs font-medium bg-amber-50 p-2 rounded">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>Configurable placeholder — awaiting confirmation from CSU.</span>
                  </div>
                )}
              </div>
              
              {isPhoneAvailable && (
                <a 
                  href={href}
                  className={`mt-4 flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg font-bold text-white transition-transform active:scale-[0.98] ${
                    contact.isEmergency ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  <Phone className="h-5 w-5" />
                  CALL
                </a>
              )}
            </div>
          );
        })}
      </main>
    </div>
  );
}
