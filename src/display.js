const display = (arr) => {
  const displayContainer = document.querySelector('.display');
  const table = document.createElement('table');
  table.className = 'table';

  arr.forEach((obj) => {
    const tbody = document.createElement('tbody');
    tbody.className = 'px-4';
    table.appendChild(tbody);
    tbody.innerHTML = `
                           <tr scope="row">      
                              <td> ${obj.name}:</td>
                              <td> ${obj.score} </td>
                            </tr>
                      
                      `;

    displayContainer.appendChild(table);
  });
};

export { display as default };