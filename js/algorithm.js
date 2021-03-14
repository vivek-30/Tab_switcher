class Node {
    constructor(data) {
        this.data = data;
        this.next = this;
        this.prev = this;
    }
}

var head = null;
var tail = null;
var totalElements = 0;

const createList = (data) => {

    var newNode = new Node(data);
    totalElements++;

    if (!head) {
        head = tail = newNode;
        return;
    }

    tail.next = newNode;
    newNode.prev = tail;
    tail = newNode;
    tail.next = head;
    head.prev = tail;
}

const moveToForward = (node) => {
    if (head == null || head == node)
        return;

    let temp = head;
    let isTailNode = false;

    while (temp.next != node) {
        temp = temp.next;
    }

    if (temp.next == tail)
        isTailNode = true;

    if(!isTailNode){
        temp.next = node.next;
        node.next.prev = temp;
    }
    else{
        tail = tail.prev;
    }

    node.next = head;
    head.prev = node;
    head = node;
    tail.next = head;
    head.prev = tail;
}

const print = (head) => {
    if (head === null) {
        console.log('List is Empty');
        return;
    }

    let temp = head;
    do {
        console.log(temp.data);
        temp = temp.next;
    } while (temp != head);
}

// this is still a incomplete function
const remove = (node) => {
    if (!head)
        return;

    totalElements--;

    if (node.next == node) {
        head = null;
        tail = null;
        return;
    }

    if (head == node) {
        head = head.next;
        tail.next = head;
        node.next = null;
    }
    else {
        let temp = head;
        while (temp.next != node) {
            temp = temp.next;
        }

        let isTailNode = false;
        if (temp == tail) {
            isTailNode = true;
        }

        temp.next = node.next;
        node.next = null;
    }
}

const Data = [
    {
        name: 'Finder',
        description: 'Finder is where you start exploring your macbook stuff',
        src: "./images/finder.jpeg"
    }
    ,
    {
        name: 'Visual Studio Code',
        description: 'VS Code is used for managing every projects and codebases smoothly',
        src: "./images/vs_code.png"
    }
    ,
    {
        name: 'Terminal',
        description: 'Terminal is a command line interface tool to accomplish every single task',
        src: "./images/terminal.png"
    }
    ,
    {
        name: 'Sublime Text-3',
        description: 'It is a light weight text editor which support a variety of languages to run on',
        src: "./images/sublime.png"
    }
    ,
    {
        name: 'MX Player',
        description: 'Mx player is used for watching videos/movies',
        src: "./images/mx-player.png"
    }
    ,
    {
        name: 'Google Chrome',
        description: 'Google chrome is wonderful web browser for internet surffing',
        src: "./images/chrome.png"
    }
];

Data.forEach(item => {
    createList(item);
});
