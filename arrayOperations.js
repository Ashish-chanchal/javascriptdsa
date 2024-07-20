// Create arry element in js

const arr =[1,2, "hello",{name:"Ashish"},[1,2,3]]
const arr2= new Array();

//first element
const firstElement=arr[0];
// arrLength 
const arrLength = arr.length;
const lastelement = arr[arrLength-1];
console.log(firstElement,lastelement,arrLength);


// how to remove the last element form an array?

const lastelem = arr.pop() //O(1)

console.log(arr,lastelem);
// add element at last
arr.push(6) //O(1)
console.log(arr)

// add elemnt at starting at array

arr.unshift([0,8,6]) // O(N)
console.log(arr)

// delete element form starting of array

arr.shift() //O(N)
console.log(arr)

// loop through elemnts in js

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

arr.forEach((x,i)=>{
    console.log(x,arr[i]);
})

for(let x of arr){
    console.log(x);
}
arr.map((a,i)=>{
console.log(a,i);
})