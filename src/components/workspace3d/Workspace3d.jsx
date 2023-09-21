import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from '../workspace3d/Scene'

export default function WorkspaceCanvas() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows flat linear>
        <Scene />
        <OrbitControls />
      </Canvas>
    </Suspense>
  )
}
