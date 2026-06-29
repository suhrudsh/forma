import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Model } from "./Model";

import { useFrame, useThree } from "@react-three/fiber";

function CameraRig({ orbitDistance = 0.75, lerpFactor = 0.035 }) {
  const { camera, pointer } = useThree();
  const initialPos = useRef(camera.position.clone());

  useFrame(() => {
    const targetX = initialPos.current.x + pointer.x * orbitDistance;
    const targetY = initialPos.current.y + pointer.y * orbitDistance;

    camera.position.x += (targetX - camera.position.x) * lerpFactor;
    camera.position.y += (targetY - camera.position.y) * lerpFactor;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Viewer() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{
        fov: 22.895,
        position: [4.981, 2.947, 6.95],
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
      <CameraRig />
      {import.meta.env.DEV && <axesHelper args={[2.5]} />}
    </Canvas>
  );
}
