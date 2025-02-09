function arrayMadness(a, b) {
  let aResult = 0;
  let bResult = 0
  for (let i = 0; i < a.length; i++){
     aResult += Math.pow(a[i], 2) 
  }
  
  for (let i = 0; i < b.length; i++){
    bResult += Math.pow(b[i], 3) 
  }
  
 return aResult > bResult
    
 
}