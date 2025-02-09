export interface TimelineItem {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string[] | string;
  detail: string;
  startDate: string;
  endDate: string;
  visible?: boolean;
  current?: boolean;
  technologies?: string[] | string;
  active?: boolean;
  _id?: string;
}
