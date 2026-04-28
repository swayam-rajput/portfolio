"use client";

import dynamic from "next/dynamic";
import { useGithubContributions } from "./useGithubContributions";

// Dynamically import the Scene so Three.js never runs on the server
const Scene = dynamic(() => import("./Scene").then((m) => m.Scene), {
  ssr: false,
  loading: () => <CalendarSkeleton />,
});

interface Github3DCalendarProps {
  username: string;
  height?: number | string;
}

function CalendarSkeleton() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 12,
        color: "#6b7280",
        fontSize: 13,
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        style={{ animation: "spin 1.2s linear infinite" }}
      >
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <circle cx="12" cy="12" r="10" stroke="#39d353" strokeWidth="2" strokeDasharray="31.4 31.4" />
      </svg>
      Loading contributions…
    </div>
  );
}

function ErrorDisplay({ message }: { message: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 8,
        color: "#f87171",
        fontSize: 13,
        textAlign: "center",
        padding: "0 24px",
      }}
    >
      <span style={{ fontSize: 22 }}>⚠️</span>
      <span>{message}</span>
    </div>
  );
}

export function Github3DCalendar({
  username,
  height = 200,
}: Github3DCalendarProps) {
  const { data, loading, error } = useGithubContributions(username);

  const containerStyle: React.CSSProperties = {
    width: "100%",
    height: typeof height === "number" ? `${height}px` : height,
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    background: "transparent",
  };

  if (loading) {
    return (
      <div style={containerStyle}>
        <CalendarSkeleton />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div style={containerStyle}>
        <ErrorDisplay message={error ?? "No data returned"} />
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <Scene
        weeks={data.weeks}
        totalContributions={data.totalContributions}
      />
    </div>
  );
}
