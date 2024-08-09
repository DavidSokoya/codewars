// Double Every Other
// Write a function that doubles every second integer in a list, starting from the left.
// Example:
// For input array/list :
// [1,2,3,4]
// the function should return :
// [1,4,3,8]
function doubleEveryOther(a) {
  let arr = [];
  for(let i = 0; i < a.length; i++){
    if (a[i] % 2 === 0){
      arr.push(a[i])
    }else {
      arr.push(a[i] * 2)
    }
  }
  return arr;
}

// The Office II - Boredom Score
function boredom(staff){
  let bordormScore = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25
  }
  
  let sentiment = '';
  let staffValues = Object.values(staff)

  if (staffValues.some((department) => bordormScore.hasOwnProperty(department)))
  
  {
   score =  staffValues.map(value => bordormScore[value]).reduce((a, b) => a + b, 0)
    
    if (score <= 80){
      sentiment = 'kill me now';
    }else if (score <= 100){
      sentiment = "i can handle this"
    }else {
      sentiment = 'party time!!'
    }
  }
  return sentiment;
}

const SCORES = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  'pissing about': 25
};

function boredom(staff){
  let val = Object.keys(staff).reduce((acc, cur) => acc + SCORES[staff[cur]], 0);
    
  if (val <= 80) return 'kill me now';
  if (val > 100) return 'party time!!';
  return 'i can handle this';
}

// const StreetFiter(height, weight, color, type) {
//   this.height = height
//   this.weight = weight
//   this.color = color
//   this.type = type 
//   this.punch = function(){
//     console.log("Punch")
//   }
//   this.upperCut = function(){
//     console.log("Upper cut")
//   }
//   this.sumasult = function (){
//     console.log("summer....")
//   }
// }

// let john = new StreetFiter(27, 56, black, random)