/*
  119 - ReplaceAll
  -------
  by Anthony Fu (@antfu) #medium #template-literal

  ### Question

  Implement `ReplaceAll<S, From, To>` which replace the all the substring `From` with `To` in the given string `S`

  For example

  ```ts
  type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
  ```

  > View on GitHub: https://tsch.js.org/119
*/

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
	Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
	Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
	Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
	Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
	Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
	Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
	Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
	Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
	Expect<Equal<ReplaceAll<'', '', ''>, ''>>
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/119/answer
  > View solutions: https://tsch.js.org/119/solutions
  > More Challenges: https://tsch.js.org
*/

/* _____________ Your Code Here _____________ */

type A = ReplaceAll<'foobarfoobar', 'ob', 'b'>

type S = Split<'foobarfoobar', 'ob'>
type Split<
	S extends string,
	D extends string
> = S extends `${infer B}${D}${infer A}` ? [B, ...Split<A, D>] : [S]

type J = Join<S, 'b'>

type Join<S extends string[], D extends string> = S extends [infer I]
	? I
	: S extends [infer F extends string, ...infer O extends string[]]
		? `${F}${D}${Join<O, D>}`
		: never

type ReplaceAll<
	S extends string,
	From extends string,
	To extends string
> = From extends '' ? S : Join<Split<S, From>, To>

// After see solution
// Holy I can do this... Why i don't think!
// type ReplaceAll<
// 	S extends string,
// 	From extends string,
// 	To extends string
// > = From extends ''
// 	? S
// 	: S extends `${infer B}${From}${infer A}`
// 		? `${B}${To}${ReplaceAll<A, From, To>}`
// 		: S
