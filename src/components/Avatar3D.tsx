import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function RotatingAvatar() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Periodic rotation up to 45 degrees (pi/4)
      meshRef.current.rotation.y = (Math.sin(time * 0.5) * Math.PI) / 4;
      meshRef.current.rotation.x = (Math.cos(time * 0.3) * Math.PI) / 8;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <boxGeometry args={[3, 4, 0.2]} />
        <meshStandardMaterial color="#2563eb" metalness={0.5} roughness={0.2} />
        {/* Placeholder: In a real app, this would use a texture with the user's photo */}
        <meshStandardMaterial attach="material-4" color="#ffffff" /> 
      </mesh>
    </Float>
  );
}

export default function Avatar3D() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        
        <Suspense fallback={null}>
          <RotatingAvatar />
          <mesh position={[0, 0, -2]}>
            <sphereGeometry args={[5, 64, 64]} />
            <MeshDistortMaterial
              color="#1e3a8a"
              attach="material"
              distort={0.4}
              speed={1.5}
              roughness={0}
              metalness={1}
              transparent
              opacity={0.1}
            />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
