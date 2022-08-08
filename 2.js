var orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};

countAllList = Object.values(orderData);

var count = 0;

countAllList.map(countVal => {
    count += countVal;
})

countAllListKeys = Object.keys(orderData);

var restProportionList = []
countAllListKeys.map((key, index) => {
    var rest = {
        id: index + 1,
        order: key,
        order_percentage: (orderData[key] / count * 100).toFixed(2),
        restaurant: "Punjabi Tadka"
    }
    restProportionList.push(rest);
})

console.log("Total number of orders placed =", count);
console.log("Total number of order proportions =", countAllList.length);
console.log(restProportionList);