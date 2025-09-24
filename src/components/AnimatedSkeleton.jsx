import React from 'react';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const SkeletonSkull = ({ position }) => (
  <group position={position}>
    {/* Main skull */}
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[0.8, 16, 16]} />
      <meshStandardMaterial color="#9333ea" transparent opacity={0.8} />
    </mesh>
    
    {/* Eye sockets */}
    <mesh position={[-0.3, 0.2, 0.6]}>
      <sphereGeometry args={[0.15, 8, 8]} />
      <meshStandardMaterial color="#dc2626" emissive="#dc2626" emissiveIntensity={0.5} />
    </mesh>
    <mesh position={[0.3, 0.2, 0.6]}>
      <sphereGeometry args={[0.15, 8, 8]} />
      <meshStandardMaterial color="#dc2626" emissive="#dc2626" emissiveIntensity={0.5} />
    </mesh>
    
    {/* Jaw */}
    <mesh position={[0, -0.4, 0.2]}>
      <boxGeometry args={[0.8, 0.3, 0.6]} />
      <meshStandardMaterial color="#9333ea" transparent opacity={0.8} />
    </mesh>
  </group>
);

const SkeletonSpine = ({ position }) => (
  <group position={position}>
    {Array.from({ length: 8 }).map((_, i) => (
      <mesh key={i} position={[0, -i * 0.3, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.2]} />
        <meshStandardMaterial color="#9333ea" transparent opacity={0.7} />
      </mesh>
    ))}
  </group>
);

const SkeletonRibCage = ({ position }) => (
  <group position={position}>
    {Array.from({ length: 6 }).map((_, i) => (
      <group key={i} position={[0, -i * 0.4, 0]}>
        {/* Left rib */}
        <mesh position={[-0.8, 0, 0]} rotation={[0, 0, -0.3]}>
          <cylinderGeometry args={[0.05, 0.05, 1.2]} />
          <meshStandardMaterial color="#9333ea" transparent opacity={0.6} />
        </mesh>
        {/* Right rib */}
        <mesh position={[0.8, 0, 0]} rotation={[0, 0, 0.3]}>
          <cylinderGeometry args={[0.05, 0.05, 1.2]} />
          <meshStandardMaterial color="#9333ea" transparent opacity={0.6} />
        </mesh>
      </group>
    ))}
  </group>
);

const SkeletonArm = ({ position, side }) => (
  <group position={position}>
    {/* Upper arm */}
    <mesh position={[side * 0.5, 0, 0]} rotation={[0, 0, side * 0.2]}>
      <cylinderGeometry args={[0.08, 0.08, 1]} />
      <meshStandardMaterial color="#9333ea" transparent opacity={0.7} />
    </mesh>
    {/* Lower arm */}
    <mesh position={[side * 1.2, -0.8, 0]} rotation={[0, 0, side * 0.1]}>
      <cylinderGeometry args={[0.06, 0.06, 0.8]} />
      <meshStandardMaterial color="#9333ea" transparent opacity={0.7} />
    </mesh>
    {/* Hand */}
    <mesh position={[side * 1.4, -1.4, 0]}>
      <sphereGeometry args={[0.12, 8, 8]} />
      <meshStandardMaterial color="#9333ea" transparent opacity={0.8} />
    </mesh>
  </group>
);

const SkeletonLeg = ({ position, side }) => (
  <group position={position}>
    {/* Upper leg */}
    <mesh position={[side * 0.3, -0.8, 0]}>
      <cylinderGeometry args={[0.1, 0.1, 1.2]} />
      <meshStandardMaterial color="#9333ea" transparent opacity={0.7} />
    </mesh>
    {/* Lower leg */}
    <mesh position={[side * 0.3, -2.2, 0]}>
      <cylinderGeometry args={[0.08, 0.08, 1]} />
      <meshStandardMaterial color="#9333ea" transparent opacity={0.7} />
    </mesh>
    {/* Foot */}
    <mesh position={[side * 0.3, -2.9, 0.3]}>
      <boxGeometry args={[0.2, 0.1, 0.6]} />
      <meshStandardMaterial color="#9333ea" transparent opacity={0.8} />
    </mesh>
  </group>
);

export const AnimatedSkeleton = () => {
  const skeletonRef = useRef();
  
  useFrame((state) => {
    if (skeletonRef.current) {
      // Main skeleton floating animation
      skeletonRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      skeletonRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      
      // Subtle breathing effect
      const breathe = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
      skeletonRef.current.scale.setScalar(breathe);
    }
  });

  return (
    <group ref={skeletonRef} position={[6, 0, -8]} scale={1.2}>
      {/* Skull */}
      <SkeletonSkull position={[0, 3, 0]} />
      
      {/* Spine */}
      <SkeletonSpine position={[0, 2.5, 0]} />
      
      {/* Rib cage */}
      <SkeletonRibCage position={[0, 1.8, 0]} />
      
      {/* Arms */}
      <SkeletonArm position={[0, 1.5, 0]} side={-1} />
      <SkeletonArm position={[0, 1.5, 0]} side={1} />
      
      {/* Legs */}
      <SkeletonLeg position={[0, -1, 0]} side={-1} />
      <SkeletonLeg position={[0, -1, 0]} side={1} />
    </group>
  );
};