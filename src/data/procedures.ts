export type Procedure = {
  id: string;
  title: string;
  shortAnswer: string;
  keywords: string[];
  urgency?: 'normal' | 'warning' | 'emergency';
  steps: string[];
  notes?: string[];
  status?: 'confirmed' | 'confirm-with-host';
  sourceType?: ('Training' | 'CSU Handbook' | 'CSU Policy' | 'CSU Emergency Guidance')[];
};

export const procedures: Procedure[] = [
  {
    id: 'before-exam',
    title: 'Before Exam',
    shortAnswer: 'Arrive 30 mins early, find host, check room, check ID.',
    keywords: ['start', 'arrive', 'setup', 'ID', 'enter', 'room', 'prepare', 'begin'],
    urgency: 'normal',
    steps: [
      'Arrive 30 minutes before scheduled start.',
      'Find host/lead supervisor.',
      'Confirm room and exam.',
      'Locate exam papers/materials.',
      'Locate attendance/student sheets.',
      'Check room is ready.',
      'Lay out papers/materials as directed.',
      'Confirm seating arrangements.',
      'Identify any AA/AEA arrangements.',
      'Know nearest toilets.',
      'Know emergency exits / assembly arrangements.',
      'Let students in about 10 minutes before start.',
      'Preferred: check ID as students enter.',
      'Alternative: ID on desk and check before exam begins.',
      'Make sure student has correct exam.',
      'Make sure student uses allocated seat where applicable.',
      'Prevent communication between students.',
      'Check unauthorised materials.',
      'Mark attendance/student list as instructed.',
    ],
    notes: [
      'Host reads the prescribed exam announcement exactly as written.',
    ],
    sourceType: ['Training', 'CSU Handbook'],
  },
  {
    id: 'check-id',
    title: 'Student ID',
    shortAnswer: 'Check for valid photo ID. Do not accept Medicare alone.',
    keywords: ['id', 'identification', 'medicare', 'driver license', 'student card'],
    urgency: 'normal',
    steps: [
      'Preferred procedure: Check ID as students enter.',
      'Alternative: Check ID displayed on desk before exam starts.',
      'ACCEPT: CSU student ID OR current government-issued ID showing full name, photograph, and signature.',
      'NOT ACCEPTABLE: Medicare card alone.',
      'If ID is inadequate: Refer to host/lead supervisor. Do not improvise.'
    ],
    sourceType: ['Training'],
  },
  {
    id: 'student-late',
    title: 'Student Late',
    shortAnswer: 'No extra time for arriving late. Over 30 mins late = generally not admitted.',
    keywords: ['late', 'delayed', 'missed', 'time', 'extra time'],
    urgency: 'warning',
    steps: [
      'LESS THAN / UP TO 30 MINUTES LATE: Student gets NO extra finishing time. Follow host/exam admission procedure.',
      'MORE THAN 30 MINUTES LATE: Normally only permitted to sit where lateness was caused by a University error.',
      'If lateness resulted from exceptional circumstances outside their control: refer student to Special Consideration / deferred exam process, and involve host/Exams team.'
    ],
    notes: [
      'Never give extra exam time just because the student arrived late.'
    ],
    sourceType: ['CSU Handbook', 'Training'],
  },
  {
    id: 'toilet-break',
    title: 'Toilet Break',
    shortAnswer: 'Escort one student at a time. Do not enter bathroom.',
    keywords: ['toilet', 'bathroom', 'restroom', 'washroom', 'break'],
    urgency: 'normal',
    steps: [
      'One student at a time.',
      'Student must be supervised.',
      'Escort/supervise student.',
      'You do NOT enter the bathroom with them.',
      'Ensure another supervisor remains responsible for the exam room.',
      'A student who leaves unsupervised is not allowed to return.'
    ],
    sourceType: ['Training', 'CSU Handbook'],
  },
  {
    id: 'student-sick',
    title: 'Student Sick',
    shortAnswer: 'Take out of room. Determine if emergency. Student decides if they continue.',
    keywords: ['sick', 'ill', 'vomit', 'faint', 'medical', 'unwell', 'health'],
    urgency: 'warning',
    steps: [
      'Take the student out of the exam room.',
      'Determine whether this is an ordinary illness or an emergency.',
      'Student decides whether they wish to continue.',
      'If they do not continue, they may apply for Special Consideration.',
      'Record the incident as required (Incident report likely required).'
    ],
    notes: [
      'Ultimately, whether to continue is the student\'s decision.',
      'IF MEDICAL EMERGENCY: Call 000. Contact CSU Campus Security 1800 931 633. Follow first-aid/emergency directions.'
    ],
    sourceType: ['Training', 'CSU Handbook'],
  },
  {
    id: 'suspected-cheating',
    title: 'Suspected Misconduct',
    shortAnswer: 'Observe carefully. Retain material. Write incident report.',
    keywords: ['cheat', 'cheating', 'misconduct', 'phone', 'notes', 'unauthorised', 'smartwatch', 'copy'],
    urgency: 'warning',
    steps: [
      'Do not immediately create a confrontation.',
      'Move closer to the student.',
      'Observe carefully.',
      'Continue monitoring the rest of the room.',
      'If unauthorised material is involved: retain it after the exam where appropriate, OR make detailed notes/evidence about its use.',
      'Complete an Incident & Misconduct Report.',
      'Refer through CSU\'s misconduct process / host.'
    ],
    notes: [
      'Record facts. You are not deciding guilt.',
      'Incident report is required.'
    ],
    sourceType: ['Training', 'CSU Policy'],
  },
  {
    id: 'exam-question-problem',
    title: 'Exam Question Problem',
    shortAnswer: 'Do NOT explain the question. Tell them to note it and answer best they can.',
    keywords: ['question', 'error', 'mistake', 'typo', 'explain', 'understand', 'meaning'],
    urgency: 'normal',
    steps: [
      'Tell student to note their concern on the question paper.',
      'Tell them to answer to the best of their ability.',
      'Complete an Incident Report as required.'
    ],
    notes: [
      'DO NOT: explain the question, interpret it, suggest what it means, or suggest an answer.'
    ],
    sourceType: ['Training'],
  },
  {
    id: 'fire-evacuation',
    title: 'Fire / Evacuation',
    shortAnswer: 'Follow Warden. Do not delay for papers. Call 000 if you discover fire.',
    keywords: ['fire', 'evacuate', 'evacuation', 'alarm', 'smoke', 'emergency', 'safety'],
    urgency: 'emergency',
    steps: [
      'Stay calm.',
      'Follow Emergency Warden instructions.',
      'Follow EXIT signs.',
      'Do not use lifts.',
      'Proceed to the designated assembly area.',
      'Keep students together/supervised where practicable.',
      'Do not re-enter until authorised by the Chief/Building Warden.',
      'Safety takes priority over exam materials.',
      'Record the interruption once safe.',
      'Contact the Exams team/host once safe.'
    ],
    notes: [
      'If YOU discover fire/smoke: Raise/activate alarm, Call 000, Notify CSU Campus Security.',
      'PAPER EXAMS: do not delay evacuation to gather exam papers. Leave exam materials in place unless current wardens/Exam instructions tell you otherwise. Maintain supervision and exam security where practicable. Do not allow discussion of exam content.',
      'EXAM CONSEQUENCES: students do not individually need to lodge Special Consideration merely because the exam was stopped for safety. The academic response is determined by the appropriate CSU school/Subject Coordinator process.',
      'Current CSU documents do not clearly specify BYOD laptop handling during evacuation. Follow warden/host instructions and never delay evacuation for a device.'
    ],
    sourceType: ['CSU Emergency Guidance', 'Training'],
  },
  {
    id: 'byod-tech-problem',
    title: 'BYOD — Bring Your Own Device',
    shortAnswer: 'Basic help only. Do not neglect room to troubleshoot.',
    keywords: ['byod', 'laptop', 'computer', 'wifi', 'internet', 'tech', 'technical', 'crash', 'freeze'],
    urgency: 'normal',
    steps: [
      'Students bring their own computer. Use supplied student list. Allocated seating.',
      'Supervisor may provide basic technical help.',
      'Escalate larger problems to Exams/technical support.'
    ],
    notes: [
      'Do not become absorbed in troubleshooting while responsible for supervising the room.',
      'An online exam may have a nominated technology allowance of up to 30 minutes. This does NOT mean every technical problem automatically gets 30 extra minutes.',
      'For evacuation: BYOD laptop procedure is not yet confirmed. Follow current host/warden instructions. Never delay evacuation for a laptop.'
    ],
    status: 'confirm-with-host',
    sourceType: ['Training', 'CSU Handbook'],
  },
  {
    id: 'aea-accessibility',
    title: 'AEA / Accessibility',
    shortAnswer: 'Follow approved arrangement exactly. Do not interpret or improve.',
    keywords: ['aea', 'aa', 'accessibility', 'scribe', 'reader', 'rest break', 'extra time', 'disability'],
    urgency: 'normal',
    steps: [
      'Primary rule: Follow the student\'s approved arrangement exactly.',
      'SCRIBE: write exactly what student dictates. Do not improve or interpret answer. Only clarify/repeat enough to record words accurately.',
      'READER: read examination wording only. Do not explain, interpret, or use emphasis/tone to imply answers.',
      'REST BREAKS: follow approved timing. Student must stop working during approved rest break.',
      'EXTRA TIME: follow the student\'s approved arrangement exactly.'
    ],
    notes: [
      'Do not make your own accessibility adjustments.'
    ],
    sourceType: ['CSU Handbook'],
  },
  {
    id: 'finish-exam',
    title: 'Finish Exam',
    shortAnswer: 'Stop writing. Collect materials. Check desks.',
    keywords: ['finish', 'end', 'stop', 'complete', 'time up', 'papers', 'collect', '15 minutes'],
    urgency: 'normal',
    steps: [
      'Host gives prescribed 15-minute warning before end.',
      'Host announces exam is finished. STOP WRITING / PENS DOWN.',
      'Ensure everyone stops writing. Students remain seated.',
      'Collect all required exam materials.',
      'Check student names/numbers/details where required.',
      'Do not give extra time after finish just to complete identifying details.',
      'Release students according to host procedure.',
      'Check desks. Check under desks.',
      'Check toilets for unauthorised materials.',
      'POST-EXAM PAPERWORK: maintain security of completed scripts. Incident reports accompany paperwork where required. Attendance/student records handled according to venue instructions. Hand completed materials to host/Dubbo exam contact as instructed.'
    ],
    notes: [
      'Exact Dubbo post-exam script handover procedure is still to be confirmed.'
    ],
    status: 'confirm-with-host',
    sourceType: ['Training'],
  },
  {
    id: 'incident-report',
    title: 'Incident Report',
    shortAnswer: 'Write factual notes. Do not invent electronic forms.',
    keywords: ['incident', 'report', 'form', 'irregular', 'disruption'],
    urgency: 'normal',
    steps: [
      'Use when: suspected cheating, unauthorised material, issue with exam paper/question, disruption at venue, student illness where relevant, interruption, anything irregular.',
      'Write clear factual notes: what happened, when, what you observed, what action was taken.'
    ],
    notes: [
      'Do not invent an electronic report form.'
    ],
    sourceType: ['Training', 'CSU Handbook'],
  },
  {
    id: 'attendance',
    title: 'Attendance',
    shortAnswer: 'Follow the attendance/register sheet supplied at the venue.',
    keywords: ['attendance', 'roll', 'register', 'slip', 'mark off'],
    urgency: 'normal',
    steps: [
      'In-person exam sheets are supplied at the venue.',
      'For BYOD: student list is used to mark students off, students sit in allocated seats.',
      'For other in-person exams: follow the attendance/register sheet supplied at the venue.'
    ],
    notes: [
      'Do not resurrect obsolete CSU attendance-slip procedures unless the supplied 2026 forms specifically require them.'
    ],
    status: 'confirm-with-host',
    sourceType: ['Training'],
  },
  {
    id: 'staffing',
    title: 'Staffing Levels',
    shortAnswer: '2 supervisors for up to 15 students. Approx 1 per 20 for larger rooms.',
    keywords: ['staffing', 'ratio', 'number', 'supervisors', 'roster'],
    urgency: 'normal',
    steps: [
      'Up to 15 students: 2 supervisors.',
      'Larger rooms: approximately 1 supervisor per 20 students.'
    ],
    notes: [
      'Follow actual Exams team roster/host instruction. Do not try to automatically calculate staffing as an authoritative rule.'
    ],
    status: 'confirm-with-host',
    sourceType: ['Training'],
  },
  {
    id: 'subject-coordinator',
    title: 'Subject Coordinator',
    shortAnswer: 'Should NOT be in exam room. Notify Exams team if they enter.',
    keywords: ['coordinator', 'subject', 'teacher', 'lecturer', 'visit'],
    urgency: 'warning',
    steps: [
      'Subject Coordinators generally should NOT be in the exam room.',
      'If a Subject Coordinator enters/visits: notify the Exams team. Do not allow them to informally answer students\' exam questions.',
      'Formal CSU restrictions limit who may enter an exam room during an examination.'
    ],
    sourceType: ['Training'],
  },
  {
    id: 'open-closed-book',
    title: 'Open / Closed Book',
    shortAnswer: 'Check front of exam instructions.',
    keywords: ['open book', 'closed book', 'permitted', 'materials', 'notes', 'textbook'],
    urgency: 'normal',
    steps: [
      'The front of the specific examination / exam instructions determine permitted materials.',
      'Do not make assumptions.'
    ],
    notes: [
      'Training notes: open-book and closed-book exams exist. Closed-book online exams are reportedly very rare.'
    ],
    sourceType: ['Training'],
  },
  {
    id: 'general-behaviour',
    title: 'General Behaviour',
    shortAnswer: 'Calm environment, circulate, stay vigilant.',
    keywords: ['behaviour', 'conduct', 'knitting', 'crossword', 'vape', 'smoking', 'drink', 'bottle'],
    urgency: 'normal',
    steps: [
      'Maintain calm, quiet environment.',
      'Circulate around room. Stay vigilant. Don\'t sit in one place for whole exam.',
      'Don\'t do distracting activities such as knitting/crosswords.',
      'Monitor for communication and unauthorised materials.',
      'Remain approachable without giving academic assistance.',
      'No vaping or smoking.',
      'Clear drink bottles only.'
    ],
    notes: [
      'For permitted materials: Always follow the instructions for the specific exam. Do NOT assume "1 clear notebook" is universally permitted.'
    ],
    sourceType: ['Training'],
  }
];
