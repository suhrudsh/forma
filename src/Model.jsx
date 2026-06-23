import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/threejs-tetris-cube.glb");
  return (
    <group {...props} dispose={null}>
      {/* <pointLight
        intensity={10870.283}
        decay={2}
        position={[-2.919, 2.866, -1.35]}
        rotation={[-Math.PI / 2, 0, 0]}
      /> */}
      <PerspectiveCamera
        makeDefault={false}
        far={100}
        near={0.1}
        fov={22.895}
        position={[6.902, 5.939, 7.15]}
        rotation={[-0.398, 0.726, 0.272]}
      />
      <group
        position={[0, 2.953, 0]}
        rotation={[0, 0.175, -Math.PI / 2]}
        scale={2.999}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Block_1001.geometry}
          material={materials["Dark Stone"]}
          position={[-0.194, 0.067, -0.067]}
          scale={5.868}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Block_2001.geometry}
          material={materials["Ceramic Unglazed_Baked"]}
          position={[-0.051, 0.205, 0.315]}
          scale={5.868}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Block_3001.geometry}
          material={materials["Clay.001"]}
          position={[-0.011, 0.29, -0.215]}
          scale={5.868}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Block_4001.geometry}
          material={materials["Brown Polished Oak Wood"]}
          position={[0.32, 0.111, -0.058]}
          scale={5.868}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Block_5001.geometry}
          material={materials["PBR fresh gold"]}
          position={[0.286, -0.238, 0.028]}
          scale={5.868}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Block_6001.geometry}
          material={materials["Recycled Brown Cardboard"]}
          position={[-0.222, -0.259, -0.211]}
          scale={5.868}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Block_7001.geometry}
          material={materials["Blue Plastic Glossy_Baked"]}
          position={[-0.289, -0.182, 0.208]}
          scale={5.868}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/threejs-tetris-cube.glb");
