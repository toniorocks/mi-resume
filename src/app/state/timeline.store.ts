import { signalStore, withState } from "@ngrx/signals";
import { initialTimelineSlice } from "./timeline.slice";

export const TimelineStore = signalStore(
  { providedIn: "root" },
  withState(initialTimelineSlice)
);
