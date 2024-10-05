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
