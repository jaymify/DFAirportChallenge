import Airport from "../src/airport.js";
import Planes from "../src/planes.js";
import Plane from "../src/plane.js";
import { assertEquals, assertLessThan } from "../src/test-framework/test-framework.js";

// User Story 3: As an Air Traffic Controller, I want to be able check if the airport is not full and if the plane is outside the airport, so that I can instruct the plane to land at the airport

// Set up Tests
let testName = ``;
let input = []
let actualValue, expectedValue, testResult, newInstance;

// Test 1 - Are you able to view the current amount of planes at the airport?
testName = `Test 1 - Are you able to view the current amount of planes at the airport?`;

//Arrange - Declare initial values
expectedValue = 75;
newInstance = new Planes(); // Create a new instance of Planes class

//Act - Execute the code
actualValue = newInstance.currentCapacity; //Calls the getter, to get the current capacity

//Assert - Check the actual output against what you expect
testResult = assertEquals(actualValue, expectedValue);

//Report
console.log(`================`);
console.log(`User Story 3`);
console.log(`================`);
console.log(`${testName}: ${testResult}`);
// Should output the current capacity from Planes class
console.log(`The current capacity figure is: ${newInstance.currentCapacity}`);
console.log(`================`);

//Clean up - Reset relevant variables for next test to avoid leakage between the tests
testName = ``;
input = [];
expectedValue, actualValue, testResult, newInstance;



// Test 2 - Are you able to check if the airport is not full?
testName = `Test 2 - Are you able to check if the airport is not full?`;

//Arrange - Declare initial values
let currentValue, fullValue, newInstance2;

newInstance = new Planes(); // Creates a new Planes class instance
newInstance2 = new Airport(); // Create a new instance of Airport class

//Act - Execute the code
currentValue = newInstance.currentCapacity; // Calls the Planes class getter, to get the current capacity
fullValue = newInstance2.maxCapacity; // Calls the Airport class getter, to get the max capacity

//Assert - Check the actual output against what you expect
testResult = assertLessThan(currentValue, fullValue);

//Report
console.log(`${testName}: ${testResult}`);
console.log(`The current capacity figure is: ${newInstance.currentCapacity}/${newInstance2.maxCapacity}`);
console.log(`================`);

//Clean up - Reset relevant variables for next test to avoid leakage between the tests
testName = ``;
input = [];
expectedValue, actualValue, testResult, newInstance, newInstance2, currentValue, fullValue;



// Test 3 - Are you able to check if the plane is outside of the airport?
testName = `Test 3 - Are you able to check if the plane is outside of the airport?`;

//Arrange - Declare initial values
expectedValue = true;
newInstance = new Plane(); // Create a new instance of Plane class

//Act - Execute the code
actualValue = newInstance.outsideAirport; //Calls the getter, to get the plane's location
//Assert - Check the actual output against what you expect
testResult = assertEquals(actualValue, expectedValue);

//Report
console.log(`${testName}: ${testResult}`);
// Should output if the plane is outside the airport
console.log(`It is ${newInstance.outsideAirport} the plane is outside the airport`);
console.log(`================`);

//Clean up - Reset relevant variables for next test to avoid leakage between the tests
testName = ``;
expectedValue, actualValue, testResult, newInstance;



// Test 4 - Are both conditions from Tests 2 & 3 able to be met at the same time?
testName = `Test 4 - Are both conditions from Tests 2 & 3 able to be met at the same time?`;

//Arrange - Declare initial values
let newInstance3, bothTests, test2, test3;

expectedValue = true;
newInstance = new Plane(); // Create a new instance of Plane class
newInstance2 = new Planes(); // Creates a new Planes class instance
newInstance3 = new Airport() // Creates a new Airport class instance

//Act - Execute the code
currentValue = newInstance2.currentCapacity; // Calls the Planes class getter, to get the current capacity
fullValue = newInstance3.maxCapacity; // Calls the Airport class getter, to get the max capacity

//Assert - Check the actual output against what you expect
test2 = assertLessThan(currentValue, fullValue);
test3 = newInstance.outsideAirport; //Calls the getter, to get the plane's location

//Assert - 
bothTests = assertEquals(test2, test3); // Check if Test 2 and Test 3 both pass by using assertEquals
actualValue = bothTests; // Passes the bool result of both tests into the actual value

testResult = assertEquals(actualValue, expectedValue); // Checks if actual and test values are same

//Report
console.log(`${testName}: ${testResult}`);
if (testResult = true) {
    console.log(`ATC is able to instruct the plane to land at the airport`);
}
console.log(`================`);

//Clean up - Reset relevant variables for next test to avoid leakage between the tests
testName = ``;
expectedValue, actualValue, testResult, newInstance, newInstance2, newInstance3, currentValue, fullValue, test2, test3;

