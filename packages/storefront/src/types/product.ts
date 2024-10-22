import { SelectedOption } from "./cart.js";
import type { Image, Measurement } from "./common.js";

export interface ProductPrice {
  /**
   * The price after all discounts are applied.
   */
  value: number;
  /**
   * The currency code for the price. This is a 3-letter ISO 4217 code.
   * @example USD
   */
  currencyCode?: "USD" | "EUR" | "ARS" | "GBP" | string;
  /**
   * The retail price of the product. This can be used to mark a product as on sale, when `retailPrice` is higher than the price a.k.a `value`.
   */
  retailPrice?: number;
}

export interface ProductOption {
  /**
   * The unique identifier for the option.
   */
  id: string;
  /**
   * The product option’s name.
   * @example `Color` or `Size`
   */
  displayName: string;
  /**
   * List of option values.
   * @example `["Red", "Green", "Blue"]`
   */
  values: ProductOptionValues[];
}

export interface ProductOptionValues {
  /**
   * A string that uniquely identifies the option value.
   */
  label: string;
  /**
   * List of hex colors used to display the actual colors in the swatches instead of the name.
   */
  hexColors?: string[];
}

export interface ProductVariant {
  /**
   *  The unique identifier for the variant.
   */
  id: string;
  /**
   * The SKU (stock keeping unit) associated with the product variant.
   */
  sku?: string;
  /**
   * The product variant’s name, or the product's name.
   */
  name: string;
  /**
   * List of product options.
   */
  options: SelectedOption[];
  /**
   * The product variant’s price after all discounts are applied.
   */
  price?: ProductPrice;
  /**
   * The retail price of the product. This can be used to mark a product as on sale, when `retailPrice` is higher than the `price`.
   */
  retailPrice?: ProductPrice;
  /**
   * Indicates if the variant is available for sale.
   */
  availableForSale?: boolean;
  /**
   * Whether a customer needs to provide a shipping address when placing an order for the product variant.
   */
  requiresShipping?: boolean;
  /**
   * The image associated with the variant.
   */
  image?: Image;
  /**
   * The variant's weight. If a weight was not explicitly specified on the
   * variant, this will be the product's weight.
   */
  weight?: Measurement;
  /**
   * The variant's height. If a height was not explicitly specified on the
   * variant, this will be the product's height.
   */
  height?: Measurement;
  /**
   * The variant's width. If a width was not explicitly specified on the
   * variant, this will be the product's width.
   */
  width?: Measurement;
  /**
   * The variant's depth. If a depth was not explicitly specified on the
   * variant, this will be the product's depth.
   */
  depth?: Measurement;
}

export interface Product {
  /**
   *  The unique identifier for the product.
   */
  id: string;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * Stripped description of the product, single line.
   */
  description: string;
  /**
   * The description of the product, complete with HTML formatting.
   */
  descriptionHtml?: string;
  /**
   * The SKU (stock keeping unit) associated with the product.
   */
  sku?: string;
  /**
   * A human-friendly unique string for the product, automatically generated from its title.
   */
  slug?: string;
  /**
   * Relative URL on the storefront for the product.
   */
  path?: string;
  /**
   * List of images associated with the product.
   */
  images: Image[];
  /**
   * The featured image associated with the product.
   */
  featuredImage?: Image;
  /**
   * List of the product’s variants.
   */
  variants: ProductVariant[];
  /**
   * The product's base price. Could be the minimum value, or default variant price.
   */
  price: ProductPrice;
  /**
   * List of product's options.
   */
  options: ProductOption[];
  /**
   * The product’s vendor name.
   */
  vendor?: string;
}

export type ProductFacetType = "MULTI_SELECT" | "SINGLE_SELECT" | "PRICE_RANGE";

export type ProductFacet = ProductFacetPriceRange | ProductFacetList;

export interface ProductFacetPriceRange {
  /**
   * The unique identifier for the facet.
   */
  id: string;
  /**
   * The product facet's name.
   * @example `Color` or `Size`
   */
  label: string;
  value: {
    min?: number | undefined;
    max?: number | undefined;
  };
  /**
   * The type of control a facet has over product filtering.
   */
  type: "PRICE_RANGE";
}

export interface ProductFacetList {
  /**
   * The unique identifier for the facet.
   */
  id: string;
  /**
   * The product facet's name.
   * @example `Color` or `Size`
   */
  label: string;
  /**
   * List of facet values.
   * @example `["Red", "Green", "Blue"]`
   */
  values: ProductFacetItem[];
  /**
   * The type of control a facet has over product filtering.
   */
  type: "MULTI_SELECT" | "SINGLE_SELECT";
}

export interface ProductFacetItem {
  /**
   * The unique identifier for the facet item.
   */
  id: string;
  /**
   * The product facet item's name.
   * @example `Color` or `Size`
   */
  label: string;
  /**
   * Unique value for the facet value.
   */
  value: string;
  /**
   * The number of products that match the facet value.
   */
  productCount?: number | undefined;
}
