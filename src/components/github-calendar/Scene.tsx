"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ContributionBars } from "./ContributionBars";
import type { ContributionWeek } from "./utils";

interface SceneProps {
  weeks: ContributionWeek[];
  totalContributions: number;
}

/**
 * All-ambient lighting — matches the soft, shadow-free look in the reference.
 * Four hemisphere/directional lights from different angles eliminate any dark faces.
 */
function Lights() {
  return (
    <>
      {/* Strong ambient so every face is evenly lit */}
      <ambientLight intensity={2.2} />
      {/* Subtle top fill — adds very slight depth without harsh shadows */}
      <directionalLight position={[5, 12, 8]}  intensity={0.35} />
      <directionalLight position={[-5, 8, -6]} intensity={0.25} />
      {/* Front-facing fill so bars facing the camera stay bright */}
      <directionalLight position={[0, 2, 20]}  intensity={0.2} />
    </>
  );
}

export function Scene({ weeks, totalContributions }: SceneProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Contribution count badge */}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 14,
          zIndex: 10,
          fontSize: 12,
          opacity: 0.55,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <span style={{ fontWeight: 700 }}>{totalContributions.toLocaleString()}</span>{" "}
        contributions
      </div>

      <Canvas
        // No `shadows` prop — eliminates all shadow rendering entirely
        dpr={[1, 2]}
        camera={{
          // Isometric-ish: slightly elevated, looking at the centre from front-left
          position: [18, 16, 22],
          fov: 42,
          near: 0.1,
          far: 200,
        }}
        style={{ width: "100%", height: "100%" }}
        gl={{ antialias: true, alpha: true }}
      >
        <Lights />

        <Suspense fallback={null}>
          <ContributionBars weeks={weeks} />
        </Suspense>

        <OrbitControls
          enablePan
          enableZoom
          enableRotate
          minDistance={10}
          maxDistance={55}
          maxPolarAngle={Math.PI / 2.1}
          target={[0, 0.5, 0]}
          dampingFactor={0.07}
          enableDamping
        />
      </Canvas>

      {/* Hint */}
      <div
        style={{
          position: "absolute",
          bottom: 8,
          right: 12,
          zIndex: 10,
          fontSize: 10,
          opacity: 0.35,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        drag · scroll · right-click pan
      </div>
    </div>
  );
}
