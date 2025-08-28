# Milestone-5-assignment
<b style="font-size: 22px;">🟠🟠 Answer to the question no-1 🟠🟠</b>

<b>✅getElementById('id')</b> <br>

<li> <b>Returns:</b> A single element with the specified id.</li>
<li> <b>Usage:</b> document.getElementId('myId')</li>
<li><b>Note:</b> IDs should be unique in a page.</li> <br>

✅getElementsByClassName('class')

<li> <b>Returns:</b>A live HTMLCollection of all elements with the given class.</li>
<li> <b>Usage:</b>document.getElementsByClassName('myClass')</li>
<li> <b>Access by index:</b>collection[0]</li> <br>

✅querySelector('selector')

<li> <b>Returns:</b> The first element that matches the CSS selector.</li>
<li> <b>Usage:</b> document.querySelector('.myClass') or
  document.querySelector('#myId')</li> <br>

✅querySelectorAll('selector')

<li> <b>Returns:</b> A static NodeList of all elements matching the CSS selector.</li>
<li> <b>Usage:</b> document.querySelectorAll('div.myClass')</li> <br>

<b style="font-size: 22px;">🟠🟠 Answer to the question no-2 🟠🟠</b> <br>

To create and insert a new element into the DOM:
1. Create element  ➡
let element=document.createElement('div');
2. Add content     ➡
elemet.textContent='Hello';

3. Insert into DOM ➡
parent.appendChild(element);
or
parent.prepend(element);

<b style="font-size: 22px;">🟠🟠 Answer to the question no-3 🟠🟠</b>

Event Bubbling is when an event starts on the target element and automatically propagates up to its parent elements in
the DOM. It works from the innermost element to the outer elements and can be stopped using event.stopPropagation().

<b style="font-size: 22px;">🟠🟠 Answer to the question no-4 🟠🟠</b>

➡ Event Delegation is a technuque in JavaScript where a single event listener is added to a parent element to handle
events on its child elements.

➡ It is useful because it reduces memory usage, simplifies code, and works for dynamically added elements.

<b style="font-size: 22px;">🟠🟠 Answer to the question no-5 🟠🟠</b>

➡ preventDefault() stops the browser's default action for an event.
for example: following a link or submitting a form.

➡ stopPropagation() stops the event from bubbling up or capturing down the DOM tree.




🌐 Live Link: https://sheikhkiron.github.io/Milestone-5-assignment/

