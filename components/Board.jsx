import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = "/scene.gltf";
  const mesh = useRef(<Mesh />);
  const gltf = useLoader(GLTFLoader, fileUrl);
  useFrame(() => {
    mesh.current.scale.z = 0.03;
    mesh.current.scale.x = 0.03;
    mesh.current.scale.y = 0.03;
  });
  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export default function Board({ handleClick }) {
  return (
    <div className="h-screen w-[60%] cursor-pointer">
      <Canvas onDoubleClick={handleClick}>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </div>
  );
}
