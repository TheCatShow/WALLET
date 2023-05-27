let btn = form.addBtn;
let tbody = document.querySelector('#tbody');
let purchaseArray = [];
let categories = document.querySelectorAll('.legend__desc');
let prices = document.querySelectorAll('.legend__price');

legendItem.forEach(function (item, index) {
    item.addEventListener('mouseover', function () {
        unitsList[index].classList.add('hovered');
    });

    item.addEventListener('mouseout', function () {
        unitsList[index].classList.remove('hovered');
    });
});

btn.addEventListener('click', (evt) => {
    let purchase = {};
    evt.preventDefault();
    purchase.name = form.name.value;
    purchase.price = +form.price.value;
    let options = form.selectCategory.options;
    purchase.category = options[form.selectCategory.selectedIndex].innerText;

    for (let category of categories) {
        if (purchase.category == category) {
            category.nextElementSibling.textContent = Number(category.nextElementSibling.innerText) + purchase.price;
        }
    }

    purchaseArray.push(purchase);

    tbody.insertAdjacentHTML('beforeEnd',
        `
            <tr class="purchases__item purchases__row' data-category="product">
                <td class="purchases__td">${purchase.name}</td>
                <td class="purchases__td">${purchase.category}</td>
                <td class="purchases__td">${purchase.price}</td>
                <td class="purchases__td"><i class="purchases__item-del fa-solid fa-xmark"></i></td>
            </tr>
        `   
    )

    form.reset();
});

tbody.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('purchases__item-del')) {
        evt.target.closest('tr').remove();
    }
})

/* btn.addEventListener('click', function (event) {
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
*/
