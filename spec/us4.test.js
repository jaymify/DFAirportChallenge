import Airport from "../src/airport.js";
import Planes from "../src/planes.js";
import Plane from "../src/plane.js";
import { assertEquals, assertLessThan } from "../src/test-framework/test-framework.js";

// User Story 4: As an Air Traffic Controller, I want to check if the plane is currently at the airport, so that I can instruct the plane to take off from the airport

// Set up Tests
let testName = ``;
let input = []
let actualValue, expectedValue, testResult, newInstance;


// Test 1 - If the condition of the plane being at the airport is met, is ATC able to instruct the plane to take off from the airport?
testName = `Test 1 - If the condition of the plane being at the airport is met, is ATC able to instruct the plane to take off from the airport?`;

//Arrange - Declare initial values
expectedValue = false;
newInstance = new Plane(); // Create a new instance of Plane class

//Act - Execute the code
newInstance.outsideAirport = false; // Calls the setter and updates the plane location
actualValue = newInstance.outsideAirport; //Calls the getter, to get the plane's updated location
//Assert - Check the actual output against what you expect
testResult = assertEquals(actualValue, expectedValue);

//Report
console.log(`================`);
console.log(`User Story 4`);
console.log(`================`);
console.log(`${testName}: ${testResult}`);
// If the plane is at the airport, it will print this to user
if (newInstance.outsideAirport = false); {
    console.log(`The plane is currently at the airport. ATC may instruct it to take off.`);
}
console.log(`================`);

//Clean up - Reset relevant variables for next test to avoid leakage between the tests
testName = ``;
expectedValue, actualValue, testResult, newInstance;