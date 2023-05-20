let legendItem = document.querySelectorAll('.legend__item');
let unitsList = document.querySelectorAll('.unit');
let input = document.querySelector('#editor__input');
let text = document.querySelector('text');
let btn = document.querySelector('#btn');
let tbody = document.querySelector('#tbody');
let delet = document.querySelector('.delete');
let td = document.querySelector('td');
let tr = document.querySelector('tr');

legendItem.forEach(function (item, index) {
    item.addEventListener('mouseover', function () {
        unitsList[index].classList.add('hovered');
    });

    item.addEventListener('mouseout', function () {
        unitsList[index].classList.remove('hovered');
    });
});

btn.addEventListener('click', function (event) {
    event.preventDefault();
    let tr = document.createElement('tr');
    tr.classList.add('table__row3');
    tbody.append(tr);

    let td = document.createElement('td');
    td.classList.add('name3');
    tr.append(td);
    td.textContent = input.value;

    let td2 = document.createElement('td');
    td.classList.add('category3');
    tr.append(td);
    td.textContent = input.value;

    let td3 = document.createElement('td');
    td.classList.add('price3');
    tr.append(td);
    td.textContent = input.value;
})

tbody.addEventListener('click', function (event) {
    event.target.closest('tr').remove();
})