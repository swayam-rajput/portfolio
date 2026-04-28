"use client";

import { useRef, useState, useCallback, useMemo, useEffect } from "react";
import { useFrame, ThreeEvent } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import {
  flattenWeeks,
  getDayPosition,
  getContributionColor,
  getHoverColor,
  getBarHeight,
  BAR_SIZE,
  formatDate,
  type ContributionWeek,
} from "./utils";

interface TooltipInfo {
  date: string;
  count: number;
  worldPos: [number, number, number];
}

interface ContributionBarsProps {
  weeks: ContributionWeek[];
}

// Reusable Three.js objects – allocated once, never recreated
const _matrix = new THREE.Matrix4();
const _scale = new THREE.Vector3();
const _pos = new THREE.Vector3();
const _quat = new THREE.Quaternion();
const _color = new THREE.Color();

export function ContributionBars({ weeks }: ContributionBarsProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [tooltip, setTooltip] = useState<TooltipInfo | null>(null);

  const { days, maxCount, instanceCount, totalWeeks } = useMemo(() => {
    const days = flattenWeeks(weeks);
    const maxCount = Math.max(...days.map((d) => d.contributionCount), 1);
    return { days, maxCount, instanceCount: days.length, totalWeeks: weeks.length };
  }, [weeks]);

  // Animated heights stored in refs (no re-render needed per frame)
  const currentHeights = useRef(new Float32Array(instanceCount));
  const targetHeights = useRef(new Float32Array(instanceCount));

  // Recompute targets whenever data changes; reset animation to 0
  useEffect(() => {
    const targets = new Float32Array(instanceCount);
    for (let i = 0; i < instanceCount; i++) {
      targets[i] = getBarHeight(days[i].contributionCount, maxCount);
    }
    targetHeights.current = targets;
    currentHeights.current = new Float32Array(instanceCount); // all zeros → animate in
  }, [days, maxCount, instanceCount]);

  // One-time setup: write identity matrices so Three.js allocates the buffer
  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    for (let i = 0; i < instanceCount; i++) {
      const day = days[i];
      const [bx, , bz] = getDayPosition(i, instanceCount);

      // Start with a near-zero height so bars animate upward
      _scale.set(BAR_SIZE, 0.0001, BAR_SIZE);
      _pos.set(bx, 0.00005, bz);
      _matrix.compose(_pos, _quat, _scale);
      mesh.setMatrixAt(i, _matrix);

      // setColorAt auto-initialises instanceColor buffer on first call
      getContributionColor(day.contributionCount, maxCount).toArray(
        _color as unknown as number[], 0
      );
      _color.set(getContributionColor(day.contributionCount, maxCount));
      mesh.setColorAt(i, _color);
    }

    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [days, maxCount, instanceCount, totalWeeks]);

  // Per-frame: lerp heights, update matrices + colours
  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    // Frame-rate-independent lerp factor (settles in ~1.5 s)
    const t = 1 - Math.pow(0.001, delta);
    let matrixDirty = false;
    let colorDirty = false;

    for (let i = 0; i < instanceCount; i++) {
      const target = targetHeights.current[i];
      const cur = currentHeights.current[i];
      const next = cur + (target - cur) * t;

      if (Math.abs(next - cur) > 0.00005) {
        currentHeights.current[i] = next;
        matrixDirty = true;

        const [bx, , bz] = getDayPosition(i, instanceCount);
        _scale.set(BAR_SIZE, next, BAR_SIZE);
        _pos.set(bx, next / 2, bz);
        _matrix.compose(_pos, _quat, _scale);
        mesh.setMatrixAt(i, _matrix);
      }

      // Colour: hover highlight or normal contribution colour
      if (i === hoveredId) {
        _color.copy(getHoverColor());
      } else {
        _color.copy(getContributionColor(days[i].contributionCount, maxCount));
      }
      mesh.setColorAt(i, _color);
      colorDirty = true;
    }

    if (matrixDirty) mesh.instanceMatrix.needsUpdate = true;
    if (colorDirty && mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  });

  const handlePointerMove = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation();
      const id = e.instanceId;
      if (id === undefined || id >= instanceCount) return;

      setHoveredId(id);
      document.body.style.cursor = "pointer";

      const day = days[id];
      const [bx, , bz] = getDayPosition(id, instanceCount);
      const h = currentHeights.current[id];
      setTooltip({
        date: day.date,
        count: day.contributionCount,
        worldPos: [bx, h + 0.4, bz],
      });
    },
    [days, instanceCount, totalWeeks]
  );

  const handlePointerOut = useCallback(() => {
    setHoveredId(null);
    setTooltip(null);
    document.body.style.cursor = "auto";
  }, []);

  return (
    <>
      <instancedMesh
        ref={meshRef}
        args={[undefined, undefined, instanceCount]}
        onPointerMove={handlePointerMove}
        onPointerOut={handlePointerOut}
      >
        <boxGeometry args={[1, 1, 1]} />
        {/* High roughness + zero metalness = soft, matte, no specular highlights */}
        <meshStandardMaterial roughness={0.92} metalness={0} toneMapped={false} />
      </instancedMesh>

      {tooltip && (
        <Html
          position={tooltip.worldPos}
          center
          style={{ pointerEvents: "none" }}
          zIndexRange={[100, 0]}
        >
          <div
            style={{
              background: "rgba(8,8,8,0.9)",
              backdropFilter: "blur(10px)",
              borderRadius: 8,
              padding: "6px 12px",
              color: "#fff",
              fontSize: 12,
              whiteSpace: "nowrap",
              boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
              userSelect: "none",
              lineHeight: 1.6,
            }}
          >
            <div style={{ color: "#39d353", fontWeight: 700 }}>
              {tooltip.count} contribution{tooltip.count !== 1 ? "s" : ""}
            </div>
            <div style={{ color: "#9ca3af" }}>{formatDate(tooltip.date)}</div>
          </div>
        </Html>
      )}
    </>
  );
}
