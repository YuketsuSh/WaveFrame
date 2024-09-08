export const animateCSS = (
    element: HTMLElement,
    animation: string,
    options: {
        duration?: number;
        delay?: number;
        iteration?: number;
        direction?: 'normal' | 'reverse' | 'alternate'
    }
) => {
    element.style.animation = `${animation} ${options.duration || 1000}ms ease ${options.delay || 0}ms ${options.iteration || 1} ${options.direction || 'normal'}`;

    element.addEventListener('animationend', () => {
        element.style.animation = '';
    });
};

export const fadeIn = (element: HTMLElement) => animateCSS(element, 'fade-in', {});
export const fadeOut = (element: HTMLElement) => animateCSS(element, 'fade-out', {});
export const slideLeft = (element: HTMLElement) => animateCSS(element, 'slide-left', {});
export const slideRight = (element: HTMLElement) => animateCSS(element, 'slide-right', {});
export const bounce = (element: HTMLElement) => animateCSS(element, 'bounce', {});
export const zoomIn = (element: HTMLElement) => animateCSS(element, 'zoom-in', {});
export const zoomOut = (element: HTMLElement) => animateCSS(element, 'zoom-out', {});
export const rotate = (element: HTMLElement) => animateCSS(element, 'rotate', {});
