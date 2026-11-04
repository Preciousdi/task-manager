# Stage 1 – React Learning Notes

## 1. What is React state?

State is data that a component remembers and manages. It helps React keep track of information that can change in an application, such as the number of tasks in a Task Manager.

## 2. Why do we use useState?

We use `useState` to create and manage state in a React component. It allows us to store information and update it when something happens, such as adding or deleting a task.

## 3. What happens when state changes?

When state changes, React re-renders the component so that the UI displays the updated information.

## 4. What is a React component?

A component is a reusable piece of a React application. It helps us divide our application into smaller parts that are easier to build, understand, and maintain.

## 5. What is the difference between props and state?

Props are used to pass data from a parent component to a child component, while state is data managed inside a component that can change over time.

## 6. What are parent and child components?

A parent component is a component that contains or renders another component. The component being rendered inside it is called a child component.

For example, `App` is the parent component, while `Header` and `TaskCounter` are child components.

## 7. How does React update the UI when tasks are added or deleted?

When a task is added or deleted, React updates the tasks state with a new array. React detects the state change and re-renders the UI to display the updated task list and counter.
