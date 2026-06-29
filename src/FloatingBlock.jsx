import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function FloatingBlock({
  speed = 1.5,
  amplitude = 0.01,
  geometry,
  material,
  position,
  scale,
}) {
  const groupRef = useRef();
  const randomOffset = useRef(Math.random() * 10).current;
  const velocity = useRef({ x: 0, y: 0 });
  const offset = useRef({ x: 0, y: 0 });

  function handlePointerMove(e) {
    velocity.current.x += e.movementY * 0.00003;
    velocity.current.y += e.movementX * 0.00003;
  }

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const t = clock.elapsedTime * speed + randomOffset;

    // damp velocity — bleeds off quickly
    velocity.current.x *= 0.7;
    velocity.current.y *= 0.7;

    // apply velocity to offset
    offset.current.x += velocity.current.x;
    offset.current.y += velocity.current.y;

    // very lazy spring back
    offset.current.x *= 0.97;
    offset.current.y *= 0.97;

    // float + offset
    groupRef.current.position.x = Math.sin(t) * amplitude + offset.current.x;
    groupRef.current.position.y = Math.cos(t) * amplitude + offset.current.y;
  });

  return (
    <group ref={groupRef}>
      <mesh
        onPointerMove={handlePointerMove}
        geometry={geometry}
        material={material}
        position={position}
        scale={scale}
      />
    </group>
  );
}
