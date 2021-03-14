class Node {
    constructor(data) {
        this.data = data;
        this.next = this;
    }
}

var head = null;
var tail = null;
var total_elements = 0;

const createList = (data) => {

    var newNode = new Node(data);
    total_elements++;

    if (!head) {
        head = newNode;
        tail = head;
        return;
    }

    tail.next = newNode;
    tail = newNode;
    tail.next = head;
}

function moveToForward(node) {
    if (head == null || head == node)
        return;
    let temp = head;
    while (temp.next != node) {
        temp = temp.next;
    }

    let is_true = false;

    if (temp.next == tail)
        is_true = true;

    temp.next = temp.next.next;
    node.next = head;
    head = node;
    if (is_true)
        tail = temp;
    tail.next = node;
}

function print(head) {
    if (head === null) {
        console.log('empty list');
        return;
    }

    let temp = head;
    do {
        console.log(temp.data);
        temp = temp.next;
    } while (temp != head);
}

// this is still a incomplete function
function remove(node) {
    if (!head)
        return;

    total_elements--;

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

        let is_tail = false;
        if (temp = tail) {
            is_tail = true;
        }

        temp.next = node.next;
        node.next = null;
    }
}

const data = [
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

data.forEach(item => {
    createList(item);
});

