export interface Brand {
  /**
   * Unique identifier for the brand.
   */
  id: string;
  /**
   * Name of the brand.
   */
  name: string;
  /**
   *  A human-friendly unique string for the category, automatically generated from its name.
   * @example "acme"
   */
  slug: string;
}

export interface Menu {
  /**
   * Unique identifier for the brand.
   */
  id: string;
  /**
   * Sorted list of menu items.
   */
  items: MenuItem[];
}

export interface MenuItem {
  /**
   * Name of the brand.
   */
  name: string;
  /**
   * Relative URL for the menu item.
   */
  url: string;
}
