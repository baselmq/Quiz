var questionPool = [
  {
    question: "What is the result of 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
    justification: "The sum of 2 and 2 is 4.",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    answer: "Canberra",
    justification: "Canberra is the capital of Australia.",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Saturn", "Uranus"],
    answer: "Jupiter",
    justification: "Jupiter is the largest planet in our solar system.",
  },
  {
    question:
      "What is the output of the following code: console.log(1 + '2' + 3 + 4);",
    options: ["1234", "10", "NaN", "134"],
    answer: "1234",
    justification:
      "The + operator performs string concatenation when one of the operands is a string, so 1 + '2' evaluates to '12'. Then '12' + 3 evaluates to '123', and '123' + 4 evaluates to '1234'.",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    options: [
      "They are equivalent",
      "== performs type coercion while === does not",
      "== is only used for strings while === is used for all data types",
      "None of the above",
    ],
    answer: "== performs type coercion while === does not",
    justification:
      "== compares the values of the operands after converting their types, while === compares the values of the operands without converting their types.",
  },
  {
    question: "What is the difference between let and var in JavaScript?",
    options: [
      "They are equivalent",
      "let is block-scoped while var is function-scoped",
      "var is block-scoped while let is function-scoped",
      "None of the above",
    ],
    answer: "let is block-scoped while var is function-scoped",
    justification:
      "Variables declared with let are only accessible within the block they are declared in, while variables declared with var are accessible throughout the entire function they are declared in.",
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A function that returns another function",
      "A function that has access to variables in its outer scope",
      "A function that takes another function as an argument",
      "A function that has no arguments",
    ],
    answer: "A function that has access to variables in its outer scope",
    justification:
      "A closure is a function that has access to variables in its outer lexical scope, even after the outer function has returned.",
  },
  {
    question:
      "What is the difference between null and undefined in JavaScript?",
    options: [
      "They are equivalent",
      "null is the absence of a value while undefined means a variable has been declared but not defined",
      "undefined is the absence of a value while null means a variable has been declared but not defined",
      "None of the above",
    ],
    answer:
      "null is the absence of a value while undefined means a variable has been declared but not defined",
    justification:
      "null is a value that represents the intentional absence of any object value, while undefined is a value automatically assigned by JavaScript to variables that have been declared but not defined.",
  },

  {
    question:
      "What is the output of the following code: console.log(2 * '3' + 4);",
    options: ["10", "24", "NaN", "8"],
    answer: "10",
    justification:
      "The * operator performs type coercion when one of the operands is a string, so '3' is converted to a number. Then 2 * 3 evaluates to 6, and 6 + 4 evaluates to 10.",
  },
  {
    question:
      "What is the output of the following code: console.log(typeof null);",
    options: ["object", "null", "undefined", "string"],
    answer: "object",
    justification:
      "In JavaScript, null is considered to be an object. This is a known issue with the language.",
  },
  {
    question:
      "What is the difference between synchronous and asynchronous programming in JavaScript?",
    options: [
      "They are equivalent",
      "Synchronous programming is blocking while asynchronous programming is non-blocking",
      "Asynchronous programming is blocking while synchronous programming is non-blocking",
      "None of the above",
    ],
    answer:
      "Synchronous programming is blocking while asynchronous programming is non-blocking",
    justification:
      "In synchronous programming, a task must complete before the program can move on to the next task, while in asynchronous programming, tasks can run concurrently and the program does not need to wait for a task to complete before moving on to the next task.",
  },
  {
    question: "What is a callback function in JavaScript?",
    options: [
      "A function that is called at the end of a program",
      "A function that is called when an event occurs",
      "A function that is used to convert a synchronous function into an asynchronous function",
      "A function that is used to call other functions",
    ],
    answer:
      "A function that is used to convert a synchronous function into an asynchronous function",
    justification:
      "A callback function is a function that is passed as an argument to another function and is executed after some task has been completed. It is often used to convert a synchronous function into an asynchronous function.",
  },
  {
    question:
      "What is the output of the following code: console.log('hello'.indexOf('l'));",
    options: ["0", "2", "3", "-1"],
    answer: "2",
    justification:
      "The indexOf() method returns the index of the first occurrence of a specified value in a string. In this case, the first 'l' in 'hello' is at index 2.",
  },
  {
    question:
      "What is the output of the following code: console.log('hello'.slice(1, 3));",
    options: ["'he'", "'el'", "'l'", "'lo'"],
    answer: "'el'",
    justification:
      "The slice() method extracts a section of a string and returns it as a new string. In this case, it extracts the characters at index 1 and 2, which are 'e' and 'l', and returns them as the new string 'el'.",
  },
  {
    question:
      "What is the output of the following code: console.log([1, 2, 3].map(x => x * 2));",
    options: ["[1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "[2, 3, 4]"],
    answer: "[2, 4, 6]",
    justification:
      "The map() method creates a new array with the results of calling a provided function on every element in the calling array. In this case, the provided function multiplies each element by 2.",
  },
  {
    question:
      "What is the output of the following code: console.log([1, 2, 3].reduce((acc, cur) => acc + cur, 0));",
    options: ["6", "5", "4", "3"],
    answer: "6",
    justification:
      "The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. In this case, the provided function adds each element to the accumulator, which starts at 0.",
  },
  {
    question: "What is a programming language?",
    options: [
      "A language spoken by programmers",
      "A language that computers can understand",
      "A language used for writing novels",
      "A language used for cooking",
    ],
    answer: "A language that computers can understand",
    justification:
      "Programming languages are used to write code that can be interpreted by computers.",
  },
  {
    question: "What is a variable?",
    options: [
      "A piece of data that never changes",
      "A piece of data that can change",
      "A type of function",
      "A type of loop",
    ],
    answer: "A piece of data that can change",
    justification:
      "A variable is a container that holds a value, which can be changed throughout the program.",
  },
  {
    question: "What is an algorithm?",
    options: [
      "A piece of data",
      "A type of function",
      "A set of instructions for solving a problem",
      "A type of loop",
    ],
    answer: "A set of instructions for solving a problem",
    justification:
      "An algorithm is a step-by-step procedure for solving a problem or achieving a goal.",
  },
  {
    question: "What is a function?",
    options: [
      "A piece of data",
      "A set of instructions for solving a problem",
      "A type of loop",
      "A subprogram that performs a specific task",
    ],
    answer: "A subprogram that performs a specific task",
    justification:
      "A function is a block of code that performs a specific task and can be called from other parts of the program.",
  },
  {
    question: "What is a loop?",
    options: [
      "A type of function",
      "A set of instructions for solving a problem",
      "A piece of data",
      "A programming construct that repeats a set of instructions until a specific condition is met",
    ],
    answer:
      "A programming construct that repeats a set of instructions until a specific condition is met",
    justification:
      "A loop is used to execute a set of instructions repeatedly until a specific condition is met.",
  },
  {
    question: "What is object-oriented programming?",
    options: [
      "A type of programming that uses objects to represent data and methods to manipulate that data",
      "A type of programming that only uses functions",
      "A type of programming that only uses loops",
      "A type of programming that only uses variables",
    ],
    answer:
      "A type of programming that uses objects to represent data and methods to manipulate that data",
    justification:
      "Object-oriented programming is a programming paradigm that uses objects to represent data and the methods or functions that manipulate that data.",
  },
  {
    question: "What is a class?",
    options: [
      "A blueprint for creating objects",
      "A set of instructions for solving a problem",
      "A type of function",
      "A type of loop",
    ],
    answer: "A blueprint for creating objects",
    justification:
      "A class is a blueprint or template for creating objects that have common properties and methods.",
  },
  {
    question: "What is inheritance in object-oriented programming?",
    options: [
      "The ability of a subclass to inherit properties and methods from its superclass",
      "The ability of a class to have multiple superclasses",
      "The ability to override a superclass method in a subclass",
      "The ability to declare private variables in a subclass",
    ],
    answer:
      "The ability of a subclass to inherit properties and methods from its superclass",
    justification:
      "Inheritance is a mechanism in object-oriented programming that allows a subclass to inherit properties and methods from its superclass.",
  },
  {
    question: "What is a data structure?",
    options: [
      "A way of organizing and storing data in a computer",
      "A type of programming language",
      "A type of function",
      "A type of loop",
    ],
    answer: "A way of organizing and storing data in a computer",
    justification:
      "A data structure is a way of organizing and storing data in a computer so that it can be accessed and manipulated efficiently.",
  },
  {
    question: "What is a linked list?",
    options: [
      "A data structure that consists of a sequence of nodes, each containing a reference to the next node",
      "A way of organizing and storing data in a computer",
      "A type of programming language",
      "A type of function",
    ],
    answer:
      "A data structure that consists of a sequence of nodes, each containing a reference to the next node",
    justification:
      "A linked list is a data structure that consists of a sequence of nodes, where each node contains a reference to the next node in the sequence.",
  },
  {
    question: "What is a stack?",
    options: [
      "A data structure that stores data in a last-in, first-out (LIFO) order",
      "A data structure that stores data in a first-in, first-out (FIFO) order",
      "A data structure that stores data in a random order",
      "A data structure that stores data in a sorted order",
    ],
    answer:
      "A data structure that stores data in a last-in, first-out (LIFO) order",
    justification:
      "A stack is a data structure that stores data in a last-in, first-out (LIFO) order, where the last item added is the first item removed.",
  },
  {
    question: "What is a queue?",
    options: [
      "A data structure that stores data in a first-in, first-out (FIFO) order",
      "A data structure that stores data in a last-in, first-out (LIFO) order",
      "A data structure that stores data in a random order",
      "A data structure that stores data in a sorted order",
    ],
    answer:
      "A data structure that stores data in a first-in, first-out (FIFO) order",
    justification:
      "A queue is a data structure that stores data in a first-in, first-out (FIFO) order, where the first item added is the first item removed.",
  },
  {
    question: "What is recursion?",
    options: [
      "A programming technique where a function calls itself",
      "A programming technique where a function is called by another function",
      "A programming technique where a function is called by a loop",
      "A programming technique where a function is called by a variable",
    ],
    answer: "A programming technique where a function calls itself",
    justification:
      "Recursion is a programming technique where a function calls itself to solve a problem or perform a task.",
  },
  {
    question: "What is a binary tree?",
    options: [
      "A tree data structure where each node has at most two children",
      "A tree data structure where each node has at most three children",
      "A tree data structure where each node has at most four children",
      "A tree data structure where each node has at most five children",
    ],
    answer: "A tree data structure where each node has at most two children",
    justification:
      "A binary tree is a tree data structure where each node has at most two children, referred to as the left child and the right child.",
  },
];
// export default questionPool;

