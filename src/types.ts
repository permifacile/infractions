export type InfractionClass = 1 | 2 | 3 | 4 | 5;

export interface Infraction {
  desc: string;
  type: string;
  fine: string;
  points: number;
  classType: InfractionClass;
  measures?: string;
}

export interface FilterOption {
  value: string;
  label: string;
}
