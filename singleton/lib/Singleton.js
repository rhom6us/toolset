/// <reference lib="es2015.iterable" />
/// <reference lib="es2021.weakref" />
import { KindaWeakMap } from '@rhom6us/kinda-weak-map';
// export function Singleton<T extends Ctor>(ctor: T): T {
//     return class Singleton extends ctor {
//         static #instance?: WeakRef<Singleton>;
//         constructor(...args: any[]) {
//             const value = Singleton.#instance?.deref();
//             if (value) {
//                 return value;
//             }
//             super(...args);
//             Singleton.#instance = new WeakRef(this);
//         }
//     };
// }
const defaultKeySelector = (function () {
    function sortFn([keyA], [keyB]) {
        return keyA > keyB ? 1 : keyA < keyB ? -1 : 0;
    }
    function mapFn([key, val]) {
        return [key, norm(val)];
    }
    function norm(val) {
        if (!val) {
            return val;
        }
        if (Array.isArray(val)) {
            return val.map(norm);
        }
        if (val[Symbol.iterator]) {
            return norm(Array.from(val));
        }
        if (typeof val === 'object') {
            // check for custom toString (e.g. Date, Function, Symbol, etc)
            if (val.toString !== Object.prototype.toString) {
                return val.toString();
            }
            // recursively sort and normalize all the properties
            return Object.fromEntries(Object.entries(val)
                .sort(sortFn)
                .map(mapFn));
        }
        return val;
    }
    return function defaultKeySelector(...args) {
        let result = norm(args[0]);
        if (result.length < 2) {
            result = result[0];
        }
        switch (Array.isArray(result) ? 'array' : result.type) {
            case 'object':
            case 'array':
                return JSON.stringify(result);
            default:
                return result;
        }
    };
}());
export function Singleton(ctor, keySelector = defaultKeySelector) {
    return class Singleton extends ctor {
        static #cache;
        static {
            this.#cache = new KindaWeakMap();
        }
        constructor(...args) {
            const key = keySelector(...args);
            const value = Singleton.#cache.get(key);
            if (value) {
                return value;
            }
            super(...args);
            Singleton.#cache.set(key, this);
        }
    };
}
//# sourceMappingURL=Singleton.js.map