import eps from '../../eps'

export function eq2 (a: number, b: number) {
  return Math.abs(a - b) < eps
}

export function neq (a: number, b: number) {
  return !eq2(a, b)
}

export function lt2 (a: number, b: number) {
  return a < b && neq(a, b)
}

export function gt2 (a: number, b: number) {
  return a > b && neq(a, b)
}

export function lte2 (a: number, b: number): boolean {
  return a < b || eq2(a, b)
}

export function gte2 (a: number, b: number): boolean {
  return a > b || eq2(a, b)
}
