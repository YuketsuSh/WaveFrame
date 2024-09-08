import { fadeIn, animateJS, animate3D } from '../src/index';
import * as THREE from 'three';


test('fadeIn should apply fade-in animation to an element', () => {
    document.body.innerHTML = '<div id="test-element"></div>';
    const element = document.getElementById('test-element') as HTMLElement;

    fadeIn(element);

    expect(element.style.animation).toContain('fade-in');
});

test('animateJS should apply bounce animation using JS', () => {
    document.body.innerHTML = '<div id="js-element"></div>';
    const element = document.getElementById('js-element') as HTMLElement;

    jest.useFakeTimers();

    animateJS(element, 'bounce', { duration: 1000 });

    jest.advanceTimersByTime(1000);

    expect(element.style.transform).toContain('translateY');
});

test('animate3D should rotate a Three.js object', () => {
    const object = new THREE.Mesh();

    jest.useFakeTimers();

    animate3D(object, 'rotate', { axis: 'y', angle: Math.PI, duration: 1000 });

    jest.advanceTimersByTime(1000);

    expect(object.rotation.y).toBeGreaterThan(0);
});