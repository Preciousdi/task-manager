# Stage 2 — Learning Notes

### 1. What is a controlled input in React?

A controlled input is an input whose value is managed by React state. We use `useState` to store the input value and `onChange` to update it whenever the user types.

### 2. Why should we avoid modifying state arrays directly?

We should avoid modifying state arrays directly because React needs a new array reference to detect changes and update the UI correctly. We can use methods like `map()`, `filter()`, and the spread operator to create new arrays.

### 3. What is the difference between `.map()` and `.filter()`?

- `.map()` transforms each item in an array and returns a new array.
- `.filter()` selects items that meet a condition and returns a new array containing only those items.

### 4. How does conditional rendering work?

Conditional rendering means displaying different content based on a condition. In React, we can use `if` statements, ternary operators, or the `&&` operator to decide what should appear on the screen.

### 5. Why should each rendered list item have a unique key?

A unique key helps React identify each item in a list. This allows React to track changes when items are added, removed, or updated.

### 6. How do you pass a function from a parent component to a child?

We pass a function from a parent to a child through props. The child can then call that function when an event happens, such as clicking a button.

### 7. When would you use the functional form of a state update, such as `setTasks(prevTasks => ...)`?

We use the functional form when the next state depends on the previous state. React provides the latest previous state through the function, helping us avoid using an outdated state value.