import React, { useRef } from 'react'
import {
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

export default function Cube() {
    const textRef = useRef();
    useFrame((state) => textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2);
  return (
      <mesh>
        <boxGeometry/>
        <meshStandardMaterial>
          <RenderTexture attach="map">
            <PerspectiveCamera makeDefault position={[0, 0, 5 ]} />
            <color attach="background" args={["#d8a5d7"]} />
            <Text ref={textRef} fontSize={3} color="#555">
              hello
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </mesh>
  );
}
