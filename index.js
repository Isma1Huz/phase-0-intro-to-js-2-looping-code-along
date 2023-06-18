// Code your solutions in this file;

function writeCards(array,action) {
    const newArray = [];
    
  for (let i = 0; i < array.length; i++) {
    const statement = `Thank you, ${array[i]}, for the wonderful ${action} gift!`
    newArray.push(statement);
  }
  return newArray;
}

function countDown(num){
    num = 0
    while(num <= 10){
        console.log(num);
        num++
    }
}