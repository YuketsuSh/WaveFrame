import $ from 'jquery';

export const animateJQuery = (
    element: HTMLElement,
    animation: 'fade' | 'slide' | 'toggle',
    options: {
        duration?: number;
        iteration?: number;
        direction?: 'normal' | 'reverse'
    }
) => {
    if (animation === 'fade') {
        $(element).fadeToggle(options.duration || 400);
    } else if (animation === 'slide') {
        $(element).slideToggle(options.duration || 400);
    }
};

export const fadeJQuery = (element: HTMLElement) => animateJQuery(element, 'fade', { duration: 400 });
export const slideJQuery = (element: HTMLElement) => animateJQuery(element, 'slide', { duration: 400 });
