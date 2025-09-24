import React from 'react';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const SpinalVertebra = ({ position, size = 1, rotation = 0 }) => (
  <group position={position} rotation={[0, rotation, 0]}>
    {/* Main vertebral body */}
    <mesh position={[0, 0, 0]}>
      <cylinderGeometry args={[0.3 * size, 0.35 * size, 0.4 * size, 8]} />
      <meshStandardMaterial color="#9333ea" transparent opacity={0.8} />
    </mesh>
    
    {/* Vertebral arch */}
    <mesh position={[0, 0.1, -0.2 * size]}>
      <torusGeometry args={[0.25 * size, 0.08 * size, 6, 12]} />
      <meshStandardMaterial color="#a855f7" transparent opacity={0.7} />
    </mesh>
    
    {/* Spinous process (back projection) */}
    <mesh position={[0, 0, -0.4 * size]}>
      <coneGeometry args={[0.08 * size, 0.3 * size, 6]} />
      <meshStandardMaterial color="#8b5cf6" transparent opacity={0.9} />
    </mesh>
    
    {/* Transverse processes (side projections) */}
    <mesh position={[-0.3 * size, 0, -0.1 * size]}>
      <coneGeometry args={[0.06 * size, 0.25 * size, 6]} />
      <meshStandardMaterial color="#8b5cf6" transparent opacity={0.8} />
    </mesh>
    <mesh position={[0.3 * size, 0, -0.1 * size]}>
      <coneGeometry args={[0.06 * size, 0.25 * size, 6]} />
      <meshStandardMaterial color="#8b5cf6" transparent opacity={0.8} />
    </mesh>
    
    {/* Intervertebral disc */}
    <mesh position={[0, -0.3, 0]}>
      <cylinderGeometry args={[0.28 * size, 0.32 * size, 0.15 * size, 12]} />
      <meshStandardMaterial color="#dc2626" transparent opacity={0.6} emissive="#dc2626" emissiveIntensity={0.2} />
    </mesh>
  </group>
);

export const AnimatedSpinalColumn = () => {
  const spineRef = useRef();
  const vertebraeRefs = useRef([]);
  
  // Create 25 vertebrae to span the full page height
  const vertebraeCount = 25;
  const vertebraeSpacing = 0.8;
  
  useFrame((state) => {
    if (spineRef.current) {
      // Main spine gentle swaying
      spineRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      spineRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
      
      // Individual vertebrae animations
      vertebraeRefs.current.forEach((vertebra, index) => {
        if (vertebra) {
          // Wave-like motion along the spine
          const wave = Math.sin(state.clock.elapsedTime * 0.5 + index * 0.3) * 0.1;
          vertebra.rotation.y = wave;
          vertebra.position.x = Math.sin(state.clock.elapsedTime * 0.4 + index * 0.2) * 0.05;
          
          // Breathing effect - slight scale variation
          const breathe = 1 + Math.sin(state.clock.elapsedTime * 1.2 + index * 0.1) * 0.03;
          vertebra.scale.setScalar(breathe);
        }
      });
    }
  });

  return (
    <group ref={spineRef} position={[3, 0, -3]} scale={1.5}>
      {Array.from({ length: vertebraeCount }).map((_, index) => {
        // Vary size - larger at the bottom (lumbar), smaller at top (cervical)
        const normalizedIndex = index / (vertebraeCount - 1);
        const size = 0.7 + (1 - normalizedIndex) * 0.6; // Size from 0.7 to 1.3
        
        // Position vertebrae vertically
        const yPosition = (index - vertebraeCount / 2) * vertebraeSpacing;
        
        // Slight rotation variation for realism
        const rotation = (index % 3) * 0.2;
        
        return (
          <SpinalVertebra
            key={index}
            position={[0, yPosition, 0]}
            size={size}
            rotation={rotation}
            ref={(el) => (vertebraeRefs.current[index] = el)}
          />
        );
      })}
      
      {/* Glowing energy effect along the spine */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, vertebraeCount * vertebraeSpacing]} />
        <meshStandardMaterial 
          color="#fbbf24" 
          emissive="#fbbf24" 
          emissiveIntensity={0.5}
          transparent 
          opacity={0.6}
        />
      </mesh>
    </group>
  );
};