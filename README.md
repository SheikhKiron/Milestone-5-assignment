# Milestone-5-assignment
🟠🟠 Answer to the question no-1 🟠🟠

🔵getElementById('id')
➡ Returns: A single element with the specified id.
➡ Usage: document.getElementId('myId')
➡ Note: IDs should be unique in a page.

🔵getElementsByClassName('class')
➡ Returns:A live HTMLCollection of all elements with the given class.
➡ Usage:document.getElementsByClassName('myClass')
➡ Access by index:collection[0]

🔵querySelector('selector')
➡ Returns: The first element that matches the CSS selector.
➡ Usage: document.querySelector('.myClass') or
document.querySelector('#myId')

🔵querySelectorAll('selector')
➡ Returns: A static NodeList of all elements matching the CSS selector.
➡ Usage: document.querySelectorAll('div.myClass')

🟠🟠 Answer to the question no-2 🟠🟠
To create and insert a new element into the DOM:
1. Create element ➡
let element=document.createElement('div');
2. Add content ➡
elemet.textContent='Hello';

3. Insert into DOM ➡
parent.appendChild(element);
or
parent.prepend(element);

🟠🟠 Answer to the question no-3 🟠🟠

Event Bubbling is when an event starts on the target element and automatically propagates up to its parent elements in the DOM. It works from the innermost element to the outer elements and can be stopped using event.stopPropagation().

🟠🟠 Answer to the question no-4 🟠🟠

➡ Event Delegation is a technuque in JavaScript where a single event listener is added to a parent element to handle events on its child elements.

➡ It is useful because it reduces memory usage, simplifies code, and works for dynamically added elements.

🟠🟠 Answer to the question no-5 🟠🟠

➡ preventDefault() stops the browser's default action for an event.
for example: following a link or submitting a form.

➡ stopPropagation() stops the event from bubbling up or capturing down the DOM tree.


🌐 Live Link: https://sheikhkiron.github.io/Milestone-5-assignment/

