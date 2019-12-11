// Write your solution in this file!

let driver = {};


function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateObject (driver, key, value) {
    driver[key] = value;
    return obj;
  }

  function deleteFromDriverByKey(driver, key) {
    let result = Object.assign({}, driver);
    delete result[key];
    return result;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
} 