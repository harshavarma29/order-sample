// I added these order statically, dynamically you can add more orders on make order option.

const buy = [
    {'name': 'BHEL', 'price': 328, 'quantity': 100, 'status' : 'hold', 'order': 'Limit', 'color': 'red'},

    {'name': 'TATA STEEL', 'price': 457, 'quantity': 40, 'status' : 'hold', 'order': 'Market', 'color': 'red'},

    {'name': 'FinCap', 'price': 568, 'quantity': 60, 'status' : 'hold', 'order': 'Limit', 'color': 'red'},

    {'name': 'BHEL', 'price': 330, 'quantity': 34, 'status' : 'hold', 'order': 'Market', 'color': 'red'},

    {'name': 'UPI', 'price': 122, 'quantity': 70, 'status' : 'hold', 'order': 'Limit', 'color': 'red'},

    {'name': 'TATA STEEL', 'price': 460, 'quantity': 200, 'status' : 'hold', 'order': 'Stop', 'color': 'red'},

    {'name': 'FinCap', 'price': 572, 'quantity': 25, 'status' : 'hold', 'order': 'Market', 'color': 'red'},

    {'name': 'BHEL', 'price': 329, 'quantity': 2, 'status' : 'hold', 'order': 'Stop', 'color': 'red'},

    {'name': 'GRM', 'price': 642, 'quantity': 30, 'status' : 'hold', 'order': 'Limit', 'color': 'red'},

    {'name': 'BHEL', 'price': 330, 'quantity': 10, 'status' : 'hold', 'order': 'Market', 'color': 'red'}

];

const sell = [
    {'name': 'GRM', 'price': 643, 'quantity': 50, 'status' : 'hold', 'order': 'Limit', 'color': 'red'},

    {'name': 'TATA STEEL', 'price': 457, 'quantity': 70, 'status' : 'hold', 'order':  'Market', 'color': 'red'},

    {'name': 'UPI', 'price': 114, 'quantity': 25, 'status' : 'hold', 'order': 'Limit', 'color': 'red'},

    {'name': 'BHEL', 'price': 329, 'quantity': 30, 'status' : 'hold', 'order': 'Stop', 'color': 'red'},

    {'name': 'BHEL', 'price': 330, 'quantity': 100, 'status' : 'hold', 'order':  'Market', 'color': 'red'},

    {'name': 'FinCap', 'price': 330, 'quantity': 40, 'status' : 'hold', 'order': 'Limit', 'color': 'red'},

    {'name': 'TATA STEEL', 'price': 572, 'quantity': 10, 'status' : 'hold', 'order': 'Limit', 'color': 'red'},

    {'name': 'GRM', 'price': 638, 'quantity': 60, 'status' : 'hold', 'order':  'Market', 'color': 'red'},

    {'name': 'UPI', 'price': 120, 'quantity': 32, 'status' : 'hold', 'order': 'Market', 'color': 'red'},

    {'name': 'BHEL', 'price': 457, 'quantity': 90, 'status' : 'hold', 'order': 'Stop', 'color': 'red'}
];

const priceValue = {
    'BHEL': 330,
    'TATA STEEL': 457,
    'UPI': 120,
    'GRM': 638,
    'FinCap': 572
}

export {sell, buy, priceValue}