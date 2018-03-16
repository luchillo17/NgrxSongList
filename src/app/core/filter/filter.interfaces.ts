export enum FilterByEnum {
  none,
  url,
  name,
}

export const filterOptions = Object
  .entries(FilterByEnum)
  .filter(([ key, value ]) => isNaN(+key))
  .map<{ name: string, value: number }>(
    ([ key, value ]) => ({ name: key, value }),
  );

export interface Filter {
  value: string;
  filterBy: FilterByEnum;
}
