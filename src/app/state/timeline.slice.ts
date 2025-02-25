import { TimelineItem } from "../interfaces/timeline-item";

export interface TimelineSlice {
  readonly timeline: TimelineItem[];
}

export const initialTimelineSlice: TimelineSlice = {
  timeline: [],
};
