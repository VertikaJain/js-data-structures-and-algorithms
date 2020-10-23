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
}

let bt = new BinaryTree();
bt.insertData(1);
bt.insertData(2);
bt.insertData(3);
bt.insertData(4);
bt.insertData(5);
bt.insertData(6);
bt.insertData(7);
bt.insertData(8);
console.log(bt.traverse());