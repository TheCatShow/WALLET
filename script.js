let legendItem = document.querySelectorAll('.legend__item');
let unitsList = document.querySelectorAll('.unit');

legendItem.forEach(function (item, index) {
    item.addEventListener('mouseover', function () {
        unitsList[index].classList.add('hovered');
    });

    item.addEventListener('mouseout', function () {
        unitsList[index].classList.remove('hovered');
    });
});

let purchase = {};
let form = {};

purchase.name = form.name.value;
purchase.price = form.price.value;
purchase.category = form.selectCategory.options[form.selectCategory.selectedIndex].innerText;

tbody.insertAdjacentHTML('beforeEnd',
        `
            <tr class="table__row2" data-category="product"
                <td class="name2">${purchase.name}</td>
                <td class="category2">${purchase.category}</td>
                <td class="price2">${purchase.price}</td>
                <td class="delete"><i class="purchases__item-del fa-solid fa-xmark></i></td>
            </tr>
        `

)