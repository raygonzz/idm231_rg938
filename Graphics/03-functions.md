---
marp: true
class: invert
footer: 'Functions'
headingDivider: 4
math: katex
paginate: true
style: |
  section::after {
    font-size: 16px;
  }
theme: default
---

<style>
  pre {
    line-height: 1.5;
  }
  section.smaller h3 {
    color: #fafafa;
    font-size: 36px;
    height: 100vh;
    display: flex;
    align-items: flex-end;
  }
  section.center-title h1 {
    color: #fafafa;
    text-align: center;
  }
</style>

- [IDM231: Functions](#idm231-functions)
- [Lesson Objectives](#lesson-objectives)
- [Objective: Introduce Functions](#objective-introduce-functions)
  - [Function Example](#function-example)
  - [Function Structure](#function-structure)
  - [Function Parameters](#function-parameters)
  - [Working With Parameters](#working-with-parameters)
  - [Function Return](#function-return)
  - [Calling a Function](#calling-a-function)
  - [Getting Values Out of a Function](#getting-values-out-of-a-function)
  - [Getting Multiple Values Out of a Function](#getting-multiple-values-out-of-a-function)
  - [Return Arrays](#return-arrays)
  - [Arrow Functions](#arrow-functions)
    - [Arrow Functions - Single Statement](#arrow-functionsngle-statement)
    - [Arrow Function - Parameters](#arrow-functionrameters)
    - [Arrow Functions - Single Parameter](#arrow-functionsngle-parameter)
- [Objective: Discuss Variable Scope](#objective-discuss-variable-scope)
  - [Variable Scope](#variable-scope)
    - [Local vs Global vs Block](#local-vs-global-vs-block)
    - [Local Scope](#local-scope)
    - [Global Scope](#global-scope)
    - [`var` Does Not Have Block Scope](#var-does-not-have-block-scope)
    - [`let` & `const` Do Have Block Scope](#let--const-do-have-block-scope)

# IDM231: Functions

# Lesson Objectives

* Introduce Functions
* Discuss Variable Scope

# Introduce Functions

<!-- Browsers require very detailed instructions about what we want them to do. Therefore, complex scripts can run to hundreds (even thousands) of lines. Programmers use functions, methods, and objects to organize their code. -->

<!-- _Functions_ consist of a series of statements that have been grouped together because they perform a specific task. A _method_ is the same as a function, except methods are created inside an object. -->

## Function Example

```javascript
function update_message() {
  const el = document.getElementById('message');
  el.textContent = msg;
  return msg;
}

let message = update_message();
```

<!-- Functions let you group a series of statements together to perform a specific task. If different parts of a script repeat the same task, you can reuse the function rather than repeating the same set of statements. -->

<!-- When you group tasks together into a function, you need to give your function a name, which should describe the task it is performing. When you ask it to perform the task it's known as **calling** the function. -->

## Function Structure

```javascript
function update_message() {
  const el = document.getElementById('message');
  el.textContent = msg;
  return msg;
}

update_message();
```

<!-- The steps the function needs to perform in are packaged up in a code block. A code block consists of one or more statements contained within curly braces. -->

## Function Parameters

```javascript
function update_message(name, message) {
  console.log('Hello ' + name + ', ' + message);
  // or with ES6
  console.log(`Hello ${name}, ${message}`);
}

update_message();
```

<!-- Some functions need to be provided with information in order to achieve a given task. Pieces of information passed to a function are known as **parameters**. -->

## Working With Parameters

```javascript
function get_area(width, height) {
  return width * height;
}

const total_area = get_area(3, 5);

const wall_width = 3;
const wall_height = 5;

const total_area = get_area(wall_width, wall_height);
```

<!-- Inside the function, the parameters act like variables. -->

## Function Return

```javascript
function update_message(name, message) {
  const new_message = `Hello ${name}, ${message}`;
  return new_message;
}

let my_message = update_message('Phil', 'Welcome to my script!');

console.log(my_message); // Hello Phil, Welcome to my script!
```

<!-- When you write a function and you expect it to provide you with an answer, the response is known as a **return value**. Using the `return` keyword, the specified value is returned from inside the function, back to the placeholder that originally called the function. When a return statement is encountered, the execution of the function immediately stops and the current value of the returned variable is extracted. If the function contains more lines of code, they are not executed. -->

---

<!--
_footer: ""
_paginate: hide
-->

![bg](https://res.cloudinary.com/pjs-uxid/image/upload/v1671115007/scripting_one/functions_visualized-1_uf3qqc.svg)

<!-- Let's review. You declare a function using the **function** keyword. -->

<!-- You give the function a **name** (sometimes called an **identifier**) followed by parentheses. -->

<!-- The **statements** that perform the task sit in a code block, inside the curly braces. -->

---

<!--
_footer: ""
_paginate: hide
-->

![bg](https://res.cloudinary.com/pjs-uxid/image/upload/v1671115469/scripting_one/functions_visualized-2.png)

## Calling a Function

```javascript
function say_hello() {
  console.log('Hello!');
}

say_hello();
```

<!-- Once you declare a function, you can execute all the statements between the curly braces with a single line of code. This is know as **calling the function**. This is done by using the function name followed by parentheses. You can call the same function as many times as you want within the same Javascript file. -->

## Getting Values Out of a Function

```javascript
function get_area(width, height) {
  const area = width * height;
  return area;
}

let wall = get_area(3, 5); // 15
let wall = get_area(8, 5); // 40
```

<!-- Some functions return information to the code that called them. _wall1_ will be equal to 15, while _wall2_ will hold the value 40. This also demonstrates how the same function can be used to perform the same steps with different values. -->

## Getting Multiple Values Out of a Function

```javascript
function get_size(width, height, depth) {
  const area = width * height;
  const volume = width * height * depth;

  // Does this work?
  // Why or why not?
  return area;
  return volume;
}

let sizes = get_size(3,2,3);
```

<!-- Someone tell me, how could we get more than one value out of a function? -->

## Return Arrays

```javascript
function get_size(width, height, depth) {
  const area = width * height;
  const volume = width * height * depth;
  const sizes = [area, volume];
  return sizes;
}

let area = get_size(3,2,3)[0];
let volume = get_size(3,2,3)[1];
```

<!-- Functions can return more than one value using an array. -->

## Arrow Functions

```javascript
function my_function() {
  // ...
}

const my_function = function() {
  // ...
}

const my_function = () => {
  // ...
}
```

<!-- ES6 introduced a new syntax for the anatomy of a function, the _arrow function_. Visually, the arrow function simplifies the syntax, making it shorter, which is a welcome change. -->

### Arrow Functions - Single Statement

```javascript
const my_function = function() {
  do_something();
}

// Becomes

const my_function = () => do_something();
```

<!-- If the function of the body contains a single statement, you can omit the brackets and write it all on a single line. -->

### Arrow Function - Parameters

```javascript
const my_function = function(param1, param2) {
  do_something(param1, param2);
};

// Becomes

const my_function = (param1, param2) => do_something(param1, param2);
```

<!-- Parameters are passing in the parentheses. -->

### Arrow Functions - Single Parameter

```javascript
const my_function = param => do_something(param);
```

<!-- If you have one (and only one) parameter, you can omit the parentheses completely. -->

<!-- Because of the short syntax, arrow functions encourage the use of small functions, which is one of our goals when writing clean, concise scripts. -->

# Discuss Variable Scope

## Variable Scope

### Local vs Global vs Block

<!-- The location where you declare a variable will affect where it can be used within your code. If you declare it within a function, it can only be used within that function This is known as the variable's **scope**. -->

### Local Scope

```javascript
function get_area(width, height) {
  const area = width * height;
  return area;
}

console.log(area); // ⚠️ ERROR
```

<!-- When a variable is created inside a function using the var keyword, it can only be used in that function. It is called a local variable or function-level variable. It is said to have local scope or function-level scope. It cannot be accessed outside of the function in which it was declared. -->

<!-- In this example, `area` is a local variable, only available within the `get_area` function. -->

<!-- `area` is only available within the `get_area()` function. Trying to access it outside of that function will produce an error. -->

### Global Scope

```javascript
let global_scope_variable = "I'm a global scope variable";

function test() {
    // function scope variable example
    const function_scope_variable = "I'm a function scope variable";
    console.log(global_scope_variable); // I'm a global scope variable
    console.log(function_scope_variable); // I'm a function scope variable
}

test();

console.log(global_scope_variable); // I'm a global scope variable
console.log(function_scope_variable); // error: function_scope_variable is not defined
```

<!-- If you create a variable outside of a function, then it can be used anywhere within the script. It is called a **global** variable and has **global scope**. -->

<!-- Global variables are stored in memory for as long as the web page is loaded in the browser, which means they take up more memory than local variables. -->

### `var` Does Not Have Block Scope

```javascript
var x = 1;

function my_function() {
  x = 2;
}

console.log(x); // 2
```

<!-- Variables declared with the `var` keyword do not have block scope, which means if a variable is introduced within a code block, those variables are scoped to the containing function, and the effects of setting them persist beyond the block itself. -->

### `let` & `const` Do Have Block Scope

```javascript
let x = 1;

function my_function() {
  let x = 2;
  console.log(x); // 2
}

console.log(x); // 1
```

<!-- By contrast, variables declared with `let` and `const` do have block scope. The `x = 2` is limited in scope to the block in which it was defined. (This example is using `let`, but the rules are the same for `const`) -->

<!-- _examples/functions/scope.js_ -->
