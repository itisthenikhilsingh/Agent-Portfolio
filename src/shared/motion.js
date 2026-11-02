import { createContext } from 'react';

export const MotionContext = createContext(true);
export const EASE = [0.22, 1, 0.36, 1];

export function getMotionPreference() {
  try { return localStorage.getItem('nikhil-motion') !== 'off'; } catch { return true; }
}
