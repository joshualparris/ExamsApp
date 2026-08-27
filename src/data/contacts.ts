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
    description: 'Call if you are running late or cannot make your shift.',
  },
  {
    id: 'emergency',
    name: 'Emergency',
    number: '000',
    description: 'Life-threatening emergency, fire, or medical emergency.',
    isEmergency: true,
  },
  {
    id: 'campus-security',
    name: 'CSU Campus Security',
    number: '1800 931 633',
    description: 'Campus security for non-000 incidents or after calling 000.',
    isEmergency: true,
  },
  {
    id: 'dubbo-exam-day',
    name: 'Dubbo Exam-Day Contact',
    number: 'TBA',
    description: 'Still being arranged by CSU — update this when supplied.',
    status: 'placeholder',
  },
  {
    id: 'exam-tech-support',
    name: 'Exams/Technical Hotline',
    number: 'TBA',
    description: 'Use number supplied by Exams team.',
    status: 'placeholder',
  },
];
