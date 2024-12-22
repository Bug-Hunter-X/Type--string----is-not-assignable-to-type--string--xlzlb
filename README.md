# Type 'string[]' is not assignable to type 'string'

This repo demonstrates a common TypeScript error: passing an array to a function that expects a string.  The error message is clear: `Type 'string[]' is not assignable to type 'string'`. This happens because the `greeter` function is explicitly typed to accept a single string (`person: string`) as input, but an array of strings is provided.

The solution shows how to correct this by either modifying the function signature to handle arrays or iterating through the array and calling the function for each string.