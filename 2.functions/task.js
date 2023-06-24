'use strict'
function getArrayParams(...arr) {
  let min = Infinity;
  let max =-Infinity;
  let total =0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
      min=arr[i];
    }
    if(arr[i]>max){
      max=arr[i];
  }
  total +=arr[i];
}
const avg=parseFloat((total/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if  (arr.length === 0)  {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

  
  function differenceMaxMinWorker(...arr) {
    if(arr.length ===0){
      return 0;
    }
    const max=Math.max(...arr);
    const min=Math.min(...arr);
    return max -min;
  }
  
  function differenceEvenOddWorker(...arr) {
    let evenElements =0;
    let oddElements =0;
    for(let i=0;i<arr.length; i++){
      if(arr[i] % 2 ===0){
        evenElements +=arr[i];
      }else{
        oddElements +=arr[i];
      }
    }
   return evenElements-oddElements;
  }
  
  function averageEvenElementsWorker(...arr) {
    let sumEnenElement =0;
    let countEvenElement =0;
    for(let i=0;i<arr.length; i++){
      if(arr[i] % 2 ===0){
        sumEnenElement +=arr[i];
        countEvenElement ++;
      }
  }
  if (countEvenElement ===0){
    return 0;
  }
  return sumEnenElement/countEvenElement;}
  
  function makeWork (arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    let max;
    for (let i = 0; i < arrOfArr.length; i++) {
      max = func(...arrOfArr[i]);
      if (max > maxWorkerResult) {
        maxWorkerResult = max;
      }
    }
    return maxWorkerResult;
  }

  