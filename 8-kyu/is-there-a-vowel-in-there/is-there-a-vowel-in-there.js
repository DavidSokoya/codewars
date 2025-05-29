​
function isVow(a) {
 
  let result = []
  let vowel = 'aeiou'
  
  for (let i = 0; i < a.length; i++) {
    let char = String.fromCharCode(a[i])
    
    if (vowel.includes(char)){
      result.push(char)
    }else {
      result.push(a[i])
    }
  }
  return result
}