import 'setimmediate';

const w = globalThis as any;

/**
 * Schedules a macrotask to run after the current events have been processed.
 *
 * Unlike microtasks (scheduled using the Node 0.10+ `process.nextTick` API),
 * where scheduling additional microtasks inside a microtask will cause them
 * to be run inside the same microtask checkpoint, any macrotasks scheduled
 * inside a macrotask will not be executed until the next iteration
 * of the event loop.
 *
 * @param callback The macrotask to schedule.
 * @param args The arguments to pass to the macrotask callback.
 *
 * @return The ID of the macrotask, which can be used to abort
 *         the macrotask with `clearImmediate`.
 */
const si: <T extends unknown[]>(callback: (...args: T) => void, ...args: T) => number = w.setImmediate;

/**
 * Aborts the specified macrotask before it's run.
 *
 * @param handle The ID of the macrotask to remove from the macrotask queue.
 */

const ci: (handle: number) => void = w.clearImmediate;

try {
    delete w.setImmediate;
    delete w.clearImmediate;
}
catch (er) { } // eslint-disable-line no-empty


export { si as setImmediate, ci as clearImmediate };
export default si;
