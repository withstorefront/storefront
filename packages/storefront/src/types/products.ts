import type { Image } from "./images"
import type { Measurement } from "./measurements"

export type ProductPrice = {
    /**
     * The price after all discounts are applied.
     */
    value: number
    /**
     * The currency code for the price. This is a 3-letter ISO 4217 code.
     * @example USD
     */
    currencyCode?: 'USD' | 'EUR' | 'ARS' | 'GBP' | string
    /**
     * The retail price of the product. This can be used to mark a product as on sale, when `retailPrice` is higher than the price a.k.a `value`.
     */
    retailPrice?: number
}

export type ProductOption = {
    /**
   * The unique identifier for the option.
   */
    id: string
    /**
     * The product option’s name.
     * @example `Color` or `Size`
     */
    displayName: string
    /**
     * List of option values.
     * @example `["Red", "Green", "Blue"]`
     */
    values: ProductOptionValues[]
}

export type ProductOptionValues = {
    /**
     * A string that uniquely identifies the option value.
     */
    label: string
    /**
     * List of hex colors used to display the actual colors in the swatches instead of the name.
     */
    hexColors?: string[]
}

export interface ProductVariant {
    /**
     *  The unique identifier for the variant.
     */
    id: string
    /**
     * The SKU (stock keeping unit) associated with the product variant.
     */
    sku?: string
    /**
     * The product variant’s name, or the product's name.
     */
    name: string
    /**
     * List of product options.
     */
    options: ProductOption[]
    /**
     * The product variant’s price after all discounts are applied.
     */
    price?: ProductPrice
    /**
     * The retail price of the product. This can be used to mark a product as on sale, when `retailPrice` is higher than the `price`.
     */
    retailPrice?: ProductPrice
    /**
     * Indicates if the variant is available for sale.
     */
    availableForSale?: boolean
    /**
     * Whether a customer needs to provide a shipping address when placing an order for the product variant.
     */
    requiresShipping?: boolean
    /**
     * The image associated with the variant.
     */
    image?: Image
    /**
     * The variant's weight. If a weight was not explicitly specified on the
     * variant, this will be the product's weight.
     */
    weight?: Measurement
    /**
     * The variant's height. If a height was not explicitly specified on the
     * variant, this will be the product's height.
     */
    height?: Measurement
    /**
     * The variant's width. If a width was not explicitly specified on the
     * variant, this will be the product's width.
     */
    width?: Measurement
    /**
     * The variant's depth. If a depth was not explicitly specified on the
     * variant, this will be the product's depth.
     */
    depth?: Measurement
}

export type Product = {
    /**
     *  The unique identifier for the product.
     */
    id: string
    /**
     * The name of the product.
     */
    name: string
    /**
     * Stripped description of the product, single line.
     */
    description: string
    /**
     * The description of the product, complete with HTML formatting.
     */
    descriptionHtml?: string
    /**
     * The SKU (stock keeping unit) associated with the product.
     */
    sku?: string
    /**
     * A human-friendly unique string for the product, automatically generated from its title.
     */
    slug?: string
    /**
     * Relative URL on the storefront for the product.
     */
    path?: string
    /**
     * List of images associated with the product.
     */
    images: Image[]
    /**
     * List of the product’s variants.
     */
    variants: ProductVariant[]
    /**
     * The product's base price. Could be the minimum value, or default variant price.
     */
    price: ProductPrice
    /**
     * List of product's options.
     */
    options: ProductOption[]
    /**
     * The product’s vendor name.
     */
    vendor?: string
}