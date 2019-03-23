import * as unary from '../unary'
import * as binary from '../binary'

function binaryToNaryPredicate<T> (binaryPred: (a: T, b: T) => boolean) {
  return function (...ns: T[]): boolean {
    for (let i = 0; i < ns.length - 1; i++) {
      const a = ns[i]
      const b = ns[i + 1]
      if (binaryPred(a, b)) continue
      return false
    }
    return true
  }
}

export const eq = binaryToNaryPredicate(binary.eq2)
export const lt = binaryToNaryPredicate(binary.lt2)
export const gt = binaryToNaryPredicate(binary.gt2)
export const lte = binaryToNaryPredicate(binary.lte2)
export const gte = binaryToNaryPredicate(binary.gte2)

export const areZero = (...ns: number[]) => ns.every(unary.isZero)
export const arePositive = (...ns: number[]) => ns.every(unary.isPositive)
export const areNegative = (...ns: number[]) => ns.every(unary.isNegative)
