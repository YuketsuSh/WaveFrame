export const animateJS = (
    element: HTMLElement,
    animation: 'bounce' | 'rotate',
    options: {
        duration?: number;
        iteration?: number;
        axis?: 'x' | 'y' | 'z';
        angle?: number;
    }
) => {
    let start: number;
    const duration = options.duration || 1000;
    const angle = options.angle || 360;
    const iteration = options.iteration || 1;

    const bounce = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const factor = Math.sin((progress / duration) * Math.PI);
        element.style.transform = `translateY(${factor * 20}px)`;

        if (progress < duration) {
            requestAnimationFrame(bounce);
        } else {
            element.style.transform = '';
        }
    };

    const rotate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const factor = progress / duration;
        element.style.transform = `rotate(${factor * angle}deg)`;

        if (progress < duration) {
            requestAnimationFrame(rotate);
        } else {
            element.style.transform = `rotate(${angle}deg)`;
        }
    };

    if (animation === 'bounce') {
        requestAnimationFrame(bounce);
    } else if (animation === 'rotate') {
        requestAnimationFrame(rotate);
    }
};
