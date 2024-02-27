type ObjectValueNumber<T extends Record<string, string>> = {
  [K in keyof T]: number;
};
