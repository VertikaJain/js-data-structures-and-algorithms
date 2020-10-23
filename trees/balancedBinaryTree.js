// BALANCED BINARY TREE IMPLEMENTATION USING 
// BREATH FIRST SEARCH ALGO, 
// QUEUE DATA STRUCTURE AS ARRAY & 
// LOOPING (WITHOUT RECURSION)

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
class BinaryTree {
    constructor() {
        this.root = null
    }
    // CREATING BALANCED BINARY TREE
    insertData(data) {
        let newNode = new Node(data)
        if (this.root == null) {
            this.root = newNode
            return
        }
        let queue = [this.root];
        while (queue.length > 0) {
            let curr = queue.shift()
            if (curr.left == null) {
                curr.left = newNode
                return
            }
            queue.push(curr.left)
            if (curr.right == null) {
                curr.right = newNode
                return
            }
            queue.push(curr.right)
        }
    }
    // PRINTING ALL NODES (PREORDER TRAVERSAL)
    traverse() {
        if (this.root == null) {
            return
        }
        let q = [this.root], data = []
        while (q.length > 0) {
            let curr = q.shift()
            data.push(curr.data)
            if (curr.left != null) {
                q.push(curr.left)
            }
            if (curr.right != null) {
                q.push(curr.right)
            }
        }
        return data
    }
    // SEARCHING AN ELEMENT IN THE TREE
    search(data) {
        if (this.root == null) return false
        if (this.root.data == data) return true
        let q = [this.root]
        while (q.length > 0) {
            let curr = q.shift()
            if (curr.left != null) {
                if (curr.left.data == data) return true
                q.push(curr.left)
            }
            if (curr.right != null) {
                if (curr.right.data == data) return true
                q.push(curr.right)
            }
        }
        return false
    }
}
let bt = new BinaryTree();
let insertArray = [5, 2, 1, 7, 6, 8, 4, 3]
for (let i of insertArray)
    bt.insertData(i)
console.log(bt.traverse());
console.log(bt.search(4));
console.log(bt.search(41));
console.log(bt.search(1));
console.log(bt.search(8));