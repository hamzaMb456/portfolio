import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const ref = useRef();
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const radius = Math.random() * 10 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

const FloatingGeometry = ({ position, geometry, color }) => {
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime + position[1]) * 0.3;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.5;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      {geometry}
      <meshStandardMaterial color={color} transparent opacity={0.7} />
    </mesh>
  );
};

export const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <AnimatedSphere />
        
        <FloatingGeometry 
          position={[-8, 2, -5]} 
          geometry={<boxGeometry args={[1, 1, 1]} />}
          color="#3b82f6"
        />
        <FloatingGeometry 
          position={[8, -2, -3]} 
          geometry={<sphereGeometry args={[0.8, 16, 16]} />}
          color="#ef4444"
        />
        <FloatingGeometry 
          position={[-5, -3, -8]} 
          geometry={<octahedronGeometry args={[1]} />}
          color="#10b981"
        />
        <FloatingGeometry 
          position={[6, 4, -6]} 
          geometry={<tetrahedronGeometry args={[1]} />}
          color="#f59e0b"
        />
      </Canvas>
    </div>
  );
};