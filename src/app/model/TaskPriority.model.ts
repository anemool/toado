export interface TaskPriority {
  value: string;
  label: string;
  backgroundColor: string;
}
export const Priorities: TaskPriority[] = [
  { value: 'low', label: 'p3', backgroundColor: '#9efee9' },
  { value: 'medium', label: 'p2', backgroundColor: '#fef288' },
  { value: 'high', label: 'p1', backgroundColor: '#ff8876' },
];
