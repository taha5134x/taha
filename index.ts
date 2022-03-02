//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let myNumber, myNumber1, result: number;
myNumber = parseInt(prompt('entre le nombre'));
myNumber1 = parseInt(prompt('entre le nombre'));
result = myNumber1 * myNumber;
if (result > 0) {
  console.log('nombre positif');
} else {
  console.log('nombre negatif');
}
console.log(result);
