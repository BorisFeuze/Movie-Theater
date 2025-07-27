
//Initialisierung

let myArray = [42, "Hello, world!", true, 3.14, "JavaScript"];
console.log(myArray)

console.log("Element ", myArray[0])
console.log("Element ", myArray[1])
console.log("Element ", myArray[2])
console.log("Element ", myArray[3])
console.log("Element ", myArray[4])

console.log("Ausgabe: ")
for (let i = 0; i < myArray.length; i++)
    console.log("Element " + i + ":", myArray[i]) 

myArray[1] = "Change";
console.log("Changed Array", myArray)

//Push, Pop, shift, unshift

let myArray = [1, 2, 3, 4, 5];
console.log("Start:", myArray);


myArray.push(6, 7);
console.log("Nach push:", myArray);


myArray.pop();
console.log("Nach pop:", myArray);


myArray.shift();
console.log("Nach shift:", myArray);


myArray.unshift(0, 1);
console.log("Nach unshift:", myArray);

//Reversing


let array1 = [1, 2, 3, 4, 5];
console.log("Original array1:", array1);

array1.reverse();
console.log("Nach reverse (in place):", array1);


let array2 = ['a', 'b', 'c', 'd', 'e'];
console.log("Original array2:", array2);

let reversedCopy = array2.toReversed(); 
console.log("toReversed Ergebnis:", reversedCopy);
console.log("array2 bleibt gleich:", array2);

//Splicing

let array1 = [10, 20, 30, 40, 50];
console.log("Original array1:", array1);

array1.splice(2, 1, 35, 36);
console.log("Nach splice:", array1);

let array2 = ['a', 'x', 'd'];
console.log("Original array2:", array2);

let newArray = array2.toSpliced(1, 1, 'b', 'c');
console.log("toSpliced Ergebnis:", newArray);
console.log("array2 bleibt gleich:", array2);

