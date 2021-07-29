declare module 'implies';

declare function implies(left: any, right: any): boolean;
declare function bitwiseImplies(left: any, right: any, radix: number = 10): string;

declare let obj = {
  implies,
  bitwiseImplies,
};
export default obj;