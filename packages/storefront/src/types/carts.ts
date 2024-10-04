import type { Discount } from "./discounts"
import type { ProductVariant } from "./products"

export type SelectedOption = {
    /**
     * The unique identifier for the option.
     */
    id?: string
    /**
     *  The product option’s name, such as "Color" or "Size".
     */
    name: string
    /**
     * The product option’s value, such as "Red" or "XL".
     */
    value: string
}

export type CartLineItem = {
    /**
     * The unique identifier for the line item.
     */
    id: string
    /**
     * The unique identifier for the product variant.
     */
    variantId: string
    /**
     * The unique identifier for the product, if the variant is not provided.
     */
    productId: string
    /**
     * This is usually the product's name.
     */
    name: string
    /**
     * The quantity of the product variant in the line item.
     */
    quantity: number
    /**
     * List of discounts applied to the line item.
     */
    discounts: Discount[]
    /**
     * A human-friendly unique string automatically generated from the product’s name.
     */
    path: string
    /**
     * The product variant.
     */
    variant: ProductVariant
    /**
     * List of selected options, to be used when displaying the line item, such as Color: Red, Size: XL.
     */
    options?: SelectedOption[]
}

/**
 * Shopping cart, a.k.a Checkout
 */
export type Cart = {
    /**
     * The unique identifier for the cart.
     */
    id: string
    /**
     * ID of the customer to which the cart belongs.
     */
    customerId?: string
    /**
     * The URL of the cart.
     */
    url?: string
    /**
     * The email assigned to this cart.
     */
    email?: string
    /**
     *  The date and time when the cart was created.
     */
    createdAt: string
    /**
     * The currency used for this cart */
    currency: { code: string }
    /**
     * Indicates if taxes are included in the line items.
     */
    taxesIncluded: boolean
    /**
     * List of cart line items.
     */
    lineItems: CartLineItem[]
    /**
     * The sum of all the prices of all the items in the cart.
     * Duties, taxes, shipping and discounts excluded.
     */
    lineItemsSubtotalPrice: number
    /**
     * Price of the cart before duties, shipping and taxes.*/
    subtotalPrice: number
    /**
     * The sum of all the prices of all the items in the cart.
     * Duties, taxes and discounts included.
     */
    totalPrice: number
    /**
     * Discounts that have been applied on the cart.
     */
    discounts?: Discount[]
}
