// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  revenueDrivers = []
  drivers.filter(function(driver) {
    if (driver.revenue > revenue) {
      revenueDrivers.push(driver.name)
    }
  })
  return revenueDrivers
}

function exactMatch(drivers, obj) {
  const attrKey = Object.keys(obj)
  return drivers.filter(function(driver) {
    return driver[attrKey] === obj[attrKey]
  })
}

function exactMatchToList(drivers, obj) {
  const objArr = exactMatch(drivers, obj)
  return objArr.map(function(driver) {
    return driver.name
  })
}
