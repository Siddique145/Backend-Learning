// Array + it's Methods

alert("Day 1 Learning =>Arrays + it's Methods");

const arr = ["1", "2", "3", "4"];
//Methods
//1= ForEach
arr.forEach(function (itwilladdarrayvalue) {
  console.log(
    "Returned Values of For Each ==>",
    itwilladdarrayvalue + " Hello World"
  );
});

//2= filter
const arr1 = [1, 2, 3, 4];
const newresults = arr1.filter(function (value) {
  if (value > 2) {
    return true;
  } else return false;
});
console.log("Result of the Filter Method", newresults);

//3= Map
const arr3 = [1, 2, 3, 4, 5];
const map = arr3.map(function (value) {
  return value;
});
console.log("Result of the Map Method", map);

//4=Find
const arr4 = [2, 4, 6, 8, 10];
const find = arr4.find(function (value) {
  if (value === 6){
    return value
  }
});
console.log("Result of the Find Method", find) 

//5=Indexof 
console.log("Indexof Method",arr4.indexOf(2))
console.log("Indexof Method",arr4.indexOf(4))
console.log("Indexof Method will return -1 because this is not present in the array =>",arr4.indexOf(5))
console.log("Indexof Method",arr4.indexOf(6))
console.log("Indexof Method",arr4.indexOf(8))
console.log("Indexof Method",arr4.indexOf(10))



//Obejcts// Also called Key Value Pairs

const object = {
    "name":"Muhammad Siddique",
    "age":"under 18 years",
    "intrested In":"Software Developent",
}

console.log("Object data = >", object)
console.log("Object data = >", object['name'])
console.log("Object data = >", object['age'])
console.log("Object data = >", object['intrested In'])

// further new mthods for the object data 
console.log("Object data new way = >", object.name)
console.log("Object data new way= >", object.age)
