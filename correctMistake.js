
function correct(string)
{
	let res = ''
  for(let i =0; i < string.length; i++){
    if (string[i] === '5' ){
      res+= 'S'
    }else if(string[i] === '0'){
      res += 'O'
    }else if (string[i] === '1'){
          res +=     'I'
    }else{
      res += string[i]
    }
  }
  return res
}