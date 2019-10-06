const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, { [key]: value});
}
test = { eggs: 3, chocolateChips: "1 cup", flour: "1/2 cup" }

function deleteFromDriverByKey(driver, key) {
    const n = Object.assign({}, driver);
    delete n[key];
    return n;   
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}