import format from 'format-number';

export const priceFormat = (n : number) : string => {
  return format({integerSeparator : ' '})(n, {noSeparator : false});
};

export const numberWords = (n : number, words : Array<string>) : string => {
  const cases : Array<number> = [2, 0, 1, 1, 1, 2];  
  return words[ 
    (n % 100 > 4 && n % 100 < 20)? 2 : cases[(n % 10 < 5) ? n % 10 :5] 
  ];
}