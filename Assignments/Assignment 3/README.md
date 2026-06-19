# Web Dev Spring Assignment – Callbacks, Promises & Async/Await

This assignment demonstrates asynchronous JavaScript concepts through four progressive tasks.

## Tasks Overview

### Task 1: Understanding Callbacks
A basic `getUser(id, callback)` function that simulates a 2-second delay using `setTimeout` and returns a user object to the callback.

### Task 2: Callback Hell
Simulates a chain of async operations — fetching a user, their posts, and comments — using nested callbacks to illustrate how deeply nested code becomes hard to read and maintain.

### Task 3: Promises
Rewrites the same flow from Task 2 using Promises with `.then()` chaining and `.catch()` for error handling.

### Task 4: Async / Await
Rewrites the same logic using `async/await` inside a `showData()` function for clean, readable asynchronous code.

## How to Run

```bash
node assignment1.js
```

> Requires Node.js installed on your machine.

## Expected Output

```
User fetched
User: { id: 1, name: 'Ram' }
Posts fetched
Posts: [ 'post1', 'post2' ]
Comments fetched
Comments: [ 'nice', 'good' ]
```

> Note: Since Tasks 2, 3, and 4 all run simultaneously, their outputs may interleave in the console. Each task works correctly on its own.

## File Structure

```
assignment1.js   - All four tasks in a single JavaScript file
README.md       - This file
```
