export const hashtags = (text) => {
  let newText = text.split(" ")
  return newText.filter(word => word[0] === "#")
}

/* const hashtags = (text) => {
  return  text.match(/#[a-z]+/gi);
}
*/
