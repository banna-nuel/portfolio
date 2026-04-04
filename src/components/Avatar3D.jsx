import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera, useTexture, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function RotatingAvatar() {
  const meshRef = useRef(null);
  const lightRef = useRef(null);
  
  const texture = useTexture('/avatar.png');
  
  useFrame((state) => {
    if (meshRef.current) {
      // Cálculo basado en la lógica del usuario:
      // El rango total es la altura de una pantalla (porque el contenedor tiene 200vh y la mitad es sticky)
      const rangeTotal = window.innerHeight;
      const scrollHecho = window.scrollY;
      
      // progreso entre 0 y 1
      const progress = Math.min(Math.max(scrollHecho / rangeTotal, 0), 1);
      
      // grados entre 0 y 60
      const targetRotationY = progress * (60 * Math.PI / 180);
      
      // Aplicación de rotación ultra suave (lerp para evitar saltos)
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y, 
        targetRotationY, 
        0.1
      );
      
      // Mantenemos una inclinación leve según el mouse (eje X) para efecto 4D
      const targetMouseY = (state.mouse.y * Math.PI) / 20;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x, 
        -targetMouseY, 
        0.05
      );
      
      // Flotación sutil independiente
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1) * 0.1;
    }
    
    if (lightRef.current) {
      lightRef.current.position.x = state.mouse.x * 5;
      lightRef.current.position.y = state.mouse.y * 5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
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
