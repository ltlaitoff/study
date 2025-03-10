/*
  15 - Last of Array
  -------
  by Anthony Fu (@antfu) #medium #array

  ### Question

  > TypeScript 4.0 is recommended in this challenge

  Implement a generic `Last<T>` that takes an Array `T` and returns its last element.

  For example

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type tail1 = Last<arr1> // expected to be 'c'
  type tail2 = Last<arr2> // expected to be 1
  ```

  > View on GitHub: https://tsch.js.org/15
*/

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
	Expect<Equal<Last<[]>, never>>,
	Expect<Equal<Last<[2]>, 2>>,
	Expect<Equal<Last<[3, 2, 1]>, 1>>,
	Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/15/answer
  > View solutions: https://tsch.js.org/15/solutions
  > More Challenges: https://tsch.js.org
*/

/* _____________ Your Code Here _____________ */

type B = Last<[]>
type C = Last<[() => 123, { a: string }]>
type A = Last<[3, 2, 1]>

type Last<T extends readonly unknown[]> = T extends [...any, infer Item]
	? Item
	: never

// type Test<T extends any[]>

// type Test<T extends any[]> = { [P in keyof T]: T[P]}
// type Last<T extends any[]> = T extends [] ? never : T[0]

// type Subs<A extends any[], N extends number>

// type LengthOfArray<T extends readonly unknown[]> = T['length']
//
// type CreateArrayWithLength<
// 	L extends number,
// 	U extends unknown[] = []
// > = U['length'] extends L ? U : CreateArrayWithLength<L, [...U, 0]>

// type Pop<T extends unknown[]> = T extends [...infer Item, any] ? Item : T

// type PopN<
// 	A extends unknown[],
// 	N extends number,
// 	T extends unknown[] = []
// > = T['length'] extends N ? A : PopN<Pop<A>, N, [...T, 0]>

// type Subtract<B extends number, N extends number = 1> = LengthOfArray<PopN<
// 	CreateArrayWithLength<B>,
// 	N
// >>

// U['length'] extends N ? N : Subtract<N, [...U, 0]>

// type Ta = Subtract<10, 5>

//
// type Last<T extends any[]> = T extends []
// 	? never
// 	: T['length'] extends 1
// 		? T[0]
// 		: T[Sub<T['length'], 1>]// : { [P in keyof T as P extends Subtract<T['length'], 1> ? P : never]: T[P] }
//
// type GetRange<
//   N extends number,
//   Acc extends Array<number> = [],
// > = Acc["length"] extends N ? Acc : GetRange<N, [0, ...Acc]>;
//
// type Sub<
//   A extends number,
//   B extends number,
//   Num1 extends Array<number> = GetRange<A>,
//   Num2 extends Array<number> = GetRange<B>,
// > = Num2 extends [...Num1, ...infer R] // A < B; res = -ve
//   ? `-${R["length"]}`
//   : Num1 extends [...Num2, ...infer T] // A > B; res = +ve
//   ? T["length"]
//   : 0;
// //
// // type PopN<
// // 	T extends unknown[],
// // 	U extends number = 1,
// // 	V extends any[] = []
// // > = V['length'] extends U ? T : PopN<Pop<T>, U, [...V, 0]>
// //
// // type LengthOfArray<T extends readonly unknown[]> = T['length']
// //
// type CreateArrayOfLength<
// 	T extends number,
// 	U extends unknown[] = []
// > = U['length'] extends T ? U : CreateArrayOfLength<T, [...U, 0]>
//
// type Subtract<T extends number, U extends number> = LengthOfArray<
// 	PopN<CreateArrayOfLength<T>, U>
// >
//
// type Concat<T extends unknown[], U extends unknown[]> = U extends [
// 	any,
// 	...infer Tail
// ]
// 	? Concat<[...T, U[0]], Tail>
// 	: T
//
// type Pop<T extends unknown[]> = T extends [...infer Head, any] ? Head : T
