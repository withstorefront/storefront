import type { Cart, Provider } from "../types.d.ts";
import { writable } from "./utils/stores.js";

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

export interface Storefront {
  cart: Readable<Cart | null | undefined>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createStorefront<P extends Provider>(provider: P): Storefront {
  return {
    cart: writable<Cart | null | undefined>(undefined),
  };
}
