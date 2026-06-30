// FloatingBlock.jsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function FloatingBlock({
  speed = 1.5,
  amplitude = 0.01,
  geometry,
  material,
  position,
  scale,
  delay = 0,
  startPos,
}) {
  const groupRef = useRef();
  const velocity = useRef({ x: 0, y: 0 });
  const offset = useRef({ x: 0, y: 0 });
  const ready = useRef(false);
  const readyTime = useRef(null);

  useGSAP(() => {
    if (!groupRef.current) return;

    groupRef.current.position.set(0, 0, 0);
    groupRef.current.position.set(startPos.x, startPos.y, startPos.z);

    gsap.to(groupRef.current.position, {
      x: 0,
      y: 0,
      z: 0,
      duration: 1.5,
      delay,
      ease: "back.out(0.4)",
      onComplete: () => {
        requestAnimationFrame(() => {
          ready.current = true;
        });
      },
    });
  }, []);

  function handlePointerMove(e) {
    if (!ready.current) return;
    velocity.current.x += e.movementY * 0.00003;
    velocity.current.y += e.movementX * 0.00003;
  }

  useFrame(({ clock }) => {
    if (!groupRef.current || !ready.current) return;

    if (readyTime.current === null) {
      readyTime.current = clock.elapsedTime;
    }

    const elapsed = clock.elapsedTime - readyTime.current;
    const t = elapsed * speed;

    velocity.current.x *= 0.9;
    velocity.current.y *= 0.9;

    offset.current.x += velocity.current.x;
    offset.current.y += velocity.current.y;

    offset.current.x *= 0.97;
    offset.current.y *= 0.97;

    const blendIn = Math.min(elapsed, 1);

    groupRef.current.position.x =
      Math.sin(t) * amplitude * blendIn + offset.current.x;
    groupRef.current.position.y =
      Math.cos(t) * amplitude * blendIn + offset.current.y;
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
