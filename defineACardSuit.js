// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades

function defineSuit(card) {

  res = ''
  if (card.endsWith('♣')) {
    res += 'clubs'
  }else if (card.endsWith('♦')){
    res += 'diamonds'
  }else if (card.endsWith('♥')){
    res += 'hearts'
  }else if (card.endsWith('♠')){
    res += 'spades'
  }else{
    res += card
  }
  return res
}