"use client";

import { useEffect, useState } from "react";
import type { ContributionCalendar } from "./utils";

interface UseGithubContributionsResult {
  data: ContributionCalendar | null;
  loading: boolean;
  error: string | null;
}

export function useGithubContributions(username: string): UseGithubContributionsResult {
  const [data, setData] = useState<ContributionCalendar | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;

    let cancelled = false;
    setLoading(true);
    setError(null);
    setData(null);

    fetch(`/api/github-contributions?username=${encodeURIComponent(username)}`)
      .then(async (res) => {
        const json = await res.json();
        if (!res.ok) throw new Error(json.error ?? `HTTP ${res.status}`);
        return json as ContributionCalendar;
      })
      .then((calendar) => {
        if (!cancelled) {
          setData(calendar);
          setLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to fetch contributions");
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  return { data, loading, error };
}
