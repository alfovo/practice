var Jasmine = require('jasmine');

function isSingleRiffle(half1, half2, shuffledDeck) {
	return true;
}

describe("Combines into sorted array", function(){
	let deck;

	it("from two sorted arrays of equal length", function(){

		deck = [6, 7, 8, 5, 4, 9, 3, 2, 10, 11, 12, 13, 1];
		expect(isSingleRiffle(deck)).toBe(true);
	})

})
