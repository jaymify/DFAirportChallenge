//this file is designated for unit testing the airport.js file (no need to test index.js)

import Airport from "../src/airport.js";
//import ATC from "../src/ATC.js";
//import Plane from "../src/plane.js";
import { assertEquals } from "../src/test-framework/test-framework.js";

// User Story 1: As an air traffic controller, I want to view the maximum capacity of the number of planes that can be at the airport at one time, so that I can gather a current representation of the airport

// Set up Tests
let testName = ``;
let input = []
let actualValue, expectedValue, testResult, retrieveValue;

// Test 1 - Are you able to view the correct max capacity of planes at the airport?
testName = `Test 1 - Are you able to view the correct max capacity of planes at the airport?`;

//Arrange - Declare initial values
expectedValue = 100; // Correctly set, should be 100 and pass test
retrieveValue = new Airport(100);

//Act - Execute the code
actualValue = retrieveValue.getMaxCapacity();

//Assert - Check the actual output against what you expect
testResult = assertEquals(actualValue, expectedValue);

//Report
console.log(`================`);
console.log(`User Story 1`);
console.log(`${testName}: ${testResult}`);
console.log(`================`)

//Clean up - Reset relevant variables for next test to avoid leakage between the tests
testName = ``;
input = [];
expectedValue, actualValue, testResult;