/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #medium #template-literal

  ### Question

  Compute the length of a string literal, which behaves like `String#length`.

  > View on GitHub: https://tsch.js.org/298
*/

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
	Expect<Equal<LengthOfString<''>, 0>>,
	Expect<Equal<LengthOfString<'kumiko'>, 6>>,
	Expect<Equal<LengthOfString<'reina'>, 5>>,
	Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/298/answer
  > View solutions: https://tsch.js.org/298/solutions
  > More Challenges: https://tsch.js.org
*/

/* _____________ Your Code Here _____________ */

type A = LengthOfString<''>
type B = LengthOfString<'kumiko'>

// After see solutions
type LengthOfString<
	S extends string,
	T extends string[] = []
> = S extends `${string}${infer B}`
	? LengthOfString<B, [...T, string]>
	: T['length']

// First idea
// type Split<S extends string, D extends string> = S extends ''
// 	? []
// 	: S extends `${infer B}${D}${infer A}`
// 		? [B, ...Split<A, D>]
// 		: [S]
//
// type LengthOfString<S extends string> = S extends ''
// 	? 0
// 	: Split<S, ''>['length']
