'use client'
import * as THREE from 'three'
import { useRef } from 'react'

import { Canvas, ThreeElements } from '@react-three/fiber'

interface CanvasProps {
  children: React.ReactNode
}

const Floor = (props: ThreeElements['mesh']) => {
  return (
    <mesh {...props} receiveShadow={true}>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  )
}

const Box = (props: ThreeElements['mesh']) => {
  const mesh = useRef<THREE.Mesh>(null!)
  return (
    <mesh {...props} ref={mesh} scale={1} receiveShadow={true} castShadow={true}>
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}

const Canvas3DCamera = ({ children }: CanvasProps) => {
  return (
    <div className='w-full h-[50vh]'>
      <Canvas shadows={true} className='bg-zinc-800' camera={{ position: [-6, 4, 7] }}>
        {children}
      </Canvas>
    </div>
  )
}

export default function Scene() {
  return (
    <div>
      <Canvas3DCamera>
        <pointLight position={[10, 10, 10]} />
        <ambientLight color={'cadetblue'} intensity={0.5} />
        <Box />
        <Floor />
      </Canvas3DCamera>
    </div>
  )
}

/*
const Floor = (props: any) => {
  return (
    <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  )
}

const PointLight = () => {
  return (
    <mesh position={[0, 3, 0]}>
      <pointLight castShadow />
      <meshPhongMaterial emissive={'yellow'} />
    </mesh>
  )
}

const Box = () => {
  return (
    <mesh rotateX={3} rotateY={0.2} recieveShadow={true} castShadow={true}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  )
}

const Canvas3DRenderBox = ({ children }: CanvasProps) => {
  return (
    <div className="w-full h-[100vh] ">
      <Canvas shadows={true} className="bg-slate-700">
        <ambientLight color={'white'} intensity={0.3} />
        {children}
      </Canvas>
    </div>
  )
}

export default function Canvas3D() {
  return <Canvas3DRenderBox></Canvas3DRenderBox>
}
*/
