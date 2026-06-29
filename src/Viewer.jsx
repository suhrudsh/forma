import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage } from "@react-three/drei";
import { Model } from "./Model";

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
        <Stage
          adjustCamera={false}
          shadows={false}
          environment={{
            preset: "studio",
            environmentIntensity: 0.25,
            environmentRotation: [0, 4.63, 0],
          }}
          intensity={0}
        >
          <Model />
        </Stage>
      </Suspense>
      {import.meta.env.DEV && <axesHelper args={[2.5]} />}
    </Canvas>
  );
}
