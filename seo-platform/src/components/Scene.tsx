"use client";

import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, PerspectiveCamera, Sphere } from '@react-three/drei';

export function Scene() {
  return (
    <div className="aspect-[4/3] w-full rounded-[1.75rem] bg-slate-950 p-4">
      <Canvas camera={{ position: [0, 0, 7], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.1} />
        <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.9}>
          <Sphere args={[1.35, 64, 64]} scale={1.2}>
            <meshStandardMaterial color="#2563eb" metalness={0.45} roughness={0.25} />
          </Sphere>
        </Float>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
        <PerspectiveCamera makeDefault position={[0, 0, 7]} />
      </Canvas>
    </div>
  );
}
