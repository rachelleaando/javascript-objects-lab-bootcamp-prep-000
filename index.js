var recipes = new Object();


function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign ({}, object, {key: value})
}

function updateObjectWithKeyAndValue (object, key, value) {
  Object[key] = value
  return object
}