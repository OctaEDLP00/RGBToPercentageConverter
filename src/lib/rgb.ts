/**
 *
 * @param red
 * @param green
 * @param blue
 * @returns {{[key in 'r' | 'g' | 'b']: number}}
 */
export function RGBToPercentage(
  red: number,
  green: number,
  blue: number,
): { r: number; g: number; b: number } {
  const r = Math.floor((red / 255) * 100)
  const g = Math.floor((green / 255) * 100)
  const b = Math.floor((blue / 255) * 100)
  return { r, g, b }
}

/**
 *
 * @param r - Rojo (0–255)
 * @param g - Verde (0–255)
 * @param b - Azul (0–255)
 * @returns {string} Color en formato hexadecimal (#rrggbb)
 */
export function RGBToHEX(r: string | number, g: string | number, b: string | number): string {
  const toHex = (x: string | number) => Number(x).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
