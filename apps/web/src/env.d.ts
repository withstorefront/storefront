/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@withstorefront/storefront" />

declare namespace App {
  interface Locals {
    cart: Cart | null;
  }
}
