import { expect, test, describe } from 'vitest';
import { searchProcedures } from './search';
import { contacts } from '../data/contacts';

describe('Search functionality', () => {
  test('sick -> Student Sick', () => {
    const results = searchProcedures('sick');
    expect(results.some(p => p.id === 'student-sick')).toBe(true);
  });

  test('late -> Student Late', () => {
    const results = searchProcedures('late');
    expect(results.some(p => p.id === 'student-late')).toBe(true);
  });

  test('fire -> Emergency/Evacuation', () => {
    const results = searchProcedures('fire');
    expect(results.some(p => p.id === 'fire-evacuation')).toBe(true);
  });

  test('Medicare -> ID', () => {
    const results = searchProcedures('Medicare');
    expect(results.some(p => p.id === 'check-id')).toBe(true);
  });
});

describe('Contacts', () => {
  test('Emergency is 000', () => {
    const emergency = contacts.find(c => c.id === 'emergency');
    expect(emergency?.number).toBe('000');
  });

  test('Unconfirmed Dubbo contact is labelled as placeholder', () => {
    const dubbo = contacts.find(c => c.id === 'dubbo-exam-day');
    expect(dubbo?.status).toBe('placeholder');
    expect(dubbo?.number).toBe('TBA');
  });
});
