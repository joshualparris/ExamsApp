export type Contact = {
  id: string;
  name: string;
  number: string;
  description: string;
  isEmergency?: boolean;
  status?: 'confirmed' | 'placeholder';
};

export const contacts: Contact[] = [
  {
    id: 'unable-delayed',
    name: 'Unable / delayed for shift',
    number: '02 6338 6222',
    description: 'Supervisor-training contact if you are delayed or unable to attend. CSU’s current technical-exam page also lists 6338 6222 for exam timetable issues.',
  },
  {
    id: 'emergency',
    name: 'Emergency — Police / Fire / Ambulance',
    number: '000',
    description: 'Call Triple Zero for police, fire brigade or ambulance assistance.',
    isEmergency: true,
  },
  {
    id: 'campus-security',
    name: 'CSU Campus Security',
    number: '1800 931 633',
    description: 'Charles Sturt Campus Security. For an emergency requiring police/fire/ambulance, call 000 and then notify Security as directed.',
    isEmergency: true,
  },
  {
    id: 'dubbo-exam-day',
    name: 'Dubbo Exam-Day Contact',
    number: 'TBA',
    description: 'Local Dubbo exam-day contact has not yet been confirmed in the material supplied for this app.',
    status: 'placeholder',
  },
  {
    id: 'exam-tech-support',
    name: 'Exams Hotline / Student Central',
    number: '1800 275 278',
    description: 'Exam support number from supervisor guidance. Charles Sturt’s current Student Central page lists 1800 275 278 as its Australian phone number.',
    status: 'confirmed',
  },
];
