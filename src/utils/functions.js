export const ArrayParse = val => JSON.parse(String(val.replaceAll(`'`, `"`)))
