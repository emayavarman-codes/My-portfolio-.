import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from "@react-three/drei";
import { Suspense } from "react";

const AnimatedSphere = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} position={[3, 0, 0]}>
        <MeshDistortMaterial
          color="#00ffff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const AnimatedTorus = () => {
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <Torus args={[1.5, 0.4, 32, 64]} position={[-3, 1, -2]} rotation={[Math.PI / 4, 0, 0]}>
        <meshStandardMaterial
          color="#a855f7"
          roughness={0.1}
          metalness={0.9}
          emissive="#a855f7"
          emissiveIntensity={0.3}
        />
      </Torus>
    </Float>
  );
};

const AnimatedBox = () => {
  return (
    <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1}>
      <Box args={[1.2, 1.2, 1.2]} position={[0, -2, -1]} rotation={[Math.PI / 6, Math.PI / 4, 0]}>
        <meshStandardMaterial
          color="#06b6d4"
          roughness={0.15}
          metalness={0.85}
          emissive="#06b6d4"
          emissiveIntensity={0.2}
        />
      </Box>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-5">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
          <spotLight
            position={[0, 10, 5]}
            angle={0.3}
            penumbra={1}
            intensity={0.8}
            color="#ffffff"
          />
          <AnimatedSphere />
          <AnimatedTorus />
          <AnimatedBox />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
