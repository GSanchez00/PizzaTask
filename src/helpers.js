
export const currency =(_price, _currency) =>
{
  return new Intl.NumberFormat(currencyFormat(_currency), 
  {
    style: 'currency',
    currency: _currency,
  }).format(_price);
}

export const staticCurrency =(_price, _currency) =>
{
  if(_currency==="EUR")
  {
    _price=parseInt(_price) *0.5;
  }
  return new Intl.NumberFormat(currencyFormat(_currency), 
  {
    style: 'currency',
    currency: _currency,
  }).format(_price);
}

const currencyFormat =(_currency) =>
{
  switch (_currency) {
    case "EUR":
      return "de-DE"
    default:
      return "en-US"
  }
}
export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const cardRegex = str => {
  const card = /^\d{16}$/;
  return card.test(str);
};

export const expDateRegex = str => {
  const date = /^\d{2}(\/)\d{2}$/g;
  const trimmedStr = str.trim();
  return date.test(trimmedStr);
};

export const cvvRegex = str => {
  const cvv = /^\d{3}$/;
  return cvv.test(str);
};
