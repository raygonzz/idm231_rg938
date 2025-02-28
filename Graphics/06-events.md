---
marp: true
class: invert
footer: 'Events'
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

- [IDM231: Events](#idm231-events)
- [Lesson Objectives](#lesson-objectives)
- [Objective: Introduce Events](#objective-introduce-events)
  - [Events](#events)
  - [Examples of UI Events](#examples-of-ui-events)
  - [Examples of Keyboard Events](#examples-of-keyboard-events)
  - [Examples of Mouse Events](#examples-of-mouse-events)
  - [Terminology](#terminology)
  - [How Events Trigger JavaScript Code](#how-events-trigger-javascript-code)
    - [How Events Trigger JavaScript Code](#how-events-trigger-javascript-code-1)
    - [How Events Trigger JavaScript Code](#how-events-trigger-javascript-code-2)
    - [How Events Trigger JavaScript Code](#how-events-trigger-javascript-code-3)
- [Objective: Discuss Binding Events](#objective-discuss-binding-events)
  - [Three Ways to Bind Events to Elements](#three-ways-to-bind-events-to-elements)
  - [Traditional DOM Event Handlers](#traditional-dom-event-handlers)
  - [Event Listeners](#event-listeners)
  - [Event Listeners (continued)](#event-listeners-continued)
    - [Using Parameters With Event Handlers/Listeners](#using-parameters-with-event-handlerslisteners)
  - [Changing Default Behavior](#changing-default-behavior)
    - [Custom form events](#custom-form-events)
  - [Different Types of Events](#different-types-of-events)

# IDM231: Events

# Lesson Objectives

* Introduce Events
* Discuss Binding Events

# Introduce Events

## Events

* Interactions create events
* Events trigger code
* Code responds to users

<!-- When you browse the web, your browser registers different types of events. It's the browser's way of saying, "Hey, this just happened." Your script can then respond to these events. Scripts often respond to these events by updating the content of the web page (via the Document Object Model) which makes the page feel more interactive. -->

<!-- _click_ Events occur when users click or tap on a link, hover or swipe over an element, type on the keyboard, resize the window, or when the page they requested has loaded. -->

<!-- _click_ When an event occurs, or fires, it can be used to trigger a particular function. Different code can be triggered when users interact with different parts of the page. -->

<!-- _click_ Last week we saw how the DOM can be used to update a page. The events can trigger the kinds of changes the DOM is capable of. This is how a web page reacts to users. -->

## Examples of UI Events

| UI Event | Description |
| --------  | ---------  |
| `load` | web page finished loading |
| `unload` | web page is unloaded |
| `error` | JS error OR asset doesn't exist |
| `resize` | window has been resized |
| `scroll` | user has scrolled up/down |

## Examples of Keyboard Events

| Keyboard Event | Description |
| --------  | ---------  |
| `keydown` | user presses a key |
| `keyup` | user releases a key |
| `keypress` | character is being inserted |

## Examples of Mouse Events

| Mouse Event | Description |
| --------  | ---------  |
| `click` | user presses/releases |
| `dblclick` | user presses/releases twice |
| `mousedown` | user presses |
| `mouseup` | user releases |
| `mousemove` | user moves the mouse |
| `mouseover` | user moves mouse over an element |
| `mouseout` | user moves mouse off an element |

## Terminology

- Events **fire**
- Events **trigger**

<!-- _click_ When an event has occurred, it is often described as having **fired** or been **raised**. -->

<!-- _click_ Events are said to **trigger** a function or script. When the `click` event fires, it could trigger a script. -->

## How Events Trigger JavaScript Code

- Select the element node(s)
- Indicate which event is the trigger
- State the code you want to run

<!-- When the user interacts with the HTML on a page, there are three steps involved in getting it to trigger some JavaScript code. Together these steps are known as **event handling**. -->

<!-- _click_ Select the element node(s) you want the script to respond to. -->

<!-- _click_ Indicate which events on the selected node(s) will trigger the response. This is called _binding_ an event to a DOM node. -->

<!-- _click_ State the code you want to run when the event occurs. When the event occurs on a specific element, it will trigger a function. -->

### How Events Trigger JavaScript Code

<!--
_footer: ""
_paginate: hide
-->

- Select the element node(s)

```javascript
const my_element = document.querySelector('#my_element');
```

- Indicate which event is the trigger
- State the code you want to run

### How Events Trigger JavaScript Code

<!--
_footer: ""
_paginate: hide
-->

- Select the element node(s)

```javascript
const my_element = document.querySelector('#my_element');
```

- Indicate which event is the trigger

```javascript
my_element.addEventListener('click', () => {});
```

- State the code you want to run

### How Events Trigger JavaScript Code

- Select the element node(s)

<!--
_footer: ""
_paginate: hide
-->

```javascript
const my_element = document.querySelector('#my_element');
```

- Indicate which event is the trigger

```javascript
my_element.addEventListener('click', () => ...);
```

- State the code you want to run

```javascript
my_element.addEventListener('click', () => { /* code */});
```

# Discuss Binding Events

## Three Ways to Bind Events to Elements

1. ~~HTML Event Handlers~~
1. DOM Event Handlers
1. DOM Event Listeners

<!-- Event handlers let you indicate which event you are waiting for on any particular element. There are three types of event handlers: -->

<!-- _click_ HTML event handlers are considered a bad practice. We're going to skip them completely. -->

<!-- _click_ Traditional DOM event handlers are supported in all major browsers and help us separate the JavaScript from the HTML. -->

<!-- _click_ Event listeners are the favored way of handling events. -->

## Traditional DOM Event Handlers

```javascript
// element.event = code
// element.onevent = function_name;

function check_user_name() {
  // code to check user name
}

const el = document.getElementById('username');
el.onblur = check_user_name;
```

<!-- Here is the syntax to bind an event to an element using an event handler, and to indicate which function should execute when that event fires. -->

<!-- Notice how the event handler is the last line. When a function is called, the parentheses that follow its name tell the JavaScript interpreter to "run this code now". We don't want the code to run until the event fires, so the parenthesis are omitted from the event handler on the last line. -->

<!-- Let's look at this example in the browser _(examples/events/handlers.html)_ -->

## Event Listeners

```javascript
element.addEventListener('event', function_name [, Boolean]);

const my_div = document.getElementById('my_div'); // could be null

if (my_div)
  my_div.addEventListener('click', my_function, false);
```

<!-- Event listeners can deal with more than one function at a time. Here is the syntax to bind an event to an element using an event listener, and to indicate which function should execute when that event fires. -->

<!-- _element_ is the DOM element node to target. -->

<!-- _event_ is the event to bind node(s) to in quote marks. -->

<!-- _function_name_ is the name of the function that should be called. -->

<!-- _Event Flow_ is the boolean at the end which indicates something called _capture_, which is usually set to false. -->

## Event Listeners (continued)

```javascript
function check_user_name() {
  // code to check user name
}

const el = document.getElementById('username');

if (el)
  el.addEventListener('blur', check_user_name, false);
```

<!-- Let's look at this example in the browser _(examples/events/listeners.html)_ -->

### Using Parameters With Event Handlers/Listeners

```javascript
el.addEventListener('blur', function() {
  check_user_name(5);
}, false);

el.addEventListener('blur', () => {
  check_user_name(5);
}, false);
```

<!-- Because you cannot have parentheses after the function names in event handlers/listeners, passing arguments requires a workaround. We can use _anonymous_ functions. -->

<!-- Let's look at this example in the browser _(examples/events/anonymous\_listeners.html)_ -->

## Changing Default Behavior

```javascript
preventDefault();
```

<!-- The event object has methods that change the default behavior of an element and how the element's ancestors respond to the event. -->

<!-- _click_ Some events, such as clicking links and submitting forms, take the user to another page. To prevent the default behavior of such elements, you can use the event object's `preventDefault()` method. -->

### Custom form events

```javascript
function handle_submit(event) {
  event.preventDefault();
  // Do custom stuff
}

const my_form = document.querySelector('#my_form');

if (my_form)
  my_form.addEventListener('submit', handle_submit);

```

```html
<form action="api/post.php" method="post" id="my_form">
```

## Different Types of Events

- W3C DOM Events
- HTML5 Events
- BOM Events (browser object model)

<!-- Different types of events are grouped into the following categories. We will go through a bunch of examples of the different types over the next few example screens. Most are the result of the user interacting with the HTML. -->
