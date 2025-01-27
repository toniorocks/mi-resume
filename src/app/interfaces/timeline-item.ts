export interface TimelineItem {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string[];
  detail: string;
  startDate: string;
  endDate: string;
  visible?: boolean;
  current?: boolean;
  technologies?: string[];
  active?: boolean;
}
