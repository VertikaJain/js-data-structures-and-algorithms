class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insertData(data) {
        const newNode = new Node(data)
        if (this.root == null) {
            this.root = newNode
            return
        }
        let curr = this.root
        function insert(curr) {
            if (data < curr.data) {
                if (curr.left == null) {
                    curr.left = newNode
                    return
                }
                insert(curr.left)
            }
            if (data > curr.data) {
                if (curr.right == null) {
                    curr.right = newNode
                    return
                }
                insert(curr.right)
            }
            return
        }
        insert(curr)
    }
    // Inorder Traversal-> results to a sorted array
    traverseBST() {
        if (this.root == null) return
        let curr = this.root, data = []
        function traverse(curr) {
            if (curr.left != null) traverse(curr.left)
            data.push(curr.data)
            if (curr.right != null) traverse(curr.right)
            return data
        }
        traverse(curr)
        return data
    }
}

let bst = new BinarySearchTree();
let insertArray = [5, 2, 1, 7, 6, 8, 4, 3]
for (let i of insertArray)
    bst.insertData(i)
console.log(bst.traverseBST())