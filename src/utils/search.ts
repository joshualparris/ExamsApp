import { procedures, Procedure } from '@/data/procedures';

export function searchProcedures(query: string): Procedure[] {
  if (!query.trim()) return procedures;
  const q = query.toLowerCase();
  
  return procedures.filter(proc => {
    return (
      proc.title.toLowerCase().includes(q) ||
      proc.keywords.some(k => k.toLowerCase().includes(q)) ||
      proc.shortAnswer.toLowerCase().includes(q)
    );
  });
}
