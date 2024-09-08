import * as BABYLON from 'babylonjs';

export const animateBabylon = (
    mesh: BABYLON.Mesh,
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
        mesh.rotation[axis] = angle * elapsed;

        if (elapsed < 1) {
            requestAnimationFrame(rotate);
        } else {
            mesh.rotation[axis] = angle;
        }
    };

    rotate();
};
