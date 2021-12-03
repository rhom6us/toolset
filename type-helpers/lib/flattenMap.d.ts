import { Func } from '@rhom6us/func';
import { fromEntries } from '@rhom6us/obj';
import { Cast } from './cast';
import { Inc } from './counter';
import { DeepDictionary, DeepDictionaryItem } from './deep-record';
declare type _flattenMap<T extends DeepDictionaryItem<Func>, prefix extends string = '', CurrentDepth extends number = 0> = CurrentDepth extends 10 ? never : T extends DeepDictionary<Func> ? {
    [K in keyof T]: _flattenMap<T[K], prefix extends '' ? K : `${prefix}.${Cast<K, string>}`, Inc<CurrentDepth>>;
}[keyof T] : [prefix, T];
export declare type flattenMap<T extends DeepDictionary<Func>> = fromEntries<_flattenMap<T>>;
export declare function flattenMap<T extends DeepDictionary<Func>>(map: T): flattenMap<T>;
export {};
//# sourceMappingURL=flattenMap.d.ts.map