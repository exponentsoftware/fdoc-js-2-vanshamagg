// SOL 1
const countries = [
  'ALBANIA',
  'BOLIVIA',
  'CANADA',
  'DENMARK',
  'ETHIOPIA',
  'FINLAND',
  'GERMANY',
  'HUNGARY',
  'IRELAND',
  'JAPAN',
  'KENYA'
];

function createArrayOfArrays(countries) {
  return countries.map(ct => [
    ct,
    ct.substr(0, 3).toUpperCase(),
    ct.length
  ]);
}

console.log(createArrayOfArrays(countries));