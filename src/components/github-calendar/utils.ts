import * as THREE from "three";

export interface ContributionDay {
  date: string;
  contributionCount: number;
  weekday: number;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

// Light-mode pastel contribution palette (matches the reference image)
const CONTRIBUTION_COLORS = [
  "#e8ede9", // 0 — very light grey-green (shows empty tiles clearly)
  "#cfe9d6", // 1 — light mint
  "#9fd5b2", // 2 — medium green
  "#5fbf86", // 3 — vivid green
  "#2f8a5a", // 4 — deep green
] as const;

const HOVER_COLOR = "#ffffff"; // bright white — subtle pop against the pastels

/** Map a contribution count to one of the 5 GitHub contribution levels */
export function getLevel(count: number, max: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0 || max === 0) return 0;
  const ratio = count / max;
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;
  return 4;
}

/** Returns a THREE.Color for the contribution level */
export function getContributionColor(count: number, max: number): THREE.Color {
  const level = getLevel(count, max);
  return new THREE.Color(CONTRIBUTION_COLORS[level]);
}

/** Returns the hex string for the contribution level */
export function getContributionHex(count: number, max: number): string {
  const level = getLevel(count, max);
  return CONTRIBUTION_COLORS[level];
}

export function getHoverColor(): THREE.Color {
  return new THREE.Color(HOVER_COLOR);
}

/**
 * Normalize a contribution count to a bar height.
 * Zero contributions → thin base slab (0.05).
 * Max contributions → MAX_HEIGHT.
 */
export const MAX_HEIGHT = 1.5;
export const MIN_HEIGHT = 0.05; // always render a thin slab so the grid is visible

export function getBarHeight(count: number, max: number): number {
  if (count === 0 || max === 0) return MIN_HEIGHT;
  return MIN_HEIGHT + (count / max) * (MAX_HEIGHT - MIN_HEIGHT);
}

/** Spacing constants for the grid */
export const BAR_SIZE = 0.4; // width / depth of each cube
export const GAP = 0.01;      // gap — slightly wider for the airy look
export const STEP = BAR_SIZE + GAP; // total stride per cell

/** Flatten weeks → flat list of days with grid coordinates */
export interface FlatDay extends ContributionDay {
  weekIdx: number;
  dayIdx: number;
  instanceId: number;
}

export function flattenWeeks(weeks: ContributionWeek[]): FlatDay[] {
  const result: FlatDay[] = [];
  let id = 0;
  weeks.forEach((week, wi) => {
    week.contributionDays.forEach((day, di) => {
      result.push({ ...day, weekIdx: wi, dayIdx: di, instanceId: id++ });
    });
  });
  return result;
}

/** Compute grid world position for a day (base center at y=0) */
export function getDayPosition(
  weekIdx: number,
  dayIdx: number,
  totalWeeks: number
): [number, number, number] {
  const xOffset = -(totalWeeks * STEP) / 2;
  const zOffset = -(7 * STEP) / 2;
  return [xOffset + weekIdx * STEP, 0, zOffset + dayIdx * STEP];
}

/** Format a date string to a readable label */
export function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
