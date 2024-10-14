export type FacetTypeMultiSelect = "multiselect";
export type FacetTypeSingleSelect = "singleselect";
export type FacetTypeBoolean = "boolean";
export type FacetTypePrice = "price";

export type FacetType =
  | FacetTypeMultiSelect
  | FacetTypeSingleSelect
  | FacetTypeBoolean
  | FacetTypePrice;

interface BaseFacet<T extends FacetType> {
  id: string;
  name: string;
  type: T;
}

export interface MultiSelectFacet extends BaseFacet<FacetTypeMultiSelect> {
  type: "multiselect";
  values: FacetItem[];
}

export interface SingleSelectFacet extends BaseFacet<FacetTypeSingleSelect> {
  type: "singleselect";
  values: FacetItem[];
}

export interface BooleanFacet extends BaseFacet<FacetTypeBoolean> {
  type: "boolean";
  value: boolean;
}

export interface PriceFacet extends BaseFacet<FacetTypePrice> {
  type: "price";
  value: {
    min: number;
    max: number;
  };
}

export type Facet =
  | MultiSelectFacet
  | SingleSelectFacet
  | BooleanFacet
  | PriceFacet;

export interface FacetItem {
  id: string;
  name: string;
  value: string;
  productCount?: number;
}

export function facetIsMultiSelect(facet: Facet): facet is MultiSelectFacet {
  return facet.type === "multiselect";
}

export function facetIsSingleSelect(facet: Facet): facet is SingleSelectFacet {
  return facet.type === "singleselect";
}

export function facetIsBoolean(facet: Facet): facet is BooleanFacet {
  return facet.type === "boolean";
}

export function facetIsPrice(facet: Facet): facet is PriceFacet {
  return facet.type === "price";
}
