import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function RotatingAvatar() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Cargamos la foto 2D. Es indispensable que guardes la foto en la 
  // carpeta "public" con el nombre exacto de "avatar.png"
  const texture = useTexture('/avatar.png');
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Movimiento suave que sigue el mouse o rota lentamente
      const targetX = (state.mouse.x * Math.PI) / 8;
      const targetY = (state.mouse.y * Math.PI) / 8;
      
      // Interpolación suave hacia la posición del mouse
      meshRef.current.rotation.y += 0.05 * (targetX - meshRef.current.rotation.y);
      meshRef.current.rotation.x += 0.05 * (-targetY - meshRef.current.rotation.x);
      
      // Flotación extra
      meshRef.current.position.y = Math.sin(time * 2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        {/* Un plano con las proporciones típicas de retrato vertical (por ej. 3:4) */}
        <planeGeometry args={[3.2, 4.26]} />
        {/* Utilizamos material básico para que la iluminación no oscurezca la foto */}
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent opacity={1} />
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
