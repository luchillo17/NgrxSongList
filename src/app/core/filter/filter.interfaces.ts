export enum FilterByEnum {
  none,
  url,
  name,
}

export interface Filter {
  value: string;
  filterBy: FilterByEnum;
}
