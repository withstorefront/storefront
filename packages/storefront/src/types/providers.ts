import { Fetcher } from "src/utils/types"
import { Cart, CartLineItem, SelectedOption } from "./carts"

export type GetCart = (cardId: string) => Promise<Cart | null | undefined>

/**
 * Base cart item body used for cart mutations
 */
export type CartItemBody = {
    /**
     *  The unique identifier for the product variant.
     */
    variantId: string
    /**
     *  The unique identifier for the product, if the variant is not provided.
     */
    productId?: string
    /**
     * The quantity of the product variant.
     */
    quantity?: number

    /**
     * The product variant's selected options.
     */
    optionsSelected?: SelectedOption[]
}
export type AddCartItem = (item: CartItemBody) => Promise<Cart | null | undefined>

export type UpdateCartItem = (item: CartLineItem) => Promise<Cart | null | undefined>

export type RemoveCartItem = (item: CartLineItem) => Promise<Cart | null | undefined>

export type Provider = {
    fetcher: Fetcher,
    cart: {
        getCart: GetCart,
        addItem: AddCartItem,
        updateItem: UpdateCartItem,
        removeItem: RemoveCartItem,
    }
}