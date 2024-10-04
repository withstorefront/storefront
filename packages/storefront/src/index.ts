import { Cart } from "./types/carts";
import { Provider } from "./types/providers";
import { writable } from "./utils/stores";

export interface Readable<T> {
    subscribe: (this: void, run: Subscriber<T>, invalidate?: () => void) => Unsubscriber;
}

export type StartStopNotifier<T> = (
    set: (value: T) => void,
    update: (fn: Updater<T>) => void
) => void | (() => void);

export type Subscriber<T> = (value: T) => void;

export type Unsubscriber = () => void;

export type Updater<T> = (value: T) => T;

export interface Writable<T> extends Readable<T> {
    set(this: void, value: T): void;
    update(this: void, updater: Updater<T>): void;
}

export type Storefront = {
    cart: Readable<Cart | null | undefined>,
}

export function createStorefront<P extends Provider>(provider: P): Storefront {
    return {
        cart: writable<Cart | null | undefined>(undefined),
    }
}