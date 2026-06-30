import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Model } from "./Model";

import { useFrame, useThree } from "@react-three/fiber";

function CameraRig({
  position,
  orbitDistance = 0.75,
  lerpFactor = 0.035,
  lookAtY = 0,
}) {
  const { camera, pointer } = useThree();
  const initialPos = useRef(null);

  // Re-sync camera position whenever the target position changes (tier change)
  useEffect(() => {
    camera.position.set(...position);
    initialPos.current = camera.position.clone();
  }, [camera, position]);

  useFrame(() => {
    if (!initialPos.current) return;
    const targetX = initialPos.current.x + pointer.x * orbitDistance;
    const targetY = initialPos.current.y + pointer.y * orbitDistance;

    camera.position.x += (targetX - camera.position.x) * lerpFactor;
    camera.position.y += (targetY - camera.position.y) * lerpFactor;
    camera.lookAt(0, lookAtY, 0);
  });

  return null;
}

const DESKTOP_POSITION = [4.981, 2.947, 6.95];
const TABLET_LANDSCAPE_POSITION = [3.74, 2.21, 5.21];
const TABLET_PORTRAIT_POSITION = [6.97, 4.13, 9.73]; // ~1.4x, farther than before
const MOBILE_POSITION = [9.962, 5.894, 13.9];

function useDeviceTier() {
  const getTier = () => {
    if (typeof window === "undefined") return "desktop";
    const w = window.innerWidth;
    const isPortrait = window.innerHeight > window.innerWidth;
    if (w < 640) return "mobile";
    if (w <= 1024) return isPortrait ? "tablet-portrait" : "tablet-landscape";
    return "desktop";
  };

  const [tier, setTier] = useState(getTier);

  useEffect(() => {
    const handler = () => setTier(getTier());
    window.addEventListener("resize", handler);
    window.addEventListener("orientationchange", handler);
    return () => {
      window.removeEventListener("resize", handler);
      window.removeEventListener("orientationchange", handler);
    };
  }, []);

  return tier;
}

const POSITIONS = {
  mobile: MOBILE_POSITION,
  "tablet-portrait": TABLET_PORTRAIT_POSITION,
  "tablet-landscape": TABLET_LANDSCAPE_POSITION,
  desktop: DESKTOP_POSITION,
};

export default function Viewer() {
  const tier = useDeviceTier();

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{
        fov: 22.895,
        position: POSITIONS[tier],
      }}
    >
      <Suspense fallback={null}>
        <Environment
          preset="studio"
          environmentIntensity={0.25}
          environmentRotation={[0, 4.63, 0]}
        />
        <Model />
      </Suspense>
      <CameraRig
        position={POSITIONS[tier]}
        lookAtY={tier === "mobile" ? -0.6 : 0}
      />
      {import.meta.env.DEV && <axesHelper args={[2.5]} />}
    </Canvas>
  );
}
