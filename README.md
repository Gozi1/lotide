# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gozi1/lotide`

**Require it:**

`const _ = require('@gozi1/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArrayEqual)`: take in two arrays and console.log out a fun message depending on whether its passed or failed
* `function2(assertEqual)`: checks if 2 values are equal
* `function3(countLetters)`: takes in a sentence (as a string) and then return a count of each of the letters in that sentence
* `function4(countOnly)`: takes in an array and an item to count returns the amount of occurence of itemsToCount
* `function5(eqArrays)`: takes in two arrays and returns true or false, based on a perfect match
* `function6(eqObjects)`: takes in two objects and returns true or false based on a perfect match.
* `function7(findKey)`: takes in an object and a callback. It scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `function8(findKeyByValue)`: takes in an object and a value. scans the object and return the first key which contains the given value. If no key with that given value is found, then it returns undefined.
* `function9(flatten)`: takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `function10(head)`: returns the first value in the array
* `function11(letterPositions)`: Takes in a string and returns and object containing the position(s) of letters in the string
* `function12(map)`: takes in 2 agruments an array and a callback function and returns a new array based on the results of the callback function.
* `function13(middle)`: takes in an array and return the middle-most element(s) of the given array
* `function14(tail)`: returns the tail of an array (everything except for the first item of the provided array).
* `function15(takeUntil)`: takes in 2 agruments an array and a callback and returns a "slice of the array with elements taken from the beginning." It keeps going until the callback returns a truthy value
* `function16(without)`: returns a subset of a given array, removing unwanted elements
