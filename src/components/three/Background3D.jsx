import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 200 }) {
    const mesh = useRef();

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

            // Gradient colors between cyan and purple
            const t = Math.random();
            colors[i * 3] = 0.02 + t * 0.53; // R: 0.02 to 0.55
            colors[i * 3 + 1] = 0.71 - t * 0.35; // G: 0.71 to 0.36
            colors[i * 3 + 2] = 0.83 + t * 0.13; // B: 0.83 to 0.96
        }

        return { positions, colors };
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        mesh.current.rotation.x = time * 0.02;
        mesh.current.rotation.y = time * 0.03;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.positions.length / 3}
                    array={particles.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particles.colors.length / 3}
                    array={particles.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

function FloatingMesh() {
    const mesh = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        mesh.current.position.y = Math.sin(time * 0.5) * 0.5;
        mesh.current.rotation.x = time * 0.1;
        mesh.current.rotation.y = time * 0.15;
    });

    return (
        <mesh ref={mesh} position={[3, 0, -5]}>
            <icosahedronGeometry args={[1.5, 1]} />
            <meshBasicMaterial
                color="#06b6d4"
                wireframe
                transparent
                opacity={0.15}
            />
        </mesh>
    );
}

function FloatingTorus() {
    const mesh = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        mesh.current.position.y = Math.sin(time * 0.3 + 1) * 0.5;
        mesh.current.rotation.x = time * 0.2;
        mesh.current.rotation.z = time * 0.1;
    });

    return (
        <mesh ref={mesh} position={[-4, 1, -6]}>
            <torusGeometry args={[1, 0.3, 16, 50]} />
            <meshBasicMaterial
                color="#8b5cf6"
                wireframe
                transparent
                opacity={0.12}
            />
        </mesh>
    );
}

export default function Background3D() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.5} />
                <Particles count={300} />
                <FloatingMesh />
                <FloatingTorus />
            </Canvas>
        </div>
    );
}
