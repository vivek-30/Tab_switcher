var switcher = document.getElementById('switcher'),
    display = document.getElementById('display'),
    ListContainer = document.getElementById('list-container'),
    dataList = document.querySelectorAll('#list-container li');

switcher.hidden = true;
isTabbing = false;
var temp = null;
var currPos = 0;

// Initial Setup for the App.
setup();

document.addEventListener('keydown', (e) => {

    if (e.key == 'Control') {
        isTabbing = true;
        switcher.hidden = false;
        temp = head;
    }

    if ((e.key === 'f' || e.key === 'b') && isTabbing && temp) {
        let key = e.key;
        dataList[currPos].className = "normal";
        temp = key === 'f' ? temp.next : temp.prev;
        currPos = key === 'f' ? ((currPos + 1) % totalElements) : currPos ? ((currPos - 1) % totalElements) : (totalElements - 1);
        dataList[currPos].classList.add('special');
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

    ListContainer.innerHTML = '';
    temp = head;

    do {
        ListContainer.innerHTML += `
            <li>
            <img src="${temp.data.src}" class="normal" alt="${temp.data.name}-app">
            <p class="name">${temp.data.name}</p>
            </li>
            `
        temp = temp.next;
    } while (temp != head);

    dataList = document.querySelectorAll('#list-container li');
    currPos = 0;
    dataList[currPos].classList.add('special');
}
