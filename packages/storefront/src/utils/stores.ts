/** Pair of subscriber and invalidator. */
type SubscribeInvalidateTuple<T> = [Subscriber<T>, () => void];

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

/**
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
export function safe_not_equal(a: unknown, b: unknown): boolean {
  return a != a
    ? b == b
    : a !== b ||
        (a !== null && typeof a === "object") ||
        typeof a === "function";
}

export interface Readable<T> {
  subscribe: (
    this: void,
    run: Subscriber<T>,
    invalidate?: () => void,
  ) => Unsubscriber;
}

export type StartStopNotifier<T> = (
  set: (value: T) => void,
  update: (fn: Updater<T>) => void,
) => void | (() => void);

export type Subscriber<T> = (value: T) => void;

export type Unsubscriber = () => void;

export type Updater<T> = (value: T) => T;

export interface Writable<T> extends Readable<T> {
  set(this: void, value: T): void;
  update(this: void, updater: Updater<T>): void;
}

export function readable<T>(
  value: T,
  start: StartStopNotifier<T>,
): Readable<T> {
  return {
    subscribe: writable(value, start).subscribe,
  };
}

export function writable<T>(
  value: T,
  start: StartStopNotifier<T> = noop,
): Writable<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const subscriber_queue: (SubscribeInvalidateTuple<any> | any)[] = [];

  let stop: Unsubscriber | null = null;

  const subscribers = new Set<SubscribeInvalidateTuple<T>>();

  function set(new_value: T) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        // store is ready
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }

  function update(fn: Updater<T>) {
    set(fn(/** @type {T} */ value));
  }

  function subscribe(run: Subscriber<T>, invalidate: Unsubscriber = noop) {
    const subscriber: SubscribeInvalidateTuple<T> = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set, update) || noop;
    }
    run(/** @type {T} */ value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe } as Writable<T>;
}
