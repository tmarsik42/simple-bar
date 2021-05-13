import { PywalColors } from './pywal-colors'

const WITH_PYWAL = false

const overrideColors = WITH_PYWAL ? { ...PywalColors } : {}

export const Theme = {
  main: '#1B222D',
  mainAlt: '#98A8C5',
  minor: '#39465E',
  red: '#E78482',
  green: '#8FC8BB',
  yellow: '#FFD484',
  orange: '#FFB374',
  blue: '#6DB3CE',
  magenta: '#AD82CB',
  cyan: '#7EDDDE',
  foreground: '#FFFFFF',
  lightGrey: 'rgba(0, 0, 0, 0.05)',
  ...overrideColors,
  defaultFont: 'JetBrains Mono, monospace',
  lightShadow: '0 5px 10px rgba(0, 0, 0, 0.24)',
  mediumShadow: '0 8px 30px rgba(0, 0, 0, 0.24)',
  largeShadow: '0 30px 60px rgba(0, 0, 0, 0.24)',
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
}