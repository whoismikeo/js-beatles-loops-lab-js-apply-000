// add solution here
function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  
  return arr;
}

function johnLennonFacts(arr) {
  let exclaim = arr.map(el => el + '!!!');
  return exclaim
}

iLoveTheBeatles(num) {
  let arr = [];
  let i = 0
  do {
    arr.push("I love the Beatles");
    i++
  } 
  while (i < 15);
  return arr;
}