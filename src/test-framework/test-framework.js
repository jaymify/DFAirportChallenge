// Function to assert two values are equal
export const assertEquals = (actualValue, expectedValue) => {
    if (actualValue !== expectedValue)
        throw new Error(`Expected ${actualValue} but received ${expectedValue}`);
    return true;
};

// Function to assert a value that is less than
export const assertLessThan = (currentValue, fullValue) => {
    if (currentValue = fullValue || currentValue < fullValue)
        return true;
}


// // Assert a value that is truthy
// export const assertTrue = actualValue => actualValue === true;

// // Assert a value that is falsy
// export const assertFalse = actualValue => actualValue === false;

// Old version:

// export const assertLessThan = (actualValue, expectedValue) => {
//     if (actualValue = expectedValue || actualValue < expectedValue)
//         return true;
// }