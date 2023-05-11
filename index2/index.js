function countdown(n){
  if (n < 0) {
    return[];
  }else{
    const array = countdown(n - 1);
    array.shift(n);
    return array;
  }
}
const answer = countdown(5)
console.log(answer)