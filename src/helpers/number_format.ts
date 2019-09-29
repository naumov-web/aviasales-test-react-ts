import format from 'format-number';

export const priceFormat = (n : number) : string => {
  return format({integerSeparator : ' '})(n, {noSeparator : false});
};