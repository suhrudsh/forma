import React, { useRef } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { PointLightHelper } from "three";
import { FloatingBlock } from "./FloatingBlock";

const stagger = 0.5;

const getStartPos = (pos, distance = 8) => {
  const len = Math.sqrt(pos[0] ** 2 + pos[1] ** 2 + pos[2] ** 2);
  return {
    x: (pos[0] / len) * distance,
    y: (pos[1] / len) * distance,
    z: (pos[2] / len) * distance,
  };
};

function Lights() {
  const pointRef = useRef();
  const pointRef2 = useRef();

  useHelper(pointRef, import.meta.env.DEV ? PointLightHelper : null, 0.5);
  useHelper(pointRef2, import.meta.env.DEV ? PointLightHelper : null, 0.5);

  return (
    <>
      <pointLight
        ref={pointRef}
        position={[-2.6624, 0.1904, -1.5]}
        intensity={100}
        distance={3.75}
      />
      <pointLight
        ref={pointRef2}
        position={[-2.5, -1.5, 1.5]}
        intensity={100}
        decay={3}
        distance={3.75}
      />
    </>
  );
}

export function Model(props) {
  const { nodes, materials } = useGLTF("/forma-design.glb");

  const blocks = [
    {
      key: "Block_1",
      geometry: nodes.Block_1001.geometry,
      material: materials["Dark Stone"],
      position: [-0.194, 0.067, -0.067],
    },
    {
      key: "Block_2",
      geometry: nodes.Block_2001.geometry,
      material: materials["Ceramic Unglazed_Baked"],
      position: [-0.051, 0.205, 0.315],
    },
    {
      key: "Block_3",
      geometry: nodes.Block_3001.geometry,
      material: materials["Clay.001"],
      position: [-0.011, 0.29, -0.215],
    },
    {
      key: "Block_4",
      geometry: nodes.Block_4001.geometry,
      material: materials["Brown Polished Oak Wood"],
      position: [0.32, 0.111, -0.058],
    },
    {
      key: "Block_5",
      geometry: nodes.Block_5001.geometry,
      material: materials["PBR fresh gold"],
      position: [0.286, -0.238, 0.028],
    },
    {
      key: "Block_6",
      geometry: nodes.Block_6001.geometry,
      material: materials["Recycled Brown Cardboard"],
      position: [-0.222, -0.259, -0.211],
    },
    {
      key: "Block_7",
      geometry: nodes.Block_7001.geometry,
      material: materials["Blue Plastic Glossy_Baked"],
      position: [-0.289, -0.182, 0.208],
    },
  ];

  return (
    <group {...props} dispose={null}>
      <Lights />
      <group rotation={[0, 0, -Math.PI / 2]} scale={2.999}>
        {blocks.map((block, i) => (
          <FloatingBlock
            key={block.key}
            geometry={block.geometry}
            material={block.material}
            position={block.position}
            scale={5.868}
            delay={i * stagger}
            startPos={getStartPos(block.position)}
          />
        ))}
      </group>
    </group>
  );
}

useGLTF.preload("/forma-design.glb");
