# Stacks and Queues
<!-- Short summary or background information -->
Implement binary tree and binary search tree
## Challenge
<!-- Description of the challenge -->
### Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
### Create a BinaryTree class
Define a method for each of the depth first traversals called **preOrder**, **inOrder**, and **postOrder** which returns an array of the values, ordered appropriately.
### Create a BinarySearchTree class
Define a method named **add** that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
Define a method named **contains** that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
### Tree whiteboard
![Tree whiteboard](../assets/tree.jpg)
![getMax whiteboard](../assets/getmaxintree.jpg)
![BFS whiteboard](../assets/breadth-first.jpg)

## API
<!-- Description of each method publicly available to your Stack and Queue-->
### .preOrder()
#### return value
Return array containg tree's values ordered based in preorder method.

### .inOrder()
#### return value
Return array containg tree's values ordered based in ineorder method.

### .postOrder()
#### return value
Return array containg tree's values ordered based in posteorder method.

### .add(value)
#### return value
No return Value

### .contains()
#### return value
Return true if the tree contains the value and false if not.

### .getMax()
#### return value
Return the maximum number in the tree.

### .traverseBFS()
#### return value
Return tree's content in Breadth First Traverse.
