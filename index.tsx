import React from 'react';
import { SquareTextProps, ReactSquareTextOptions, MonospacedFont } from './interfaces';

const SquareTextWriter: React.FC<SquareTextProps> = ({
  text,
  size,
  id,
  options = {}
}) => {
  const monospacedFonts = [
    'Menlo',
    'Courier New',
    'Consolas',
    'Lucida Console',
    'Monaco',
    'monospace'
  ];

  // Determine the font
  let fontFamily = 'Menlo, monospace';
  if (options.fontFamily === 'customFont' && options.customFont) {
    fontFamily = options.customFont;
  } else if (monospacedFonts.includes(options.fontFamily || '')) {
    fontFamily = options.fontFamily || 'Menlo';
  }

  const fontSize = options.fontSize || 16;
  const halfFontSize = fontSize / 2; // To center each letter better

  const letters = text.split('');
  const fontSizex2 = fontSize * 1;
  const newsize = size - fontSizex2;
  const perimeter = newsize * 4; // Perimeter of the square
  const spacing = perimeter / letters.length; // Uniform spacing

  return (
    <div
      id={id}
      aria-label={text}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '40px'
      }}
    >
      {letters.map((letter, index) => {
        const distance = index * spacing; // Distance along the perimeter
        const newDistanceToRest = (distance / 100) * 0.25;
        const newDistance = distance - newDistanceToRest;
        let x = 0,
          y = 0,
          rotation = 0;

        if (distance < newsize) {
          // Top side (left → right)
          x = distance;
          y = halfFontSize;
          rotation = 0;
        } else if (distance < newsize * 2) {
          // Right side (top → bottom)
          x = newsize;
          y = newDistance - newsize + fontSize;
          rotation = 90;
        } else if (distance < newsize * 3) {
          // Bottom side (right → left)
          x = newsize - (newDistance - newsize * 2);
          y = newsize + halfFontSize;
          rotation = 180;
        } else {
          // Left side (bottom → top)
          x = 0;
          y = newsize - (newDistance - newsize * 3);
          rotation = 270;
        }

        return (
          <p
            key={index}
            style={{
              position: 'absolute',
              left: `${x}px`,
              top: `${y}px`,
              transform: `rotate(${rotation}deg)`,
              color: options.color || '#000000',
              fontFamily: fontFamily,
              fontWeight: options.fontWeight || 400,
              fontSize: fontSize,
              margin: 0,
              lineHeight: 0,
              padding: 0,
              whiteSpace: 'nowrap'
            }}
          >
            {letter}
          </p>
        );
      })}
    </div>
  );
};

export default SquareTextWriter;
