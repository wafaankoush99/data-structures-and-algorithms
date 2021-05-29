

## Stack Class ~

### Methods & Approach & Efficiency 

This object should be aware of a default empty value assigned to top when the stack is created.

 **push** which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
 
 ```
 declare a new Node with a value
set the new Node.next to the top of the Node
set top equal to new Node
```
 
 
 **pop** that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
Should raise exception when called on empty stack

```
First ->

if stack is empty throw an error



Second ->



set a current node to the top

if there is more than one node
set top equal to top.next
then return current value


if there is one node
set top equal to null
return temp.value

```

**peek** that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
Should raise exception when called on empty stack

```
return the value of the top of Node if is exist
throw an error if it is empty
```

**isEmpty** that takes no argument, and returns a boolean indicating whether or not the queue is empty.

```
return true if the stack is empty
(this.top === NULL)
return false if it is not
```
***




## Queue Class

### Methods Approach & Efficiency 

**enqueue** which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.

```
if the queue is empty
declare a temporary as a new Node
set front = temp node
set back (rear) = temp node
return out
set a temp to the back of the node
set back.next equal to temp
back equal to temp
```

**dequeue** that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
Should raise exception when called on empty queue

```
First ->

if stack is empty throw an error



Second ->



set a current node to the front

if there is more than one node
set front equal to front.next
then return current value


if there is one node
set front equal to null
return temp.value
```


**peek** that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
Should raise exception when called on empty queue

```
return the value of the front of Node if is exist
throw an error if it is empty
```

**isEmpty** that takes no argument, and returns a boolean indicating whether or not the stack is empty.

```
return true if the stack is empty
(this.top === NULL)
return false if it is not
```


***

## Tests ~

## [Actions](https://github.com/wafaankoush99/data-structures-and-algorithms/actions)

✓ Can successfully push onto a stack

✓ Can successfully push multiple values onto a stack

✓ Can successfully pop off the stack

✓ Can successfully empty a stack after multiple pops

✓ Can successfully peek the next item on the stack

✓ Can successfully instantiate an empty stack

✓ Calling pop or peek on empty stack raises exception

✓ Can successfully enqueue into a queue

✓ Can successfully enqueue multiple values into a queue

✓ Can successfully dequeue out of a queue the expected value

✓ Can successfully peek into a queue, seeing the expected value

✓ Can successfully empty a queue after multiple dequeues

✓ Can successfully instantiate an empty queue

✓ Calling dequeue or peek on empty queue raises exception

![stack-queues](https://user-images.githubusercontent.com/78326110/120086920-009c7300-c0ec-11eb-8304-a9a981c8d770.png)

***



## [Board](https://miro.com/welcomeonboard/NczItk6NoDNVJSILLxBE6pFtdwDVKovEhymsPrWJSHPOzlJeX2tXtpkLoA8A7Dy3)

![stacks and queues](https://user-images.githubusercontent.com/78326110/120086827-080f4c80-c0eb-11eb-95b8-4e0f9c88b9da.jpg)


![stacks and queues (1)](https://user-images.githubusercontent.com/78326110/120086832-0ba2d380-c0eb-11eb-8079-49700fd11387.jpg)

![stacks and queues (2)](https://user-images.githubusercontent.com/78326110/120087211-aa7cff00-c0ee-11eb-87ae-8e84089617b2.jpg)

***

[Pull Request](https://github.com/wafaankoush99/data-structures-and-algorithms/pull/49)


