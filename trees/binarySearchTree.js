// BINARY SEARCH TREE USING RECURSION
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
    // Insert data to BST using Recursion
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
    // Searching data Recursively in BST
    searchData(data) {
        function search(curr) {
            if (curr == null) return false
            if (curr.data == data) return true
            if (data < curr.data) return search(curr.left)
            if (data > curr.data) return search(curr.right)
            // return (search(curr.left) || search(curr.right)) -> Other option
            return false
        }
        return search(this.root)
    }
    // Inorder Traversal using Recursion -> results to a sorted array
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

console.log(bst.searchData(7));
console.log(bst.searchData(37));
console.log(bst.searchData(3));
console.log(bst.searchData(5));
console.log(bst.searchData(-5));