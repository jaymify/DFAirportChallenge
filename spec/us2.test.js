//this file is designated for unit testing the airport.js file (no need to test index.js)

import Airport from "../src/airport.js";
//import Plane from "../src/plane.js";
import { assertEquals } from "../src/test-framework/test-framework.js";

// User Story 2: As an Air Traffic Controller, I want to override the maximum capacity of the number of planes that can be at the airport at one time, so that I can appropriately limit the flow of planes at the airport

// Set up Tests
let testName = ``;
let input = []
let actualValue, expectedValue, testResult, newInstance;

// Test 1 - Are you able to get the initial max capacity from Airport class?
testName = `Test 1 - Are you able to get the initial max capacity from Airport class?`;

//Arrange - Declare initial values
expectedValue = 100;
newInstance = new Airport(); // Create a new instance of Airport class

//Act - Execute the code
actualValue = newInstance.maxCapacity; //Calls the getter, to get the initial max capacity

//Assert - Check the actual output against what you expect
testResult = assertEquals(actualValue, expectedValue);

//Report
console.log(`================`);
console.log(`User Story 2`);
console.log(`================`);
console.log(`${testName}: ${testResult}`);
// Should output latest max capacity from Airport class
console.log(`The latest maximum capacity figure is: ${newInstance.maxCapacity}`);
console.log(`================`);

//Clean up - Reset relevant variables for next test to avoid leakage between the tests
testName = ``;
input = [];
expectedValue, actualValue, testResult, newInstance;


// Test 2 - Are you able to override the max capacity at Airport class without user input?
testName = `Test 2 - Are you able to override the max capacity at Airport class without user input?`;

//Arrange - Declare initial values
expectedValue = 90;
newInstance = new Airport(); // Create a new instance of Airport class

//Act - Execute the code
newInstance.maxCapacity = 90; //Calls the setter in the instance and updates it to 90
actualValue = newInstance.maxCapacity; //Calls the getter, to get the updated max capacity

//Assert - Check the actual output against what you expect
testResult = assertEquals(actualValue, expectedValue);

//Report
console.log(`${testName}: ${testResult}`);
// Should output latest max capacity from Airport class
console.log(`The latest maximum capacity figure is: ${newInstance.maxCapacity}`);
console.log(`================`);

//Clean up - Reset relevant variables for next test to avoid leakage between the tests
testName = ``;
input = [];
expectedValue, actualValue, testResult, newInstance;