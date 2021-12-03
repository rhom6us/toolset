/// <reference lib="es2015.iterable" />
/// <reference lib="es2021.weakref" />
import { Ctor, Func } from '@rhom6us/func';
export declare function Singleton<T extends Ctor>(ctor: T, keySelector?: Func<ConstructorParameters<T>, any>): T;
//# sourceMappingURL=Singleton.d.ts.map