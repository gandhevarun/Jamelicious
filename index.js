let count = 1;

function showCounter(event) {
    if (!event) {
        console.error('Event object is undefined');
        return;
    }

    const parent = event.target.closest('.item-container');
    if (parent) {
        parent.querySelector('.add-btn').style.display = 'none';
        parent.querySelector('.counter').style.display = 'flex';
    }
}

function increaseCount(event) {
    const countElement = event.target.closest('.counter').querySelector('.count-number');
    let count = parseInt(countElement.innerText);
    count++;
    countElement.innerText = count;
}

function decreaseCount(event) {
    const countElement = event.target.closest('.counter').querySelector('.count-number');
    let count = parseInt(countElement.innerText);
    if (count > 1) {
        count--;
        countElement.innerText = count;
    } else {
        const parent = event.target.closest('.item-container');
        if (parent) {
            parent.querySelector('.counter').style.display = 'none';
            parent.querySelector('.add-btn').style.display = 'inline-block';
        }
    }
}

document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        showCounter(event);
    });
});

document.querySelectorAll('.plus-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        increaseCount(event);
    });
});

document.querySelectorAll('.minus-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        decreaseCount(event);
    });
});
