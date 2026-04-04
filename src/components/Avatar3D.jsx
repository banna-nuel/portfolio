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
      // Calculamos el progreso del scroll (considerando los primeros 1000px como rango de giro)
      const scrollY = window.scrollY;
      const scrollMax = 1000; // Ajusta este valor según cuando quieres que llegue a 60°
      const scrollFactor = Math.min(scrollY / scrollMax, 1);
      
      // 60 grados en radianes
      const scrollTargetRotationY = scrollFactor * (60 * Math.PI / 180);
      
      // Seguimiento suave del mouse para el eje X (opcional, pero mejora la interactividad)
      const targetMouseY = (state.mouse.y * Math.PI) / 10;
      
      // Aplicación de rotaciones
      // El eje Y es dictado por el scroll (0 a 60 grados)
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y, 
        scrollTargetRotationY, 
        0.1
      );
      
      // El eje X sigue al mouse de forma muy tenue
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x, 
        -targetMouseY, 
        0.05
      );
      
      // Mantenemos la flotación sutil constante
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.15;
    }
    
    // Brillo dinámico sigue al mouse
    if (lightRef.current) {
      lightRef.current.position.x = state.mouse.x * 5;
      lightRef.current.position.y = state.mouse.y * 5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
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
