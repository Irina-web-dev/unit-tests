export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === "string" && stringArrayOrObject === "") {
    return true
  } else if (type === "array" && stringArrayOrObject.length === 0){
    return true
  } else if (type === "object" && Object.keys(stringArrayOrObject).length === 0){
    return true
  } else {
    return false
  }
}
