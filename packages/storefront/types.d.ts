export type * from "./src/types";

export interface SelectedOption {
    /**
     * The unique identifier for the option.
     */
    id?: string;
    /**
     *  The product option’s name, such as "Color" or "Size".
     */
    name: string;
    /**
     * The product option’s value, such as "Red" or "XL".
     */
    value: string;
}

export interface CartLineItem {
    /**
     * The unique identifier for the line item.
     */
    id: string;
    /**
     * The unique identifier for the product variant.
     */
    variantId: string;
    /**
     * The unique identifier for the product, if the variant is not provided.
     */
    productId: string;
    /**
     * This is usually the product's name.
     */
    name: string;
    /**
     * The quantity of the product variant in the line item.
     */
    quantity: number;
    /**
     * List of discounts applied to the line item.
     */
    discounts: Discount[];
    /**
     * A human-friendly unique string automatically generated from the product’s name.
     */
    path: string;
    /**
     * The product variant.
     */
    variant: ProductVariant;
    /**
     * List of selected options, to be used when displaying the line item, such as Color: Red, Size: XL.
     */
    options?: SelectedOption[];
}

/**
 * Shopping cart, a.k.a Checkout
 */
export interface Cart {
    /**
     * The unique identifier for the cart.
     */
    id: string;
    /**
     * ID of the customer to which the cart belongs.
     */
    customerId?: string;
    /**
     * The URL of the cart.
     */
    url?: string;
    /**
     * The email assigned to this cart.
     */
    email?: string;
    /**
     *  The date and time when the cart was created.
     */
    createdAt: string;
    /**
     * The currency used for this cart */
    currency: { code: string };
    /**
     * Indicates if taxes are included in the line items.
     */
    taxesIncluded: boolean;
    /**
     * List of cart line items.
     */
    lineItems: CartLineItem[];
    /**
     * The sum of all the prices of all the items in the cart.
     * Duties, taxes, shipping and discounts excluded.
     */
    lineItemsSubtotalPrice: number;
    /**
     * Price of the cart before duties, shipping and taxes.*/
    subtotalPrice: number;
    /**
     * The sum of all the prices of all the items in the cart.
     * Duties, taxes and discounts included.
     */
    totalPrice: number;
    /**
     * Discounts that have been applied on the cart.
     */
    discounts?: Discount[];
}

export interface Checkout {
    /**
     * Indicates if the checkout has payment information collected.
     */
    hasPayment: boolean;
    /**
     * Indicates if the checkout has shipping information collected.
     */
    hasShipping: boolean;
    /**
     * The unique identifier for the address that the customer has selected for shipping.
     */
    addressId: string;
    /**
     * The list of payment cards that the customer has available.
     */
    payments?: Card[];
    /**
     * The unique identifier of the card that the customer has selected for payment.
     */
    cardId?: string;
    /**
     * List of items in the checkout.
     */
    lineItems?: CartLineItem[];
}

export interface Address {
    /**
     * The unique identifier for the address.
     */
    id: string;
    /**
     * The customer's first name.
     */
    mask: string;
}

export interface AddressFields {
    /**
     * The type of address.
     * @example "billing, shipping"
     */
    type: string;
    /**
     * The customer's first name.
     */
    firstName: string;
    /**
     * The customer's last name.
     */
    lastName: string;
    /**
     * Company name.
     */
    company: string;
    /**
     * The customer's billing address street number.
     */
    streetNumber: string;
    /**
     * The customer's billing address apartment number.
     */
    apartments: string;
    /**
     * The customer's billing address zip code.
     */
    zipCode: string;
    /**
     * The customer's billing address city.
     */
    city: string;
    /**
     * The customer's billing address country.
     */
    country: string;
}

export interface Card {
    /**
     * Unique identifier for the card.
     */
    id: string;
    /**
     * Masked card number. Contains only the last 4 digits.
     * @example "4242"
     */
    mask: string;
    /**
     * The card's brand.
     * @example "Visa, Mastercard, etc."
     */
    provider: string;
}

/**
 * The fields required to create a new card.
 */
export interface CardFields {
    /**
     *  Name on the card.
     */
    cardHolder: string;
    /**
     * The card's number, consisting of 16 digits.
     */
    cardNumber: string;
    /**
     * The card's expiry month and year, in the format MM/YY.
     * @example "01/25"
     */
    cardExpireDate: string;
    /**
     * The card's security code, consisting of 3 digits.
     */
    cardCvc: string;
    /**
     *  The customer's first name.
     */
    firstName: string;
    /**
     * The customer's last name.
     */
    lastName: string;
    /**
     * Company name.
     */
    company: string;
    /**
     * The customer's billing address street number.
     */
    streetNumber: string;
    /**
     * The customer's billing address zip code.
     */
    zipCode: string;
    /**
     * The customer's billing address city.
     */
    city: string;
    /**
     * The customer's billing address country.
     */
    country: string;
}

export interface Discount {
    /**
     * The value of the discount, can be an amount or percentage.
     */
    value: number;
}

export interface Image {
    /**
     * The URL of the image.
     */
    url: string;
    /**
     * The mime-type of the image.
     */
    type?: string;
    /**
     * A word or phrase that describes the content of an image.
     */
    alt?: string;
    /**
     * The image's width.
     */
    width?: number;
    /**
     * The image's height.
     */
    height?: number;
}

export type MeasurementUnit = "KILOGRAMS" | "GRAMS" | "POUNDS" | "OUNCES";

export interface Measurement {
    /**
     * The measurement's value.
     */
    value: number;
    /**
     * The measurement's unit, such as "KILOGRAMS", "GRAMS", "POUNDS" & "OUNCES".
     */
    unit: MeasurementUnit;
}

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
    options: ProductOption[];
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

export type GetCart = (cartId: string) => Promise<Cart | null | undefined>;

/**
 * Base cart item body used for cart mutations
 */
export interface CartItemBody {
    /**
     *  The unique identifier for the product variant.
     */
    variantId: string;
    /**
     *  The unique identifier for the product, if the variant is not provided.
     */
    productId?: string;
    /**
     * The quantity of the product variant.
     */
    quantity?: number;

    /**
     * The product variant's selected options.
     */
    optionsSelected?: SelectedOption[];
}
export type AddCartItem = (
    item: CartItemBody,
) => Promise<Cart | null | undefined>;

export type UpdateCartItem = (
    item: CartLineItem,
) => Promise<Cart | null | undefined>;

export type RemoveCartItem = (
    item: CartLineItem,
) => Promise<Cart | null | undefined>;

export interface Provider {
    name: string;
    fetcher: Fetcher;
    cart: {
        getCart: GetCart;
        addItem: AddCartItem;
        updateItem: UpdateCartItem;
        removeItem: RemoveCartItem;
    };
}
