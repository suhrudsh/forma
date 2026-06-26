import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Model } from "./Model";

export default function Viewer() {
  const ref = useRef();

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{
        fov: 20,
        position: [7.662476643468656, 2.2230482249511394, 6.491054258467735],
      }}
    >
      <Suspense fallback={null}>
        <Stage adjustCamera={false} shadows={false} environment={null}>
          <Model />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} />
    </Canvas>
  );
}
