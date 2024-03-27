const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');

productForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productValue = parseFloat(document.getElementById('productValue').value);
    const productAvailability = document.getElementById('productAvailability').value;

    const product = {
        name: productName,
        description: productDescription,
        value: productValue,
        available: productAvailability === 'sim' ? true : false
    };

    addProductToList(product);
    productForm.reset();
});


//função de adicionar produto
function addProductToList(product) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.value}</td>
        <td>${product.available ? 'Sim' : 'Não'}</td>
            
      `;
    productList.appendChild(row);

    sortProductList();
}

function sortProductList() {
    const rows = Array.from(productList.querySelectorAll('tr'));
    const sortedRows = rows.slice(1).sort((a, b) => {
        const aValue = parseFloat(a.cells[1].textContent);
        const bValue = parseFloat(b.cells[1].textContent);
        return aValue - bValue;
    });

    productList.innerHTML = '';
    productList.appendChild(rows[0]);
    sortedRows.forEach(row => productList.appendChild(row));
}

//addProductToList({ name: 'Produto A', value: 100 });
//addProductToList({ name: 'Produto B', value: 50 });
//addProductToList({ name: 'Produto C', value: 200 });
