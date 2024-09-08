import * as THREE from 'three';

export const animate3D = (
    object: THREE.Object3D,
    animation: 'rotate',
    options: { axis?: 'x' | 'y' | 'z'; angle?: number; duration?: number }
) => {
    const axis = options.axis || 'y';
    const angle = options.angle || Math.PI;
    const duration = options.duration || 1000;
    const start = Date.now();

    const rotate = () => {
        const now = Date.now();
        const elapsed = (now - start) / duration;
        object.rotation[axis] = angle * elapsed;

        if (elapsed < 1) {
            requestAnimationFrame(rotate);
        } else {
            object.rotation[axis] = angle;
        }
    };

    rotate();
};
