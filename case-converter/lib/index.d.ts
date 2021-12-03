/**
 * ASCII: 32
 * regex: \s
 */
/**
 * regex: \S
 */
/**
 * ASCII: 33-47
 */
/**
 * ASCII: 48-57
 * regex: \d
 */
/**
 * regex: \D
 */
/**
 * ASCII: 58 - 64
 */
/**
 * ASCII: 65 - 90
 * regex: [A-Z]
 */
declare type UpperCaseChar = Uppercase<LowerCaseChar>;
/**
 * ASCII: 91 - 96
 */
/**
 * ASCII: 97 - 122
 * regex: [a-z]
 */
declare type LowerCaseChar = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';
/**
 * ASCII: 123 - 126
 */
/**
 * almost the same as string but excludes things like \t, \n, etc that is highly unlikely one would want to be explicitely typed
 */
/**
 * regez: \w
 */
/**
 * regez: \W
 */
declare type J<T extends unknown[], Separator extends string = ''> = T extends [] ? '' : T extends [any] ? `${T[0]}` : T extends [any, ...infer Y] ? `${T[0]}${Separator}${J<Y, Separator>}` : never;
declare type InsertBefore<TInput, TSearch, TInsert> = TInput extends J<[infer X, infer Y, infer Z]> ? Y extends TSearch ? J<[X, TInsert, Y, InsertBefore<Z, TSearch, TInsert>]> : J<[X, InsertBefore<J<[Y, Z]>, TSearch, TInsert>]> : TInput;
export declare type SnakeCase<T extends string> = Uppercase<InsertBefore<T, UpperCaseChar, '_'>>;
export declare type DashCase<T extends string> = Lowercase<InsertBefore<T, UpperCaseChar, '-'>>;
export {};
//# sourceMappingURL=index.d.ts.map