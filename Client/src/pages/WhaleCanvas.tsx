import { Canvas } from '@react-three/fiber'
import Experience from '../components/Experience.tsx'

export default function WhaleCanvas () {
    return <>
        <div style={{width: "100vw", height:"100vh"}}>
            <Canvas
                camera={ {
                    fov: 45,
                    near: 0.1,
                    far: 5000,
                    position: [ 0, 20, 0 ]
                } }
            >
                <Experience />
            </Canvas>
        </div>
    </>
}