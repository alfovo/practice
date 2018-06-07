var Jasmine = require('jasmine');

function mergeSortedArrays(array1, array2){

	var sortedArray = [];
	indexArray1 = 0;
	indexArray2 = 0;

	for(var i = 0; i < array1.length + array2.length; i++){
		if(array1[indexArray1] && 
			(array1[indexArray1] < array2[indexArray2] || !array2[indexArray2])){
			sortedArray.push(array1[indexArray1]);
			indexArray1++;
		}
		else {
			sortedArray.push(array2[indexArray2]);
			indexArray2++;
		}
	}

	return sortedArray;
}

describe("Combines into sorted array", function(){
	let myArray;
	let alicesArray;
	let expectedArray;

	it("from two sorted arrays of equal length", function(){
		myArray = [3, 4, 6, 10, 11, 15];
		alicesArray = [1, 5, 8, 12, 14, 19];
		expectedArray = [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];
		expect(mergeSortedArrays(myArray, alicesArray)).toEqual(expectedArray)
	})

	it("from two sorted arrays of equal length", function(){
		myArray = [3, 4, 6, 7];
		alicesArray = [1, 5, 8, 12, 14, 19];
		expectedArray = [1, 3, 4, 5, 6, 7, 8, 12, 14, 19];
		expect(mergeSortedArrays(myArray, alicesArray)).toEqual(expectedArray)
	})

	it("from two sorted arrays of equal length", function(){
		alicesArray = [1, 5, 8, 12, 18, 19];
		myArray = [3, 4, 6, 14];
		expectedArray = [1, 3, 4, 5, 6, 8, 12, 14, 18, 19];
		expect(mergeSortedArrays(alicesArray, myArray)).toEqual(expectedArray)
	})
})
