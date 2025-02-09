import * as React from 'react';
import { SquareTextProps, ReactSquareTextOptions, MonospacedFont } from './interfaces';

/**
 * SquareText component that renders the provided text in a square format.
 *
 * @param text - The text to display in a square arrangement.
 * @param radius - The radius of the square.
 * @param id - The optional ID of the container element.
 * @param options - Optional configuration for color, font, and other styles.
 *
 * @returns JSX.Element - The JSX that represents the square text.
 */
declare const SquareText: React.FC<SquareTextProps>;

export default SquareText;
