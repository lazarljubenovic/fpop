import { eq2, gt2, lt2 } from '../binary'

export function isZero (a: number) {
  return eq2(0, a)
}

export function isPositive (a: number) {
  return gt2(a, 0)
}

export function isNegative (a: number) {
  return lt2(a, 0)
}
