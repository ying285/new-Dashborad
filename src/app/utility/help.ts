export function Capitalization(txt: string) {
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}

export function MergeWords(str: string) {
  return str.replaceAll(" ", "");
}

interface TranData{
id:string,
username:string,
avatar:string,
email:string,
transaction:string,
status:string,
fullname:string,
tel:string
}


export function TotalTransaction(data: TranData[]) {
  const transaction = data?.map(({ transaction, ...rest }) => transaction).toString().replaceAll("$", "")
    .split(",")
    .map((item: any) => parseInt(item))
    .reduce((prev, cur) => prev + cur, 0);
  return transaction;
}

interface SaleData{
  
id:string,
name:string,
image:string,
sales:string,
stock:string,
price:string
}

export function TotalSales(data: SaleData[]) {
  const totalPrice = data
    .map(({ price, ...rest }) => price)
    .toString()
    .replaceAll("$", "")
    .split(",")
    .map((item: any) => parseInt(item));

  const totalQuantity = data
    .map(({ sales, ...rest }) => sales)
    .toString()
    .replaceAll("pcs", "")
    .split(",")
    .map((item: any) => parseInt(item));

  const products = [];

  for (let i = 0; i < totalPrice.length; i++) {
    products.push(totalPrice[i] * totalQuantity[i]);
  }

  const TotalProducts = products.reduce((prev, cur) => prev + cur, 0);

  return TotalProducts;
}

interface ChartsData{
name:string,
ActiveUser:string
}

export function TotalUser(data: ChartsData[]) {
  const users = data
    .map(({ ActiveUser, ...rest }) => ActiveUser)
    .map((item: any) => parseInt(item))
    .reduce((prev, cur) => prev + cur, 0);
  return users;
}










