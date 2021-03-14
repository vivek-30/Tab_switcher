var switcher = document.getElementById('switcher'),
    display = document.getElementById('display'),
    ul = document.getElementById('list');

switcher.hidden = true;
isTabbing = false;
var temp = null;
var li = document.querySelectorAll('#list li');
var pos = 0;

setup();

document.addEventListener('keydown', (e) => {

    if (e.key == 'Control') {
        isTabbing = true;
        switcher.hidden = false;
        temp = head;
    }

    if (e.key == 'f' && isTabbing && temp) {
        li[pos].className = "normal";
        temp = temp.next;
        pos = (pos + 1) % totalElements;
        li[pos].classList.add('special');
    }
    else if(e.key == 'b' && isTabbing && temp) {
        li[pos].className = "normal";
        temp = temp.prev;
        pos = pos ? (pos -1) % totalElements : totalElements - 1;
        li[pos].classList.add('special');
    }
});

document.addEventListener('keyup', function (e) {
    if (e.key == 'Control') {
        isTabbing = false;
        moveToForward(temp);
        switcher.hidden = true;
        setup();
    }
});

function setup() {

    display.innerHTML = `<img id="dp" src="${head.data.src}" alt="application">
        <p class="name">${head.data.name}</p>
        <p id="description">${head.data.description}</p>`

    ul.innerHTML = '';
    temp = head;

    do {
        ul.innerHTML += `
            <li>
            <img src="${temp.data.src}" class="normal" alt="${temp.data.name}-app">
            <p class="name">${temp.data.name}</p>
            </li>
            `
        temp = temp.next;
    } while (temp != head);

    li = document.querySelectorAll('#switcher ul li');
    pos = 0;
    li[pos].classList.add('special');
}
