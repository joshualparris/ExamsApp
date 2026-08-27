export type Procedure = {
  id: string;
  title: string;
  shortAnswer: string;
  keywords: string[];
  urgency?: 'normal' | 'warning' | 'emergency';
  steps: string[];
  notes?: string[];
  status?: 'confirmed' | 'confirm-with-host';
  sourceType?: (
    | 'Training'
    | 'CSU Handbook'
    | 'CSU Conduct Procedure'
    | 'CSU Assessment Flexibility'
    | 'CSU Emergency Guidance'
    | 'CSU Current Students'
  )[];
};

export const procedures: Procedure[] = [
  {
    id: 'before-exam',
    title: 'Before Exam',
    shortAnswer: 'Arrive 30 minutes early, prepare the venue, admit students about 10 minutes early, and verify ID before the exam starts.',
    keywords: ['start', 'arrive', 'setup', 'id', 'enter', 'room', 'prepare', 'begin', 'announcement'],
    urgency: 'normal',
    steps: [
      'Arrive 30 minutes before the scheduled start.',
      'Make sure the venue is ready and lay out the correct exam papers and permitted materials as directed.',
      'Find the host/lead supervisor and confirm the exam, room and any approved alternative exam arrangements.',
      'Let students into the room about 10 minutes before the start.',
      'Check that each student has the correct exam and is not communicating with other students.',
      'Check for unauthorised materials and follow the exam-specific instructions about permitted materials.',
      'Verify each student’s identity before the exam starts.',
      'Use the student/attendance sheet supplied at the venue as instructed.',
      'Before the official start instruction, students must not begin writing. Once the prescribed start announcement is given, the 10-minute reading time begins and students may write during that reading time.'
    ],
    notes: [
      'The lead/host should use the current prescribed announcement supplied for the sitting; do not improvise the wording.',
      'Exam-specific instructions and current Exams team directions take precedence where they are more specific.'
    ],
    sourceType: ['Training', 'CSU Handbook', 'CSU Conduct Procedure'],
  },
  {
    id: 'check-id',
    title: 'Student ID',
    shortAnswer: 'Accept a Charles Sturt student ID or current government ID showing full name in English, photograph and signature.',
    keywords: ['id', 'identification', 'medicare', 'driver licence', 'driver license', 'passport', 'student card'],
    urgency: 'normal',
    steps: [
      'Verify identity before the exam starts.',
      'Accept a Charles Sturt University student ID card.',
      'Alternatively, accept a currently valid government-issued ID showing the student’s full name written in English, photograph and signature.',
      'A Medicare card alone does not satisfy the current policy requirements because it does not provide the required photograph and signature.',
      'If satisfactory identification is not provided, refer to the lead/host. Current CSU procedure permits an exam supervisor to instruct the person to leave the exam venue.'
    ],
    notes: [
      'Supervisor training recommends checking ID as students enter; checking displayed ID before the exam starts is also used operationally.'
    ],
    sourceType: ['CSU Conduct Procedure', 'CSU Handbook', 'Training'],
  },
  {
    id: 'student-late',
    title: 'Student Late',
    shortAnswer: 'No extra finishing time. More than 30 minutes late is permitted only when the lateness was caused by a University error.',
    keywords: ['late', 'delayed', 'missed', 'time', 'extra time', '30 minutes', 'half hour'],
    urgency: 'warning',
    steps: [
      'A late student is not given extra time to finish the exam.',
      'A student arriving more than 30 minutes late may sit the exam only where the lateness was caused by an error on the part of the University.',
      'If other exceptional circumstances outside the student’s control caused the lateness, they must apply for special consideration to sit a deferred exam.',
      'Follow the lead supervisor/Exams team admission process for the sitting.'
    ],
    notes: [
      'Do not extend the scheduled finishing time merely because a student arrived late.'
    ],
    sourceType: ['CSU Conduct Procedure', 'CSU Handbook'],
  },
  {
    id: 'toilet-break',
    title: 'Toilet Break',
    shortAnswer: 'One student at a time. Keep the student supervised; do not enter the bathroom with them.',
    keywords: ['toilet', 'bathroom', 'restroom', 'washroom', 'break', 'leave room', 'return'],
    urgency: 'normal',
    steps: [
      'Allow only one student at a time to go to the bathroom.',
      'The student must be supervised while away from the exam room.',
      'Escort/supervise the student but do not enter the bathroom with them.',
      'Ensure the exam room remains supervised while you are assisting the student.',
      'A student who leaves the exam unsupervised is not allowed to return.'
    ],
    sourceType: ['CSU Handbook', 'Training'],
  },
  {
    id: 'student-sick',
    title: 'Student Sick',
    shortAnswer: 'Take the student out under supervision, assess whether it is an emergency, and let the student decide whether to continue.',
    keywords: ['sick', 'ill', 'vomit', 'faint', 'medical', 'unwell', 'health', 'special consideration', 'deferred'],
    urgency: 'warning',
    steps: [
      'Take the unwell student out of the exam room under supervision and determine whether urgent medical help is needed.',
      'The student decides whether they are well enough to continue. Follow the lead/host instructions about any return to the room.',
      'Complete an Incident & Misconduct Report for the illness/irregularity.',
      'If the student begins the exam but leaves early because of illness or other adverse circumstances, they must apply for special consideration to be granted a deferred exam.',
      'Current CSU student guidance also says a student who becomes unable to complete an exam should contact their Subject Coordinator immediately.'
    ],
    notes: [
      'If the student completes the exam without leaving early, current Assessment Flexibility rules treat them as having decided they were fit to sit for the purpose of a deferred-exam application.',
      'For a medical emergency: call 000 for an ambulance, call Campus Security on 1800 931 633, and involve a Charles Sturt First Aid Officer where available.'
    ],
    sourceType: ['Training', 'CSU Handbook', 'CSU Assessment Flexibility', 'CSU Emergency Guidance', 'CSU Current Students'],
  },
  {
    id: 'suspected-cheating',
    title: 'Suspected Misconduct',
    shortAnswer: 'Observe, prevent further access to unauthorised material, preserve evidence, complete the report and refer the matter — do not decide guilt.',
    keywords: ['cheat', 'cheating', 'misconduct', 'phone', 'notes', 'unauthorised', 'smartwatch', 'copy', 'evidence'],
    urgency: 'warning',
    steps: [
      'If behaviour is suspicious, move closer and observe carefully while continuing to supervise the room.',
      'If unauthorised material is identified, remove the student’s access to it in accordance with the handbook/current sitting instructions.',
      'Current CSU procedure requires either retaining the material after an in-person exam or making detailed notes about its use, including evidence where relevant.',
      'Complete an Incident & Misconduct Report where an incident/suspected misconduct has occurred.',
      'Refer the matter for investigation under the University misconduct process.'
    ],
    notes: [
      'Record factual observations and actions. The supervisor does not decide whether the student is guilty of misconduct.'
    ],
    sourceType: ['CSU Conduct Procedure', 'CSU Handbook', 'Training'],
  },
  {
    id: 'exam-question-problem',
    title: 'Exam Question Problem',
    shortAnswer: 'Do not interpret the question. Have the student note the concern and answer to the best of their ability.',
    keywords: ['question', 'error', 'mistake', 'typo', 'explain', 'understand', 'meaning', 'paper issue'],
    urgency: 'normal',
    steps: [
      'Do not explain, interpret or suggest an answer to an exam question.',
      'Advise the student to note their concern on the question paper and answer the question to the best of their ability.',
      'Complete an Incident Report for the issue as required.',
      'The handbook directs that an Incident Report about an exam-paper/question issue is returned with the examination paper.'
    ],
    notes: [
      'A genuine issue with a question can be taken into account through the marking process; the supervisor should not try to correct or interpret the question during the sitting.'
    ],
    sourceType: ['CSU Handbook', 'Training'],
  },
  {
    id: 'fire-evacuation',
    title: 'Fire / Evacuation',
    shortAnswer: 'Follow Emergency Wardens, use EXIT routes and stairs, go to the assembly area, and do not re-enter until cleared.',
    keywords: ['fire', 'evacuate', 'evacuation', 'alarm', 'smoke', 'emergency', 'safety', 'warden'],
    urgency: 'emergency',
    steps: [
      'Remain calm and follow Emergency Warden instructions.',
      'Follow EXIT signs and use the stairs. Never use an elevator during evacuation.',
      'If a route is unsafe because of smoke, flames or blockage, use the nearest safe exit route.',
      'Proceed to the Evacuation Assembly Area after leaving the building.',
      'Do not re-enter until the Chief Warden or Building Warden declares it safe.',
      'Once safe, record the exam interruption and contact the Exams team/host as required.'
    ],
    notes: [
      'If you become aware of fire or smoke: activate the fire alarm, call 000 and request the Fire Brigade, then call Campus Security on 1800 931 633 to notify them of the 000 call.',
      'Current public CSU documents do not specify whether paper exam materials or BYOD laptops should be taken during an evacuation. Follow Warden and current Exams/host instructions; evacuation and safety directions take priority.',
      'If an exam is cancelled or ended early for safety reasons, individual students do not submit special consideration just because the exam was stopped. The Head of the teaching school decides the academic response on the Subject Coordinator’s recommendation.'
    ],
    sourceType: ['CSU Emergency Guidance', 'CSU Conduct Procedure'],
  },
  {
    id: 'byod-tech-problem',
    title: 'BYOD — Bring Your Own Device',
    shortAnswer: 'Give only basic help, keep supervising the room, and use the technology allowance shown for that exam — never invent extra time.',
    keywords: ['byod', 'laptop', 'computer', 'wifi', 'internet', 'tech', 'technical', 'crash', 'freeze', 'allowance', 'hotline'],
    urgency: 'normal',
    steps: [
      'For BYOD sittings, follow the supplied student list and allocated seating instructions from the Exams team.',
      'Provide only basic technical assistance while maintaining supervision of the room.',
      'For larger problems, escalate to Exams/technical support. The Exams Hotline / Student Central number is 1800 275 278.',
      'Do not add an arbitrary amount of extra time. Use the technology allowance displayed for the exam/student.',
      'Current CSU procedure allows the Subject Coordinator to nominate a technology allowance of no more than 30 minutes for an online exam.'
    ],
    notes: [
      'Current CSU student guidance says technology allowances are shown on the exam timetable; its technical-help page says students have at least a 15-minute allowance for issues such as restarting a frozen computer.',
      'Current public CSU documents do not specify BYOD laptop handling during evacuation. Follow Warden and current Exams/host instructions.'
    ],
    status: 'confirm-with-host',
    sourceType: ['Training', 'CSU Conduct Procedure', 'CSU Current Students'],
  },
  {
    id: 'aea-accessibility',
    title: 'AEA / Accessibility',
    shortAnswer: 'Use the approved alternative exam arrangement / Study Access Plan exactly; do not create your own adjustment.',
    keywords: ['aea', 'aa', 'accessibility', 'study access plan', 'sap', 'scribe', 'reader', 'rest break', 'extra time', 'disability', 'readspeaker'],
    urgency: 'normal',
    steps: [
      'For centrally administered final exams, approved alternative exam arrangements are published on the student’s exam timetable.',
      'Provide the student with the approved arrangement exactly as specified. Do not make your own adjustment.',
      'Current Assessment Flexibility procedure says a student granted an alternative exam arrangement must be given the opportunity to choose either standard conditions or the alternative arrangement they were granted.',
      'SCRIBE: write exactly what the student dictates; do not interpret or improve the answer.',
      'READER: read the examination wording without interpreting it or using emphasis that could suggest an answer.',
      'REST BREAKS: ensure approved rest breaks are taken; the student must not continue working during a rest break.',
      'EXTRA TIME: apply only the approved extra time/conditions shown for that student.'
    ],
    notes: [
      'Study Access Plans are developed through Accessibility and Inclusion Support and may specify alternative exam arrangements.',
      'Supervisor training/Brightspace guidance: ReadSpeaker is only for students with the relevant approved arrangement and only in the permitted room/headset setup.'
    ],
    sourceType: ['CSU Assessment Flexibility', 'CSU Handbook', 'Training'],
  },
  {
    id: 'reading-time',
    title: 'Reading Time',
    shortAnswer: 'There is normally 10 minutes reading time, and students may write during it once the official exam start has been announced.',
    keywords: ['reading', 'reading time', 'write', 'writing', '10 minutes', 'start announcement'],
    urgency: 'normal',
    steps: [
      'Before the exam starts, students are given 10 minutes reading time unless a longer period has been formally approved for professional accreditation.',
      'Students may begin writing during the reading time if they wish.',
      'The handbook’s start announcement makes clear that the exam has begun and that the first 10 minutes are reading time.',
      'Before the official start instruction is given, students must not begin writing.'
    ],
    sourceType: ['CSU Conduct Procedure', 'CSU Handbook'],
  },
  {
    id: 'finish-exam',
    title: 'Finish Exam',
    shortAnswer: 'Give the prescribed 15-minute warning, stop all writing at time, collect materials and check names/student numbers.',
    keywords: ['finish', 'end', 'stop', 'complete', 'time up', 'papers', 'collect', '15 minutes'],
    urgency: 'normal',
    steps: [
      'Give/read the prescribed 15-minute warning at the appropriate time.',
      'At the scheduled finish, give/read the prescribed stop-writing instruction and ensure all students stop writing.',
      'Keep students seated while required exam materials are collected.',
      'Ensure students have their name and student number on all required examination materials.',
      'Do not give extra time at the end for students to complete names/student numbers or cover details.',
      'Check toilets and under desks for unauthorised materials left behind.',
      'Keep completed scripts and paperwork secure and hand them over according to the current venue/host instructions.'
    ],
    notes: [
      'The exact Dubbo post-exam script handover process is not stated in the current public CSU procedure or the supplied handbook; follow the exam-day host/Exams team instruction.'
    ],
    status: 'confirm-with-host',
    sourceType: ['CSU Handbook', 'Training'],
  },
  {
    id: 'incident-report',
    title: 'Incident Report',
    shortAnswer: 'Use the Incident & Misconduct Report for irregularities; complete all fields clearly and sign it.',
    keywords: ['incident', 'report', 'form', 'irregular', 'disruption', 'illness', 'misconduct'],
    urgency: 'normal',
    steps: [
      'Use the Incident & Misconduct Report for an issue with the exam paper, a disruption at the venue, student illness, suspected cheating/inappropriate behaviour, or another irregularity.',
      'Complete all required fields, write clearly and sign the report.',
      'For unauthorised material, follow the current evidence process: remove access to it; retain it after the in-person exam or make detailed notes/evidence as applicable; then refer the matter for misconduct investigation.',
      'For an exam-paper/question issue, the handbook directs that the report is returned with the examination paper.'
    ],
    notes: [
      'Record facts, times, observations and actions taken; avoid conclusions about guilt.'
    ],
    sourceType: ['CSU Handbook', 'CSU Conduct Procedure'],
  },
  {
    id: 'attendance',
    title: 'Attendance',
    shortAnswer: 'Use the student/attendance sheet supplied at the venue; BYOD training says to mark students off the supplied list.',
    keywords: ['attendance', 'roll', 'register', 'sheet', 'list', 'mark off'],
    urgency: 'normal',
    steps: [
      'In-person exam sheets are supplied at the venue on the day according to supervisor training.',
      'For BYOD sittings, training says to use the supplied student list to mark students off and use allocated seating.',
      'For other in-person sittings, follow the form/sheet and instructions supplied for that exam.'
    ],
    notes: [
      'The current published CSU conduct procedure does not prescribe a specific attendance-register format or an old attendance-slip/voucher process. Do not invent one.'
    ],
    status: 'confirm-with-host',
    sourceType: ['Training'],
  },
  {
    id: 'staffing',
    title: 'Staffing Levels',
    shortAnswer: 'Use the Exams team roster/host instruction. The handbook and 27 Aug 2026 training use different staffing wording.',
    keywords: ['staffing', 'ratio', 'number', 'supervisors', 'roster', 'assistant'],
    urgency: 'normal',
    steps: [
      'Follow the staffing roster and instructions issued by the Exams team/host for the actual sitting.',
      'Supervisor training on 27 Aug 2026 stated: two supervisors for up to 15 students; for larger rooms, approximately one supervisor per 20 students.',
      'The supplied On-Campus Supervisor Handbook separately states that if there is more than one student to supervise in a session, an assistant supervisor is required.'
    ],
    notes: [
      'Because these two sources use different wording, do not calculate or change staffing yourself. Escalate any apparent understaffing to the Exams team/host.',
      'The handbook also states that an exam supervisor should not be a current Charles Sturt student or a blood relative/spouse of a student being supervised.'
    ],
    status: 'confirm-with-host',
    sourceType: ['Training', 'CSU Handbook'],
  },
  {
    id: 'subject-coordinator',
    title: 'Subject Coordinator',
    shortAnswer: 'A Subject Coordinator is not included in the exam-room access list merely because of that role; notify Exams if one attends.',
    keywords: ['coordinator', 'subject', 'teacher', 'lecturer', 'visit', 'room access', 'who can enter'],
    urgency: 'warning',
    steps: [
      'Current CSU procedure permits only the listed students, exam supervisors, Examinations & Results staff and Division of Learning and Teaching staff to enter an exam room while the exam is in progress.',
      'Subject Coordinators are not included in that permitted list merely by being the Subject Coordinator.',
      'Supervisor training says Subject Coordinators should not normally be in the exam room; if one enters or visits, notify the Exams team and follow their direction.',
      'Do not provide or permit informal academic assistance or interpretation of exam questions.'
    ],
    notes: [
      'Children are not permitted in an in-person exam room, except where the child is themselves a listed student who is younger than adult age.'
    ],
    sourceType: ['CSU Conduct Procedure', 'Training'],
  },
  {
    id: 'open-closed-book',
    title: 'Permitted Materials / Open & Closed Book',
    shortAnswer: 'The exam instructions control. Unless specifically allowed, reference material, highlighters, calculators, electronic devices and phones are prohibited.',
    keywords: ['open book', 'closed book', 'permitted', 'materials', 'notes', 'textbook', 'dictionary', 'calculator', 'phone', 'watch', 'fitness tracker'],
    urgency: 'normal',
    steps: [
      'Follow the permitted-material instructions for the specific exam.',
      'Unless the exam instructions specifically allow them, students cannot bring textbooks/reference material, highlighters, calculators, electronic devices (including electronic dictionaries, laptops, fitness trackers, watches or tablets), mobile phones or other communication devices into the exam sitting.',
      'Printed multilingual or bilingual general dictionaries are permitted unless specifically prohibited for that exam, and they must contain no notes or annotations.',
      'If calculators are permitted, they must be portable, silent, self-powered, fit on a standard exam table and be used for numerical calculations only.',
      'If texts/references are permitted, they cannot be e-books and any restrictions will be listed on the exam paper.',
      'For in-person exams the University supplies the question papers and answer booklets where relevant; students supply their own writing instruments and other permitted materials.'
    ],
    notes: [
      'The on-campus handbook lists pens, 2B pencils, sharpener/eraser and a clear bottle of water among normal student items, plus anything specifically allowed on the exam front page.',
      'Current policy lists mobile phones/communication devices as prohibited unless the exam instructions allow them. If a student arrives with a phone, do not allow use; follow the current venue/host storage instruction. The supplied handbook says mobile phones/unauthorised materials can be placed face down under the desk.'
    ],
    sourceType: ['CSU Conduct Procedure', 'CSU Handbook', 'CSU Current Students'],
  },
  {
    id: 'general-behaviour',
    title: 'General Behaviour',
    shortAnswer: 'Keep the room quiet, circulate and monitor actively; do not distract yourself from supervision.',
    keywords: ['behaviour', 'conduct', 'knitting', 'crossword', 'vape', 'smoking', 'drink', 'bottle', 'noise', 'monitor'],
    urgency: 'normal',
    steps: [
      'Keep noise to a minimum and maintain an orderly exam environment.',
      'Circulate around the room and monitor students; do not sit in one place for the entire exam.',
      'Do not occupy yourself with activities such as knitting or crosswords that reduce supervision.',
      'Monitor for communication and unauthorised materials.',
      'If behaviour is suspicious, stand near the student and continue observing.',
      'Supervisor training states no vaping or smoking and clear drink bottles only; the handbook specifically describes a clear bottle filled with water.'
    ],
    notes: [
      'Students must obey exam supervisors and the exam instructions. A lead supervisor may direct a disruptive student to leave the exam room.'
    ],
    sourceType: ['CSU Handbook', 'CSU Conduct Procedure', 'Training'],
  }
];
