import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MagicParticles({ count = 300 }) {
  const mesh = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const goldColor = new THREE.Color("#e8a838");
    const purpleColor = new THREE.Color("#9b59b6");
    const greenColor = new THREE.Color("#3d9970");

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      const colorChoice = Math.random();
      const c = colorChoice < 0.5 ? goldColor : colorChoice < 0.8 ? purpleColor : greenColor;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.015;
    const posAttr = mesh.current.geometry.attributes.position;
    const arr = posAttr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += Math.sin(state.clock.elapsedTime * 0.3 + i * 0.1) * 0.002;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function MagicOrbs() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      child.position.y = Math.sin(state.clock.elapsedTime * 0.4 + i * 1.5) * 0.5;
      child.position.x += Math.sin(state.clock.elapsedTime * 0.2 + i) * 0.001;
    });
  });

  const orbs = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      pos: [(Math.random() - 0.5) * 12, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6] as [number, number, number],
      color: i % 3 === 0 ? "#e8a838" : i % 3 === 1 ? "#9b59b6" : "#3d9970",
      scale: 0.06 + Math.random() * 0.08,
    }));
  }, []);

  return (
    <group ref={group}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.pos}>
          <sphereGeometry args={[orb.scale, 16, 16]} />
          <meshBasicMaterial color={orb.color} transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

export default function MagicBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <MagicParticles />
        <MagicOrbs />
        <ambientLight intensity={0.05} />
      </Canvas>
    </div>
  );
}
