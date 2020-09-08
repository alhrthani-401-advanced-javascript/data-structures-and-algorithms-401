//first solution

// let x=[1,2,3,4,5,6];

// let inverseArray=function(oldArray){
// let newArray=[];
// for(i=oldArray.length-1;i>=0;i--){
//   newArray.push(oldArray[i]);
// }
// return newArray;


// }


// inverseArray(x);

//second solution

// let x=[1,2,3,4,5,6];
// let inverseArray=function(oldArray){
//   let newArray=[];
//   let newArrayIndex=0;
// for(var i=oldArray.length-1;i>=0;i--){
//     newArray[newArrayIndex]=oldArray[i];
//         newArrayIndex++; 
// }
// return newArray;
// }


// inverseArray(x);

//third solution

let x=[1,2,3,4,5,6];
let inverseArray=function(arr){
  let j=arr.length-1;
  for(var i=0;i<arr.length/2;i++){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    j--; 
  }
  return arr;
}

inverseArray(x);
