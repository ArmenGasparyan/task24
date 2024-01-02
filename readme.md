# LruCache and NonFibonacci Implementation

## Overview

This repository contains an implementation of LruCache and NonFibonacci in Node.js.

### NonFibonacci

NonFibonacci is a utility that takes a single parameter and returns a non-Fibonacci number based on the input. You can set the non-Fibonacci argument using the terminal command:

```bash
node index.js <param>
```

Replace `<param>` with the desired input parameter.

## Environment

This project is developed using Node.js. Make sure you have Node.js installed on your machine before running the code.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/ArmenGasparyan/task24.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ...
   ```

3. Run the application:

   ```bash
   node non-fibonacci.js <param>
   ```

   Replace `<param>` with the desired input parameter for NonFibonacci.

## Example Usage

### LruCache

```javascript
const cache = new LRUCache(5000);

// Define a function to be cached
function expensiveOperation(arg) {
  console.log('Performing expensive operation...');
  // Simulate a time-consuming operation
  const result = arg.toUpperCase();
  return result;
}

// Use the proxy method to retrieve or store values in the cache
console.log(cache.proxy('key1', expensiveOperation, 'hello')); // :expensive operation-Output: HELLO
console.log(cache.proxy('key1', expensiveOperation, 'hello')); // :from cache

console.log(cache.proxy('key2', expensiveOperation, 'world')); // :expensive operation-Output: WORLD
console.log(cache.proxy('key2', expensiveOperation, 'world')); // :from cache Output: WORLD (Retrieved from cache)

```

### NonFibonacci

```bash
node index.js 5
```

This will return a non-Fibonacci number based on the input parameter (5 in this case).