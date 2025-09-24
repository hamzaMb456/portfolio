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