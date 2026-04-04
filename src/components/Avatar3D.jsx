import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera, useTexture, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function RotatingAvatar() {
  const meshRef = useRef(null);
  const lightRef = useRef(null);
  
  const texture = useTexture('/avatar.png');
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Seguimiento muy sutil del mouse (Parallax)
      const targetX = (state.mouse.x * Math.PI) / 12;
      const targetY = (state.mouse.y * Math.PI) / 12;
      
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.05);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -targetY, 0.05);
      
      // Flotación constante
      meshRef.current.position.y = Math.sin(time * 1.2) * 0.1;
    }
    
    if (lightRef.current) {
      lightRef.current.position.x = state.mouse.x * 5;
      lightRef.current.position.y = state.mouse.y * 5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group>
        <pointLight ref={lightRef} distance={10} intensity={2} color="#3b82f6" />
        <mesh ref={meshRef}>
          <planeGeometry args={[3.2, 4.26]} />
          <meshBasicMaterial 
            map={texture} 
            alphaTest={0.5}
            transparent={true}
            side={THREE.DoubleSide} 
          />
        </mesh>
      </group>
    </Float>
  );
}

function AvatarFallback() {
  return (
    <mesh>
      <planeGeometry args={[3.2, 4.26]} />
      <meshStandardMaterial color="#2563eb" metalness={0.5} roughness={0.2} transparent opacity={0.5} />
    </mesh>
  );
}

export default function Avatar3D() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        
        <Suspense fallback={<AvatarFallback />}>
          <Sparkles count={40} scale={6} size={2} speed={0.4} color="#3b82f6" opacity={0.5} />
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
              opacity={0.15}
            />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
