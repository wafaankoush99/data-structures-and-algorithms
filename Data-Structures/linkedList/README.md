# Singly Linked List
<!-- Short summary or background information -->

## Created Node class that has properties for the value stored in the Node, and a pointer to the next Node.

&check;  LinkedList class, include a head property. and empty Linked List created.

&check;  **insert() method** 
takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.

&check;  **includes() method** takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.

&check;  **toString() method** 
takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"



***

## Challenge

## Tests prove the following functionality:

&check; Can successfully instantiate an empty linked list

&check; Can properly insert into the linked list

&check; The head property will properly point to the first node in the linked list

&check; Can properly insert multiple nodes into the linked list

&check; Will return true when finding a value within the linked list that exists

&check; Will return false when searching for a value in the linked list that does not exist

&check; Can properly return a collection of all the values that exist in the linked list

![](./linkedListTest.png)

***


## Approach & Efficiency

- ### insert(value)

   - create a new instance of Node with the given value and assign it to the head if the linked list is empty.


   - If linked list isn't empty, Create a new instance of Node with the given value and assign it to the temporary variable
Assign to temporary.next the reference in this.head.
Assign to this.head a reference to the new instance.




- ### includes(value)

Set the local variable current to the Node reference in this.head

While current is not null, loop

If current.value is equal to the given value, return with true.

Set current to current.next.

return false.


- ### toString()

set local variable current to Node reference in this.head

declare an empty string

while current is nort NULL

add the current value to the string with concatenate

set current to current.next

***

## API

[Show Board on MERO](https://miro.com/welcomeonboard/hWMltNg2K7jA0YBOgTiBp5itbvCPnhNmYe4i0IIK5GnOK211bP7J5C9tRaJ8n9Ro)

![](api.jpg)

