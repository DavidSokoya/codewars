// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
function uefaEuro2016(teams, scores){
  const [teamA, teamB] = teams;
  const [scoreA, scoreB] = scores;
  
  result = ''
  
  if (scoreA > scoreB){
     result = `At match ${teamA} - ${teamB}, ${teamA} won!`
  }else if (scoreB > scoreA) {
    result = `At match ${teamA} - ${teamB}, ${teamB} won!`
  }else{
    result = `At match ${teamA} - ${teamB}, teams played draw.`
  }
  
  return result
  
}
