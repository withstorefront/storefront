/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontTypes from './storefront.types';

export type CartFragment = (
  Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl' | 'totalQuantity'>
  & { cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }, lines: { edges: Array<{ node: (
        Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
        & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
          Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
          & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
            Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
            & { options: Array<(
              Pick<StorefrontTypes.ProductOption, 'id' | 'name'>
              & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'id' | 'name'>> }
            )>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                  Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                  & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
                ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
          ) }
        ) }
      ) | (
        Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
        & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
          Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
          & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
            Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
            & { options: Array<(
              Pick<StorefrontTypes.ProductOption, 'id' | 'name'>
              & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'id' | 'name'>> }
            )>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                  Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                  & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
                ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
          ) }
        ) }
      ) }> } }
);

export type ImageFragment = Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>;

export type ProductFragment = (
  Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
  & { options: Array<(
    Pick<StorefrontTypes.ProductOption, 'id' | 'name'>
    & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'id' | 'name'>> }
  )>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
        Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
        & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
      ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
);

export type SeoFragment = Pick<StorefrontTypes.Seo, 'description' | 'title'>;

export type AddToCartMutationVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
  lines: Array<StorefrontTypes.CartLineInput> | StorefrontTypes.CartLineInput;
}>;


export type AddToCartMutation = { cartLinesAdd?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl' | 'totalQuantity'>
      & { cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }, lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<(
                  Pick<StorefrontTypes.ProductOption, 'id' | 'name'>
                  & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'id' | 'name'>> }
                )>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
              ) }
            ) }
          ) | (
            Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
            & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<(
                  Pick<StorefrontTypes.ProductOption, 'id' | 'name'>
                  & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'id' | 'name'>> }
                )>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
              ) }
            ) }
          ) }> } }
    )> }> };

export type CreateCartMutationVariables = StorefrontTypes.Exact<{
  lineItems?: StorefrontTypes.InputMaybe<Array<StorefrontTypes.CartLineInput> | StorefrontTypes.CartLineInput>;
}>;


export type CreateCartMutation = { cartCreate?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl' | 'totalQuantity'>
      & { cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }, lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<(
                  Pick<StorefrontTypes.ProductOption, 'id' | 'name'>
                  & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'id' | 'name'>> }
                )>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
              ) }
            ) }
          ) | (
            Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
            & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<(
                  Pick<StorefrontTypes.ProductOption, 'id' | 'name'>
                  & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'id' | 'name'>> }
                )>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
              ) }
            ) }
          ) }> } }
    )> }> };

export type EditCartItemsMutationVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
  lines: Array<StorefrontTypes.CartLineUpdateInput> | StorefrontTypes.CartLineUpdateInput;
}>;


export type EditCartItemsMutation = { cartLinesUpdate?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl' | 'totalQuantity'>
      & { cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }, lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<(
                  Pick<StorefrontTypes.ProductOption, 'id' | 'name'>
                  & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'id' | 'name'>> }
                )>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
              ) }
            ) }
          ) | (
            Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
            & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<(
                  Pick<StorefrontTypes.ProductOption, 'id' | 'name'>
                  & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'id' | 'name'>> }
                )>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
              ) }
            ) }
          ) }> } }
    )> }> };

export type RemoveFromCartMutationVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
  lineIds: Array<StorefrontTypes.Scalars['ID']['input']> | StorefrontTypes.Scalars['ID']['input'];
}>;


export type RemoveFromCartMutation = { cartLinesRemove?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl' | 'totalQuantity'>
      & { cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }, lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<(
                  Pick<StorefrontTypes.ProductOption, 'id' | 'name'>
                  & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'id' | 'name'>> }
                )>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
              ) }
            ) }
          ) | (
            Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
            & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
                Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
                & { options: Array<(
                  Pick<StorefrontTypes.ProductOption, 'id' | 'name'>
                  & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'id' | 'name'>> }
                )>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                      Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                      & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
                    ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
              ) }
            ) }
          ) }> } }
    )> }> };

export type GetCartQueryVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
}>;


export type GetCartQuery = { cart?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl' | 'totalQuantity'>
    & { cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }, lines: { edges: Array<{ node: (
          Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
          & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
            Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
            & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
              Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
              & { options: Array<(
                Pick<StorefrontTypes.ProductOption, 'id' | 'name'>
                & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'id' | 'name'>> }
              )>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                    Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                    & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
                  ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
            ) }
          ) }
        ) | (
          Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
          & { cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, merchandise: (
            Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
            & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: (
              Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
              & { options: Array<(
                Pick<StorefrontTypes.ProductOption, 'id' | 'name'>
                & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'id' | 'name'>> }
              )>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                    Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                    & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
                  ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
            ) }
          ) }
        ) }> } }
  )> };

export type CollectionFragment = (
  Pick<StorefrontTypes.Collection, 'handle' | 'title' | 'description' | 'updatedAt'>
  & { seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
);

export type GetCollectionQueryVariables = StorefrontTypes.Exact<{
  handle: StorefrontTypes.Scalars['String']['input'];
}>;


export type GetCollectionQuery = { collection?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Collection, 'handle' | 'title' | 'description' | 'updatedAt'>
    & { seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
  )> };

export type GetCollectionsQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type GetCollectionsQuery = { collections: { edges: Array<{ node: (
        Pick<StorefrontTypes.Collection, 'handle' | 'title' | 'description' | 'updatedAt'>
        & { seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
      ) }> } };

export type GetCollectionProductsQueryVariables = StorefrontTypes.Exact<{
  handle: StorefrontTypes.Scalars['String']['input'];
  sortKey?: StorefrontTypes.InputMaybe<StorefrontTypes.ProductCollectionSortKeys>;
  reverse?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['Boolean']['input']>;
}>;


export type GetCollectionProductsQuery = { collection?: StorefrontTypes.Maybe<{ products: { edges: Array<{ node: (
          Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
          & { options: Array<(
            Pick<StorefrontTypes.ProductOption, 'id' | 'name'>
            & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'id' | 'name'>> }
          )>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
                Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
                & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
              ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
        ) }> } }> };

export type GetProductQueryVariables = StorefrontTypes.Exact<{
  handle: StorefrontTypes.Scalars['String']['input'];
}>;


export type GetProductQuery = { product?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
    & { options: Array<(
      Pick<StorefrontTypes.ProductOption, 'id' | 'name'>
      & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'id' | 'name'>> }
    )>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
          Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
          & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
        ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
  )> };

export type GetProductsQueryVariables = StorefrontTypes.Exact<{
  sortKey?: StorefrontTypes.InputMaybe<StorefrontTypes.ProductSortKeys>;
  reverse?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['Boolean']['input']>;
  query?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['String']['input']>;
}>;


export type GetProductsQuery = { products: { edges: Array<{ node: (
        Pick<StorefrontTypes.Product, 'id' | 'handle' | 'availableForSale' | 'title' | 'description' | 'descriptionHtml' | 'tags' | 'updatedAt'>
        & { options: Array<(
          Pick<StorefrontTypes.ProductOption, 'id' | 'name'>
          & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'id' | 'name'>> }
        )>, priceRange: { maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { edges: Array<{ node: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
              & { selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
            ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'>>, images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText' | 'width' | 'height'> }> }, seo: Pick<StorefrontTypes.Seo, 'description' | 'title'> }
      ) }> } };

interface GeneratedQueryTypes {
  "#graphql\n  query getCart($cartId: ID!) {\n    cart(id: $cartId) {\n      ...cart\n    }\n  }\n  #graphql\n  fragment cart on Cart {\n    id\n    checkoutUrl\n    cost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n    }\n    lines(first: 100) {\n      edges {\n        node {\n          id\n          quantity\n          cost {\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...product\n              }\n            }\n          }\n        }\n      }\n    }\n    totalQuantity\n  }\n  #graphql\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      optionValues {\n        id\n        name\n      }\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  #graphql\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n  #graphql\n  fragment seo on SEO {\n    description\n    title\n  }\n\n\n\n": {return: GetCartQuery, variables: GetCartQueryVariables},
  "#graphql\n  query getCollection($handle: String!) {\n    collection(handle: $handle) {\n      ...collection\n    }\n  }\n  #graphql\n  fragment collection on Collection {\n    handle\n    title\n    description\n    seo {\n      ...seo\n    }\n    updatedAt\n  }\n  #graphql\n  fragment seo on SEO {\n    description\n    title\n  }\n\n\n": {return: GetCollectionQuery, variables: GetCollectionQueryVariables},
  "#graphql\n  query getCollections {\n    collections(first: 100, sortKey: TITLE) {\n      edges {\n        node {\n          ...collection\n        }\n      }\n    }\n  }\n  #graphql\n  fragment collection on Collection {\n    handle\n    title\n    description\n    seo {\n      ...seo\n    }\n    updatedAt\n  }\n  #graphql\n  fragment seo on SEO {\n    description\n    title\n  }\n\n\n": {return: GetCollectionsQuery, variables: GetCollectionsQueryVariables},
  "#graphql\n  query getCollectionProducts(\n    $handle: String!\n    $sortKey: ProductCollectionSortKeys\n    $reverse: Boolean\n  ) {\n    collection(handle: $handle) {\n      products(sortKey: $sortKey, reverse: $reverse, first: 100) {\n        edges {\n          node {\n            ...product\n          }\n        }\n      }\n    }\n  }\n  #graphql\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      optionValues {\n        id\n        name\n      }\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  #graphql\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n  #graphql\n  fragment seo on SEO {\n    description\n    title\n  }\n\n\n": {return: GetCollectionProductsQuery, variables: GetCollectionProductsQueryVariables},
  "#graphql\nquery getProduct($handle: String!) {\n    product(handle: $handle) {\n      ...product\n    }\n  }\n  #graphql\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      optionValues {\n        id\n        name\n      }\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  #graphql\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n  #graphql\n  fragment seo on SEO {\n    description\n    title\n  }\n\n\n": {return: GetProductQuery, variables: GetProductQueryVariables},
  "#graphql\n  query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {\n    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {\n      edges {\n        node {\n          ...product\n        }\n      }\n    }\n  }\n  #graphql\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      optionValues {\n        id\n        name\n      }\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  #graphql\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n  #graphql\n  fragment seo on SEO {\n    description\n    title\n  }\n\n\n": {return: GetProductsQuery, variables: GetProductsQueryVariables},
}

interface GeneratedMutationTypes {
  "\n  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  #graphql\n  fragment cart on Cart {\n    id\n    checkoutUrl\n    cost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n    }\n    lines(first: 100) {\n      edges {\n        node {\n          id\n          quantity\n          cost {\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...product\n              }\n            }\n          }\n        }\n      }\n    }\n    totalQuantity\n  }\n  #graphql\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      optionValues {\n        id\n        name\n      }\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  #graphql\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n  #graphql\n  fragment seo on SEO {\n    description\n    title\n  }\n\n\n\n": {return: AddToCartMutation, variables: AddToCartMutationVariables},
  "\n  mutation createCart($lineItems: [CartLineInput!]) {\n    cartCreate(input: { lines: $lineItems }) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  #graphql\n  fragment cart on Cart {\n    id\n    checkoutUrl\n    cost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n    }\n    lines(first: 100) {\n      edges {\n        node {\n          id\n          quantity\n          cost {\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...product\n              }\n            }\n          }\n        }\n      }\n    }\n    totalQuantity\n  }\n  #graphql\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      optionValues {\n        id\n        name\n      }\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  #graphql\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n  #graphql\n  fragment seo on SEO {\n    description\n    title\n  }\n\n\n\n": {return: CreateCartMutation, variables: CreateCartMutationVariables},
  "\n  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {\n    cartLinesUpdate(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  #graphql\n  fragment cart on Cart {\n    id\n    checkoutUrl\n    cost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n    }\n    lines(first: 100) {\n      edges {\n        node {\n          id\n          quantity\n          cost {\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...product\n              }\n            }\n          }\n        }\n      }\n    }\n    totalQuantity\n  }\n  #graphql\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      optionValues {\n        id\n        name\n      }\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  #graphql\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n  #graphql\n  fragment seo on SEO {\n    description\n    title\n  }\n\n\n\n": {return: EditCartItemsMutation, variables: EditCartItemsMutationVariables},
  "\n  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {\n    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  #graphql\n  fragment cart on Cart {\n    id\n    checkoutUrl\n    cost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n    }\n    lines(first: 100) {\n      edges {\n        node {\n          id\n          quantity\n          cost {\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...product\n              }\n            }\n          }\n        }\n      }\n    }\n    totalQuantity\n  }\n  #graphql\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      optionValues {\n        id\n        name\n      }\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  #graphql\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n\n  #graphql\n  fragment seo on SEO {\n    description\n    title\n  }\n\n\n\n": {return: RemoveFromCartMutation, variables: RemoveFromCartMutationVariables},
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
