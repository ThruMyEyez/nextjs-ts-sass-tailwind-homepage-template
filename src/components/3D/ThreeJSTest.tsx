'use client';
import * as THREE from 'three';
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, useFrame, ThreeElements, extend, useThree, ReactThreeFiber } from '@react-three/fiber';

extend({ OrbitControls });

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>;
    }
  }
}

const CamControls = () => {
  const { camera, gl } = useThree();

  return <orbitControls attach={'orbitControls'} args={[camera, gl.domElement]} />;
};
interface CanvasProps {
  children: React.ReactNode;
}

const Floor = (props: ThreeElements['mesh']) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[100, 0.01, 100]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  );
};

const Box = (props: ThreeElements['mesh']) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    // console.log(Math.ceil(1 / delta) / 1000);
    mesh.current.rotation.x -= delta - 0.01;
    mesh.current.rotation.y += 0.006;
    mesh.current.rotation.z += 0.006;
  });

  return (
    <mesh {...props} ref={mesh} scale={1} receiveShadow castShadow>
      <boxGeometry args={[1, 4, 4]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};

const Canvas3DCamera = ({ children }: CanvasProps) => {
  return (
    <div className='w-full h-[50vh] '>
      <Canvas className='bg-zinc-800/30 dark:bg-zinc-900' camera={{ position: [-6, 7, 7], fov: 90 }}>
        {children}
      </Canvas>
    </div>
  );
};

export default function Scene() {
  return (
    <div>
      <Canvas3DCamera>
        <spotLight position={[5, 7, 2]} color={'cornflowerblue'} />
        <pointLight position={[10, 10, 10]} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512} />
        <ambientLight color={'cadetblue'} intensity={0.5} />
        <CamControls />
        <Box position={[3, 2.5, 5]} />
        <Floor />
      </Canvas3DCamera>
    </div>
  );
}
