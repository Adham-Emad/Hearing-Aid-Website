"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { RoundedBox, Sphere, Cylinder } from "@react-three/drei"
import type * as THREE from "three"

export function HearingAidModel() {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (groupRef.current && hovered) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.05 : 1}
    >
      {/* Main body of hearing aid */}
      <RoundedBox args={[1.2, 0.8, 0.4]} radius={0.15} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial color="#4a90e2" metalness={0.6} roughness={0.3} />
      </RoundedBox>

      {/* Microphone section */}
      <Cylinder args={[0.15, 0.15, 0.3]} position={[0, 0.55, 0]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color="#2c5aa0" metalness={0.7} roughness={0.2} />
      </Cylinder>

      {/* Speaker/receiver tube */}
      <Cylinder args={[0.08, 0.08, 1.5]} position={[0, -0.4, 0]} rotation={[0, 0, Math.PI / 6]}>
        <meshStandardMaterial color="#e0e0e0" metalness={0.5} roughness={0.4} transparent opacity={0.8} />
      </Cylinder>

      {/* Ear tip */}
      <Sphere args={[0.25, 32, 32]} position={[-0.8, -1.1, 0]}>
        <meshStandardMaterial color="#f0f0f0" metalness={0.3} roughness={0.6} />
      </Sphere>

      {/* Control button */}
      <Cylinder args={[0.12, 0.12, 0.05]} position={[0.4, 0, 0.25]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#1a4d8f" metalness={0.8} roughness={0.2} />
      </Cylinder>

      {/* Volume indicator */}
      <RoundedBox args={[0.15, 0.05, 0.05]} radius={0.02} smoothness={2} position={[-0.4, 0, 0.25]}>
        <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.5} />
      </RoundedBox>

      {/* Battery compartment indicator */}
      <RoundedBox args={[0.3, 0.15, 0.05]} radius={0.02} smoothness={2} position={[0, -0.3, -0.23]}>
        <meshStandardMaterial color="#333333" metalness={0.4} roughness={0.6} />
      </RoundedBox>
    </group>
  )
}
