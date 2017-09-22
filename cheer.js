
function cheer(list){
  let a = _.map(list, function (string) {return string.toUpperCase() + " " + string.toUpperCase()+ " " + string.toUpperCase() + "!!!"});
  return a;
}

console.log(cheer(['apple', 'pear']));