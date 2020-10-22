class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}
class BinaryTree {
    constructor() {
        this.root = null
    }
    insertData(data) {
        if (this.root == null) {
            this.root = new Node(data)
            console.log(`inserting ${data} at root`);
            return
        }
        let currNode = this.root;
        function insert(currNode) {
            if (currNode.left == null) {
                currNode.left = new Node(data)
                console.log(`inserting  ${data} at curr->left`);
                return
            } else if (currNode.right == null) {
                currNode.right = new Node(data)
                console.log(`inserting  ${data} at curr->right`);
                return
            } else if (currNode.left != null) {
                insert(currNode.left)
            } else if (currNode.right != null) {
                insert(currNode.right)
            } else return null
        }
        insert(currNode)
    }
}

let bt = new BinaryTree();
bt.insertData(1);
bt.insertData(2);
bt.insertData(3);
bt.insertData(4);
bt.insertData(5);
bt.insertData(6);
console.log(bt);